export class FramvSheetsElement extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.background = "#fff";
    this.style.border = "1px solid #ccc";
    this.style.overflow = "auto";
    this.style.height = "100%";
    this.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
    this.style.fontSize = "13px";

    const table = this.querySelector("table");
    if (table) {
      table.style.borderCollapse = "collapse";
      table.style.width = "max-content";
      table.querySelectorAll("td, th").forEach((cell) => {
        (cell as HTMLElement).style.border = "1px solid #ddd";
        (cell as HTMLElement).style.padding = "4px 8px";
        (cell as HTMLElement).style.textAlign = "left";
      });
      table.querySelectorAll("th").forEach((th) => {
        (th as HTMLElement).style.background = "#f2f2f2";
        (th as HTMLElement).style.fontWeight = "600";
      });
    }
  }
}

if (!customElements.get("framv-sheets")) {
  customElements.define("framv-sheets", FramvSheetsElement);
}
