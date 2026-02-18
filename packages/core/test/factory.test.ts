import { describe, expect, it } from "vitest";
import { exportElement, settings } from "../src/factory.js";

describe("Framv Factory", () => {
  describe("exportElement", () => {
    it("should export an SVG element to a blob", async () => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "100");
      svg.setAttribute("height", "100");

      const blob = await exportElement({
        element: svg,
        settings: settings("svg", {}),
      });

      expect(blob).toBeInstanceOf(Blob);
      expect(blob.type).toBe("image/svg+xml");
    });
  });

  describe("settings", () => {
    it("should create a settings object with the given format and config", () => {
      const s = settings("mp4", {
        fps: 30,
        quality: 0.9,
      });

      expect(s.format).toBe("mp4");
      expect(s.fps).toBe(30);
      expect(s.quality).toBe(0.9);
    });

    it("should default missing fields to undefined", () => {
      const s = settings("png", {});
      expect(s.format).toBe("png");
      expect(s.fps).toBeUndefined();
      expect(s.quality).toBeUndefined();
    });
  });
});
