#!/usr/bin/env node
import { parseArgs } from "util";
import { resolve } from "path";
import { render } from "./runner.js";
import type { RunnerOptions } from "./runner.js";

const VALID_FORMATS = ["svg", "png", "jpg", "webp", "mp4", "webm", "m4a", "ogg", "pdf", "docx", "xlsx", "pptx"] as const;

const HELP = `
framv — headless renderer powered by @framv/headless

Usage:
  framv --url <url> --output <file> --format <fmt> [options]

Required:
  --url         URL of the page to render
  --output      Output file path
  --format      Export format: svg | png | jpg | webp | mp4 | webm | m4a | ogg | pdf | docx | pptx | xlsx

Options:
  --selector    CSS selector for the element to render  [default: #framv-root]
  --fps         Frames per second for video export      [default: 30]
  --quality     Quality 0–1 for lossy formats           [default: 1]
  --start       Start time in seconds                   [default: 0]
  --end         End time in seconds                     [default: 5]
  --width       Viewport / output width in pixels       [default: 1920]
  --height      Viewport / output height in pixels      [default: 1080]
  --time        Seek time (seconds) for static exports  [default: 0]
  --executable  Path to a Chromium/Chrome binary
  --help        Show this help message

Examples:
  framv --url http://localhost:3000 --output out.mp4 --format mp4 --end 10

  framv \\
    --url http://localhost:3000/intro/ --output intro.mp4 --format mp4 \\
    --selector "#framv-canvas" --fps 30 --end 13 --width 1920 --height 1080

  framv --url http://localhost:3000 --output frame.png --format png --time 2.5
`.trim();

async function main(): Promise<void> {
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      url: { type: "string" },
      output: { type: "string" },
      format: { type: "string" },
      selector: { type: "string" },
      fps: { type: "string" },
      quality: { type: "string" },
      start: { type: "string" },
      end: { type: "string" },
      width: { type: "string" },
      height: { type: "string" },
      time: { type: "string" },
      executable: { type: "string" },
      help: { type: "boolean", short: "h" },
    },
    strict: false,
  });

  if (values.help) {
    console.log(HELP);
    process.exit(0);
  }

  const str = (v: unknown) => (typeof v === "string" ? v : undefined);
  const url = str(values.url);
  const output = str(values.output);
  const format = str(values.format);

  if (!url || !output || !format) {
    console.error("Error: --url, --output, and --format are required.\n");
    console.error(HELP);
    process.exit(1);
  }

  if (!VALID_FORMATS.includes(format as (typeof VALID_FORMATS)[number])) {
    console.error(`Error: invalid --format "${format}". Must be one of: ${VALID_FORMATS.join(", ")}`);
    process.exit(1);
  }

  const opts: RunnerOptions = {
    url,
    output: resolve(output),
    format: format as RunnerOptions["format"],
    selector: str(values.selector),
    fps: str(values.fps) ? parseFloat(str(values.fps)!) : undefined,
    quality: str(values.quality) ? parseFloat(str(values.quality)!) : undefined,
    start: str(values.start) ? parseFloat(str(values.start)!) : undefined,
    end: str(values.end) ? parseFloat(str(values.end)!) : undefined,
    width: str(values.width) ? parseInt(str(values.width)!) : undefined,
    height: str(values.height) ? parseInt(str(values.height)!) : undefined,
    time: str(values.time) ? parseFloat(str(values.time)!) : undefined,
    executablePath: str(values.executable),
    onProgress: (p) => process.stdout.write(`\r  ${(p * 100).toFixed(1)}%`),
  };

  const isVideo = ["mp4", "webm", "m4a", "ogg"].includes(format);
  const start = opts.start ?? 0;
  const end = opts.end ?? 5;
  const info = isVideo ? `${start}s–${end}s (${end - start}s @ ${opts.fps ?? 30}fps)` : `t=${opts.time ?? 0}s`;

  console.log(`\nframv`);
  console.log(`  url:    ${url}`);
  console.log(`  output: ${opts.output}`);
  console.log(`  format: ${format}  ${info}`);
  if (opts.width || opts.height) console.log(`  size:   ${opts.width ?? "auto"} × ${opts.height ?? "auto"}`);
  console.log();

  const t0 = Date.now();
  try {
    await render(opts);
    process.stdout.write(`\r  100.0%\n`);
    console.log(`\n  ✓ rendered in ${((Date.now() - t0) / 1000).toFixed(1)}s → ${opts.output}\n`);
  } catch (err) {
    process.stdout.write("\n");
    console.error(`\n  ✗ render failed: ${(err as Error).message}\n`);
    process.exit(1);
  }
}

main();
