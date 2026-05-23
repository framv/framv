import * as all from "./index.js";

export const {
  decodeAudio, extractAudioPCM, hasAudio, mixAudioFrame,
  ElementExporter, registerExporter,
  exportElement, settings,
  ElementFreezer,
  seekElement, seekMedia, waitMedia,
  ElementRenderer,
  ElementStreamer,
} = all;

export type { ExportSettings, FreezeOptions } from "./types.js";
export type { ExportOptions } from "./factory.js";

if (typeof window !== "undefined") {
  (window as unknown as Record<string, unknown>).Framv = all;
}
