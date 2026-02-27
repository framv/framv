import { AudioSample, AudioSampleSource, getFirstEncodableAudioCodec, Mp4OutputFormat, Output, QUALITY_HIGH, QUALITY_LOW, QUALITY_MEDIUM, QUALITY_VERY_HIGH, StreamTarget, VideoSample, VideoSampleSource, WebMOutputFormat } from "mediabunny";
import { hasAudio, mixAudioFrame } from "./audio.js";
import { ElementFreezer } from "./freezer.js";
import { seekElement, seekMedia, waitMedia } from "./media.js";
import { ElementRenderer } from "./renderer.js";
import { ExportSettings } from "./types.js";

const MIME: Record<string, string> = {
  mp4: "video/mp4",
  webm: "video/webm",
  m4a: "audio/mp4",
  ogg: "audio/ogg",
};

export type TypedExporter = (element: HTMLElement | SVGSVGElement, settings: ExportSettings, core: { freezer: ElementFreezer; renderer: ElementRenderer }) => Promise<Blob>;

// Support sharing the registry across module boundaries or multiple evaluations.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const exporters: Map<string, TypedExporter> = (typeof window !== "undefined" && (window as any).__framvExporters) || new Map<string, TypedExporter>();
if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__framvExporters = exporters;
}

export function registerExporter(format: string, exporter: TypedExporter) {
  exporters.set(format, exporter);
}

export class ElementExporter {
  private freezer = new ElementFreezer();
  private renderer = new ElementRenderer();

  async export(element: HTMLElement | SVGSVGElement, settings: ExportSettings, onProgress?: (progress: number) => boolean | Promise<boolean>): Promise<Blob> {
    const { format, quality = 1, fps = 30, start = 0, end = 5, width, height } = settings;

    switch (format) {
      case "svg":
        return this.exportSvg(element as SVGSVGElement);
      case "png":
      case "jpg":
      case "webp":
        return this.exportImage(element, format, quality, width, height);
      case "webm":
      case "mp4":
        return this.exportMedia(element, format, quality, fps, start, end, true, onProgress, width, height);
      case "m4a":
      case "ogg":
        return this.exportMedia(element, format, quality, fps, start, end, false, onProgress);
      default: {
        const custom = exporters.get(format);
        if (custom) return custom(element, settings, { freezer: this.freezer, renderer: this.renderer });
        throw new Error(`Unsupported format: ${format}`);
      }
    }
  }

  private exportSvg(element: SVGSVGElement): Promise<Blob> {
    const svgString = new XMLSerializer().serializeToString(element);
    return Promise.resolve(new Blob([svgString], { type: "image/svg+xml" }));
  }

  private async exportImage(element: HTMLElement | SVGSVGElement, format: "png" | "jpg" | "webp", quality?: number, width?: number, height?: number): Promise<Blob> {
    const frozen = await this.freezer.freezeAll(element);
    const canvas = await this.renderer.renderToCanvas(frozen, width, height);
    const mime = { png: "image/png", jpg: "image/jpeg", webp: "image/webp" };
    return canvas.convertToBlob({ type: mime[format], quality });
  }

  private async exportMedia(element: HTMLElement | SVGSVGElement, format: "webm" | "mp4" | "m4a" | "ogg", quality: number, fps: number, start: number, end: number, includeVideo: boolean, onProgress?: (progress: number) => boolean | Promise<boolean>, width?: number, height?: number): Promise<Blob> {
    const isMP4 = format === "mp4" || format === "m4a";
    const totalFrames = Math.ceil((end - start) * fps);
    const frameDuration = 1 / fps;
    const mbQuality = quality >= 0.95 ? QUALITY_VERY_HIGH : quality >= 0.8 ? QUALITY_HIGH : quality >= 0.5 ? QUALITY_MEDIUM : QUALITY_LOW;

    const chunks: Uint8Array[] = [];
    const output = new Output({
      format: isMP4 ? new Mp4OutputFormat({ fastStart: "fragmented" }) : new WebMOutputFormat(),
      target: new StreamTarget(
        new WritableStream({
          write: (c) => {
            chunks.push(c.data);
          },
        })
      ),
    });

    let videoSource: VideoSampleSource | undefined;
    if (includeVideo) {
      videoSource = new VideoSampleSource({ codec: isMP4 ? "avc" : "vp9", bitrate: mbQuality, keyFrameInterval: 2.0, latencyMode: "realtime" });
      output.addVideoTrack(videoSource, { frameRate: fps });
    }

    const mediaEls = Array.from(element.querySelectorAll<HTMLMediaElement>("audio, video")).filter((m) => m.src && (m.tagName === "AUDIO" || hasAudio(m as HTMLVideoElement)));

    let audioSource: AudioSampleSource | undefined;
    let audioCtx: AudioContext | undefined;
    if (mediaEls.length > 0) {
      audioCtx = new AudioContext();
      audioSource = new AudioSampleSource({
        codec: isMP4 ? ((await getFirstEncodableAudioCodec(["aac", "opus", "pcm-s16"])) ?? "aac") : "opus",
        bitrate: mbQuality,
      });
      output.addAudioTrack(audioSource);
    }

    await output.start();

    for (const m of mediaEls) await waitMedia(m);
    for (const m of mediaEls) await seekMedia(m, m.duration);
    for (const m of mediaEls) await seekMedia(m, 0);

    for (let i = 0; i < totalFrames; i++) {
      if (onProgress) {
        const ok = await onProgress((i + 1) / totalFrames);
        if (!ok) throw new Error("Export cancelled");
      }

      const frameTime = start + i * frameDuration;
      seekElement(element, frameTime);
      for (const m of mediaEls) await seekMedia(m, frameTime - (parseFloat(m.dataset.mediaStart ?? "0") || 0));

      if (includeVideo && videoSource) {
        const frozen = await this.freezer.freezeAll(element);
        const canvas = await this.renderer.renderToCanvas(frozen, width, height);
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const vf = new VideoFrame(ctx.getImageData(0, 0, canvas.width, canvas.height).data.buffer, {
            format: "RGBA",
            codedWidth: canvas.width,
            codedHeight: canvas.height,
            timestamp: Math.round((i / fps) * 1_000_000),
          });
          await videoSource.add(new VideoSample(vf));
          vf.close();
        }
      }

      if (audioSource && audioCtx) {
        for await (const chunk of mixAudioFrame(mediaEls, frameTime, frameDuration, audioCtx.sampleRate)) {
          await audioSource.add(new AudioSample({ format: "f32", sampleRate: audioCtx.sampleRate, numberOfChannels: 2, ...chunk }));
        }
      }
    }

    await output.finalize();
    if (audioCtx) await audioCtx.close();

    return new Blob(chunks as BlobPart[], { type: MIME[format] });
  }
}
