// src/export.ts
import { registerExporter } from "@framv/core";
registerExporter("pdf", async (element, settings, { freezer, renderer }) => {
  const { jsPDF } = await import("jspdf");
  const w = settings.width ?? (element instanceof SVGElement ? 800 : element.clientWidth || 800);
  const h = settings.height ?? (element instanceof SVGElement ? 600 : element.clientHeight || 600);
  const orientation = w > h ? "l" : "p";
  const pdf = new jsPDF({
    orientation,
    unit: "px",
    format: [w, h]
  });
  if (!(element instanceof SVGElement)) {
    await pdf.html(element, {
      x: 0,
      y: 0,
      width: w,
      windowWidth: w
    });
  } else {
    const frozen = await freezer.freezeAll(element);
    const canvas = await renderer.renderToCanvas(frozen, settings.width, settings.height);
    const blob = await canvas.convertToBlob({ type: "image/jpeg", quality: settings.quality ?? 0.95 });
    const imgData = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
    pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
  }
  return pdf.output("blob");
});

// src/doc.ts
var FramvDoc = class {
  options;
  constructor(options) {
    this.options = options;
  }
  render() {
    const el = document.createElement("framv-docs");
    el.setAttribute("page-size", this.options.pageSize ?? "A4");
    el.setAttribute("orientation", this.options.orientation ?? "portrait");
    el.setAttribute("margin", String(this.options.margin ?? 20));
    el.innerHTML = this.options.content;
    return el;
  }
};

