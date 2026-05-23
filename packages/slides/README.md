# @framv/slides

`<framv-slides>` + `<framv-slide>` — presentation slideshow with transitions, keyboard navigation, and PDF export.

## Install

```bash
npm install @framv/slides
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@framv/core/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/slides/dist/bundle.iife.js"></script>

<framv-slides controls width="1920" height="1080" transition="fade">
  <framv-slide background="#1a1a2e">
    <h1>Slide 1</h1>
  </framv-slide>
  <framv-slide background="#16213e">
    <h2>Slide 2</h2>
  </framv-slide>
</framv-slides>
```

## `<framv-slides>` attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `width` / `height` | 1920 / 1080 | Slide dimensions |
| `transition` | slide | fade, slide, slide-up, zoom |
| `controls` | — | Always show controls |
| `autoplay` | — | Auto-advance slides |
| `interval` | 5000 | Autoplay interval in ms |
| `loop` | — | Loop back to first slide |

## `<framv-slide>` attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `background` | — | CSS background value |
| `transition` | inherit | Override parent transition |

## Navigation

Arrow keys, Space, click to advance. Fullscreen with F. Export to PDF.
