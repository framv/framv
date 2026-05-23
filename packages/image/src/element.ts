import { exportElement } from "@framv/core";

const STYLES = `
  :host {
    display: block;
    position: relative;
    background: #f5f5f5;
    border-radius: 8px;
    overflow: hidden;
    font-family: system-ui, sans-serif;
  }
  .framv-image-stage {
    position: relative;
    width: var(--framv-iw, 800px);
    height: var(--framv-ih, 600px);
    transform-origin: top left;
    overflow: hidden;
  }
  .framv-image-toolbar {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    padding: 8px 12px;
    background: rgba(0,0,0,0.7);
    color: #fff; font: 12px system-ui;
    position: absolute; bottom: 0; left: 0; right: 0;
    opacity: 0; transition: opacity 0.2s;
    z-index: 10;
  }
  :host(:hover) .framv-image-toolbar { opacity: 1; }
  .framv-image-toolbar button {
    background: none; border: 1px solid rgba(255,255,255,0.2);
    color: inherit; cursor: pointer;
    padding: 4px 10px; font: inherit; border-radius: 4px;
  }
  .framv-image-toolbar button:hover { background: rgba(255,255,255,0.15); }
  .framv-image-toolbar .btn-export {
    border-color: #ff79c6; color: #ff79c6;
  }
  .framv-image-badge {
    position: absolute; top: 8px; right: 8px;
    background: rgba(0,0,0,0.6); color: #fff;
    padding: 2px 8px; border-radius: 4px;
    font: 11px system-ui; letter-spacing: 0.5px;
    text-transform: uppercase; z-index: 5;
  }
`;

/**
 * `<framv-image>` — renders HTML/SVG content to a static image.
 *
 * Attributes:
 *   width   — output width in pixels (default: 800)
 *   height  — output height in pixels (default: 600)
 *   format  — png, jpg, webp, svg (default: png)
 *   quality — export quality 0–1 (default: 0.95, jpg/webp only)
 *
 * @example
 * ```html
 * <framv-image width="800" height="600" format="png">
 *   <div>Your content here</div>
 * </framv-image>
 * ```
 */
export class FramvImageElement extends HTMLElement {
  static observedAttributes = ["format"];

  private _stage!: HTMLDivElement;
  private _exportBtn!: HTMLButtonElement;
  private _shadow: ShadowRoot;
  private _exporting = false;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
  }

  get width(): number {
    return parseInt(this.getAttribute("width") ?? "800");
  }
  get height(): number {
    return parseInt(this.getAttribute("height") ?? "600");
  }
  get format(): string {
    return this.getAttribute("format") ?? "png";
  }
  get quality(): number {
    return parseFloat(this.getAttribute("quality") ?? "0.95");
  }

  connectedCallback(): void {
    const w = this.width;
    const h = this.height;

    this._shadow.innerHTML = `
      <style>${STYLES}</style>
      <div class="framv-image-badge">framv image · ${this.format.toUpperCase()} · ${w}x${h}</div>
      <div class="framv-image-stage" style="--framv-iw:${w}px;--framv-ih:${h}px">
        <slot></slot>
      </div>
      <div class="framv-image-toolbar">
        <span style="opacity:0.6;font-size:11px">${w}x${h}</span>
        <button class="btn-export">⬇ Export ${this.format.toUpperCase()}</button>
      </div>
    `;

    this._stage = this._shadow.querySelector(".framv-image-stage")!;
    this._exportBtn = this._shadow.querySelector(".btn-export")!;

    this._adaptSize();
    this._exportBtn.addEventListener("click", () => this._export());

    new ResizeObserver(() => this._adaptSize()).observe(this);
  }

  attributeChangedCallback(name: string): void {
    if (name === "format" && this._stage) {
      const badge = this._shadow.querySelector(".framv-image-badge") as HTMLElement;
      if (badge) badge.textContent = `framv image · ${this.format.toUpperCase()} · ${this.width}x${this.height}`;
      this._exportBtn.textContent = `⬇ Export ${this.format.toUpperCase()}`;
    }
  }

  private _adaptSize(): void {
    const w = this.width;
    const h = this.height;
    const containerW = this.clientWidth || w;
    const scale = Math.min(containerW / w, 1);
    this._stage.style.transform = `scale(${scale})`;
    this.style.minHeight = `${h * scale}px`;
  }

  private async _export(): Promise<void> {
    if (this._exporting) return;
    this._exporting = true;

    const container = document.createElement("div");
    container.style.width = `${this.width}px`;
    container.style.height = `${this.height}px`;
    container.style.position = "relative";
    container.style.overflow = "hidden";
    Array.from(this.children).forEach((child) => container.appendChild(child.cloneNode(true)));

    try {
      const blob = await exportElement({
        element: container,
        settings: {
          format: this.format as "png" | "jpg" | "webp" | "svg",
          width: this.width,
          height: this.height,
          quality: this.quality,
          time: 0,
        },
      });

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `framv-image.${this.format}`;
      this._shadow.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      this._exporting = false;
    }
  }
}

if (!customElements.get("framv-image")) {
  customElements.define("framv-image", FramvImageElement);
}
