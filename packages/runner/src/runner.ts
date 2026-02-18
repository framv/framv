import type { ExportSettings } from "@framv/core";
import { createRequire } from "module";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _require = createRequire(import.meta.url);
const _dirname = dirname(fileURLToPath(import.meta.url));

/** Resolve the absolute path to @framv/core's dist directory. */
function resolveCoreDistDir(): string {
  // Resolve the main entry of @framv/core (e.g. .../node_modules/@framv/core/dist/index.js)
  // then walk up to the dist directory.
  const coreMain = _require.resolve("@framv/core");
  return dirname(coreMain);
}

/**
 * Options for the headless renderer.
 *
 * The runner opens `url` in a headless Chromium browser, injects
 * `@framv/core` into the page, then calls `exportElement` and writes
 * the result to `output`.
 */
export interface RunnerOptions {
  /** URL of the page to render. */
  url: string;
  /** Absolute or relative path to write the output file. */
  output: string;
  /** CSS selector for the element to render. Defaults to `#framv-root`. */
  selector?: string;
  /** Explicit path to a Chromium/Chrome executable. */
  executablePath?: string;
  /** Export format. */
  format: ExportSettings["format"];
  /** Frames per second for video export. Defaults to 30. */
  fps?: number;
  /** Quality 0–1 for lossy formats. Defaults to 1. */
  quality?: number;
  /** Start time in seconds for video/audio export. Defaults to 0. */
  start?: number;
  /** End time in seconds for video/audio export. Defaults to 5. */
  end?: number;
  /** Width override in pixels. */
  width?: number;
  /** Height override in pixels. */
  height?: number;
  /** Time in seconds to seek to for static image export. Defaults to 0. */
  time?: number;
  /** Progress callback called with a 0–1 value as frames are rendered. */
  onProgress?: (progress: number) => void;
}

/**
 * Launch a headless browser, navigate to `options.url`, inject `@framv/core`,
 * render the target element, and write the result to disk.
 *
 * The page may optionally expose `window.setFramvFrame(frameNumber)` which
 * the runner will call before capturing each frame — useful for custom
 * frame-driven animations (e.g. the framv video compositions).
 *
 * @example
 * ```ts
 * import { render } from '@framv/runner';
 *
 * await render({
 *   url: 'http://localhost:3000/intro/',
 *   output: './out/intro.mp4',
 *   selector: '#framv-canvas',
 *   format: 'mp4',
 *   fps: 30,
 *   start: 0,
 *   end: 13,
 *   width: 1920,
 *   height: 1080,
 * });
 * ```
 */
export async function render(options: RunnerOptions): Promise<void> {
  const { url, output, selector = "#framv-root", executablePath, format, fps = 30, quality = 1, start = 0, end = 5, time = 0, width, height, onProgress } = options;

  const puppeteer = await import("puppeteer");
  const fs = await import("fs/promises");

  const viewportWidth = width ?? 1920;
  const viewportHeight = height ?? 1080;
  const totalFrames = Math.ceil((end - start) * fps);
  const coreDistDir = resolveCoreDistDir();

  const browser = await puppeteer.default.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-webgl", "--use-gl=angle", "--allow-file-access-from-files", "--disable-web-security"],
    executablePath,
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: viewportWidth, height: viewportHeight });
    await page.goto(url, { waitUntil: "networkidle0" });

    // Inject @framv/core into the page as an ES module, exposing it on
    // window.__framvCore so page.evaluate can call exportElement directly.
    await page.addScriptTag({
      type: "module",
      content: `
        import * as core from "file://${coreDistDir}/index.js";
        window.__framvCore = core;
      `,
    });

    // Wait for the injection to complete.
    await page.waitForFunction(() => typeof (window as unknown as Record<string, unknown>).__framvCore !== "undefined");

    // Also wait for the page's own framv setup if it exposes window.framv.
    // This is optional — the runner works even if window.framv is not present.
    await page
      .waitForFunction(() => typeof (window as unknown as Record<string, unknown>).framv !== "undefined", { timeout: 5000 })
      .catch(() => {
        // Page doesn't expose window.framv — that's fine.
      });

    // Forward progress events from the page to the Node.js onProgress callback.
    if (onProgress) {
      await page.exposeFunction("__framvOnProgress", onProgress);
    }

    const result = await page.evaluate(
      async (
        sel: string,
        cfg: {
          format: string;
          fps: number;
          quality: number;
          start: number;
          end: number;
          time: number;
          width?: number;
          height?: number;
        },
        frames: number,
        hasProgressCb: boolean
      ) => {
        const win = window as unknown as {
          __framvCore: {
            exportElement: (opts: unknown) => Promise<Blob>;
            settings: (format: string, config: unknown) => unknown;
          };
          setFramvFrame?: (frame: number) => Promise<void>;
          __framvOnProgress?: (progress: number) => void;
        };

        const { exportElement, settings: createSettings } = win.__framvCore;

        const element = document.querySelector(sel);
        if (!element) throw new Error(`Element not found: ${sel}`);

        const blob = await exportElement({
          element,
          settings: createSettings(cfg.format, cfg),
          onProgress: async (progress: number) => {
            if (hasProgressCb && win.__framvOnProgress) {
              win.__framvOnProgress(progress);
            }

            // If the page exposes setFramvFrame, call it so custom frame-driven
            // animations (e.g. the framv video compositions) can seek to the
            // correct frame before this frame is captured.
            if (win.setFramvFrame) {
              const currentFrame = Math.floor(progress * frames);
              await win.setFramvFrame(currentFrame);
              // Let the browser paint the seeked frame before capture.
              await new Promise<void>((r) => requestAnimationFrame(() => r()));
              await new Promise<void>((r) => requestAnimationFrame(() => r()));
            }
            return true;
          },
        });

        const buffer = await blob.arrayBuffer();
        return Array.from(new Uint8Array(buffer));
      },
      selector,
      { format, fps, quality, start, end, time, width, height },
      totalFrames,
      Boolean(onProgress)
    );

    await fs.writeFile(output, Buffer.from(result));
  } finally {
    await browser.close();
  }
}
