import { AudioSampleSource, getFirstEncodableAudioCodec, Mp4OutputFormat, Output, QUALITY_HIGH, QUALITY_LOW, QUALITY_MEDIUM, QUALITY_VERY_HIGH, StreamTarget, VideoSample, VideoSampleSource, WebMOutputFormat } from "mediabunny";
import { ElementFreezer } from "./freezer";
import { ElementRenderer } from "./renderer";
import { ExportSettings } from "./types";

export class ElementExporter {
  private freezer = new ElementFreezer();
  private renderer = new ElementRenderer();

  async export(element: HTMLElement | SVGSVGElement, settings: ExportSettings, onProgress?: (progress: number) => boolean | Promise<boolean>): Promise<Blob> {
    const { format, quality = 1, fps = 30, time, start = 0, end = 5, width, height } = settings;

    switch (format) {
      case "svg":
        return this.exportSvg(element as SVGSVGElement);
      case "png":
      case "jpg":
      case "webp":
        return this.exportImage(element, format, time || 0, quality, width, height);
      case "webm":
      case "mp4":
        return this.exportVideo(element, format, quality, fps, start, end, true, onProgress, width, height);
      case "m4a":
      case "ogg":
        return this.exportAudio(element, format, quality, fps, start, end, onProgress);
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
  }

  private exportSvg(element: SVGSVGElement): Promise<Blob> {
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(element);
    return Promise.resolve(new Blob([svgString], { type: "image/svg+xml" }));
  }

  private async exportImage(element: HTMLElement | SVGSVGElement, format: "png" | "jpg" | "webp", time: number, quality?: number, width?: number, height?: number): Promise<Blob> {
    const frozen = await this.freezer.freezeAll(element);
    const canvas = await this.renderer.renderToCanvas(frozen, width, height);

    const mimeTypes = {
      png: "image/png",
      jpg: "image/jpeg",
      webp: "image/webp",
    };

    return canvas.convertToBlob({ type: mimeTypes[format], quality });
  }

  private async exportVideo(element: HTMLElement | SVGSVGElement, format: "webm" | "mp4", quality: number, fps: number, start: number, end: number, includeVideo: boolean, onProgress?: (progress: number) => boolean | Promise<boolean>, width?: number, height?: number): Promise<Blob> {
    const isWebM = format === "webm";
    const isMP4 = format === "mp4";
    const totalDuration = end - start;
    const totalFrames = Math.ceil(totalDuration * fps);
    // Frame duration is 1/fps, used implicitly in timestamp calculation

    const mediabunnyQuality = quality >= 0.95 ? QUALITY_VERY_HIGH : quality >= 0.8 ? QUALITY_HIGH : quality >= 0.5 ? QUALITY_MEDIUM : QUALITY_LOW;

    const chunks: Uint8Array[] = [];
    const output = new Output({
      format: isMP4 ? new Mp4OutputFormat({ fastStart: "fragmented" }) : new WebMOutputFormat(),
      target: new StreamTarget(
        new WritableStream({
          write: (chunk) => {
            chunks.push(chunk.data);
          },
        })
      ),
    });

    let videoSource: VideoSampleSource | undefined;
    let audioSource: AudioSampleSource | undefined;

    if (includeVideo) {
      // Dimensions are normalized in renderToCanvas

      videoSource = new VideoSampleSource({
        codec: isWebM ? "vp9" : "avc",
        bitrate: mediabunnyQuality,
        keyFrameInterval: 2.0,
        latencyMode: "realtime",
      });
      output.addVideoTrack(videoSource, { frameRate: fps });
    }

    const hasAudio = element.querySelectorAll("audio, video").length > 0;
    if (hasAudio) {
      // Audio context will be created when needed
      audioSource = new AudioSampleSource({
        codec: isWebM ? "opus" : (await getFirstEncodableAudioCodec(["aac", "opus", "pcm-s16"]))!,
        bitrate: mediabunnyQuality,
      });
      output.addAudioTrack(audioSource);
    }

    await output.start();

    for (let i = 0; i < totalFrames; i++) {
      if (onProgress) {
        const shouldContinue = await onProgress((i + 1) / totalFrames);
        if (!shouldContinue) throw new Error("Export cancelled");
      }

      // Frame time is calculated in video encoding timestamp

      if (includeVideo && videoSource) {
        const frozen = await this.freezer.freezeAll(element);
        const canvas = await this.renderer.renderToCanvas(frozen, width, height);
        const ctx = canvas.getContext("2d");
        if (!ctx) continue;

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const videoFrame = new VideoFrame(imageData.data.buffer, {
          format: "RGBA",
          codedWidth: canvas.width,
          codedHeight: canvas.height,
          timestamp: (i / fps) * 1000000,
        });

        await videoSource.add(new VideoSample(videoFrame));
        videoFrame.close();
      }

      if (hasAudio && audioSource) {
        // Audio extraction would go here
        // Simplified for now
      }
    }

    await output.finalize();
    const mimeType = isMP4 ? "video/mp4" : "video/webm";
    return new Blob(chunks as BlobPart[], { type: mimeType });
  }

  private async exportAudio(_element: HTMLElement | SVGSVGElement, _format: "m4a" | "ogg", _quality: number, _fps: number, _start: number, _end: number, _onProgress?: (progress: number) => boolean | Promise<boolean>): Promise<Blob> {
    // Audio-only export implementation
    // Similar to exportVideo but without video track
    throw new Error("Audio export not yet implemented");
  }
}
