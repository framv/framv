/**
 * render.js — headless renderer for framv video compositions.
 *
 * Uses @framv/runner to open each composition in Puppeteer, scrub through
 * all frames, and export the result to an MP4 file.
 *
 * Usage:
 *   node render.js                         # renders all compositions
 *   node render.js intro                   # renders a specific composition by name
 *   node render.js intro --format png      # renders a single frame as PNG
 *
 * Prerequisites:
 *   1. Start the dev server:  npm run dev
 *   2. Run this script:       npm run render
 */

import { render } from "../packages/headless/dist/index.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Composition registry ──────────────────────────────────────────────────

const COMPOSITIONS = [
  {
    name: "intro",
    url: "http://localhost:3000/intro/",
    selector: "#framv-canvas",
    format: "mp4",
    fps: 30,
    quality: 1,
    start: 0,
    end: 13, // 390 frames / 30fps
    width: 1920,
    height: 1080,
    output: join(__dirname, "out", "intro.mp4"),
  },
];

// ─── CLI args ──────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const nameFilter = args.find((a) => !a.startsWith("--"));
const formatFlag = args.indexOf("--format");
const formatOverride = formatFlag !== -1 ? args[formatFlag + 1] : null;

const targets = COMPOSITIONS.filter((c) => !nameFilter || c.name === nameFilter).map((c) => ({
  ...c,
  ...(formatOverride ? { format: formatOverride } : {}),
  ...(formatOverride === "png" ? { output: c.output.replace(/\.\w+$/, ".png") } : {}),
}));

if (targets.length === 0) {
  console.error(`No composition found matching: ${nameFilter}`);
  console.error(`Available: ${COMPOSITIONS.map((c) => c.name).join(", ")}`);
  process.exit(1);
}

// ─── Render ────────────────────────────────────────────────────────────────

for (const comp of targets) {
  console.log(`\nRendering ${comp.name} → ${comp.output}`);
  console.log(`  format: ${comp.format}  fps: ${comp.fps}  ${comp.start}s–${comp.end}s  ${comp.width}×${comp.height}`);

  const start = Date.now();

  await render(comp);

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`  ✓ done in ${elapsed}s`);
}
