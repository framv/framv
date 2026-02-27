import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Player } from "../src/player.js";

// ─── SVG Polyfills for jsdom ───────────────────────────────────────────────
//
// jsdom does not implement SMIL / SVG animation methods. We patch them onto
// the SVGSVGElement prototype so that the Player can exercise its full code
// path without a real browser engine.

beforeEach(() => {
  if (!SVGSVGElement.prototype.setCurrentTime) {
    SVGSVGElement.prototype.setCurrentTime = vi.fn();
  }
  if (!SVGSVGElement.prototype.unpauseAnimations) {
    SVGSVGElement.prototype.unpauseAnimations = vi.fn();
  }
  if (!SVGSVGElement.prototype.pauseAnimations) {
    SVGSVGElement.prototype.pauseAnimations = vi.fn();
  }
});

// ─── Helpers ───────────────────────────────────────────────────────────────

function createSvgElement(): SVGSVGElement {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "200");
  svg.setAttribute("height", "100");
  document.body.appendChild(svg);
  return svg;
}

// ─── Tests ────────────────────────────────────────────────────────────────

describe("Player", () => {
  let svg: SVGSVGElement;
  let player: Player;

  beforeEach(() => {
    svg = createSvgElement();
    player = new Player(svg);
  });

  afterEach(() => {
    player.destroy();
    svg.remove();
    vi.restoreAllMocks();
  });

  describe("initial state", () => {
    it("should start paused", () => {
      expect(player.playing).toBe(false);
    });

    it("should start at time 0", () => {
      expect(player.currentTime).toBe(0);
    });

    it("should have duration 0 by default", () => {
      expect(player.duration).toBe(0);
    });
  });

  describe("setDuration", () => {
    it("should set the duration", () => {
      player.setDuration(10);
      expect(player.duration).toBe(10);
    });

    it("should ignore negative durations", () => {
      player.setDuration(-5);
      expect(player.duration).toBe(0);
    });
  });

  describe("seek", () => {
    it("should update currentTime", async () => {
      await player.seek(3);
      expect(player.currentTime).toBe(3);
    });

    it("should clamp to duration when duration is set", async () => {
      player.setDuration(10);
      await player.seek(15);
      expect(player.currentTime).toBe(10);
    });

    it("should not go below 0", async () => {
      await player.seek(-2);
      expect(player.currentTime).toBe(0);
    });

    it("should emit seek and timeupdate events", async () => {
      const seekCb = vi.fn();
      const timeupdateCb = vi.fn();
      player.on("seek", seekCb);
      player.on("timeupdate", timeupdateCb);

      await player.seek(5);

      expect(seekCb).toHaveBeenCalledWith(5);
      expect(timeupdateCb).toHaveBeenCalledWith(5);
    });
  });

  describe("play / pause", () => {
    it("should set playing to true when play is called", async () => {
      await player.play();
      expect(player.playing).toBe(true);
      player.pause();
    });

    it("should set playing to false when pause is called", async () => {
      await player.play();
      player.pause();
      expect(player.playing).toBe(false);
    });

    it("should emit play event", async () => {
      const cb = vi.fn();
      player.on("play", cb);
      await player.play();
      expect(cb).toHaveBeenCalled();
      player.pause();
    });

    it("should emit pause event", async () => {
      const cb = vi.fn();
      player.on("pause", cb);
      await player.play();
      player.pause();
      expect(cb).toHaveBeenCalled();
    });
  });

  describe("on / off (unsubscribe)", () => {
    it("should return an unsubscribe function", async () => {
      const cb = vi.fn();
      const off = player.on("pause", cb);
      off();
      await player.play();
      player.pause();
      expect(cb).not.toHaveBeenCalled();
    });
  });

  describe("destroy", () => {
    it("should stop playback", async () => {
      await player.play();
      player.destroy();
      expect(player.playing).toBe(false);
    });
  });
});
