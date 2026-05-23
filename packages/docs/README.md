# @framv/docs

`<framv-docs>` — multi-page document container that paginates HTML content into A4 pages and exports to PDF.

## Install

```bash
npm install @framv/docs
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@framv/core/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/docs/dist/bundle.iife.js"></script>

<framv-docs page-size="A4" margin="20">
  <h1>My Document</h1>
  <p>Content for page 1...</p>
  <div class="framv-page-break"></div>
  <p>Content for page 2...</p>
</framv-docs>
```

## Attributes

| Attribute     | Default  | Description               |
| ------------- | -------- | ------------------------- |
| `page-size`   | A4       | A4, A3, A5, letter, legal |
| `orientation` | portrait | portrait or landscape     |
| `margin`      | 20       | Page margin in mm         |

## Features

- Auto-pagination at `.framv-page-break` markers
- Export PDF button via jspdf
- Print button with `@media print` CSS
- Page numbers on each page
