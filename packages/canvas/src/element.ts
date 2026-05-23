const STYLES = `
  :host {
    display: block;
    position: relative;
    overflow: hidden;
    background: #1a1a2e;
    cursor: grab;
    user-select: none;
    font-family: system-ui, sans-serif;
  }
  :host(.framv-grabbing) { cursor: grabbing; }
  .framv-canvas-stage {
    position: absolute;
    top: 0; left: 0;
    transform-origin: 0 0;
    will-change: transform;
  }
  .framv-canvas-stage > * {
    position: absolute;
  }
  .framv-canvas-badge {
    position: absolute; top: 8px; left: 8px;
    background: rgba(0,0,0,0.5); color: rgba(255,255,255,0.7);
    padding: 3px 8px; border-radius: 4px;
    font: 10px system-ui; z-index: 10;
    pointer-events: none;
  }
`;

/**
 * `<framv-canvas>` — infinite canvas for positioning elements.
 *
 * Children are absolutely positioned via `left`, `top` CSS properties.
 * Use `data-x` and `data-y` attributes to set position.
 *
 * Interactions:
 *   - Drag empty space to pan
 *   - Ctrl+wheel or pinch to zoom
 *   - Click children normally (events pass through)
 *
 * Attributes:
 *   width   — canvas logical width (default: 3000)
 *   height  — canvas logical height (default: 2000)
 *   scale   — initial zoom level (default: 1)
 *
 * @example
 * ```html
 * <framv-canvas style="width:100%;height:500px">
 *   <div style="left:100px;top:80px;width:200px;background:#ff79c6;padding:16px;border-radius:8px;color:white">
 *     Box at (100, 80)
 *   </div>
 *   <div style="left:500px;top:200px;background:#50fa7b;padding:12px;border-radius:4px">
 *     Another box
 *   </div>
 * </framv-canvas>
 * ```
 */
export class FramvCanvasElement extends HTMLElement {
  static observedAttributes = ["scale"];

  private _stage!: HTMLDivElement;
  private _shadow: ShadowRoot;
  private _scale = 1;
  private _tx = 0;
  private _ty = 0;
  private _panning = false;
  private _lastX = 0;
  private _lastY = 0;
  private _minScale = 0.1;
  private _maxScale = 5;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
  }

  get width(): number {
    return parseInt(this.getAttribute("width") ?? "3000");
  }
  get height(): number {
    return parseInt(this.getAttribute("height") ?? "2000");
  }

  connectedCallback(): void {
    const s = parseFloat(this.getAttribute("scale") ?? "1");
    this._scale = Math.min(Math.max(s, this._minScale), this._maxScale);

    // Center the view initially
    const containerW = this.clientWidth || 800;
    const containerH = this.clientHeight || 600;
    this._tx = (containerW - this.width * this._scale) / 2;
    this._ty = (containerH - this.height * this._scale) / 2;

    this._shadow.innerHTML = `
      <style>${STYLES}</style>
      <div class="framv-canvas-badge">${Math.round(this._scale * 100)}%</div>
      <div class="framv-canvas-stage" style="width:${this.width}px;height:${this.height}px">
        <slot></slot>
      </div>
    `;

    this._stage = this._shadow.querySelector(".framv-canvas-stage")!;
    this._updateTransform();

    // Mouse wheel zoom (Ctrl + wheel or just wheel)
    this.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const rect = this.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;

        const delta = -e.deltaY * 0.001;
        const newScale = Math.min(Math.max(this._scale * (1 + delta), this._minScale), this._maxScale);

        // Pointer-aware zoom
        const worldX = (px - this._tx) / this._scale;
        const worldY = (py - this._ty) / this._scale;
        this._tx = px - worldX * newScale;
        this._ty = py - worldY * newScale;
        this._scale = newScale;

        this._updateTransform();
        this._updateBadge();
      },
      { passive: false }
    );

    // Pointer drag to pan
    this.addEventListener("pointerdown", (e) => {
      if (e.target instanceof HTMLElement && e.target.closest("button, a, input, select, textarea, [contenteditable]")) return;
      this._panning = true;
      this._lastX = e.clientX;
      this._lastY = e.clientY;
      this.classList.add("framv-grabbing");
      this.setPointerCapture(e.pointerId);
    });

    this.addEventListener("pointermove", (e) => {
      if (!this._panning) return;
      const dx = e.clientX - this._lastX;
      const dy = e.clientY - this._lastY;
      this._tx += dx;
      this._ty += dy;
      this._lastX = e.clientX;
      this._lastY = e.clientY;
      this._updateTransform();
    });

    this.addEventListener("pointerup", () => {
      this._panning = false;
      this.classList.remove("framv-grabbing");
    });

    this.addEventListener("pointerleave", () => {
      if (this._panning) {
        this._panning = false;
        this.classList.remove("framv-grabbing");
      }
    });
  }

  attributeChangedCallback(name: string, _old: string, value: string): void {
    if (name === "scale" && this._stage) {
      const s = parseFloat(value);
      if (!isNaN(s)) {
        this._scale = Math.min(Math.max(s, this._minScale), this._maxScale);
        this._updateTransform();
        this._updateBadge();
      }
    }
  }

  /** Pan to center a specific position. */
  centerAt(x: number, y: number): void {
    const containerW = this.clientWidth || 800;
    const containerH = this.clientHeight || 600;
    this._tx = containerW / 2 - x * this._scale;
    this._ty = containerH / 2 - y * this._scale;
    this._updateTransform();
  }

  /** Reset to initial centered view. */
  reset(): void {
    this._scale = 1;
    const containerW = this.clientWidth || 800;
    const containerH = this.clientHeight || 600;
    this._tx = (containerW - this.width) / 2;
    this._ty = (containerH - this.height) / 2;
    this._updateTransform();
    this._updateBadge();
  }

  get scale(): number {
    return this._scale;
  }

  private _updateTransform(): void {
    this._stage.style.transform = `translate(${this._tx}px, ${this._ty}px) scale(${this._scale})`;
  }

  private _updateBadge(): void {
    const badge = this._shadow.querySelector(".framv-canvas-badge") as HTMLElement;
    if (badge) badge.textContent = `${Math.round(this._scale * 100)}%`;
  }
}

if (!customElements.get("framv-canvas")) {
  customElements.define("framv-canvas", FramvCanvasElement);
}
