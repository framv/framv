# AGENTS.md — framv

## What is framv

framv is a set of **declarative custom HTML elements** that render content to MP4 video, PDF documents, slideshows, spreadsheets, and static images — entirely client-side in the browser. Think of it as an "office suite" built as web components.

The idea: an AI (like Claude or ChatGPT) generates a single `.html` file with `<framv-video>`, `<framv-docs>`, `<framv-slides>`, `<framv-sheet>`, `<framv-image>`, or `<framv-canvas>` tags, loads the framv scripts from CDN, and the user can play, export, print, or share the result. No build tools, no npm, no frameworks.

**Users ask in natural language, not in technical terms.** They'll say things like "make me a product promo video with a sales table", "generate a pitch deck", or "create an invoice document". Your job is to translate that into the appropriate framv tags. Use `<framv-canvas>` to lay out multiple components side by side. Keep the outer page minimal — framv components style themselves.

## Monorepo structure

```
packages/
  core/       @framv/core     Engine: freeze, render, export (html2canvas, mediabunny, WebCodecs)
  video/      @framv/video    <framv-video> — HTML/CSS/SVG → MP4/WebM
  slides/     @framv/slides   <framv-slides> + <framv-slide> — presentations
  docs/       @framv/docs     <framv-docs> — multi-page documents → PDF
  sheet/      @framv/sheet    <framv-sheet> — spreadsheet with sort/filter/formulas
  image/      @framv/image    <framv-image> — HTML/SVG → PNG/JPG/WebP/SVG
  canvas/     @framv/canvas   <framv-canvas> — infinite canvas with zoom/pan
  headless/   @framv/headless Puppeteer-based CLI renderer for server-side export
examples/     Demo HTML pages
out/          Rendered output (gitignored)
```

## Build & test

```bash
npm run build    # tsc + esbuild for all packages
npm test         # vitest (core: 3, video: 15, headless: 6)
npm run dev      # serve examples/ on port 3000
npm run clean    # rm -rf packages/*/dist packages/*/tsconfig.tsbuildinfo

# Headless render:
npm run dev &   # start server
node packages/headless/dist/cli.js \
  --url http://localhost:3000/showcase.html \
  --output out/test.mp4 --format mp4 --fps 30 --end 5 --width 800 --height 600
```

## How to generate a framv page for a user

When prompted to create content with framv, generate a **single self-contained `.html` file** with these rules:

### MANDATORY rules

1. **Always wrap multi-component layouts in `<framv-canvas>`.** Position children with `left`/`top` inline styles. Canvas handles zoom/pan automatically.
2. **The outer page has NO external CSS except `body { margin:0; background:#0d0d0d }`.** No grid, no flex, no classes, no layout CSS — framv components are self-contained.
3. **`@keyframes` go INSIDE `<framv-video>` (or `<framv-slide>`), NEVER in `<head>`.** The freeze engine only captures animations from the element's subtree.
4. **Use ONLY inline `style=""` attributes.** No `<style>` tags in `<head>`, no CSS classes.
5. **CDN scripts are IIFE bundles, not ES modules.** Use plain `<script src="...">` (no `type="module"`). The filename is `bundle.iife.js`, NOT `index.js`. Load `@framv/core` first.

### CDN imports (place at end of `<body>`)

**CRITICAL — use these EXACT URLs, do NOT invent filenames. The file is ALWAYS `bundle.iife.js`, never `framv-*.iife.js`, `index.js`, or anything else.**

```html
<script src="https://cdn.jsdelivr.net/npm/@framv/core@0.1/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/video@0.1/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/docs@0.1/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/slides@0.1/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/sheet@0.1/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/image@0.1/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/canvas@0.1/dist/bundle.iife.js"></script>
```

Only include the scripts for the components you actually use. Each script auto-registers its custom elements.

