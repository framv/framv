const STYLES = `
  :host {
    display: flex;
    position: absolute;
    inset: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
    transform: translateX(30px);
    pointer-events: none;
  }
  :host([active]) {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
  }
  :host([transition="fade"]) {
    transition: opacity 0.5s ease;
    transform: none;
  }
  :host([transition="slide-up"]) {
    transform: translateY(40px);
  }
  :host([transition="slide-up"][active]) {
    transform: translateY(0);
  }
  :host([transition="zoom"]) {
    transform: scale(0.9);
  }
  :host([transition="zoom"][active]) {
    transform: scale(1);
  }
`;

/**
 * `<framv-slide>` — a single slide inside `<framv-slides>`.
 *
 * Attributes:
 *   background — CSS background value for the slide
 *   transition — fade, slide-up, zoom, or slide (default: slide)
 *
 * @example
 * ```html
 * <framv-slide background="linear-gradient(135deg, #667eea, #764ba2)">
 *   <h1>My Title</h1>
 *   <p>Slide content</p>
 * </framv-slide>
 * ```
 */
export class FramvSlideElement extends HTMLElement {
  static observedAttributes = ["background", "active", "transition"];

  connectedCallback(): void {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" }).innerHTML = `<style>${STYLES}</style><slot></slot>`;
    }
    this._applyBackground();
  }

  attributeChangedCallback(name: string): void {
    if (name === "background") this._applyBackground();
  }

  set active(val: boolean) {
    if (val) this.setAttribute("active", "");
    else this.removeAttribute("active");
  }

  get active(): boolean {
    return this.hasAttribute("active");
  }

  private _applyBackground(): void {
    const bg = this.getAttribute("background");
    if (bg) this.style.background = bg;
  }
}

if (!customElements.get("framv-slide")) {
  customElements.define("framv-slide", FramvSlideElement);
}
