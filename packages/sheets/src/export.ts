import { registerExporter } from "@framv/core";

registerExporter("xlsx", async (element: HTMLElement | SVGSVGElement) => {
  const XLSX = await import("xlsx");

  let table = element.querySelector("table");
  if (element.tagName === "TABLE") table = element as HTMLTableElement;

  let wb;
  if (table) {
    wb = XLSX.utils.table_to_book(table);
  } else {
    wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([[element.textContent?.trim()]]);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  }

  const arrayBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const MIME_XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  return new Blob([arrayBuffer], { type: MIME_XLSX });
});
