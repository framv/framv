#!/usr/bin/env node
/**
 * framv-render — CLI for @framv/runner
 *
 * Usage:
 *   framv-render --url <url> --output <file> --format <fmt> [options]
 *
 * Options:
 *   --url         URL of the page to render (required)
 *   --output      Output file path (required)
 *   --format      Export format: svg|png|jpg|webp|mp4|webm|m4a|ogg (required)
 *   --selector    CSS selector for the element  [default: #framv-root]
 *   --fps         Frames per second              [default: 30]
 *   --quality     Quality 0-1                    [default: 1]
 *   --start       Start time in seconds          [default: 0]
 *   --end         End time in seconds            [default: 5]
 *   --width       Viewport width in pixels       [default: 1920]
 *   --height      Viewport height in pixels      [default: 1080]
 *   --time        Frame time for static exports  [default: 0]
 *   --executable  Path to Chromium/Chrome binary
 *   --help        Show this help message
 *
 * Examples:
 *   framv-render --url http://localhost:3000 --output out.mp4 --format mp4 --end 10
 *   framv-render --url http://localhost:3000/intro/ --output intro.mp4 --format mp4 \
 *     --selector "#framv-canvas" --fps 30 --end 13 --width 1920 --height 1080
 *   framv-render --url http://localhost:3000 --output frame.png --format png --time 2.5
 */

import { render } from "./runner.js";
import type { RunnerOptions } from "./runner.js";
import { resolve } from "path";

// ─── Argument parsing ──────────────────────────────────────────────────────

function parseArgs(argv: string[]): Record<string, string | boolean> {
  const result: Record<string, string | boolean> = {};
  const args = argv.slice(2);

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const next = args[i + 1];
      if (!next || next.startsWith("--")) {
        result[key] = true;
      } else {
        result[key] = next;
        i++;
      }
    }
  }

  return result;
}

const HELP = `
framv-render — headless renderer powered by @framv/runner

Usage:
  framv-render --url <url> --output <file> --format <fmt> [options]

Required:
  --url         URL of the page to render
  --output      Output file path
  --format      Export format: svg | png | jpg | webp | mp4 | webm | m4a | ogg

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
  framv-render --url http://localhost:3000 --output out.mp4 --format mp4 --end 10

  framv-render \\
    --url http://localhost:3000/intro/ \\
    --output intro.mp4 \\
    --format mp4 \\
    --selector "#framv-canvas" \\
    --fps 30 --end 13 --width 1920 --height 1080

  framv-render --url http://localhost:3000 --output frame.png --format png --time 2.5
`.trim();

// ─── Main ──────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const args = parseArgs(process.argv);

  if (args["help"]) {
    console.log(HELP);
    process.exit(0);
  }

  const url = args["url"] as string | undefined;
  const output = args["output"] as string | undefined;
  const format = args["format"] as string | undefined;

  if (!url || !output || !format) {
    console.error("Error: --url, --output, and --format are required.\n");
    console.error(HELP);
    process.exit(1);
  }

  const validFormats = ["svg", "png", "jpg", "webp", "mp4", "webm", "m4a", "ogg"];
  if (!validFormats.includes(format)) {
    console.error(`Error: invalid --format "${format}". Must be one of: ${validFormats.join(", ")}`);
    process.exit(1);
  }

  const opts: RunnerOptions = {
    url,
    output: resolve(output),
    format: format as RunnerOptions["format"],
    selector: (args["selector"] as string) ?? "#framv-root",
    fps: args["fps"] ? parseFloat(args["fps"] as string) : 30,
    quality: args["quality"] ? parseFloat(args["quality"] as string) : 1,
    start: args["start"] ? parseFloat(args["start"] as string) : 0,
    end: args["end"] ? parseFloat(args["end"] as string) : 5,
    width: args["width"] ? parseInt(args["width"] as string) : undefined,
    height: args["height"] ? parseInt(args["height"] as string) : undefined,
    time: args["time"] ? parseFloat(args["time"] as string) : 0,
    executablePath: args["executable"] as string | undefined,
    onProgress: (p) => {
      const pct = (p * 100).toFixed(1);
      process.stdout.write(`\r  ${pct}%`);
    },
  };

  const isVideo = ["mp4", "webm", "m4a", "ogg"].includes(format);
  const duration = opts.end! - opts.start!;
  const info = isVideo ? `${opts.start}s–${opts.end}s (${duration}s @ ${opts.fps}fps)` : `t=${opts.time}s`;

  console.log(`\nframv-render`);
  console.log(`  url:      ${url}`);
  console.log(`  output:   ${opts.output}`);
  console.log(`  format:   ${format}  ${info}`);
  if (opts.width || opts.height) {
    console.log(`  size:     ${opts.width ?? "auto"} × ${opts.height ?? "auto"}`);
  }
  console.log();

  const t0 = Date.now();

  try {
    await render(opts);

    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    process.stdout.write(`\r  100.0%\n`);
    console.log(`\n  ✓ rendered in ${elapsed}s → ${opts.output}\n`);
  } catch (err) {
    process.stdout.write("\n");
    console.error(`\n  ✗ render failed: ${(err as Error).message}\n`);
    process.exit(1);
  }
}

main();
