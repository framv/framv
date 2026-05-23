# framv

Declarative HTML office suite — render **video, documents, slides, and spreadsheets** directly in the browser. AI-generated, client-side, no build tools.

```html
<framv-video width="800" height="600" fps="30" duration="4" controls>
  <div style="background:linear-gradient(135deg,#667eea,#764ba2);...">
    <h1 style="animation:fadeIn 0.6s ease both">Hello framv</h1>
  </div>
</framv-video>
```

## Packages

| Package                                | Custom Element                     | Description                                                         |
| -------------------------------------- | ---------------------------------- | ------------------------------------------------------------------- |
| [`@framv/core`](packages/core)         | —                                  | Engine: freeze, render, export (html2canvas, mediabunny, WebCodecs) |
| [`@framv/video`](packages/video)       | `<framv-video>`                    | HTML/CSS/SVG → MP4/WebM with playback and export                    |
| [`@framv/docs`](packages/docs)         | `<framv-docs>`                     | Multi-page documents → PDF with A4 pagination                       |
| [`@framv/slides`](packages/slides)     | `<framv-slides>` + `<framv-slide>` | Slideshow presentations → PDF/MP4                                   |
| [`@framv/sheet`](packages/sheet)       | `<framv-sheet>`                    | Spreadsheets with sort, filter, formulas, CSV export                |
| [`@framv/headless`](packages/headless) | —                                  | Puppeteer CLI for server-side rendering                             |

## Quick start (CDN)

Create an `.html` file and open it in your browser. No install, no build step:

```html
<!DOCTYPE html>
<html>
  <body>
    <framv-video width="800" height="600" fps="30" duration="3" controls>
      <style>
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>
      <div style="width:800px;height:600px;background:linear-gradient(135deg,#1a1a2e,#16213e);display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:system-ui">
        <h1 style="color:#ff79c6;font-size:64px;animation:fadeIn 0.6s ease both">framv</h1>
        <p style="color:#fff;font-size:20px;animation:fadeIn 0.6s 0.3s ease both">Pure HTML → MP4</p>
      </div>
    </framv-video>

    <script src="https://cdn.jsdelivr.net/gh/framv/framv@main/packages/core/dist/bundle.iife.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/framv/framv@main/packages/video/dist/bundle.iife.js"></script>
  </body>
</html>
```

## npm install

```bash
npm install @framv/core @framv/video
```

```ts
import { exportElement, settings } from "@framv/core";
import "@framv/video"; // auto-registers <framv-video>
```

## Headless rendering

```bash
npx framv --url http://localhost:3000/page.html --output out/video.mp4 --format mp4 --end 5
```

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

## How it works

1. **Timeline**: `seekElement(t)` → SVG `setCurrentTime` + CSS `animation.currentTime`
2. **Freeze**: `commitStyles()` on source → `cloneNode` → restore source → disable animation on clone → freeze SMIL `animVal`
3. **Render**: HTML via `html2canvas`, SVG via `XMLSerializer` → dataURL → `OffscreenCanvas`
4. **Encode**: `VideoFrame` from `ImageData` → `mediabunny` (WebCodecs) → MP4/WebM
5. **Audio**: `AudioContext.decodeAudioData` → PCM extraction per frame → muxed into output

## Development

```bash
npm install            # install all workspace dependencies
npm run build          # tsc + esbuild for all packages
npm test               # vitest (24 tests)
npm run dev            # serve examples/ on port 3000
npm run clean          # remove dist and tsbuildinfo
```

## License

MIT