// src/element.ts
import { exportElement } from "@framv/core";
var PAGE_SIZES = {
  A4: { w: 210, h: 297 },
  A3: { w: 297, h: 420 },
  A5: { w: 148, h: 210 },
  letter: { w: 216, h: 279 },
  legal: { w: 216, h: 356 }
};
var STYLES = `
  :host {
    display: block;
    background: #e8e8e8;
    min-height: 100%;
    padding: 24px 0;
  }
  .framv-docs-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  .framv-page {
    background: white;
    box-shadow: 0 2px 16px rgba(0,0,0,0.12);
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }
  .framv-page::after {
    content: attr(data-page);
    position: absolute;
    bottom: 8px;
    left: 0; right: 0;
    text-align: center;
    font: 10px system-ui;
    color: #999;
  }
  .framv-page-break {
    page-break-before: always;
    break-before: page;
  }
  .framv-toolbar {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    padding: 8px 16px;
    background: rgba(0,0,0,0.7); backdrop-filter: blur(6px);
    color: #fff; font: 12px system-ui;
    position: sticky; top: 0; z-index: 10;
    border-radius: 0 0 8px 8px;
    width: fit-content; margin: 0 auto 16px auto;
  }
  .framv-toolbar button {
    background: none; border: 1px solid rgba(255,255,255,0.2);
    color: inherit; cursor: pointer;
    padding: 4px 10px; font: inherit; border-radius: 4px;
  }
  .framv-toolbar button:hover { background: rgba(255,255,255,0.15); }
  .framv-toolbar .btn-pdf { border-color: #50fa7b; color: #50fa7b; }
  .framv-toolbar .btn-print { border-color: #8be9fd; color: #8be9fd; }
  .framv-info {
    color: rgba(255,255,255,0.6); font-size: 11px;
  }
  @media print {
    :host { background: white; padding: 0; }
    .framv-toolbar { display: none !important; }
    .framv-page { box-shadow: none; break-inside: avoid; margin: 0; }
  }
`;
var FramvDocsElement = class extends HTMLElement {
  static observedAttributes = ["page-size", "orientation", "margin"];
  _inner;
  _toolbar;
  _pdfBtn;
  // Saved original content for re-pagination on attribute change
  _savedContent = null;
  _initialized = false;
  get pageSize() {
    return this.getAttribute("page-size") ?? "A4";
  }
  get orientation() {
    return this.getAttribute("orientation") ?? "portrait";
  }
  get margin() {
    return parseInt(this.getAttribute("margin") ?? "20");
  }
  get format() {
    return this.getAttribute("format") ?? "pdf";
  }
  connectedCallback() {
    if (this._initialized) return;
    this._initialized = true;
    const originalNodes = Array.from(this.childNodes);
    this._savedContent = [];
    for (const node of originalNodes) {
      if (node instanceof HTMLElement && node.classList.contains("framv-page-break")) {
        this._savedContent.push("BREAK");
      } else {
        this._savedContent.push(node.cloneNode(true));
      }
    }
    this.innerHTML = `
      <style>${STYLES}</style>
      <div class="framv-toolbar">
        <span class="framv-info"></span>
        <button class="btn-pdf">\u2B07 Export PDF</button>
        <button class="btn-print">\u{1F5A8} Print</button>
      </div>
      <div class="framv-docs-inner"></div>
    `;
    this._toolbar = this.querySelector(".framv-toolbar");
    this._pdfBtn = this._toolbar.querySelector(".btn-pdf");
    this._inner = this.querySelector(".framv-docs-inner");
    this._paginate();
    this._pdfBtn.addEventListener("click", () => this._export());
    this._toolbar.querySelector(".btn-print").addEventListener("click", () => window.print());
  }
  attributeChangedCallback() {
    if (this.isConnected && this._initialized) {
      this._paginate();
    }
  }
  _paginate() {
    const size = PAGE_SIZES[this.pageSize] ?? PAGE_SIZES.A4;
    const isPortrait = this.orientation !== "landscape";
    const pageW = isPortrait ? size.w : size.h;
    const pageH = isPortrait ? size.h : size.w;
    const margin = this.margin;
    const content = this._savedContent ?? [];
    const pages = [];
    let current = [];
    for (const item of content) {
      if (item === "BREAK") {
        if (current.length > 0) pages.push(current);
        current = [];
      } else {
        current.push(item.cloneNode(true));
      }
    }
    if (current.length > 0) pages.push(current);
    this._inner.innerHTML = "";
    const contentW = pageW - margin * 2;
    const contentH = pageH - margin * 2;
    pages.forEach((nodes, i) => {
      const page = document.createElement("div");
      page.className = "framv-page";
      page.dataset.page = String(i + 1);
      page.style.width = `${pageW}mm`;
      page.style.minHeight = `${pageH}mm`;
      page.style.padding = `${margin}mm`;
      const contentDiv = document.createElement("div");
      contentDiv.className = "framv-page-content";
      contentDiv.style.minHeight = `${contentH}mm`;
      nodes.forEach((n) => contentDiv.appendChild(n));
      page.appendChild(contentDiv);
      this._inner.appendChild(page);
    });
    const info = this._toolbar.querySelector(".framv-info");
    if (info) info.textContent = `${this.pageSize.toUpperCase()} ${this.orientation} \xB7 ${pages.length} pages`;
    this._pdfBtn.textContent = `\u2B07 Export ${this.format.toUpperCase()}`;
  }
  async _export() {
    const size = PAGE_SIZES[this.pageSize] ?? PAGE_SIZES.A4;
    const isPortrait = this.orientation !== "landscape";
    const pageW = isPortrait ? size.w : size.h;
    const pageH = isPortrait ? size.h : size.w;
    const margin = this.margin;
    const mmToPx = 3.7795275591;
    const pages = this._inner.querySelectorAll(".framv-page");
    try {
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({
        orientation: pageW > pageH ? "l" : "p",
        unit: "mm",
        format: [pageW, pageH]
      });
      for (let i = 0; i < pages.length; i++) {
        if (i > 0) pdf.addPage();
        const page = pages[i];
        const pageContent = page.querySelector(".framv-page-content");
        if (!pageContent) continue;
        await pdf.html(pageContent, {
          x: margin,
          y: margin,
          width: pageW - margin * 2,
          windowWidth: pageW * mmToPx
        });
      }
      pdf.save("framv-document.pdf");
    } catch (err) {
      console.error("PDF export failed, falling back to core:", err);
      const firstPage = this._inner.querySelector(".framv-page-content");
      const blob = await exportElement({
        element: firstPage ?? this._inner,
        settings: { format: "pdf", width: pageW * mmToPx, height: pageH * mmToPx }
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "framv-document.pdf";
      a.click();
      URL.revokeObjectURL(url);
    }
  }
};
if (!customElements.get("framv-docs")) {
  customElements.define("framv-docs", FramvDocsElement);
}
export {
  FramvDoc,
  FramvDocsElement
};
