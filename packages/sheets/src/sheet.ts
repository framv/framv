export class FramvSheet {
  constructor(public data: (string | number)[][]) {}
  render(): HTMLElement {
    const table = document.createElement("table");
    table.className = "framv-sheet";
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.background = "white";

    this.data.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.style.border = "1px solid #ccc";
        td.style.padding = "8px";
        td.textContent = String(cell);
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    return table;
  }
}
