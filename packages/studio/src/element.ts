import { Studio } from "./studio.js";

export class FramvStudioElement extends HTMLElement {
  private studio: Studio | null = null;

  connectedCallback() {
    this.studio = new Studio(this);
  }

  get instance() {
    return this.studio;
  }
}

if (!customElements.get("framv-studio")) {
  customElements.define("framv-studio", FramvStudioElement);
}
