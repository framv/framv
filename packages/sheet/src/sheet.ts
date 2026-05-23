export class FramvSheet {
  private data: (string | number)[][];
  private headers: string[];
  private rows: (string | number)[][];

  constructor(data: (string | number)[][]) {
    this.data = data;
    this.headers = data.length > 0 ? data[0].map(String) : [];
    this.rows = data.slice(1);
  }

  getData(): (string | number)[][] {
    return [this.headers, ...this.rows];
  }

  sort(columnIndex: number, ascending = true): void {
    if (columnIndex < 0 || columnIndex >= this.headers.length) return;
    this.rows.sort((a, b) => {
      const va = a[columnIndex] ?? "";
      const vb = b[columnIndex] ?? "";
      if (typeof va === "number" && typeof vb === "number") return ascending ? va - vb : vb - va;
      return ascending ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va));
    });
  }

  filter(predicate: (row: (string | number)[], index: number) => boolean): (string | number)[][] {
    return [this.headers, ...this.rows.filter(predicate)];
  }

  sum(range: string): number {
    return this._aggregate(range, (acc, val) => acc + (typeof val === "number" ? val : parseFloat(String(val)) || 0), 0);
  }

  avg(range: string): number {
    const { total, count } = this._aggregateWithCount(range);
    return count > 0 ? total / count : 0;
  }

  min(range: string): number {
    return (
      this._aggregate(
        range,
        (acc, val) => {
          const n = typeof val === "number" ? val : parseFloat(String(val)) || 0;
          return acc === null || n < acc ? n : acc;
        },
        null as number | null
      ) ?? 0
    );
  }

  max(range: string): number {
    return (
      this._aggregate(
        range,
        (acc, val) => {
          const n = typeof val === "number" ? val : parseFloat(String(val)) || 0;
          return acc === null || n > acc ? n : acc;
        },
        null as number | null
      ) ?? 0
    );
  }

  count(range: string): number {
    return this._aggregateWithCount(range).count;
  }

  toCSV(): string {
    return [this.headers, ...this.rows]
      .map((row) =>
        row
          .map((cell) => {
            const s = String(cell);
            return s.includes(",") || s.includes('"') || s.includes("\n") ? `"${s.replace(/"/g, '""')}"` : s;
          })
          .join(",")
      )
      .join("\n");
  }

  private _aggregate<T>(range: string, reducer: (acc: T, val: string | number) => T, initial: T): T {
    let acc = initial;
    for (const val of this._iterRange(range)) {
      acc = reducer(acc, val);
    }
    return acc;
  }

  private _aggregateWithCount(range: string): { total: number; count: number } {
    let total = 0;
    let count = 0;
    for (const val of this._iterRange(range)) {
      const n = typeof val === "number" ? val : parseFloat(String(val)) || 0;
      total += n;
      count++;
    }
    return { total, count };
  }

  private *_iterRange(range: string): Generator<string | number> {
    // Support formats: "A1:B5", "A:A", "1:1", "A1"
    const colRow = range.match(/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/);
    const colOnly = range.match(/^([A-Z]+):([A-Z]+)$/);
    const rowOnly = range.match(/^(\d+):(\d+)$/);
    const single = range.match(/^([A-Z]+)(\d+)$/);

    if (colRow) {
      const c1 = this._colIndex(colRow[1]),
        r1 = parseInt(colRow[2]) - 1;
      const c2 = this._colIndex(colRow[3]),
        r2 = parseInt(colRow[4]) - 1;
      for (let r = r1; r <= r2 && r < this.rows.length; r++) {
        for (let c = c1; c <= c2 && c < this.headers.length; c++) {
          yield this.rows[r]?.[c] ?? "";
        }
      }
    } else if (colOnly) {
      const c1 = this._colIndex(colOnly[1]),
        c2 = this._colIndex(colOnly[2]);
      for (const row of this.rows) {
        for (let c = c1; c <= c2 && c < this.headers.length; c++) {
          yield row[c] ?? "";
        }
      }
    } else if (rowOnly) {
      const r1 = parseInt(rowOnly[1]) - 1,
        r2 = parseInt(rowOnly[2]) - 1;
      for (let r = r1; r <= r2 && r < this.rows.length; r++) {
        for (let c = 0; c < this.headers.length; c++) {
          yield this.rows[r]?.[c] ?? "";
        }
      }
    } else if (single) {
      const c = this._colIndex(single[1]),
        r = parseInt(single[2]) - 1;
      yield this.rows[r]?.[c] ?? "";
    }
  }

  private _colIndex(col: string): number {
    let idx = 0;
    for (let i = 0; i < col.length; i++) {
      idx = idx * 26 + (col.charCodeAt(i) - 64);
    }
    return idx - 1;
  }

  render(): HTMLElement {
    const table = document.createElement("table");
    table.className = "framv-sheet-table";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    this.headers.forEach((h) => {
      const th = document.createElement("th");
      th.textContent = h;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    this.rows.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = String(cell);
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    return table;
  }
}
