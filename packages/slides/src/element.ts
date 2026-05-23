import { exportElement } from "@framv/core";

const STYLES = `
  :host {
    display: block;
    position: relative;
    background: #000;
    overflow: hidden;
    font-family: system-ui, sans-serif;
  }
  .framv-slides-stage {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .framv-slides-controls {
    position: absolute; bottom: 0; left: 0; right: 0;
    display: flex; align-items: center; gap: 12px;
    padding: 12px 20px;
    background: linear-gradient(transparent, rgba(0,0,0,0.6));
    color: #fff; font: 13px system-ui;
    opacity: 0; transition: opacity 0.3s;
    z-index: 20;
  }
  :host(:hover) .framv-slides-controls,
  :host([controls]) .framv-slides-controls { opacity: 1; }
  .framv-slides-controls button {
    background: rgba(255,255,255,0.15); border: none;
    color: #fff; cursor: pointer;
    padding: 8px 14px; font: inherit; border-radius: 6px;
    transition: background 0.2s;
  }
  .framv-slides-controls button:hover { background: rgba(255,255,255,0.3); }
  .framv-slides-controls button:disabled { opacity: 0.3; cursor: default; }
  .framv-counter {
    margin: 0 auto; opacity: 0.7; font-variant-numeric: tabular-nums;
  }
  .framv-progress {
    position: absolute; bottom: 0; left: 0;
    height: 3px; background: #ff79c6;
    transition: width 0.3s ease;
    z-index: 21;
  }
  .framv-fullscreen-badge {
    position: absolute; top: 12px; right: 12px;
    background: rgba(0,0,0,0.5); color: #fff;
    padding: 4px 12px; border-radius: 4px;
    font: 11px system-ui; opacity: 0; transition: opacity 0.3s;
    z-index: 15;
  }
  :host(:hover) .framv-fullscreen-badge { opacity: 1; }
  .framv-exporting-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.8); display: flex;
    align-items: center; justify-content: center;
    color: #fff; font: 14px system-ui; z-index: 30;
    gap: 8px;
  }
`;

/**
 * `<framv-slides>` — a slideshow presentation container.
 *
 * Attributes:
 *   transition — global transition: fade, slide, slide-up, zoom (default: slide)
 *   autoplay   — advance slides automatically
 *   interval   — autoplay interval in ms (default: 5000)
 *   controls   — always show controls
 *   loop       — loop back to first slide
 *   width      — presentation width (default: 1920)
 *   height     — presentation height (default: 1080)
 *   format     — export format: pdf, mp4 (default: pdf)
 *
 * @example
 * ```html
 * <framv-slides controls width="1920" height="1080">
 *   <framv-slide background="#1a1a2e">
 *     <h1 style="color:white;font-size:64px">Title</h1>
 *   </framv-slide>
 *   <framv-slide background="#16213e">
 *     <h2 style="color:white;font-size:48px">Slide 2</h2>
 *   </framv-slide>
 * </framv-slides>
 * ```
 */
export class FramvSlidesElement extends HTMLElement {
  static observedAttributes = ["transition"];

  private _currentIndex = 0;
  private _slides: import("./slide.js").FramvSlideElement[] = [];
  private _stage!: HTMLDivElement;
  private _controls!: HTMLDivElement;
  private _counter!: HTMLSpanElement;
  private _progress!: HTMLDivElement;
  private _prevBtn!: HTMLButtonElement;
  private _nextBtn!: HTMLButtonElement;
  private _fullscreenBtn!: HTMLButtonElement;
  private _exportBtn!: HTMLButtonElement;
  private _autoplayTimer: ReturnType<typeof setInterval> | null = null;
  private _exporting = false;

  get currentIndex(): number {
    return this._currentIndex;
  }
  get slideCount(): number {
    return this._slides.length;
  }
  get transition(): string {
    return this.getAttribute("transition") ?? "slide";
  }

