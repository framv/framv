import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import type { RunnerOptions } from "../src/runner.js";

// ─── Mocks ────────────────────────────────────────────────────────────────

const mockWriteFile = vi.fn().mockResolvedValue(undefined);

const mockPage = {
  setViewport: vi.fn().mockResolvedValue(undefined),
  goto: vi.fn().mockResolvedValue(undefined),
  addScriptTag: vi.fn().mockResolvedValue(undefined),
  waitForFunction: vi.fn().mockResolvedValue(undefined),
  exposeFunction: vi.fn().mockResolvedValue(undefined),
  evaluate: vi.fn().mockResolvedValue([72, 101, 108, 108, 111]), // "Hello" as bytes
};

const mockBrowser = {
  newPage: vi.fn().mockResolvedValue(mockPage),
  close: vi.fn().mockResolvedValue(undefined),
};

vi.mock("puppeteer", () => ({
  default: {
    launch: vi.fn().mockResolvedValue(mockBrowser),
  },
}));

vi.mock("fs/promises", () => ({
  default: { writeFile: mockWriteFile },
  writeFile: mockWriteFile,
}));

// ─── Tests ────────────────────────────────────────────────────────────────

describe("render", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // waitForFunction is called twice: once for __framvCore, once for window.framv (optional)
    // The second call resolves but may also "reject" (page has no window.framv) — that's caught.
    mockPage.waitForFunction.mockResolvedValue(undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should launch a browser, navigate to the url, and write the output file", async () => {
    const { render } = await import("../src/runner.js");

    const opts: RunnerOptions = {
      url: "http://localhost:3000",
      output: "/tmp/out.mp4",
      format: "mp4",
      fps: 30,
      start: 0,
      end: 5,
    };

    await render(opts);

    expect(mockPage.goto).toHaveBeenCalledWith("http://localhost:3000", { waitUntil: "networkidle0" });
    expect(mockPage.addScriptTag).toHaveBeenCalled();
    expect(mockPage.waitForFunction).toHaveBeenCalled();
    expect(mockPage.evaluate).toHaveBeenCalled();
    expect(mockWriteFile).toHaveBeenCalledWith("/tmp/out.mp4", expect.any(Buffer));
    expect(mockBrowser.close).toHaveBeenCalled();
  });

  it("should use the default selector when none is provided", async () => {
    const { render } = await import("../src/runner.js");

    await render({
      url: "http://localhost:3000",
      output: "/tmp/out.png",
      format: "png",
    });

    // selector is the first non-function arg passed to page.evaluate
    const evaluateCall = mockPage.evaluate.mock.calls[0];
    expect(evaluateCall[1]).toBe("#framv-root");
  });

  it("should use a custom selector when provided", async () => {
    const { render } = await import("../src/runner.js");

    await render({
      url: "http://localhost:3000",
      output: "/tmp/out.svg",
      format: "svg",
      selector: "#framv-canvas",
    });

    const evaluateCall = mockPage.evaluate.mock.calls[0];
    expect(evaluateCall[1]).toBe("#framv-canvas");
  });

  it("should call exposeFunction when onProgress is provided", async () => {
    const { render } = await import("../src/runner.js");

    await render({
      url: "http://localhost:3000",
      output: "/tmp/out.mp4",
      format: "mp4",
      onProgress: vi.fn(),
    });

    expect(mockPage.exposeFunction).toHaveBeenCalledWith("__framvOnProgress", expect.any(Function));
  });

  it("should not call exposeFunction when onProgress is not provided", async () => {
    const { render } = await import("../src/runner.js");

    await render({
      url: "http://localhost:3000",
      output: "/tmp/out.mp4",
      format: "mp4",
    });

    expect(mockPage.exposeFunction).not.toHaveBeenCalled();
  });

  it("should always close the browser even when an error is thrown", async () => {
    mockPage.evaluate.mockRejectedValueOnce(new Error("Page error"));
    const { render } = await import("../src/runner.js");

    await expect(
      render({
        url: "http://localhost:3000",
        output: "/tmp/out.mp4",
        format: "mp4",
      }),
    ).rejects.toThrow("Page error");

    expect(mockBrowser.close).toHaveBeenCalled();
  });
});
