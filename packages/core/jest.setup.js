// Polyfill for TextDecoder/TextEncoder in Jest environment
if (typeof globalThis.TextDecoder === "undefined") {
  const { TextDecoder, TextEncoder } = require("util");
  globalThis.TextDecoder = TextDecoder;
  globalThis.TextEncoder = TextEncoder;
}
