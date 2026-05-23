import { FramvSheet } from "./sheet.js";

const STYLES = `
  :host {
    display: block;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    overflow: hidden;
    font-family: system-ui, sans-serif;
    font-size: 14px;
  }
  .framv-sheet-toolbar {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 12px;
    background: #f8f9fa;
    border-bottom: 1px solid #e0e0e0;
    flex-wrap: wrap;
  }
  .framv-sheet-toolbar button {
    background: #fff; border: 1px solid #d0d0d0;
    color: #333; cursor: pointer;
    padding: 4px 10px; font: inherit; border-radius: 4px;
    font-size: 12px;
  }
  .framv-sheet-toolbar button:hover { background: #e8e8e8; }
  .framv-sheet-toolbar button.export-btn { border-color: #007aff; color: #007aff; }
  .framv-sheet-toolbar .formula-input {
    border: 1px solid #d0d0d0; border-radius: 4px;
    padding: 4px 8px; font: 13px monospace;
    flex: 1; min-width: 120px;
  }
  .framv-sheet-toolbar .formula-result {
    font: 12px system-ui; color: #666; white-space: nowrap;
  }
  .framv-sheet-scroll {
    overflow: auto; max-height: 500px;
  }
  table {
    border-collapse: collapse; width: max-content; min-width: 100%;
  }
  th, td {
    border: 1px solid #e0e0e0; padding: 6px 12px;
    text-align: left; white-space: nowrap;
  }
  th {
    background: #f0f0f0; font-weight: 600;
    cursor: pointer; user-select: none; position: sticky; top: 0; z-index: 1;
  }
  th:hover { background: #e4e4e4; }
  th.sorted-asc::after { content: " ▲"; font-size: 10px; }
  th.sorted-desc::after { content: " ▼"; font-size: 10px; }
  td { background: #fff; }
  tr:hover td { background: #f8f8ff; }
  .filter-row td { padding: 2px 4px; background: #fafafa; }
  .filter-row input {
    width: 100%; border: 1px solid #ddd; border-radius: 3px;
    padding: 2px 6px; font: 12px system-ui; box-sizing: border-box;
  }
  .badge {
    display: inline-block; background: #007aff; color: #fff;
    padding: 1px 6px; border-radius: 10px; font-size: 10px;
    margin-left: 4px;
  }
`;

/**
 * `<framv-sheet>` — spreadsheet component.
 *
 * Attributes:
 *   sortable  — enable click-to-sort on headers
 *   filterable — show filter row
 *   editable   — allow inline editing
 *   headers    — comma-separated header names (if no <thead> in inner table)
 *
 * Children: a standard HTML `<table>` element, optionally with `<thead>`.
 *
 * @example
 * ```html
 * <framv-sheet sortable filterable>
 *   <table>
 *     <thead><tr><th>Name</th><th>Age</th><th>City</th></tr></thead>
 *     <tbody>
 *       <tr><td>Alice</td><td>30</td><td>NYC</td></tr>
 *       <tr><td>Bob</td><td>25</td><td>LA</td></tr>
 *     </tbody>
 *   </table>
 * </framv-sheet>
 * ```
 */
export class FramvSheetElement extends HTMLElement {
  static observedAttributes = ["sortable", "filterable", "editable"];

  private _sheet: FramvSheet | null = null;
  private _table!: HTMLTableElement;
  private _tbody!: HTMLTableSectionElement;
  private _toolbar!: HTMLDivElement;
  private _formulaInput!: HTMLInputElement;
  private _formulaResult!: HTMLSpanElement;
  private _sortCol = -1;
  private _sortAsc = true;
  private _initialized = false;

