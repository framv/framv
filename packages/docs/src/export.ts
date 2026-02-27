import { registerExporter, ElementFreezer, ElementRenderer, ExportSettings } from "@framv/core";

registerExporter("pdf", async (element: HTMLElement | SVGSVGElement, settings: ExportSettings, { freezer, renderer }: { freezer: ElementFreezer; renderer: ElementRenderer }) => {
  const { jsPDF } = await import("jspdf");

  const w = settings.width ?? (element instanceof SVGElement ? 800 : element.clientWidth || 800);
  const h = settings.height ?? (element instanceof SVGElement ? 600 : element.clientHeight || 600);
  const orientation = w > h ? "l" : "p";
  const pdf = new jsPDF({
    orientation,
    unit: "px",
    format: [w, h],
  });

  if (!(element instanceof SVGElement)) {
    await pdf.html(element, {
      x: 0,
      y: 0,
      width: w,
      windowWidth: w,
    });
  } else {
    // Fallback for raw SVG elements
    const frozen = await freezer.freezeAll(element);
    const canvas = await renderer.renderToCanvas(frozen, settings.width, settings.height);
    const blob = await canvas.convertToBlob({ type: "image/jpeg", quality: settings.quality ?? 0.95 });
    const imgData = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
    pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
  }

  return pdf.output("blob");
});

registerExporter("docx", async (element: HTMLElement | SVGSVGElement, settings: ExportSettings, { freezer, renderer }: { freezer: ElementFreezer; renderer: ElementRenderer }) => {
  const { Document, Packer, Paragraph, ImageRun, TextRun, HeadingLevel, Table, TableRow, TableCell } = await import("docx");

  if (element instanceof SVGElement) {
    const frozen = await freezer.freezeAll(element);
    const canvas = await renderer.renderToCanvas(frozen, settings.width, settings.height);
    const blob = await canvas.convertToBlob({ type: "image/png", quality: settings.quality ?? 1 });
    const imgBuffer = await blob.arrayBuffer();

    const doc = new Document({
      sections: [
        {
          properties: { page: { size: { width: canvas.width * 15, height: canvas.height * 15 }, margin: { top: 0, right: 0, bottom: 0, left: 0 } } },
          children: [new Paragraph({ children: [new ImageRun({ data: imgBuffer, transformation: { width: canvas.width, height: canvas.height }, type: "png" })] })],
        },
      ],
    });
    return Packer.toBlob(doc);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const children: any[] = [];
    const nodes = element.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, table");
    nodes.forEach((el) => {
      const tag = el.tagName.toUpperCase();
      if (tag.startsWith("H")) {
        const map = { H1: "HEADING_1", H2: "HEADING_2", H3: "HEADING_3", H4: "HEADING_4", H5: "HEADING_5", H6: "HEADING_6" } as const;
        const levelStr = map[tag as keyof typeof map];
        children.push(new Paragraph({ text: (el as HTMLElement).innerText || el.textContent || "", heading: HeadingLevel[levelStr] }));
      } else if (tag === "P" || tag === "LI") {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: (el as HTMLElement).innerText || el.textContent || "", size: 24 })],
            bullet: tag === "LI" ? { level: 0 } : undefined,
          })
        );
      } else if (tag === "TABLE") {
        const rows = Array.from(el.querySelectorAll("tr"));
        if (rows.length) {
          children.push(
            new Table({
              rows: rows.map(
                (r) =>
                  new TableRow({
                    children: Array.from(r.querySelectorAll("th, td")).map(
                      (c) =>
                        new TableCell({
                          children: [new Paragraph({ text: c.textContent?.trim() || "" })],
                        })
                    ),
                  })
              ),
            })
          );
        }
      }
    });

    if (nodes.length === 0 && element.textContent?.trim()) {
      children.push(new Paragraph({ text: element.textContent.trim() }));
    }

    const doc = new Document({ sections: [{ children }] });
    return Packer.toBlob(doc);
  }
});