  connectedCallback(): void {
    const w = this.getAttribute("width") ?? "1920";
    const h = this.getAttribute("height") ?? "1080";

    this.style.aspectRatio = `${w} / ${h}`;
    this.style.maxWidth = "100%";

    this.innerHTML = `
      <style>${STYLES}</style>
      <div class="framv-fullscreen-badge">framv slides · ${w}x${h}</div>
      <div class="framv-slides-stage"></div>
      <div class="framv-progress"></div>
      <div class="framv-slides-controls">
        <button class="btn-prev">◀ Prev</button>
        <button class="btn-next">Next ▶</button>
        <span class="framv-counter">1 / 1</span>
        <button class="btn-fullscreen">⛶ Fullscreen</button>
        <button class="btn-export" style="border:1px solid #ff79c6;color:#ff79c6">⬇ Export ${this.getAttribute("format") === "mp4" ? "MP4" : "PDF"}</button>
      </div>
    `;

    this._stage = this.querySelector(".framv-slides-stage")!;
    this._controls = this.querySelector(".framv-slides-controls")!;
    this._counter = this.querySelector(".framv-counter")!;
    this._progress = this.querySelector(".framv-progress")!;
    this._prevBtn = this.querySelector(".btn-prev")!;
    this._nextBtn = this.querySelector(".btn-next")!;
    this._fullscreenBtn = this.querySelector(".btn-fullscreen")!;
    this._exportBtn = this.querySelector(".btn-export")!;

    // Move slide children into stage
    this._slides = Array.from(this.querySelectorAll("framv-slide"));
    this._slides.forEach((slide, i) => {
      slide.setAttribute("transition", slide.getAttribute("transition") ?? this.transition);
      this._stage.appendChild(slide);
    });

    // Show first slide
    this._showSlide(0);

    // Button events
    this._prevBtn.addEventListener("click", () => this.prev());
    this._nextBtn.addEventListener("click", () => this.next());
    this._fullscreenBtn.addEventListener("click", () => this._toggleFullscreen());
    this._exportBtn.addEventListener("click", () => this._export());

    // Keyboard
    this.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        this.next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.prev();
      }
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        this._toggleFullscreen();
      }
    });

    // Click to advance (unless clicking a button)
    this.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, .framv-slides-controls")) return;
      this.next();
    });

    // Autoplay
    if (this.hasAttribute("autoplay")) {
      const interval = parseInt(this.getAttribute("interval") ?? "5000");
      this._autoplayTimer = setInterval(() => this.next(), interval);
    }

    this._updateCounter();
  }

  disconnectedCallback(): void {
    if (this._autoplayTimer) clearInterval(this._autoplayTimer);
  }

  attributeChangedCallback(name: string): void {
    if (name === "transition" && this._slides.length > 0) {
      this._slides.forEach((s) => {
        if (!s.hasAttribute("transition")) s.setAttribute("transition", this.transition);
      });
    }
  }

  next(): void {
    if (this._currentIndex < this._slides.length - 1) {
      this._showSlide(this._currentIndex + 1);
    } else if (this.hasAttribute("loop")) {
      this._showSlide(0);
    }
  }

  prev(): void {
    if (this._currentIndex > 0) {
      this._showSlide(this._currentIndex - 1);
    } else if (this.hasAttribute("loop")) {
      this._showSlide(this._slides.length - 1);
    }
  }

  goTo(index: number): void {
    if (index >= 0 && index < this._slides.length) {
      this._showSlide(index);
    }
  }

  private _showSlide(index: number): void {
    if (this._slides.length === 0) return;

    this._slides.forEach((s) => (s.active = false));
    this._currentIndex = index;
    this._slides[index].active = true;

    this._updateCounter();
  }

  private _updateCounter(): void {
    if (this._counter) this._counter.textContent = `${this._currentIndex + 1} / ${this._slides.length}`;
    if (this._progress) this._progress.style.width = `${((this._currentIndex + 1) / this._slides.length) * 100}%`;

    if (this._prevBtn) this._prevBtn.disabled = this._currentIndex === 0 && !this.hasAttribute("loop");
    if (this._nextBtn) this._nextBtn.disabled = this._currentIndex === this._slides.length - 1 && !this.hasAttribute("loop");
  }

  private _toggleFullscreen(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      this.requestFullscreen();
    }
  }

  private async _export(): Promise<void> {
    if (this._exporting) return;
    this._exporting = true;

    const format = this.getAttribute("format") ?? "pdf";
    const w = parseInt(this.getAttribute("width") ?? "1920");
    const h = parseInt(this.getAttribute("height") ?? "1080");

    const overlay = document.createElement("div");
    overlay.className = "framv-exporting-overlay";
    this.appendChild(overlay);

    try {
      if (format === "pdf") {
        // Export each slide as a page
        const { jsPDF } = await import("jspdf");
        const pdf = new jsPDF({ orientation: "l", unit: "px", format: [w, h] });

        for (let i = 0; i < this._slides.length; i++) {
          if (i > 0) pdf.addPage();
          const slide = this._slides[i];
          overlay.textContent = `Exporting slide ${i + 1}/${this._slides.length}...`;
          await pdf.html(slide, { x: 0, y: 0, width: w, windowWidth: w });
        }

        pdf.save("framv-presentation.pdf");
      } else {
        overlay.textContent = "Exporting video...";
        // Build a container with light DOM slides for the core renderer
        const container = document.createElement("div");
        container.style.width = `${w}px`;
        container.style.height = `${h}px`;
        container.style.position = "relative";
        container.style.background = "#000";
        this._slides.forEach((slide, i) => {
          const slideClone = document.createElement("div");
          slideClone.style.cssText = `position:absolute;inset:0;display:${i === 0 ? "flex" : "none"};align-items:center;justify-content:center;flex-direction:column;`;
          slideClone.innerHTML = slide.innerHTML;
          container.appendChild(slideClone);
        });
        const blob = await exportElement({
          element: container,
          settings: { format: format as "mp4" | "webm", fps: 1, start: 0, end: this._slides.length, width: w, height: h, quality: 0.9 },
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `framv-presentation.${format}`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      overlay.remove();
      this._exporting = false;
    }
  }
}

if (!customElements.get("framv-slides")) {
  customElements.define("framv-slides", FramvSlidesElement);
}