  connectedCallback(): void {
    if (this._initialized) return;
    this._initialized = true;

    // Clone the inner table before replacing innerHTML
    const innerTable = this.querySelector("table");
    const tableClone = innerTable ? (innerTable.cloneNode(true) as HTMLTableElement) : null;

    this.innerHTML = `
      <style>${STYLES}</style>
      <div class="framv-sheet-toolbar">
        <span class="badge">framv sheet</span>
        <input class="formula-input" placeholder="Formula: =SUM(A2:A10)" />
        <span class="formula-result"></span>
        <button class="export-btn">⬇ CSV</button>
      </div>
      <div class="framv-sheet-scroll"></div>
    `;

    this._toolbar = this.querySelector(".framv-sheet-toolbar")!;
    this._formulaInput = this.querySelector(".formula-input")!;
    this._formulaResult = this.querySelector(".formula-result")!;
    const scroll = this.querySelector(".framv-sheet-scroll")!;

    if (tableClone) {
      this._table = tableClone;
      scroll.appendChild(this._table);
    } else {
      this._table = document.createElement("table");
      scroll.appendChild(this._table);
    }

    this._parseTable();

    // Toolbar events
    this._toolbar.querySelector(".export-btn")!.addEventListener("click", () => this._exportCSV());
    this._formulaInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this._evalFormula();
    });

    // Sort
    if (this.hasAttribute("sortable")) {
      this._table.querySelectorAll("th").forEach((th, i) => {
        th.addEventListener("click", () => this._sortBy(i));
      });
    }

    // Filter
    if (this.hasAttribute("filterable")) {
      this._addFilterRow();
    }

    this._rebuildTBody();
  }

  attributeChangedCallback(name: string, _old: string, value: string): void {
    if (!this.isConnected) return;
    if (name === "filterable") {
      const hasFilter = this._table.querySelector(".filter-row");
      if (value !== null && !hasFilter) this._addFilterRow();
      else if (value === null && hasFilter) hasFilter.remove();
    }
  }

  get sheet(): FramvSheet | null {
    return this._sheet;
  }

  private _parseTable(): void {
    const data: (string | number)[][] = [];
    const thead = this._table.querySelector("thead");
    const headers: string[] = [];

    if (thead) {
      thead.querySelectorAll("th").forEach((th) => headers.push(th.textContent?.trim() ?? ""));
    } else {
      const firstRow = this._table.querySelector("tr");
      if (firstRow) {
        firstRow.querySelectorAll("td, th").forEach((cell) => headers.push(cell.textContent?.trim() ?? ""));
        firstRow.remove();
      }
    }

    if (headers.length > 0) data.push(headers);

    this._table.querySelectorAll("tbody tr").forEach((tr) => {
      const row: (string | number)[] = [];
      tr.querySelectorAll("td").forEach((td) => {
        const v = td.textContent?.trim() ?? "";
        const n = parseFloat(v);
        row.push(isNaN(n) ? v : n);
      });
      if (row.length > 0) data.push(row);
    });

    this._sheet = new FramvSheet(data);
  }

  private _rebuildTBody(): void {
    const oldTBody = this._table.querySelector("tbody");
    if (oldTBody) oldTBody.remove();

    this._tbody = document.createElement("tbody");
    const data = this._sheet?.getData() ?? [];
    const rows = data.slice(1);

    rows.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = String(cell);
        if (this.hasAttribute("editable")) {
          td.contentEditable = "true";
          td.addEventListener("input", () => this._syncEdits());
        }
        tr.appendChild(td);
      });
      this._tbody.appendChild(tr);
    });

    this._table.appendChild(this._tbody);
  }

  /** Write editable cell content back into the FramvSheet data model. */
  private _syncEdits(): void {
    if (!this._sheet) return;
    const headers = this._sheet.getData()[0];
    const tbodyRows = this._tbody.querySelectorAll("tr");
    const newRows: (string | number)[][] = [];

    tbodyRows.forEach((tr) => {
      const row: (string | number)[] = [];
      tr.querySelectorAll("td").forEach((td) => {
        const v = td.textContent?.trim() ?? "";
        const n = parseFloat(v);
        row.push(isNaN(n) ? v : n);
      });
      if (row.length > 0) newRows.push(row);
    });

    // Replace data in sheet (preserving headers)
    this._sheet = new FramvSheet([headers.map(String), ...newRows]);
  }

  private _rebuildHeader(): void {
    const oldThead = this._table.querySelector("thead");
    if (oldThead) oldThead.remove();

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    this._sheet?.getData()[0]?.forEach((h, i) => {
      const th = document.createElement("th");
      th.textContent = String(h);
      if (i === this._sortCol) {
        th.classList.add(this._sortAsc ? "sorted-asc" : "sorted-desc");
      }
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    this._table.insertBefore(thead, this._table.firstChild);

    if (this.hasAttribute("sortable")) {
      thead.querySelectorAll("th").forEach((th, i) => {
        th.addEventListener("click", () => this._sortBy(i));
      });
    }
  }

  private _addFilterRow(): void {
    const existing = this._table.querySelector(".filter-row");
    if (existing) return;

    const thead = this._table.querySelector("thead");
    const cols = thead?.querySelectorAll("th").length ?? this._sheet?.getData()[0]?.length ?? 0;
    const tr = document.createElement("tr");
    tr.className = "filter-row";

    for (let i = 0; i < cols; i++) {
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.placeholder = "Filter...";
      input.addEventListener("input", () => this._applyFilters());
      td.appendChild(input);
      tr.appendChild(td);
    }

    if (thead) {
      thead.appendChild(tr);
    } else {
      this._table.querySelector("tbody")?.insertBefore(tr, this._table.querySelector("tbody")!.firstChild);
    }
  }

  private _applyFilters(): void {
    const filterRow = this._table.querySelector(".filter-row");
    if (!filterRow || !this._sheet) return;

    const inputs = filterRow.querySelectorAll("input");
    const filters: string[] = [];
    inputs.forEach((inp) => filters.push(inp.value.toLowerCase()));

    const data = this._sheet.getData();
    const headers = data[0];
    const allRows = data.slice(1);

    const filtered = allRows.filter((row) => {
      return filters.every((f, i) => {
        if (!f) return true;
        return String(row[i] ?? "")
          .toLowerCase()
          .includes(f);
      });
    });

    this._tbody.innerHTML = "";
    filtered.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = String(cell);
        if (this.hasAttribute("editable")) {
          td.contentEditable = "true";
          td.addEventListener("input", () => this._syncEdits());
        }
        tr.appendChild(td);
      });
      this._tbody.appendChild(tr);
    });
  }

  private _sortBy(colIndex: number): void {
    if (!this._sheet) return;
    if (this._sortCol === colIndex) {
      this._sortAsc = !this._sortAsc;
    } else {
      this._sortCol = colIndex;
      this._sortAsc = true;
    }
    this._sheet.sort(colIndex, this._sortAsc);
    this._rebuildHeader();
    this._rebuildTBody();
    if (this.hasAttribute("filterable")) this._applyFilters();
  }

  private _evalFormula(): void {
    if (!this._sheet) return;
    const formula = this._formulaInput.value.trim();

    try {
      let result: number | string = "";

      if (formula.startsWith("=")) {
        const expr = formula.slice(1);
        const match = expr.match(/^(SUM|AVG|AVERAGE|MIN|MAX|COUNT)\s*\(\s*(.+?)\s*\)$/i);
        if (match) {
          const fn = match[1].toUpperCase();
          const range = match[2].replace(/\s/g, "");

          switch (fn) {
            case "SUM":
              result = this._sheet.sum(range);
              break;
            case "AVG":
            case "AVERAGE":
              result = this._sheet.avg(range);
              break;
            case "MIN":
              result = this._sheet.min(range);
              break;
            case "MAX":
              result = this._sheet.max(range);
              break;
            case "COUNT":
              result = this._sheet.count(range);
              break;
          }
        } else {
          result = "Invalid formula";
        }
      }

      this._formulaResult.textContent = String(result);
    } catch (e) {
      this._formulaResult.textContent = "Error";
    }
  }

  private _exportCSV(): void {
    if (!this._sheet) return;
    const csv = this._sheet.toCSV();
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "framv-sheet.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
}

if (!customElements.get("framv-sheet")) {
  customElements.define("framv-sheet", FramvSheetElement);
}