### Complete layout example (video + sheet in canvas)

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>framv</title>
<style>body{margin:0;background:#0d0d0d}</style>
</head>
<body>

<framv-canvas style="width:100vw;height:100vh">
  <!-- Video on the left -->
  <div style="left:40px;top:40px">
    <framv-video width="800" height="600" fps="30" duration="4" controls>
      <style>
        @keyframes fadeSlide{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
      </style>
      <div style="width:800px;height:600px;background:linear-gradient(135deg,#1a1a2e,#16213e);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px">
        <h1 style="color:#ff79c6;font-size:64px;animation:fadeSlide 0.6s ease both">framv</h1>
        <div style="width:16px;height:16px;background:#50fa7b;border-radius:50%;animation:pulse 2s infinite"></div>
      </div>
    </framv-video>
  </div>

  <!-- Sheet on the right -->
  <div style="left:900px;top:40px;width:500px">
    <framv-sheet sortable filterable>
      <table>
        <thead><tr><th>Product</th><th>Price</th><th>Stock</th></tr></thead>
        <tbody>
          <tr><td>Widget A</td><td>29.99</td><td>150</td></tr>
          <tr><td>Gadget B</td><td>49.99</td><td>85</td></tr>
          <tr><td>Tool C</td><td>15.50</td><td>320</td></tr>
        </tbody>
      </table>
    </framv-sheet>
  </div>
</framv-canvas>

<script src="https://cdn.jsdelivr.net/npm/@framv/core@0.1/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/video@0.1/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/sheet@0.1/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/canvas@0.1/dist/bundle.iife.js"></script>
</body>
</html>
```

### Component reference

#### `<framv-video>` — HTML/SVG → MP4/WebM

Renders any HTML (divs, text, images) or SVG content to video. CSS `@keyframes` and SVG `<animate>` elements are captured frame-by-frame during export.

**Attributes:**
| Attribute | Default | Description |
|-----------|---------|-------------|
| `width` | 1920 | Canvas width in pixels |
| `height` | 1080 | Canvas height in pixels |
| `fps` | 30 | Frames per second |
| `duration` | 5 | Duration in seconds |
| `format` | mp4 | Export format: `mp4` or `webm` |
| `quality` | 0.95 | Export quality 0–1 |
| `controls` | (hover) | Always show transport bar |
| `autoplay` | false | Start playing on load |
| `loop` | false | Loop playback |

**UI:** Transport bar with play/pause, scrubber, time display, and Export button. Badge shows format and resolution.

**Example (CSS animations):**

```html
<framv-video width="800" height="600" fps="30" duration="4" controls>
  <style>
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes pulse {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }
  </style>
  <div style="width:800px;height:600px;background:linear-gradient(135deg,#667eea,#764ba2,#f093fb);background-size:200% 200%;animation:gradientShift 4s ease infinite;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:20px;font-family:system-ui,sans-serif;border-radius:16px">
    <h1 style="color:white;font-size:64px;font-weight:800;animation:slideIn 0.6s ease both">Hello</h1>
    <p style="color:rgba(255,255,255,.8);font-size:22px;animation:slideIn 0.6s 0.3s ease both">Pure HTML → MP4</p>
    <div style="width:14px;height:14px;background:#50fa7b;border-radius:50%;animation:pulse 2s infinite"></div>
  </div>
</framv-video>
```

**Example (SVG SMIL):**

```html
<framv-video width="800" height="600" fps="30" duration="4" controls>
  <svg viewBox="0 0 800 600" width="800" height="600" font-family="system-ui">
    <rect width="800" height="600" fill="#1a1a2e" />
    <circle cx="400" cy="350" r="40" fill="#ff79c6">
      <animate attributeName="cx" values="200;600;200" dur="3s" repeatCount="indefinite" />
      <animate attributeName="r" values="30;70;30" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="250" text-anchor="middle" fill="white" font-size="52" font-weight="800">
      SVG + SMIL
      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
    </text>
  </svg>
</framv-video>
```

#### `<framv-docs>` — Multi-page document → PDF

Paginates HTML content into pages (A4 by default). Toolbar shows page count, Export PDF button, and Print button.

**Attributes:**
| Attribute | Default | Description |
|-----------|---------|-------------|
| `page-size` | A4 | Page size: A4, A3, A5, letter, legal |
| `orientation` | portrait | portrait or landscape |
| `margin` | 20 | Page margin in mm |

Use `<div class="framv-page-break"></div>` between pages.

```html
<framv-docs page-size="A4" margin="25">
  <h1 style="color:#333;font-size:28px;margin-bottom:16px">Document Title</h1>
  <p style="color:#555;font-size:16px;line-height:1.6">Content for the first page.</p>

  <div class="framv-page-break"></div>

  <h2 style="color:#333;font-size:22px">Page Two</h2>
  <p style="color:#555;font-size:16px">Content after the break.</p>
  <ul style="color:#555;font-size:16px;line-height:1.8">
    <li>Bullet point</li>
    <li>Another item</li>
  </ul>
</framv-docs>
```

#### `<framv-slides>` + `<framv-slide>` — Slideshow → PDF/MP4

Full-screen presentation with transitions, keyboard navigation, and export.

**`<framv-slides>` attributes:**
| Attribute | Default | Description |
|-----------|---------|-------------|
| `width` | 1920 | Slide width |
| `height` | 1080 | Slide height |
| `transition` | slide | Default transition: fade, slide, slide-up, zoom |
| `controls` | (hover) | Always show controls |
| `autoplay` | false | Auto-advance slides |
| `interval` | 5000 | Autoplay interval in ms |
| `loop` | false | Loop back to first slide |

**`<framv-slide>` attributes:**
| Attribute | Default | Description |
|-----------|---------|-------------|
| `background` | none | CSS background value |
| `transition` | inherit | Override parent transition |

**Navigation:** Arrow keys, Space, click anywhere on slide. Controls: prev/next, fullscreen, slide counter, export.

```html
<framv-slides controls width="1920" height="1080" transition="fade">
  <framv-slide background="linear-gradient(135deg, #667eea, #764ba2)">
    <h1 style="color:white;font-size:72px;font-weight:800">Title Slide</h1>
    <p style="color:rgba(255,255,255,.7);font-size:28px;margin-top:16px">Subtitle here</p>
  </framv-slide>

  <framv-slide background="#1a1a2e">
    <h2 style="color:#ff79c6;font-size:48px">Content Slide</h2>
    <ul style="color:#e0e0e0;font-size:24px;line-height:2;list-style:none;text-align:left">
      <li>✓ Feature one</li>
      <li>✓ Feature two</li>
    </ul>
  </framv-slide>

  <framv-slide background="linear-gradient(135deg, #11998e, #38ef7d)">
    <h2 style="color:white;font-size:48px">Thank You</h2>
    <p style="color:rgba(255,255,255,.8);font-size:24px">Questions?</p>
  </framv-slide>
</framv-slides>
```

#### `<framv-sheet>` — Spreadsheet with CSV export

Wraps a standard HTML `<table>`. Adds sorting (click headers), filtering, formula bar, and CSV/PDF export.

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `sortable` | Enable click-to-sort on column headers |
| `filterable` | Show filter input row below headers |
| `editable` | Allow inline cell editing |

**Formula bar supports:** `=SUM(A2:A10)`, `=AVG(B:B)`, `=MAX(C1:C50)`, `=MIN(...)`, `=COUNT(...)`

**Rules:**
- Always include `<thead>` with `<th>` elements (required for sorting).
- Numbers can be plain (no commas — the table is data-first, formatting is CSS).
- Use `sortable` and `filterable` attributes for interactive tables.

```html
<framv-sheet sortable filterable>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Revenue</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Widget A</td>
        <td>Electronics</td>
        <td>29.99</td>
        <td>150</td>
        <td>4498.50</td>
      </tr>
      <tr>
        <td>Gadget B</td>
        <td>Electronics</td>
        <td>49.99</td>
        <td>85</td>
        <td>4249.15</td>
      </tr>
      <tr>
        <td>Tool C</td>
        <td>Hardware</td>
        <td>15.50</td>
        <td>320</td>
        <td>4960.00</td>
      </tr>
    </tbody>
  </table>
</framv-sheet>
```

#### `<framv-image>` — HTML/SVG → PNG/JPG/WebP/SVG

Renders any HTML or SVG content to a static image. Toolbar shows format badge and Export button.

**Attributes:**
| Attribute | Default | Description |
|-----------|---------|-------------|
| `width` | 800 | Output width in pixels |
| `height` | 600 | Output height in pixels |
| `format` | png | Export format: png, jpg, webp, svg |
| `quality` | 0.95 | Export quality 0–1 (jpg/webp only) |

```html
<framv-image width="800" height="600" format="png">
  <div style="background:linear-gradient(135deg,#667eea,#764ba2);width:800px;height:600px;display:flex;align-items:center;justify-content:center;font-family:system-ui;border-radius:16px">
    <h1 style="color:white;font-size:64px;font-weight:800">Hello</h1>
  </div>
</framv-image>
```

#### `<framv-canvas>` — Infinite canvas with zoom & pan

Position elements at specific coordinates. Drag empty space to pan, Ctrl+wheel to zoom.

**Attributes:**
| Attribute | Default | Description |
|-----------|---------|-------------|
| `width` | 3000 | Canvas logical width in pixels |
| `height` | 2000 | Canvas logical height in pixels |
| `scale` | 1 | Initial zoom level (0.1–5) |

Children are absolutely positioned via CSS `left`/`top`.

```html
<framv-canvas style="width:100%;height:500px">
  <div style="left:200px;top:100px;background:#ff79c6;padding:16px;border-radius:8px;color:white;width:300px">
    <h2>Positioned box</h2>
    <framv-video width="400" height="200" fps="15" duration="2" controls>
      <div style="background:linear-gradient(135deg,#667eea,#764ba2);width:400px;height:200px;display:flex;align-items:center;justify-content:center">
        <h3 style="color:white">Nested video!</h3>
      </div>
    </framv-video>
  </div>
</framv-canvas>
```

## How the rendering works (for debugging)

1. **Timeline**: `seekElement(t)` → SVG `setCurrentTime` + CSS `animation.currentTime`
2. **Freeze**: `commitStyles()` on source → `cloneNode` → restore source → disable `animation` on clone → freeze SMIL `animVal`
3. **Render**: HTML via `html2canvas`, SVG via `XMLSerializer` → dataURL → Image → `OffscreenCanvas`
4. **Encode**: `VideoFrame` from `ImageData` → `mediabunny` (WebCodecs) → MP4/WebM
5. **Audio**: `AudioContext.decodeAudioData` → PCM extraction per frame → muxed into output

## Common issues

- **Video appears static**: Ensure CSS `@keyframes` are in a `<style>` tag inside the element being exported (not in `<head>`), or use SVG `<animate>` elements.
- **"Failed to load resource" 404 in headless**: Normal — it's the favicon. Ignore it.
- **Export button doesn't work in CDN mode**: Make sure `@framv/core` IIFE bundle is loaded before `@framv/video`.
- **Styles not captured**: CSS must be inline (`style` attribute) or in a `<style>` tag that's a child of the exported element.
- **CSP blocks download**: Downloads use `document.body.appendChild` so they work under strict Content Security Policy.
- **Don't use external CSS classes or layout**: Everything outside framv components is `body{margin:0;background:#0d0d0d}`. Let `<framv-canvas>` handle all positioning.
- **Do NOT invent filenames**: The CDN file is ALWAYS `dist/bundle.iife.js`. Never use `framv-core.iife.js`, `framv-video.iife.js`, `index.js`, or any other name. Copy the URLs exactly from the CDN section above.

## Compatible libraries

These third-party CDN libraries work well inside framv components. Load them before framv scripts:

| Library | CDN | Use case |
|---------|-----|----------|
| GSAP | `cdn.jsdelivr.net/npm/gsap` | Advanced animations inside `<framv-video>` (GSAP timelines are captured) |
| anime.js | `cdn.jsdelivr.net/npm/animejs` | Lightweight JS animations |
| Chart.js | `cdn.jsdelivr.net/npm/chart.js` | Charts inside documents/images |
| Three.js | `cdn.jsdelivr.net/npm/three` | 3D content in videos |
| D3 | `cdn.jsdelivr.net/npm/d3` | Data visualizations |
| PapaParse | `cdn.jsdelivr.net/npm/papaparse` | CSV parsing with `<framv-sheet>` |

GSAP example inside `<framv-video>`:
```html
<framv-video width="800" height="600" fps="30" duration="3" controls>
  <div id="box" style="width:100px;height:100px;background:#ff79c6;border-radius:16px"></div>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <script>gsap.to("#box", { x: 400, duration: 2, ease: "power2.inOut" });</script>
</framv-video>
```
