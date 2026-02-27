export class FramvDocsElement extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.background = "#f0f0f0";
    this.style.padding = "40px";
    this.style.minHeight = "100%";
    this.style.fontFamily = "system-ui, sans-serif";

    // Wrap children in a "page" style container
    const page = document.createElement("div");
    page.style.background = "white";
    page.style.width = "210mm"; // A4 width
    page.style.minHeight = "297mm"; // A4 height
    page.style.margin = "0 auto";
    page.style.padding = "20mm";
    page.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    page.style.boxSizing = "border-box";
    page.className = "framv-page";

    // Move children into the page
    while (this.firstChild) {
      page.appendChild(this.firstChild);
    }
    this.appendChild(page);
  }
}

if (!customElements.get("framv-docs")) {
  customElements.define("framv-docs", FramvDocsElement);
}
