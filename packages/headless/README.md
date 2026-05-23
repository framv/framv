# @framv/headless

Puppeteer-based CLI renderer for server-side HTML/SVG → video/image export.

## Install

```bash
npm install @framv/headless
```

## CLI

```bash
npx framv --url http://localhost:3000/page.html --output out/video.mp4 --format mp4 --end 5
npx framv --url http://localhost:3000/page.html --output out/screenshot.png --format png
```

## Options

| Flag | Default | Description |
|------|---------|-------------|
| `--url` | required | URL to render |
| `--output` | required | Output file path |
| `--format` | required | mp4, webm, png, jpg, webp, svg, m4a, ogg |
| `--selector` | `#framv-root` | CSS selector |
| `--fps` | 30 | Frames per second |
| `--start` | 0 | Start time (seconds) |
| `--end` | 5 | End time (seconds) |
| `--width` | 1920 | Viewport width |
| `--height` | 1080 | Viewport height |
| `--quality` | 1 | Quality 0–1 |
| `--time` | 0 | Seek time for static exports |

## Programmatic

```ts
import { render } from "@framv/headless";

await render({
  url: "http://localhost:3000/page.html",
  output: "out/render.mp4",
  format: "mp4",
  selector: "#framv-root",
  fps: 30,
  end: 5,
  width: 800,
  height: 600,
});
```
