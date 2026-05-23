import * as Framv from "./index.js";

if (typeof window !== "undefined") {
  (window as unknown as Record<string, unknown>).Framv = Framv;
}

export default Framv;
