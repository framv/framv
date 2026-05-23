import { exportElement } from "@framv/core";

const PAGE_SIZES: Record<string, { w: number; h: number }> = {
  A4: { w: 210, h: 297 },
  A3: { w: 297, h: 420 },
  A5: { w: 148, h: 210 },
  letter: { w: 216, h: 279 },
  legal: { w: 216, h: 356 },
};

const STYLES = `
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

/**
 * `<framv-docs>` — multi-page document container.
 *
 * Attributes:
 *   page-size   — A4, A3, A5, letter, legal (default: A4)
 *   orientation — portrait, landscape (default: portrait)
 *   margin      — page margin in mm (default: 20)
 *   format      — export format (pdf, png; default: pdf)
 *
 * Children are auto-paginated. Use <div class="framv-page-break"> to force a page break.
 *
 * @example
 * ```html
 * <framv-docs page-size="A4" margin="25">
 *   <h1>My Document</h1>
 *   <p>Content for page 1...</p>
 *   <div class="framv-page-break"></div>
 *   <p>Content for page 2...</p>
 * </framv-docs>
 * ```
 */
export class FramvDocsElement extends HTMLElement {
  static observedAttributes = ["page-size", "orientation", "margin"];

  private _inner!: HTMLDivElement;
  private _toolbar!: HTMLDivElement;

  get pageSize(): string {
    return this.getAttribute("page-size") ?? "A4";
  }
  get orientation(): string {
    return this.getAttribute("orientation") ?? "portrait";
  }
  get margin(): number {
    return parseInt(this.getAttribute("margin") ?? "20");
  }
  get format(): string {
    return this.getAttribute("format") ?? "pdf";
  }

  connectedCallback(): void {
    const size = PAGE_SIZES[this.pageSize] ?? PAGE_SIZES.A4;
    const isPortrait = this.orientation !== "landscape";
    const pageW = isPortrait ? size.w : size.h;
    const pageH = isPortrait ? size.h : size.w;
    const margin = this.margin;
    const mmToPx = 3.7795275591;

    this.innerHTML = `
      <style>${STYLES}</style>
      <div class="framv-toolbar">
        <span class="framv-info">${this.pageSize.toUpperCase()} ${this.orientation} · ${this.querySelectorAll(".framv-page").length || this.querySelectorAll(".framv-page-break").length + 1} pages</span>
        <button class="btn-pdf">⬇ Export PDF</button>
        <button class="btn-print">🖨 Print</button>
      </div>
      <div class="framv-docs-inner"></div>
    `;

    this._toolbar = this.querySelector(".framv-toolbar")!;
    this._inner = this.querySelector(".framv-docs-inner")!;

    this._paginate();

    this._toolbar.querySelector(".btn-pdf")!.addEventListener("click", () => this._exportPDF(pageW, pageH, margin, mmToPx));
    this._toolbar.querySelector(".btn-print")!.addEventListener("click", () => window.print());
  }

  attributeChangedCallback(): void {
    if (this.isConnected) {
      this._inner.innerHTML = "";
      this._paginate();
    }
  }

  private _paginate(): void {
    const size = PAGE_SIZES[this.pageSize] ?? PAGE_SIZES.A4;
    const isPortrait = this.orientation !== "landscape";
    const pageW = isPortrait ? size.w : size.h;
    const pageH = isPortrait ? size.h : size.w;
    const margin = this.margin;

    // Collect content nodes between page breaks
    const content = Array.from(this.childNodes).filter((n) => !(n instanceof HTMLElement && (n.classList.contains("framv-toolbar") || n.classList.contains("framv-docs-inner") || n.tagName === "STYLE")));

    const pages: Node[][] = [];
    let current: Node[] = [];

    for (const node of content) {
      if (node instanceof HTMLElement && node.classList.contains("framv-page-break")) {
        if (current.length > 0) pages.push(current);
        current = [];
        node.remove();
        continue;
      }
      current.push(node.cloneNode(true));
    }
    if (current.length > 0) pages.push(current);

    // Clean up old content
    this._inner.innerHTML = "";

    // Create pages
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

    // Update page count in toolbar
    const info = this._toolbar.querySelector(".framv-info");
    if (info) info.textContent = `${this.pageSize.toUpperCase()} ${this.orientation} · ${pages.length} pages`;
  }

  private async _exportPDF(pageW: number, pageH: number, margin: number, mmToPx: number): Promise<void> {
    const pages = this._inner.querySelectorAll(".framv-page");
    try {
      const { jsPDF } = await import("jspdf");

      const pdf = new jsPDF({
        orientation: pageW > pageH ? "l" : "p",
        unit: "mm",
        format: [pageW, pageH],
      });

      for (let i = 0; i < pages.length; i++) {
        if (i > 0) pdf.addPage();

        const page = pages[i] as HTMLElement;
        const pageContent = page.querySelector(".framv-page-content") as HTMLElement;
        if (!pageContent) continue;

        await pdf.html(pageContent, {
          x: margin,
          y: margin,
          width: pageW - margin * 2,
          windowWidth: pageW * mmToPx,
        });
      }

      pdf.save("framv-document.pdf");
    } catch (err) {
      console.error("PDF export failed, falling back to core:", err);

      // Fallback: export the first page via core exporter
      const firstPage = this._inner.querySelector(".framv-page-content") as HTMLElement;
      const blob = await exportElement({
        element: firstPage ?? this._inner,
        settings: { format: "pdf", width: pageW * mmToPx, height: pageH * mmToPx },
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "framv-document.pdf";
      a.click();
      URL.revokeObjectURL(url);
    }
  }
}

if (!customElements.get("framv-docs")) {
  customElements.define("framv-docs", FramvDocsElement);
}
