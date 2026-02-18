import { ExportSettings } from "./types";

export interface RenderOptions extends ExportSettings {
  url: string;
  output: string;
  selector?: string;
  executablePath?: string;
}

export async function renderVideo(options: RenderOptions): Promise<void> {
  const { url, output, selector = "#video-root", ...settings } = options;

  // Dynamically import puppeteer to avoid issues in browser environments
  const puppeteer = await import("puppeteer");
  const fs = await import("fs/promises");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-webgl", "--use-gl=angle", "--allow-file-access-from-files"],
    executablePath: options.executablePath,
  });

  try {
    const page = await browser.newPage();
    const width = settings.width || 1920;
    const height = settings.height || 1080;
    const fps = settings.fps || 30;
    const start = settings.start || 0;
    const end = settings.end || 5;
    const totalFrames = Math.ceil((end - start) * fps);

    await page.setViewport({ width, height });
    await page.goto(url, { waitUntil: "networkidle0" });

    // Wait for @framv/core to be loaded
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.waitForFunction(() => (window as any).framv !== undefined);

    const result = await page.evaluate(
      async (sel, config, frames) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { exportElement, settings: createSettings } = (window as any).framv;
        const element = document.querySelector(sel);
        if (!element) throw new Error(`Element not found: ${sel}`);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const setFrame = (window as any).setFramvFrame;

        const blob = await exportElement({
          element: element as HTMLElement,
          settings: createSettings(config.format, config),
          onProgress: async (progress: number) => {
            if (setFrame) {
              const currentFrame = Math.floor(progress * frames);
              setFrame(currentFrame);
              // Wait for rendering
              await new Promise((r) => requestAnimationFrame(r));
              await new Promise((r) => requestAnimationFrame(r));
            }
            return true;
          },
        });

        const buffer = await blob.arrayBuffer();
        return Array.from(new Uint8Array(buffer));
      },
      selector,
      settings,
      totalFrames
    );

    await fs.writeFile(output, Buffer.from(result));
  } finally {
    await browser.close();
  }
}
