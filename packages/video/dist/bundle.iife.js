"use strict";
var FramvVideo = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../node_modules/html2canvas/dist/html2canvas.js
  var require_html2canvas = __commonJS({
    "../../node_modules/html2canvas/dist/html2canvas.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.html2canvas = factory());
      })(exports, (function() {
        "use strict";
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        function __extends(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var __assign = function() {
          __assign = Object.assign || function __assign2(t) {
            for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
              s = arguments[i2];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e2) {
                reject(e2);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e2) {
                reject(e2);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }
        function __generator(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f2, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f2) throw new TypeError("Generator is already executing.");
            while (_) try {
              if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e2) {
              op = [6, e2];
              y = 0;
            } finally {
              f2 = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        }
        function __spreadArray(to, from, pack2) {
          if (pack2 || arguments.length === 2) for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
            if (ar || !(i2 in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
              ar[i2] = from[i2];
            }
          }
          return to.concat(ar || from);
        }
        var Bounds = (
          /** @class */
          (function() {
            function Bounds2(left, top, width, height) {
              this.left = left;
              this.top = top;
              this.width = width;
              this.height = height;
            }
            Bounds2.prototype.add = function(x, y, w, h) {
              return new Bounds2(this.left + x, this.top + y, this.width + w, this.height + h);
            };
            Bounds2.fromClientRect = function(context, clientRect) {
              return new Bounds2(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
            };
            Bounds2.fromDOMRectList = function(context, domRectList) {
              var domRect = Array.from(domRectList).find(function(rect) {
                return rect.width !== 0;
              });
              return domRect ? new Bounds2(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height) : Bounds2.EMPTY;
            };
            Bounds2.EMPTY = new Bounds2(0, 0, 0, 0);
            return Bounds2;
          })()
        );
        var parseBounds = function(context, node) {
          return Bounds.fromClientRect(context, node.getBoundingClientRect());
        };
        var parseDocumentSize = function(document2) {
          var body = document2.body;
          var documentElement = document2.documentElement;
          if (!body || !documentElement) {
            throw new Error("Unable to get document size");
          }
          var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
          var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
          return new Bounds(0, 0, width, height);
        };
        var toCodePoints$1 = function(str) {
          var codePoints = [];
          var i2 = 0;
          var length = str.length;
          while (i2 < length) {
            var value = str.charCodeAt(i2++);
            if (value >= 55296 && value <= 56319 && i2 < length) {
              var extra = str.charCodeAt(i2++);
              if ((extra & 64512) === 56320) {
                codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                codePoints.push(value);
                i2--;
              }
            } else {
              codePoints.push(value);
            }
          }
          return codePoints;
        };
        var fromCodePoint$1 = function() {
          var codePoints = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
          }
          if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
          }
          var length = codePoints.length;
          if (!length) {
            return "";
          }
          var codeUnits = [];
          var index = -1;
          var result = "";
          while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
            }
            if (index + 1 === length || codeUnits.length > 16384) {
              result += String.fromCharCode.apply(String, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
        var chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$2 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
          lookup$2[chars$2.charCodeAt(i$2)] = i$2;
        }
        var chars$1$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$1$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
          lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
        }
        var decode$1 = function(base642) {
          var bufferLength = base642.length * 0.75, len = base642.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
          if (base642[base642.length - 1] === "=") {
            bufferLength--;
            if (base642[base642.length - 2] === "=") {
              bufferLength--;
            }
          }
          var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
          var bytes2 = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
          for (i2 = 0; i2 < len; i2 += 4) {
            encoded1 = lookup$1$1[base642.charCodeAt(i2)];
            encoded2 = lookup$1$1[base642.charCodeAt(i2 + 1)];
            encoded3 = lookup$1$1[base642.charCodeAt(i2 + 2)];
            encoded4 = lookup$1$1[base642.charCodeAt(i2 + 3)];
            bytes2[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes2[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes2[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }
          return buffer;
        };
        var polyUint16Array$1 = function(buffer) {
          var length = buffer.length;
          var bytes2 = [];
          for (var i2 = 0; i2 < length; i2 += 2) {
            bytes2.push(buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes2;
        };
        var polyUint32Array$1 = function(buffer) {
          var length = buffer.length;
          var bytes2 = [];
          for (var i2 = 0; i2 < length; i2 += 4) {
            bytes2.push(buffer[i2 + 3] << 24 | buffer[i2 + 2] << 16 | buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes2;
        };
        var UTRIE2_SHIFT_2$1 = 5;
        var UTRIE2_SHIFT_1$1 = 6 + 5;
        var UTRIE2_INDEX_SHIFT$1 = 2;
        var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
        var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 65536 >> UTRIE2_SHIFT_2$1;
        var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
        var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 1024 >> UTRIE2_SHIFT_2$1;
        var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
        var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 2048 >> 6;
        var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 65536 >> UTRIE2_SHIFT_1$1;
        var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
        var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
        var slice16$1 = function(view2, start, end) {
          if (view2.slice) {
            return view2.slice(start, end);
          }
          return new Uint16Array(Array.prototype.slice.call(view2, start, end));
        };
        var slice32$1 = function(view2, start, end) {
          if (view2.slice) {
            return view2.slice(start, end);
          }
          return new Uint32Array(Array.prototype.slice.call(view2, start, end));
        };
        var createTrieFromBase64$1 = function(base642, _byteLength) {
          var buffer = decode$1(base642);
          var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
          var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
          var headerLength = 24;
          var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
          var data = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
          return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
        };
        var Trie$1 = (
          /** @class */
          (function() {
            function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
              this.initialValue = initialValue;
              this.errorValue = errorValue;
              this.highStart = highStart;
              this.highValueIndex = highValueIndex;
              this.index = index;
              this.data = data;
            }
            Trie2.prototype.get = function(codePoint) {
              var ix;
              if (codePoint >= 0) {
                if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
                  ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                  ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                  return this.data[ix];
                }
                if (codePoint <= 65535) {
                  ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 55296 >> UTRIE2_SHIFT_2$1)];
                  ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                  return this.data[ix];
                }
                if (codePoint < this.highStart) {
                  ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                  ix = this.index[ix];
                  ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
                  ix = this.index[ix];
                  ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                  return this.data[ix];
                }
                if (codePoint <= 1114111) {
                  return this.data[this.highValueIndex];
                }
              }
              return this.errorValue;
            };
            return Trie2;
          })()
        );
        var chars$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$3 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
          lookup$3[chars$3.charCodeAt(i$3)] = i$3;
        }
        var base64$1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==";
        var LETTER_NUMBER_MODIFIER = 50;
        var BK = 1;
        var CR$1 = 2;
        var LF$1 = 3;
        var CM = 4;
        var NL = 5;
        var WJ = 7;
        var ZW = 8;
        var GL = 9;
        var SP = 10;
        var ZWJ$1 = 11;
        var B2 = 12;
        var BA = 13;
        var BB = 14;
        var HY = 15;
        var CB = 16;
        var CL = 17;
        var CP = 18;
        var EX = 19;
        var IN = 20;
        var NS = 21;
        var OP = 22;
        var QU = 23;
        var IS = 24;
        var NU = 25;
        var PO = 26;
        var PR = 27;
        var SY = 28;
        var AI = 29;
        var AL = 30;
        var CJ = 31;
        var EB = 32;
        var EM = 33;
        var H2 = 34;
        var H3 = 35;
        var HL = 36;
        var ID = 37;
        var JL = 38;
        var JV = 39;
        var JT = 40;
        var RI$1 = 41;
        var SA = 42;
        var XX = 43;
        var ea_OP = [9001, 65288];
        var BREAK_MANDATORY = "!";
        var BREAK_NOT_ALLOWED$1 = "\xD7";
        var BREAK_ALLOWED$1 = "\xF7";
        var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
        var ALPHABETICS = [AL, HL];
        var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
        var SPACE$1 = [SP, ZW];
        var PREFIX_POSTFIX = [PR, PO];
        var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
        var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
        var HYPHEN = [HY, BA];
        var codePointsToCharacterClasses = function(codePoints, lineBreak2) {
          if (lineBreak2 === void 0) {
            lineBreak2 = "strict";
          }
          var types = [];
          var indices = [];
          var categories = [];
          codePoints.forEach(function(codePoint, index) {
            var classType = UnicodeTrie$1.get(codePoint);
            if (classType > LETTER_NUMBER_MODIFIER) {
              categories.push(true);
              classType -= LETTER_NUMBER_MODIFIER;
            } else {
              categories.push(false);
            }
            if (["normal", "auto", "loose"].indexOf(lineBreak2) !== -1) {
              if ([8208, 8211, 12316, 12448].indexOf(codePoint) !== -1) {
                indices.push(index);
                return types.push(CB);
              }
            }
            if (classType === CM || classType === ZWJ$1) {
              if (index === 0) {
                indices.push(index);
                return types.push(AL);
              }
              var prev = types[index - 1];
              if (LINE_BREAKS.indexOf(prev) === -1) {
                indices.push(indices[index - 1]);
                return types.push(prev);
              }
              indices.push(index);
              return types.push(AL);
            }
            indices.push(index);
            if (classType === CJ) {
              return types.push(lineBreak2 === "strict" ? NS : ID);
            }
            if (classType === SA) {
              return types.push(AL);
            }
            if (classType === AI) {
              return types.push(AL);
            }
            if (classType === XX) {
              if (codePoint >= 131072 && codePoint <= 196605 || codePoint >= 196608 && codePoint <= 262141) {
                return types.push(ID);
              } else {
                return types.push(AL);
              }
            }
            types.push(classType);
          });
          return [indices, types, categories];
        };
        var isAdjacentWithSpaceIgnored = function(a2, b, currentIndex, classTypes) {
          var current = classTypes[currentIndex];
          if (Array.isArray(a2) ? a2.indexOf(current) !== -1 : a2 === current) {
            var i2 = currentIndex;
            while (i2 <= classTypes.length) {
              i2++;
              var next = classTypes[i2];
              if (next === b) {
                return true;
              }
              if (next !== SP) {
                break;
              }
            }
          }
          if (current === SP) {
            var i2 = currentIndex;
            while (i2 > 0) {
              i2--;
              var prev = classTypes[i2];
              if (Array.isArray(a2) ? a2.indexOf(prev) !== -1 : a2 === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                  n++;
                  var next = classTypes[n];
                  if (next === b) {
                    return true;
                  }
                  if (next !== SP) {
                    break;
                  }
                }
              }
              if (prev !== SP) {
                break;
              }
            }
          }
          return false;
        };
        var previousNonSpaceClassType = function(currentIndex, classTypes) {
          var i2 = currentIndex;
          while (i2 >= 0) {
            var type = classTypes[i2];
            if (type === SP) {
              i2--;
            } else {
              return type;
            }
          }
          return 0;
        };
        var _lineBreakAtIndex = function(codePoints, classTypes, indicies, index, forbiddenBreaks) {
          if (indicies[index] === 0) {
            return BREAK_NOT_ALLOWED$1;
          }
          var currentIndex = index - 1;
          if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
            return BREAK_NOT_ALLOWED$1;
          }
          var beforeIndex = currentIndex - 1;
          var afterIndex = currentIndex + 1;
          var current = classTypes[currentIndex];
          var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
          var next = classTypes[afterIndex];
          if (current === CR$1 && next === LF$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
            return BREAK_MANDATORY;
          }
          if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (SPACE$1.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
            return BREAK_ALLOWED$1;
          }
          if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === WJ || next === WJ) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === GL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === SP) {
            return BREAK_ALLOWED$1;
          }
          if (current === QU || next === QU) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (next === CB || current === CB) {
            return BREAK_ALLOWED$1;
          }
          if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (before === HL && HYPHEN.indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === SY && next === HL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (next === IN) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (
            // (PR | PO) × ( OP | HY )? NU
            [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) || // ( OP | HY ) × NU
            [OP, HY].indexOf(current) !== -1 && next === NU || // NU ×	(NU | SY | IS)
            current === NU && [NU, SY, IS].indexOf(next) !== -1
          ) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
            var prevIndex = currentIndex;
            while (prevIndex >= 0) {
              var type = classTypes[prevIndex];
              if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
              } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
              } else {
                break;
              }
            }
          }
          if ([PR, PO].indexOf(next) !== -1) {
            var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
            while (prevIndex >= 0) {
              var type = classTypes[prevIndex];
              if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
              } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
              } else {
                break;
              }
            }
          }
          if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === RI$1 && next === RI$1) {
            var i2 = indicies[currentIndex];
            var count = 1;
            while (i2 > 0) {
              i2--;
              if (classTypes[i2] === RI$1) {
                count++;
              } else {
                break;
              }
            }
            if (count % 2 !== 0) {
              return BREAK_NOT_ALLOWED$1;
            }
          }
          if (current === EB && next === EM) {
            return BREAK_NOT_ALLOWED$1;
          }
          return BREAK_ALLOWED$1;
        };
        var cssFormattedClasses = function(codePoints, options) {
          if (!options) {
            options = { lineBreak: "normal", wordBreak: "normal" };
          }
          var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
          if (options.wordBreak === "break-all" || options.wordBreak === "break-word") {
            classTypes = classTypes.map(function(type) {
              return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
            });
          }
          var forbiddenBreakpoints = options.wordBreak === "keep-all" ? isLetterNumber.map(function(letterNumber, i2) {
            return letterNumber && codePoints[i2] >= 19968 && codePoints[i2] <= 40959;
          }) : void 0;
          return [indicies, classTypes, forbiddenBreakpoints];
        };
        var Break = (
          /** @class */
          (function() {
            function Break2(codePoints, lineBreak2, start, end) {
              this.codePoints = codePoints;
              this.required = lineBreak2 === BREAK_MANDATORY;
              this.start = start;
              this.end = end;
            }
            Break2.prototype.slice = function() {
              return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
            };
            return Break2;
          })()
        );
        var LineBreaker = function(str, options) {
          var codePoints = toCodePoints$1(str);
          var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
          var length = codePoints.length;
          var lastEnd = 0;
          var nextIndex = 0;
          return {
            next: function() {
              if (nextIndex >= length) {
                return { done: true, value: null };
              }
              var lineBreak2 = BREAK_NOT_ALLOWED$1;
              while (nextIndex < length && (lineBreak2 = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1) {
              }
              if (lineBreak2 !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
                var value = new Break(codePoints, lineBreak2, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value, done: false };
              }
              return { done: true, value: null };
            }
          };
        };
        var FLAG_UNRESTRICTED = 1 << 0;
        var FLAG_ID = 1 << 1;
        var FLAG_INTEGER = 1 << 2;
        var FLAG_NUMBER = 1 << 3;
        var LINE_FEED = 10;
        var SOLIDUS = 47;
        var REVERSE_SOLIDUS = 92;
        var CHARACTER_TABULATION = 9;
        var SPACE = 32;
        var QUOTATION_MARK = 34;
        var EQUALS_SIGN = 61;
        var NUMBER_SIGN = 35;
        var DOLLAR_SIGN = 36;
        var PERCENTAGE_SIGN = 37;
        var APOSTROPHE = 39;
        var LEFT_PARENTHESIS = 40;
        var RIGHT_PARENTHESIS = 41;
        var LOW_LINE = 95;
        var HYPHEN_MINUS = 45;
        var EXCLAMATION_MARK = 33;
        var LESS_THAN_SIGN = 60;
        var GREATER_THAN_SIGN = 62;
        var COMMERCIAL_AT = 64;
        var LEFT_SQUARE_BRACKET = 91;
        var RIGHT_SQUARE_BRACKET = 93;
        var CIRCUMFLEX_ACCENT = 61;
        var LEFT_CURLY_BRACKET = 123;
        var QUESTION_MARK = 63;
        var RIGHT_CURLY_BRACKET = 125;
        var VERTICAL_LINE = 124;
        var TILDE = 126;
        var CONTROL = 128;
        var REPLACEMENT_CHARACTER = 65533;
        var ASTERISK = 42;
        var PLUS_SIGN = 43;
        var COMMA = 44;
        var COLON = 58;
        var SEMICOLON = 59;
        var FULL_STOP = 46;
        var NULL = 0;
        var BACKSPACE = 8;
        var LINE_TABULATION = 11;
        var SHIFT_OUT = 14;
        var INFORMATION_SEPARATOR_ONE = 31;
        var DELETE = 127;
        var EOF = -1;
        var ZERO = 48;
        var a = 97;
        var e = 101;
        var f = 102;
        var u = 117;
        var z = 122;
        var A = 65;
        var E = 69;
        var F = 70;
        var U = 85;
        var Z = 90;
        var isDigit = function(codePoint) {
          return codePoint >= ZERO && codePoint <= 57;
        };
        var isSurrogateCodePoint = function(codePoint) {
          return codePoint >= 55296 && codePoint <= 57343;
        };
        var isHex = function(codePoint) {
          return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
        };
        var isLowerCaseLetter = function(codePoint) {
          return codePoint >= a && codePoint <= z;
        };
        var isUpperCaseLetter = function(codePoint) {
          return codePoint >= A && codePoint <= Z;
        };
        var isLetter = function(codePoint) {
          return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
        };
        var isNonASCIICodePoint = function(codePoint) {
          return codePoint >= CONTROL;
        };
        var isWhiteSpace = function(codePoint) {
          return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
        };
        var isNameStartCodePoint = function(codePoint) {
          return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
        };
        var isNameCodePoint = function(codePoint) {
          return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
        };
        var isNonPrintableCodePoint = function(codePoint) {
          return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
        };
        var isValidEscape = function(c1, c2) {
          if (c1 !== REVERSE_SOLIDUS) {
            return false;
          }
          return c2 !== LINE_FEED;
        };
        var isIdentifierStart = function(c1, c2, c3) {
          if (c1 === HYPHEN_MINUS) {
            return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
          } else if (isNameStartCodePoint(c1)) {
            return true;
          } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
            return true;
          }
          return false;
        };
        var isNumberStart = function(c1, c2, c3) {
          if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
            if (isDigit(c2)) {
              return true;
            }
            return c2 === FULL_STOP && isDigit(c3);
          }
          if (c1 === FULL_STOP) {
            return isDigit(c2);
          }
          return isDigit(c1);
        };
        var stringToNumber = function(codePoints) {
          var c = 0;
          var sign = 1;
          if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
              sign = -1;
            }
            c++;
          }
          var integers = [];
          while (isDigit(codePoints[c])) {
            integers.push(codePoints[c++]);
          }
          var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
          if (codePoints[c] === FULL_STOP) {
            c++;
          }
          var fraction = [];
          while (isDigit(codePoints[c])) {
            fraction.push(codePoints[c++]);
          }
          var fracd = fraction.length;
          var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
          if (codePoints[c] === E || codePoints[c] === e) {
            c++;
          }
          var expsign = 1;
          if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
              expsign = -1;
            }
            c++;
          }
          var exponent = [];
          while (isDigit(codePoints[c])) {
            exponent.push(codePoints[c++]);
          }
          var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
          return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
        };
        var LEFT_PARENTHESIS_TOKEN = {
          type: 2
          /* LEFT_PARENTHESIS_TOKEN */
        };
        var RIGHT_PARENTHESIS_TOKEN = {
          type: 3
          /* RIGHT_PARENTHESIS_TOKEN */
        };
        var COMMA_TOKEN = {
          type: 4
          /* COMMA_TOKEN */
        };
        var SUFFIX_MATCH_TOKEN = {
          type: 13
          /* SUFFIX_MATCH_TOKEN */
        };
        var PREFIX_MATCH_TOKEN = {
          type: 8
          /* PREFIX_MATCH_TOKEN */
        };
        var COLUMN_TOKEN = {
          type: 21
          /* COLUMN_TOKEN */
        };
        var DASH_MATCH_TOKEN = {
          type: 9
          /* DASH_MATCH_TOKEN */
        };
        var INCLUDE_MATCH_TOKEN = {
          type: 10
          /* INCLUDE_MATCH_TOKEN */
        };
        var LEFT_CURLY_BRACKET_TOKEN = {
          type: 11
          /* LEFT_CURLY_BRACKET_TOKEN */
        };
        var RIGHT_CURLY_BRACKET_TOKEN = {
          type: 12
          /* RIGHT_CURLY_BRACKET_TOKEN */
        };
        var SUBSTRING_MATCH_TOKEN = {
          type: 14
          /* SUBSTRING_MATCH_TOKEN */
        };
        var BAD_URL_TOKEN = {
          type: 23
          /* BAD_URL_TOKEN */
        };
        var BAD_STRING_TOKEN = {
          type: 1
          /* BAD_STRING_TOKEN */
        };
        var CDO_TOKEN = {
          type: 25
          /* CDO_TOKEN */
        };
        var CDC_TOKEN = {
          type: 24
          /* CDC_TOKEN */
        };
        var COLON_TOKEN = {
          type: 26
          /* COLON_TOKEN */
        };
        var SEMICOLON_TOKEN = {
          type: 27
          /* SEMICOLON_TOKEN */
        };
        var LEFT_SQUARE_BRACKET_TOKEN = {
          type: 28
          /* LEFT_SQUARE_BRACKET_TOKEN */
        };
        var RIGHT_SQUARE_BRACKET_TOKEN = {
          type: 29
          /* RIGHT_SQUARE_BRACKET_TOKEN */
        };
        var WHITESPACE_TOKEN = {
          type: 31
          /* WHITESPACE_TOKEN */
        };
        var EOF_TOKEN = {
          type: 32
          /* EOF_TOKEN */
        };
        var Tokenizer = (
          /** @class */
          (function() {
            function Tokenizer2() {
              this._value = [];
            }
            Tokenizer2.prototype.write = function(chunk) {
              this._value = this._value.concat(toCodePoints$1(chunk));
            };
            Tokenizer2.prototype.read = function() {
              var tokens = [];
              var token = this.consumeToken();
              while (token !== EOF_TOKEN) {
                tokens.push(token);
                token = this.consumeToken();
              }
              return tokens;
            };
            Tokenizer2.prototype.consumeToken = function() {
              var codePoint = this.consumeCodePoint();
              switch (codePoint) {
                case QUOTATION_MARK:
                  return this.consumeStringToken(QUOTATION_MARK);
                case NUMBER_SIGN:
                  var c1 = this.peekCodePoint(0);
                  var c2 = this.peekCodePoint(1);
                  var c3 = this.peekCodePoint(2);
                  if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                    var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                    var value = this.consumeName();
                    return { type: 5, value, flags };
                  }
                  break;
                case DOLLAR_SIGN:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return SUFFIX_MATCH_TOKEN;
                  }
                  break;
                case APOSTROPHE:
                  return this.consumeStringToken(APOSTROPHE);
                case LEFT_PARENTHESIS:
                  return LEFT_PARENTHESIS_TOKEN;
                case RIGHT_PARENTHESIS:
                  return RIGHT_PARENTHESIS_TOKEN;
                case ASTERISK:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return SUBSTRING_MATCH_TOKEN;
                  }
                  break;
                case PLUS_SIGN:
                  if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                  }
                  break;
                case COMMA:
                  return COMMA_TOKEN;
                case HYPHEN_MINUS:
                  var e1 = codePoint;
                  var e2 = this.peekCodePoint(0);
                  var e3 = this.peekCodePoint(1);
                  if (isNumberStart(e1, e2, e3)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                  }
                  if (isIdentifierStart(e1, e2, e3)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                  }
                  if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                    this.consumeCodePoint();
                    this.consumeCodePoint();
                    return CDC_TOKEN;
                  }
                  break;
                case FULL_STOP:
                  if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                  }
                  break;
                case SOLIDUS:
                  if (this.peekCodePoint(0) === ASTERISK) {
                    this.consumeCodePoint();
                    while (true) {
                      var c = this.consumeCodePoint();
                      if (c === ASTERISK) {
                        c = this.consumeCodePoint();
                        if (c === SOLIDUS) {
                          return this.consumeToken();
                        }
                      }
                      if (c === EOF) {
                        return this.consumeToken();
                      }
                    }
                  }
                  break;
                case COLON:
                  return COLON_TOKEN;
                case SEMICOLON:
                  return SEMICOLON_TOKEN;
                case LESS_THAN_SIGN:
                  if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
                    this.consumeCodePoint();
                    this.consumeCodePoint();
                    return CDO_TOKEN;
                  }
                  break;
                case COMMERCIAL_AT:
                  var a1 = this.peekCodePoint(0);
                  var a2 = this.peekCodePoint(1);
                  var a3 = this.peekCodePoint(2);
                  if (isIdentifierStart(a1, a2, a3)) {
                    var value = this.consumeName();
                    return { type: 7, value };
                  }
                  break;
                case LEFT_SQUARE_BRACKET:
                  return LEFT_SQUARE_BRACKET_TOKEN;
                case REVERSE_SOLIDUS:
                  if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                  }
                  break;
                case RIGHT_SQUARE_BRACKET:
                  return RIGHT_SQUARE_BRACKET_TOKEN;
                case CIRCUMFLEX_ACCENT:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return PREFIX_MATCH_TOKEN;
                  }
                  break;
                case LEFT_CURLY_BRACKET:
                  return LEFT_CURLY_BRACKET_TOKEN;
                case RIGHT_CURLY_BRACKET:
                  return RIGHT_CURLY_BRACKET_TOKEN;
                case u:
                case U:
                  var u1 = this.peekCodePoint(0);
                  var u2 = this.peekCodePoint(1);
                  if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                    this.consumeCodePoint();
                    this.consumeUnicodeRangeToken();
                  }
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeIdentLikeToken();
                case VERTICAL_LINE:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return DASH_MATCH_TOKEN;
                  }
                  if (this.peekCodePoint(0) === VERTICAL_LINE) {
                    this.consumeCodePoint();
                    return COLUMN_TOKEN;
                  }
                  break;
                case TILDE:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return INCLUDE_MATCH_TOKEN;
                  }
                  break;
                case EOF:
                  return EOF_TOKEN;
              }
              if (isWhiteSpace(codePoint)) {
                this.consumeWhiteSpace();
                return WHITESPACE_TOKEN;
              }
              if (isDigit(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeNumericToken();
              }
              if (isNameStartCodePoint(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeIdentLikeToken();
              }
              return { type: 6, value: fromCodePoint$1(codePoint) };
            };
            Tokenizer2.prototype.consumeCodePoint = function() {
              var value = this._value.shift();
              return typeof value === "undefined" ? -1 : value;
            };
            Tokenizer2.prototype.reconsumeCodePoint = function(codePoint) {
              this._value.unshift(codePoint);
            };
            Tokenizer2.prototype.peekCodePoint = function(delta) {
              if (delta >= this._value.length) {
                return -1;
              }
              return this._value[delta];
            };
            Tokenizer2.prototype.consumeUnicodeRangeToken = function() {
              var digits = [];
              var codePoint = this.consumeCodePoint();
              while (isHex(codePoint) && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
              }
              var questionMarks = false;
              while (codePoint === QUESTION_MARK && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
                questionMarks = true;
              }
              if (questionMarks) {
                var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
                  return digit === QUESTION_MARK ? ZERO : digit;
                })), 16);
                var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
                  return digit === QUESTION_MARK ? F : digit;
                })), 16);
                return { type: 30, start: start_1, end };
              }
              var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
              if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
                this.consumeCodePoint();
                codePoint = this.consumeCodePoint();
                var endDigits = [];
                while (isHex(codePoint) && endDigits.length < 6) {
                  endDigits.push(codePoint);
                  codePoint = this.consumeCodePoint();
                }
                var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
                return { type: 30, start, end };
              } else {
                return { type: 30, start, end: start };
              }
            };
            Tokenizer2.prototype.consumeIdentLikeToken = function() {
              var value = this.consumeName();
              if (value.toLowerCase() === "url" && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return this.consumeUrlToken();
              } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return { type: 19, value };
              }
              return { type: 20, value };
            };
            Tokenizer2.prototype.consumeUrlToken = function() {
              var value = [];
              this.consumeWhiteSpace();
              if (this.peekCodePoint(0) === EOF) {
                return { type: 22, value: "" };
              }
              var next = this.peekCodePoint(0);
              if (next === APOSTROPHE || next === QUOTATION_MARK) {
                var stringToken = this.consumeStringToken(this.consumeCodePoint());
                if (stringToken.type === 0) {
                  this.consumeWhiteSpace();
                  if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return { type: 22, value: stringToken.value };
                  }
                }
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
              }
              while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                  return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
                } else if (isWhiteSpace(codePoint)) {
                  this.consumeWhiteSpace();
                  if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
                  }
                  this.consumeBadUrlRemnants();
                  return BAD_URL_TOKEN;
                } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
                  this.consumeBadUrlRemnants();
                  return BAD_URL_TOKEN;
                } else if (codePoint === REVERSE_SOLIDUS) {
                  if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    value.push(this.consumeEscapedCodePoint());
                  } else {
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                  }
                } else {
                  value.push(codePoint);
                }
              }
            };
            Tokenizer2.prototype.consumeWhiteSpace = function() {
              while (isWhiteSpace(this.peekCodePoint(0))) {
                this.consumeCodePoint();
              }
            };
            Tokenizer2.prototype.consumeBadUrlRemnants = function() {
              while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                  return;
                }
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                  this.consumeEscapedCodePoint();
                }
              }
            };
            Tokenizer2.prototype.consumeStringSlice = function(count) {
              var SLICE_STACK_SIZE = 5e4;
              var value = "";
              while (count > 0) {
                var amount = Math.min(SLICE_STACK_SIZE, count);
                value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
                count -= amount;
              }
              this._value.shift();
              return value;
            };
            Tokenizer2.prototype.consumeStringToken = function(endingCodePoint) {
              var value = "";
              var i2 = 0;
              do {
                var codePoint = this._value[i2];
                if (codePoint === EOF || codePoint === void 0 || codePoint === endingCodePoint) {
                  value += this.consumeStringSlice(i2);
                  return { type: 0, value };
                }
                if (codePoint === LINE_FEED) {
                  this._value.splice(0, i2);
                  return BAD_STRING_TOKEN;
                }
                if (codePoint === REVERSE_SOLIDUS) {
                  var next = this._value[i2 + 1];
                  if (next !== EOF && next !== void 0) {
                    if (next === LINE_FEED) {
                      value += this.consumeStringSlice(i2);
                      i2 = -1;
                      this._value.shift();
                    } else if (isValidEscape(codePoint, next)) {
                      value += this.consumeStringSlice(i2);
                      value += fromCodePoint$1(this.consumeEscapedCodePoint());
                      i2 = -1;
                    }
                  }
                }
                i2++;
              } while (true);
            };
            Tokenizer2.prototype.consumeNumber = function() {
              var repr = [];
              var type = FLAG_INTEGER;
              var c1 = this.peekCodePoint(0);
              if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
                repr.push(this.consumeCodePoint());
              }
              while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
              }
              c1 = this.peekCodePoint(0);
              var c2 = this.peekCodePoint(1);
              if (c1 === FULL_STOP && isDigit(c2)) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                  repr.push(this.consumeCodePoint());
                }
              }
              c1 = this.peekCodePoint(0);
              c2 = this.peekCodePoint(1);
              var c3 = this.peekCodePoint(2);
              if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                  repr.push(this.consumeCodePoint());
                }
              }
              return [stringToNumber(repr), type];
            };
            Tokenizer2.prototype.consumeNumericToken = function() {
              var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
              var c1 = this.peekCodePoint(0);
              var c2 = this.peekCodePoint(1);
              var c3 = this.peekCodePoint(2);
              if (isIdentifierStart(c1, c2, c3)) {
                var unit = this.consumeName();
                return { type: 15, number, flags, unit };
              }
              if (c1 === PERCENTAGE_SIGN) {
                this.consumeCodePoint();
                return { type: 16, number, flags };
              }
              return { type: 17, number, flags };
            };
            Tokenizer2.prototype.consumeEscapedCodePoint = function() {
              var codePoint = this.consumeCodePoint();
              if (isHex(codePoint)) {
                var hex = fromCodePoint$1(codePoint);
                while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                  hex += fromCodePoint$1(this.consumeCodePoint());
                }
                if (isWhiteSpace(this.peekCodePoint(0))) {
                  this.consumeCodePoint();
                }
                var hexCodePoint = parseInt(hex, 16);
                if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 1114111) {
                  return REPLACEMENT_CHARACTER;
                }
                return hexCodePoint;
              }
              if (codePoint === EOF) {
                return REPLACEMENT_CHARACTER;
              }
              return codePoint;
            };
            Tokenizer2.prototype.consumeName = function() {
              var result = "";
              while (true) {
                var codePoint = this.consumeCodePoint();
                if (isNameCodePoint(codePoint)) {
                  result += fromCodePoint$1(codePoint);
                } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                  result += fromCodePoint$1(this.consumeEscapedCodePoint());
                } else {
                  this.reconsumeCodePoint(codePoint);
                  return result;
                }
              }
            };
            return Tokenizer2;
          })()
        );
        var Parser = (
          /** @class */
          (function() {
            function Parser2(tokens) {
              this._tokens = tokens;
            }
            Parser2.create = function(value) {
              var tokenizer = new Tokenizer();
              tokenizer.write(value);
              return new Parser2(tokenizer.read());
            };
            Parser2.parseValue = function(value) {
              return Parser2.create(value).parseComponentValue();
            };
            Parser2.parseValues = function(value) {
              return Parser2.create(value).parseComponentValues();
            };
            Parser2.prototype.parseComponentValue = function() {
              var token = this.consumeToken();
              while (token.type === 31) {
                token = this.consumeToken();
              }
              if (token.type === 32) {
                throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
              }
              this.reconsumeToken(token);
              var value = this.consumeComponentValue();
              do {
                token = this.consumeToken();
              } while (token.type === 31);
              if (token.type === 32) {
                return value;
              }
              throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
            };
            Parser2.prototype.parseComponentValues = function() {
              var values = [];
              while (true) {
                var value = this.consumeComponentValue();
                if (value.type === 32) {
                  return values;
                }
                values.push(value);
                values.push();
              }
            };
            Parser2.prototype.consumeComponentValue = function() {
              var token = this.consumeToken();
              switch (token.type) {
                case 11:
                case 28:
                case 2:
                  return this.consumeSimpleBlock(token.type);
                case 19:
                  return this.consumeFunction(token);
              }
              return token;
            };
            Parser2.prototype.consumeSimpleBlock = function(type) {
              var block = { type, values: [] };
              var token = this.consumeToken();
              while (true) {
                if (token.type === 32 || isEndingTokenFor(token, type)) {
                  return block;
                }
                this.reconsumeToken(token);
                block.values.push(this.consumeComponentValue());
                token = this.consumeToken();
              }
            };
            Parser2.prototype.consumeFunction = function(functionToken) {
              var cssFunction = {
                name: functionToken.value,
                values: [],
                type: 18
                /* FUNCTION */
              };
              while (true) {
                var token = this.consumeToken();
                if (token.type === 32 || token.type === 3) {
                  return cssFunction;
                }
                this.reconsumeToken(token);
                cssFunction.values.push(this.consumeComponentValue());
              }
            };
            Parser2.prototype.consumeToken = function() {
              var token = this._tokens.shift();
              return typeof token === "undefined" ? EOF_TOKEN : token;
            };
            Parser2.prototype.reconsumeToken = function(token) {
              this._tokens.unshift(token);
            };
            return Parser2;
          })()
        );
        var isDimensionToken = function(token) {
          return token.type === 15;
        };
        var isNumberToken = function(token) {
          return token.type === 17;
        };
        var isIdentToken = function(token) {
          return token.type === 20;
        };
        var isStringToken = function(token) {
          return token.type === 0;
        };
        var isIdentWithValue = function(token, value) {
          return isIdentToken(token) && token.value === value;
        };
        var nonWhiteSpace = function(token) {
          return token.type !== 31;
        };
        var nonFunctionArgSeparator = function(token) {
          return token.type !== 31 && token.type !== 4;
        };
        var parseFunctionArgs = function(tokens) {
          var args = [];
          var arg = [];
          tokens.forEach(function(token) {
            if (token.type === 4) {
              if (arg.length === 0) {
                throw new Error("Error parsing function args, zero tokens for arg");
              }
              args.push(arg);
              arg = [];
              return;
            }
            if (token.type !== 31) {
              arg.push(token);
            }
          });
          if (arg.length) {
            args.push(arg);
          }
          return args;
        };
        var isEndingTokenFor = function(token, type) {
          if (type === 11 && token.type === 12) {
            return true;
          }
          if (type === 28 && token.type === 29) {
            return true;
          }
          return type === 2 && token.type === 3;
        };
        var isLength = function(token) {
          return token.type === 17 || token.type === 15;
        };
        var isLengthPercentage = function(token) {
          return token.type === 16 || isLength(token);
        };
        var parseLengthPercentageTuple = function(tokens) {
          return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
        };
        var ZERO_LENGTH = {
          type: 17,
          number: 0,
          flags: FLAG_INTEGER
        };
        var FIFTY_PERCENT = {
          type: 16,
          number: 50,
          flags: FLAG_INTEGER
        };
        var HUNDRED_PERCENT = {
          type: 16,
          number: 100,
          flags: FLAG_INTEGER
        };
        var getAbsoluteValueForTuple = function(tuple, width, height) {
          var x = tuple[0], y = tuple[1];
          return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== "undefined" ? y : x, height)];
        };
        var getAbsoluteValue = function(token, parent) {
          if (token.type === 16) {
            return token.number / 100 * parent;
          }
          if (isDimensionToken(token)) {
            switch (token.unit) {
              case "rem":
              case "em":
                return 16 * token.number;
              // TODO use correct font-size
              case "px":
              default:
                return token.number;
            }
          }
          return token.number;
        };
        var DEG = "deg";
        var GRAD = "grad";
        var RAD = "rad";
        var TURN = "turn";
        var angle = {
          name: "angle",
          parse: function(_context, value) {
            if (value.type === 15) {
              switch (value.unit) {
                case DEG:
                  return Math.PI * value.number / 180;
                case GRAD:
                  return Math.PI / 200 * value.number;
                case RAD:
                  return value.number;
                case TURN:
                  return Math.PI * 2 * value.number;
              }
            }
            throw new Error("Unsupported angle type");
          }
        };
        var isAngle = function(value) {
          if (value.type === 15) {
            if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
              return true;
            }
          }
          return false;
        };
        var parseNamedSide = function(tokens) {
          var sideOrCorner = tokens.filter(isIdentToken).map(function(ident) {
            return ident.value;
          }).join(" ");
          switch (sideOrCorner) {
            case "to bottom right":
            case "to right bottom":
            case "left top":
            case "top left":
              return [ZERO_LENGTH, ZERO_LENGTH];
            case "to top":
            case "bottom":
              return deg(0);
            case "to bottom left":
            case "to left bottom":
            case "right top":
            case "top right":
              return [ZERO_LENGTH, HUNDRED_PERCENT];
            case "to right":
            case "left":
              return deg(90);
            case "to top left":
            case "to left top":
            case "right bottom":
            case "bottom right":
              return [HUNDRED_PERCENT, HUNDRED_PERCENT];
            case "to bottom":
            case "top":
              return deg(180);
            case "to top right":
            case "to right top":
            case "left bottom":
            case "bottom left":
              return [HUNDRED_PERCENT, ZERO_LENGTH];
            case "to left":
            case "right":
              return deg(270);
          }
          return 0;
        };
        var deg = function(deg2) {
          return Math.PI * deg2 / 180;
        };
        var color$1 = {
          name: "color",
          parse: function(context, value) {
            if (value.type === 18) {
              var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
              if (typeof colorFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported color function "' + value.name + '"');
              }
              return colorFunction(context, value.values);
            }
            if (value.type === 5) {
              if (value.value.length === 3) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
              }
              if (value.value.length === 4) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                var a2 = value.value.substring(3, 4);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a2 + a2, 16) / 255);
              }
              if (value.value.length === 6) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
              }
              if (value.value.length === 8) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                var a2 = value.value.substring(6, 8);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a2, 16) / 255);
              }
            }
            if (value.type === 20) {
              var namedColor = COLORS[value.value.toUpperCase()];
              if (typeof namedColor !== "undefined") {
                return namedColor;
              }
            }
            return COLORS.TRANSPARENT;
          }
        };
        var isTransparent = function(color2) {
          return (255 & color2) === 0;
        };
        var asString = function(color2) {
          var alpha = 255 & color2;
          var blue = 255 & color2 >> 8;
          var green = 255 & color2 >> 16;
          var red = 255 & color2 >> 24;
          return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
        };
        var pack = function(r, g, b, a2) {
          return (r << 24 | g << 16 | b << 8 | Math.round(a2 * 255) << 0) >>> 0;
        };
        var getTokenColorValue = function(token, i2) {
          if (token.type === 17) {
            return token.number;
          }
          if (token.type === 16) {
            var max = i2 === 3 ? 1 : 255;
            return i2 === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
          }
          return 0;
        };
        var rgb = function(_context, args) {
          var tokens = args.filter(nonFunctionArgSeparator);
          if (tokens.length === 3) {
            var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
            return pack(r, g, b, 1);
          }
          if (tokens.length === 4) {
            var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a2 = _b[3];
            return pack(r, g, b, a2);
          }
          return 0;
        };
        function hue2rgb(t1, t2, hue) {
          if (hue < 0) {
            hue += 1;
          }
          if (hue >= 1) {
            hue -= 1;
          }
          if (hue < 1 / 6) {
            return (t2 - t1) * hue * 6 + t1;
          } else if (hue < 1 / 2) {
            return t2;
          } else if (hue < 2 / 3) {
            return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
          } else {
            return t1;
          }
        }
        var hsl = function(context, args) {
          var tokens = args.filter(nonFunctionArgSeparator);
          var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
          var h = (hue.type === 17 ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
          var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
          var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
          var a2 = typeof alpha !== "undefined" && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
          if (s === 0) {
            return pack(l * 255, l * 255, l * 255, 1);
          }
          var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          var t1 = l * 2 - t2;
          var r = hue2rgb(t1, t2, h + 1 / 3);
          var g = hue2rgb(t1, t2, h);
          var b = hue2rgb(t1, t2, h - 1 / 3);
          return pack(r * 255, g * 255, b * 255, a2);
        };
        var SUPPORTED_COLOR_FUNCTIONS = {
          hsl,
          hsla: hsl,
          rgb,
          rgba: rgb
        };
        var parseColor = function(context, value) {
          return color$1.parse(context, Parser.create(value).parseComponentValue());
        };
        var COLORS = {
          ALICEBLUE: 4042850303,
          ANTIQUEWHITE: 4209760255,
          AQUA: 16777215,
          AQUAMARINE: 2147472639,
          AZURE: 4043309055,
          BEIGE: 4126530815,
          BISQUE: 4293182719,
          BLACK: 255,
          BLANCHEDALMOND: 4293643775,
          BLUE: 65535,
          BLUEVIOLET: 2318131967,
          BROWN: 2771004159,
          BURLYWOOD: 3736635391,
          CADETBLUE: 1604231423,
          CHARTREUSE: 2147418367,
          CHOCOLATE: 3530104575,
          CORAL: 4286533887,
          CORNFLOWERBLUE: 1687547391,
          CORNSILK: 4294499583,
          CRIMSON: 3692313855,
          CYAN: 16777215,
          DARKBLUE: 35839,
          DARKCYAN: 9145343,
          DARKGOLDENROD: 3095837695,
          DARKGRAY: 2846468607,
          DARKGREEN: 6553855,
          DARKGREY: 2846468607,
          DARKKHAKI: 3182914559,
          DARKMAGENTA: 2332068863,
          DARKOLIVEGREEN: 1433087999,
          DARKORANGE: 4287365375,
          DARKORCHID: 2570243327,
          DARKRED: 2332033279,
          DARKSALMON: 3918953215,
          DARKSEAGREEN: 2411499519,
          DARKSLATEBLUE: 1211993087,
          DARKSLATEGRAY: 793726975,
          DARKSLATEGREY: 793726975,
          DARKTURQUOISE: 13554175,
          DARKVIOLET: 2483082239,
          DEEPPINK: 4279538687,
          DEEPSKYBLUE: 12582911,
          DIMGRAY: 1768516095,
          DIMGREY: 1768516095,
          DODGERBLUE: 512819199,
          FIREBRICK: 2988581631,
          FLORALWHITE: 4294635775,
          FORESTGREEN: 579543807,
          FUCHSIA: 4278255615,
          GAINSBORO: 3705462015,
          GHOSTWHITE: 4177068031,
          GOLD: 4292280575,
          GOLDENROD: 3668254975,
          GRAY: 2155905279,
          GREEN: 8388863,
          GREENYELLOW: 2919182335,
          GREY: 2155905279,
          HONEYDEW: 4043305215,
          HOTPINK: 4285117695,
          INDIANRED: 3445382399,
          INDIGO: 1258324735,
          IVORY: 4294963455,
          KHAKI: 4041641215,
          LAVENDER: 3873897215,
          LAVENDERBLUSH: 4293981695,
          LAWNGREEN: 2096890111,
          LEMONCHIFFON: 4294626815,
          LIGHTBLUE: 2916673279,
          LIGHTCORAL: 4034953471,
          LIGHTCYAN: 3774873599,
          LIGHTGOLDENRODYELLOW: 4210742015,
          LIGHTGRAY: 3553874943,
          LIGHTGREEN: 2431553791,
          LIGHTGREY: 3553874943,
          LIGHTPINK: 4290167295,
          LIGHTSALMON: 4288707327,
          LIGHTSEAGREEN: 548580095,
          LIGHTSKYBLUE: 2278488831,
          LIGHTSLATEGRAY: 2005441023,
          LIGHTSLATEGREY: 2005441023,
          LIGHTSTEELBLUE: 2965692159,
          LIGHTYELLOW: 4294959359,
          LIME: 16711935,
          LIMEGREEN: 852308735,
          LINEN: 4210091775,
          MAGENTA: 4278255615,
          MAROON: 2147483903,
          MEDIUMAQUAMARINE: 1724754687,
          MEDIUMBLUE: 52735,
          MEDIUMORCHID: 3126187007,
          MEDIUMPURPLE: 2473647103,
          MEDIUMSEAGREEN: 1018393087,
          MEDIUMSLATEBLUE: 2070474495,
          MEDIUMSPRINGGREEN: 16423679,
          MEDIUMTURQUOISE: 1221709055,
          MEDIUMVIOLETRED: 3340076543,
          MIDNIGHTBLUE: 421097727,
          MINTCREAM: 4127193855,
          MISTYROSE: 4293190143,
          MOCCASIN: 4293178879,
          NAVAJOWHITE: 4292783615,
          NAVY: 33023,
          OLDLACE: 4260751103,
          OLIVE: 2155872511,
          OLIVEDRAB: 1804477439,
          ORANGE: 4289003775,
          ORANGERED: 4282712319,
          ORCHID: 3664828159,
          PALEGOLDENROD: 4008225535,
          PALEGREEN: 2566625535,
          PALETURQUOISE: 2951671551,
          PALEVIOLETRED: 3681588223,
          PAPAYAWHIP: 4293907967,
          PEACHPUFF: 4292524543,
          PERU: 3448061951,
          PINK: 4290825215,
          PLUM: 3718307327,
          POWDERBLUE: 2967529215,
          PURPLE: 2147516671,
          REBECCAPURPLE: 1714657791,
          RED: 4278190335,
          ROSYBROWN: 3163525119,
          ROYALBLUE: 1097458175,
          SADDLEBROWN: 2336560127,
          SALMON: 4202722047,
          SANDYBROWN: 4104413439,
          SEAGREEN: 780883967,
          SEASHELL: 4294307583,
          SIENNA: 2689740287,
          SILVER: 3233857791,
          SKYBLUE: 2278484991,
          SLATEBLUE: 1784335871,
          SLATEGRAY: 1887473919,
          SLATEGREY: 1887473919,
          SNOW: 4294638335,
          SPRINGGREEN: 16744447,
          STEELBLUE: 1182971135,
          TAN: 3535047935,
          TEAL: 8421631,
          THISTLE: 3636451583,
          TOMATO: 4284696575,
          TRANSPARENT: 0,
          TURQUOISE: 1088475391,
          VIOLET: 4001558271,
          WHEAT: 4125012991,
          WHITE: 4294967295,
          WHITESMOKE: 4126537215,
          YELLOW: 4294902015,
          YELLOWGREEN: 2597139199
        };
        var backgroundClip = {
          name: "background-clip",
          initialValue: "border-box",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.map(function(token) {
              if (isIdentToken(token)) {
                switch (token.value) {
                  case "padding-box":
                    return 1;
                  case "content-box":
                    return 2;
                }
              }
              return 0;
            });
          }
        };
        var backgroundColor = {
          name: "background-color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var parseColorStop = function(context, args) {
          var color2 = color$1.parse(context, args[0]);
          var stop = args[1];
          return stop && isLengthPercentage(stop) ? { color: color2, stop } : { color: color2, stop: null };
        };
        var processColorStops = function(stops, lineLength) {
          var first = stops[0];
          var last2 = stops[stops.length - 1];
          if (first.stop === null) {
            first.stop = ZERO_LENGTH;
          }
          if (last2.stop === null) {
            last2.stop = HUNDRED_PERCENT;
          }
          var processStops = [];
          var previous = 0;
          for (var i2 = 0; i2 < stops.length; i2++) {
            var stop_1 = stops[i2].stop;
            if (stop_1 !== null) {
              var absoluteValue = getAbsoluteValue(stop_1, lineLength);
              if (absoluteValue > previous) {
                processStops.push(absoluteValue);
              } else {
                processStops.push(previous);
              }
              previous = absoluteValue;
            } else {
              processStops.push(null);
            }
          }
          var gapBegin = null;
          for (var i2 = 0; i2 < processStops.length; i2++) {
            var stop_2 = processStops[i2];
            if (stop_2 === null) {
              if (gapBegin === null) {
                gapBegin = i2;
              }
            } else if (gapBegin !== null) {
              var gapLength = i2 - gapBegin;
              var beforeGap = processStops[gapBegin - 1];
              var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
              for (var g = 1; g <= gapLength; g++) {
                processStops[gapBegin + g - 1] = gapValue * g;
              }
              gapBegin = null;
            }
          }
          return stops.map(function(_a, i3) {
            var color2 = _a.color;
            return { color: color2, stop: Math.max(Math.min(1, processStops[i3] / lineLength), 0) };
          });
        };
        var getAngleFromCorner = function(corner, width, height) {
          var centerX = width / 2;
          var centerY = height / 2;
          var x = getAbsoluteValue(corner[0], width) - centerX;
          var y = centerY - getAbsoluteValue(corner[1], height);
          return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
        };
        var calculateGradientDirection = function(angle2, width, height) {
          var radian = typeof angle2 === "number" ? angle2 : getAngleFromCorner(angle2, width, height);
          var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
          var halfWidth = width / 2;
          var halfHeight = height / 2;
          var halfLineLength = lineLength / 2;
          var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
          var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
          return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
        };
        var distance = function(a2, b) {
          return Math.sqrt(a2 * a2 + b * b);
        };
        var findCorner = function(width, height, x, y, closest) {
          var corners = [
            [0, 0],
            [0, height],
            [width, 0],
            [width, height]
          ];
          return corners.reduce(function(stat, corner) {
            var cx = corner[0], cy = corner[1];
            var d = distance(x - cx, y - cy);
            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
              return {
                optimumCorner: corner,
                optimumDistance: d
              };
            }
            return stat;
          }, {
            optimumDistance: closest ? Infinity : -Infinity,
            optimumCorner: null
          }).optimumCorner;
        };
        var calculateRadius = function(gradient, x, y, width, height) {
          var rx = 0;
          var ry = 0;
          switch (gradient.size) {
            case 0:
              if (gradient.shape === 0) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
              } else if (gradient.shape === 1) {
                rx = Math.min(Math.abs(x), Math.abs(x - width));
                ry = Math.min(Math.abs(y), Math.abs(y - height));
              }
              break;
            case 2:
              if (gradient.shape === 0) {
                rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
              } else if (gradient.shape === 1) {
                var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
                var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
              }
              break;
            case 1:
              if (gradient.shape === 0) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
              } else if (gradient.shape === 1) {
                rx = Math.max(Math.abs(x), Math.abs(x - width));
                ry = Math.max(Math.abs(y), Math.abs(y - height));
              }
              break;
            case 3:
              if (gradient.shape === 0) {
                rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
              } else if (gradient.shape === 1) {
                var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
                var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
              }
              break;
          }
          if (Array.isArray(gradient.size)) {
            rx = getAbsoluteValue(gradient.size[0], width);
            ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
          }
          return [rx, ry];
        };
        var linearGradient = function(context, tokens) {
          var angle$1 = deg(180);
          var stops = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            if (i2 === 0) {
              var firstToken = arg[0];
              if (firstToken.type === 20 && firstToken.value === "to") {
                angle$1 = parseNamedSide(arg);
                return;
              } else if (isAngle(firstToken)) {
                angle$1 = angle.parse(context, firstToken);
                return;
              }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
          });
          return {
            angle: angle$1,
            stops,
            type: 1
            /* LINEAR_GRADIENT */
          };
        };
        var prefixLinearGradient = function(context, tokens) {
          var angle$1 = deg(180);
          var stops = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            if (i2 === 0) {
              var firstToken = arg[0];
              if (firstToken.type === 20 && ["top", "left", "right", "bottom"].indexOf(firstToken.value) !== -1) {
                angle$1 = parseNamedSide(arg);
                return;
              } else if (isAngle(firstToken)) {
                angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
                return;
              }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
          });
          return {
            angle: angle$1,
            stops,
            type: 1
            /* LINEAR_GRADIENT */
          };
        };
        var webkitGradient = function(context, tokens) {
          var angle2 = deg(180);
          var stops = [];
          var type = 1;
          var shape = 0;
          var size = 3;
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var firstToken = arg[0];
            if (i2 === 0) {
              if (isIdentToken(firstToken) && firstToken.value === "linear") {
                type = 1;
                return;
              } else if (isIdentToken(firstToken) && firstToken.value === "radial") {
                type = 2;
                return;
              }
            }
            if (firstToken.type === 18) {
              if (firstToken.name === "from") {
                var color2 = color$1.parse(context, firstToken.values[0]);
                stops.push({ stop: ZERO_LENGTH, color: color2 });
              } else if (firstToken.name === "to") {
                var color2 = color$1.parse(context, firstToken.values[0]);
                stops.push({ stop: HUNDRED_PERCENT, color: color2 });
              } else if (firstToken.name === "color-stop") {
                var values = firstToken.values.filter(nonFunctionArgSeparator);
                if (values.length === 2) {
                  var color2 = color$1.parse(context, values[1]);
                  var stop_1 = values[0];
                  if (isNumberToken(stop_1)) {
                    stops.push({
                      stop: { type: 16, number: stop_1.number * 100, flags: stop_1.flags },
                      color: color2
                    });
                  }
                }
              }
            }
          });
          return type === 1 ? {
            angle: (angle2 + deg(180)) % deg(360),
            stops,
            type
          } : { size, shape, stops, position: position2, type };
        };
        var CLOSEST_SIDE = "closest-side";
        var FARTHEST_SIDE = "farthest-side";
        var CLOSEST_CORNER = "closest-corner";
        var FARTHEST_CORNER = "farthest-corner";
        var CIRCLE = "circle";
        var ELLIPSE = "ellipse";
        var COVER = "cover";
        var CONTAIN = "contain";
        var radialGradient = function(context, tokens) {
          var shape = 0;
          var size = 3;
          var stops = [];
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var isColorStop = true;
            if (i2 === 0) {
              var isAtPosition_1 = false;
              isColorStop = arg.reduce(function(acc, token) {
                if (isAtPosition_1) {
                  if (isIdentToken(token)) {
                    switch (token.value) {
                      case "center":
                        position2.push(FIFTY_PERCENT);
                        return acc;
                      case "top":
                      case "left":
                        position2.push(ZERO_LENGTH);
                        return acc;
                      case "right":
                      case "bottom":
                        position2.push(HUNDRED_PERCENT);
                        return acc;
                    }
                  } else if (isLengthPercentage(token) || isLength(token)) {
                    position2.push(token);
                  }
                } else if (isIdentToken(token)) {
                  switch (token.value) {
                    case CIRCLE:
                      shape = 0;
                      return false;
                    case ELLIPSE:
                      shape = 1;
                      return false;
                    case "at":
                      isAtPosition_1 = true;
                      return false;
                    case CLOSEST_SIDE:
                      size = 0;
                      return false;
                    case COVER:
                    case FARTHEST_SIDE:
                      size = 1;
                      return false;
                    case CONTAIN:
                    case CLOSEST_CORNER:
                      size = 2;
                      return false;
                    case FARTHEST_CORNER:
                      size = 3;
                      return false;
                  }
                } else if (isLength(token) || isLengthPercentage(token)) {
                  if (!Array.isArray(size)) {
                    size = [];
                  }
                  size.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            }
            if (isColorStop) {
              var colorStop = parseColorStop(context, arg);
              stops.push(colorStop);
            }
          });
          return {
            size,
            shape,
            stops,
            position: position2,
            type: 2
            /* RADIAL_GRADIENT */
          };
        };
        var prefixRadialGradient = function(context, tokens) {
          var shape = 0;
          var size = 3;
          var stops = [];
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var isColorStop = true;
            if (i2 === 0) {
              isColorStop = arg.reduce(function(acc, token) {
                if (isIdentToken(token)) {
                  switch (token.value) {
                    case "center":
                      position2.push(FIFTY_PERCENT);
                      return false;
                    case "top":
                    case "left":
                      position2.push(ZERO_LENGTH);
                      return false;
                    case "right":
                    case "bottom":
                      position2.push(HUNDRED_PERCENT);
                      return false;
                  }
                } else if (isLengthPercentage(token) || isLength(token)) {
                  position2.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            } else if (i2 === 1) {
              isColorStop = arg.reduce(function(acc, token) {
                if (isIdentToken(token)) {
                  switch (token.value) {
                    case CIRCLE:
                      shape = 0;
                      return false;
                    case ELLIPSE:
                      shape = 1;
                      return false;
                    case CONTAIN:
                    case CLOSEST_SIDE:
                      size = 0;
                      return false;
                    case FARTHEST_SIDE:
                      size = 1;
                      return false;
                    case CLOSEST_CORNER:
                      size = 2;
                      return false;
                    case COVER:
                    case FARTHEST_CORNER:
                      size = 3;
                      return false;
                  }
                } else if (isLength(token) || isLengthPercentage(token)) {
                  if (!Array.isArray(size)) {
                    size = [];
                  }
                  size.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            }
            if (isColorStop) {
              var colorStop = parseColorStop(context, arg);
              stops.push(colorStop);
            }
          });
          return {
            size,
            shape,
            stops,
            position: position2,
            type: 2
            /* RADIAL_GRADIENT */
          };
        };
        var isLinearGradient = function(background) {
          return background.type === 1;
        };
        var isRadialGradient = function(background) {
          return background.type === 2;
        };
        var image = {
          name: "image",
          parse: function(context, value) {
            if (value.type === 22) {
              var image_1 = {
                url: value.value,
                type: 0
                /* URL */
              };
              context.cache.addImage(value.value);
              return image_1;
            }
            if (value.type === 18) {
              var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
              if (typeof imageFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported image function "' + value.name + '"');
              }
              return imageFunction(context, value.values);
            }
            throw new Error("Unsupported image type " + value.type);
          }
        };
        function isSupportedImage(value) {
          return !(value.type === 20 && value.value === "none") && (value.type !== 18 || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
        }
        var SUPPORTED_IMAGE_FUNCTIONS = {
          "linear-gradient": linearGradient,
          "-moz-linear-gradient": prefixLinearGradient,
          "-ms-linear-gradient": prefixLinearGradient,
          "-o-linear-gradient": prefixLinearGradient,
          "-webkit-linear-gradient": prefixLinearGradient,
          "radial-gradient": radialGradient,
          "-moz-radial-gradient": prefixRadialGradient,
          "-ms-radial-gradient": prefixRadialGradient,
          "-o-radial-gradient": prefixRadialGradient,
          "-webkit-radial-gradient": prefixRadialGradient,
          "-webkit-gradient": webkitGradient
        };
        var backgroundImage = {
          name: "background-image",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return [];
            }
            return tokens.filter(function(value) {
              return nonFunctionArgSeparator(value) && isSupportedImage(value);
            }).map(function(value) {
              return image.parse(context, value);
            });
          }
        };
        var backgroundOrigin = {
          name: "background-origin",
          initialValue: "border-box",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.map(function(token) {
              if (isIdentToken(token)) {
                switch (token.value) {
                  case "padding-box":
                    return 1;
                  case "content-box":
                    return 2;
                }
              }
              return 0;
            });
          }
        };
        var backgroundPosition = {
          name: "background-position",
          initialValue: "0% 0%",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isLengthPercentage);
            }).map(parseLengthPercentageTuple);
          }
        };
        var backgroundRepeat = {
          name: "background-repeat",
          initialValue: "repeat",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isIdentToken).map(function(token) {
                return token.value;
              }).join(" ");
            }).map(parseBackgroundRepeat);
          }
        };
        var parseBackgroundRepeat = function(value) {
          switch (value) {
            case "no-repeat":
              return 1;
            case "repeat-x":
            case "repeat no-repeat":
              return 2;
            case "repeat-y":
            case "no-repeat repeat":
              return 3;
            case "repeat":
            default:
              return 0;
          }
        };
        var BACKGROUND_SIZE;
        (function(BACKGROUND_SIZE2) {
          BACKGROUND_SIZE2["AUTO"] = "auto";
          BACKGROUND_SIZE2["CONTAIN"] = "contain";
          BACKGROUND_SIZE2["COVER"] = "cover";
        })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
        var backgroundSize = {
          name: "background-size",
          initialValue: "0",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isBackgroundSizeInfoToken);
            });
          }
        };
        var isBackgroundSizeInfoToken = function(value) {
          return isIdentToken(value) || isLengthPercentage(value);
        };
        var borderColorForSide = function(side) {
          return {
            name: "border-" + side + "-color",
            initialValue: "transparent",
            prefix: false,
            type: 3,
            format: "color"
          };
        };
        var borderTopColor = borderColorForSide("top");
        var borderRightColor = borderColorForSide("right");
        var borderBottomColor = borderColorForSide("bottom");
        var borderLeftColor = borderColorForSide("left");
        var borderRadiusForSide = function(side) {
          return {
            name: "border-radius-" + side,
            initialValue: "0 0",
            prefix: false,
            type: 1,
            parse: function(_context, tokens) {
              return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
            }
          };
        };
        var borderTopLeftRadius = borderRadiusForSide("top-left");
        var borderTopRightRadius = borderRadiusForSide("top-right");
        var borderBottomRightRadius = borderRadiusForSide("bottom-right");
        var borderBottomLeftRadius = borderRadiusForSide("bottom-left");
        var borderStyleForSide = function(side) {
          return {
            name: "border-" + side + "-style",
            initialValue: "solid",
            prefix: false,
            type: 2,
            parse: function(_context, style) {
              switch (style) {
                case "none":
                  return 0;
                case "dashed":
                  return 2;
                case "dotted":
                  return 3;
                case "double":
                  return 4;
              }
              return 1;
            }
          };
        };
        var borderTopStyle = borderStyleForSide("top");
        var borderRightStyle = borderStyleForSide("right");
        var borderBottomStyle = borderStyleForSide("bottom");
        var borderLeftStyle = borderStyleForSide("left");
        var borderWidthForSide = function(side) {
          return {
            name: "border-" + side + "-width",
            initialValue: "0",
            type: 0,
            prefix: false,
            parse: function(_context, token) {
              if (isDimensionToken(token)) {
                return token.number;
              }
              return 0;
            }
          };
        };
        var borderTopWidth = borderWidthForSide("top");
        var borderRightWidth = borderWidthForSide("right");
        var borderBottomWidth = borderWidthForSide("bottom");
        var borderLeftWidth = borderWidthForSide("left");
        var color = {
          name: "color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var direction = {
          name: "direction",
          initialValue: "ltr",
          prefix: false,
          type: 2,
          parse: function(_context, direction2) {
            switch (direction2) {
              case "rtl":
                return 1;
              case "ltr":
              default:
                return 0;
            }
          }
        };
        var display = {
          name: "display",
          initialValue: "inline-block",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).reduce(
              function(bit, token) {
                return bit | parseDisplayValue(token.value);
              },
              0
              /* NONE */
            );
          }
        };
        var parseDisplayValue = function(display2) {
          switch (display2) {
            case "block":
            case "-webkit-box":
              return 2;
            case "inline":
              return 4;
            case "run-in":
              return 8;
            case "flow":
              return 16;
            case "flow-root":
              return 32;
            case "table":
              return 64;
            case "flex":
            case "-webkit-flex":
              return 128;
            case "grid":
            case "-ms-grid":
              return 256;
            case "ruby":
              return 512;
            case "subgrid":
              return 1024;
            case "list-item":
              return 2048;
            case "table-row-group":
              return 4096;
            case "table-header-group":
              return 8192;
            case "table-footer-group":
              return 16384;
            case "table-row":
              return 32768;
            case "table-cell":
              return 65536;
            case "table-column-group":
              return 131072;
            case "table-column":
              return 262144;
            case "table-caption":
              return 524288;
            case "ruby-base":
              return 1048576;
            case "ruby-text":
              return 2097152;
            case "ruby-base-container":
              return 4194304;
            case "ruby-text-container":
              return 8388608;
            case "contents":
              return 16777216;
            case "inline-block":
              return 33554432;
            case "inline-list-item":
              return 67108864;
            case "inline-table":
              return 134217728;
            case "inline-flex":
              return 268435456;
            case "inline-grid":
              return 536870912;
          }
          return 0;
        };
        var float = {
          name: "float",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, float2) {
            switch (float2) {
              case "left":
                return 1;
              case "right":
                return 2;
              case "inline-start":
                return 3;
              case "inline-end":
                return 4;
            }
            return 0;
          }
        };
        var letterSpacing = {
          name: "letter-spacing",
          initialValue: "0",
          prefix: false,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20 && token.value === "normal") {
              return 0;
            }
            if (token.type === 17) {
              return token.number;
            }
            if (token.type === 15) {
              return token.number;
            }
            return 0;
          }
        };
        var LINE_BREAK;
        (function(LINE_BREAK2) {
          LINE_BREAK2["NORMAL"] = "normal";
          LINE_BREAK2["STRICT"] = "strict";
        })(LINE_BREAK || (LINE_BREAK = {}));
        var lineBreak = {
          name: "line-break",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, lineBreak2) {
            switch (lineBreak2) {
              case "strict":
                return LINE_BREAK.STRICT;
              case "normal":
              default:
                return LINE_BREAK.NORMAL;
            }
          }
        };
        var lineHeight = {
          name: "line-height",
          initialValue: "normal",
          prefix: false,
          type: 4
          /* TOKEN_VALUE */
        };
        var computeLineHeight = function(token, fontSize2) {
          if (isIdentToken(token) && token.value === "normal") {
            return 1.2 * fontSize2;
          } else if (token.type === 17) {
            return fontSize2 * token.number;
          } else if (isLengthPercentage(token)) {
            return getAbsoluteValue(token, fontSize2);
          }
          return fontSize2;
        };
        var listStyleImage = {
          name: "list-style-image",
          initialValue: "none",
          type: 0,
          prefix: false,
          parse: function(context, token) {
            if (token.type === 20 && token.value === "none") {
              return null;
            }
            return image.parse(context, token);
          }
        };
        var listStylePosition = {
          name: "list-style-position",
          initialValue: "outside",
          prefix: false,
          type: 2,
          parse: function(_context, position2) {
            switch (position2) {
              case "inside":
                return 0;
              case "outside":
              default:
                return 1;
            }
          }
        };
        var listStyleType = {
          name: "list-style-type",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, type) {
            switch (type) {
              case "disc":
                return 0;
              case "circle":
                return 1;
              case "square":
                return 2;
              case "decimal":
                return 3;
              case "cjk-decimal":
                return 4;
              case "decimal-leading-zero":
                return 5;
              case "lower-roman":
                return 6;
              case "upper-roman":
                return 7;
              case "lower-greek":
                return 8;
              case "lower-alpha":
                return 9;
              case "upper-alpha":
                return 10;
              case "arabic-indic":
                return 11;
              case "armenian":
                return 12;
              case "bengali":
                return 13;
              case "cambodian":
                return 14;
              case "cjk-earthly-branch":
                return 15;
              case "cjk-heavenly-stem":
                return 16;
              case "cjk-ideographic":
                return 17;
              case "devanagari":
                return 18;
              case "ethiopic-numeric":
                return 19;
              case "georgian":
                return 20;
              case "gujarati":
                return 21;
              case "gurmukhi":
                return 22;
              case "hebrew":
                return 22;
              case "hiragana":
                return 23;
              case "hiragana-iroha":
                return 24;
              case "japanese-formal":
                return 25;
              case "japanese-informal":
                return 26;
              case "kannada":
                return 27;
              case "katakana":
                return 28;
              case "katakana-iroha":
                return 29;
              case "khmer":
                return 30;
              case "korean-hangul-formal":
                return 31;
              case "korean-hanja-formal":
                return 32;
              case "korean-hanja-informal":
                return 33;
              case "lao":
                return 34;
              case "lower-armenian":
                return 35;
              case "malayalam":
                return 36;
              case "mongolian":
                return 37;
              case "myanmar":
                return 38;
              case "oriya":
                return 39;
              case "persian":
                return 40;
              case "simp-chinese-formal":
                return 41;
              case "simp-chinese-informal":
                return 42;
              case "tamil":
                return 43;
              case "telugu":
                return 44;
              case "thai":
                return 45;
              case "tibetan":
                return 46;
              case "trad-chinese-formal":
                return 47;
              case "trad-chinese-informal":
                return 48;
              case "upper-armenian":
                return 49;
              case "disclosure-open":
                return 50;
              case "disclosure-closed":
                return 51;
              case "none":
              default:
                return -1;
            }
          }
        };
        var marginForSide = function(side) {
          return {
            name: "margin-" + side,
            initialValue: "0",
            prefix: false,
            type: 4
            /* TOKEN_VALUE */
          };
        };
        var marginTop = marginForSide("top");
        var marginRight = marginForSide("right");
        var marginBottom = marginForSide("bottom");
        var marginLeft = marginForSide("left");
        var overflow = {
          name: "overflow",
          initialValue: "visible",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(overflow2) {
              switch (overflow2.value) {
                case "hidden":
                  return 1;
                case "scroll":
                  return 2;
                case "clip":
                  return 3;
                case "auto":
                  return 4;
                case "visible":
                default:
                  return 0;
              }
            });
          }
        };
        var overflowWrap = {
          name: "overflow-wrap",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, overflow2) {
            switch (overflow2) {
              case "break-word":
                return "break-word";
              case "normal":
              default:
                return "normal";
            }
          }
        };
        var paddingForSide = function(side) {
          return {
            name: "padding-" + side,
            initialValue: "0",
            prefix: false,
            type: 3,
            format: "length-percentage"
          };
        };
        var paddingTop = paddingForSide("top");
        var paddingRight = paddingForSide("right");
        var paddingBottom = paddingForSide("bottom");
        var paddingLeft = paddingForSide("left");
        var textAlign = {
          name: "text-align",
          initialValue: "left",
          prefix: false,
          type: 2,
          parse: function(_context, textAlign2) {
            switch (textAlign2) {
              case "right":
                return 2;
              case "center":
              case "justify":
                return 1;
              case "left":
              default:
                return 0;
            }
          }
        };
        var position = {
          name: "position",
          initialValue: "static",
          prefix: false,
          type: 2,
          parse: function(_context, position2) {
            switch (position2) {
              case "relative":
                return 1;
              case "absolute":
                return 2;
              case "fixed":
                return 3;
              case "sticky":
                return 4;
            }
            return 0;
          }
        };
        var textShadow = {
          name: "text-shadow",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
              return [];
            }
            return parseFunctionArgs(tokens).map(function(values) {
              var shadow = {
                color: COLORS.TRANSPARENT,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH
              };
              var c = 0;
              for (var i2 = 0; i2 < values.length; i2++) {
                var token = values[i2];
                if (isLength(token)) {
                  if (c === 0) {
                    shadow.offsetX = token;
                  } else if (c === 1) {
                    shadow.offsetY = token;
                  } else {
                    shadow.blur = token;
                  }
                  c++;
                } else {
                  shadow.color = color$1.parse(context, token);
                }
              }
              return shadow;
            });
          }
        };
        var textTransform = {
          name: "text-transform",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, textTransform2) {
            switch (textTransform2) {
              case "uppercase":
                return 2;
              case "lowercase":
                return 1;
              case "capitalize":
                return 3;
            }
            return 0;
          }
        };
        var transform$1 = {
          name: "transform",
          initialValue: "none",
          prefix: true,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20 && token.value === "none") {
              return null;
            }
            if (token.type === 18) {
              var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
              if (typeof transformFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported transform function "' + token.name + '"');
              }
              return transformFunction(token.values);
            }
            return null;
          }
        };
        var matrix = function(args) {
          var values = args.filter(function(arg) {
            return arg.type === 17;
          }).map(function(arg) {
            return arg.number;
          });
          return values.length === 6 ? values : null;
        };
        var matrix3d = function(args) {
          var values = args.filter(function(arg) {
            return arg.type === 17;
          }).map(function(arg) {
            return arg.number;
          });
          var a1 = values[0], b1 = values[1];
          values[2];
          values[3];
          var a2 = values[4], b2 = values[5];
          values[6];
          values[7];
          values[8];
          values[9];
          values[10];
          values[11];
          var a4 = values[12], b4 = values[13];
          values[14];
          values[15];
          return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
        };
        var SUPPORTED_TRANSFORM_FUNCTIONS = {
          matrix,
          matrix3d
        };
        var DEFAULT_VALUE = {
          type: 16,
          number: 50,
          flags: FLAG_INTEGER
        };
        var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
        var transformOrigin = {
          name: "transform-origin",
          initialValue: "50% 50%",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            var origins = tokens.filter(isLengthPercentage);
            if (origins.length !== 2) {
              return DEFAULT;
            }
            return [origins[0], origins[1]];
          }
        };
        var visibility = {
          name: "visible",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, visibility2) {
            switch (visibility2) {
              case "hidden":
                return 1;
              case "collapse":
                return 2;
              case "visible":
              default:
                return 0;
            }
          }
        };
        var WORD_BREAK;
        (function(WORD_BREAK2) {
          WORD_BREAK2["NORMAL"] = "normal";
          WORD_BREAK2["BREAK_ALL"] = "break-all";
          WORD_BREAK2["KEEP_ALL"] = "keep-all";
        })(WORD_BREAK || (WORD_BREAK = {}));
        var wordBreak = {
          name: "word-break",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, wordBreak2) {
            switch (wordBreak2) {
              case "break-all":
                return WORD_BREAK.BREAK_ALL;
              case "keep-all":
                return WORD_BREAK.KEEP_ALL;
              case "normal":
              default:
                return WORD_BREAK.NORMAL;
            }
          }
        };
        var zIndex = {
          name: "z-index",
          initialValue: "auto",
          prefix: false,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20) {
              return { auto: true, order: 0 };
            }
            if (isNumberToken(token)) {
              return { auto: false, order: token.number };
            }
            throw new Error("Invalid z-index number parsed");
          }
        };
        var time = {
          name: "time",
          parse: function(_context, value) {
            if (value.type === 15) {
              switch (value.unit.toLowerCase()) {
                case "s":
                  return 1e3 * value.number;
                case "ms":
                  return value.number;
              }
            }
            throw new Error("Unsupported time type");
          }
        };
        var opacity = {
          name: "opacity",
          initialValue: "1",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isNumberToken(token)) {
              return token.number;
            }
            return 1;
          }
        };
        var textDecorationColor = {
          name: "text-decoration-color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var textDecorationLine = {
          name: "text-decoration-line",
          initialValue: "none",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(token) {
              switch (token.value) {
                case "underline":
                  return 1;
                case "overline":
                  return 2;
                case "line-through":
                  return 3;
                case "none":
                  return 4;
              }
              return 0;
            }).filter(function(line) {
              return line !== 0;
            });
          }
        };
        var fontFamily = {
          name: "font-family",
          initialValue: "",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            var accumulator = [];
            var results = [];
            tokens.forEach(function(token) {
              switch (token.type) {
                case 20:
                case 0:
                  accumulator.push(token.value);
                  break;
                case 17:
                  accumulator.push(token.number.toString());
                  break;
                case 4:
                  results.push(accumulator.join(" "));
                  accumulator.length = 0;
                  break;
              }
            });
            if (accumulator.length) {
              results.push(accumulator.join(" "));
            }
            return results.map(function(result) {
              return result.indexOf(" ") === -1 ? result : "'" + result + "'";
            });
          }
        };
        var fontSize = {
          name: "font-size",
          initialValue: "0",
          prefix: false,
          type: 3,
          format: "length"
        };
        var fontWeight = {
          name: "font-weight",
          initialValue: "normal",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isNumberToken(token)) {
              return token.number;
            }
            if (isIdentToken(token)) {
              switch (token.value) {
                case "bold":
                  return 700;
                case "normal":
                default:
                  return 400;
              }
            }
            return 400;
          }
        };
        var fontVariant = {
          name: "font-variant",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(token) {
              return token.value;
            });
          }
        };
        var fontStyle = {
          name: "font-style",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, overflow2) {
            switch (overflow2) {
              case "oblique":
                return "oblique";
              case "italic":
                return "italic";
              case "normal":
              default:
                return "normal";
            }
          }
        };
        var contains = function(bit, value) {
          return (bit & value) !== 0;
        };
        var content = {
          name: "content",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return [];
            }
            return tokens;
          }
        };
        var counterIncrement = {
          name: "counter-increment",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return null;
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return null;
            }
            var increments = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i2 = 0; i2 < filtered.length; i2++) {
              var counter = filtered[i2];
              var next = filtered[i2 + 1];
              if (counter.type === 20) {
                var increment = next && isNumberToken(next) ? next.number : 1;
                increments.push({ counter: counter.value, increment });
              }
            }
            return increments;
          }
        };
        var counterReset = {
          name: "counter-reset",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var resets = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i2 = 0; i2 < filtered.length; i2++) {
              var counter = filtered[i2];
              var next = filtered[i2 + 1];
              if (isIdentToken(counter) && counter.value !== "none") {
                var reset = next && isNumberToken(next) ? next.number : 0;
                resets.push({ counter: counter.value, reset });
              }
            }
            return resets;
          }
        };
        var duration = {
          name: "duration",
          initialValue: "0s",
          prefix: false,
          type: 1,
          parse: function(context, tokens) {
            return tokens.filter(isDimensionToken).map(function(token) {
              return time.parse(context, token);
            });
          }
        };
        var quotes = {
          name: "quotes",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return null;
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return null;
            }
            var quotes2 = [];
            var filtered = tokens.filter(isStringToken);
            if (filtered.length % 2 !== 0) {
              return null;
            }
            for (var i2 = 0; i2 < filtered.length; i2 += 2) {
              var open_1 = filtered[i2].value;
              var close_1 = filtered[i2 + 1].value;
              quotes2.push({ open: open_1, close: close_1 });
            }
            return quotes2;
          }
        };
        var getQuote = function(quotes2, depth, open) {
          if (!quotes2) {
            return "";
          }
          var quote = quotes2[Math.min(depth, quotes2.length - 1)];
          if (!quote) {
            return "";
          }
          return open ? quote.open : quote.close;
        };
        var boxShadow = {
          name: "box-shadow",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
              return [];
            }
            return parseFunctionArgs(tokens).map(function(values) {
              var shadow = {
                color: 255,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH,
                spread: ZERO_LENGTH,
                inset: false
              };
              var c = 0;
              for (var i2 = 0; i2 < values.length; i2++) {
                var token = values[i2];
                if (isIdentWithValue(token, "inset")) {
                  shadow.inset = true;
                } else if (isLength(token)) {
                  if (c === 0) {
                    shadow.offsetX = token;
                  } else if (c === 1) {
                    shadow.offsetY = token;
                  } else if (c === 2) {
                    shadow.blur = token;
                  } else {
                    shadow.spread = token;
                  }
                  c++;
                } else {
                  shadow.color = color$1.parse(context, token);
                }
              }
              return shadow;
            });
          }
        };
        var paintOrder = {
          name: "paint-order",
          initialValue: "normal",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            var DEFAULT_VALUE2 = [
              0,
              1,
              2
              /* MARKERS */
            ];
            var layers = [];
            tokens.filter(isIdentToken).forEach(function(token) {
              switch (token.value) {
                case "stroke":
                  layers.push(
                    1
                    /* STROKE */
                  );
                  break;
                case "fill":
                  layers.push(
                    0
                    /* FILL */
                  );
                  break;
                case "markers":
                  layers.push(
                    2
                    /* MARKERS */
                  );
                  break;
              }
            });
            DEFAULT_VALUE2.forEach(function(value) {
              if (layers.indexOf(value) === -1) {
                layers.push(value);
              }
            });
            return layers;
          }
        };
        var webkitTextStrokeColor = {
          name: "-webkit-text-stroke-color",
          initialValue: "currentcolor",
          prefix: false,
          type: 3,
          format: "color"
        };
        var webkitTextStrokeWidth = {
          name: "-webkit-text-stroke-width",
          initialValue: "0",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isDimensionToken(token)) {
              return token.number;
            }
            return 0;
          }
        };
        var CSSParsedDeclaration = (
          /** @class */
          (function() {
            function CSSParsedDeclaration2(context, declaration) {
              var _a, _b;
              this.animationDuration = parse(context, duration, declaration.animationDuration);
              this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
              this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
              this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
              this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
              this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
              this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
              this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
              this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
              this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
              this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
              this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
              this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
              this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
              this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
              this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
              this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
              this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
              this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
              this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
              this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
              this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
              this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
              this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
              this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
              this.color = parse(context, color, declaration.color);
              this.direction = parse(context, direction, declaration.direction);
              this.display = parse(context, display, declaration.display);
              this.float = parse(context, float, declaration.cssFloat);
              this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
              this.fontSize = parse(context, fontSize, declaration.fontSize);
              this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
              this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
              this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
              this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
              this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
              this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
              this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
              this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
              this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
              this.marginTop = parse(context, marginTop, declaration.marginTop);
              this.marginRight = parse(context, marginRight, declaration.marginRight);
              this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
              this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
              this.opacity = parse(context, opacity, declaration.opacity);
              var overflowTuple = parse(context, overflow, declaration.overflow);
              this.overflowX = overflowTuple[0];
              this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
              this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
              this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
              this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
              this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
              this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
              this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
              this.position = parse(context, position, declaration.position);
              this.textAlign = parse(context, textAlign, declaration.textAlign);
              this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
              this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
              this.textShadow = parse(context, textShadow, declaration.textShadow);
              this.textTransform = parse(context, textTransform, declaration.textTransform);
              this.transform = parse(context, transform$1, declaration.transform);
              this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
              this.visibility = parse(context, visibility, declaration.visibility);
              this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
              this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
              this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
              this.zIndex = parse(context, zIndex, declaration.zIndex);
            }
            CSSParsedDeclaration2.prototype.isVisible = function() {
              return this.display > 0 && this.opacity > 0 && this.visibility === 0;
            };
            CSSParsedDeclaration2.prototype.isTransparent = function() {
              return isTransparent(this.backgroundColor);
            };
            CSSParsedDeclaration2.prototype.isTransformed = function() {
              return this.transform !== null;
            };
            CSSParsedDeclaration2.prototype.isPositioned = function() {
              return this.position !== 0;
            };
            CSSParsedDeclaration2.prototype.isPositionedWithZIndex = function() {
              return this.isPositioned() && !this.zIndex.auto;
            };
            CSSParsedDeclaration2.prototype.isFloating = function() {
              return this.float !== 0;
            };
            CSSParsedDeclaration2.prototype.isInlineLevel = function() {
              return contains(
                this.display,
                4
                /* INLINE */
              ) || contains(
                this.display,
                33554432
                /* INLINE_BLOCK */
              ) || contains(
                this.display,
                268435456
                /* INLINE_FLEX */
              ) || contains(
                this.display,
                536870912
                /* INLINE_GRID */
              ) || contains(
                this.display,
                67108864
                /* INLINE_LIST_ITEM */
              ) || contains(
                this.display,
                134217728
                /* INLINE_TABLE */
              );
            };
            return CSSParsedDeclaration2;
          })()
        );
        var CSSParsedPseudoDeclaration = (
          /** @class */
          /* @__PURE__ */ (function() {
            function CSSParsedPseudoDeclaration2(context, declaration) {
              this.content = parse(context, content, declaration.content);
              this.quotes = parse(context, quotes, declaration.quotes);
            }
            return CSSParsedPseudoDeclaration2;
          })()
        );
        var CSSParsedCounterDeclaration = (
          /** @class */
          /* @__PURE__ */ (function() {
            function CSSParsedCounterDeclaration2(context, declaration) {
              this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
              this.counterReset = parse(context, counterReset, declaration.counterReset);
            }
            return CSSParsedCounterDeclaration2;
          })()
        );
        var parse = function(context, descriptor, style) {
          var tokenizer = new Tokenizer();
          var value = style !== null && typeof style !== "undefined" ? style.toString() : descriptor.initialValue;
          tokenizer.write(value);
          var parser = new Parser(tokenizer.read());
          switch (descriptor.type) {
            case 2:
              var token = parser.parseComponentValue();
              return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
            case 0:
              return descriptor.parse(context, parser.parseComponentValue());
            case 1:
              return descriptor.parse(context, parser.parseComponentValues());
            case 4:
              return parser.parseComponentValue();
            case 3:
              switch (descriptor.format) {
                case "angle":
                  return angle.parse(context, parser.parseComponentValue());
                case "color":
                  return color$1.parse(context, parser.parseComponentValue());
                case "image":
                  return image.parse(context, parser.parseComponentValue());
                case "length":
                  var length_1 = parser.parseComponentValue();
                  return isLength(length_1) ? length_1 : ZERO_LENGTH;
                case "length-percentage":
                  var value_1 = parser.parseComponentValue();
                  return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
                case "time":
                  return time.parse(context, parser.parseComponentValue());
              }
              break;
          }
        };
        var elementDebuggerAttribute = "data-html2canvas-debug";
        var getElementDebugType = function(element) {
          var attribute = element.getAttribute(elementDebuggerAttribute);
          switch (attribute) {
            case "all":
              return 1;
            case "clone":
              return 2;
            case "parse":
              return 3;
            case "render":
              return 4;
            default:
              return 0;
          }
        };
        var isDebugging = function(element, type) {
          var elementType = getElementDebugType(element);
          return elementType === 1 || type === elementType;
        };
        var ElementContainer = (
          /** @class */
          /* @__PURE__ */ (function() {
            function ElementContainer2(context, element) {
              this.context = context;
              this.textNodes = [];
              this.elements = [];
              this.flags = 0;
              if (isDebugging(
                element,
                3
                /* PARSE */
              )) {
                debugger;
              }
              this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
              if (isHTMLElementNode(element)) {
                if (this.styles.animationDuration.some(function(duration2) {
                  return duration2 > 0;
                })) {
                  element.style.animationDuration = "0s";
                }
                if (this.styles.transform !== null) {
                  element.style.transform = "none";
                }
              }
              this.bounds = parseBounds(this.context, element);
              if (isDebugging(
                element,
                4
                /* RENDER */
              )) {
                this.flags |= 16;
              }
            }
            return ElementContainer2;
          })()
        );
        var base64 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=";
        var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
          lookup$1[chars$1.charCodeAt(i$1)] = i$1;
        }
        var decode = function(base642) {
          var bufferLength = base642.length * 0.75, len = base642.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
          if (base642[base642.length - 1] === "=") {
            bufferLength--;
            if (base642[base642.length - 2] === "=") {
              bufferLength--;
            }
          }
          var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
          var bytes2 = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
          for (i2 = 0; i2 < len; i2 += 4) {
            encoded1 = lookup$1[base642.charCodeAt(i2)];
            encoded2 = lookup$1[base642.charCodeAt(i2 + 1)];
            encoded3 = lookup$1[base642.charCodeAt(i2 + 2)];
            encoded4 = lookup$1[base642.charCodeAt(i2 + 3)];
            bytes2[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes2[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes2[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }
          return buffer;
        };
        var polyUint16Array = function(buffer) {
          var length = buffer.length;
          var bytes2 = [];
          for (var i2 = 0; i2 < length; i2 += 2) {
            bytes2.push(buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes2;
        };
        var polyUint32Array = function(buffer) {
          var length = buffer.length;
          var bytes2 = [];
          for (var i2 = 0; i2 < length; i2 += 4) {
            bytes2.push(buffer[i2 + 3] << 24 | buffer[i2 + 2] << 16 | buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes2;
        };
        var UTRIE2_SHIFT_2 = 5;
        var UTRIE2_SHIFT_1 = 6 + 5;
        var UTRIE2_INDEX_SHIFT = 2;
        var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
        var UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> UTRIE2_SHIFT_2;
        var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
        var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> UTRIE2_SHIFT_2;
        var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 2048 >> 6;
        var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> UTRIE2_SHIFT_1;
        var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
        var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
        var slice16 = function(view2, start, end) {
          if (view2.slice) {
            return view2.slice(start, end);
          }
          return new Uint16Array(Array.prototype.slice.call(view2, start, end));
        };
        var slice32 = function(view2, start, end) {
          if (view2.slice) {
            return view2.slice(start, end);
          }
          return new Uint32Array(Array.prototype.slice.call(view2, start, end));
        };
        var createTrieFromBase64 = function(base642, _byteLength) {
          var buffer = decode(base642);
          var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
          var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
          var headerLength = 24;
          var index = slice16(view16, headerLength / 2, view32[4] / 2);
          var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
          return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
        };
        var Trie = (
          /** @class */
          (function() {
            function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
              this.initialValue = initialValue;
              this.errorValue = errorValue;
              this.highStart = highStart;
              this.highValueIndex = highValueIndex;
              this.index = index;
              this.data = data;
            }
            Trie2.prototype.get = function(codePoint) {
              var ix;
              if (codePoint >= 0) {
                if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
                  ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                  ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                  return this.data[ix];
                }
                if (codePoint <= 65535) {
                  ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 55296 >> UTRIE2_SHIFT_2)];
                  ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                  return this.data[ix];
                }
                if (codePoint < this.highStart) {
                  ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                  ix = this.index[ix];
                  ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                  ix = this.index[ix];
                  ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                  return this.data[ix];
                }
                if (codePoint <= 1114111) {
                  return this.data[this.highValueIndex];
                }
              }
              return this.errorValue;
            };
            return Trie2;
          })()
        );
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i = 0; i < chars.length; i++) {
          lookup[chars.charCodeAt(i)] = i;
        }
        var Prepend = 1;
        var CR = 2;
        var LF = 3;
        var Control = 4;
        var Extend = 5;
        var SpacingMark = 7;
        var L = 8;
        var V = 9;
        var T = 10;
        var LV = 11;
        var LVT = 12;
        var ZWJ = 13;
        var Extended_Pictographic = 14;
        var RI = 15;
        var toCodePoints = function(str) {
          var codePoints = [];
          var i2 = 0;
          var length = str.length;
          while (i2 < length) {
            var value = str.charCodeAt(i2++);
            if (value >= 55296 && value <= 56319 && i2 < length) {
              var extra = str.charCodeAt(i2++);
              if ((extra & 64512) === 56320) {
                codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                codePoints.push(value);
                i2--;
              }
            } else {
              codePoints.push(value);
            }
          }
          return codePoints;
        };
        var fromCodePoint = function() {
          var codePoints = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
          }
          if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
          }
          var length = codePoints.length;
          if (!length) {
            return "";
          }
          var codeUnits = [];
          var index = -1;
          var result = "";
          while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
            }
            if (index + 1 === length || codeUnits.length > 16384) {
              result += String.fromCharCode.apply(String, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
        var UnicodeTrie = createTrieFromBase64(base64);
        var BREAK_NOT_ALLOWED = "\xD7";
        var BREAK_ALLOWED = "\xF7";
        var codePointToClass = function(codePoint) {
          return UnicodeTrie.get(codePoint);
        };
        var _graphemeBreakAtIndex = function(_codePoints, classTypes, index) {
          var prevIndex = index - 2;
          var prev = classTypes[prevIndex];
          var current = classTypes[index - 1];
          var next = classTypes[index];
          if (current === CR && next === LF) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === CR || current === LF || current === Control) {
            return BREAK_ALLOWED;
          }
          if (next === CR || next === LF || next === Control) {
            return BREAK_ALLOWED;
          }
          if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
          }
          if ((current === LV || current === V) && (next === V || next === T)) {
            return BREAK_NOT_ALLOWED;
          }
          if ((current === LVT || current === T) && next === T) {
            return BREAK_NOT_ALLOWED;
          }
          if (next === ZWJ || next === Extend) {
            return BREAK_NOT_ALLOWED;
          }
          if (next === SpacingMark) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === Prepend) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === ZWJ && next === Extended_Pictographic) {
            while (prev === Extend) {
              prev = classTypes[--prevIndex];
            }
            if (prev === Extended_Pictographic) {
              return BREAK_NOT_ALLOWED;
            }
          }
          if (current === RI && next === RI) {
            var countRI = 0;
            while (prev === RI) {
              countRI++;
              prev = classTypes[--prevIndex];
            }
            if (countRI % 2 === 0) {
              return BREAK_NOT_ALLOWED;
            }
          }
          return BREAK_ALLOWED;
        };
        var GraphemeBreaker = function(str) {
          var codePoints = toCodePoints(str);
          var length = codePoints.length;
          var index = 0;
          var lastEnd = 0;
          var classTypes = codePoints.map(codePointToClass);
          return {
            next: function() {
              if (index >= length) {
                return { done: true, value: null };
              }
              var graphemeBreak = BREAK_NOT_ALLOWED;
              while (index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {
              }
              if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
                var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                lastEnd = index;
                return { value, done: false };
              }
              return { done: true, value: null };
            }
          };
        };
        var splitGraphemes = function(str) {
          var breaker = GraphemeBreaker(str);
          var graphemes = [];
          var bk;
          while (!(bk = breaker.next()).done) {
            if (bk.value) {
              graphemes.push(bk.value.slice());
            }
          }
          return graphemes;
        };
        var testRangeBounds = function(document2) {
          var TEST_HEIGHT = 123;
          if (document2.createRange) {
            var range = document2.createRange();
            if (range.getBoundingClientRect) {
              var testElement = document2.createElement("boundtest");
              testElement.style.height = TEST_HEIGHT + "px";
              testElement.style.display = "block";
              document2.body.appendChild(testElement);
              range.selectNode(testElement);
              var rangeBounds = range.getBoundingClientRect();
              var rangeHeight = Math.round(rangeBounds.height);
              document2.body.removeChild(testElement);
              if (rangeHeight === TEST_HEIGHT) {
                return true;
              }
            }
          }
          return false;
        };
        var testIOSLineBreak = function(document2) {
          var testElement = document2.createElement("boundtest");
          testElement.style.width = "50px";
          testElement.style.display = "block";
          testElement.style.fontSize = "12px";
          testElement.style.letterSpacing = "0px";
          testElement.style.wordSpacing = "0px";
          document2.body.appendChild(testElement);
          var range = document2.createRange();
          testElement.innerHTML = typeof "".repeat === "function" ? "&#128104;".repeat(10) : "";
          var node = testElement.firstChild;
          var textList = toCodePoints$1(node.data).map(function(i2) {
            return fromCodePoint$1(i2);
          });
          var offset = 0;
          var prev = {};
          var supports = textList.every(function(text, i2) {
            range.setStart(node, offset);
            range.setEnd(node, offset + text.length);
            var rect = range.getBoundingClientRect();
            offset += text.length;
            var boundAhead = rect.x > prev.x || rect.y > prev.y;
            prev = rect;
            if (i2 === 0) {
              return true;
            }
            return boundAhead;
          });
          document2.body.removeChild(testElement);
          return supports;
        };
        var testCORS = function() {
          return typeof new Image().crossOrigin !== "undefined";
        };
        var testResponseType = function() {
          return typeof new XMLHttpRequest().responseType === "string";
        };
        var testSVG = function(document2) {
          var img = new Image();
          var canvas = document2.createElement("canvas");
          var ctx = canvas.getContext("2d");
          if (!ctx) {
            return false;
          }
          img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
          try {
            ctx.drawImage(img, 0, 0);
            canvas.toDataURL();
          } catch (e2) {
            return false;
          }
          return true;
        };
        var isGreenPixel = function(data) {
          return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
        };
        var testForeignObject = function(document2) {
          var canvas = document2.createElement("canvas");
          var size = 100;
          canvas.width = size;
          canvas.height = size;
          var ctx = canvas.getContext("2d");
          if (!ctx) {
            return Promise.reject(false);
          }
          ctx.fillStyle = "rgb(0, 255, 0)";
          ctx.fillRect(0, 0, size, size);
          var img = new Image();
          var greenImageSrc = canvas.toDataURL();
          img.src = greenImageSrc;
          var svg = createForeignObjectSVG(size, size, 0, 0, img);
          ctx.fillStyle = "red";
          ctx.fillRect(0, 0, size, size);
          return loadSerializedSVG$1(svg).then(function(img2) {
            ctx.drawImage(img2, 0, 0);
            var data = ctx.getImageData(0, 0, size, size).data;
            ctx.fillStyle = "red";
            ctx.fillRect(0, 0, size, size);
            var node = document2.createElement("div");
            node.style.backgroundImage = "url(" + greenImageSrc + ")";
            node.style.height = size + "px";
            return isGreenPixel(data) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
          }).then(function(img2) {
            ctx.drawImage(img2, 0, 0);
            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
          }).catch(function() {
            return false;
          });
        };
        var createForeignObjectSVG = function(width, height, x, y, node) {
          var xmlns = "http://www.w3.org/2000/svg";
          var svg = document.createElementNS(xmlns, "svg");
          var foreignObject = document.createElementNS(xmlns, "foreignObject");
          svg.setAttributeNS(null, "width", width.toString());
          svg.setAttributeNS(null, "height", height.toString());
          foreignObject.setAttributeNS(null, "width", "100%");
          foreignObject.setAttributeNS(null, "height", "100%");
          foreignObject.setAttributeNS(null, "x", x.toString());
          foreignObject.setAttributeNS(null, "y", y.toString());
          foreignObject.setAttributeNS(null, "externalResourcesRequired", "true");
          svg.appendChild(foreignObject);
          foreignObject.appendChild(node);
          return svg;
        };
        var loadSerializedSVG$1 = function(svg) {
          return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
              return resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
          });
        };
        var FEATURES = {
          get SUPPORT_RANGE_BOUNDS() {
            var value = testRangeBounds(document);
            Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", { value });
            return value;
          },
          get SUPPORT_WORD_BREAKING() {
            var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
            Object.defineProperty(FEATURES, "SUPPORT_WORD_BREAKING", { value });
            return value;
          },
          get SUPPORT_SVG_DRAWING() {
            var value = testSVG(document);
            Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", { value });
            return value;
          },
          get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var value = typeof Array.from === "function" && typeof window.fetch === "function" ? testForeignObject(document) : Promise.resolve(false);
            Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", { value });
            return value;
          },
          get SUPPORT_CORS_IMAGES() {
            var value = testCORS();
            Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", { value });
            return value;
          },
          get SUPPORT_RESPONSE_TYPE() {
            var value = testResponseType();
            Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", { value });
            return value;
          },
          get SUPPORT_CORS_XHR() {
            var value = "withCredentials" in new XMLHttpRequest();
            Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", { value });
            return value;
          },
          get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
            var value = !!(typeof Intl !== "undefined" && Intl.Segmenter);
            Object.defineProperty(FEATURES, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value });
            return value;
          }
        };
        var TextBounds = (
          /** @class */
          /* @__PURE__ */ (function() {
            function TextBounds2(text, bounds) {
              this.text = text;
              this.bounds = bounds;
            }
            return TextBounds2;
          })()
        );
        var parseTextBounds = function(context, value, styles, node) {
          var textList = breakText(value, styles);
          var textBounds = [];
          var offset = 0;
          textList.forEach(function(text) {
            if (styles.textDecorationLine.length || text.trim().length > 0) {
              if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                var clientRects = createRange(node, offset, text.length).getClientRects();
                if (clientRects.length > 1) {
                  var subSegments = segmentGraphemes(text);
                  var subOffset_1 = 0;
                  subSegments.forEach(function(subSegment) {
                    textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
                    subOffset_1 += subSegment.length;
                  });
                } else {
                  textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
                }
              } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
                node = replacementNode;
              }
            } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
              node = node.splitText(text.length);
            }
            offset += text.length;
          });
          return textBounds;
        };
        var getWrapperBounds = function(context, node) {
          var ownerDocument = node.ownerDocument;
          if (ownerDocument) {
            var wrapper = ownerDocument.createElement("html2canvaswrapper");
            wrapper.appendChild(node.cloneNode(true));
            var parentNode = node.parentNode;
            if (parentNode) {
              parentNode.replaceChild(wrapper, node);
              var bounds = parseBounds(context, wrapper);
              if (wrapper.firstChild) {
                parentNode.replaceChild(wrapper.firstChild, wrapper);
              }
              return bounds;
            }
          }
          return Bounds.EMPTY;
        };
        var createRange = function(node, offset, length) {
          var ownerDocument = node.ownerDocument;
          if (!ownerDocument) {
            throw new Error("Node has no owner document");
          }
          var range = ownerDocument.createRange();
          range.setStart(node, offset);
          range.setEnd(node, offset + length);
          return range;
        };
        var segmentGraphemes = function(value) {
          if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            var segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
            return Array.from(segmenter.segment(value)).map(function(segment) {
              return segment.segment;
            });
          }
          return splitGraphemes(value);
        };
        var segmentWords = function(value, styles) {
          if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            var segmenter = new Intl.Segmenter(void 0, {
              granularity: "word"
            });
            return Array.from(segmenter.segment(value)).map(function(segment) {
              return segment.segment;
            });
          }
          return breakWords(value, styles);
        };
        var breakText = function(value, styles) {
          return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
        };
        var wordSeparators = [32, 160, 4961, 65792, 65793, 4153, 4241];
        var breakWords = function(str, styles) {
          var breaker = LineBreaker(str, {
            lineBreak: styles.lineBreak,
            wordBreak: styles.overflowWrap === "break-word" ? "break-word" : styles.wordBreak
          });
          var words = [];
          var bk;
          var _loop_1 = function() {
            if (bk.value) {
              var value = bk.value.slice();
              var codePoints = toCodePoints$1(value);
              var word_1 = "";
              codePoints.forEach(function(codePoint) {
                if (wordSeparators.indexOf(codePoint) === -1) {
                  word_1 += fromCodePoint$1(codePoint);
                } else {
                  if (word_1.length) {
                    words.push(word_1);
                  }
                  words.push(fromCodePoint$1(codePoint));
                  word_1 = "";
                }
              });
              if (word_1.length) {
                words.push(word_1);
              }
            }
          };
          while (!(bk = breaker.next()).done) {
            _loop_1();
          }
          return words;
        };
        var TextContainer = (
          /** @class */
          /* @__PURE__ */ (function() {
            function TextContainer2(context, node, styles) {
              this.text = transform(node.data, styles.textTransform);
              this.textBounds = parseTextBounds(context, this.text, styles, node);
            }
            return TextContainer2;
          })()
        );
        var transform = function(text, transform2) {
          switch (transform2) {
            case 1:
              return text.toLowerCase();
            case 3:
              return text.replace(CAPITALIZE, capitalize);
            case 2:
              return text.toUpperCase();
            default:
              return text;
          }
        };
        var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
        var capitalize = function(m, p1, p2) {
          if (m.length > 0) {
            return p1 + p2.toUpperCase();
          }
          return m;
        };
        var ImageElementContainer = (
          /** @class */
          (function(_super) {
            __extends(ImageElementContainer2, _super);
            function ImageElementContainer2(context, img) {
              var _this = _super.call(this, context, img) || this;
              _this.src = img.currentSrc || img.src;
              _this.intrinsicWidth = img.naturalWidth;
              _this.intrinsicHeight = img.naturalHeight;
              _this.context.cache.addImage(_this.src);
              return _this;
            }
            return ImageElementContainer2;
          })(ElementContainer)
        );
        var CanvasElementContainer = (
          /** @class */
          (function(_super) {
            __extends(CanvasElementContainer2, _super);
            function CanvasElementContainer2(context, canvas) {
              var _this = _super.call(this, context, canvas) || this;
              _this.canvas = canvas;
              _this.intrinsicWidth = canvas.width;
              _this.intrinsicHeight = canvas.height;
              return _this;
            }
            return CanvasElementContainer2;
          })(ElementContainer)
        );
        var SVGElementContainer = (
          /** @class */
          (function(_super) {
            __extends(SVGElementContainer2, _super);
            function SVGElementContainer2(context, img) {
              var _this = _super.call(this, context, img) || this;
              var s = new XMLSerializer();
              var bounds = parseBounds(context, img);
              img.setAttribute("width", bounds.width + "px");
              img.setAttribute("height", bounds.height + "px");
              _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
              _this.intrinsicWidth = img.width.baseVal.value;
              _this.intrinsicHeight = img.height.baseVal.value;
              _this.context.cache.addImage(_this.svg);
              return _this;
            }
            return SVGElementContainer2;
          })(ElementContainer)
        );
        var LIElementContainer = (
          /** @class */
          (function(_super) {
            __extends(LIElementContainer2, _super);
            function LIElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              _this.value = element.value;
              return _this;
            }
            return LIElementContainer2;
          })(ElementContainer)
        );
        var OLElementContainer = (
          /** @class */
          (function(_super) {
            __extends(OLElementContainer2, _super);
            function OLElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              _this.start = element.start;
              _this.reversed = typeof element.reversed === "boolean" && element.reversed === true;
              return _this;
            }
            return OLElementContainer2;
          })(ElementContainer)
        );
        var CHECKBOX_BORDER_RADIUS = [
          {
            type: 15,
            flags: 0,
            unit: "px",
            number: 3
          }
        ];
        var RADIO_BORDER_RADIUS = [
          {
            type: 16,
            flags: 0,
            number: 50
          }
        ];
        var reformatInputBounds = function(bounds) {
          if (bounds.width > bounds.height) {
            return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
          } else if (bounds.width < bounds.height) {
            return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
          }
          return bounds;
        };
        var getInputValue = function(node) {
          var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("\u2022") : node.value;
          return value.length === 0 ? node.placeholder || "" : value;
        };
        var CHECKBOX = "checkbox";
        var RADIO = "radio";
        var PASSWORD = "password";
        var INPUT_COLOR = 707406591;
        var InputElementContainer = (
          /** @class */
          (function(_super) {
            __extends(InputElementContainer2, _super);
            function InputElementContainer2(context, input) {
              var _this = _super.call(this, context, input) || this;
              _this.type = input.type.toLowerCase();
              _this.checked = input.checked;
              _this.value = getInputValue(input);
              if (_this.type === CHECKBOX || _this.type === RADIO) {
                _this.styles.backgroundColor = 3739148031;
                _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 2779096575;
                _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
                _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1;
                _this.styles.backgroundClip = [
                  0
                  /* BORDER_BOX */
                ];
                _this.styles.backgroundOrigin = [
                  0
                  /* BORDER_BOX */
                ];
                _this.bounds = reformatInputBounds(_this.bounds);
              }
              switch (_this.type) {
                case CHECKBOX:
                  _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
                  break;
                case RADIO:
                  _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
                  break;
              }
              return _this;
            }
            return InputElementContainer2;
          })(ElementContainer)
        );
        var SelectElementContainer = (
          /** @class */
          (function(_super) {
            __extends(SelectElementContainer2, _super);
            function SelectElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              var option = element.options[element.selectedIndex || 0];
              _this.value = option ? option.text || "" : "";
              return _this;
            }
            return SelectElementContainer2;
          })(ElementContainer)
        );
        var TextareaElementContainer = (
          /** @class */
          (function(_super) {
            __extends(TextareaElementContainer2, _super);
            function TextareaElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              _this.value = element.value;
              return _this;
            }
            return TextareaElementContainer2;
          })(ElementContainer)
        );
        var IFrameElementContainer = (
          /** @class */
          (function(_super) {
            __extends(IFrameElementContainer2, _super);
            function IFrameElementContainer2(context, iframe) {
              var _this = _super.call(this, context, iframe) || this;
              _this.src = iframe.src;
              _this.width = parseInt(iframe.width, 10) || 0;
              _this.height = parseInt(iframe.height, 10) || 0;
              _this.backgroundColor = _this.styles.backgroundColor;
              try {
                if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
                  _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
                  var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
                  var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
                  _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
                }
              } catch (e2) {
              }
              return _this;
            }
            return IFrameElementContainer2;
          })(ElementContainer)
        );
        var LIST_OWNERS = ["OL", "UL", "MENU"];
        var parseNodeTree = function(context, node, parent, root) {
          for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
            nextNode = childNode.nextSibling;
            if (isTextNode(childNode) && childNode.data.trim().length > 0) {
              parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
            } else if (isElementNode(childNode)) {
              if (isSlotElement(childNode) && childNode.assignedNodes) {
                childNode.assignedNodes().forEach(function(childNode2) {
                  return parseNodeTree(context, childNode2, parent, root);
                });
              } else {
                var container = createContainer(context, childNode);
                if (container.styles.isVisible()) {
                  if (createsRealStackingContext(childNode, container, root)) {
                    container.flags |= 4;
                  } else if (createsStackingContext(container.styles)) {
                    container.flags |= 2;
                  }
                  if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                    container.flags |= 8;
                  }
                  parent.elements.push(container);
                  childNode.slot;
                  if (childNode.shadowRoot) {
                    parseNodeTree(context, childNode.shadowRoot, container, root);
                  } else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
                    parseNodeTree(context, childNode, container, root);
                  }
                }
              }
            }
          }
        };
        var createContainer = function(context, element) {
          if (isImageElement(element)) {
            return new ImageElementContainer(context, element);
          }
          if (isCanvasElement(element)) {
            return new CanvasElementContainer(context, element);
          }
          if (isSVGElement(element)) {
            return new SVGElementContainer(context, element);
          }
          if (isLIElement(element)) {
            return new LIElementContainer(context, element);
          }
          if (isOLElement(element)) {
            return new OLElementContainer(context, element);
          }
          if (isInputElement(element)) {
            return new InputElementContainer(context, element);
          }
          if (isSelectElement(element)) {
            return new SelectElementContainer(context, element);
          }
          if (isTextareaElement(element)) {
            return new TextareaElementContainer(context, element);
          }
          if (isIFrameElement(element)) {
            return new IFrameElementContainer(context, element);
          }
          return new ElementContainer(context, element);
        };
        var parseTree = function(context, element) {
          var container = createContainer(context, element);
          container.flags |= 4;
          parseNodeTree(context, element, container, container);
          return container;
        };
        var createsRealStackingContext = function(node, container, root) {
          return container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || isBodyElement(node) && root.styles.isTransparent();
        };
        var createsStackingContext = function(styles) {
          return styles.isPositioned() || styles.isFloating();
        };
        var isTextNode = function(node) {
          return node.nodeType === Node.TEXT_NODE;
        };
        var isElementNode = function(node) {
          return node.nodeType === Node.ELEMENT_NODE;
        };
        var isHTMLElementNode = function(node) {
          return isElementNode(node) && typeof node.style !== "undefined" && !isSVGElementNode(node);
        };
        var isSVGElementNode = function(element) {
          return typeof element.className === "object";
        };
        var isLIElement = function(node) {
          return node.tagName === "LI";
        };
        var isOLElement = function(node) {
          return node.tagName === "OL";
        };
        var isInputElement = function(node) {
          return node.tagName === "INPUT";
        };
        var isHTMLElement = function(node) {
          return node.tagName === "HTML";
        };
        var isSVGElement = function(node) {
          return node.tagName === "svg";
        };
        var isBodyElement = function(node) {
          return node.tagName === "BODY";
        };
        var isCanvasElement = function(node) {
          return node.tagName === "CANVAS";
        };
        var isVideoElement = function(node) {
          return node.tagName === "VIDEO";
        };
        var isImageElement = function(node) {
          return node.tagName === "IMG";
        };
        var isIFrameElement = function(node) {
          return node.tagName === "IFRAME";
        };
        var isStyleElement = function(node) {
          return node.tagName === "STYLE";
        };
        var isScriptElement = function(node) {
          return node.tagName === "SCRIPT";
        };
        var isTextareaElement = function(node) {
          return node.tagName === "TEXTAREA";
        };
        var isSelectElement = function(node) {
          return node.tagName === "SELECT";
        };
        var isSlotElement = function(node) {
          return node.tagName === "SLOT";
        };
        var isCustomElement = function(node) {
          return node.tagName.indexOf("-") > 0;
        };
        var CounterState = (
          /** @class */
          (function() {
            function CounterState2() {
              this.counters = {};
            }
            CounterState2.prototype.getCounterValue = function(name) {
              var counter = this.counters[name];
              if (counter && counter.length) {
                return counter[counter.length - 1];
              }
              return 1;
            };
            CounterState2.prototype.getCounterValues = function(name) {
              var counter = this.counters[name];
              return counter ? counter : [];
            };
            CounterState2.prototype.pop = function(counters) {
              var _this = this;
              counters.forEach(function(counter) {
                return _this.counters[counter].pop();
              });
            };
            CounterState2.prototype.parse = function(style) {
              var _this = this;
              var counterIncrement2 = style.counterIncrement;
              var counterReset2 = style.counterReset;
              var canReset = true;
              if (counterIncrement2 !== null) {
                counterIncrement2.forEach(function(entry) {
                  var counter = _this.counters[entry.counter];
                  if (counter && entry.increment !== 0) {
                    canReset = false;
                    if (!counter.length) {
                      counter.push(1);
                    }
                    counter[Math.max(0, counter.length - 1)] += entry.increment;
                  }
                });
              }
              var counterNames = [];
              if (canReset) {
                counterReset2.forEach(function(entry) {
                  var counter = _this.counters[entry.counter];
                  counterNames.push(entry.counter);
                  if (!counter) {
                    counter = _this.counters[entry.counter] = [];
                  }
                  counter.push(entry.reset);
                });
              }
              return counterNames;
            };
            return CounterState2;
          })()
        );
        var ROMAN_UPPER = {
          integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
          values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        };
        var ARMENIAN = {
          integers: [
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u0554",
            "\u0553",
            "\u0552",
            "\u0551",
            "\u0550",
            "\u054F",
            "\u054E",
            "\u054D",
            "\u054C",
            "\u054B",
            "\u054A",
            "\u0549",
            "\u0548",
            "\u0547",
            "\u0546",
            "\u0545",
            "\u0544",
            "\u0543",
            "\u0542",
            "\u0541",
            "\u0540",
            "\u053F",
            "\u053E",
            "\u053D",
            "\u053C",
            "\u053B",
            "\u053A",
            "\u0539",
            "\u0538",
            "\u0537",
            "\u0536",
            "\u0535",
            "\u0534",
            "\u0533",
            "\u0532",
            "\u0531"
          ]
        };
        var HEBREW = {
          integers: [
            1e4,
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            19,
            18,
            17,
            16,
            15,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u05D9\u05F3",
            "\u05D8\u05F3",
            "\u05D7\u05F3",
            "\u05D6\u05F3",
            "\u05D5\u05F3",
            "\u05D4\u05F3",
            "\u05D3\u05F3",
            "\u05D2\u05F3",
            "\u05D1\u05F3",
            "\u05D0\u05F3",
            "\u05EA",
            "\u05E9",
            "\u05E8",
            "\u05E7",
            "\u05E6",
            "\u05E4",
            "\u05E2",
            "\u05E1",
            "\u05E0",
            "\u05DE",
            "\u05DC",
            "\u05DB",
            "\u05D9\u05D8",
            "\u05D9\u05D7",
            "\u05D9\u05D6",
            "\u05D8\u05D6",
            "\u05D8\u05D5",
            "\u05D9",
            "\u05D8",
            "\u05D7",
            "\u05D6",
            "\u05D5",
            "\u05D4",
            "\u05D3",
            "\u05D2",
            "\u05D1",
            "\u05D0"
          ]
        };
        var GEORGIAN = {
          integers: [
            1e4,
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u10F5",
            "\u10F0",
            "\u10EF",
            "\u10F4",
            "\u10EE",
            "\u10ED",
            "\u10EC",
            "\u10EB",
            "\u10EA",
            "\u10E9",
            "\u10E8",
            "\u10E7",
            "\u10E6",
            "\u10E5",
            "\u10E4",
            "\u10F3",
            "\u10E2",
            "\u10E1",
            "\u10E0",
            "\u10DF",
            "\u10DE",
            "\u10DD",
            "\u10F2",
            "\u10DC",
            "\u10DB",
            "\u10DA",
            "\u10D9",
            "\u10D8",
            "\u10D7",
            "\u10F1",
            "\u10D6",
            "\u10D5",
            "\u10D4",
            "\u10D3",
            "\u10D2",
            "\u10D1",
            "\u10D0"
          ]
        };
        var createAdditiveCounter = function(value, min, max, symbols, fallback, suffix) {
          if (value < min || value > max) {
            return createCounterText(value, fallback, suffix.length > 0);
          }
          return symbols.integers.reduce(function(string, integer, index) {
            while (value >= integer) {
              value -= integer;
              string += symbols.values[index];
            }
            return string;
          }, "") + suffix;
        };
        var createCounterStyleWithSymbolResolver = function(value, codePointRangeLength, isNumeric, resolver) {
          var string = "";
          do {
            if (!isNumeric) {
              value--;
            }
            string = resolver(value) + string;
            value /= codePointRangeLength;
          } while (value * codePointRangeLength >= codePointRangeLength);
          return string;
        };
        var createCounterStyleFromRange = function(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
          var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
          return (value < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function(codePoint) {
            return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
          }) + suffix);
        };
        var createCounterStyleFromSymbols = function(value, symbols, suffix) {
          if (suffix === void 0) {
            suffix = ". ";
          }
          var codePointRangeLength = symbols.length;
          return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function(codePoint) {
            return symbols[Math.floor(codePoint % codePointRangeLength)];
          }) + suffix;
        };
        var CJK_ZEROS = 1 << 0;
        var CJK_TEN_COEFFICIENTS = 1 << 1;
        var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
        var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
        var createCJKCounter = function(value, numbers, multipliers, negativeSign, suffix, flags) {
          if (value < -9999 || value > 9999) {
            return createCounterText(value, 4, suffix.length > 0);
          }
          var tmp = Math.abs(value);
          var string = suffix;
          if (tmp === 0) {
            return numbers[0] + string;
          }
          for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
            var coefficient = tmp % 10;
            if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== "") {
              string = numbers[coefficient] + string;
            } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) {
              string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : "") + string;
            } else if (coefficient === 1 && digit > 0) {
              string = multipliers[digit - 1] + string;
            }
            tmp = Math.floor(tmp / 10);
          }
          return (value < 0 ? negativeSign : "") + string;
        };
        var CHINESE_INFORMAL_MULTIPLIERS = "\u5341\u767E\u5343\u842C";
        var CHINESE_FORMAL_MULTIPLIERS = "\u62FE\u4F70\u4EDF\u842C";
        var JAPANESE_NEGATIVE = "\u30DE\u30A4\u30CA\u30B9";
        var KOREAN_NEGATIVE = "\uB9C8\uC774\uB108\uC2A4";
        var createCounterText = function(value, type, appendSuffix) {
          var defaultSuffix = appendSuffix ? ". " : "";
          var cjkSuffix = appendSuffix ? "\u3001" : "";
          var koreanSuffix = appendSuffix ? ", " : "";
          var spaceSuffix = appendSuffix ? " " : "";
          switch (type) {
            case 0:
              return "\u2022" + spaceSuffix;
            case 1:
              return "\u25E6" + spaceSuffix;
            case 2:
              return "\u25FE" + spaceSuffix;
            case 5:
              var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
              return string.length < 4 ? "0" + string : string;
            case 4:
              return createCounterStyleFromSymbols(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", cjkSuffix);
            case 6:
              return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix).toLowerCase();
            case 7:
              return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix);
            case 8:
              return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
            case 9:
              return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
            case 10:
              return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
            case 11:
              return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
            case 12:
            case 49:
              return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix);
            case 35:
              return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix).toLowerCase();
            case 13:
              return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
            case 14:
            case 30:
              return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
            case 15:
              return createCounterStyleFromSymbols(value, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", cjkSuffix);
            case 16:
              return createCounterStyleFromSymbols(value, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", cjkSuffix);
            case 17:
            case 48:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 47:
              return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 42:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 41:
              return createCJKCounter(value, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 26:
              return createCJKCounter(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, 0);
            case 25:
              return createCJKCounter(value, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 31:
              return createCJKCounter(value, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 33:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", KOREAN_NEGATIVE, koreanSuffix, 0);
            case 32:
              return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 18:
              return createCounterStyleFromRange(value, 2406, 2415, true, defaultSuffix);
            case 20:
              return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3, defaultSuffix);
            case 21:
              return createCounterStyleFromRange(value, 2790, 2799, true, defaultSuffix);
            case 22:
              return createCounterStyleFromRange(value, 2662, 2671, true, defaultSuffix);
            case 22:
              return createAdditiveCounter(value, 1, 10999, HEBREW, 3, defaultSuffix);
            case 23:
              return createCounterStyleFromSymbols(value, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
            case 24:
              return createCounterStyleFromSymbols(value, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
            case 27:
              return createCounterStyleFromRange(value, 3302, 3311, true, defaultSuffix);
            case 28:
              return createCounterStyleFromSymbols(value, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", cjkSuffix);
            case 29:
              return createCounterStyleFromSymbols(value, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", cjkSuffix);
            case 34:
              return createCounterStyleFromRange(value, 3792, 3801, true, defaultSuffix);
            case 37:
              return createCounterStyleFromRange(value, 6160, 6169, true, defaultSuffix);
            case 38:
              return createCounterStyleFromRange(value, 4160, 4169, true, defaultSuffix);
            case 39:
              return createCounterStyleFromRange(value, 2918, 2927, true, defaultSuffix);
            case 40:
              return createCounterStyleFromRange(value, 1776, 1785, true, defaultSuffix);
            case 43:
              return createCounterStyleFromRange(value, 3046, 3055, true, defaultSuffix);
            case 44:
              return createCounterStyleFromRange(value, 3174, 3183, true, defaultSuffix);
            case 45:
              return createCounterStyleFromRange(value, 3664, 3673, true, defaultSuffix);
            case 46:
              return createCounterStyleFromRange(value, 3872, 3881, true, defaultSuffix);
            case 3:
            default:
              return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
          }
        };
        var IGNORE_ATTRIBUTE = "data-html2canvas-ignore";
        var DocumentCloner = (
          /** @class */
          (function() {
            function DocumentCloner2(context, element, options) {
              this.context = context;
              this.options = options;
              this.scrolledElements = [];
              this.referenceElement = element;
              this.counters = new CounterState();
              this.quoteDepth = 0;
              if (!element.ownerDocument) {
                throw new Error("Cloned element does not have an owner document");
              }
              this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
            }
            DocumentCloner2.prototype.toIFrame = function(ownerDocument, windowSize) {
              var _this = this;
              var iframe = createIFrameContainer(ownerDocument, windowSize);
              if (!iframe.contentWindow) {
                return Promise.reject("Unable to find iframe window");
              }
              var scrollX = ownerDocument.defaultView.pageXOffset;
              var scrollY = ownerDocument.defaultView.pageYOffset;
              var cloneWindow = iframe.contentWindow;
              var documentClone = cloneWindow.document;
              var iframeLoad = iframeLoader(iframe).then(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  var onclone, referenceElement;
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        this.scrolledElements.forEach(restoreNodeScroll);
                        if (cloneWindow) {
                          cloneWindow.scrollTo(windowSize.left, windowSize.top);
                          if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                            this.context.logger.warn("Unable to restore scroll position for cloned document");
                            this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                          }
                        }
                        onclone = this.options.onclone;
                        referenceElement = this.clonedReferenceElement;
                        if (typeof referenceElement === "undefined") {
                          return [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                        }
                        if (!(documentClone.fonts && documentClone.fonts.ready)) return [3, 2];
                        return [4, documentClone.fonts.ready];
                      case 1:
                        _a.sent();
                        _a.label = 2;
                      case 2:
                        if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [3, 4];
                        return [4, imagesReady(documentClone)];
                      case 3:
                        _a.sent();
                        _a.label = 4;
                      case 4:
                        if (typeof onclone === "function") {
                          return [2, Promise.resolve().then(function() {
                            return onclone(documentClone, referenceElement);
                          }).then(function() {
                            return iframe;
                          })];
                        }
                        return [2, iframe];
                    }
                  });
                });
              });
              documentClone.open();
              documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
              restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
              documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
              documentClone.close();
              return iframeLoad;
            };
            DocumentCloner2.prototype.createElementClone = function(node) {
              if (isDebugging(
                node,
                2
                /* CLONE */
              )) {
                debugger;
              }
              if (isCanvasElement(node)) {
                return this.createCanvasClone(node);
              }
              if (isVideoElement(node)) {
                return this.createVideoClone(node);
              }
              if (isStyleElement(node)) {
                return this.createStyleClone(node);
              }
              var clone = node.cloneNode(false);
              if (isImageElement(clone)) {
                if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
                  clone.src = node.currentSrc;
                  clone.srcset = "";
                }
                if (clone.loading === "lazy") {
                  clone.loading = "eager";
                }
              }
              if (isCustomElement(clone)) {
                return this.createCustomElementClone(clone);
              }
              return clone;
            };
            DocumentCloner2.prototype.createCustomElementClone = function(node) {
              var clone = document.createElement("html2canvascustomelement");
              copyCSSStyles(node.style, clone);
              return clone;
            };
            DocumentCloner2.prototype.createStyleClone = function(node) {
              try {
                var sheet = node.sheet;
                if (sheet && sheet.cssRules) {
                  var css = [].slice.call(sheet.cssRules, 0).reduce(function(css2, rule) {
                    if (rule && typeof rule.cssText === "string") {
                      return css2 + rule.cssText;
                    }
                    return css2;
                  }, "");
                  var style = node.cloneNode(false);
                  style.textContent = css;
                  return style;
                }
              } catch (e2) {
                this.context.logger.error("Unable to access cssRules property", e2);
                if (e2.name !== "SecurityError") {
                  throw e2;
                }
              }
              return node.cloneNode(false);
            };
            DocumentCloner2.prototype.createCanvasClone = function(canvas) {
              var _a;
              if (this.options.inlineImages && canvas.ownerDocument) {
                var img = canvas.ownerDocument.createElement("img");
                try {
                  img.src = canvas.toDataURL();
                  return img;
                } catch (e2) {
                  this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
                }
              }
              var clonedCanvas = canvas.cloneNode(false);
              try {
                clonedCanvas.width = canvas.width;
                clonedCanvas.height = canvas.height;
                var ctx = canvas.getContext("2d");
                var clonedCtx = clonedCanvas.getContext("2d");
                if (clonedCtx) {
                  if (!this.options.allowTaint && ctx) {
                    clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                  } else {
                    var gl = (_a = canvas.getContext("webgl2")) !== null && _a !== void 0 ? _a : canvas.getContext("webgl");
                    if (gl) {
                      var attribs = gl.getContextAttributes();
                      if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                        this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", canvas);
                      }
                    }
                    clonedCtx.drawImage(canvas, 0, 0);
                  }
                }
                return clonedCanvas;
              } catch (e2) {
                this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
              }
              return clonedCanvas;
            };
            DocumentCloner2.prototype.createVideoClone = function(video) {
              var canvas = video.ownerDocument.createElement("canvas");
              canvas.width = video.offsetWidth;
              canvas.height = video.offsetHeight;
              var ctx = canvas.getContext("2d");
              try {
                if (ctx) {
                  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                  if (!this.options.allowTaint) {
                    ctx.getImageData(0, 0, canvas.width, canvas.height);
                  }
                }
                return canvas;
              } catch (e2) {
                this.context.logger.info("Unable to clone video as it is tainted", video);
              }
              var blankCanvas = video.ownerDocument.createElement("canvas");
              blankCanvas.width = video.offsetWidth;
              blankCanvas.height = video.offsetHeight;
              return blankCanvas;
            };
            DocumentCloner2.prototype.appendChildNode = function(clone, child, copyStyles) {
              if (!isElementNode(child) || !isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== "function" || !this.options.ignoreElements(child))) {
                if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
                  clone.appendChild(this.cloneNode(child, copyStyles));
                }
              }
            };
            DocumentCloner2.prototype.cloneChildNodes = function(node, clone, copyStyles) {
              var _this = this;
              for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
                if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === "function") {
                  var assignedNodes = child.assignedNodes();
                  if (assignedNodes.length) {
                    assignedNodes.forEach(function(assignedNode) {
                      return _this.appendChildNode(clone, assignedNode, copyStyles);
                    });
                  }
                } else {
                  this.appendChildNode(clone, child, copyStyles);
                }
              }
            };
            DocumentCloner2.prototype.cloneNode = function(node, copyStyles) {
              if (isTextNode(node)) {
                return document.createTextNode(node.data);
              }
              if (!node.ownerDocument) {
                return node.cloneNode(false);
              }
              var window2 = node.ownerDocument.defaultView;
              if (window2 && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
                var clone = this.createElementClone(node);
                clone.style.transitionProperty = "none";
                var style = window2.getComputedStyle(node);
                var styleBefore = window2.getComputedStyle(node, ":before");
                var styleAfter = window2.getComputedStyle(node, ":after");
                if (this.referenceElement === node && isHTMLElementNode(clone)) {
                  this.clonedReferenceElement = clone;
                }
                if (isBodyElement(clone)) {
                  createPseudoHideStyles(clone);
                }
                var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
                var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
                if (isCustomElement(node)) {
                  copyStyles = true;
                }
                if (!isVideoElement(node)) {
                  this.cloneChildNodes(node, clone, copyStyles);
                }
                if (before) {
                  clone.insertBefore(before, clone.firstChild);
                }
                var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
                if (after) {
                  clone.appendChild(after);
                }
                this.counters.pop(counters);
                if (style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node) || copyStyles) {
                  copyCSSStyles(style, clone);
                }
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                  this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone) || isSelectElement(clone))) {
                  clone.value = node.value;
                }
                return clone;
              }
              return node.cloneNode(false);
            };
            DocumentCloner2.prototype.resolvePseudoContent = function(node, clone, style, pseudoElt) {
              var _this = this;
              if (!style) {
                return;
              }
              var value = style.content;
              var document2 = clone.ownerDocument;
              if (!document2 || !value || value === "none" || value === "-moz-alt-content" || style.display === "none") {
                return;
              }
              this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
              var declaration = new CSSParsedPseudoDeclaration(this.context, style);
              var anonymousReplacedElement = document2.createElement("html2canvaspseudoelement");
              copyCSSStyles(style, anonymousReplacedElement);
              declaration.content.forEach(function(token) {
                if (token.type === 0) {
                  anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
                } else if (token.type === 22) {
                  var img = document2.createElement("img");
                  img.src = token.value;
                  img.style.opacity = "1";
                  anonymousReplacedElement.appendChild(img);
                } else if (token.type === 18) {
                  if (token.name === "attr") {
                    var attr = token.values.filter(isIdentToken);
                    if (attr.length) {
                      anonymousReplacedElement.appendChild(document2.createTextNode(node.getAttribute(attr[0].value) || ""));
                    }
                  } else if (token.name === "counter") {
                    var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
                    if (counter && isIdentToken(counter)) {
                      var counterState = _this.counters.getCounterValue(counter.value);
                      var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
                      anonymousReplacedElement.appendChild(document2.createTextNode(createCounterText(counterState, counterType, false)));
                    }
                  } else if (token.name === "counters") {
                    var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
                    if (counter && isIdentToken(counter)) {
                      var counterStates = _this.counters.getCounterValues(counter.value);
                      var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
                      var separator = delim && delim.type === 0 ? delim.value : "";
                      var text = counterStates.map(function(value2) {
                        return createCounterText(value2, counterType_1, false);
                      }).join(separator);
                      anonymousReplacedElement.appendChild(document2.createTextNode(text));
                    }
                  } else ;
                } else if (token.type === 20) {
                  switch (token.value) {
                    case "open-quote":
                      anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                      break;
                    case "close-quote":
                      anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                      break;
                    default:
                      anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
                  }
                }
              });
              anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
              var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
              if (isSVGElementNode(clone)) {
                clone.className.baseValue += newClassName;
              } else {
                clone.className += newClassName;
              }
              return anonymousReplacedElement;
            };
            DocumentCloner2.destroy = function(container) {
              if (container.parentNode) {
                container.parentNode.removeChild(container);
                return true;
              }
              return false;
            };
            return DocumentCloner2;
          })()
        );
        var PseudoElementType;
        (function(PseudoElementType2) {
          PseudoElementType2[PseudoElementType2["BEFORE"] = 0] = "BEFORE";
          PseudoElementType2[PseudoElementType2["AFTER"] = 1] = "AFTER";
        })(PseudoElementType || (PseudoElementType = {}));
        var createIFrameContainer = function(ownerDocument, bounds) {
          var cloneIframeContainer = ownerDocument.createElement("iframe");
          cloneIframeContainer.className = "html2canvas-container";
          cloneIframeContainer.style.visibility = "hidden";
          cloneIframeContainer.style.position = "fixed";
          cloneIframeContainer.style.left = "-10000px";
          cloneIframeContainer.style.top = "0px";
          cloneIframeContainer.style.border = "0";
          cloneIframeContainer.width = bounds.width.toString();
          cloneIframeContainer.height = bounds.height.toString();
          cloneIframeContainer.scrolling = "no";
          cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, "true");
          ownerDocument.body.appendChild(cloneIframeContainer);
          return cloneIframeContainer;
        };
        var imageReady = function(img) {
          return new Promise(function(resolve) {
            if (img.complete) {
              resolve();
              return;
            }
            if (!img.src) {
              resolve();
              return;
            }
            img.onload = resolve;
            img.onerror = resolve;
          });
        };
        var imagesReady = function(document2) {
          return Promise.all([].slice.call(document2.images, 0).map(imageReady));
        };
        var iframeLoader = function(iframe) {
          return new Promise(function(resolve, reject) {
            var cloneWindow = iframe.contentWindow;
            if (!cloneWindow) {
              return reject("No window assigned for iframe");
            }
            var documentClone = cloneWindow.document;
            cloneWindow.onload = iframe.onload = function() {
              cloneWindow.onload = iframe.onload = null;
              var interval = setInterval(function() {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === "complete") {
                  clearInterval(interval);
                  resolve(iframe);
                }
              }, 50);
            };
          });
        };
        var ignoredStyleProperties = [
          "all",
          "d",
          "content"
          // Safari shows pseudoelements if content is set
        ];
        var copyCSSStyles = function(style, target) {
          for (var i2 = style.length - 1; i2 >= 0; i2--) {
            var property = style.item(i2);
            if (ignoredStyleProperties.indexOf(property) === -1) {
              target.style.setProperty(property, style.getPropertyValue(property));
            }
          }
          return target;
        };
        var serializeDoctype = function(doctype) {
          var str = "";
          if (doctype) {
            str += "<!DOCTYPE ";
            if (doctype.name) {
              str += doctype.name;
            }
            if (doctype.internalSubset) {
              str += doctype.internalSubset;
            }
            if (doctype.publicId) {
              str += '"' + doctype.publicId + '"';
            }
            if (doctype.systemId) {
              str += '"' + doctype.systemId + '"';
            }
            str += ">";
          }
          return str;
        };
        var restoreOwnerScroll = function(ownerDocument, x, y) {
          if (ownerDocument && ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
            ownerDocument.defaultView.scrollTo(x, y);
          }
        };
        var restoreNodeScroll = function(_a) {
          var element = _a[0], x = _a[1], y = _a[2];
          element.scrollLeft = x;
          element.scrollTop = y;
        };
        var PSEUDO_BEFORE = ":before";
        var PSEUDO_AFTER = ":after";
        var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
        var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";
        var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';
        var createPseudoHideStyles = function(body) {
          createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
        };
        var createStyles = function(body, styles) {
          var document2 = body.ownerDocument;
          if (document2) {
            var style = document2.createElement("style");
            style.textContent = styles;
            body.appendChild(style);
          }
        };
        var CacheStorage = (
          /** @class */
          (function() {
            function CacheStorage2() {
            }
            CacheStorage2.getOrigin = function(url2) {
              var link = CacheStorage2._link;
              if (!link) {
                return "about:blank";
              }
              link.href = url2;
              link.href = link.href;
              return link.protocol + link.hostname + link.port;
            };
            CacheStorage2.isSameOrigin = function(src) {
              return CacheStorage2.getOrigin(src) === CacheStorage2._origin;
            };
            CacheStorage2.setContext = function(window2) {
              CacheStorage2._link = window2.document.createElement("a");
              CacheStorage2._origin = CacheStorage2.getOrigin(window2.location.href);
            };
            CacheStorage2._origin = "about:blank";
            return CacheStorage2;
          })()
        );
        var Cache = (
          /** @class */
          (function() {
            function Cache2(context, _options) {
              this.context = context;
              this._options = _options;
              this._cache = {};
            }
            Cache2.prototype.addImage = function(src) {
              var result = Promise.resolve();
              if (this.has(src)) {
                return result;
              }
              if (isBlobImage(src) || isRenderable(src)) {
                (this._cache[src] = this.loadImage(src)).catch(function() {
                });
                return result;
              }
              return result;
            };
            Cache2.prototype.match = function(src) {
              return this._cache[src];
            };
            Cache2.prototype.loadImage = function(key) {
              return __awaiter(this, void 0, void 0, function() {
                var isSameOrigin, useCORS, useProxy, src;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      isSameOrigin = CacheStorage.isSameOrigin(key);
                      useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                      useProxy = !isInlineImage(key) && !isSameOrigin && !isBlobImage(key) && typeof this._options.proxy === "string" && FEATURES.SUPPORT_CORS_XHR && !useCORS;
                      if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !isBlobImage(key) && !useProxy && !useCORS) {
                        return [
                          2
                          /*return*/
                        ];
                      }
                      src = key;
                      if (!useProxy) return [3, 2];
                      return [4, this.proxy(src)];
                    case 1:
                      src = _a.sent();
                      _a.label = 2;
                    case 2:
                      this.context.logger.debug("Added image " + key.substring(0, 256));
                      return [4, new Promise(function(resolve, reject) {
                        var img = new Image();
                        img.onload = function() {
                          return resolve(img);
                        };
                        img.onerror = reject;
                        if (isInlineBase64Image(src) || useCORS) {
                          img.crossOrigin = "anonymous";
                        }
                        img.src = src;
                        if (img.complete === true) {
                          setTimeout(function() {
                            return resolve(img);
                          }, 500);
                        }
                        if (_this._options.imageTimeout > 0) {
                          setTimeout(function() {
                            return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                          }, _this._options.imageTimeout);
                        }
                      })];
                    case 3:
                      return [2, _a.sent()];
                  }
                });
              });
            };
            Cache2.prototype.has = function(key) {
              return typeof this._cache[key] !== "undefined";
            };
            Cache2.prototype.keys = function() {
              return Promise.resolve(Object.keys(this._cache));
            };
            Cache2.prototype.proxy = function(src) {
              var _this = this;
              var proxy = this._options.proxy;
              if (!proxy) {
                throw new Error("No proxy defined");
              }
              var key = src.substring(0, 256);
              return new Promise(function(resolve, reject) {
                var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? "blob" : "text";
                var xhr = new XMLHttpRequest();
                xhr.onload = function() {
                  if (xhr.status === 200) {
                    if (responseType === "text") {
                      resolve(xhr.response);
                    } else {
                      var reader_1 = new FileReader();
                      reader_1.addEventListener("load", function() {
                        return resolve(reader_1.result);
                      }, false);
                      reader_1.addEventListener("error", function(e2) {
                        return reject(e2);
                      }, false);
                      reader_1.readAsDataURL(xhr.response);
                    }
                  } else {
                    reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                  }
                };
                xhr.onerror = reject;
                var queryString = proxy.indexOf("?") > -1 ? "&" : "?";
                xhr.open("GET", "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
                if (responseType !== "text" && xhr instanceof XMLHttpRequest) {
                  xhr.responseType = responseType;
                }
                if (_this._options.imageTimeout) {
                  var timeout_1 = _this._options.imageTimeout;
                  xhr.timeout = timeout_1;
                  xhr.ontimeout = function() {
                    return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
                  };
                }
                xhr.send();
              });
            };
            return Cache2;
          })()
        );
        var INLINE_SVG = /^data:image\/svg\+xml/i;
        var INLINE_BASE64 = /^data:image\/.*;base64,/i;
        var INLINE_IMG = /^data:image\/.*/i;
        var isRenderable = function(src) {
          return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
        };
        var isInlineImage = function(src) {
          return INLINE_IMG.test(src);
        };
        var isInlineBase64Image = function(src) {
          return INLINE_BASE64.test(src);
        };
        var isBlobImage = function(src) {
          return src.substr(0, 4) === "blob";
        };
        var isSVG = function(src) {
          return src.substr(-3).toLowerCase() === "svg" || INLINE_SVG.test(src);
        };
        var Vector = (
          /** @class */
          (function() {
            function Vector2(x, y) {
              this.type = 0;
              this.x = x;
              this.y = y;
            }
            Vector2.prototype.add = function(deltaX, deltaY) {
              return new Vector2(this.x + deltaX, this.y + deltaY);
            };
            return Vector2;
          })()
        );
        var lerp = function(a2, b, t) {
          return new Vector(a2.x + (b.x - a2.x) * t, a2.y + (b.y - a2.y) * t);
        };
        var BezierCurve = (
          /** @class */
          (function() {
            function BezierCurve2(start, startControl, endControl, end) {
              this.type = 1;
              this.start = start;
              this.startControl = startControl;
              this.endControl = endControl;
              this.end = end;
            }
            BezierCurve2.prototype.subdivide = function(t, firstHalf) {
              var ab = lerp(this.start, this.startControl, t);
              var bc = lerp(this.startControl, this.endControl, t);
              var cd = lerp(this.endControl, this.end, t);
              var abbc = lerp(ab, bc, t);
              var bccd = lerp(bc, cd, t);
              var dest = lerp(abbc, bccd, t);
              return firstHalf ? new BezierCurve2(this.start, ab, abbc, dest) : new BezierCurve2(dest, bccd, cd, this.end);
            };
            BezierCurve2.prototype.add = function(deltaX, deltaY) {
              return new BezierCurve2(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
            };
            BezierCurve2.prototype.reverse = function() {
              return new BezierCurve2(this.end, this.endControl, this.startControl, this.start);
            };
            return BezierCurve2;
          })()
        );
        var isBezierCurve = function(path) {
          return path.type === 1;
        };
        var BoundCurves = (
          /** @class */
          /* @__PURE__ */ (function() {
            function BoundCurves2(element) {
              var styles = element.styles;
              var bounds = element.bounds;
              var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
              var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
              var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
              var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
              var factors = [];
              factors.push((tlh + trh) / bounds.width);
              factors.push((blh + brh) / bounds.width);
              factors.push((tlv + blv) / bounds.height);
              factors.push((trv + brv) / bounds.height);
              var maxFactor = Math.max.apply(Math, factors);
              if (maxFactor > 1) {
                tlh /= maxFactor;
                tlv /= maxFactor;
                trh /= maxFactor;
                trv /= maxFactor;
                brh /= maxFactor;
                brv /= maxFactor;
                blh /= maxFactor;
                blv /= maxFactor;
              }
              var topWidth = bounds.width - trh;
              var rightHeight = bounds.height - brv;
              var bottomWidth = bounds.width - brh;
              var leftHeight = bounds.height - blv;
              var borderTopWidth2 = styles.borderTopWidth;
              var borderRightWidth2 = styles.borderRightWidth;
              var borderBottomWidth2 = styles.borderBottomWidth;
              var borderLeftWidth2 = styles.borderLeftWidth;
              var paddingTop2 = getAbsoluteValue(styles.paddingTop, element.bounds.width);
              var paddingRight2 = getAbsoluteValue(styles.paddingRight, element.bounds.width);
              var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
              var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
              this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3, tlh - borderLeftWidth2 / 3, tlv - borderTopWidth2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3);
              this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 3, trh - borderRightWidth2 / 3, trv - borderTopWidth2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + borderTopWidth2 / 3);
              this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 3, brv - borderBottomWidth2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
              this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 / 3, blv - borderBottomWidth2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
              this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3, tlh - borderLeftWidth2 * 2 / 3, tlv - borderTopWidth2 * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
              this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 * 2 / 3, trh - borderRightWidth2 * 2 / 3, trv - borderTopWidth2 * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
              this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 * 2 / 3, brv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
              this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 * 2 / 3, blv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
              this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2, tlh - borderLeftWidth2 / 2, tlv - borderTopWidth2 / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2);
              this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 2, trh - borderRightWidth2 / 2, trv - borderTopWidth2 / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + borderTopWidth2 / 2);
              this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 2, brv - borderBottomWidth2 / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
              this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + leftHeight, blh - borderLeftWidth2 / 2, blv - borderBottomWidth2 / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
              this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
              this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
              this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
              this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
              this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2, Math.max(0, tlh - borderLeftWidth2), Math.max(0, tlv - borderTopWidth2), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2);
              this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth2), bounds.top + borderTopWidth2, topWidth > bounds.width + borderRightWidth2 ? 0 : Math.max(0, trh - borderRightWidth2), Math.max(0, trv - borderTopWidth2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + borderTopWidth2);
              this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth2), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth2), Math.max(0, brh - borderRightWidth2), Math.max(0, brv - borderBottomWidth2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + bounds.height - borderBottomWidth2);
              this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth2), Math.max(0, blh - borderLeftWidth2), Math.max(0, blv - borderBottomWidth2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + bounds.height - borderBottomWidth2);
              this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2, Math.max(0, tlh - (borderLeftWidth2 + paddingLeft2)), Math.max(0, tlv - (borderTopWidth2 + paddingTop2)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2);
              this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth2 + paddingLeft2), bounds.top + borderTopWidth2 + paddingTop2, topWidth > bounds.width + borderLeftWidth2 + paddingLeft2 ? 0 : trh - borderLeftWidth2 + paddingLeft2, trv - (borderTopWidth2 + paddingTop2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + borderTopWidth2 + paddingTop2);
              this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth2 + paddingLeft2)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth2 + paddingTop2), Math.max(0, brh - (borderRightWidth2 + paddingRight2)), brv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
              this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth2 + paddingLeft2)), blv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
            }
            return BoundCurves2;
          })()
        );
        var CORNER;
        (function(CORNER2) {
          CORNER2[CORNER2["TOP_LEFT"] = 0] = "TOP_LEFT";
          CORNER2[CORNER2["TOP_RIGHT"] = 1] = "TOP_RIGHT";
          CORNER2[CORNER2["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
          CORNER2[CORNER2["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
        })(CORNER || (CORNER = {}));
        var getCurvePoints = function(x, y, r1, r2, position2) {
          var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
          var ox = r1 * kappa;
          var oy = r2 * kappa;
          var xm = x + r1;
          var ym = y + r2;
          switch (position2) {
            case CORNER.TOP_LEFT:
              return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
            case CORNER.TOP_RIGHT:
              return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
            case CORNER.BOTTOM_RIGHT:
              return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
            case CORNER.BOTTOM_LEFT:
            default:
              return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
          }
        };
        var calculateBorderBoxPath = function(curves) {
          return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
        };
        var calculateContentBoxPath = function(curves) {
          return [
            curves.topLeftContentBox,
            curves.topRightContentBox,
            curves.bottomRightContentBox,
            curves.bottomLeftContentBox
          ];
        };
        var calculatePaddingBoxPath = function(curves) {
          return [
            curves.topLeftPaddingBox,
            curves.topRightPaddingBox,
            curves.bottomRightPaddingBox,
            curves.bottomLeftPaddingBox
          ];
        };
        var TransformEffect = (
          /** @class */
          /* @__PURE__ */ (function() {
            function TransformEffect2(offsetX, offsetY, matrix2) {
              this.offsetX = offsetX;
              this.offsetY = offsetY;
              this.matrix = matrix2;
              this.type = 0;
              this.target = 2 | 4;
            }
            return TransformEffect2;
          })()
        );
        var ClipEffect = (
          /** @class */
          /* @__PURE__ */ (function() {
            function ClipEffect2(path, target) {
              this.path = path;
              this.target = target;
              this.type = 1;
            }
            return ClipEffect2;
          })()
        );
        var OpacityEffect = (
          /** @class */
          /* @__PURE__ */ (function() {
            function OpacityEffect2(opacity2) {
              this.opacity = opacity2;
              this.type = 2;
              this.target = 2 | 4;
            }
            return OpacityEffect2;
          })()
        );
        var isTransformEffect = function(effect) {
          return effect.type === 0;
        };
        var isClipEffect = function(effect) {
          return effect.type === 1;
        };
        var isOpacityEffect = function(effect) {
          return effect.type === 2;
        };
        var equalPath = function(a2, b) {
          if (a2.length === b.length) {
            return a2.some(function(v, i2) {
              return v === b[i2];
            });
          }
          return false;
        };
        var transformPath = function(path, deltaX, deltaY, deltaW, deltaH) {
          return path.map(function(point, index) {
            switch (index) {
              case 0:
                return point.add(deltaX, deltaY);
              case 1:
                return point.add(deltaX + deltaW, deltaY);
              case 2:
                return point.add(deltaX + deltaW, deltaY + deltaH);
              case 3:
                return point.add(deltaX, deltaY + deltaH);
            }
            return point;
          });
        };
        var StackingContext = (
          /** @class */
          /* @__PURE__ */ (function() {
            function StackingContext2(container) {
              this.element = container;
              this.inlineLevel = [];
              this.nonInlineLevel = [];
              this.negativeZIndex = [];
              this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
              this.positiveZIndex = [];
              this.nonPositionedFloats = [];
              this.nonPositionedInlineLevel = [];
            }
            return StackingContext2;
          })()
        );
        var ElementPaint = (
          /** @class */
          (function() {
            function ElementPaint2(container, parent) {
              this.container = container;
              this.parent = parent;
              this.effects = [];
              this.curves = new BoundCurves(this.container);
              if (this.container.styles.opacity < 1) {
                this.effects.push(new OpacityEffect(this.container.styles.opacity));
              }
              if (this.container.styles.transform !== null) {
                var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
                var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
                var matrix2 = this.container.styles.transform;
                this.effects.push(new TransformEffect(offsetX, offsetY, matrix2));
              }
              if (this.container.styles.overflowX !== 0) {
                var borderBox = calculateBorderBoxPath(this.curves);
                var paddingBox2 = calculatePaddingBoxPath(this.curves);
                if (equalPath(borderBox, paddingBox2)) {
                  this.effects.push(new ClipEffect(
                    borderBox,
                    2 | 4
                    /* CONTENT */
                  ));
                } else {
                  this.effects.push(new ClipEffect(
                    borderBox,
                    2
                    /* BACKGROUND_BORDERS */
                  ));
                  this.effects.push(new ClipEffect(
                    paddingBox2,
                    4
                    /* CONTENT */
                  ));
                }
              }
            }
            ElementPaint2.prototype.getEffects = function(target) {
              var inFlow = [
                2,
                3
                /* FIXED */
              ].indexOf(this.container.styles.position) === -1;
              var parent = this.parent;
              var effects = this.effects.slice(0);
              while (parent) {
                var croplessEffects = parent.effects.filter(function(effect) {
                  return !isClipEffect(effect);
                });
                if (inFlow || parent.container.styles.position !== 0 || !parent.parent) {
                  effects.unshift.apply(effects, croplessEffects);
                  inFlow = [
                    2,
                    3
                    /* FIXED */
                  ].indexOf(parent.container.styles.position) === -1;
                  if (parent.container.styles.overflowX !== 0) {
                    var borderBox = calculateBorderBoxPath(parent.curves);
                    var paddingBox2 = calculatePaddingBoxPath(parent.curves);
                    if (!equalPath(borderBox, paddingBox2)) {
                      effects.unshift(new ClipEffect(
                        paddingBox2,
                        2 | 4
                        /* CONTENT */
                      ));
                    }
                  }
                } else {
                  effects.unshift.apply(effects, croplessEffects);
                }
                parent = parent.parent;
              }
              return effects.filter(function(effect) {
                return contains(effect.target, target);
              });
            };
            return ElementPaint2;
          })()
        );
        var parseStackTree = function(parent, stackingContext, realStackingContext, listItems) {
          parent.container.elements.forEach(function(child) {
            var treatAsRealStackingContext = contains(
              child.flags,
              4
              /* CREATES_REAL_STACKING_CONTEXT */
            );
            var createsStackingContext2 = contains(
              child.flags,
              2
              /* CREATES_STACKING_CONTEXT */
            );
            var paintContainer = new ElementPaint(child, parent);
            if (contains(
              child.styles.display,
              2048
              /* LIST_ITEM */
            )) {
              listItems.push(paintContainer);
            }
            var listOwnerItems = contains(
              child.flags,
              8
              /* IS_LIST_OWNER */
            ) ? [] : listItems;
            if (treatAsRealStackingContext || createsStackingContext2) {
              var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
              var stack = new StackingContext(paintContainer);
              if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                var order_1 = child.styles.zIndex.order;
                if (order_1 < 0) {
                  var index_1 = 0;
                  parentStack.negativeZIndex.some(function(current, i2) {
                    if (order_1 > current.element.container.styles.zIndex.order) {
                      index_1 = i2;
                      return false;
                    } else if (index_1 > 0) {
                      return true;
                    }
                    return false;
                  });
                  parentStack.negativeZIndex.splice(index_1, 0, stack);
                } else if (order_1 > 0) {
                  var index_2 = 0;
                  parentStack.positiveZIndex.some(function(current, i2) {
                    if (order_1 >= current.element.container.styles.zIndex.order) {
                      index_2 = i2 + 1;
                      return false;
                    } else if (index_2 > 0) {
                      return true;
                    }
                    return false;
                  });
                  parentStack.positiveZIndex.splice(index_2, 0, stack);
                } else {
                  parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                }
              } else {
                if (child.styles.isFloating()) {
                  parentStack.nonPositionedFloats.push(stack);
                } else {
                  parentStack.nonPositionedInlineLevel.push(stack);
                }
              }
              parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
            } else {
              if (child.styles.isInlineLevel()) {
                stackingContext.inlineLevel.push(paintContainer);
              } else {
                stackingContext.nonInlineLevel.push(paintContainer);
              }
              parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
            }
            if (contains(
              child.flags,
              8
              /* IS_LIST_OWNER */
            )) {
              processListItems(child, listOwnerItems);
            }
          });
        };
        var processListItems = function(owner, elements) {
          var numbering = owner instanceof OLElementContainer ? owner.start : 1;
          var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
          for (var i2 = 0; i2 < elements.length; i2++) {
            var item = elements[i2];
            if (item.container instanceof LIElementContainer && typeof item.container.value === "number" && item.container.value !== 0) {
              numbering = item.container.value;
            }
            item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
            numbering += reversed ? -1 : 1;
          }
        };
        var parseStackingContexts = function(container) {
          var paintContainer = new ElementPaint(container, null);
          var root = new StackingContext(paintContainer);
          var listItems = [];
          parseStackTree(paintContainer, root, root, listItems);
          processListItems(paintContainer.container, listItems);
          return root;
        };
        var parsePathForBorder = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
          }
        };
        var parsePathForBorderDoubleOuter = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
          }
        };
        var parsePathForBorderDoubleInner = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
          }
        };
        var parsePathForBorderStroke = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
            case 1:
              return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
            case 2:
              return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
            case 3:
            default:
              return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
          }
        };
        var createStrokePathFromCurves = function(outer1, outer2) {
          var path = [];
          if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
          } else {
            path.push(outer1);
          }
          if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
          } else {
            path.push(outer2);
          }
          return path;
        };
        var createPathFromCurves = function(outer1, inner1, outer2, inner2) {
          var path = [];
          if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
          } else {
            path.push(outer1);
          }
          if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
          } else {
            path.push(outer2);
          }
          if (isBezierCurve(inner2)) {
            path.push(inner2.subdivide(0.5, true).reverse());
          } else {
            path.push(inner2);
          }
          if (isBezierCurve(inner1)) {
            path.push(inner1.subdivide(0.5, false).reverse());
          } else {
            path.push(inner1);
          }
          return path;
        };
        var paddingBox = function(element) {
          var bounds = element.bounds;
          var styles = element.styles;
          return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
        };
        var contentBox = function(element) {
          var styles = element.styles;
          var bounds = element.bounds;
          var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, bounds.width);
          var paddingRight2 = getAbsoluteValue(styles.paddingRight, bounds.width);
          var paddingTop2 = getAbsoluteValue(styles.paddingTop, bounds.width);
          var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, bounds.width);
          return bounds.add(paddingLeft2 + styles.borderLeftWidth, paddingTop2 + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft2 + paddingRight2), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop2 + paddingBottom2));
        };
        var calculateBackgroundPositioningArea = function(backgroundOrigin2, element) {
          if (backgroundOrigin2 === 0) {
            return element.bounds;
          }
          if (backgroundOrigin2 === 2) {
            return contentBox(element);
          }
          return paddingBox(element);
        };
        var calculateBackgroundPaintingArea = function(backgroundClip2, element) {
          if (backgroundClip2 === 0) {
            return element.bounds;
          }
          if (backgroundClip2 === 2) {
            return contentBox(element);
          }
          return paddingBox(element);
        };
        var calculateBackgroundRendering = function(container, index, intrinsicSize) {
          var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
          var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
          var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
          var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
          var position2 = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
          var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position2, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
          var offsetX = Math.round(backgroundPositioningArea.left + position2[0]);
          var offsetY = Math.round(backgroundPositioningArea.top + position2[1]);
          return [path, offsetX, offsetY, sizeWidth, sizeHeight];
        };
        var isAuto = function(token) {
          return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
        };
        var hasIntrinsicValue = function(value) {
          return typeof value === "number";
        };
        var calculateBackgroundSize = function(size, _a, bounds) {
          var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
          var first = size[0], second = size[1];
          if (!first) {
            return [0, 0];
          }
          if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
            return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
          }
          var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
          if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
            if (hasIntrinsicValue(intrinsicProportion)) {
              var targetRatio = bounds.width / bounds.height;
              return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
            }
            return [bounds.width, bounds.height];
          }
          var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
          var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
          var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
          if (isAuto(first) && (!second || isAuto(second))) {
            if (hasIntrinsicWidth && hasIntrinsicHeight) {
              return [intrinsicWidth, intrinsicHeight];
            }
            if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
              return [bounds.width, bounds.height];
            }
            if (hasIntrinsicDimensions && hasIntrinsicProportion) {
              var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
              var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
              return [width_1, height_1];
            }
            var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
            var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
            return [width_2, height_2];
          }
          if (hasIntrinsicProportion) {
            var width_3 = 0;
            var height_3 = 0;
            if (isLengthPercentage(first)) {
              width_3 = getAbsoluteValue(first, bounds.width);
            } else if (isLengthPercentage(second)) {
              height_3 = getAbsoluteValue(second, bounds.height);
            }
            if (isAuto(first)) {
              width_3 = height_3 * intrinsicProportion;
            } else if (!second || isAuto(second)) {
              height_3 = width_3 / intrinsicProportion;
            }
            return [width_3, height_3];
          }
          var width = null;
          var height = null;
          if (isLengthPercentage(first)) {
            width = getAbsoluteValue(first, bounds.width);
          } else if (second && isLengthPercentage(second)) {
            height = getAbsoluteValue(second, bounds.height);
          }
          if (width !== null && (!second || isAuto(second))) {
            height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
          }
          if (height !== null && isAuto(first)) {
            width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
          }
          if (width !== null && height !== null) {
            return [width, height];
          }
          throw new Error("Unable to calculate background-size for element");
        };
        var getBackgroundValueForIndex = function(values, index) {
          var value = values[index];
          if (typeof value === "undefined") {
            return values[0];
          }
          return value;
        };
        var calculateBackgroundRepeatPath = function(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
          var x = _a[0], y = _a[1];
          var width = _b[0], height = _b[1];
          switch (repeat) {
            case 2:
              return [
                new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
              ];
            case 3:
              return [
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
              ];
            case 1:
              return [
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
              ];
            default:
              return [
                new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
              ];
          }
        };
        var SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        var SAMPLE_TEXT = "Hidden Text";
        var FontMetrics = (
          /** @class */
          (function() {
            function FontMetrics2(document2) {
              this._data = {};
              this._document = document2;
            }
            FontMetrics2.prototype.parseMetrics = function(fontFamily2, fontSize2) {
              var container = this._document.createElement("div");
              var img = this._document.createElement("img");
              var span = this._document.createElement("span");
              var body = this._document.body;
              container.style.visibility = "hidden";
              container.style.fontFamily = fontFamily2;
              container.style.fontSize = fontSize2;
              container.style.margin = "0";
              container.style.padding = "0";
              container.style.whiteSpace = "nowrap";
              body.appendChild(container);
              img.src = SMALL_IMAGE;
              img.width = 1;
              img.height = 1;
              img.style.margin = "0";
              img.style.padding = "0";
              img.style.verticalAlign = "baseline";
              span.style.fontFamily = fontFamily2;
              span.style.fontSize = fontSize2;
              span.style.margin = "0";
              span.style.padding = "0";
              span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
              container.appendChild(span);
              container.appendChild(img);
              var baseline = img.offsetTop - span.offsetTop + 2;
              container.removeChild(span);
              container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
              container.style.lineHeight = "normal";
              img.style.verticalAlign = "super";
              var middle = img.offsetTop - container.offsetTop + 2;
              body.removeChild(container);
              return { baseline, middle };
            };
            FontMetrics2.prototype.getMetrics = function(fontFamily2, fontSize2) {
              var key = fontFamily2 + " " + fontSize2;
              if (typeof this._data[key] === "undefined") {
                this._data[key] = this.parseMetrics(fontFamily2, fontSize2);
              }
              return this._data[key];
            };
            return FontMetrics2;
          })()
        );
        var Renderer = (
          /** @class */
          /* @__PURE__ */ (function() {
            function Renderer2(context, options) {
              this.context = context;
              this.options = options;
            }
            return Renderer2;
          })()
        );
        var MASK_OFFSET = 1e4;
        var CanvasRenderer = (
          /** @class */
          (function(_super) {
            __extends(CanvasRenderer2, _super);
            function CanvasRenderer2(context, options) {
              var _this = _super.call(this, context, options) || this;
              _this._activeEffects = [];
              _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
              _this.ctx = _this.canvas.getContext("2d");
              if (!options.canvas) {
                _this.canvas.width = Math.floor(options.width * options.scale);
                _this.canvas.height = Math.floor(options.height * options.scale);
                _this.canvas.style.width = options.width + "px";
                _this.canvas.style.height = options.height + "px";
              }
              _this.fontMetrics = new FontMetrics(document);
              _this.ctx.scale(_this.options.scale, _this.options.scale);
              _this.ctx.translate(-options.x, -options.y);
              _this.ctx.textBaseline = "bottom";
              _this._activeEffects = [];
              _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
              return _this;
            }
            CanvasRenderer2.prototype.applyEffects = function(effects) {
              var _this = this;
              while (this._activeEffects.length) {
                this.popEffect();
              }
              effects.forEach(function(effect) {
                return _this.applyEffect(effect);
              });
            };
            CanvasRenderer2.prototype.applyEffect = function(effect) {
              this.ctx.save();
              if (isOpacityEffect(effect)) {
                this.ctx.globalAlpha = effect.opacity;
              }
              if (isTransformEffect(effect)) {
                this.ctx.translate(effect.offsetX, effect.offsetY);
                this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
                this.ctx.translate(-effect.offsetX, -effect.offsetY);
              }
              if (isClipEffect(effect)) {
                this.path(effect.path);
                this.ctx.clip();
              }
              this._activeEffects.push(effect);
            };
            CanvasRenderer2.prototype.popEffect = function() {
              this._activeEffects.pop();
              this.ctx.restore();
            };
            CanvasRenderer2.prototype.renderStack = function(stack) {
              return __awaiter(this, void 0, void 0, function() {
                var styles;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      styles = stack.element.container.styles;
                      if (!styles.isVisible()) return [3, 2];
                      return [4, this.renderStackContent(stack)];
                    case 1:
                      _a.sent();
                      _a.label = 2;
                    case 2:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderNode = function(paint) {
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (contains(
                        paint.container.flags,
                        16
                        /* DEBUG_RENDER */
                      )) {
                        debugger;
                      }
                      if (!paint.container.styles.isVisible()) return [3, 3];
                      return [4, this.renderNodeBackgroundAndBorders(paint)];
                    case 1:
                      _a.sent();
                      return [4, this.renderNodeContent(paint)];
                    case 2:
                      _a.sent();
                      _a.label = 3;
                    case 3:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderTextWithLetterSpacing = function(text, letterSpacing2, baseline) {
              var _this = this;
              if (letterSpacing2 === 0) {
                this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
              } else {
                var letters = segmentGraphemes(text.text);
                letters.reduce(function(left, letter) {
                  _this.ctx.fillText(letter, left, text.bounds.top + baseline);
                  return left + _this.ctx.measureText(letter).width;
                }, text.bounds.left);
              }
            };
            CanvasRenderer2.prototype.createFontStyle = function(styles) {
              var fontVariant2 = styles.fontVariant.filter(function(variant) {
                return variant === "normal" || variant === "small-caps";
              }).join("");
              var fontFamily2 = fixIOSSystemFonts(styles.fontFamily).join(", ");
              var fontSize2 = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
              return [
                [styles.fontStyle, fontVariant2, styles.fontWeight, fontSize2, fontFamily2].join(" "),
                fontFamily2,
                fontSize2
              ];
            };
            CanvasRenderer2.prototype.renderTextNode = function(text, styles) {
              return __awaiter(this, void 0, void 0, function() {
                var _a, font, fontFamily2, fontSize2, _b, baseline, middle, paintOrder2;
                var _this = this;
                return __generator(this, function(_c) {
                  _a = this.createFontStyle(styles), font = _a[0], fontFamily2 = _a[1], fontSize2 = _a[2];
                  this.ctx.font = font;
                  this.ctx.direction = styles.direction === 1 ? "rtl" : "ltr";
                  this.ctx.textAlign = "left";
                  this.ctx.textBaseline = "alphabetic";
                  _b = this.fontMetrics.getMetrics(fontFamily2, fontSize2), baseline = _b.baseline, middle = _b.middle;
                  paintOrder2 = styles.paintOrder;
                  text.textBounds.forEach(function(text2) {
                    paintOrder2.forEach(function(paintOrderLayer) {
                      switch (paintOrderLayer) {
                        case 0:
                          _this.ctx.fillStyle = asString(styles.color);
                          _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                          var textShadows = styles.textShadow;
                          if (textShadows.length && text2.text.trim().length) {
                            textShadows.slice(0).reverse().forEach(function(textShadow2) {
                              _this.ctx.shadowColor = asString(textShadow2.color);
                              _this.ctx.shadowOffsetX = textShadow2.offsetX.number * _this.options.scale;
                              _this.ctx.shadowOffsetY = textShadow2.offsetY.number * _this.options.scale;
                              _this.ctx.shadowBlur = textShadow2.blur.number;
                              _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                            });
                            _this.ctx.shadowColor = "";
                            _this.ctx.shadowOffsetX = 0;
                            _this.ctx.shadowOffsetY = 0;
                            _this.ctx.shadowBlur = 0;
                          }
                          if (styles.textDecorationLine.length) {
                            _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                            styles.textDecorationLine.forEach(function(textDecorationLine2) {
                              switch (textDecorationLine2) {
                                case 1:
                                  _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top + baseline), text2.bounds.width, 1);
                                  break;
                                case 2:
                                  _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top), text2.bounds.width, 1);
                                  break;
                                case 3:
                                  _this.ctx.fillRect(text2.bounds.left, Math.ceil(text2.bounds.top + middle), text2.bounds.width, 1);
                                  break;
                              }
                            });
                          }
                          break;
                        case 1:
                          if (styles.webkitTextStrokeWidth && text2.text.trim().length) {
                            _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                            _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                            _this.ctx.lineJoin = !!window.chrome ? "miter" : "round";
                            _this.ctx.strokeText(text2.text, text2.bounds.left, text2.bounds.top + baseline);
                          }
                          _this.ctx.strokeStyle = "";
                          _this.ctx.lineWidth = 0;
                          _this.ctx.lineJoin = "miter";
                          break;
                      }
                    });
                  });
                  return [
                    2
                    /*return*/
                  ];
                });
              });
            };
            CanvasRenderer2.prototype.renderReplacedElement = function(container, curves, image2) {
              if (image2 && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
                var box2 = contentBox(container);
                var path = calculatePaddingBoxPath(curves);
                this.path(path);
                this.ctx.save();
                this.ctx.clip();
                this.ctx.drawImage(image2, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box2.left, box2.top, box2.width, box2.height);
                this.ctx.restore();
              }
            };
            CanvasRenderer2.prototype.renderNodeContent = function(paint) {
              return __awaiter(this, void 0, void 0, function() {
                var container, curves, styles, _i, _a, child, image2, image2, iframeRenderer, canvas, size, _b, fontFamily2, fontSize2, baseline, bounds, x, textBounds, img, image2, url2, fontFamily2, bounds;
                return __generator(this, function(_c) {
                  switch (_c.label) {
                    case 0:
                      this.applyEffects(paint.getEffects(
                        4
                        /* CONTENT */
                      ));
                      container = paint.container;
                      curves = paint.curves;
                      styles = container.styles;
                      _i = 0, _a = container.textNodes;
                      _c.label = 1;
                    case 1:
                      if (!(_i < _a.length)) return [3, 4];
                      child = _a[_i];
                      return [4, this.renderTextNode(child, styles)];
                    case 2:
                      _c.sent();
                      _c.label = 3;
                    case 3:
                      _i++;
                      return [3, 1];
                    case 4:
                      if (!(container instanceof ImageElementContainer)) return [3, 8];
                      _c.label = 5;
                    case 5:
                      _c.trys.push([5, 7, , 8]);
                      return [4, this.context.cache.match(container.src)];
                    case 6:
                      image2 = _c.sent();
                      this.renderReplacedElement(container, curves, image2);
                      return [3, 8];
                    case 7:
                      _c.sent();
                      this.context.logger.error("Error loading image " + container.src);
                      return [3, 8];
                    case 8:
                      if (container instanceof CanvasElementContainer) {
                        this.renderReplacedElement(container, curves, container.canvas);
                      }
                      if (!(container instanceof SVGElementContainer)) return [3, 12];
                      _c.label = 9;
                    case 9:
                      _c.trys.push([9, 11, , 12]);
                      return [4, this.context.cache.match(container.svg)];
                    case 10:
                      image2 = _c.sent();
                      this.renderReplacedElement(container, curves, image2);
                      return [3, 12];
                    case 11:
                      _c.sent();
                      this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
                      return [3, 12];
                    case 12:
                      if (!(container instanceof IFrameElementContainer && container.tree)) return [3, 14];
                      iframeRenderer = new CanvasRenderer2(this.context, {
                        scale: this.options.scale,
                        backgroundColor: container.backgroundColor,
                        x: 0,
                        y: 0,
                        width: container.width,
                        height: container.height
                      });
                      return [4, iframeRenderer.render(container.tree)];
                    case 13:
                      canvas = _c.sent();
                      if (container.width && container.height) {
                        this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                      }
                      _c.label = 14;
                    case 14:
                      if (container instanceof InputElementContainer) {
                        size = Math.min(container.bounds.width, container.bounds.height);
                        if (container.type === CHECKBOX) {
                          if (container.checked) {
                            this.ctx.save();
                            this.path([
                              new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                              new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                              new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                              new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                              new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                              new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                              new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                            ]);
                            this.ctx.fillStyle = asString(INPUT_COLOR);
                            this.ctx.fill();
                            this.ctx.restore();
                          }
                        } else if (container.type === RADIO) {
                          if (container.checked) {
                            this.ctx.save();
                            this.ctx.beginPath();
                            this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                            this.ctx.fillStyle = asString(INPUT_COLOR);
                            this.ctx.fill();
                            this.ctx.restore();
                          }
                        }
                      }
                      if (isTextInputElement(container) && container.value.length) {
                        _b = this.createFontStyle(styles), fontFamily2 = _b[0], fontSize2 = _b[1];
                        baseline = this.fontMetrics.getMetrics(fontFamily2, fontSize2).baseline;
                        this.ctx.font = fontFamily2;
                        this.ctx.fillStyle = asString(styles.color);
                        this.ctx.textBaseline = "alphabetic";
                        this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                        bounds = contentBox(container);
                        x = 0;
                        switch (container.styles.textAlign) {
                          case 1:
                            x += bounds.width / 2;
                            break;
                          case 2:
                            x += bounds.width;
                            break;
                        }
                        textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                        this.ctx.save();
                        this.path([
                          new Vector(bounds.left, bounds.top),
                          new Vector(bounds.left + bounds.width, bounds.top),
                          new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                          new Vector(bounds.left, bounds.top + bounds.height)
                        ]);
                        this.ctx.clip();
                        this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                        this.ctx.restore();
                        this.ctx.textBaseline = "alphabetic";
                        this.ctx.textAlign = "left";
                      }
                      if (!contains(
                        container.styles.display,
                        2048
                        /* LIST_ITEM */
                      )) return [3, 20];
                      if (!(container.styles.listStyleImage !== null)) return [3, 19];
                      img = container.styles.listStyleImage;
                      if (!(img.type === 0)) return [3, 18];
                      image2 = void 0;
                      url2 = img.url;
                      _c.label = 15;
                    case 15:
                      _c.trys.push([15, 17, , 18]);
                      return [4, this.context.cache.match(url2)];
                    case 16:
                      image2 = _c.sent();
                      this.ctx.drawImage(image2, container.bounds.left - (image2.width + 10), container.bounds.top);
                      return [3, 18];
                    case 17:
                      _c.sent();
                      this.context.logger.error("Error loading list-style-image " + url2);
                      return [3, 18];
                    case 18:
                      return [3, 20];
                    case 19:
                      if (paint.listValue && container.styles.listStyleType !== -1) {
                        fontFamily2 = this.createFontStyle(styles)[0];
                        this.ctx.font = fontFamily2;
                        this.ctx.fillStyle = asString(styles.color);
                        this.ctx.textBaseline = "middle";
                        this.ctx.textAlign = "right";
                        bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                        this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                        this.ctx.textBaseline = "bottom";
                        this.ctx.textAlign = "left";
                      }
                      _c.label = 20;
                    case 20:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderStackContent = function(stack) {
              return __awaiter(this, void 0, void 0, function() {
                var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
                return __generator(this, function(_p) {
                  switch (_p.label) {
                    case 0:
                      if (contains(
                        stack.element.container.flags,
                        16
                        /* DEBUG_RENDER */
                      )) {
                        debugger;
                      }
                      return [4, this.renderNodeBackgroundAndBorders(stack.element)];
                    case 1:
                      _p.sent();
                      _i = 0, _a = stack.negativeZIndex;
                      _p.label = 2;
                    case 2:
                      if (!(_i < _a.length)) return [3, 5];
                      child = _a[_i];
                      return [4, this.renderStack(child)];
                    case 3:
                      _p.sent();
                      _p.label = 4;
                    case 4:
                      _i++;
                      return [3, 2];
                    case 5:
                      return [4, this.renderNodeContent(stack.element)];
                    case 6:
                      _p.sent();
                      _b = 0, _c = stack.nonInlineLevel;
                      _p.label = 7;
                    case 7:
                      if (!(_b < _c.length)) return [3, 10];
                      child = _c[_b];
                      return [4, this.renderNode(child)];
                    case 8:
                      _p.sent();
                      _p.label = 9;
                    case 9:
                      _b++;
                      return [3, 7];
                    case 10:
                      _d = 0, _e = stack.nonPositionedFloats;
                      _p.label = 11;
                    case 11:
                      if (!(_d < _e.length)) return [3, 14];
                      child = _e[_d];
                      return [4, this.renderStack(child)];
                    case 12:
                      _p.sent();
                      _p.label = 13;
                    case 13:
                      _d++;
                      return [3, 11];
                    case 14:
                      _f = 0, _g = stack.nonPositionedInlineLevel;
                      _p.label = 15;
                    case 15:
                      if (!(_f < _g.length)) return [3, 18];
                      child = _g[_f];
                      return [4, this.renderStack(child)];
                    case 16:
                      _p.sent();
                      _p.label = 17;
                    case 17:
                      _f++;
                      return [3, 15];
                    case 18:
                      _h = 0, _j = stack.inlineLevel;
                      _p.label = 19;
                    case 19:
                      if (!(_h < _j.length)) return [3, 22];
                      child = _j[_h];
                      return [4, this.renderNode(child)];
                    case 20:
                      _p.sent();
                      _p.label = 21;
                    case 21:
                      _h++;
                      return [3, 19];
                    case 22:
                      _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                      _p.label = 23;
                    case 23:
                      if (!(_k < _l.length)) return [3, 26];
                      child = _l[_k];
                      return [4, this.renderStack(child)];
                    case 24:
                      _p.sent();
                      _p.label = 25;
                    case 25:
                      _k++;
                      return [3, 23];
                    case 26:
                      _m = 0, _o = stack.positiveZIndex;
                      _p.label = 27;
                    case 27:
                      if (!(_m < _o.length)) return [3, 30];
                      child = _o[_m];
                      return [4, this.renderStack(child)];
                    case 28:
                      _p.sent();
                      _p.label = 29;
                    case 29:
                      _m++;
                      return [3, 27];
                    case 30:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.mask = function(paths) {
              this.ctx.beginPath();
              this.ctx.moveTo(0, 0);
              this.ctx.lineTo(this.canvas.width, 0);
              this.ctx.lineTo(this.canvas.width, this.canvas.height);
              this.ctx.lineTo(0, this.canvas.height);
              this.ctx.lineTo(0, 0);
              this.formatPath(paths.slice(0).reverse());
              this.ctx.closePath();
            };
            CanvasRenderer2.prototype.path = function(paths) {
              this.ctx.beginPath();
              this.formatPath(paths);
              this.ctx.closePath();
            };
            CanvasRenderer2.prototype.formatPath = function(paths) {
              var _this = this;
              paths.forEach(function(point, index) {
                var start = isBezierCurve(point) ? point.start : point;
                if (index === 0) {
                  _this.ctx.moveTo(start.x, start.y);
                } else {
                  _this.ctx.lineTo(start.x, start.y);
                }
                if (isBezierCurve(point)) {
                  _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                }
              });
            };
            CanvasRenderer2.prototype.renderRepeat = function(path, pattern, offsetX, offsetY) {
              this.path(path);
              this.ctx.fillStyle = pattern;
              this.ctx.translate(offsetX, offsetY);
              this.ctx.fill();
              this.ctx.translate(-offsetX, -offsetY);
            };
            CanvasRenderer2.prototype.resizeImage = function(image2, width, height) {
              var _a;
              if (image2.width === width && image2.height === height) {
                return image2;
              }
              var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
              var canvas = ownerDocument.createElement("canvas");
              canvas.width = Math.max(1, width);
              canvas.height = Math.max(1, height);
              var ctx = canvas.getContext("2d");
              ctx.drawImage(image2, 0, 0, image2.width, image2.height, 0, 0, width, height);
              return canvas;
            };
            CanvasRenderer2.prototype.renderBackgroundImage = function(container) {
              return __awaiter(this, void 0, void 0, function() {
                var index, _loop_1, this_1, _i, _a, backgroundImage2;
                return __generator(this, function(_b) {
                  switch (_b.label) {
                    case 0:
                      index = container.styles.backgroundImage.length - 1;
                      _loop_1 = function(backgroundImage3) {
                        var image2, url2, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position2, x, y, _g, rx, ry, radialGradient_1, midX, midY, f2, invF;
                        return __generator(this, function(_h) {
                          switch (_h.label) {
                            case 0:
                              if (!(backgroundImage3.type === 0)) return [3, 5];
                              image2 = void 0;
                              url2 = backgroundImage3.url;
                              _h.label = 1;
                            case 1:
                              _h.trys.push([1, 3, , 4]);
                              return [4, this_1.context.cache.match(url2)];
                            case 2:
                              image2 = _h.sent();
                              return [3, 4];
                            case 3:
                              _h.sent();
                              this_1.context.logger.error("Error loading background-image " + url2);
                              return [3, 4];
                            case 4:
                              if (image2) {
                                _c = calculateBackgroundRendering(container, index, [
                                  image2.width,
                                  image2.height,
                                  image2.width / image2.height
                                ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                                pattern = this_1.ctx.createPattern(this_1.resizeImage(image2, width, height), "repeat");
                                this_1.renderRepeat(path, pattern, x, y);
                              }
                              return [3, 6];
                            case 5:
                              if (isLinearGradient(backgroundImage3)) {
                                _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                                _e = calculateGradientDirection(backgroundImage3.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                                canvas = document.createElement("canvas");
                                canvas.width = width;
                                canvas.height = height;
                                ctx = canvas.getContext("2d");
                                gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                                processColorStops(backgroundImage3.stops, lineLength).forEach(function(colorStop) {
                                  return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                });
                                ctx.fillStyle = gradient_1;
                                ctx.fillRect(0, 0, width, height);
                                if (width > 0 && height > 0) {
                                  pattern = this_1.ctx.createPattern(canvas, "repeat");
                                  this_1.renderRepeat(path, pattern, x, y);
                                }
                              } else if (isRadialGradient(backgroundImage3)) {
                                _f = calculateBackgroundRendering(container, index, [
                                  null,
                                  null,
                                  null
                                ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                                position2 = backgroundImage3.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage3.position;
                                x = getAbsoluteValue(position2[0], width);
                                y = getAbsoluteValue(position2[position2.length - 1], height);
                                _g = calculateRadius(backgroundImage3, x, y, width, height), rx = _g[0], ry = _g[1];
                                if (rx > 0 && ry > 0) {
                                  radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                  processColorStops(backgroundImage3.stops, rx * 2).forEach(function(colorStop) {
                                    return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                  });
                                  this_1.path(path);
                                  this_1.ctx.fillStyle = radialGradient_1;
                                  if (rx !== ry) {
                                    midX = container.bounds.left + 0.5 * container.bounds.width;
                                    midY = container.bounds.top + 0.5 * container.bounds.height;
                                    f2 = ry / rx;
                                    invF = 1 / f2;
                                    this_1.ctx.save();
                                    this_1.ctx.translate(midX, midY);
                                    this_1.ctx.transform(1, 0, 0, f2, 0, 0);
                                    this_1.ctx.translate(-midX, -midY);
                                    this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                    this_1.ctx.restore();
                                  } else {
                                    this_1.ctx.fill();
                                  }
                                }
                              }
                              _h.label = 6;
                            case 6:
                              index--;
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      };
                      this_1 = this;
                      _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                      _b.label = 1;
                    case 1:
                      if (!(_i < _a.length)) return [3, 4];
                      backgroundImage2 = _a[_i];
                      return [5, _loop_1(backgroundImage2)];
                    case 2:
                      _b.sent();
                      _b.label = 3;
                    case 3:
                      _i++;
                      return [3, 1];
                    case 4:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderSolidBorder = function(color2, side, curvePoints) {
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  this.path(parsePathForBorder(curvePoints, side));
                  this.ctx.fillStyle = asString(color2);
                  this.ctx.fill();
                  return [
                    2
                    /*return*/
                  ];
                });
              });
            };
            CanvasRenderer2.prototype.renderDoubleBorder = function(color2, width, side, curvePoints) {
              return __awaiter(this, void 0, void 0, function() {
                var outerPaths, innerPaths;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (!(width < 3)) return [3, 2];
                      return [4, this.renderSolidBorder(color2, side, curvePoints)];
                    case 1:
                      _a.sent();
                      return [
                        2
                        /*return*/
                      ];
                    case 2:
                      outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
                      this.path(outerPaths);
                      this.ctx.fillStyle = asString(color2);
                      this.ctx.fill();
                      innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
                      this.path(innerPaths);
                      this.ctx.fill();
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderNodeBackgroundAndBorders = function(paint) {
              return __awaiter(this, void 0, void 0, function() {
                var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      this.applyEffects(paint.getEffects(
                        2
                        /* BACKGROUND_BORDERS */
                      ));
                      styles = paint.container.styles;
                      hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                      borders = [
                        { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
                        { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
                        { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
                        { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
                      ];
                      backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                      if (!(hasBackground || styles.boxShadow.length)) return [3, 2];
                      this.ctx.save();
                      this.path(backgroundPaintingArea);
                      this.ctx.clip();
                      if (!isTransparent(styles.backgroundColor)) {
                        this.ctx.fillStyle = asString(styles.backgroundColor);
                        this.ctx.fill();
                      }
                      return [4, this.renderBackgroundImage(paint.container)];
                    case 1:
                      _a.sent();
                      this.ctx.restore();
                      styles.boxShadow.slice(0).reverse().forEach(function(shadow) {
                        _this.ctx.save();
                        var borderBoxArea = calculateBorderBoxPath(paint.curves);
                        var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                        var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                        if (shadow.inset) {
                          _this.path(borderBoxArea);
                          _this.ctx.clip();
                          _this.mask(shadowPaintingArea);
                        } else {
                          _this.mask(borderBoxArea);
                          _this.ctx.clip();
                          _this.path(shadowPaintingArea);
                        }
                        _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                        _this.ctx.shadowOffsetY = shadow.offsetY.number;
                        _this.ctx.shadowColor = asString(shadow.color);
                        _this.ctx.shadowBlur = shadow.blur.number;
                        _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : "rgba(0,0,0,1)";
                        _this.ctx.fill();
                        _this.ctx.restore();
                      });
                      _a.label = 2;
                    case 2:
                      side = 0;
                      _i = 0, borders_1 = borders;
                      _a.label = 3;
                    case 3:
                      if (!(_i < borders_1.length)) return [3, 13];
                      border = borders_1[_i];
                      if (!(border.style !== 0 && !isTransparent(border.color) && border.width > 0)) return [3, 11];
                      if (!(border.style === 2)) return [3, 5];
                      return [4, this.renderDashedDottedBorder(
                        border.color,
                        border.width,
                        side,
                        paint.curves,
                        2
                        /* DASHED */
                      )];
                    case 4:
                      _a.sent();
                      return [3, 11];
                    case 5:
                      if (!(border.style === 3)) return [3, 7];
                      return [4, this.renderDashedDottedBorder(
                        border.color,
                        border.width,
                        side,
                        paint.curves,
                        3
                        /* DOTTED */
                      )];
                    case 6:
                      _a.sent();
                      return [3, 11];
                    case 7:
                      if (!(border.style === 4)) return [3, 9];
                      return [4, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
                    case 8:
                      _a.sent();
                      return [3, 11];
                    case 9:
                      return [4, this.renderSolidBorder(border.color, side, paint.curves)];
                    case 10:
                      _a.sent();
                      _a.label = 11;
                    case 11:
                      side++;
                      _a.label = 12;
                    case 12:
                      _i++;
                      return [3, 3];
                    case 13:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderDashedDottedBorder = function(color2, width, side, curvePoints, style) {
              return __awaiter(this, void 0, void 0, function() {
                var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
                return __generator(this, function(_a) {
                  this.ctx.save();
                  strokePaths = parsePathForBorderStroke(curvePoints, side);
                  boxPaths = parsePathForBorder(curvePoints, side);
                  if (style === 2) {
                    this.path(boxPaths);
                    this.ctx.clip();
                  }
                  if (isBezierCurve(boxPaths[0])) {
                    startX = boxPaths[0].start.x;
                    startY = boxPaths[0].start.y;
                  } else {
                    startX = boxPaths[0].x;
                    startY = boxPaths[0].y;
                  }
                  if (isBezierCurve(boxPaths[1])) {
                    endX = boxPaths[1].end.x;
                    endY = boxPaths[1].end.y;
                  } else {
                    endX = boxPaths[1].x;
                    endY = boxPaths[1].y;
                  }
                  if (side === 0 || side === 2) {
                    length = Math.abs(startX - endX);
                  } else {
                    length = Math.abs(startY - endY);
                  }
                  this.ctx.beginPath();
                  if (style === 3) {
                    this.formatPath(strokePaths);
                  } else {
                    this.formatPath(boxPaths.slice(0, 2));
                  }
                  dashLength = width < 3 ? width * 3 : width * 2;
                  spaceLength = width < 3 ? width * 2 : width;
                  if (style === 3) {
                    dashLength = width;
                    spaceLength = width;
                  }
                  useLineDash = true;
                  if (length <= dashLength * 2) {
                    useLineDash = false;
                  } else if (length <= dashLength * 2 + spaceLength) {
                    multiplier = length / (2 * dashLength + spaceLength);
                    dashLength *= multiplier;
                    spaceLength *= multiplier;
                  } else {
                    numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
                    minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
                    maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
                    spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
                  }
                  if (useLineDash) {
                    if (style === 3) {
                      this.ctx.setLineDash([0, dashLength + spaceLength]);
                    } else {
                      this.ctx.setLineDash([dashLength, spaceLength]);
                    }
                  }
                  if (style === 3) {
                    this.ctx.lineCap = "round";
                    this.ctx.lineWidth = width;
                  } else {
                    this.ctx.lineWidth = width * 2 + 1.1;
                  }
                  this.ctx.strokeStyle = asString(color2);
                  this.ctx.stroke();
                  this.ctx.setLineDash([]);
                  if (style === 2) {
                    if (isBezierCurve(boxPaths[0])) {
                      path1 = boxPaths[3];
                      path2 = boxPaths[0];
                      this.ctx.beginPath();
                      this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                      this.ctx.stroke();
                    }
                    if (isBezierCurve(boxPaths[1])) {
                      path1 = boxPaths[1];
                      path2 = boxPaths[2];
                      this.ctx.beginPath();
                      this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                      this.ctx.stroke();
                    }
                  }
                  this.ctx.restore();
                  return [
                    2
                    /*return*/
                  ];
                });
              });
            };
            CanvasRenderer2.prototype.render = function(element) {
              return __awaiter(this, void 0, void 0, function() {
                var stack;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (this.options.backgroundColor) {
                        this.ctx.fillStyle = asString(this.options.backgroundColor);
                        this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                      }
                      stack = parseStackingContexts(element);
                      return [4, this.renderStack(stack)];
                    case 1:
                      _a.sent();
                      this.applyEffects([]);
                      return [2, this.canvas];
                  }
                });
              });
            };
            return CanvasRenderer2;
          })(Renderer)
        );
        var isTextInputElement = function(container) {
          if (container instanceof TextareaElementContainer) {
            return true;
          } else if (container instanceof SelectElementContainer) {
            return true;
          } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
            return true;
          }
          return false;
        };
        var calculateBackgroundCurvedPaintingArea = function(clip, curves) {
          switch (clip) {
            case 0:
              return calculateBorderBoxPath(curves);
            case 2:
              return calculateContentBoxPath(curves);
            case 1:
            default:
              return calculatePaddingBoxPath(curves);
          }
        };
        var canvasTextAlign = function(textAlign2) {
          switch (textAlign2) {
            case 1:
              return "center";
            case 2:
              return "right";
            case 0:
            default:
              return "left";
          }
        };
        var iOSBrokenFonts = ["-apple-system", "system-ui"];
        var fixIOSSystemFonts = function(fontFamilies) {
          return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? fontFamilies.filter(function(fontFamily2) {
            return iOSBrokenFonts.indexOf(fontFamily2) === -1;
          }) : fontFamilies;
        };
        var ForeignObjectRenderer = (
          /** @class */
          (function(_super) {
            __extends(ForeignObjectRenderer2, _super);
            function ForeignObjectRenderer2(context, options) {
              var _this = _super.call(this, context, options) || this;
              _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
              _this.ctx = _this.canvas.getContext("2d");
              _this.options = options;
              _this.canvas.width = Math.floor(options.width * options.scale);
              _this.canvas.height = Math.floor(options.height * options.scale);
              _this.canvas.style.width = options.width + "px";
              _this.canvas.style.height = options.height + "px";
              _this.ctx.scale(_this.options.scale, _this.options.scale);
              _this.ctx.translate(-options.x, -options.y);
              _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
              return _this;
            }
            ForeignObjectRenderer2.prototype.render = function(element) {
              return __awaiter(this, void 0, void 0, function() {
                var svg, img;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                      return [4, loadSerializedSVG(svg)];
                    case 1:
                      img = _a.sent();
                      if (this.options.backgroundColor) {
                        this.ctx.fillStyle = asString(this.options.backgroundColor);
                        this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                      }
                      this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                      return [2, this.canvas];
                  }
                });
              });
            };
            return ForeignObjectRenderer2;
          })(Renderer)
        );
        var loadSerializedSVG = function(svg) {
          return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
              resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
          });
        };
        var Logger = (
          /** @class */
          (function() {
            function Logger2(_a) {
              var id = _a.id, enabled = _a.enabled;
              this.id = id;
              this.enabled = enabled;
              this.start = Date.now();
            }
            Logger2.prototype.debug = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.debug === "function") {
                  console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                } else {
                  this.info.apply(this, args);
                }
              }
            };
            Logger2.prototype.getTime = function() {
              return Date.now() - this.start;
            };
            Logger2.prototype.info = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.info === "function") {
                  console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
              }
            };
            Logger2.prototype.warn = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.warn === "function") {
                  console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                } else {
                  this.info.apply(this, args);
                }
              }
            };
            Logger2.prototype.error = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.error === "function") {
                  console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                } else {
                  this.info.apply(this, args);
                }
              }
            };
            Logger2.instances = {};
            return Logger2;
          })()
        );
        var Context = (
          /** @class */
          (function() {
            function Context2(options, windowBounds) {
              var _a;
              this.windowBounds = windowBounds;
              this.instanceName = "#" + Context2.instanceCount++;
              this.logger = new Logger({ id: this.instanceName, enabled: options.logging });
              this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
            }
            Context2.instanceCount = 1;
            return Context2;
          })()
        );
        var html2canvas = function(element, options) {
          if (options === void 0) {
            options = {};
          }
          return renderElement(element, options);
        };
        if (typeof window !== "undefined") {
          CacheStorage.setContext(window);
        }
        var renderElement = function(element, opts) {
          return __awaiter(void 0, void 0, void 0, function() {
            var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor2, renderOptions, canvas, renderer, root, renderer;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            return __generator(this, function(_u) {
              switch (_u.label) {
                case 0:
                  if (!element || typeof element !== "object") {
                    return [2, Promise.reject("Invalid element provided as first argument")];
                  }
                  ownerDocument = element.ownerDocument;
                  if (!ownerDocument) {
                    throw new Error("Element is not attached to a Document");
                  }
                  defaultView = ownerDocument.defaultView;
                  if (!defaultView) {
                    throw new Error("Document is not attached to a Window");
                  }
                  resourceOptions = {
                    allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
                    imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15e3,
                    proxy: opts.proxy,
                    useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
                  };
                  contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
                  windowOptions = {
                    windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
                    windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
                    scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
                    scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
                  };
                  windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                  context = new Context(contextOptions, windowBounds);
                  foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
                  cloneOptions = {
                    allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
                    onclone: opts.onclone,
                    ignoreElements: opts.ignoreElements,
                    inlineImages: foreignObjectRendering,
                    copyStyles: foreignObjectRendering
                  };
                  context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
                  documentCloner = new DocumentCloner(context, element, cloneOptions);
                  clonedElement = documentCloner.clonedReferenceElement;
                  if (!clonedElement) {
                    return [2, Promise.reject("Unable to find element in cloned iframe")];
                  }
                  return [4, documentCloner.toIFrame(ownerDocument, windowBounds)];
                case 1:
                  container = _u.sent();
                  _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ? parseDocumentSize(clonedElement.ownerDocument) : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                  backgroundColor2 = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                  renderOptions = {
                    canvas: opts.canvas,
                    backgroundColor: backgroundColor2,
                    scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                    x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
                    y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
                    width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
                    height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
                  };
                  if (!foreignObjectRendering) return [3, 3];
                  context.logger.debug("Document cloned, using foreign object rendering");
                  renderer = new ForeignObjectRenderer(context, renderOptions);
                  return [4, renderer.render(clonedElement)];
                case 2:
                  canvas = _u.sent();
                  return [3, 5];
                case 3:
                  context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
                  context.logger.debug("Starting DOM parsing");
                  root = parseTree(context, clonedElement);
                  if (backgroundColor2 === root.styles.backgroundColor) {
                    root.styles.backgroundColor = COLORS.TRANSPARENT;
                  }
                  context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                  renderer = new CanvasRenderer(context, renderOptions);
                  return [4, renderer.render(root)];
                case 4:
                  canvas = _u.sent();
                  _u.label = 5;
                case 5:
                  if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                    if (!DocumentCloner.destroy(container)) {
                      context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
                    }
                  }
                  context.logger.debug("Finished rendering");
                  return [2, canvas];
              }
            });
          });
        };
        var parseBackgroundColor = function(context, element, backgroundColorOverride) {
          var ownerDocument = element.ownerDocument;
          var documentBackgroundColor = ownerDocument.documentElement ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
          var bodyBackgroundColor = ownerDocument.body ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
          var defaultBackgroundColor = typeof backgroundColorOverride === "string" ? parseColor(context, backgroundColorOverride) : backgroundColorOverride === null ? COLORS.TRANSPARENT : 4294967295;
          return element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
        };
        return html2canvas;
      }));
    }
  });

  // src/cdn.ts
  var cdn_exports = {};
  __export(cdn_exports, {
    FramvVideoElement: () => FramvVideoElement,
    Player: () => Player
  });

  // ../core/dist/audio.js
  var N_CH = 2;
  var MAX_FLOATS = 1024 * 1024;
  async function decodeAudio(el) {
    const cached = el._audioBuffer;
    if (cached !== void 0)
      return cached;
    if (!el.src) {
      el._audioBuffer = null;
      return null;
    }
    try {
      const resp = await fetch(el.src);
      const ab = await resp.arrayBuffer();
      const ctx = new AudioContext();
      const buf = await ctx.decodeAudioData(ab);
      await ctx.close();
      el._audioBuffer = buf;
      return buf;
    } catch {
      el._audioBuffer = null;
      return null;
    }
  }
  async function extractAudioPCM(el, duration, sampleRate) {
    const frameSamples = Math.floor(sampleRate * duration);
    const out = new Float32Array(N_CH * frameSamples);
    const buf = await decodeAudio(el);
    if (!buf)
      return out;
    const t = el.currentTime;
    if (t < 0 || t >= el.duration)
      return out;
    const startSample = Math.round(t * sampleRate);
    const frames = Math.min(frameSamples, buf.length - startSample);
    if (frames <= 0)
      return out;
    const tmp = new Float32Array(frames);
    const srcCh = Math.min(N_CH, buf.numberOfChannels);
    for (let ch = 0; ch < srcCh; ch++) {
      buf.copyFromChannel(tmp, ch, startSample);
      for (let j = 0; j < frames; j++)
        out[j * N_CH + ch] = tmp[j] * el.volume;
    }
    if (buf.numberOfChannels === 1) {
      for (let j = 0; j < frames; j++)
        out[j * N_CH + 1] = out[j * N_CH];
    }
    return out;
  }
  async function* mixAudioFrame(els, frameTime, duration, sampleRate) {
    const frameSamples = Math.floor(sampleRate * duration);
    const combined = new Float32Array(N_CH * frameSamples);
    for (const el of els) {
      const pcm = await extractAudioPCM(el, duration, sampleRate);
      for (let i = 0; i < pcm.length; i++)
        combined[i] += pcm[i];
    }
    const maxPerChunk = Math.floor(MAX_FLOATS / N_CH);
    let offset = 0;
    let remaining = frameSamples;
    while (remaining > 0) {
      const n = Math.min(maxPerChunk, remaining);
      yield {
        data: new Float32Array(combined.subarray(offset * N_CH, (offset + n) * N_CH)),
        timestamp: frameTime + offset / sampleRate,
        frames: n
      };
      offset += n;
      remaining -= n;
    }
  }
  function hasAudio(video) {
    const v = video;
    return v.mozHasAudio === true || Boolean(v.webkitAudioDecodedByteCount) || Boolean(v.audioTracks);
  }

  // ../../node_modules/mediabunny/dist/modules/src/misc.js
  function assert(x) {
    if (!x) {
      throw new Error("Assertion failed.");
    }
  }
  var normalizeRotation = (rotation) => {
    const mappedRotation = (rotation % 360 + 360) % 360;
    if (mappedRotation === 0 || mappedRotation === 90 || mappedRotation === 180 || mappedRotation === 270) {
      return mappedRotation;
    } else {
      throw new Error(`Invalid rotation ${rotation}.`);
    }
  };
  var last = (arr) => {
    return arr && arr[arr.length - 1];
  };
  var isU32 = (value) => {
    return value >= 0 && value < 2 ** 32;
  };
  var Bitstream = class _Bitstream {
    constructor(bytes2) {
      this.bytes = bytes2;
      this.pos = 0;
    }
    seekToByte(byteOffset) {
      this.pos = 8 * byteOffset;
    }
    readBit() {
      const byteIndex = Math.floor(this.pos / 8);
      const byte = this.bytes[byteIndex] ?? 0;
      const bitIndex = 7 - (this.pos & 7);
      const bit = (byte & 1 << bitIndex) >> bitIndex;
      this.pos++;
      return bit;
    }
    readBits(n) {
      if (n === 1) {
        return this.readBit();
      }
      let result = 0;
      for (let i = 0; i < n; i++) {
        result <<= 1;
        result |= this.readBit();
      }
      return result;
    }
    writeBits(n, value) {
      const end = this.pos + n;
      for (let i = this.pos; i < end; i++) {
        const byteIndex = Math.floor(i / 8);
        let byte = this.bytes[byteIndex];
        const bitIndex = 7 - (i & 7);
        byte &= ~(1 << bitIndex);
        byte |= (value & 1 << end - i - 1) >> end - i - 1 << bitIndex;
        this.bytes[byteIndex] = byte;
      }
      this.pos = end;
    }
    readAlignedByte() {
      if (this.pos % 8 !== 0) {
        throw new Error("Bitstream is not byte-aligned.");
      }
      const byteIndex = this.pos / 8;
      const byte = this.bytes[byteIndex] ?? 0;
      this.pos += 8;
      return byte;
    }
    skipBits(n) {
      this.pos += n;
    }
    getBitsLeft() {
      return this.bytes.length * 8 - this.pos;
    }
    clone() {
      const clone = new _Bitstream(this.bytes);
      clone.pos = this.pos;
      return clone;
    }
  };
  var readExpGolomb = (bitstream) => {
    let leadingZeroBits = 0;
    while (bitstream.readBits(1) === 0 && leadingZeroBits < 32) {
      leadingZeroBits++;
    }
    if (leadingZeroBits >= 32) {
      throw new Error("Invalid exponential-Golomb code.");
    }
    const result = (1 << leadingZeroBits) - 1 + bitstream.readBits(leadingZeroBits);
    return result;
  };
  var readSignedExpGolomb = (bitstream) => {
    const codeNum = readExpGolomb(bitstream);
    return (codeNum & 1) === 0 ? -(codeNum >> 1) : codeNum + 1 >> 1;
  };
  var writeBits = (bytes2, start, end, value) => {
    for (let i = start; i < end; i++) {
      const byteIndex = Math.floor(i / 8);
      let byte = bytes2[byteIndex];
      const bitIndex = 7 - (i & 7);
      byte &= ~(1 << bitIndex);
      byte |= (value & 1 << end - i - 1) >> end - i - 1 << bitIndex;
      bytes2[byteIndex] = byte;
    }
  };
  var toUint8Array = (source) => {
    if (source.constructor === Uint8Array) {
      return source;
    } else if (ArrayBuffer.isView(source)) {
      return new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else {
      return new Uint8Array(source);
    }
  };
  var toDataView = (source) => {
    if (source.constructor === DataView) {
      return source;
    } else if (ArrayBuffer.isView(source)) {
      return new DataView(source.buffer, source.byteOffset, source.byteLength);
    } else {
      return new DataView(source);
    }
  };
  var textEncoder = /* @__PURE__ */ new TextEncoder();
  var COLOR_PRIMARIES_MAP = {
    bt709: 1,
    // ITU-R BT.709
    bt470bg: 5,
    // ITU-R BT.470BG
    smpte170m: 6,
    // ITU-R BT.601 525 - SMPTE 170M
    bt2020: 9,
    // ITU-R BT.202
    smpte432: 12
    // SMPTE EG 432-1
  };
  var TRANSFER_CHARACTERISTICS_MAP = {
    "bt709": 1,
    // ITU-R BT.709
    "smpte170m": 6,
    // SMPTE 170M
    "linear": 8,
    // Linear transfer characteristics
    "iec61966-2-1": 13,
    // IEC 61966-2-1
    "pq": 16,
    // Rec. ITU-R BT.2100-2 perceptual quantization (PQ) system
    "hlg": 18
    // Rec. ITU-R BT.2100-2 hybrid loggamma (HLG) system
  };
  var MATRIX_COEFFICIENTS_MAP = {
    "rgb": 0,
    // Identity
    "bt709": 1,
    // ITU-R BT.709
    "bt470bg": 5,
    // ITU-R BT.470BG
    "smpte170m": 6,
    // SMPTE 170M
    "bt2020-ncl": 9
    // ITU-R BT.2020-2 (non-constant luminance)
  };
  var colorSpaceIsComplete = (colorSpace) => {
    return !!colorSpace && !!colorSpace.primaries && !!colorSpace.transfer && !!colorSpace.matrix && colorSpace.fullRange !== void 0;
  };
  var isAllowSharedBufferSource = (x) => {
    return x instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && x instanceof SharedArrayBuffer || ArrayBuffer.isView(x);
  };
  var AsyncMutex = class {
    constructor() {
      this.currentPromise = Promise.resolve();
      this.pending = 0;
    }
    async acquire() {
      let resolver;
      const nextPromise = new Promise((resolve) => {
        let resolved = false;
        resolver = () => {
          if (resolved) {
            return;
          }
          resolve();
          this.pending--;
          resolved = true;
        };
      });
      const currentPromiseAlias = this.currentPromise;
      this.currentPromise = nextPromise;
      this.pending++;
      await currentPromiseAlias;
      return resolver;
    }
  };
  var promiseWithResolvers = () => {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
  var assertNever = (x) => {
    throw new Error(`Unexpected value: ${x}`);
  };
  var setUint24 = (view2, byteOffset, value, littleEndian) => {
    value = value >>> 0;
    value = value & 16777215;
    if (littleEndian) {
      view2.setUint8(byteOffset, value & 255);
      view2.setUint8(byteOffset + 1, value >>> 8 & 255);
      view2.setUint8(byteOffset + 2, value >>> 16 & 255);
    } else {
      view2.setUint8(byteOffset, value >>> 16 & 255);
      view2.setUint8(byteOffset + 1, value >>> 8 & 255);
      view2.setUint8(byteOffset + 2, value & 255);
    }
  };
  var setInt24 = (view2, byteOffset, value, littleEndian) => {
    value = clamp(value, -8388608, 8388607);
    if (value < 0) {
      value = value + 16777216 & 16777215;
    }
    setUint24(view2, byteOffset, value, littleEndian);
  };
  var clamp = (value, min, max) => {
    return Math.max(min, Math.min(max, value));
  };
  var UNDETERMINED_LANGUAGE = "und";
  var roundToMultiple = (value, multiple) => {
    return Math.round(value / multiple) * multiple;
  };
  var ISO_639_2_REGEX = /^[a-z]{3}$/;
  var isIso639Dash2LanguageCode = (x) => {
    return ISO_639_2_REGEX.test(x);
  };
  var SECOND_TO_MICROSECOND_FACTOR = 1e6 * (1 + Number.EPSILON);
  var computeRationalApproximation = (x, maxDenominator) => {
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    let prevNumerator = 0, prevDenominator = 1;
    let currNumerator = 1, currDenominator = 0;
    let remainder = x;
    while (true) {
      const integer = Math.floor(remainder);
      const nextNumerator = integer * currNumerator + prevNumerator;
      const nextDenominator = integer * currDenominator + prevDenominator;
      if (nextDenominator > maxDenominator) {
        return {
          numerator: sign * currNumerator,
          denominator: currDenominator
        };
      }
      prevNumerator = currNumerator;
      prevDenominator = currDenominator;
      currNumerator = nextNumerator;
      currDenominator = nextDenominator;
      remainder = 1 / (remainder - integer);
      if (!isFinite(remainder)) {
        break;
      }
    }
    return {
      numerator: sign * currNumerator,
      denominator: currDenominator
    };
  };
  var CallSerializer = class {
    constructor() {
      this.currentPromise = Promise.resolve();
    }
    call(fn) {
      return this.currentPromise = this.currentPromise.then(fn);
    }
  };
  var isWebKitCache = null;
  var isWebKit = () => {
    if (isWebKitCache !== null) {
      return isWebKitCache;
    }
    return isWebKitCache = !!(typeof navigator !== "undefined" && (navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
  };
  var isFirefoxCache = null;
  var isFirefox = () => {
    if (isFirefoxCache !== null) {
      return isFirefoxCache;
    }
    return isFirefoxCache = typeof navigator !== "undefined" && navigator.userAgent?.includes("Firefox");
  };
  var keyValueIterator = function* (object) {
    for (const key in object) {
      const value = object[key];
      if (value === void 0) {
        continue;
      }
      yield { key, value };
    }
  };
  var imageMimeTypeToExtension = (mimeType) => {
    switch (mimeType.toLowerCase()) {
      case "image/jpeg":
      case "image/jpg":
        return ".jpg";
      case "image/png":
        return ".png";
      case "image/gif":
        return ".gif";
      case "image/webp":
        return ".webp";
      case "image/bmp":
        return ".bmp";
      case "image/svg+xml":
        return ".svg";
      case "image/tiff":
        return ".tiff";
      case "image/avif":
        return ".avif";
      case "image/x-icon":
      case "image/vnd.microsoft.icon":
        return ".ico";
      default:
        return null;
    }
  };
  var uint8ArraysAreEqual = (a, b) => {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  };
  var polyfillSymbolDispose = () => {
    Symbol.dispose ??= /* @__PURE__ */ Symbol("Symbol.dispose");
  };
  var simplifyRational = (rational) => {
    assert(rational.den !== 0);
    let a = Math.abs(rational.num);
    let b = Math.abs(rational.den);
    while (b !== 0) {
      const t = a % b;
      a = b;
      b = t;
    }
    const gcd = a || 1;
    return {
      num: rational.num / gcd,
      den: rational.den / gcd
    };
  };
  var validateRectangle = (rect, propertyPath) => {
    if (typeof rect !== "object" || !rect) {
      throw new TypeError(`${propertyPath} must be an object.`);
    }
    if (!Number.isInteger(rect.left) || rect.left < 0) {
      throw new TypeError(`${propertyPath}.left must be a non-negative integer.`);
    }
    if (!Number.isInteger(rect.top) || rect.top < 0) {
      throw new TypeError(`${propertyPath}.top must be a non-negative integer.`);
    }
    if (!Number.isInteger(rect.width) || rect.width < 0) {
      throw new TypeError(`${propertyPath}.width must be a non-negative integer.`);
    }
    if (!Number.isInteger(rect.height) || rect.height < 0) {
      throw new TypeError(`${propertyPath}.height must be a non-negative integer.`);
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/metadata.js
  var RichImageData = class {
    /** Creates a new {@link RichImageData}. */
    constructor(data, mimeType) {
      this.data = data;
      this.mimeType = mimeType;
      if (!(data instanceof Uint8Array)) {
        throw new TypeError("data must be a Uint8Array.");
      }
      if (typeof mimeType !== "string") {
        throw new TypeError("mimeType must be a string.");
      }
    }
  };
  var AttachedFile = class {
    /** Creates a new {@link AttachedFile}. */
    constructor(data, mimeType, name, description) {
      this.data = data;
      this.mimeType = mimeType;
      this.name = name;
      this.description = description;
      if (!(data instanceof Uint8Array)) {
        throw new TypeError("data must be a Uint8Array.");
      }
      if (mimeType !== void 0 && typeof mimeType !== "string") {
        throw new TypeError("mimeType, when provided, must be a string.");
      }
      if (name !== void 0 && typeof name !== "string") {
        throw new TypeError("name, when provided, must be a string.");
      }
      if (description !== void 0 && typeof description !== "string") {
        throw new TypeError("description, when provided, must be a string.");
      }
    }
  };
  var validateMetadataTags = (tags) => {
    if (!tags || typeof tags !== "object") {
      throw new TypeError("tags must be an object.");
    }
    if (tags.title !== void 0 && typeof tags.title !== "string") {
      throw new TypeError("tags.title, when provided, must be a string.");
    }
    if (tags.description !== void 0 && typeof tags.description !== "string") {
      throw new TypeError("tags.description, when provided, must be a string.");
    }
    if (tags.artist !== void 0 && typeof tags.artist !== "string") {
      throw new TypeError("tags.artist, when provided, must be a string.");
    }
    if (tags.album !== void 0 && typeof tags.album !== "string") {
      throw new TypeError("tags.album, when provided, must be a string.");
    }
    if (tags.albumArtist !== void 0 && typeof tags.albumArtist !== "string") {
      throw new TypeError("tags.albumArtist, when provided, must be a string.");
    }
    if (tags.trackNumber !== void 0 && (!Number.isInteger(tags.trackNumber) || tags.trackNumber <= 0)) {
      throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
    }
    if (tags.tracksTotal !== void 0 && (!Number.isInteger(tags.tracksTotal) || tags.tracksTotal <= 0)) {
      throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
    }
    if (tags.discNumber !== void 0 && (!Number.isInteger(tags.discNumber) || tags.discNumber <= 0)) {
      throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
    }
    if (tags.discsTotal !== void 0 && (!Number.isInteger(tags.discsTotal) || tags.discsTotal <= 0)) {
      throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
    }
    if (tags.genre !== void 0 && typeof tags.genre !== "string") {
      throw new TypeError("tags.genre, when provided, must be a string.");
    }
    if (tags.date !== void 0 && (!(tags.date instanceof Date) || Number.isNaN(tags.date.getTime()))) {
      throw new TypeError("tags.date, when provided, must be a valid Date.");
    }
    if (tags.lyrics !== void 0 && typeof tags.lyrics !== "string") {
      throw new TypeError("tags.lyrics, when provided, must be a string.");
    }
    if (tags.images !== void 0) {
      if (!Array.isArray(tags.images)) {
        throw new TypeError("tags.images, when provided, must be an array.");
      }
      for (const image of tags.images) {
        if (!image || typeof image !== "object") {
          throw new TypeError("Each image in tags.images must be an object.");
        }
        if (!(image.data instanceof Uint8Array)) {
          throw new TypeError("Each image.data must be a Uint8Array.");
        }
        if (typeof image.mimeType !== "string") {
          throw new TypeError("Each image.mimeType must be a string.");
        }
        if (!["coverFront", "coverBack", "unknown"].includes(image.kind)) {
          throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.");
        }
      }
    }
    if (tags.comment !== void 0 && typeof tags.comment !== "string") {
      throw new TypeError("tags.comment, when provided, must be a string.");
    }
    if (tags.raw !== void 0) {
      if (!tags.raw || typeof tags.raw !== "object") {
        throw new TypeError("tags.raw, when provided, must be an object.");
      }
      for (const value of Object.values(tags.raw)) {
        if (value !== null && typeof value !== "string" && !(value instanceof Uint8Array) && !(value instanceof RichImageData) && !(value instanceof AttachedFile)) {
          throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, or null.");
        }
      }
    }
  };
  var validateTrackDisposition = (disposition) => {
    if (!disposition || typeof disposition !== "object") {
      throw new TypeError("disposition must be an object.");
    }
    if (disposition.default !== void 0 && typeof disposition.default !== "boolean") {
      throw new TypeError("disposition.default must be a boolean.");
    }
    if (disposition.forced !== void 0 && typeof disposition.forced !== "boolean") {
      throw new TypeError("disposition.forced must be a boolean.");
    }
    if (disposition.original !== void 0 && typeof disposition.original !== "boolean") {
      throw new TypeError("disposition.original must be a boolean.");
    }
    if (disposition.commentary !== void 0 && typeof disposition.commentary !== "boolean") {
      throw new TypeError("disposition.commentary must be a boolean.");
    }
    if (disposition.hearingImpaired !== void 0 && typeof disposition.hearingImpaired !== "boolean") {
      throw new TypeError("disposition.hearingImpaired must be a boolean.");
    }
    if (disposition.visuallyImpaired !== void 0 && typeof disposition.visuallyImpaired !== "boolean") {
      throw new TypeError("disposition.visuallyImpaired must be a boolean.");
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/codec.js
  var VIDEO_CODECS = [
    "avc",
    "hevc",
    "vp9",
    "av1",
    "vp8"
  ];
  var PCM_AUDIO_CODECS = [
    "pcm-s16",
    // We don't prefix 'le' so we're compatible with the WebCodecs-registered PCM codec strings
    "pcm-s16be",
    "pcm-s24",
    "pcm-s24be",
    "pcm-s32",
    "pcm-s32be",
    "pcm-f32",
    "pcm-f32be",
    "pcm-f64",
    "pcm-f64be",
    "pcm-u8",
    "pcm-s8",
    "ulaw",
    "alaw"
  ];
  var NON_PCM_AUDIO_CODECS = [
    "aac",
    "opus",
    "mp3",
    "vorbis",
    "flac",
    "ac3",
    "eac3"
  ];
  var AUDIO_CODECS = [
    ...NON_PCM_AUDIO_CODECS,
    ...PCM_AUDIO_CODECS
  ];
  var SUBTITLE_CODECS = [
    "webvtt"
  ];
  var AVC_LEVEL_TABLE = [
    { maxMacroblocks: 99, maxBitrate: 64e3, maxDpbMbs: 396, level: 10 },
    // Level 1
    { maxMacroblocks: 396, maxBitrate: 192e3, maxDpbMbs: 900, level: 11 },
    // Level 1.1
    { maxMacroblocks: 396, maxBitrate: 384e3, maxDpbMbs: 2376, level: 12 },
    // Level 1.2
    { maxMacroblocks: 396, maxBitrate: 768e3, maxDpbMbs: 2376, level: 13 },
    // Level 1.3
    { maxMacroblocks: 396, maxBitrate: 2e6, maxDpbMbs: 2376, level: 20 },
    // Level 2
    { maxMacroblocks: 792, maxBitrate: 4e6, maxDpbMbs: 4752, level: 21 },
    // Level 2.1
    { maxMacroblocks: 1620, maxBitrate: 4e6, maxDpbMbs: 8100, level: 22 },
    // Level 2.2
    { maxMacroblocks: 1620, maxBitrate: 1e7, maxDpbMbs: 8100, level: 30 },
    // Level 3
    { maxMacroblocks: 3600, maxBitrate: 14e6, maxDpbMbs: 18e3, level: 31 },
    // Level 3.1
    { maxMacroblocks: 5120, maxBitrate: 2e7, maxDpbMbs: 20480, level: 32 },
    // Level 3.2
    { maxMacroblocks: 8192, maxBitrate: 2e7, maxDpbMbs: 32768, level: 40 },
    // Level 4
    { maxMacroblocks: 8192, maxBitrate: 5e7, maxDpbMbs: 32768, level: 41 },
    // Level 4.1
    { maxMacroblocks: 8704, maxBitrate: 5e7, maxDpbMbs: 34816, level: 42 },
    // Level 4.2
    { maxMacroblocks: 22080, maxBitrate: 135e6, maxDpbMbs: 110400, level: 50 },
    // Level 5
    { maxMacroblocks: 36864, maxBitrate: 24e7, maxDpbMbs: 184320, level: 51 },
    // Level 5.1
    { maxMacroblocks: 36864, maxBitrate: 24e7, maxDpbMbs: 184320, level: 52 },
    // Level 5.2
    { maxMacroblocks: 139264, maxBitrate: 24e7, maxDpbMbs: 696320, level: 60 },
    // Level 6
    { maxMacroblocks: 139264, maxBitrate: 48e7, maxDpbMbs: 696320, level: 61 },
    // Level 6.1
    { maxMacroblocks: 139264, maxBitrate: 8e8, maxDpbMbs: 696320, level: 62 }
    // Level 6.2
  ];
  var HEVC_LEVEL_TABLE = [
    { maxPictureSize: 36864, maxBitrate: 128e3, tier: "L", level: 30 },
    // Level 1 (Low Tier)
    { maxPictureSize: 122880, maxBitrate: 15e5, tier: "L", level: 60 },
    // Level 2 (Low Tier)
    { maxPictureSize: 245760, maxBitrate: 3e6, tier: "L", level: 63 },
    // Level 2.1 (Low Tier)
    { maxPictureSize: 552960, maxBitrate: 6e6, tier: "L", level: 90 },
    // Level 3 (Low Tier)
    { maxPictureSize: 983040, maxBitrate: 1e7, tier: "L", level: 93 },
    // Level 3.1 (Low Tier)
    { maxPictureSize: 2228224, maxBitrate: 12e6, tier: "L", level: 120 },
    // Level 4 (Low Tier)
    { maxPictureSize: 2228224, maxBitrate: 3e7, tier: "H", level: 120 },
    // Level 4 (High Tier)
    { maxPictureSize: 2228224, maxBitrate: 2e7, tier: "L", level: 123 },
    // Level 4.1 (Low Tier)
    { maxPictureSize: 2228224, maxBitrate: 5e7, tier: "H", level: 123 },
    // Level 4.1 (High Tier)
    { maxPictureSize: 8912896, maxBitrate: 25e6, tier: "L", level: 150 },
    // Level 5 (Low Tier)
    { maxPictureSize: 8912896, maxBitrate: 1e8, tier: "H", level: 150 },
    // Level 5 (High Tier)
    { maxPictureSize: 8912896, maxBitrate: 4e7, tier: "L", level: 153 },
    // Level 5.1 (Low Tier)
    { maxPictureSize: 8912896, maxBitrate: 16e7, tier: "H", level: 153 },
    // Level 5.1 (High Tier)
    { maxPictureSize: 8912896, maxBitrate: 6e7, tier: "L", level: 156 },
    // Level 5.2 (Low Tier)
    { maxPictureSize: 8912896, maxBitrate: 24e7, tier: "H", level: 156 },
    // Level 5.2 (High Tier)
    { maxPictureSize: 35651584, maxBitrate: 6e7, tier: "L", level: 180 },
    // Level 6 (Low Tier)
    { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "H", level: 180 },
    // Level 6 (High Tier)
    { maxPictureSize: 35651584, maxBitrate: 12e7, tier: "L", level: 183 },
    // Level 6.1 (Low Tier)
    { maxPictureSize: 35651584, maxBitrate: 48e7, tier: "H", level: 183 },
    // Level 6.1 (High Tier)
    { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "L", level: 186 },
    // Level 6.2 (Low Tier)
    { maxPictureSize: 35651584, maxBitrate: 8e8, tier: "H", level: 186 }
    // Level 6.2 (High Tier)
  ];
  var VP9_LEVEL_TABLE = [
    { maxPictureSize: 36864, maxBitrate: 2e5, level: 10 },
    // Level 1
    { maxPictureSize: 73728, maxBitrate: 8e5, level: 11 },
    // Level 1.1
    { maxPictureSize: 122880, maxBitrate: 18e5, level: 20 },
    // Level 2
    { maxPictureSize: 245760, maxBitrate: 36e5, level: 21 },
    // Level 2.1
    { maxPictureSize: 552960, maxBitrate: 72e5, level: 30 },
    // Level 3
    { maxPictureSize: 983040, maxBitrate: 12e6, level: 31 },
    // Level 3.1
    { maxPictureSize: 2228224, maxBitrate: 18e6, level: 40 },
    // Level 4
    { maxPictureSize: 2228224, maxBitrate: 3e7, level: 41 },
    // Level 4.1
    { maxPictureSize: 8912896, maxBitrate: 6e7, level: 50 },
    // Level 5
    { maxPictureSize: 8912896, maxBitrate: 12e7, level: 51 },
    // Level 5.1
    { maxPictureSize: 8912896, maxBitrate: 18e7, level: 52 },
    // Level 5.2
    { maxPictureSize: 35651584, maxBitrate: 18e7, level: 60 },
    // Level 6
    { maxPictureSize: 35651584, maxBitrate: 24e7, level: 61 },
    // Level 6.1
    { maxPictureSize: 35651584, maxBitrate: 48e7, level: 62 }
    // Level 6.2
  ];
  var AV1_LEVEL_TABLE = [
    { maxPictureSize: 147456, maxBitrate: 15e5, tier: "M", level: 0 },
    // Level 2.0 (Main Tier)
    { maxPictureSize: 278784, maxBitrate: 3e6, tier: "M", level: 1 },
    // Level 2.1 (Main Tier)
    { maxPictureSize: 665856, maxBitrate: 6e6, tier: "M", level: 4 },
    // Level 3.0 (Main Tier)
    { maxPictureSize: 1065024, maxBitrate: 1e7, tier: "M", level: 5 },
    // Level 3.1 (Main Tier)
    { maxPictureSize: 2359296, maxBitrate: 12e6, tier: "M", level: 8 },
    // Level 4.0 (Main Tier)
    { maxPictureSize: 2359296, maxBitrate: 3e7, tier: "H", level: 8 },
    // Level 4.0 (High Tier)
    { maxPictureSize: 2359296, maxBitrate: 2e7, tier: "M", level: 9 },
    // Level 4.1 (Main Tier)
    { maxPictureSize: 2359296, maxBitrate: 5e7, tier: "H", level: 9 },
    // Level 4.1 (High Tier)
    { maxPictureSize: 8912896, maxBitrate: 3e7, tier: "M", level: 12 },
    // Level 5.0 (Main Tier)
    { maxPictureSize: 8912896, maxBitrate: 1e8, tier: "H", level: 12 },
    // Level 5.0 (High Tier)
    { maxPictureSize: 8912896, maxBitrate: 4e7, tier: "M", level: 13 },
    // Level 5.1 (Main Tier)
    { maxPictureSize: 8912896, maxBitrate: 16e7, tier: "H", level: 13 },
    // Level 5.1 (High Tier)
    { maxPictureSize: 8912896, maxBitrate: 6e7, tier: "M", level: 14 },
    // Level 5.2 (Main Tier)
    { maxPictureSize: 8912896, maxBitrate: 24e7, tier: "H", level: 14 },
    // Level 5.2 (High Tier)
    { maxPictureSize: 35651584, maxBitrate: 6e7, tier: "M", level: 15 },
    // Level 5.3 (Main Tier)
    { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "H", level: 15 },
    // Level 5.3 (High Tier)
    { maxPictureSize: 35651584, maxBitrate: 6e7, tier: "M", level: 16 },
    // Level 6.0 (Main Tier)
    { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "H", level: 16 },
    // Level 6.0 (High Tier)
    { maxPictureSize: 35651584, maxBitrate: 1e8, tier: "M", level: 17 },
    // Level 6.1 (Main Tier)
    { maxPictureSize: 35651584, maxBitrate: 48e7, tier: "H", level: 17 },
    // Level 6.1 (High Tier)
    { maxPictureSize: 35651584, maxBitrate: 16e7, tier: "M", level: 18 },
    // Level 6.2 (Main Tier)
    { maxPictureSize: 35651584, maxBitrate: 8e8, tier: "H", level: 18 },
    // Level 6.2 (High Tier)
    { maxPictureSize: 35651584, maxBitrate: 16e7, tier: "M", level: 19 },
    // Level 6.3 (Main Tier)
    { maxPictureSize: 35651584, maxBitrate: 8e8, tier: "H", level: 19 }
    // Level 6.3 (High Tier)
  ];
  var buildVideoCodecString = (codec, width, height, bitrate) => {
    if (codec === "avc") {
      const profileIndication = 100;
      const totalMacroblocks = Math.ceil(width / 16) * Math.ceil(height / 16);
      const levelInfo = AVC_LEVEL_TABLE.find((level) => totalMacroblocks <= level.maxMacroblocks && bitrate <= level.maxBitrate) ?? last(AVC_LEVEL_TABLE);
      const levelIndication = levelInfo ? levelInfo.level : 0;
      const hexProfileIndication = profileIndication.toString(16).padStart(2, "0");
      const hexProfileCompatibility = "00";
      const hexLevelIndication = levelIndication.toString(16).padStart(2, "0");
      return `avc1.${hexProfileIndication}${hexProfileCompatibility}${hexLevelIndication}`;
    } else if (codec === "hevc") {
      const profilePrefix = "";
      const profileIdc = 1;
      const compatibilityFlags = "6";
      const pictureSize = width * height;
      const levelInfo = HEVC_LEVEL_TABLE.find((level) => pictureSize <= level.maxPictureSize && bitrate <= level.maxBitrate) ?? last(HEVC_LEVEL_TABLE);
      const constraintFlags = "B0";
      return `hev1.${profilePrefix}${profileIdc}.${compatibilityFlags}.${levelInfo.tier}${levelInfo.level}.${constraintFlags}`;
    } else if (codec === "vp8") {
      return "vp8";
    } else if (codec === "vp9") {
      const profile = "00";
      const pictureSize = width * height;
      const levelInfo = VP9_LEVEL_TABLE.find((level) => pictureSize <= level.maxPictureSize && bitrate <= level.maxBitrate) ?? last(VP9_LEVEL_TABLE);
      const bitDepth = "08";
      return `vp09.${profile}.${levelInfo.level.toString().padStart(2, "0")}.${bitDepth}`;
    } else if (codec === "av1") {
      const profile = 0;
      const pictureSize = width * height;
      const levelInfo = AV1_LEVEL_TABLE.find((level2) => pictureSize <= level2.maxPictureSize && bitrate <= level2.maxBitrate) ?? last(AV1_LEVEL_TABLE);
      const level = levelInfo.level.toString().padStart(2, "0");
      const bitDepth = "08";
      return `av01.${profile}.${level}${levelInfo.tier}.${bitDepth}`;
    }
    throw new TypeError(`Unhandled codec '${codec}'.`);
  };
  var generateVp9CodecConfigurationFromCodecString = (codecString) => {
    const parts = codecString.split(".");
    const profile = Number(parts[1]);
    const level = Number(parts[2]);
    const bitDepth = Number(parts[3]);
    const chromaSubsampling = parts[4] ? Number(parts[4]) : 1;
    return [
      1,
      1,
      profile,
      2,
      1,
      level,
      3,
      1,
      bitDepth,
      4,
      1,
      chromaSubsampling
    ];
  };
  var generateAv1CodecConfigurationFromCodecString = (codecString) => {
    const parts = codecString.split(".");
    const marker = 1;
    const version = 1;
    const firstByte = (marker << 7) + version;
    const profile = Number(parts[1]);
    const levelAndTier = parts[2];
    const level = Number(levelAndTier.slice(0, -1));
    const secondByte = (profile << 5) + level;
    const tier = levelAndTier.slice(-1) === "H" ? 1 : 0;
    const bitDepth = Number(parts[3]);
    const highBitDepth = bitDepth === 8 ? 0 : 1;
    const twelveBit = 0;
    const monochrome = parts[4] ? Number(parts[4]) : 0;
    const chromaSubsamplingX = parts[5] ? Number(parts[5][0]) : 1;
    const chromaSubsamplingY = parts[5] ? Number(parts[5][1]) : 1;
    const chromaSamplePosition = parts[5] ? Number(parts[5][2]) : 0;
    const thirdByte = (tier << 7) + (highBitDepth << 6) + (twelveBit << 5) + (monochrome << 4) + (chromaSubsamplingX << 3) + (chromaSubsamplingY << 2) + chromaSamplePosition;
    const initialPresentationDelayPresent = 0;
    const fourthByte = initialPresentationDelayPresent;
    return [firstByte, secondByte, thirdByte, fourthByte];
  };
  var buildAudioCodecString = (codec, numberOfChannels, sampleRate) => {
    if (codec === "aac") {
      if (numberOfChannels >= 2 && sampleRate <= 24e3) {
        return "mp4a.40.29";
      }
      if (sampleRate <= 24e3) {
        return "mp4a.40.5";
      }
      return "mp4a.40.2";
    } else if (codec === "mp3") {
      return "mp3";
    } else if (codec === "opus") {
      return "opus";
    } else if (codec === "vorbis") {
      return "vorbis";
    } else if (codec === "flac") {
      return "flac";
    } else if (codec === "ac3") {
      return "ac-3";
    } else if (codec === "eac3") {
      return "ec-3";
    } else if (PCM_AUDIO_CODECS.includes(codec)) {
      return codec;
    }
    throw new TypeError(`Unhandled codec '${codec}'.`);
  };
  var aacFrequencyTable = [
    96e3,
    88200,
    64e3,
    48e3,
    44100,
    32e3,
    24e3,
    22050,
    16e3,
    12e3,
    11025,
    8e3,
    7350
  ];
  var aacChannelMap = [-1, 1, 2, 3, 4, 5, 6, 8];
  var parseAacAudioSpecificConfig = (bytes2) => {
    if (!bytes2 || bytes2.byteLength < 2) {
      throw new TypeError("AAC description must be at least 2 bytes long.");
    }
    const bitstream = new Bitstream(bytes2);
    let objectType = bitstream.readBits(5);
    if (objectType === 31) {
      objectType = 32 + bitstream.readBits(6);
    }
    const frequencyIndex = bitstream.readBits(4);
    let sampleRate = null;
    if (frequencyIndex === 15) {
      sampleRate = bitstream.readBits(24);
    } else {
      if (frequencyIndex < aacFrequencyTable.length) {
        sampleRate = aacFrequencyTable[frequencyIndex];
      }
    }
    const channelConfiguration = bitstream.readBits(4);
    let numberOfChannels = null;
    if (channelConfiguration >= 1 && channelConfiguration <= 7) {
      numberOfChannels = aacChannelMap[channelConfiguration];
    }
    return {
      objectType,
      frequencyIndex,
      sampleRate,
      channelConfiguration,
      numberOfChannels
    };
  };
  var buildAacAudioSpecificConfig = (config) => {
    let frequencyIndex = aacFrequencyTable.indexOf(config.sampleRate);
    let customSampleRate = null;
    if (frequencyIndex === -1) {
      frequencyIndex = 15;
      customSampleRate = config.sampleRate;
    }
    const channelConfiguration = aacChannelMap.indexOf(config.numberOfChannels);
    if (channelConfiguration === -1) {
      throw new TypeError(`Unsupported number of channels: ${config.numberOfChannels}`);
    }
    let bitCount = 5 + 4 + 4;
    if (config.objectType >= 32) {
      bitCount += 6;
    }
    if (frequencyIndex === 15) {
      bitCount += 24;
    }
    const byteCount = Math.ceil(bitCount / 8);
    const bytes2 = new Uint8Array(byteCount);
    const bitstream = new Bitstream(bytes2);
    if (config.objectType < 32) {
      bitstream.writeBits(5, config.objectType);
    } else {
      bitstream.writeBits(5, 31);
      bitstream.writeBits(6, config.objectType - 32);
    }
    bitstream.writeBits(4, frequencyIndex);
    if (frequencyIndex === 15) {
      bitstream.writeBits(24, customSampleRate);
    }
    bitstream.writeBits(4, channelConfiguration);
    return bytes2;
  };
  var OPUS_SAMPLE_RATE = 48e3;
  var PCM_CODEC_REGEX = /^pcm-([usf])(\d+)+(be)?$/;
  var parsePcmCodec = (codec) => {
    assert(PCM_AUDIO_CODECS.includes(codec));
    if (codec === "ulaw") {
      return { dataType: "ulaw", sampleSize: 1, littleEndian: true, silentValue: 255 };
    } else if (codec === "alaw") {
      return { dataType: "alaw", sampleSize: 1, littleEndian: true, silentValue: 213 };
    }
    const match = PCM_CODEC_REGEX.exec(codec);
    assert(match);
    let dataType;
    if (match[1] === "u") {
      dataType = "unsigned";
    } else if (match[1] === "s") {
      dataType = "signed";
    } else {
      dataType = "float";
    }
    const sampleSize = Number(match[2]) / 8;
    const littleEndian = match[3] !== "be";
    const silentValue = codec === "pcm-u8" ? 2 ** 7 : 0;
    return { dataType, sampleSize, littleEndian, silentValue };
  };
  var inferCodecFromCodecString = (codecString) => {
    if (codecString.startsWith("avc1") || codecString.startsWith("avc3")) {
      return "avc";
    } else if (codecString.startsWith("hev1") || codecString.startsWith("hvc1")) {
      return "hevc";
    } else if (codecString === "vp8") {
      return "vp8";
    } else if (codecString.startsWith("vp09")) {
      return "vp9";
    } else if (codecString.startsWith("av01")) {
      return "av1";
    }
    if (codecString.startsWith("mp4a.40") || codecString === "mp4a.67") {
      return "aac";
    } else if (codecString === "mp3" || codecString === "mp4a.69" || codecString === "mp4a.6B" || codecString === "mp4a.6b") {
      return "mp3";
    } else if (codecString === "opus") {
      return "opus";
    } else if (codecString === "vorbis") {
      return "vorbis";
    } else if (codecString === "flac") {
      return "flac";
    } else if (codecString === "ac-3" || codecString === "ac3") {
      return "ac3";
    } else if (codecString === "ec-3" || codecString === "eac3") {
      return "eac3";
    } else if (codecString === "ulaw") {
      return "ulaw";
    } else if (codecString === "alaw") {
      return "alaw";
    } else if (PCM_CODEC_REGEX.test(codecString)) {
      return codecString;
    }
    if (codecString === "webvtt") {
      return "webvtt";
    }
    return null;
  };
  var getVideoEncoderConfigExtension = (codec) => {
    if (codec === "avc") {
      return {
        avc: {
          format: "avc"
          // Ensure the format is not Annex B
        }
      };
    } else if (codec === "hevc") {
      return {
        hevc: {
          format: "hevc"
          // Ensure the format is not Annex B
        }
      };
    }
    return {};
  };
  var getAudioEncoderConfigExtension = (codec) => {
    if (codec === "aac") {
      return {
        aac: {
          format: "aac"
          // Ensure the format is not ADTS
        }
      };
    } else if (codec === "opus") {
      return {
        opus: {
          format: "opus"
        }
      };
    }
    return {};
  };
  var VALID_VIDEO_CODEC_STRING_PREFIXES = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01"];
  var AVC_CODEC_STRING_REGEX = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/;
  var HEVC_CODEC_STRING_REGEX = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/;
  var VP9_CODEC_STRING_REGEX = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/;
  var AV1_CODEC_STRING_REGEX = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/;
  var validateVideoChunkMetadata = (metadata) => {
    if (!metadata) {
      throw new TypeError("Video chunk metadata must be provided.");
    }
    if (typeof metadata !== "object") {
      throw new TypeError("Video chunk metadata must be an object.");
    }
    if (!metadata.decoderConfig) {
      throw new TypeError("Video chunk metadata must include a decoder configuration.");
    }
    if (typeof metadata.decoderConfig !== "object") {
      throw new TypeError("Video chunk metadata decoder configuration must be an object.");
    }
    if (typeof metadata.decoderConfig.codec !== "string") {
      throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
    }
    if (!VALID_VIDEO_CODEC_STRING_PREFIXES.some((prefix) => metadata.decoderConfig.codec.startsWith(prefix))) {
      throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
    }
    if (!Number.isInteger(metadata.decoderConfig.codedWidth) || metadata.decoderConfig.codedWidth <= 0) {
      throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
    }
    if (!Number.isInteger(metadata.decoderConfig.codedHeight) || metadata.decoderConfig.codedHeight <= 0) {
      throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
    }
    if (metadata.decoderConfig.description !== void 0) {
      if (!isAllowSharedBufferSource(metadata.decoderConfig.description)) {
        throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
      }
    }
    if (metadata.decoderConfig.colorSpace !== void 0) {
      const { colorSpace } = metadata.decoderConfig;
      if (typeof colorSpace !== "object") {
        throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
      }
      const primariesValues = Object.keys(COLOR_PRIMARIES_MAP);
      if (colorSpace.primaries != null && !primariesValues.includes(colorSpace.primaries)) {
        throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${primariesValues.join(", ")}.`);
      }
      const transferValues = Object.keys(TRANSFER_CHARACTERISTICS_MAP);
      if (colorSpace.transfer != null && !transferValues.includes(colorSpace.transfer)) {
        throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${transferValues.join(", ")}.`);
      }
      const matrixValues = Object.keys(MATRIX_COEFFICIENTS_MAP);
      if (colorSpace.matrix != null && !matrixValues.includes(colorSpace.matrix)) {
        throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${matrixValues.join(", ")}.`);
      }
      if (colorSpace.fullRange != null && typeof colorSpace.fullRange !== "boolean") {
        throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.");
      }
    }
    if (metadata.decoderConfig.codec.startsWith("avc1") || metadata.decoderConfig.codec.startsWith("avc3")) {
      if (!AVC_CODEC_STRING_REGEX.test(metadata.decoderConfig.codec)) {
        throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.");
      }
    } else if (metadata.decoderConfig.codec.startsWith("hev1") || metadata.decoderConfig.codec.startsWith("hvc1")) {
      if (!HEVC_CODEC_STRING_REGEX.test(metadata.decoderConfig.codec)) {
        throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.");
      }
    } else if (metadata.decoderConfig.codec.startsWith("vp8")) {
      if (metadata.decoderConfig.codec !== "vp8") {
        throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".');
      }
    } else if (metadata.decoderConfig.codec.startsWith("vp09")) {
      if (!VP9_CODEC_STRING_REGEX.test(metadata.decoderConfig.codec)) {
        throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.');
      }
    } else if (metadata.decoderConfig.codec.startsWith("av01")) {
      if (!AV1_CODEC_STRING_REGEX.test(metadata.decoderConfig.codec)) {
        throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.');
      }
    }
  };
  var VALID_AUDIO_CODEC_STRING_PREFIXES = [
    "mp4a",
    "mp3",
    "opus",
    "vorbis",
    "flac",
    "ulaw",
    "alaw",
    "pcm",
    "ac-3",
    "ec-3"
  ];
  var validateAudioChunkMetadata = (metadata) => {
    if (!metadata) {
      throw new TypeError("Audio chunk metadata must be provided.");
    }
    if (typeof metadata !== "object") {
      throw new TypeError("Audio chunk metadata must be an object.");
    }
    if (!metadata.decoderConfig) {
      throw new TypeError("Audio chunk metadata must include a decoder configuration.");
    }
    if (typeof metadata.decoderConfig !== "object") {
      throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
    }
    if (typeof metadata.decoderConfig.codec !== "string") {
      throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
    }
    if (!VALID_AUDIO_CODEC_STRING_PREFIXES.some((prefix) => metadata.decoderConfig.codec.startsWith(prefix))) {
      throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
    }
    if (!Number.isInteger(metadata.decoderConfig.sampleRate) || metadata.decoderConfig.sampleRate <= 0) {
      throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
    }
    if (!Number.isInteger(metadata.decoderConfig.numberOfChannels) || metadata.decoderConfig.numberOfChannels <= 0) {
      throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
    }
    if (metadata.decoderConfig.description !== void 0) {
      if (!isAllowSharedBufferSource(metadata.decoderConfig.description)) {
        throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
      }
    }
    if (metadata.decoderConfig.codec.startsWith("mp4a") && metadata.decoderConfig.codec !== "mp4a.69" && metadata.decoderConfig.codec !== "mp4a.6B" && metadata.decoderConfig.codec !== "mp4a.6b") {
      const validStrings = ["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"];
      if (!validStrings.includes(metadata.decoderConfig.codec)) {
        throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.");
      }
    } else if (metadata.decoderConfig.codec.startsWith("mp3") || metadata.decoderConfig.codec.startsWith("mp4a")) {
      if (metadata.decoderConfig.codec !== "mp3" && metadata.decoderConfig.codec !== "mp4a.69" && metadata.decoderConfig.codec !== "mp4a.6B" && metadata.decoderConfig.codec !== "mp4a.6b") {
        throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".');
      }
    } else if (metadata.decoderConfig.codec.startsWith("opus")) {
      if (metadata.decoderConfig.codec !== "opus") {
        throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
      }
      if (metadata.decoderConfig.description && metadata.decoderConfig.description.byteLength < 18) {
        throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.");
      }
    } else if (metadata.decoderConfig.codec.startsWith("vorbis")) {
      if (metadata.decoderConfig.codec !== "vorbis") {
        throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
      }
      if (!metadata.decoderConfig.description) {
        throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.");
      }
    } else if (metadata.decoderConfig.codec.startsWith("flac")) {
      if (metadata.decoderConfig.codec !== "flac") {
        throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
      }
      const minDescriptionSize = 4 + 4 + 34;
      if (!metadata.decoderConfig.description || metadata.decoderConfig.description.byteLength < minDescriptionSize) {
        throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.");
      }
    } else if (metadata.decoderConfig.codec.startsWith("ac-3") || metadata.decoderConfig.codec.startsWith("ac3")) {
      if (metadata.decoderConfig.codec !== "ac-3") {
        throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".');
      }
    } else if (metadata.decoderConfig.codec.startsWith("ec-3") || metadata.decoderConfig.codec.startsWith("eac3")) {
      if (metadata.decoderConfig.codec !== "ec-3") {
        throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".');
      }
    } else if (metadata.decoderConfig.codec.startsWith("pcm") || metadata.decoderConfig.codec.startsWith("ulaw") || metadata.decoderConfig.codec.startsWith("alaw")) {
      if (!PCM_AUDIO_CODECS.includes(metadata.decoderConfig.codec)) {
        throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${PCM_AUDIO_CODECS.join(", ")}).`);
      }
    }
  };
  var validateSubtitleMetadata = (metadata) => {
    if (!metadata) {
      throw new TypeError("Subtitle metadata must be provided.");
    }
    if (typeof metadata !== "object") {
      throw new TypeError("Subtitle metadata must be an object.");
    }
    if (!metadata.config) {
      throw new TypeError("Subtitle metadata must include a config object.");
    }
    if (typeof metadata.config !== "object") {
      throw new TypeError("Subtitle metadata config must be an object.");
    }
    if (typeof metadata.config.description !== "string") {
      throw new TypeError("Subtitle metadata config description must be a string.");
    }
  };

  // ../../node_modules/mediabunny/dist/modules/shared/ac3-misc.js
  var AC3_SAMPLE_RATES = [48e3, 44100, 32e3];
  var EAC3_REDUCED_SAMPLE_RATES = [24e3, 22050, 16e3];

  // ../../node_modules/mediabunny/dist/modules/src/codec-data.js
  var AvcNalUnitType;
  (function(AvcNalUnitType2) {
    AvcNalUnitType2[AvcNalUnitType2["NON_IDR_SLICE"] = 1] = "NON_IDR_SLICE";
    AvcNalUnitType2[AvcNalUnitType2["SLICE_DPA"] = 2] = "SLICE_DPA";
    AvcNalUnitType2[AvcNalUnitType2["SLICE_DPB"] = 3] = "SLICE_DPB";
    AvcNalUnitType2[AvcNalUnitType2["SLICE_DPC"] = 4] = "SLICE_DPC";
    AvcNalUnitType2[AvcNalUnitType2["IDR"] = 5] = "IDR";
    AvcNalUnitType2[AvcNalUnitType2["SEI"] = 6] = "SEI";
    AvcNalUnitType2[AvcNalUnitType2["SPS"] = 7] = "SPS";
    AvcNalUnitType2[AvcNalUnitType2["PPS"] = 8] = "PPS";
    AvcNalUnitType2[AvcNalUnitType2["AUD"] = 9] = "AUD";
    AvcNalUnitType2[AvcNalUnitType2["SPS_EXT"] = 13] = "SPS_EXT";
  })(AvcNalUnitType || (AvcNalUnitType = {}));
  var HevcNalUnitType;
  (function(HevcNalUnitType2) {
    HevcNalUnitType2[HevcNalUnitType2["RASL_N"] = 8] = "RASL_N";
    HevcNalUnitType2[HevcNalUnitType2["RASL_R"] = 9] = "RASL_R";
    HevcNalUnitType2[HevcNalUnitType2["BLA_W_LP"] = 16] = "BLA_W_LP";
    HevcNalUnitType2[HevcNalUnitType2["RSV_IRAP_VCL23"] = 23] = "RSV_IRAP_VCL23";
    HevcNalUnitType2[HevcNalUnitType2["VPS_NUT"] = 32] = "VPS_NUT";
    HevcNalUnitType2[HevcNalUnitType2["SPS_NUT"] = 33] = "SPS_NUT";
    HevcNalUnitType2[HevcNalUnitType2["PPS_NUT"] = 34] = "PPS_NUT";
    HevcNalUnitType2[HevcNalUnitType2["AUD_NUT"] = 35] = "AUD_NUT";
    HevcNalUnitType2[HevcNalUnitType2["PREFIX_SEI_NUT"] = 39] = "PREFIX_SEI_NUT";
    HevcNalUnitType2[HevcNalUnitType2["SUFFIX_SEI_NUT"] = 40] = "SUFFIX_SEI_NUT";
  })(HevcNalUnitType || (HevcNalUnitType = {}));
  var iterateNalUnitsInAnnexB = function* (packetData) {
    let i = 0;
    let nalStart = -1;
    while (i < packetData.length - 2) {
      const zeroIndex = packetData.indexOf(0, i);
      if (zeroIndex === -1 || zeroIndex >= packetData.length - 2) {
        break;
      }
      i = zeroIndex;
      let startCodeLength = 0;
      if (i + 3 < packetData.length && packetData[i + 1] === 0 && packetData[i + 2] === 0 && packetData[i + 3] === 1) {
        startCodeLength = 4;
      } else if (packetData[i + 1] === 0 && packetData[i + 2] === 1) {
        startCodeLength = 3;
      }
      if (startCodeLength === 0) {
        i++;
        continue;
      }
      if (nalStart !== -1 && i > nalStart) {
        yield {
          offset: nalStart,
          length: i - nalStart
        };
      }
      nalStart = i + startCodeLength;
      i = nalStart;
    }
    if (nalStart !== -1 && nalStart < packetData.length) {
      yield {
        offset: nalStart,
        length: packetData.length - nalStart
      };
    }
  };
  var extractNalUnitTypeForAvc = (byte) => {
    return byte & 31;
  };
  var removeEmulationPreventionBytes = (data) => {
    const result = [];
    const len = data.length;
    for (let i = 0; i < len; i++) {
      if (i + 2 < len && data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 3) {
        result.push(0, 0);
        i += 2;
      } else {
        result.push(data[i]);
      }
    }
    return new Uint8Array(result);
  };
  var ANNEX_B_START_CODE = new Uint8Array([0, 0, 0, 1]);
  var concatNalUnitsInLengthPrefixed = (nalUnits, lengthSize) => {
    const totalLength = nalUnits.reduce((a, b) => a + lengthSize + b.byteLength, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const nalUnit of nalUnits) {
      const dataView = new DataView(result.buffer, result.byteOffset, result.byteLength);
      switch (lengthSize) {
        case 1:
          dataView.setUint8(offset, nalUnit.byteLength);
          break;
        case 2:
          dataView.setUint16(offset, nalUnit.byteLength, false);
          break;
        case 3:
          setUint24(dataView, offset, nalUnit.byteLength, false);
          break;
        case 4:
          dataView.setUint32(offset, nalUnit.byteLength, false);
          break;
      }
      offset += lengthSize;
      result.set(nalUnit, offset);
      offset += nalUnit.byteLength;
    }
    return result;
  };
  var extractAvcDecoderConfigurationRecord = (packetData) => {
    try {
      const spsUnits = [];
      const ppsUnits = [];
      const spsExtUnits = [];
      for (const loc of iterateNalUnitsInAnnexB(packetData)) {
        const nalUnit = packetData.subarray(loc.offset, loc.offset + loc.length);
        const type = extractNalUnitTypeForAvc(nalUnit[0]);
        if (type === AvcNalUnitType.SPS) {
          spsUnits.push(nalUnit);
        } else if (type === AvcNalUnitType.PPS) {
          ppsUnits.push(nalUnit);
        } else if (type === AvcNalUnitType.SPS_EXT) {
          spsExtUnits.push(nalUnit);
        }
      }
      if (spsUnits.length === 0) {
        return null;
      }
      if (ppsUnits.length === 0) {
        return null;
      }
      const spsData = spsUnits[0];
      const spsInfo = parseAvcSps(spsData);
      assert(spsInfo !== null);
      const hasExtendedData = spsInfo.profileIdc === 100 || spsInfo.profileIdc === 110 || spsInfo.profileIdc === 122 || spsInfo.profileIdc === 144;
      return {
        configurationVersion: 1,
        avcProfileIndication: spsInfo.profileIdc,
        profileCompatibility: spsInfo.constraintFlags,
        avcLevelIndication: spsInfo.levelIdc,
        lengthSizeMinusOne: 3,
        // Typically 4 bytes for length field
        sequenceParameterSets: spsUnits,
        pictureParameterSets: ppsUnits,
        chromaFormat: hasExtendedData ? spsInfo.chromaFormatIdc : null,
        bitDepthLumaMinus8: hasExtendedData ? spsInfo.bitDepthLumaMinus8 : null,
        bitDepthChromaMinus8: hasExtendedData ? spsInfo.bitDepthChromaMinus8 : null,
        sequenceParameterSetExt: hasExtendedData ? spsExtUnits : null
      };
    } catch (error) {
      console.error("Error building AVC Decoder Configuration Record:", error);
      return null;
    }
  };
  var serializeAvcDecoderConfigurationRecord = (record) => {
    const bytes2 = [];
    bytes2.push(record.configurationVersion);
    bytes2.push(record.avcProfileIndication);
    bytes2.push(record.profileCompatibility);
    bytes2.push(record.avcLevelIndication);
    bytes2.push(252 | record.lengthSizeMinusOne & 3);
    bytes2.push(224 | record.sequenceParameterSets.length & 31);
    for (const sps of record.sequenceParameterSets) {
      const length = sps.byteLength;
      bytes2.push(length >> 8);
      bytes2.push(length & 255);
      for (let i = 0; i < length; i++) {
        bytes2.push(sps[i]);
      }
    }
    bytes2.push(record.pictureParameterSets.length);
    for (const pps of record.pictureParameterSets) {
      const length = pps.byteLength;
      bytes2.push(length >> 8);
      bytes2.push(length & 255);
      for (let i = 0; i < length; i++) {
        bytes2.push(pps[i]);
      }
    }
    if (record.avcProfileIndication === 100 || record.avcProfileIndication === 110 || record.avcProfileIndication === 122 || record.avcProfileIndication === 144) {
      assert(record.chromaFormat !== null);
      assert(record.bitDepthLumaMinus8 !== null);
      assert(record.bitDepthChromaMinus8 !== null);
      assert(record.sequenceParameterSetExt !== null);
      bytes2.push(252 | record.chromaFormat & 3);
      bytes2.push(248 | record.bitDepthLumaMinus8 & 7);
      bytes2.push(248 | record.bitDepthChromaMinus8 & 7);
      bytes2.push(record.sequenceParameterSetExt.length);
      for (const spsExt of record.sequenceParameterSetExt) {
        const length = spsExt.byteLength;
        bytes2.push(length >> 8);
        bytes2.push(length & 255);
        for (let i = 0; i < length; i++) {
          bytes2.push(spsExt[i]);
        }
      }
    }
    return new Uint8Array(bytes2);
  };
  var AVC_HEVC_ASPECT_RATIO_IDC_TABLE = {
    1: { num: 1, den: 1 },
    2: { num: 12, den: 11 },
    3: { num: 10, den: 11 },
    4: { num: 16, den: 11 },
    5: { num: 40, den: 33 },
    6: { num: 24, den: 11 },
    7: { num: 20, den: 11 },
    8: { num: 32, den: 11 },
    9: { num: 80, den: 33 },
    10: { num: 18, den: 11 },
    11: { num: 15, den: 11 },
    12: { num: 64, den: 33 },
    13: { num: 160, den: 99 },
    14: { num: 4, den: 3 },
    15: { num: 3, den: 2 },
    16: { num: 2, den: 1 }
  };
  var parseAvcSps = (sps) => {
    try {
      const bitstream = new Bitstream(removeEmulationPreventionBytes(sps));
      bitstream.skipBits(1);
      bitstream.skipBits(2);
      const nalUnitType = bitstream.readBits(5);
      if (nalUnitType !== 7) {
        return null;
      }
      const profileIdc = bitstream.readAlignedByte();
      const constraintFlags = bitstream.readAlignedByte();
      const levelIdc = bitstream.readAlignedByte();
      readExpGolomb(bitstream);
      let chromaFormatIdc = 1;
      let bitDepthLumaMinus8 = 0;
      let bitDepthChromaMinus8 = 0;
      let separateColourPlaneFlag = 0;
      if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244 || profileIdc === 44 || profileIdc === 83 || profileIdc === 86 || profileIdc === 118 || profileIdc === 128) {
        chromaFormatIdc = readExpGolomb(bitstream);
        if (chromaFormatIdc === 3) {
          separateColourPlaneFlag = bitstream.readBits(1);
        }
        bitDepthLumaMinus8 = readExpGolomb(bitstream);
        bitDepthChromaMinus8 = readExpGolomb(bitstream);
        bitstream.skipBits(1);
        const seqScalingMatrixPresentFlag = bitstream.readBits(1);
        if (seqScalingMatrixPresentFlag) {
          for (let i = 0; i < (chromaFormatIdc !== 3 ? 8 : 12); i++) {
            const seqScalingListPresentFlag = bitstream.readBits(1);
            if (seqScalingListPresentFlag) {
              const sizeOfScalingList = i < 6 ? 16 : 64;
              let lastScale = 8;
              let nextScale = 8;
              for (let j = 0; j < sizeOfScalingList; j++) {
                if (nextScale !== 0) {
                  const deltaScale = readSignedExpGolomb(bitstream);
                  nextScale = (lastScale + deltaScale + 256) % 256;
                }
                lastScale = nextScale === 0 ? lastScale : nextScale;
              }
            }
          }
        }
      }
      readExpGolomb(bitstream);
      const picOrderCntType = readExpGolomb(bitstream);
      if (picOrderCntType === 0) {
        readExpGolomb(bitstream);
      } else if (picOrderCntType === 1) {
        bitstream.skipBits(1);
        readSignedExpGolomb(bitstream);
        readSignedExpGolomb(bitstream);
        const numRefFramesInPicOrderCntCycle = readExpGolomb(bitstream);
        for (let i = 0; i < numRefFramesInPicOrderCntCycle; i++) {
          readSignedExpGolomb(bitstream);
        }
      }
      readExpGolomb(bitstream);
      bitstream.skipBits(1);
      const picWidthInMbsMinus1 = readExpGolomb(bitstream);
      const picHeightInMapUnitsMinus1 = readExpGolomb(bitstream);
      const codedWidth = 16 * (picWidthInMbsMinus1 + 1);
      const codedHeight = 16 * (picHeightInMapUnitsMinus1 + 1);
      let displayWidth = codedWidth;
      let displayHeight = codedHeight;
      const frameMbsOnlyFlag = bitstream.readBits(1);
      if (!frameMbsOnlyFlag) {
        bitstream.skipBits(1);
      }
      bitstream.skipBits(1);
      const frameCroppingFlag = bitstream.readBits(1);
      if (frameCroppingFlag) {
        const frameCropLeftOffset = readExpGolomb(bitstream);
        const frameCropRightOffset = readExpGolomb(bitstream);
        const frameCropTopOffset = readExpGolomb(bitstream);
        const frameCropBottomOffset = readExpGolomb(bitstream);
        let cropUnitX;
        let cropUnitY;
        const chromaArrayType = separateColourPlaneFlag === 0 ? chromaFormatIdc : 0;
        if (chromaArrayType === 0) {
          cropUnitX = 1;
          cropUnitY = 2 - frameMbsOnlyFlag;
        } else {
          const subWidthC = chromaFormatIdc === 3 ? 1 : 2;
          const subHeightC = chromaFormatIdc === 1 ? 2 : 1;
          cropUnitX = subWidthC;
          cropUnitY = subHeightC * (2 - frameMbsOnlyFlag);
        }
        displayWidth -= cropUnitX * (frameCropLeftOffset + frameCropRightOffset);
        displayHeight -= cropUnitY * (frameCropTopOffset + frameCropBottomOffset);
      }
      let colourPrimaries = 2;
      let transferCharacteristics = 2;
      let matrixCoefficients = 2;
      let fullRangeFlag = 0;
      let pixelAspectRatio = { num: 1, den: 1 };
      let numReorderFrames = null;
      let maxDecFrameBuffering = null;
      const vuiParametersPresentFlag = bitstream.readBits(1);
      if (vuiParametersPresentFlag) {
        const aspectRatioInfoPresentFlag = bitstream.readBits(1);
        if (aspectRatioInfoPresentFlag) {
          const aspectRatioIdc = bitstream.readBits(8);
          if (aspectRatioIdc === 255) {
            pixelAspectRatio = {
              num: bitstream.readBits(16),
              den: bitstream.readBits(16)
            };
          } else {
            const aspectRatio = AVC_HEVC_ASPECT_RATIO_IDC_TABLE[aspectRatioIdc];
            if (aspectRatio) {
              pixelAspectRatio = aspectRatio;
            }
          }
        }
        const overscanInfoPresentFlag = bitstream.readBits(1);
        if (overscanInfoPresentFlag) {
          bitstream.skipBits(1);
        }
        const videoSignalTypePresentFlag = bitstream.readBits(1);
        if (videoSignalTypePresentFlag) {
          bitstream.skipBits(3);
          fullRangeFlag = bitstream.readBits(1);
          const colourDescriptionPresentFlag = bitstream.readBits(1);
          if (colourDescriptionPresentFlag) {
            colourPrimaries = bitstream.readBits(8);
            transferCharacteristics = bitstream.readBits(8);
            matrixCoefficients = bitstream.readBits(8);
          }
        }
        const chromaLocInfoPresentFlag = bitstream.readBits(1);
        if (chromaLocInfoPresentFlag) {
          readExpGolomb(bitstream);
          readExpGolomb(bitstream);
        }
        const timingInfoPresentFlag = bitstream.readBits(1);
        if (timingInfoPresentFlag) {
          bitstream.skipBits(32);
          bitstream.skipBits(32);
          bitstream.skipBits(1);
        }
        const nalHrdParametersPresentFlag = bitstream.readBits(1);
        if (nalHrdParametersPresentFlag) {
          skipAvcHrdParameters(bitstream);
        }
        const vclHrdParametersPresentFlag = bitstream.readBits(1);
        if (vclHrdParametersPresentFlag) {
          skipAvcHrdParameters(bitstream);
        }
        if (nalHrdParametersPresentFlag || vclHrdParametersPresentFlag) {
          bitstream.skipBits(1);
        }
        bitstream.skipBits(1);
        const bitstreamRestrictionFlag = bitstream.readBits(1);
        if (bitstreamRestrictionFlag) {
          bitstream.skipBits(1);
          readExpGolomb(bitstream);
          readExpGolomb(bitstream);
          readExpGolomb(bitstream);
          readExpGolomb(bitstream);
          numReorderFrames = readExpGolomb(bitstream);
          maxDecFrameBuffering = readExpGolomb(bitstream);
        }
      }
      if (numReorderFrames === null) {
        assert(maxDecFrameBuffering === null);
        const constraintSet3Flag = constraintFlags & 16;
        if ((profileIdc === 44 || profileIdc === 86 || profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244) && constraintSet3Flag) {
          numReorderFrames = 0;
          maxDecFrameBuffering = 0;
        } else {
          const picWidthInMbs = picWidthInMbsMinus1 + 1;
          const picHeightInMapUnits = picHeightInMapUnitsMinus1 + 1;
          const frameHeightInMbs = (2 - frameMbsOnlyFlag) * picHeightInMapUnits;
          const levelInfo = AVC_LEVEL_TABLE.find((x) => x.level >= levelIdc) ?? last(AVC_LEVEL_TABLE);
          const maxDpbFrames = Math.min(Math.floor(levelInfo.maxDpbMbs / (picWidthInMbs * frameHeightInMbs)), 16);
          numReorderFrames = maxDpbFrames;
          maxDecFrameBuffering = maxDpbFrames;
        }
      }
      assert(maxDecFrameBuffering !== null);
      return {
        profileIdc,
        constraintFlags,
        levelIdc,
        frameMbsOnlyFlag,
        chromaFormatIdc,
        bitDepthLumaMinus8,
        bitDepthChromaMinus8,
        codedWidth,
        codedHeight,
        displayWidth,
        displayHeight,
        pixelAspectRatio,
        colourPrimaries,
        matrixCoefficients,
        transferCharacteristics,
        fullRangeFlag,
        numReorderFrames,
        maxDecFrameBuffering
      };
    } catch (error) {
      console.error("Error parsing AVC SPS:", error);
      return null;
    }
  };
  var skipAvcHrdParameters = (bitstream) => {
    const cpb_cnt_minus1 = readExpGolomb(bitstream);
    bitstream.skipBits(4);
    bitstream.skipBits(4);
    for (let i = 0; i <= cpb_cnt_minus1; i++) {
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      bitstream.skipBits(1);
    }
    bitstream.skipBits(5);
    bitstream.skipBits(5);
    bitstream.skipBits(5);
    bitstream.skipBits(5);
  };
  var extractNalUnitTypeForHevc = (byte) => {
    return byte >> 1 & 63;
  };
  var parseHevcSps = (sps) => {
    try {
      const bitstream = new Bitstream(removeEmulationPreventionBytes(sps));
      bitstream.skipBits(16);
      bitstream.readBits(4);
      const spsMaxSubLayersMinus1 = bitstream.readBits(3);
      const spsTemporalIdNestingFlag = bitstream.readBits(1);
      const { general_profile_space, general_tier_flag, general_profile_idc, general_profile_compatibility_flags, general_constraint_indicator_flags, general_level_idc } = parseProfileTierLevel(bitstream, spsMaxSubLayersMinus1);
      readExpGolomb(bitstream);
      const chromaFormatIdc = readExpGolomb(bitstream);
      let separateColourPlaneFlag = 0;
      if (chromaFormatIdc === 3) {
        separateColourPlaneFlag = bitstream.readBits(1);
      }
      const picWidthInLumaSamples = readExpGolomb(bitstream);
      const picHeightInLumaSamples = readExpGolomb(bitstream);
      let displayWidth = picWidthInLumaSamples;
      let displayHeight = picHeightInLumaSamples;
      if (bitstream.readBits(1)) {
        const confWinLeftOffset = readExpGolomb(bitstream);
        const confWinRightOffset = readExpGolomb(bitstream);
        const confWinTopOffset = readExpGolomb(bitstream);
        const confWinBottomOffset = readExpGolomb(bitstream);
        let subWidthC = 1;
        let subHeightC = 1;
        const chromaArrayType = separateColourPlaneFlag === 0 ? chromaFormatIdc : 0;
        if (chromaArrayType === 1) {
          subWidthC = 2;
          subHeightC = 2;
        } else if (chromaArrayType === 2) {
          subWidthC = 2;
          subHeightC = 1;
        }
        displayWidth -= (confWinLeftOffset + confWinRightOffset) * subWidthC;
        displayHeight -= (confWinTopOffset + confWinBottomOffset) * subHeightC;
      }
      const bitDepthLumaMinus8 = readExpGolomb(bitstream);
      const bitDepthChromaMinus8 = readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      const spsSubLayerOrderingInfoPresentFlag = bitstream.readBits(1);
      const startI = spsSubLayerOrderingInfoPresentFlag ? 0 : spsMaxSubLayersMinus1;
      let spsMaxNumReorderPics = 0;
      for (let i = startI; i <= spsMaxSubLayersMinus1; i++) {
        readExpGolomb(bitstream);
        spsMaxNumReorderPics = readExpGolomb(bitstream);
        readExpGolomb(bitstream);
      }
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      if (bitstream.readBits(1)) {
        if (bitstream.readBits(1)) {
          skipScalingListData(bitstream);
        }
      }
      bitstream.skipBits(1);
      bitstream.skipBits(1);
      if (bitstream.readBits(1)) {
        bitstream.skipBits(4);
        bitstream.skipBits(4);
        readExpGolomb(bitstream);
        readExpGolomb(bitstream);
        bitstream.skipBits(1);
      }
      const numShortTermRefPicSets = readExpGolomb(bitstream);
      skipAllStRefPicSets(bitstream, numShortTermRefPicSets);
      if (bitstream.readBits(1)) {
        const numLongTermRefPicsSps = readExpGolomb(bitstream);
        for (let i = 0; i < numLongTermRefPicsSps; i++) {
          readExpGolomb(bitstream);
          bitstream.skipBits(1);
        }
      }
      bitstream.skipBits(1);
      bitstream.skipBits(1);
      let colourPrimaries = 2;
      let transferCharacteristics = 2;
      let matrixCoefficients = 2;
      let fullRangeFlag = 0;
      let minSpatialSegmentationIdc = 0;
      let pixelAspectRatio = { num: 1, den: 1 };
      if (bitstream.readBits(1)) {
        const vui = parseHevcVui(bitstream, spsMaxSubLayersMinus1);
        pixelAspectRatio = vui.pixelAspectRatio;
        colourPrimaries = vui.colourPrimaries;
        transferCharacteristics = vui.transferCharacteristics;
        matrixCoefficients = vui.matrixCoefficients;
        fullRangeFlag = vui.fullRangeFlag;
        minSpatialSegmentationIdc = vui.minSpatialSegmentationIdc;
      }
      return {
        displayWidth,
        displayHeight,
        pixelAspectRatio,
        colourPrimaries,
        transferCharacteristics,
        matrixCoefficients,
        fullRangeFlag,
        maxDecFrameBuffering: spsMaxNumReorderPics + 1,
        spsMaxSubLayersMinus1,
        spsTemporalIdNestingFlag,
        generalProfileSpace: general_profile_space,
        generalTierFlag: general_tier_flag,
        generalProfileIdc: general_profile_idc,
        generalProfileCompatibilityFlags: general_profile_compatibility_flags,
        generalConstraintIndicatorFlags: general_constraint_indicator_flags,
        generalLevelIdc: general_level_idc,
        chromaFormatIdc,
        bitDepthLumaMinus8,
        bitDepthChromaMinus8,
        minSpatialSegmentationIdc
      };
    } catch (error) {
      console.error("Error parsing HEVC SPS:", error);
      return null;
    }
  };
  var extractHevcDecoderConfigurationRecord = (packetData) => {
    try {
      const vpsUnits = [];
      const spsUnits = [];
      const ppsUnits = [];
      const seiUnits = [];
      for (const loc of iterateNalUnitsInAnnexB(packetData)) {
        const nalUnit = packetData.subarray(loc.offset, loc.offset + loc.length);
        const type = extractNalUnitTypeForHevc(nalUnit[0]);
        if (type === HevcNalUnitType.VPS_NUT) {
          vpsUnits.push(nalUnit);
        } else if (type === HevcNalUnitType.SPS_NUT) {
          spsUnits.push(nalUnit);
        } else if (type === HevcNalUnitType.PPS_NUT) {
          ppsUnits.push(nalUnit);
        } else if (type === HevcNalUnitType.PREFIX_SEI_NUT || type === HevcNalUnitType.SUFFIX_SEI_NUT) {
          seiUnits.push(nalUnit);
        }
      }
      if (spsUnits.length === 0 || ppsUnits.length === 0)
        return null;
      const spsInfo = parseHevcSps(spsUnits[0]);
      if (!spsInfo)
        return null;
      let parallelismType = 0;
      if (ppsUnits.length > 0) {
        const pps = ppsUnits[0];
        const ppsBitstream = new Bitstream(removeEmulationPreventionBytes(pps));
        ppsBitstream.skipBits(16);
        readExpGolomb(ppsBitstream);
        readExpGolomb(ppsBitstream);
        ppsBitstream.skipBits(1);
        ppsBitstream.skipBits(1);
        ppsBitstream.skipBits(3);
        ppsBitstream.skipBits(1);
        ppsBitstream.skipBits(1);
        readExpGolomb(ppsBitstream);
        readExpGolomb(ppsBitstream);
        readSignedExpGolomb(ppsBitstream);
        ppsBitstream.skipBits(1);
        ppsBitstream.skipBits(1);
        if (ppsBitstream.readBits(1)) {
          readExpGolomb(ppsBitstream);
        }
        readSignedExpGolomb(ppsBitstream);
        readSignedExpGolomb(ppsBitstream);
        ppsBitstream.skipBits(1);
        ppsBitstream.skipBits(1);
        ppsBitstream.skipBits(1);
        ppsBitstream.skipBits(1);
        const tiles_enabled_flag = ppsBitstream.readBits(1);
        const entropy_coding_sync_enabled_flag = ppsBitstream.readBits(1);
        if (!tiles_enabled_flag && !entropy_coding_sync_enabled_flag)
          parallelismType = 0;
        else if (tiles_enabled_flag && !entropy_coding_sync_enabled_flag)
          parallelismType = 2;
        else if (!tiles_enabled_flag && entropy_coding_sync_enabled_flag)
          parallelismType = 3;
        else
          parallelismType = 0;
      }
      const arrays = [
        ...vpsUnits.length ? [
          {
            arrayCompleteness: 1,
            nalUnitType: HevcNalUnitType.VPS_NUT,
            nalUnits: vpsUnits
          }
        ] : [],
        ...spsUnits.length ? [
          {
            arrayCompleteness: 1,
            nalUnitType: HevcNalUnitType.SPS_NUT,
            nalUnits: spsUnits
          }
        ] : [],
        ...ppsUnits.length ? [
          {
            arrayCompleteness: 1,
            nalUnitType: HevcNalUnitType.PPS_NUT,
            nalUnits: ppsUnits
          }
        ] : [],
        ...seiUnits.length ? [
          {
            arrayCompleteness: 1,
            nalUnitType: extractNalUnitTypeForHevc(seiUnits[0][0]),
            nalUnits: seiUnits
          }
        ] : []
      ];
      const record = {
        configurationVersion: 1,
        generalProfileSpace: spsInfo.generalProfileSpace,
        generalTierFlag: spsInfo.generalTierFlag,
        generalProfileIdc: spsInfo.generalProfileIdc,
        generalProfileCompatibilityFlags: spsInfo.generalProfileCompatibilityFlags,
        generalConstraintIndicatorFlags: spsInfo.generalConstraintIndicatorFlags,
        generalLevelIdc: spsInfo.generalLevelIdc,
        minSpatialSegmentationIdc: spsInfo.minSpatialSegmentationIdc,
        parallelismType,
        chromaFormatIdc: spsInfo.chromaFormatIdc,
        bitDepthLumaMinus8: spsInfo.bitDepthLumaMinus8,
        bitDepthChromaMinus8: spsInfo.bitDepthChromaMinus8,
        avgFrameRate: 0,
        constantFrameRate: 0,
        numTemporalLayers: spsInfo.spsMaxSubLayersMinus1 + 1,
        temporalIdNested: spsInfo.spsTemporalIdNestingFlag,
        lengthSizeMinusOne: 3,
        arrays
      };
      return record;
    } catch (error) {
      console.error("Error building HEVC Decoder Configuration Record:", error);
      return null;
    }
  };
  var parseProfileTierLevel = (bitstream, maxNumSubLayersMinus1) => {
    const general_profile_space = bitstream.readBits(2);
    const general_tier_flag = bitstream.readBits(1);
    const general_profile_idc = bitstream.readBits(5);
    let general_profile_compatibility_flags = 0;
    for (let i = 0; i < 32; i++) {
      general_profile_compatibility_flags = general_profile_compatibility_flags << 1 | bitstream.readBits(1);
    }
    const general_constraint_indicator_flags = new Uint8Array(6);
    for (let i = 0; i < 6; i++) {
      general_constraint_indicator_flags[i] = bitstream.readBits(8);
    }
    const general_level_idc = bitstream.readBits(8);
    const sub_layer_profile_present_flag = [];
    const sub_layer_level_present_flag = [];
    for (let i = 0; i < maxNumSubLayersMinus1; i++) {
      sub_layer_profile_present_flag.push(bitstream.readBits(1));
      sub_layer_level_present_flag.push(bitstream.readBits(1));
    }
    if (maxNumSubLayersMinus1 > 0) {
      for (let i = maxNumSubLayersMinus1; i < 8; i++) {
        bitstream.skipBits(2);
      }
    }
    for (let i = 0; i < maxNumSubLayersMinus1; i++) {
      if (sub_layer_profile_present_flag[i])
        bitstream.skipBits(88);
      if (sub_layer_level_present_flag[i])
        bitstream.skipBits(8);
    }
    return {
      general_profile_space,
      general_tier_flag,
      general_profile_idc,
      general_profile_compatibility_flags,
      general_constraint_indicator_flags,
      general_level_idc
    };
  };
  var skipScalingListData = (bitstream) => {
    for (let sizeId = 0; sizeId < 4; sizeId++) {
      for (let matrixId = 0; matrixId < (sizeId === 3 ? 2 : 6); matrixId++) {
        const scaling_list_pred_mode_flag = bitstream.readBits(1);
        if (!scaling_list_pred_mode_flag) {
          readExpGolomb(bitstream);
        } else {
          const coefNum = Math.min(64, 1 << 4 + (sizeId << 1));
          if (sizeId > 1) {
            readSignedExpGolomb(bitstream);
          }
          for (let i = 0; i < coefNum; i++) {
            readSignedExpGolomb(bitstream);
          }
        }
      }
    }
  };
  var skipAllStRefPicSets = (bitstream, num_short_term_ref_pic_sets) => {
    const NumDeltaPocs = [];
    for (let stRpsIdx = 0; stRpsIdx < num_short_term_ref_pic_sets; stRpsIdx++) {
      NumDeltaPocs[stRpsIdx] = skipStRefPicSet(bitstream, stRpsIdx, num_short_term_ref_pic_sets, NumDeltaPocs);
    }
  };
  var skipStRefPicSet = (bitstream, stRpsIdx, num_short_term_ref_pic_sets, NumDeltaPocs) => {
    let NumDeltaPocsThis = 0;
    let inter_ref_pic_set_prediction_flag = 0;
    let RefRpsIdx = 0;
    if (stRpsIdx !== 0) {
      inter_ref_pic_set_prediction_flag = bitstream.readBits(1);
    }
    if (inter_ref_pic_set_prediction_flag) {
      if (stRpsIdx === num_short_term_ref_pic_sets) {
        const delta_idx_minus1 = readExpGolomb(bitstream);
        RefRpsIdx = stRpsIdx - (delta_idx_minus1 + 1);
      } else {
        RefRpsIdx = stRpsIdx - 1;
      }
      bitstream.readBits(1);
      readExpGolomb(bitstream);
      const numDelta = NumDeltaPocs[RefRpsIdx] ?? 0;
      for (let j = 0; j <= numDelta; j++) {
        const used_by_curr_pic_flag = bitstream.readBits(1);
        if (!used_by_curr_pic_flag) {
          bitstream.readBits(1);
        }
      }
      NumDeltaPocsThis = NumDeltaPocs[RefRpsIdx];
    } else {
      const num_negative_pics = readExpGolomb(bitstream);
      const num_positive_pics = readExpGolomb(bitstream);
      for (let i = 0; i < num_negative_pics; i++) {
        readExpGolomb(bitstream);
        bitstream.readBits(1);
      }
      for (let i = 0; i < num_positive_pics; i++) {
        readExpGolomb(bitstream);
        bitstream.readBits(1);
      }
      NumDeltaPocsThis = num_negative_pics + num_positive_pics;
    }
    return NumDeltaPocsThis;
  };
  var parseHevcVui = (bitstream, sps_max_sub_layers_minus1) => {
    let colourPrimaries = 2;
    let transferCharacteristics = 2;
    let matrixCoefficients = 2;
    let fullRangeFlag = 0;
    let minSpatialSegmentationIdc = 0;
    let pixelAspectRatio = { num: 1, den: 1 };
    if (bitstream.readBits(1)) {
      const aspect_ratio_idc = bitstream.readBits(8);
      if (aspect_ratio_idc === 255) {
        pixelAspectRatio = {
          num: bitstream.readBits(16),
          den: bitstream.readBits(16)
        };
      } else {
        const aspectRatio = AVC_HEVC_ASPECT_RATIO_IDC_TABLE[aspect_ratio_idc];
        if (aspectRatio) {
          pixelAspectRatio = aspectRatio;
        }
      }
    }
    if (bitstream.readBits(1)) {
      bitstream.readBits(1);
    }
    if (bitstream.readBits(1)) {
      bitstream.readBits(3);
      fullRangeFlag = bitstream.readBits(1);
      if (bitstream.readBits(1)) {
        colourPrimaries = bitstream.readBits(8);
        transferCharacteristics = bitstream.readBits(8);
        matrixCoefficients = bitstream.readBits(8);
      }
    }
    if (bitstream.readBits(1)) {
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
    }
    bitstream.readBits(1);
    bitstream.readBits(1);
    bitstream.readBits(1);
    if (bitstream.readBits(1)) {
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
    }
    if (bitstream.readBits(1)) {
      bitstream.readBits(32);
      bitstream.readBits(32);
      if (bitstream.readBits(1)) {
        readExpGolomb(bitstream);
      }
      if (bitstream.readBits(1)) {
        skipHevcHrdParameters(bitstream, true, sps_max_sub_layers_minus1);
      }
    }
    if (bitstream.readBits(1)) {
      bitstream.readBits(1);
      bitstream.readBits(1);
      bitstream.readBits(1);
      minSpatialSegmentationIdc = readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
    }
    return {
      pixelAspectRatio,
      colourPrimaries,
      transferCharacteristics,
      matrixCoefficients,
      fullRangeFlag,
      minSpatialSegmentationIdc
    };
  };
  var skipHevcHrdParameters = (bitstream, commonInfPresentFlag, maxNumSubLayersMinus1) => {
    let nal_hrd_parameters_present_flag = false;
    let vcl_hrd_parameters_present_flag = false;
    let sub_pic_hrd_params_present_flag = false;
    if (commonInfPresentFlag) {
      nal_hrd_parameters_present_flag = bitstream.readBits(1) === 1;
      vcl_hrd_parameters_present_flag = bitstream.readBits(1) === 1;
      if (nal_hrd_parameters_present_flag || vcl_hrd_parameters_present_flag) {
        sub_pic_hrd_params_present_flag = bitstream.readBits(1) === 1;
        if (sub_pic_hrd_params_present_flag) {
          bitstream.readBits(8);
          bitstream.readBits(5);
          bitstream.readBits(1);
          bitstream.readBits(5);
        }
        bitstream.readBits(4);
        bitstream.readBits(4);
        if (sub_pic_hrd_params_present_flag) {
          bitstream.readBits(4);
        }
        bitstream.readBits(5);
        bitstream.readBits(5);
        bitstream.readBits(5);
      }
    }
    for (let i = 0; i <= maxNumSubLayersMinus1; i++) {
      const fixed_pic_rate_general_flag = bitstream.readBits(1) === 1;
      let fixed_pic_rate_within_cvs_flag = true;
      if (!fixed_pic_rate_general_flag) {
        fixed_pic_rate_within_cvs_flag = bitstream.readBits(1) === 1;
      }
      let low_delay_hrd_flag = false;
      if (fixed_pic_rate_within_cvs_flag) {
        readExpGolomb(bitstream);
      } else {
        low_delay_hrd_flag = bitstream.readBits(1) === 1;
      }
      let CpbCnt = 1;
      if (!low_delay_hrd_flag) {
        const cpb_cnt_minus1 = readExpGolomb(bitstream);
        CpbCnt = cpb_cnt_minus1 + 1;
      }
      if (nal_hrd_parameters_present_flag) {
        skipSubLayerHrdParameters(bitstream, CpbCnt, sub_pic_hrd_params_present_flag);
      }
      if (vcl_hrd_parameters_present_flag) {
        skipSubLayerHrdParameters(bitstream, CpbCnt, sub_pic_hrd_params_present_flag);
      }
    }
  };
  var skipSubLayerHrdParameters = (bitstream, CpbCnt, sub_pic_hrd_params_present_flag) => {
    for (let i = 0; i < CpbCnt; i++) {
      readExpGolomb(bitstream);
      readExpGolomb(bitstream);
      if (sub_pic_hrd_params_present_flag) {
        readExpGolomb(bitstream);
        readExpGolomb(bitstream);
      }
      bitstream.readBits(1);
    }
  };
  var serializeHevcDecoderConfigurationRecord = (record) => {
    const bytes2 = [];
    bytes2.push(record.configurationVersion);
    bytes2.push((record.generalProfileSpace & 3) << 6 | (record.generalTierFlag & 1) << 5 | record.generalProfileIdc & 31);
    bytes2.push(record.generalProfileCompatibilityFlags >>> 24 & 255);
    bytes2.push(record.generalProfileCompatibilityFlags >>> 16 & 255);
    bytes2.push(record.generalProfileCompatibilityFlags >>> 8 & 255);
    bytes2.push(record.generalProfileCompatibilityFlags & 255);
    bytes2.push(...record.generalConstraintIndicatorFlags);
    bytes2.push(record.generalLevelIdc & 255);
    bytes2.push(240 | record.minSpatialSegmentationIdc >> 8 & 15);
    bytes2.push(record.minSpatialSegmentationIdc & 255);
    bytes2.push(252 | record.parallelismType & 3);
    bytes2.push(252 | record.chromaFormatIdc & 3);
    bytes2.push(248 | record.bitDepthLumaMinus8 & 7);
    bytes2.push(248 | record.bitDepthChromaMinus8 & 7);
    bytes2.push(record.avgFrameRate >> 8 & 255);
    bytes2.push(record.avgFrameRate & 255);
    bytes2.push((record.constantFrameRate & 3) << 6 | (record.numTemporalLayers & 7) << 3 | (record.temporalIdNested & 1) << 2 | record.lengthSizeMinusOne & 3);
    bytes2.push(record.arrays.length & 255);
    for (const arr of record.arrays) {
      bytes2.push((arr.arrayCompleteness & 1) << 7 | 0 << 6 | arr.nalUnitType & 63);
      bytes2.push(arr.nalUnits.length >> 8 & 255);
      bytes2.push(arr.nalUnits.length & 255);
      for (const nal of arr.nalUnits) {
        bytes2.push(nal.length >> 8 & 255);
        bytes2.push(nal.length & 255);
        for (let i = 0; i < nal.length; i++) {
          bytes2.push(nal[i]);
        }
      }
    }
    return new Uint8Array(bytes2);
  };
  var parseOpusIdentificationHeader = (bytes2) => {
    const view2 = toDataView(bytes2);
    const outputChannelCount = view2.getUint8(9);
    const preSkip = view2.getUint16(10, true);
    const inputSampleRate = view2.getUint32(12, true);
    const outputGain = view2.getInt16(16, true);
    const channelMappingFamily = view2.getUint8(18);
    let channelMappingTable = null;
    if (channelMappingFamily) {
      channelMappingTable = bytes2.subarray(19, 19 + 2 + outputChannelCount);
    }
    return {
      outputChannelCount,
      preSkip,
      inputSampleRate,
      outputGain,
      channelMappingFamily,
      channelMappingTable
    };
  };
  var FlacBlockType;
  (function(FlacBlockType2) {
    FlacBlockType2[FlacBlockType2["STREAMINFO"] = 0] = "STREAMINFO";
    FlacBlockType2[FlacBlockType2["VORBIS_COMMENT"] = 4] = "VORBIS_COMMENT";
    FlacBlockType2[FlacBlockType2["PICTURE"] = 6] = "PICTURE";
  })(FlacBlockType || (FlacBlockType = {}));
  var parseAc3SyncFrame = (data) => {
    if (data.length < 7) {
      return null;
    }
    if (data[0] !== 11 || data[1] !== 119) {
      return null;
    }
    const bitstream = new Bitstream(data);
    bitstream.skipBits(16);
    bitstream.skipBits(16);
    const fscod = bitstream.readBits(2);
    if (fscod === 3) {
      return null;
    }
    const frmsizecod = bitstream.readBits(6);
    const bsid = bitstream.readBits(5);
    if (bsid > 8) {
      return null;
    }
    const bsmod = bitstream.readBits(3);
    const acmod = bitstream.readBits(3);
    if ((acmod & 1) !== 0 && acmod !== 1) {
      bitstream.skipBits(2);
    }
    if ((acmod & 4) !== 0) {
      bitstream.skipBits(2);
    }
    if (acmod === 2) {
      bitstream.skipBits(2);
    }
    const lfeon = bitstream.readBits(1);
    const bitRateCode = Math.floor(frmsizecod / 2);
    return { fscod, bsid, bsmod, acmod, lfeon, bitRateCode };
  };
  var AC3_FRAME_SIZES = [
    // frmsizecod, [48kHz, 44.1kHz, 32kHz] in bytes
    64 * 2,
    69 * 2,
    96 * 2,
    64 * 2,
    70 * 2,
    96 * 2,
    80 * 2,
    87 * 2,
    120 * 2,
    80 * 2,
    88 * 2,
    120 * 2,
    96 * 2,
    104 * 2,
    144 * 2,
    96 * 2,
    105 * 2,
    144 * 2,
    112 * 2,
    121 * 2,
    168 * 2,
    112 * 2,
    122 * 2,
    168 * 2,
    128 * 2,
    139 * 2,
    192 * 2,
    128 * 2,
    140 * 2,
    192 * 2,
    160 * 2,
    174 * 2,
    240 * 2,
    160 * 2,
    175 * 2,
    240 * 2,
    192 * 2,
    208 * 2,
    288 * 2,
    192 * 2,
    209 * 2,
    288 * 2,
    224 * 2,
    243 * 2,
    336 * 2,
    224 * 2,
    244 * 2,
    336 * 2,
    256 * 2,
    278 * 2,
    384 * 2,
    256 * 2,
    279 * 2,
    384 * 2,
    320 * 2,
    348 * 2,
    480 * 2,
    320 * 2,
    349 * 2,
    480 * 2,
    384 * 2,
    417 * 2,
    576 * 2,
    384 * 2,
    418 * 2,
    576 * 2,
    448 * 2,
    487 * 2,
    672 * 2,
    448 * 2,
    488 * 2,
    672 * 2,
    512 * 2,
    557 * 2,
    768 * 2,
    512 * 2,
    558 * 2,
    768 * 2,
    640 * 2,
    696 * 2,
    960 * 2,
    640 * 2,
    697 * 2,
    960 * 2,
    768 * 2,
    835 * 2,
    1152 * 2,
    768 * 2,
    836 * 2,
    1152 * 2,
    896 * 2,
    975 * 2,
    1344 * 2,
    896 * 2,
    976 * 2,
    1344 * 2,
    1024 * 2,
    1114 * 2,
    1536 * 2,
    1024 * 2,
    1115 * 2,
    1536 * 2,
    1152 * 2,
    1253 * 2,
    1728 * 2,
    1152 * 2,
    1254 * 2,
    1728 * 2,
    1280 * 2,
    1393 * 2,
    1920 * 2,
    1280 * 2,
    1394 * 2,
    1920 * 2
  ];
  var AC3_REGISTRATION_DESCRIPTOR = new Uint8Array([5, 4, 65, 67, 45, 51]);
  var EAC3_REGISTRATION_DESCRIPTOR = new Uint8Array([5, 4, 69, 65, 67, 51]);
  var EAC3_NUMBLKS_TABLE = [1, 2, 3, 6];
  var parseEac3SyncFrame = (data) => {
    if (data.length < 6) {
      return null;
    }
    if (data[0] !== 11 || data[1] !== 119) {
      return null;
    }
    const bitstream = new Bitstream(data);
    bitstream.skipBits(16);
    const strmtyp = bitstream.readBits(2);
    bitstream.skipBits(3);
    if (strmtyp !== 0 && strmtyp !== 2) {
      return null;
    }
    const frmsiz = bitstream.readBits(11);
    const fscod = bitstream.readBits(2);
    let fscod2 = 0;
    let numblkscod;
    if (fscod === 3) {
      fscod2 = bitstream.readBits(2);
      numblkscod = 3;
    } else {
      numblkscod = bitstream.readBits(2);
    }
    const acmod = bitstream.readBits(3);
    const lfeon = bitstream.readBits(1);
    const bsid = bitstream.readBits(5);
    if (bsid < 11 || bsid > 16) {
      return null;
    }
    const numblks = EAC3_NUMBLKS_TABLE[numblkscod];
    let fs;
    if (fscod < 3) {
      fs = AC3_SAMPLE_RATES[fscod] / 1e3;
    } else {
      fs = EAC3_REDUCED_SAMPLE_RATES[fscod2] / 1e3;
    }
    const dataRate = Math.round((frmsiz + 1) * fs / (numblks * 16));
    const bsmod = 0;
    const numDepSub = 0;
    const chanLoc = 0;
    const substream = {
      fscod,
      fscod2,
      bsid,
      bsmod,
      acmod,
      lfeon,
      numDepSub,
      chanLoc
    };
    return {
      dataRate,
      substreams: [substream]
    };
  };

  // ../../node_modules/mediabunny/dist/modules/src/custom-coder.js
  var customVideoEncoders = [];
  var customAudioEncoders = [];

  // ../../node_modules/mediabunny/dist/modules/src/packet.js
  var PLACEHOLDER_DATA = /* @__PURE__ */ new Uint8Array(0);
  var EncodedPacket = class _EncodedPacket {
    /** Creates a new {@link EncodedPacket} from raw bytes and timing information. */
    constructor(data, type, timestamp, duration, sequenceNumber = -1, byteLength, sideData) {
      this.data = data;
      this.type = type;
      this.timestamp = timestamp;
      this.duration = duration;
      this.sequenceNumber = sequenceNumber;
      if (data === PLACEHOLDER_DATA && byteLength === void 0) {
        throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
      }
      if (byteLength === void 0) {
        byteLength = data.byteLength;
      }
      if (!(data instanceof Uint8Array)) {
        throw new TypeError("data must be a Uint8Array.");
      }
      if (type !== "key" && type !== "delta") {
        throw new TypeError('type must be either "key" or "delta".');
      }
      if (!Number.isFinite(timestamp)) {
        throw new TypeError("timestamp must be a number.");
      }
      if (!Number.isFinite(duration) || duration < 0) {
        throw new TypeError("duration must be a non-negative number.");
      }
      if (!Number.isFinite(sequenceNumber)) {
        throw new TypeError("sequenceNumber must be a number.");
      }
      if (!Number.isInteger(byteLength) || byteLength < 0) {
        throw new TypeError("byteLength must be a non-negative integer.");
      }
      if (sideData !== void 0 && (typeof sideData !== "object" || !sideData)) {
        throw new TypeError("sideData, when provided, must be an object.");
      }
      if (sideData?.alpha !== void 0 && !(sideData.alpha instanceof Uint8Array)) {
        throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
      }
      if (sideData?.alphaByteLength !== void 0 && (!Number.isInteger(sideData.alphaByteLength) || sideData.alphaByteLength < 0)) {
        throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
      }
      this.byteLength = byteLength;
      this.sideData = sideData ?? {};
      if (this.sideData.alpha && this.sideData.alphaByteLength === void 0) {
        this.sideData.alphaByteLength = this.sideData.alpha.byteLength;
      }
    }
    /**
     * If this packet is a metadata-only packet. Metadata-only packets don't contain their packet data. They are the
     * result of retrieving packets with {@link PacketRetrievalOptions.metadataOnly} set to `true`.
     */
    get isMetadataOnly() {
      return this.data === PLACEHOLDER_DATA;
    }
    /** The timestamp of this packet in microseconds. */
    get microsecondTimestamp() {
      return Math.trunc(SECOND_TO_MICROSECOND_FACTOR * this.timestamp);
    }
    /** The duration of this packet in microseconds. */
    get microsecondDuration() {
      return Math.trunc(SECOND_TO_MICROSECOND_FACTOR * this.duration);
    }
    /** Converts this packet to an
     * [`EncodedVideoChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk) for use with the
     * WebCodecs API. */
    toEncodedVideoChunk() {
      if (this.isMetadataOnly) {
        throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
      }
      if (typeof EncodedVideoChunk === "undefined") {
        throw new Error("Your browser does not support EncodedVideoChunk.");
      }
      return new EncodedVideoChunk({
        data: this.data,
        type: this.type,
        timestamp: this.microsecondTimestamp,
        duration: this.microsecondDuration
      });
    }
    /**
     * Converts this packet to an
     * [`EncodedVideoChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk) for use with the
     * WebCodecs API, using the alpha side data instead of the color data. Throws if no alpha side data is defined.
     */
    alphaToEncodedVideoChunk(type = this.type) {
      if (!this.sideData.alpha) {
        throw new TypeError("This packet does not contain alpha side data.");
      }
      if (this.isMetadataOnly) {
        throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
      }
      if (typeof EncodedVideoChunk === "undefined") {
        throw new Error("Your browser does not support EncodedVideoChunk.");
      }
      return new EncodedVideoChunk({
        data: this.sideData.alpha,
        type,
        timestamp: this.microsecondTimestamp,
        duration: this.microsecondDuration
      });
    }
    /** Converts this packet to an
     * [`EncodedAudioChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedAudioChunk) for use with the
     * WebCodecs API. */
    toEncodedAudioChunk() {
      if (this.isMetadataOnly) {
        throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");
      }
      if (typeof EncodedAudioChunk === "undefined") {
        throw new Error("Your browser does not support EncodedAudioChunk.");
      }
      return new EncodedAudioChunk({
        data: this.data,
        type: this.type,
        timestamp: this.microsecondTimestamp,
        duration: this.microsecondDuration
      });
    }
    /**
     * Creates an {@link EncodedPacket} from an
     * [`EncodedVideoChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk) or
     * [`EncodedAudioChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedAudioChunk). This method is useful
     * for converting chunks from the WebCodecs API to `EncodedPacket` instances.
     */
    static fromEncodedChunk(chunk, sideData) {
      if (!(chunk instanceof EncodedVideoChunk || chunk instanceof EncodedAudioChunk)) {
        throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
      }
      const data = new Uint8Array(chunk.byteLength);
      chunk.copyTo(data);
      return new _EncodedPacket(data, chunk.type, chunk.timestamp / 1e6, (chunk.duration ?? 0) / 1e6, void 0, void 0, sideData);
    }
    /** Clones this packet while optionally modifying the new packet's data. */
    clone(options) {
      if (options !== void 0 && (typeof options !== "object" || options === null)) {
        throw new TypeError("options, when provided, must be an object.");
      }
      if (options?.data !== void 0 && !(options.data instanceof Uint8Array)) {
        throw new TypeError("options.data, when provided, must be a Uint8Array.");
      }
      if (options?.type !== void 0 && options.type !== "key" && options.type !== "delta") {
        throw new TypeError('options.type, when provided, must be either "key" or "delta".');
      }
      if (options?.timestamp !== void 0 && !Number.isFinite(options.timestamp)) {
        throw new TypeError("options.timestamp, when provided, must be a number.");
      }
      if (options?.duration !== void 0 && !Number.isFinite(options.duration)) {
        throw new TypeError("options.duration, when provided, must be a number.");
      }
      if (options?.sequenceNumber !== void 0 && !Number.isFinite(options.sequenceNumber)) {
        throw new TypeError("options.sequenceNumber, when provided, must be a number.");
      }
      if (options?.sideData !== void 0 && (typeof options.sideData !== "object" || options.sideData === null)) {
        throw new TypeError("options.sideData, when provided, must be an object.");
      }
      return new _EncodedPacket(options?.data ?? this.data, options?.type ?? this.type, options?.timestamp ?? this.timestamp, options?.duration ?? this.duration, options?.sequenceNumber ?? this.sequenceNumber, this.byteLength, options?.sideData ?? this.sideData);
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/pcm.js
  var toUlaw = (s16) => {
    const MULAW_MAX = 8191;
    const MULAW_BIAS = 33;
    let number = s16;
    let mask = 4096;
    let sign = 0;
    let position = 12;
    let lsb = 0;
    if (number < 0) {
      number = -number;
      sign = 128;
    }
    number += MULAW_BIAS;
    if (number > MULAW_MAX) {
      number = MULAW_MAX;
    }
    while ((number & mask) !== mask && position >= 5) {
      mask >>= 1;
      position--;
    }
    lsb = number >> position - 4 & 15;
    return ~(sign | position - 5 << 4 | lsb) & 255;
  };
  var toAlaw = (s16) => {
    const ALAW_MAX = 4095;
    let mask = 2048;
    let sign = 0;
    let position = 11;
    let lsb = 0;
    let number = s16;
    if (number < 0) {
      number = -number;
      sign = 128;
    }
    if (number > ALAW_MAX) {
      number = ALAW_MAX;
    }
    while ((number & mask) !== mask && position >= 5) {
      mask >>= 1;
      position--;
    }
    lsb = number >> (position === 4 ? 1 : position - 4) & 15;
    return (sign | position - 4 << 4 | lsb) ^ 85;
  };

  // ../../node_modules/mediabunny/dist/modules/src/sample.js
  polyfillSymbolDispose();
  var lastVideoGcErrorLog = -Infinity;
  var lastAudioGcErrorLog = -Infinity;
  var finalizationRegistry = null;
  if (typeof FinalizationRegistry !== "undefined") {
    finalizationRegistry = new FinalizationRegistry((value) => {
      const now = Date.now();
      if (value.type === "video") {
        if (now - lastVideoGcErrorLog >= 1e3) {
          console.error(`A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them.`);
          lastVideoGcErrorLog = now;
        }
        if (typeof VideoFrame !== "undefined" && value.data instanceof VideoFrame) {
          value.data.close();
        }
      } else {
        if (now - lastAudioGcErrorLog >= 1e3) {
          console.error(`An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them.`);
          lastAudioGcErrorLog = now;
        }
        if (typeof AudioData !== "undefined" && value.data instanceof AudioData) {
          value.data.close();
        }
      }
    });
  }
  var VIDEO_SAMPLE_PIXEL_FORMATS = [
    // 4:2:0 Y, U, V
    "I420",
    "I420P10",
    "I420P12",
    // 4:2:0 Y, U, V, A
    "I420A",
    "I420AP10",
    "I420AP12",
    // 4:2:2 Y, U, V
    "I422",
    "I422P10",
    "I422P12",
    // 4:2:2 Y, U, V, A
    "I422A",
    "I422AP10",
    "I422AP12",
    // 4:4:4 Y, U, V
    "I444",
    "I444P10",
    "I444P12",
    // 4:4:4 Y, U, V, A
    "I444A",
    "I444AP10",
    "I444AP12",
    // 4:2:0 Y, UV
    "NV12",
    // 4:4:4 RGBA
    "RGBA",
    // 4:4:4 RGBX (opaque)
    "RGBX",
    // 4:4:4 BGRA
    "BGRA",
    // 4:4:4 BGRX (opaque)
    "BGRX"
  ];
  var VIDEO_SAMPLE_PIXEL_FORMATS_SET = new Set(VIDEO_SAMPLE_PIXEL_FORMATS);
  var VideoSample = class _VideoSample {
    /** The width of the frame in pixels. */
    get codedWidth() {
      return this.visibleRect.width;
    }
    /** The height of the frame in pixels. */
    get codedHeight() {
      return this.visibleRect.height;
    }
    /** The display width of the frame in pixels, after aspect ratio adjustment and rotation. */
    get displayWidth() {
      return this.rotation % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight;
    }
    /** The display height of the frame in pixels, after aspect ratio adjustment and rotation. */
    get displayHeight() {
      return this.rotation % 180 === 0 ? this.squarePixelHeight : this.squarePixelWidth;
    }
    /** The presentation timestamp of the frame in microseconds. */
    get microsecondTimestamp() {
      return Math.trunc(SECOND_TO_MICROSECOND_FACTOR * this.timestamp);
    }
    /** The duration of the frame in microseconds. */
    get microsecondDuration() {
      return Math.trunc(SECOND_TO_MICROSECOND_FACTOR * this.duration);
    }
    /**
     * Whether this sample uses a pixel format that can hold transparency data. Note that this doesn't necessarily mean
     * that the sample is transparent.
     */
    get hasAlpha() {
      return this.format && this.format.includes("A");
    }
    constructor(data, init) {
      this._closed = false;
      if (data instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && data instanceof SharedArrayBuffer || ArrayBuffer.isView(data)) {
        if (!init || typeof init !== "object") {
          throw new TypeError("init must be an object.");
        }
        if (init.format === void 0 || !VIDEO_SAMPLE_PIXEL_FORMATS_SET.has(init.format)) {
          throw new TypeError("init.format must be one of: " + VIDEO_SAMPLE_PIXEL_FORMATS.join(", "));
        }
        if (!Number.isInteger(init.codedWidth) || init.codedWidth <= 0) {
          throw new TypeError("init.codedWidth must be a positive integer.");
        }
        if (!Number.isInteger(init.codedHeight) || init.codedHeight <= 0) {
          throw new TypeError("init.codedHeight must be a positive integer.");
        }
        if (init.rotation !== void 0 && ![0, 90, 180, 270].includes(init.rotation)) {
          throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
        }
        if (!Number.isFinite(init.timestamp)) {
          throw new TypeError("init.timestamp must be a number.");
        }
        if (init.duration !== void 0 && (!Number.isFinite(init.duration) || init.duration < 0)) {
          throw new TypeError("init.duration, when provided, must be a non-negative number.");
        }
        if (init.layout !== void 0) {
          if (!Array.isArray(init.layout)) {
            throw new TypeError("init.layout, when provided, must be an array.");
          }
          for (const plane of init.layout) {
            if (!plane || typeof plane !== "object" || Array.isArray(plane)) {
              throw new TypeError("Each entry in init.layout must be an object.");
            }
            if (!Number.isInteger(plane.offset) || plane.offset < 0) {
              throw new TypeError("plane.offset must be a non-negative integer.");
            }
            if (!Number.isInteger(plane.stride) || plane.stride < 0) {
              throw new TypeError("plane.stride must be a non-negative integer.");
            }
          }
        }
        if (init.visibleRect !== void 0) {
          validateRectangle(init.visibleRect, "init.visibleRect");
        }
        if (init.displayWidth !== void 0 && (!Number.isInteger(init.displayWidth) || init.displayWidth <= 0)) {
          throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
        }
        if (init.displayHeight !== void 0 && (!Number.isInteger(init.displayHeight) || init.displayHeight <= 0)) {
          throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
        }
        if (init.displayWidth !== void 0 !== (init.displayHeight !== void 0)) {
          throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
        }
        this._data = toUint8Array(data).slice();
        this._layout = init.layout ?? createDefaultPlaneLayout(init.format, init.codedWidth, init.codedHeight);
        this.format = init.format;
        this.rotation = init.rotation ?? 0;
        this.timestamp = init.timestamp;
        this.duration = init.duration ?? 0;
        this.colorSpace = new VideoSampleColorSpace(init.colorSpace);
        this.visibleRect = {
          left: init.visibleRect?.left ?? 0,
          top: init.visibleRect?.top ?? 0,
          width: init.visibleRect?.width ?? init.codedWidth,
          height: init.visibleRect?.height ?? init.codedHeight
        };
        if (init.displayWidth !== void 0) {
          this.squarePixelWidth = this.rotation % 180 === 0 ? init.displayWidth : init.displayHeight;
          this.squarePixelHeight = this.rotation % 180 === 0 ? init.displayHeight : init.displayWidth;
        } else {
          this.squarePixelWidth = this.codedWidth;
          this.squarePixelHeight = this.codedHeight;
        }
      } else if (typeof VideoFrame !== "undefined" && data instanceof VideoFrame) {
        if (init?.rotation !== void 0 && ![0, 90, 180, 270].includes(init.rotation)) {
          throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
        }
        if (init?.timestamp !== void 0 && !Number.isFinite(init?.timestamp)) {
          throw new TypeError("init.timestamp, when provided, must be a number.");
        }
        if (init?.duration !== void 0 && (!Number.isFinite(init.duration) || init.duration < 0)) {
          throw new TypeError("init.duration, when provided, must be a non-negative number.");
        }
        if (init?.visibleRect !== void 0) {
          validateRectangle(init.visibleRect, "init.visibleRect");
        }
        this._data = data;
        this._layout = null;
        this.format = data.format;
        this.visibleRect = {
          left: data.visibleRect?.x ?? 0,
          top: data.visibleRect?.y ?? 0,
          width: data.visibleRect?.width ?? data.codedWidth,
          height: data.visibleRect?.height ?? data.codedHeight
        };
        this.rotation = init?.rotation ?? 0;
        this.squarePixelWidth = data.displayWidth;
        this.squarePixelHeight = data.displayHeight;
        this.timestamp = init?.timestamp ?? data.timestamp / 1e6;
        this.duration = init?.duration ?? (data.duration ?? 0) / 1e6;
        this.colorSpace = new VideoSampleColorSpace(data.colorSpace);
      } else if (typeof HTMLImageElement !== "undefined" && data instanceof HTMLImageElement || typeof SVGImageElement !== "undefined" && data instanceof SVGImageElement || typeof ImageBitmap !== "undefined" && data instanceof ImageBitmap || typeof HTMLVideoElement !== "undefined" && data instanceof HTMLVideoElement || typeof HTMLCanvasElement !== "undefined" && data instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && data instanceof OffscreenCanvas) {
        if (!init || typeof init !== "object") {
          throw new TypeError("init must be an object.");
        }
        if (init.rotation !== void 0 && ![0, 90, 180, 270].includes(init.rotation)) {
          throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
        }
        if (!Number.isFinite(init.timestamp)) {
          throw new TypeError("init.timestamp must be a number.");
        }
        if (init.duration !== void 0 && (!Number.isFinite(init.duration) || init.duration < 0)) {
          throw new TypeError("init.duration, when provided, must be a non-negative number.");
        }
        if (typeof VideoFrame !== "undefined") {
          return new _VideoSample(new VideoFrame(data, {
            timestamp: Math.trunc(init.timestamp * SECOND_TO_MICROSECOND_FACTOR),
            // Drag 0 to undefined
            duration: Math.trunc((init.duration ?? 0) * SECOND_TO_MICROSECOND_FACTOR) || void 0
          }), init);
        }
        let width = 0;
        let height = 0;
        if ("naturalWidth" in data) {
          width = data.naturalWidth;
          height = data.naturalHeight;
        } else if ("videoWidth" in data) {
          width = data.videoWidth;
          height = data.videoHeight;
        } else if ("width" in data) {
          width = Number(data.width);
          height = Number(data.height);
        }
        if (!width || !height) {
          throw new TypeError("Could not determine dimensions.");
        }
        const canvas = new OffscreenCanvas(width, height);
        const context = canvas.getContext("2d", {
          alpha: isFirefox(),
          // Firefox has VideoFrame glitches with opaque canvases
          willReadFrequently: true
        });
        assert(context);
        context.drawImage(data, 0, 0);
        this._data = canvas;
        this._layout = null;
        this.format = "RGBX";
        this.visibleRect = { left: 0, top: 0, width, height };
        this.squarePixelWidth = width;
        this.squarePixelHeight = height;
        this.rotation = init.rotation ?? 0;
        this.timestamp = init.timestamp;
        this.duration = init.duration ?? 0;
        this.colorSpace = new VideoSampleColorSpace({
          matrix: "rgb",
          primaries: "bt709",
          transfer: "iec61966-2-1",
          fullRange: true
        });
      } else {
        throw new TypeError("Invalid data type: Must be a BufferSource or CanvasImageSource.");
      }
      this.pixelAspectRatio = simplifyRational({
        num: this.squarePixelWidth * this.codedHeight,
        den: this.squarePixelHeight * this.codedWidth
      });
      finalizationRegistry?.register(this, { type: "video", data: this._data }, this);
    }
    /** Clones this video sample. */
    clone() {
      if (this._closed) {
        throw new Error("VideoSample is closed.");
      }
      assert(this._data !== null);
      if (isVideoFrame(this._data)) {
        return new _VideoSample(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation
        });
      } else if (this._data instanceof Uint8Array) {
        assert(this._layout);
        return new _VideoSample(this._data, {
          format: this.format,
          layout: this._layout,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          timestamp: this.timestamp,
          duration: this.duration,
          colorSpace: this.colorSpace,
          rotation: this.rotation,
          visibleRect: this.visibleRect,
          displayWidth: this.displayWidth,
          displayHeight: this.displayHeight
        });
      } else {
        return new _VideoSample(this._data, {
          format: this.format,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          timestamp: this.timestamp,
          duration: this.duration,
          colorSpace: this.colorSpace,
          rotation: this.rotation,
          visibleRect: this.visibleRect,
          displayWidth: this.displayWidth,
          displayHeight: this.displayHeight
        });
      }
    }
    /**
     * Closes this video sample, releasing held resources. Video samples should be closed as soon as they are not
     * needed anymore.
     */
    close() {
      if (this._closed) {
        return;
      }
      finalizationRegistry?.unregister(this);
      if (isVideoFrame(this._data)) {
        this._data.close();
      } else {
        this._data = null;
      }
      this._closed = true;
    }
    /**
     * Returns the number of bytes required to hold this video sample's pixel data. Throws if `format` is `null`.
     */
    allocationSize(options = {}) {
      validateVideoFrameCopyToOptions(options);
      if (this._closed) {
        throw new Error("VideoSample is closed.");
      }
      if (this.format === null) {
        throw new Error("Cannot get allocation size when format is null. Sorry!");
      }
      assert(this._data !== null);
      if (!isVideoFrame(this._data)) {
        if (options.colorSpace || options.format && options.format !== this.format || options.layout || options.rect) {
          const videoFrame = this.toVideoFrame();
          const size = videoFrame.allocationSize(options);
          videoFrame.close();
          return size;
        }
      }
      if (isVideoFrame(this._data)) {
        return this._data.allocationSize(options);
      } else if (this._data instanceof Uint8Array) {
        return this._data.byteLength;
      } else {
        return this.codedWidth * this.codedHeight * 4;
      }
    }
    /**
     * Copies this video sample's pixel data to an ArrayBuffer or ArrayBufferView. Throws if `format` is `null`.
     * @returns The byte layout of the planes of the copied data.
     */
    async copyTo(destination, options = {}) {
      if (!isAllowSharedBufferSource(destination)) {
        throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
      }
      validateVideoFrameCopyToOptions(options);
      if (this._closed) {
        throw new Error("VideoSample is closed.");
      }
      if (this.format === null) {
        throw new Error("Cannot copy video sample data when format is null. Sorry!");
      }
      assert(this._data !== null);
      if (!isVideoFrame(this._data)) {
        if (options.colorSpace || options.format && options.format !== this.format || options.layout || options.rect) {
          const videoFrame = this.toVideoFrame();
          const layout = await videoFrame.copyTo(destination, options);
          videoFrame.close();
          return layout;
        }
      }
      if (isVideoFrame(this._data)) {
        return this._data.copyTo(destination, options);
      } else if (this._data instanceof Uint8Array) {
        assert(this._layout);
        const dest = toUint8Array(destination);
        dest.set(this._data);
        return this._layout;
      } else {
        const canvas = this._data;
        const context = canvas.getContext("2d");
        assert(context);
        const imageData = context.getImageData(0, 0, this.codedWidth, this.codedHeight);
        const dest = toUint8Array(destination);
        dest.set(imageData.data);
        return [{
          offset: 0,
          stride: 4 * this.codedWidth
        }];
      }
    }
    /**
     * Converts this video sample to a VideoFrame for use with the WebCodecs API. The VideoFrame returned by this
     * method *must* be closed separately from this video sample.
     */
    toVideoFrame() {
      if (this._closed) {
        throw new Error("VideoSample is closed.");
      }
      assert(this._data !== null);
      if (isVideoFrame(this._data)) {
        return new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
          // Drag 0 duration to undefined, glitches some codecs
        });
      } else if (this._data instanceof Uint8Array) {
        return new VideoFrame(this._data, {
          format: this.format,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0,
          colorSpace: this.colorSpace
        });
      } else {
        return new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        });
      }
    }
    draw(context, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
      let sx = 0;
      let sy = 0;
      let sWidth = this.displayWidth;
      let sHeight = this.displayHeight;
      let dx = 0;
      let dy = 0;
      let dWidth = this.displayWidth;
      let dHeight = this.displayHeight;
      if (arg5 !== void 0) {
        sx = arg1;
        sy = arg2;
        sWidth = arg3;
        sHeight = arg4;
        dx = arg5;
        dy = arg6;
        if (arg7 !== void 0) {
          dWidth = arg7;
          dHeight = arg8;
        } else {
          dWidth = sWidth;
          dHeight = sHeight;
        }
      } else {
        dx = arg1;
        dy = arg2;
        if (arg3 !== void 0) {
          dWidth = arg3;
          dHeight = arg4;
        }
      }
      if (!(typeof CanvasRenderingContext2D !== "undefined" && context instanceof CanvasRenderingContext2D || typeof OffscreenCanvasRenderingContext2D !== "undefined" && context instanceof OffscreenCanvasRenderingContext2D)) {
        throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
      }
      if (!Number.isFinite(sx)) {
        throw new TypeError("sx must be a number.");
      }
      if (!Number.isFinite(sy)) {
        throw new TypeError("sy must be a number.");
      }
      if (!Number.isFinite(sWidth) || sWidth < 0) {
        throw new TypeError("sWidth must be a non-negative number.");
      }
      if (!Number.isFinite(sHeight) || sHeight < 0) {
        throw new TypeError("sHeight must be a non-negative number.");
      }
      if (!Number.isFinite(dx)) {
        throw new TypeError("dx must be a number.");
      }
      if (!Number.isFinite(dy)) {
        throw new TypeError("dy must be a number.");
      }
      if (!Number.isFinite(dWidth) || dWidth < 0) {
        throw new TypeError("dWidth must be a non-negative number.");
      }
      if (!Number.isFinite(dHeight) || dHeight < 0) {
        throw new TypeError("dHeight must be a non-negative number.");
      }
      if (this._closed) {
        throw new Error("VideoSample is closed.");
      }
      ({ sx, sy, sWidth, sHeight } = this._rotateSourceRegion(sx, sy, sWidth, sHeight, this.rotation));
      const source = this.toCanvasImageSource();
      context.save();
      const centerX = dx + dWidth / 2;
      const centerY = dy + dHeight / 2;
      context.translate(centerX, centerY);
      context.rotate(this.rotation * Math.PI / 180);
      const aspectRatioChange = this.rotation % 180 === 0 ? 1 : dWidth / dHeight;
      context.scale(1 / aspectRatioChange, aspectRatioChange);
      context.drawImage(source, sx, sy, sWidth, sHeight, -dWidth / 2, -dHeight / 2, dWidth, dHeight);
      context.restore();
    }
    /**
     * Draws the sample in the middle of the canvas corresponding to the context with the specified fit behavior.
     */
    drawWithFit(context, options) {
      if (!(typeof CanvasRenderingContext2D !== "undefined" && context instanceof CanvasRenderingContext2D || typeof OffscreenCanvasRenderingContext2D !== "undefined" && context instanceof OffscreenCanvasRenderingContext2D)) {
        throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
      }
      if (!options || typeof options !== "object") {
        throw new TypeError("options must be an object.");
      }
      if (!["fill", "contain", "cover"].includes(options.fit)) {
        throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
      }
      if (options.rotation !== void 0 && ![0, 90, 180, 270].includes(options.rotation)) {
        throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
      }
      if (options.crop !== void 0) {
        validateCropRectangle(options.crop, "options.");
      }
      const canvasWidth = context.canvas.width;
      const canvasHeight = context.canvas.height;
      const rotation = options.rotation ?? this.rotation;
      const [rotatedWidth, rotatedHeight] = rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
      if (options.crop) {
        clampCropRectangle(options.crop, rotatedWidth, rotatedHeight);
      }
      let dx;
      let dy;
      let newWidth;
      let newHeight;
      const { sx, sy, sWidth, sHeight } = this._rotateSourceRegion(options.crop?.left ?? 0, options.crop?.top ?? 0, options.crop?.width ?? rotatedWidth, options.crop?.height ?? rotatedHeight, rotation);
      if (options.fit === "fill") {
        dx = 0;
        dy = 0;
        newWidth = canvasWidth;
        newHeight = canvasHeight;
      } else {
        const [sampleWidth, sampleHeight] = options.crop ? [options.crop.width, options.crop.height] : [rotatedWidth, rotatedHeight];
        const scale = options.fit === "contain" ? Math.min(canvasWidth / sampleWidth, canvasHeight / sampleHeight) : Math.max(canvasWidth / sampleWidth, canvasHeight / sampleHeight);
        newWidth = sampleWidth * scale;
        newHeight = sampleHeight * scale;
        dx = (canvasWidth - newWidth) / 2;
        dy = (canvasHeight - newHeight) / 2;
      }
      context.save();
      const aspectRatioChange = rotation % 180 === 0 ? 1 : newWidth / newHeight;
      context.translate(canvasWidth / 2, canvasHeight / 2);
      context.rotate(rotation * Math.PI / 180);
      context.scale(1 / aspectRatioChange, aspectRatioChange);
      context.translate(-canvasWidth / 2, -canvasHeight / 2);
      context.drawImage(this.toCanvasImageSource(), sx, sy, sWidth, sHeight, dx, dy, newWidth, newHeight);
      context.restore();
    }
    /** @internal */
    _rotateSourceRegion(sx, sy, sWidth, sHeight, rotation) {
      if (rotation === 90) {
        [sx, sy, sWidth, sHeight] = [
          sy,
          this.squarePixelHeight - sx - sWidth,
          sHeight,
          sWidth
        ];
      } else if (rotation === 180) {
        [sx, sy] = [
          this.squarePixelWidth - sx - sWidth,
          this.squarePixelHeight - sy - sHeight
        ];
      } else if (rotation === 270) {
        [sx, sy, sWidth, sHeight] = [
          this.squarePixelWidth - sy - sHeight,
          sx,
          sHeight,
          sWidth
        ];
      }
      return { sx, sy, sWidth, sHeight };
    }
    /**
     * Converts this video sample to a
     * [`CanvasImageSource`](https://udn.realityripple.com/docs/Web/API/CanvasImageSource) for drawing to a canvas.
     *
     * You must use the value returned by this method immediately, as any VideoFrame created internally will
     * automatically be closed in the next microtask.
     */
    toCanvasImageSource() {
      if (this._closed) {
        throw new Error("VideoSample is closed.");
      }
      assert(this._data !== null);
      if (this._data instanceof Uint8Array) {
        const videoFrame = this.toVideoFrame();
        queueMicrotask(() => videoFrame.close());
        return videoFrame;
      } else {
        return this._data;
      }
    }
    /** Sets the rotation metadata of this video sample. */
    setRotation(newRotation) {
      if (![0, 90, 180, 270].includes(newRotation)) {
        throw new TypeError("newRotation must be 0, 90, 180, or 270.");
      }
      this.rotation = newRotation;
    }
    /** Sets the presentation timestamp of this video sample, in seconds. */
    setTimestamp(newTimestamp) {
      if (!Number.isFinite(newTimestamp)) {
        throw new TypeError("newTimestamp must be a number.");
      }
      this.timestamp = newTimestamp;
    }
    /** Sets the duration of this video sample, in seconds. */
    setDuration(newDuration) {
      if (!Number.isFinite(newDuration) || newDuration < 0) {
        throw new TypeError("newDuration must be a non-negative number.");
      }
      this.duration = newDuration;
    }
    /** Calls `.close()`. */
    [Symbol.dispose]() {
      this.close();
    }
  };
  var VideoSampleColorSpace = class {
    /** Creates a new VideoSampleColorSpace. */
    constructor(init) {
      if (init !== void 0) {
        if (!init || typeof init !== "object") {
          throw new TypeError("init.colorSpace, when provided, must be an object.");
        }
        const primariesValues = Object.keys(COLOR_PRIMARIES_MAP);
        if (init.primaries != null && !primariesValues.includes(init.primaries)) {
          throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${primariesValues.join(", ")}.`);
        }
        const transferValues = Object.keys(TRANSFER_CHARACTERISTICS_MAP);
        if (init.transfer != null && !transferValues.includes(init.transfer)) {
          throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${transferValues.join(", ")}.`);
        }
        const matrixValues = Object.keys(MATRIX_COEFFICIENTS_MAP);
        if (init.matrix != null && !matrixValues.includes(init.matrix)) {
          throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${matrixValues.join(", ")}.`);
        }
        if (init.fullRange != null && typeof init.fullRange !== "boolean") {
          throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.");
        }
      }
      this.primaries = init?.primaries ?? null;
      this.transfer = init?.transfer ?? null;
      this.matrix = init?.matrix ?? null;
      this.fullRange = init?.fullRange ?? null;
    }
    /** Serializes the color space to a JSON object. */
    toJSON() {
      return {
        primaries: this.primaries,
        transfer: this.transfer,
        matrix: this.matrix,
        fullRange: this.fullRange
      };
    }
  };
  var isVideoFrame = (x) => {
    return typeof VideoFrame !== "undefined" && x instanceof VideoFrame;
  };
  var clampCropRectangle = (crop, outerWidth, outerHeight) => {
    crop.left = Math.min(crop.left, outerWidth);
    crop.top = Math.min(crop.top, outerHeight);
    crop.width = Math.min(crop.width, outerWidth - crop.left);
    crop.height = Math.min(crop.height, outerHeight - crop.top);
    assert(crop.width >= 0);
    assert(crop.height >= 0);
  };
  var validateCropRectangle = (crop, prefix) => {
    if (!crop || typeof crop !== "object") {
      throw new TypeError(prefix + "crop, when provided, must be an object.");
    }
    if (!Number.isInteger(crop.left) || crop.left < 0) {
      throw new TypeError(prefix + "crop.left must be a non-negative integer.");
    }
    if (!Number.isInteger(crop.top) || crop.top < 0) {
      throw new TypeError(prefix + "crop.top must be a non-negative integer.");
    }
    if (!Number.isInteger(crop.width) || crop.width < 0) {
      throw new TypeError(prefix + "crop.width must be a non-negative integer.");
    }
    if (!Number.isInteger(crop.height) || crop.height < 0) {
      throw new TypeError(prefix + "crop.height must be a non-negative integer.");
    }
  };
  var validateVideoFrameCopyToOptions = (options) => {
    if (!options || typeof options !== "object") {
      throw new TypeError("options must be an object.");
    }
    if (options.colorSpace !== void 0 && !["display-p3", "srgb"].includes(options.colorSpace)) {
      throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
    }
    if (options.format !== void 0 && typeof options.format !== "string") {
      throw new TypeError("options.format, when provided, must be a string.");
    }
    if (options.layout !== void 0) {
      if (!Array.isArray(options.layout)) {
        throw new TypeError("options.layout, when provided, must be an array.");
      }
      for (const plane of options.layout) {
        if (!plane || typeof plane !== "object") {
          throw new TypeError("Each entry in options.layout must be an object.");
        }
        if (!Number.isInteger(plane.offset) || plane.offset < 0) {
          throw new TypeError("plane.offset must be a non-negative integer.");
        }
        if (!Number.isInteger(plane.stride) || plane.stride < 0) {
          throw new TypeError("plane.stride must be a non-negative integer.");
        }
      }
    }
    if (options.rect !== void 0) {
      if (!options.rect || typeof options.rect !== "object") {
        throw new TypeError("options.rect, when provided, must be an object.");
      }
      if (options.rect.x !== void 0 && (!Number.isInteger(options.rect.x) || options.rect.x < 0)) {
        throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
      }
      if (options.rect.y !== void 0 && (!Number.isInteger(options.rect.y) || options.rect.y < 0)) {
        throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
      }
      if (options.rect.width !== void 0 && (!Number.isInteger(options.rect.width) || options.rect.width < 0)) {
        throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
      }
      if (options.rect.height !== void 0 && (!Number.isInteger(options.rect.height) || options.rect.height < 0)) {
        throw new TypeError("options.rect.height, when provided, must be a non-negative integer.");
      }
    }
  };
  var createDefaultPlaneLayout = (format, codedWidth, codedHeight) => {
    const planes = getPlaneConfigs(format);
    const layouts = [];
    let currentOffset = 0;
    for (const plane of planes) {
      const planeWidth = Math.ceil(codedWidth / plane.widthDivisor);
      const planeHeight = Math.ceil(codedHeight / plane.heightDivisor);
      const stride = planeWidth * plane.sampleBytes;
      const planeSize = stride * planeHeight;
      layouts.push({
        offset: currentOffset,
        stride
      });
      currentOffset += planeSize;
    }
    return layouts;
  };
  var getPlaneConfigs = (format) => {
    const yuv = (yBytes, uvBytes, subX, subY, hasAlpha) => {
      const configs = [
        { sampleBytes: yBytes, widthDivisor: 1, heightDivisor: 1 },
        { sampleBytes: uvBytes, widthDivisor: subX, heightDivisor: subY },
        { sampleBytes: uvBytes, widthDivisor: subX, heightDivisor: subY }
      ];
      if (hasAlpha) {
        configs.push({ sampleBytes: yBytes, widthDivisor: 1, heightDivisor: 1 });
      }
      return configs;
    };
    switch (format) {
      case "I420":
        return yuv(1, 1, 2, 2, false);
      case "I420P10":
      case "I420P12":
        return yuv(2, 2, 2, 2, false);
      case "I420A":
        return yuv(1, 1, 2, 2, true);
      case "I420AP10":
      case "I420AP12":
        return yuv(2, 2, 2, 2, true);
      case "I422":
        return yuv(1, 1, 2, 1, false);
      case "I422P10":
      case "I422P12":
        return yuv(2, 2, 2, 1, false);
      case "I422A":
        return yuv(1, 1, 2, 1, true);
      case "I422AP10":
      case "I422AP12":
        return yuv(2, 2, 2, 1, true);
      case "I444":
        return yuv(1, 1, 1, 1, false);
      case "I444P10":
      case "I444P12":
        return yuv(2, 2, 1, 1, false);
      case "I444A":
        return yuv(1, 1, 1, 1, true);
      case "I444AP10":
      case "I444AP12":
        return yuv(2, 2, 1, 1, true);
      case "NV12":
        return [
          { sampleBytes: 1, widthDivisor: 1, heightDivisor: 1 },
          { sampleBytes: 2, widthDivisor: 2, heightDivisor: 2 }
          // Interleaved U and V
        ];
      case "RGBA":
      case "RGBX":
      case "BGRA":
      case "BGRX":
        return [
          { sampleBytes: 4, widthDivisor: 1, heightDivisor: 1 }
        ];
      default:
        assertNever(format);
        assert(false);
    }
  };
  var AUDIO_SAMPLE_FORMATS = /* @__PURE__ */ new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
  var AudioSample = class _AudioSample {
    /** The presentation timestamp of the sample in microseconds. */
    get microsecondTimestamp() {
      return Math.trunc(SECOND_TO_MICROSECOND_FACTOR * this.timestamp);
    }
    /** The duration of the sample in microseconds. */
    get microsecondDuration() {
      return Math.trunc(SECOND_TO_MICROSECOND_FACTOR * this.duration);
    }
    /**
     * Creates a new {@link AudioSample}, either from an existing
     * [`AudioData`](https://developer.mozilla.org/en-US/docs/Web/API/AudioData) or from raw bytes specified in
     * {@link AudioSampleInit}.
     */
    constructor(init) {
      this._closed = false;
      if (isAudioData(init)) {
        if (init.format === null) {
          throw new TypeError("AudioData with null format is not supported.");
        }
        this._data = init;
        this.format = init.format;
        this.sampleRate = init.sampleRate;
        this.numberOfFrames = init.numberOfFrames;
        this.numberOfChannels = init.numberOfChannels;
        this.timestamp = init.timestamp / 1e6;
        this.duration = init.numberOfFrames / init.sampleRate;
      } else {
        if (!init || typeof init !== "object") {
          throw new TypeError("Invalid AudioDataInit: must be an object.");
        }
        if (!AUDIO_SAMPLE_FORMATS.has(init.format)) {
          throw new TypeError("Invalid AudioDataInit: invalid format.");
        }
        if (!Number.isFinite(init.sampleRate) || init.sampleRate <= 0) {
          throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
        }
        if (!Number.isInteger(init.numberOfChannels) || init.numberOfChannels === 0) {
          throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
        }
        if (!Number.isFinite(init?.timestamp)) {
          throw new TypeError("init.timestamp must be a number.");
        }
        const numberOfFrames = init.data.byteLength / (getBytesPerSample(init.format) * init.numberOfChannels);
        if (!Number.isInteger(numberOfFrames)) {
          throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
        }
        this.format = init.format;
        this.sampleRate = init.sampleRate;
        this.numberOfFrames = numberOfFrames;
        this.numberOfChannels = init.numberOfChannels;
        this.timestamp = init.timestamp;
        this.duration = numberOfFrames / init.sampleRate;
        let dataBuffer;
        if (init.data instanceof ArrayBuffer) {
          dataBuffer = new Uint8Array(init.data);
        } else if (ArrayBuffer.isView(init.data)) {
          dataBuffer = new Uint8Array(init.data.buffer, init.data.byteOffset, init.data.byteLength);
        } else {
          throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
        }
        const expectedSize = this.numberOfFrames * this.numberOfChannels * getBytesPerSample(this.format);
        if (dataBuffer.byteLength < expectedSize) {
          throw new TypeError("Invalid AudioDataInit: insufficient data size.");
        }
        this._data = dataBuffer;
      }
      finalizationRegistry?.register(this, { type: "audio", data: this._data }, this);
    }
    /** Returns the number of bytes required to hold the audio sample's data as specified by the given options. */
    allocationSize(options) {
      if (!options || typeof options !== "object") {
        throw new TypeError("options must be an object.");
      }
      if (!Number.isInteger(options.planeIndex) || options.planeIndex < 0) {
        throw new TypeError("planeIndex must be a non-negative integer.");
      }
      if (options.format !== void 0 && !AUDIO_SAMPLE_FORMATS.has(options.format)) {
        throw new TypeError("Invalid format.");
      }
      if (options.frameOffset !== void 0 && (!Number.isInteger(options.frameOffset) || options.frameOffset < 0)) {
        throw new TypeError("frameOffset must be a non-negative integer.");
      }
      if (options.frameCount !== void 0 && (!Number.isInteger(options.frameCount) || options.frameCount < 0)) {
        throw new TypeError("frameCount must be a non-negative integer.");
      }
      if (this._closed) {
        throw new Error("AudioSample is closed.");
      }
      const destFormat = options.format ?? this.format;
      const frameOffset = options.frameOffset ?? 0;
      if (frameOffset >= this.numberOfFrames) {
        throw new RangeError("frameOffset out of range");
      }
      const copyFrameCount = options.frameCount !== void 0 ? options.frameCount : this.numberOfFrames - frameOffset;
      if (copyFrameCount > this.numberOfFrames - frameOffset) {
        throw new RangeError("frameCount out of range");
      }
      const bytesPerSample = getBytesPerSample(destFormat);
      const isPlanar = formatIsPlanar(destFormat);
      if (isPlanar && options.planeIndex >= this.numberOfChannels) {
        throw new RangeError("planeIndex out of range");
      }
      if (!isPlanar && options.planeIndex !== 0) {
        throw new RangeError("planeIndex out of range");
      }
      const elementCount = isPlanar ? copyFrameCount : copyFrameCount * this.numberOfChannels;
      return elementCount * bytesPerSample;
    }
    /** Copies the audio sample's data to an ArrayBuffer or ArrayBufferView as specified by the given options. */
    copyTo(destination, options) {
      if (!isAllowSharedBufferSource(destination)) {
        throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
      }
      if (!options || typeof options !== "object") {
        throw new TypeError("options must be an object.");
      }
      if (!Number.isInteger(options.planeIndex) || options.planeIndex < 0) {
        throw new TypeError("planeIndex must be a non-negative integer.");
      }
      if (options.format !== void 0 && !AUDIO_SAMPLE_FORMATS.has(options.format)) {
        throw new TypeError("Invalid format.");
      }
      if (options.frameOffset !== void 0 && (!Number.isInteger(options.frameOffset) || options.frameOffset < 0)) {
        throw new TypeError("frameOffset must be a non-negative integer.");
      }
      if (options.frameCount !== void 0 && (!Number.isInteger(options.frameCount) || options.frameCount < 0)) {
        throw new TypeError("frameCount must be a non-negative integer.");
      }
      if (this._closed) {
        throw new Error("AudioSample is closed.");
      }
      const { planeIndex, format, frameCount: optFrameCount, frameOffset: optFrameOffset } = options;
      const srcFormat = this.format;
      const destFormat = format ?? this.format;
      if (!destFormat)
        throw new Error("Destination format not determined");
      const numFrames = this.numberOfFrames;
      const numChannels = this.numberOfChannels;
      const frameOffset = optFrameOffset ?? 0;
      if (frameOffset >= numFrames) {
        throw new RangeError("frameOffset out of range");
      }
      const copyFrameCount = optFrameCount !== void 0 ? optFrameCount : numFrames - frameOffset;
      if (copyFrameCount > numFrames - frameOffset) {
        throw new RangeError("frameCount out of range");
      }
      const destBytesPerSample = getBytesPerSample(destFormat);
      const destIsPlanar = formatIsPlanar(destFormat);
      if (destIsPlanar && planeIndex >= numChannels) {
        throw new RangeError("planeIndex out of range");
      }
      if (!destIsPlanar && planeIndex !== 0) {
        throw new RangeError("planeIndex out of range");
      }
      const destElementCount = destIsPlanar ? copyFrameCount : copyFrameCount * numChannels;
      const requiredSize = destElementCount * destBytesPerSample;
      if (destination.byteLength < requiredSize) {
        throw new RangeError("Destination buffer is too small");
      }
      const destView = toDataView(destination);
      const writeFn = getWriteFunction(destFormat);
      if (isAudioData(this._data)) {
        if (isWebKit() && numChannels > 2 && destFormat !== srcFormat) {
          doAudioDataCopyToWebKitWorkaround(this._data, destView, srcFormat, destFormat, numChannels, planeIndex, frameOffset, copyFrameCount);
        } else {
          this._data.copyTo(destination, {
            planeIndex,
            frameOffset,
            frameCount: copyFrameCount,
            format: destFormat
          });
        }
      } else {
        const uint8Data = this._data;
        const srcView = toDataView(uint8Data);
        const readFn = getReadFunction(srcFormat);
        const srcBytesPerSample = getBytesPerSample(srcFormat);
        const srcIsPlanar = formatIsPlanar(srcFormat);
        for (let i = 0; i < copyFrameCount; i++) {
          if (destIsPlanar) {
            const destOffset = i * destBytesPerSample;
            let srcOffset;
            if (srcIsPlanar) {
              srcOffset = (planeIndex * numFrames + (i + frameOffset)) * srcBytesPerSample;
            } else {
              srcOffset = ((i + frameOffset) * numChannels + planeIndex) * srcBytesPerSample;
            }
            const normalized = readFn(srcView, srcOffset);
            writeFn(destView, destOffset, normalized);
          } else {
            for (let ch = 0; ch < numChannels; ch++) {
              const destIndex = i * numChannels + ch;
              const destOffset = destIndex * destBytesPerSample;
              let srcOffset;
              if (srcIsPlanar) {
                srcOffset = (ch * numFrames + (i + frameOffset)) * srcBytesPerSample;
              } else {
                srcOffset = ((i + frameOffset) * numChannels + ch) * srcBytesPerSample;
              }
              const normalized = readFn(srcView, srcOffset);
              writeFn(destView, destOffset, normalized);
            }
          }
        }
      }
    }
    /** Clones this audio sample. */
    clone() {
      if (this._closed) {
        throw new Error("AudioSample is closed.");
      }
      if (isAudioData(this._data)) {
        const sample = new _AudioSample(this._data.clone());
        sample.setTimestamp(this.timestamp);
        return sample;
      } else {
        return new _AudioSample({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        });
      }
    }
    /**
     * Closes this audio sample, releasing held resources. Audio samples should be closed as soon as they are not
     * needed anymore.
     */
    close() {
      if (this._closed) {
        return;
      }
      finalizationRegistry?.unregister(this);
      if (isAudioData(this._data)) {
        this._data.close();
      } else {
        this._data = new Uint8Array(0);
      }
      this._closed = true;
    }
    /**
     * Converts this audio sample to an AudioData for use with the WebCodecs API. The AudioData returned by this
     * method *must* be closed separately from this audio sample.
     */
    toAudioData() {
      if (this._closed) {
        throw new Error("AudioSample is closed.");
      }
      if (isAudioData(this._data)) {
        if (this._data.timestamp === this.microsecondTimestamp) {
          return this._data.clone();
        } else {
          if (formatIsPlanar(this.format)) {
            const size = this.allocationSize({ planeIndex: 0, format: this.format });
            const data = new ArrayBuffer(size * this.numberOfChannels);
            for (let i = 0; i < this.numberOfChannels; i++) {
              this.copyTo(new Uint8Array(data, i * size, size), { planeIndex: i, format: this.format });
            }
            return new AudioData({
              format: this.format,
              sampleRate: this.sampleRate,
              numberOfFrames: this.numberOfFrames,
              numberOfChannels: this.numberOfChannels,
              timestamp: this.microsecondTimestamp,
              data
            });
          } else {
            const data = new ArrayBuffer(this.allocationSize({ planeIndex: 0, format: this.format }));
            this.copyTo(data, { planeIndex: 0, format: this.format });
            return new AudioData({
              format: this.format,
              sampleRate: this.sampleRate,
              numberOfFrames: this.numberOfFrames,
              numberOfChannels: this.numberOfChannels,
              timestamp: this.microsecondTimestamp,
              data
            });
          }
        }
      } else {
        return new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
          // In the case of SharedArrayBuffer, convert to ArrayBuffer
        });
      }
    }
    /** Convert this audio sample to an AudioBuffer for use with the Web Audio API. */
    toAudioBuffer() {
      if (this._closed) {
        throw new Error("AudioSample is closed.");
      }
      const audioBuffer = new AudioBuffer({
        numberOfChannels: this.numberOfChannels,
        length: this.numberOfFrames,
        sampleRate: this.sampleRate
      });
      const dataBytes = new Float32Array(this.allocationSize({ planeIndex: 0, format: "f32-planar" }) / 4);
      for (let i = 0; i < this.numberOfChannels; i++) {
        this.copyTo(dataBytes, { planeIndex: i, format: "f32-planar" });
        audioBuffer.copyToChannel(dataBytes, i);
      }
      return audioBuffer;
    }
    /** Sets the presentation timestamp of this audio sample, in seconds. */
    setTimestamp(newTimestamp) {
      if (!Number.isFinite(newTimestamp)) {
        throw new TypeError("newTimestamp must be a number.");
      }
      this.timestamp = newTimestamp;
    }
    /** Calls `.close()`. */
    [Symbol.dispose]() {
      this.close();
    }
    /** @internal */
    static *_fromAudioBuffer(audioBuffer, timestamp) {
      if (!(audioBuffer instanceof AudioBuffer)) {
        throw new TypeError("audioBuffer must be an AudioBuffer.");
      }
      const MAX_FLOAT_COUNT = 48e3 * 5;
      const numberOfChannels = audioBuffer.numberOfChannels;
      const sampleRate = audioBuffer.sampleRate;
      const totalFrames = audioBuffer.length;
      const maxFramesPerChunk = Math.floor(MAX_FLOAT_COUNT / numberOfChannels);
      let currentRelativeFrame = 0;
      let remainingFrames = totalFrames;
      while (remainingFrames > 0) {
        const framesToCopy = Math.min(maxFramesPerChunk, remainingFrames);
        const chunkData = new Float32Array(numberOfChannels * framesToCopy);
        for (let channel = 0; channel < numberOfChannels; channel++) {
          audioBuffer.copyFromChannel(chunkData.subarray(channel * framesToCopy, (channel + 1) * framesToCopy), channel, currentRelativeFrame);
        }
        yield new _AudioSample({
          format: "f32-planar",
          sampleRate,
          numberOfFrames: framesToCopy,
          numberOfChannels,
          timestamp: timestamp + currentRelativeFrame / sampleRate,
          data: chunkData
        });
        currentRelativeFrame += framesToCopy;
        remainingFrames -= framesToCopy;
      }
    }
    /**
     * Creates AudioSamples from an AudioBuffer, starting at the given timestamp in seconds. Typically creates exactly
     * one sample, but may create multiple if the AudioBuffer is exceedingly large.
     */
    static fromAudioBuffer(audioBuffer, timestamp) {
      if (!(audioBuffer instanceof AudioBuffer)) {
        throw new TypeError("audioBuffer must be an AudioBuffer.");
      }
      const MAX_FLOAT_COUNT = 48e3 * 5;
      const numberOfChannels = audioBuffer.numberOfChannels;
      const sampleRate = audioBuffer.sampleRate;
      const totalFrames = audioBuffer.length;
      const maxFramesPerChunk = Math.floor(MAX_FLOAT_COUNT / numberOfChannels);
      let currentRelativeFrame = 0;
      let remainingFrames = totalFrames;
      const result = [];
      while (remainingFrames > 0) {
        const framesToCopy = Math.min(maxFramesPerChunk, remainingFrames);
        const chunkData = new Float32Array(numberOfChannels * framesToCopy);
        for (let channel = 0; channel < numberOfChannels; channel++) {
          audioBuffer.copyFromChannel(chunkData.subarray(channel * framesToCopy, (channel + 1) * framesToCopy), channel, currentRelativeFrame);
        }
        const audioSample = new _AudioSample({
          format: "f32-planar",
          sampleRate,
          numberOfFrames: framesToCopy,
          numberOfChannels,
          timestamp: timestamp + currentRelativeFrame / sampleRate,
          data: chunkData
        });
        result.push(audioSample);
        currentRelativeFrame += framesToCopy;
        remainingFrames -= framesToCopy;
      }
      return result;
    }
  };
  var getBytesPerSample = (format) => {
    switch (format) {
      case "u8":
      case "u8-planar":
        return 1;
      case "s16":
      case "s16-planar":
        return 2;
      case "s32":
      case "s32-planar":
        return 4;
      case "f32":
      case "f32-planar":
        return 4;
      default:
        throw new Error("Unknown AudioSampleFormat");
    }
  };
  var formatIsPlanar = (format) => {
    switch (format) {
      case "u8-planar":
      case "s16-planar":
      case "s32-planar":
      case "f32-planar":
        return true;
      default:
        return false;
    }
  };
  var getReadFunction = (format) => {
    switch (format) {
      case "u8":
      case "u8-planar":
        return (view2, offset) => (view2.getUint8(offset) - 128) / 128;
      case "s16":
      case "s16-planar":
        return (view2, offset) => view2.getInt16(offset, true) / 32768;
      case "s32":
      case "s32-planar":
        return (view2, offset) => view2.getInt32(offset, true) / 2147483648;
      case "f32":
      case "f32-planar":
        return (view2, offset) => view2.getFloat32(offset, true);
    }
  };
  var getWriteFunction = (format) => {
    switch (format) {
      case "u8":
      case "u8-planar":
        return (view2, offset, value) => view2.setUint8(offset, clamp((value + 1) * 127.5, 0, 255));
      case "s16":
      case "s16-planar":
        return (view2, offset, value) => view2.setInt16(offset, clamp(Math.round(value * 32767), -32768, 32767), true);
      case "s32":
      case "s32-planar":
        return (view2, offset, value) => view2.setInt32(offset, clamp(Math.round(value * 2147483647), -2147483648, 2147483647), true);
      case "f32":
      case "f32-planar":
        return (view2, offset, value) => view2.setFloat32(offset, value, true);
    }
  };
  var isAudioData = (x) => {
    return typeof AudioData !== "undefined" && x instanceof AudioData;
  };
  var doAudioDataCopyToWebKitWorkaround = (audioData, destView, srcFormat, destFormat, numChannels, planeIndex, frameOffset, copyFrameCount) => {
    const readFn = getReadFunction(srcFormat);
    const writeFn = getWriteFunction(destFormat);
    const srcBytesPerSample = getBytesPerSample(srcFormat);
    const destBytesPerSample = getBytesPerSample(destFormat);
    const srcIsPlanar = formatIsPlanar(srcFormat);
    const destIsPlanar = formatIsPlanar(destFormat);
    if (destIsPlanar) {
      if (srcIsPlanar) {
        const data = new ArrayBuffer(copyFrameCount * srcBytesPerSample);
        const dataView = toDataView(data);
        audioData.copyTo(data, {
          planeIndex,
          frameOffset,
          frameCount: copyFrameCount,
          format: srcFormat
        });
        for (let i = 0; i < copyFrameCount; i++) {
          const srcOffset = i * srcBytesPerSample;
          const destOffset = i * destBytesPerSample;
          const sample = readFn(dataView, srcOffset);
          writeFn(destView, destOffset, sample);
        }
      } else {
        const data = new ArrayBuffer(copyFrameCount * numChannels * srcBytesPerSample);
        const dataView = toDataView(data);
        audioData.copyTo(data, {
          planeIndex: 0,
          frameOffset,
          frameCount: copyFrameCount,
          format: srcFormat
        });
        for (let i = 0; i < copyFrameCount; i++) {
          const srcOffset = (i * numChannels + planeIndex) * srcBytesPerSample;
          const destOffset = i * destBytesPerSample;
          const sample = readFn(dataView, srcOffset);
          writeFn(destView, destOffset, sample);
        }
      }
    } else {
      if (srcIsPlanar) {
        const planeSize = copyFrameCount * srcBytesPerSample;
        const data = new ArrayBuffer(planeSize);
        const dataView = toDataView(data);
        for (let ch = 0; ch < numChannels; ch++) {
          audioData.copyTo(data, {
            planeIndex: ch,
            frameOffset,
            frameCount: copyFrameCount,
            format: srcFormat
          });
          for (let i = 0; i < copyFrameCount; i++) {
            const srcOffset = i * srcBytesPerSample;
            const destOffset = (i * numChannels + ch) * destBytesPerSample;
            const sample = readFn(dataView, srcOffset);
            writeFn(destView, destOffset, sample);
          }
        }
      } else {
        const data = new ArrayBuffer(copyFrameCount * numChannels * srcBytesPerSample);
        const dataView = toDataView(data);
        audioData.copyTo(data, {
          planeIndex: 0,
          frameOffset,
          frameCount: copyFrameCount,
          format: srcFormat
        });
        for (let i = 0; i < copyFrameCount; i++) {
          for (let ch = 0; ch < numChannels; ch++) {
            const idx = i * numChannels + ch;
            const srcOffset = idx * srcBytesPerSample;
            const destOffset = idx * destBytesPerSample;
            const sample = readFn(dataView, srcOffset);
            writeFn(destView, destOffset, sample);
          }
        }
      }
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/isobmff/isobmff-misc.js
  var buildIsobmffMimeType = (info) => {
    const base = info.hasVideo ? "video/" : info.hasAudio ? "audio/" : "application/";
    let string = base + (info.isQuickTime ? "quicktime" : "mp4");
    if (info.codecStrings.length > 0) {
      const uniqueCodecMimeTypes = [...new Set(info.codecStrings)];
      string += `; codecs="${uniqueCodecMimeTypes.join(", ")}"`;
    }
    return string;
  };

  // ../../node_modules/mediabunny/dist/modules/src/isobmff/isobmff-reader.js
  var MIN_BOX_HEADER_SIZE = 8;
  var MAX_BOX_HEADER_SIZE = 16;

  // ../../node_modules/mediabunny/dist/modules/src/matroska/ebml.js
  var EBMLFloat32 = class {
    constructor(value) {
      this.value = value;
    }
  };
  var EBMLFloat64 = class {
    constructor(value) {
      this.value = value;
    }
  };
  var EBMLSignedInt = class {
    constructor(value) {
      this.value = value;
    }
  };
  var EBMLUnicodeString = class {
    constructor(value) {
      this.value = value;
    }
  };
  var EBMLId;
  (function(EBMLId2) {
    EBMLId2[EBMLId2["EBML"] = 440786851] = "EBML";
    EBMLId2[EBMLId2["EBMLVersion"] = 17030] = "EBMLVersion";
    EBMLId2[EBMLId2["EBMLReadVersion"] = 17143] = "EBMLReadVersion";
    EBMLId2[EBMLId2["EBMLMaxIDLength"] = 17138] = "EBMLMaxIDLength";
    EBMLId2[EBMLId2["EBMLMaxSizeLength"] = 17139] = "EBMLMaxSizeLength";
    EBMLId2[EBMLId2["DocType"] = 17026] = "DocType";
    EBMLId2[EBMLId2["DocTypeVersion"] = 17031] = "DocTypeVersion";
    EBMLId2[EBMLId2["DocTypeReadVersion"] = 17029] = "DocTypeReadVersion";
    EBMLId2[EBMLId2["Void"] = 236] = "Void";
    EBMLId2[EBMLId2["Segment"] = 408125543] = "Segment";
    EBMLId2[EBMLId2["SeekHead"] = 290298740] = "SeekHead";
    EBMLId2[EBMLId2["Seek"] = 19899] = "Seek";
    EBMLId2[EBMLId2["SeekID"] = 21419] = "SeekID";
    EBMLId2[EBMLId2["SeekPosition"] = 21420] = "SeekPosition";
    EBMLId2[EBMLId2["Duration"] = 17545] = "Duration";
    EBMLId2[EBMLId2["Info"] = 357149030] = "Info";
    EBMLId2[EBMLId2["TimestampScale"] = 2807729] = "TimestampScale";
    EBMLId2[EBMLId2["MuxingApp"] = 19840] = "MuxingApp";
    EBMLId2[EBMLId2["WritingApp"] = 22337] = "WritingApp";
    EBMLId2[EBMLId2["Tracks"] = 374648427] = "Tracks";
    EBMLId2[EBMLId2["TrackEntry"] = 174] = "TrackEntry";
    EBMLId2[EBMLId2["TrackNumber"] = 215] = "TrackNumber";
    EBMLId2[EBMLId2["TrackUID"] = 29637] = "TrackUID";
    EBMLId2[EBMLId2["TrackType"] = 131] = "TrackType";
    EBMLId2[EBMLId2["FlagEnabled"] = 185] = "FlagEnabled";
    EBMLId2[EBMLId2["FlagDefault"] = 136] = "FlagDefault";
    EBMLId2[EBMLId2["FlagForced"] = 21930] = "FlagForced";
    EBMLId2[EBMLId2["FlagOriginal"] = 21934] = "FlagOriginal";
    EBMLId2[EBMLId2["FlagHearingImpaired"] = 21931] = "FlagHearingImpaired";
    EBMLId2[EBMLId2["FlagVisualImpaired"] = 21932] = "FlagVisualImpaired";
    EBMLId2[EBMLId2["FlagCommentary"] = 21935] = "FlagCommentary";
    EBMLId2[EBMLId2["FlagLacing"] = 156] = "FlagLacing";
    EBMLId2[EBMLId2["Name"] = 21358] = "Name";
    EBMLId2[EBMLId2["Language"] = 2274716] = "Language";
    EBMLId2[EBMLId2["LanguageBCP47"] = 2274717] = "LanguageBCP47";
    EBMLId2[EBMLId2["CodecID"] = 134] = "CodecID";
    EBMLId2[EBMLId2["CodecPrivate"] = 25506] = "CodecPrivate";
    EBMLId2[EBMLId2["CodecDelay"] = 22186] = "CodecDelay";
    EBMLId2[EBMLId2["SeekPreRoll"] = 22203] = "SeekPreRoll";
    EBMLId2[EBMLId2["DefaultDuration"] = 2352003] = "DefaultDuration";
    EBMLId2[EBMLId2["Video"] = 224] = "Video";
    EBMLId2[EBMLId2["PixelWidth"] = 176] = "PixelWidth";
    EBMLId2[EBMLId2["PixelHeight"] = 186] = "PixelHeight";
    EBMLId2[EBMLId2["DisplayWidth"] = 21680] = "DisplayWidth";
    EBMLId2[EBMLId2["DisplayHeight"] = 21690] = "DisplayHeight";
    EBMLId2[EBMLId2["DisplayUnit"] = 21682] = "DisplayUnit";
    EBMLId2[EBMLId2["AlphaMode"] = 21440] = "AlphaMode";
    EBMLId2[EBMLId2["Audio"] = 225] = "Audio";
    EBMLId2[EBMLId2["SamplingFrequency"] = 181] = "SamplingFrequency";
    EBMLId2[EBMLId2["Channels"] = 159] = "Channels";
    EBMLId2[EBMLId2["BitDepth"] = 25188] = "BitDepth";
    EBMLId2[EBMLId2["SimpleBlock"] = 163] = "SimpleBlock";
    EBMLId2[EBMLId2["BlockGroup"] = 160] = "BlockGroup";
    EBMLId2[EBMLId2["Block"] = 161] = "Block";
    EBMLId2[EBMLId2["BlockAdditions"] = 30113] = "BlockAdditions";
    EBMLId2[EBMLId2["BlockMore"] = 166] = "BlockMore";
    EBMLId2[EBMLId2["BlockAdditional"] = 165] = "BlockAdditional";
    EBMLId2[EBMLId2["BlockAddID"] = 238] = "BlockAddID";
    EBMLId2[EBMLId2["BlockDuration"] = 155] = "BlockDuration";
    EBMLId2[EBMLId2["ReferenceBlock"] = 251] = "ReferenceBlock";
    EBMLId2[EBMLId2["Cluster"] = 524531317] = "Cluster";
    EBMLId2[EBMLId2["Timestamp"] = 231] = "Timestamp";
    EBMLId2[EBMLId2["Cues"] = 475249515] = "Cues";
    EBMLId2[EBMLId2["CuePoint"] = 187] = "CuePoint";
    EBMLId2[EBMLId2["CueTime"] = 179] = "CueTime";
    EBMLId2[EBMLId2["CueTrackPositions"] = 183] = "CueTrackPositions";
    EBMLId2[EBMLId2["CueTrack"] = 247] = "CueTrack";
    EBMLId2[EBMLId2["CueClusterPosition"] = 241] = "CueClusterPosition";
    EBMLId2[EBMLId2["Colour"] = 21936] = "Colour";
    EBMLId2[EBMLId2["MatrixCoefficients"] = 21937] = "MatrixCoefficients";
    EBMLId2[EBMLId2["TransferCharacteristics"] = 21946] = "TransferCharacteristics";
    EBMLId2[EBMLId2["Primaries"] = 21947] = "Primaries";
    EBMLId2[EBMLId2["Range"] = 21945] = "Range";
    EBMLId2[EBMLId2["Projection"] = 30320] = "Projection";
    EBMLId2[EBMLId2["ProjectionType"] = 30321] = "ProjectionType";
    EBMLId2[EBMLId2["ProjectionPoseRoll"] = 30325] = "ProjectionPoseRoll";
    EBMLId2[EBMLId2["Attachments"] = 423732329] = "Attachments";
    EBMLId2[EBMLId2["AttachedFile"] = 24999] = "AttachedFile";
    EBMLId2[EBMLId2["FileDescription"] = 18046] = "FileDescription";
    EBMLId2[EBMLId2["FileName"] = 18030] = "FileName";
    EBMLId2[EBMLId2["FileMediaType"] = 18016] = "FileMediaType";
    EBMLId2[EBMLId2["FileData"] = 18012] = "FileData";
    EBMLId2[EBMLId2["FileUID"] = 18094] = "FileUID";
    EBMLId2[EBMLId2["Chapters"] = 272869232] = "Chapters";
    EBMLId2[EBMLId2["Tags"] = 307544935] = "Tags";
    EBMLId2[EBMLId2["Tag"] = 29555] = "Tag";
    EBMLId2[EBMLId2["Targets"] = 25536] = "Targets";
    EBMLId2[EBMLId2["TargetTypeValue"] = 26826] = "TargetTypeValue";
    EBMLId2[EBMLId2["TargetType"] = 25546] = "TargetType";
    EBMLId2[EBMLId2["TagTrackUID"] = 25541] = "TagTrackUID";
    EBMLId2[EBMLId2["TagEditionUID"] = 25545] = "TagEditionUID";
    EBMLId2[EBMLId2["TagChapterUID"] = 25540] = "TagChapterUID";
    EBMLId2[EBMLId2["TagAttachmentUID"] = 25542] = "TagAttachmentUID";
    EBMLId2[EBMLId2["SimpleTag"] = 26568] = "SimpleTag";
    EBMLId2[EBMLId2["TagName"] = 17827] = "TagName";
    EBMLId2[EBMLId2["TagLanguage"] = 17530] = "TagLanguage";
    EBMLId2[EBMLId2["TagString"] = 17543] = "TagString";
    EBMLId2[EBMLId2["TagBinary"] = 17541] = "TagBinary";
    EBMLId2[EBMLId2["ContentEncodings"] = 28032] = "ContentEncodings";
    EBMLId2[EBMLId2["ContentEncoding"] = 25152] = "ContentEncoding";
    EBMLId2[EBMLId2["ContentEncodingOrder"] = 20529] = "ContentEncodingOrder";
    EBMLId2[EBMLId2["ContentEncodingScope"] = 20530] = "ContentEncodingScope";
    EBMLId2[EBMLId2["ContentCompression"] = 20532] = "ContentCompression";
    EBMLId2[EBMLId2["ContentCompAlgo"] = 16980] = "ContentCompAlgo";
    EBMLId2[EBMLId2["ContentCompSettings"] = 16981] = "ContentCompSettings";
    EBMLId2[EBMLId2["ContentEncryption"] = 20533] = "ContentEncryption";
  })(EBMLId || (EBMLId = {}));
  var LEVEL_0_EBML_IDS = [
    EBMLId.EBML,
    EBMLId.Segment
  ];
  var LEVEL_1_EBML_IDS = [
    EBMLId.SeekHead,
    EBMLId.Info,
    EBMLId.Cluster,
    EBMLId.Tracks,
    EBMLId.Cues,
    EBMLId.Attachments,
    EBMLId.Chapters,
    EBMLId.Tags
  ];
  var LEVEL_0_AND_1_EBML_IDS = [
    ...LEVEL_0_EBML_IDS,
    ...LEVEL_1_EBML_IDS
  ];
  var measureUnsignedInt = (value) => {
    if (value < 1 << 8) {
      return 1;
    } else if (value < 1 << 16) {
      return 2;
    } else if (value < 1 << 24) {
      return 3;
    } else if (value < 2 ** 32) {
      return 4;
    } else if (value < 2 ** 40) {
      return 5;
    } else {
      return 6;
    }
  };
  var measureUnsignedBigInt = (value) => {
    if (value < 1n << 8n) {
      return 1;
    } else if (value < 1n << 16n) {
      return 2;
    } else if (value < 1n << 24n) {
      return 3;
    } else if (value < 1n << 32n) {
      return 4;
    } else if (value < 1n << 40n) {
      return 5;
    } else if (value < 1n << 48n) {
      return 6;
    } else if (value < 1n << 56n) {
      return 7;
    } else {
      return 8;
    }
  };
  var measureSignedInt = (value) => {
    if (value >= -(1 << 6) && value < 1 << 6) {
      return 1;
    } else if (value >= -(1 << 13) && value < 1 << 13) {
      return 2;
    } else if (value >= -(1 << 20) && value < 1 << 20) {
      return 3;
    } else if (value >= -(1 << 27) && value < 1 << 27) {
      return 4;
    } else if (value >= -(2 ** 34) && value < 2 ** 34) {
      return 5;
    } else {
      return 6;
    }
  };
  var measureVarInt = (value) => {
    if (value < (1 << 7) - 1) {
      return 1;
    } else if (value < (1 << 14) - 1) {
      return 2;
    } else if (value < (1 << 21) - 1) {
      return 3;
    } else if (value < (1 << 28) - 1) {
      return 4;
    } else if (value < 2 ** 35 - 1) {
      return 5;
    } else if (value < 2 ** 42 - 1) {
      return 6;
    } else {
      throw new Error("EBML varint size not supported " + value);
    }
  };
  var EBMLWriter = class {
    constructor(writer) {
      this.writer = writer;
      this.helper = new Uint8Array(8);
      this.helperView = new DataView(this.helper.buffer);
      this.offsets = /* @__PURE__ */ new WeakMap();
      this.dataOffsets = /* @__PURE__ */ new WeakMap();
    }
    writeByte(value) {
      this.helperView.setUint8(0, value);
      this.writer.write(this.helper.subarray(0, 1));
    }
    writeFloat32(value) {
      this.helperView.setFloat32(0, value, false);
      this.writer.write(this.helper.subarray(0, 4));
    }
    writeFloat64(value) {
      this.helperView.setFloat64(0, value, false);
      this.writer.write(this.helper);
    }
    writeUnsignedInt(value, width = measureUnsignedInt(value)) {
      let pos = 0;
      switch (width) {
        case 6:
          this.helperView.setUint8(pos++, value / 2 ** 40 | 0);
        // eslint-disable-next-line no-fallthrough
        case 5:
          this.helperView.setUint8(pos++, value / 2 ** 32 | 0);
        // eslint-disable-next-line no-fallthrough
        case 4:
          this.helperView.setUint8(pos++, value >> 24);
        // eslint-disable-next-line no-fallthrough
        case 3:
          this.helperView.setUint8(pos++, value >> 16);
        // eslint-disable-next-line no-fallthrough
        case 2:
          this.helperView.setUint8(pos++, value >> 8);
        // eslint-disable-next-line no-fallthrough
        case 1:
          this.helperView.setUint8(pos++, value);
          break;
        default:
          throw new Error("Bad unsigned int size " + width);
      }
      this.writer.write(this.helper.subarray(0, pos));
    }
    writeUnsignedBigInt(value, width = measureUnsignedBigInt(value)) {
      let pos = 0;
      for (let i = width - 1; i >= 0; i--) {
        this.helperView.setUint8(pos++, Number(value >> BigInt(i * 8) & 0xffn));
      }
      this.writer.write(this.helper.subarray(0, pos));
    }
    writeSignedInt(value, width = measureSignedInt(value)) {
      if (value < 0) {
        value += 2 ** (width * 8);
      }
      this.writeUnsignedInt(value, width);
    }
    writeVarInt(value, width = measureVarInt(value)) {
      let pos = 0;
      switch (width) {
        case 1:
          this.helperView.setUint8(pos++, 1 << 7 | value);
          break;
        case 2:
          this.helperView.setUint8(pos++, 1 << 6 | value >> 8);
          this.helperView.setUint8(pos++, value);
          break;
        case 3:
          this.helperView.setUint8(pos++, 1 << 5 | value >> 16);
          this.helperView.setUint8(pos++, value >> 8);
          this.helperView.setUint8(pos++, value);
          break;
        case 4:
          this.helperView.setUint8(pos++, 1 << 4 | value >> 24);
          this.helperView.setUint8(pos++, value >> 16);
          this.helperView.setUint8(pos++, value >> 8);
          this.helperView.setUint8(pos++, value);
          break;
        case 5:
          this.helperView.setUint8(pos++, 1 << 3 | value / 2 ** 32 & 7);
          this.helperView.setUint8(pos++, value >> 24);
          this.helperView.setUint8(pos++, value >> 16);
          this.helperView.setUint8(pos++, value >> 8);
          this.helperView.setUint8(pos++, value);
          break;
        case 6:
          this.helperView.setUint8(pos++, 1 << 2 | value / 2 ** 40 & 3);
          this.helperView.setUint8(pos++, value / 2 ** 32 | 0);
          this.helperView.setUint8(pos++, value >> 24);
          this.helperView.setUint8(pos++, value >> 16);
          this.helperView.setUint8(pos++, value >> 8);
          this.helperView.setUint8(pos++, value);
          break;
        default:
          throw new Error("Bad EBML varint size " + width);
      }
      this.writer.write(this.helper.subarray(0, pos));
    }
    writeAsciiString(str) {
      this.writer.write(new Uint8Array(str.split("").map((x) => x.charCodeAt(0))));
    }
    writeEBML(data) {
      if (data === null)
        return;
      if (data instanceof Uint8Array) {
        this.writer.write(data);
      } else if (Array.isArray(data)) {
        for (const elem of data) {
          this.writeEBML(elem);
        }
      } else {
        this.offsets.set(data, this.writer.getPos());
        this.writeUnsignedInt(data.id);
        if (Array.isArray(data.data)) {
          const sizePos = this.writer.getPos();
          const sizeSize = data.size === -1 ? 1 : data.size ?? 4;
          if (data.size === -1) {
            this.writeByte(255);
          } else {
            this.writer.seek(this.writer.getPos() + sizeSize);
          }
          const startPos = this.writer.getPos();
          this.dataOffsets.set(data, startPos);
          this.writeEBML(data.data);
          if (data.size !== -1) {
            const size = this.writer.getPos() - startPos;
            const endPos = this.writer.getPos();
            this.writer.seek(sizePos);
            this.writeVarInt(size, sizeSize);
            this.writer.seek(endPos);
          }
        } else if (typeof data.data === "number") {
          const size = data.size ?? measureUnsignedInt(data.data);
          this.writeVarInt(size);
          this.writeUnsignedInt(data.data, size);
        } else if (typeof data.data === "bigint") {
          const size = data.size ?? measureUnsignedBigInt(data.data);
          this.writeVarInt(size);
          this.writeUnsignedBigInt(data.data, size);
        } else if (typeof data.data === "string") {
          this.writeVarInt(data.data.length);
          this.writeAsciiString(data.data);
        } else if (data.data instanceof Uint8Array) {
          this.writeVarInt(data.data.byteLength, data.size);
          this.writer.write(data.data);
        } else if (data.data instanceof EBMLFloat32) {
          this.writeVarInt(4);
          this.writeFloat32(data.data.value);
        } else if (data.data instanceof EBMLFloat64) {
          this.writeVarInt(8);
          this.writeFloat64(data.data.value);
        } else if (data.data instanceof EBMLSignedInt) {
          const size = data.size ?? measureSignedInt(data.data.value);
          this.writeVarInt(size);
          this.writeSignedInt(data.data.value, size);
        } else if (data.data instanceof EBMLUnicodeString) {
          const bytes2 = textEncoder.encode(data.data.value);
          this.writeVarInt(bytes2.length);
          this.writer.write(bytes2);
        } else {
          assertNever(data.data);
        }
      }
    }
  };
  var MAX_VAR_INT_SIZE = 8;
  var MAX_HEADER_SIZE = 2 * MAX_VAR_INT_SIZE;
  var CODEC_STRING_MAP = {
    "avc": "V_MPEG4/ISO/AVC",
    "hevc": "V_MPEGH/ISO/HEVC",
    "vp8": "V_VP8",
    "vp9": "V_VP9",
    "av1": "V_AV1",
    "aac": "A_AAC",
    "mp3": "A_MPEG/L3",
    "opus": "A_OPUS",
    "vorbis": "A_VORBIS",
    "flac": "A_FLAC",
    "ac3": "A_AC3",
    "eac3": "A_EAC3",
    "pcm-u8": "A_PCM/INT/LIT",
    "pcm-s16": "A_PCM/INT/LIT",
    "pcm-s16be": "A_PCM/INT/BIG",
    "pcm-s24": "A_PCM/INT/LIT",
    "pcm-s24be": "A_PCM/INT/BIG",
    "pcm-s32": "A_PCM/INT/LIT",
    "pcm-s32be": "A_PCM/INT/BIG",
    "pcm-f32": "A_PCM/FLOAT/IEEE",
    "pcm-f64": "A_PCM/FLOAT/IEEE",
    "webvtt": "S_TEXT/WEBVTT"
  };

  // ../../node_modules/mediabunny/dist/modules/src/matroska/matroska-misc.js
  var buildMatroskaMimeType = (info) => {
    const base = info.hasVideo ? "video/" : info.hasAudio ? "audio/" : "application/";
    let string = base + (info.isWebM ? "webm" : "x-matroska");
    if (info.codecStrings.length > 0) {
      const uniqueCodecMimeTypes = [...new Set(info.codecStrings.filter(Boolean))];
      string += `; codecs="${uniqueCodecMimeTypes.join(", ")}"`;
    }
    return string;
  };

  // ../../node_modules/mediabunny/dist/modules/src/adts/adts-reader.js
  var MIN_ADTS_FRAME_HEADER_SIZE = 7;
  var MAX_ADTS_FRAME_HEADER_SIZE = 9;
  var readAdtsFrameHeader = (slice) => {
    const startPos = slice.filePos;
    const bytes2 = readBytes(slice, 9);
    const bitstream = new Bitstream(bytes2);
    const syncword = bitstream.readBits(12);
    if (syncword !== 4095) {
      return null;
    }
    bitstream.skipBits(1);
    const layer = bitstream.readBits(2);
    if (layer !== 0) {
      return null;
    }
    const protectionAbsence = bitstream.readBits(1);
    const objectType = bitstream.readBits(2) + 1;
    const samplingFrequencyIndex = bitstream.readBits(4);
    if (samplingFrequencyIndex === 15) {
      return null;
    }
    bitstream.skipBits(1);
    const channelConfiguration = bitstream.readBits(3);
    if (channelConfiguration === 0) {
      throw new Error("ADTS frames with channel configuration 0 are not supported.");
    }
    bitstream.skipBits(1);
    bitstream.skipBits(1);
    bitstream.skipBits(1);
    bitstream.skipBits(1);
    const frameLength = bitstream.readBits(13);
    bitstream.skipBits(11);
    const numberOfAacFrames = bitstream.readBits(2) + 1;
    if (numberOfAacFrames !== 1) {
      throw new Error("ADTS frames with more than one AAC frame are not supported.");
    }
    let crcCheck = null;
    if (protectionAbsence === 1) {
      slice.filePos -= 2;
    } else {
      crcCheck = bitstream.readBits(16);
    }
    return {
      objectType,
      samplingFrequencyIndex,
      channelConfiguration,
      frameLength,
      numberOfAacFrames,
      crcCheck,
      startPos
    };
  };

  // ../../node_modules/mediabunny/dist/modules/src/reader.js
  var FileSlice = class _FileSlice {
    constructor(bytes2, view2, offset, start, end) {
      this.bytes = bytes2;
      this.view = view2;
      this.offset = offset;
      this.start = start;
      this.end = end;
      this.bufferPos = start - offset;
    }
    static tempFromBytes(bytes2) {
      return new _FileSlice(bytes2, toDataView(bytes2), 0, 0, bytes2.length);
    }
    get length() {
      return this.end - this.start;
    }
    get filePos() {
      return this.offset + this.bufferPos;
    }
    set filePos(value) {
      this.bufferPos = value - this.offset;
    }
    /** The number of bytes left from the current pos to the end of the slice. */
    get remainingLength() {
      return Math.max(this.end - this.filePos, 0);
    }
    skip(byteCount) {
      this.bufferPos += byteCount;
    }
    /** Creates a new subslice of this slice whose byte range must be contained within this slice. */
    slice(filePos, length = this.end - filePos) {
      if (filePos < this.start || filePos + length > this.end) {
        throw new RangeError("Slicing outside of original slice.");
      }
      return new _FileSlice(this.bytes, this.view, this.offset, filePos, filePos + length);
    }
  };
  var checkIsInRange = (slice, bytesToRead) => {
    if (slice.filePos < slice.start || slice.filePos + bytesToRead > slice.end) {
      throw new RangeError(`Tried reading [${slice.filePos}, ${slice.filePos + bytesToRead}), but slice is [${slice.start}, ${slice.end}). This is likely an internal error, please report it alongside the file that caused it.`);
    }
  };
  var readBytes = (slice, length) => {
    checkIsInRange(slice, length);
    const bytes2 = slice.bytes.subarray(slice.bufferPos, slice.bufferPos + length);
    slice.bufferPos += length;
    return bytes2;
  };

  // ../../node_modules/mediabunny/dist/modules/src/muxer.js
  var Muxer = class {
    constructor(output) {
      this.mutex = new AsyncMutex();
      this.firstMediaStreamTimestamp = null;
      this.trackTimestampInfo = /* @__PURE__ */ new WeakMap();
      this.output = output;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onTrackClose(track) {
    }
    validateAndNormalizeTimestamp(track, timestampInSeconds, isKeyPacket) {
      timestampInSeconds += track.source._timestampOffset;
      let timestampInfo = this.trackTimestampInfo.get(track);
      if (!timestampInfo) {
        if (!isKeyPacket) {
          throw new Error("First packet must be a key packet.");
        }
        timestampInfo = {
          maxTimestamp: timestampInSeconds,
          maxTimestampBeforeLastKeyPacket: timestampInSeconds
        };
        this.trackTimestampInfo.set(track, timestampInfo);
      }
      if (timestampInSeconds < 0) {
        throw new Error(`Timestamps must be non-negative (got ${timestampInSeconds}s).`);
      }
      if (isKeyPacket) {
        timestampInfo.maxTimestampBeforeLastKeyPacket = timestampInfo.maxTimestamp;
      }
      if (timestampInSeconds < timestampInfo.maxTimestampBeforeLastKeyPacket) {
        throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${timestampInSeconds}s, but largest timestamp is ${timestampInfo.maxTimestampBeforeLastKeyPacket}s.`);
      }
      timestampInfo.maxTimestamp = Math.max(timestampInfo.maxTimestamp, timestampInSeconds);
      return timestampInSeconds;
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/subtitles.js
  var inlineTimestampRegex = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
  var timestampRegex = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/;
  var parseSubtitleTimestamp = (string) => {
    const match = timestampRegex.exec(string);
    if (!match)
      throw new Error("Expected match.");
    return 60 * 60 * 1e3 * Number(match[1] || "0") + 60 * 1e3 * Number(match[2]) + 1e3 * Number(match[3]) + Number(match[4]);
  };
  var formatSubtitleTimestamp = (timestamp) => {
    const hours = Math.floor(timestamp / (60 * 60 * 1e3));
    const minutes = Math.floor(timestamp % (60 * 60 * 1e3) / (60 * 1e3));
    const seconds = Math.floor(timestamp % (60 * 1e3) / 1e3);
    const milliseconds = timestamp % 1e3;
    return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0") + "." + milliseconds.toString().padStart(3, "0");
  };

  // ../../node_modules/mediabunny/dist/modules/src/isobmff/isobmff-boxes.js
  var IsobmffBoxWriter = class {
    constructor(writer) {
      this.writer = writer;
      this.helper = new Uint8Array(8);
      this.helperView = new DataView(this.helper.buffer);
      this.offsets = /* @__PURE__ */ new WeakMap();
    }
    writeU32(value) {
      this.helperView.setUint32(0, value, false);
      this.writer.write(this.helper.subarray(0, 4));
    }
    writeU64(value) {
      this.helperView.setUint32(0, Math.floor(value / 2 ** 32), false);
      this.helperView.setUint32(4, value, false);
      this.writer.write(this.helper.subarray(0, 8));
    }
    writeAscii(text) {
      for (let i = 0; i < text.length; i++) {
        this.helperView.setUint8(i % 8, text.charCodeAt(i));
        if (i % 8 === 7)
          this.writer.write(this.helper);
      }
      if (text.length % 8 !== 0) {
        this.writer.write(this.helper.subarray(0, text.length % 8));
      }
    }
    writeBox(box2) {
      this.offsets.set(box2, this.writer.getPos());
      if (box2.contents && !box2.children) {
        this.writeBoxHeader(box2, box2.size ?? box2.contents.byteLength + 8);
        this.writer.write(box2.contents);
      } else {
        const startPos = this.writer.getPos();
        this.writeBoxHeader(box2, 0);
        if (box2.contents)
          this.writer.write(box2.contents);
        if (box2.children) {
          for (const child of box2.children)
            if (child)
              this.writeBox(child);
        }
        const endPos = this.writer.getPos();
        const size = box2.size ?? endPos - startPos;
        this.writer.seek(startPos);
        this.writeBoxHeader(box2, size);
        this.writer.seek(endPos);
      }
    }
    writeBoxHeader(box2, size) {
      this.writeU32(box2.largeSize ? 1 : size);
      this.writeAscii(box2.type);
      if (box2.largeSize)
        this.writeU64(size);
    }
    measureBoxHeader(box2) {
      return 8 + (box2.largeSize ? 8 : 0);
    }
    patchBox(box2) {
      const boxOffset = this.offsets.get(box2);
      assert(boxOffset !== void 0);
      const endPos = this.writer.getPos();
      this.writer.seek(boxOffset);
      this.writeBox(box2);
      this.writer.seek(endPos);
    }
    measureBox(box2) {
      if (box2.contents && !box2.children) {
        const headerSize = this.measureBoxHeader(box2);
        return headerSize + box2.contents.byteLength;
      } else {
        let result = this.measureBoxHeader(box2);
        if (box2.contents)
          result += box2.contents.byteLength;
        if (box2.children) {
          for (const child of box2.children)
            if (child)
              result += this.measureBox(child);
        }
        return result;
      }
    }
  };
  var bytes = /* @__PURE__ */ new Uint8Array(8);
  var view = /* @__PURE__ */ new DataView(bytes.buffer);
  var u8 = (value) => {
    return [(value % 256 + 256) % 256];
  };
  var u16 = (value) => {
    view.setUint16(0, value, false);
    return [bytes[0], bytes[1]];
  };
  var i16 = (value) => {
    view.setInt16(0, value, false);
    return [bytes[0], bytes[1]];
  };
  var u24 = (value) => {
    view.setUint32(0, value, false);
    return [bytes[1], bytes[2], bytes[3]];
  };
  var u32 = (value) => {
    view.setUint32(0, value, false);
    return [bytes[0], bytes[1], bytes[2], bytes[3]];
  };
  var i32 = (value) => {
    view.setInt32(0, value, false);
    return [bytes[0], bytes[1], bytes[2], bytes[3]];
  };
  var u64 = (value) => {
    view.setUint32(0, Math.floor(value / 2 ** 32), false);
    view.setUint32(4, value, false);
    return [bytes[0], bytes[1], bytes[2], bytes[3], bytes[4], bytes[5], bytes[6], bytes[7]];
  };
  var fixed_8_8 = (value) => {
    view.setInt16(0, 2 ** 8 * value, false);
    return [bytes[0], bytes[1]];
  };
  var fixed_16_16 = (value) => {
    view.setInt32(0, 2 ** 16 * value, false);
    return [bytes[0], bytes[1], bytes[2], bytes[3]];
  };
  var fixed_2_30 = (value) => {
    view.setInt32(0, 2 ** 30 * value, false);
    return [bytes[0], bytes[1], bytes[2], bytes[3]];
  };
  var variableUnsignedInt = (value, byteLength) => {
    const bytes2 = [];
    let remaining = value;
    do {
      let byte = remaining & 127;
      remaining >>= 7;
      if (bytes2.length > 0) {
        byte |= 128;
      }
      bytes2.push(byte);
      if (byteLength !== void 0) {
        byteLength--;
      }
    } while (remaining > 0 || byteLength);
    return bytes2.reverse();
  };
  var ascii = (text, nullTerminated = false) => {
    const bytes2 = Array(text.length).fill(null).map((_, i) => text.charCodeAt(i));
    if (nullTerminated)
      bytes2.push(0);
    return bytes2;
  };
  var lastPresentedSample = (samples) => {
    let result = null;
    for (const sample of samples) {
      if (!result || sample.timestamp > result.timestamp) {
        result = sample;
      }
    }
    return result;
  };
  var rotationMatrix = (rotationInDegrees) => {
    const theta = rotationInDegrees * (Math.PI / 180);
    const cosTheta = Math.round(Math.cos(theta));
    const sinTheta = Math.round(Math.sin(theta));
    return [
      cosTheta,
      sinTheta,
      0,
      -sinTheta,
      cosTheta,
      0,
      0,
      0,
      1
    ];
  };
  var IDENTITY_MATRIX = /* @__PURE__ */ rotationMatrix(0);
  var matrixToBytes = (matrix) => {
    return [
      fixed_16_16(matrix[0]),
      fixed_16_16(matrix[1]),
      fixed_2_30(matrix[2]),
      fixed_16_16(matrix[3]),
      fixed_16_16(matrix[4]),
      fixed_2_30(matrix[5]),
      fixed_16_16(matrix[6]),
      fixed_16_16(matrix[7]),
      fixed_2_30(matrix[8])
    ];
  };
  var box = (type, contents, children) => ({
    type,
    contents: contents && new Uint8Array(contents.flat(10)),
    children
  });
  var fullBox = (type, version, flags, contents, children) => box(type, [u8(version), u24(flags), contents ?? []], children);
  var ftyp = (details) => {
    const minorVersion = 512;
    if (details.isQuickTime) {
      return box("ftyp", [
        ascii("qt  "),
        // Major brand
        u32(minorVersion),
        // Minor version
        // Compatible brands
        ascii("qt  ")
      ]);
    }
    if (details.fragmented) {
      return box("ftyp", [
        ascii("iso5"),
        // Major brand
        u32(minorVersion),
        // Minor version
        // Compatible brands
        ascii("iso5"),
        ascii("iso6"),
        ascii("mp41")
      ]);
    }
    return box("ftyp", [
      ascii("isom"),
      // Major brand
      u32(minorVersion),
      // Minor version
      // Compatible brands
      ascii("isom"),
      details.holdsAvc ? ascii("avc1") : [],
      ascii("mp41")
    ]);
  };
  var mdat = (reserveLargeSize) => ({ type: "mdat", largeSize: reserveLargeSize });
  var free = (size) => ({ type: "free", size });
  var moov = (muxer) => box("moov", void 0, [
    mvhd(muxer.creationTime, muxer.trackDatas),
    ...muxer.trackDatas.map((x) => trak(x, muxer.creationTime)),
    muxer.isFragmented ? mvex(muxer.trackDatas) : null,
    udta(muxer)
  ]);
  var mvhd = (creationTime, trackDatas) => {
    const duration = intoTimescale(Math.max(0, ...trackDatas.filter((x) => x.samples.length > 0).map((x) => {
      const lastSample = lastPresentedSample(x.samples);
      return lastSample.timestamp + lastSample.duration;
    })), GLOBAL_TIMESCALE);
    const nextTrackId = Math.max(0, ...trackDatas.map((x) => x.track.id)) + 1;
    const needsU64 = !isU32(creationTime) || !isU32(duration);
    const u32OrU64 = needsU64 ? u64 : u32;
    return fullBox("mvhd", +needsU64, 0, [
      u32OrU64(creationTime),
      // Creation time
      u32OrU64(creationTime),
      // Modification time
      u32(GLOBAL_TIMESCALE),
      // Timescale
      u32OrU64(duration),
      // Duration
      fixed_16_16(1),
      // Preferred rate
      fixed_8_8(1),
      // Preferred volume
      Array(10).fill(0),
      // Reserved
      matrixToBytes(IDENTITY_MATRIX),
      // Matrix
      Array(24).fill(0),
      // Pre-defined
      u32(nextTrackId)
      // Next track ID
    ]);
  };
  var trak = (trackData, creationTime) => {
    const trackMetadata = getTrackMetadata(trackData);
    return box("trak", void 0, [
      tkhd(trackData, creationTime),
      mdia(trackData, creationTime),
      trackMetadata.name !== void 0 ? box("udta", void 0, [
        box("name", [
          ...textEncoder.encode(trackMetadata.name)
        ])
      ]) : null
    ]);
  };
  var tkhd = (trackData, creationTime) => {
    const lastSample = lastPresentedSample(trackData.samples);
    const durationInGlobalTimescale = intoTimescale(lastSample ? lastSample.timestamp + lastSample.duration : 0, GLOBAL_TIMESCALE);
    const needsU64 = !isU32(creationTime) || !isU32(durationInGlobalTimescale);
    const u32OrU64 = needsU64 ? u64 : u32;
    let matrix;
    if (trackData.type === "video") {
      const rotation = trackData.track.metadata.rotation;
      matrix = rotationMatrix(rotation ?? 0);
    } else {
      matrix = IDENTITY_MATRIX;
    }
    let flags = 2;
    if (trackData.track.metadata.disposition?.default !== false) {
      flags |= 1;
    }
    return fullBox("tkhd", +needsU64, flags, [
      u32OrU64(creationTime),
      // Creation time
      u32OrU64(creationTime),
      // Modification time
      u32(trackData.track.id),
      // Track ID
      u32(0),
      // Reserved
      u32OrU64(durationInGlobalTimescale),
      // Duration
      Array(8).fill(0),
      // Reserved
      u16(0),
      // Layer
      u16(trackData.track.id),
      // Alternate group
      fixed_8_8(trackData.type === "audio" ? 1 : 0),
      // Volume
      u16(0),
      // Reserved
      matrixToBytes(matrix),
      // Matrix
      fixed_16_16(trackData.type === "video" ? trackData.info.width : 0),
      // Track width
      fixed_16_16(trackData.type === "video" ? trackData.info.height : 0)
      // Track height
    ]);
  };
  var mdia = (trackData, creationTime) => box("mdia", void 0, [
    mdhd(trackData, creationTime),
    hdlr(true, TRACK_TYPE_TO_COMPONENT_SUBTYPE[trackData.type], TRACK_TYPE_TO_HANDLER_NAME[trackData.type]),
    minf(trackData)
  ]);
  var mdhd = (trackData, creationTime) => {
    const lastSample = lastPresentedSample(trackData.samples);
    const localDuration = intoTimescale(lastSample ? lastSample.timestamp + lastSample.duration : 0, trackData.timescale);
    const needsU64 = !isU32(creationTime) || !isU32(localDuration);
    const u32OrU64 = needsU64 ? u64 : u32;
    return fullBox("mdhd", +needsU64, 0, [
      u32OrU64(creationTime),
      // Creation time
      u32OrU64(creationTime),
      // Modification time
      u32(trackData.timescale),
      // Timescale
      u32OrU64(localDuration),
      // Duration
      u16(getLanguageCodeInt(trackData.track.metadata.languageCode ?? UNDETERMINED_LANGUAGE)),
      // Language
      u16(0)
      // Quality
    ]);
  };
  var TRACK_TYPE_TO_COMPONENT_SUBTYPE = {
    video: "vide",
    audio: "soun",
    subtitle: "text"
  };
  var TRACK_TYPE_TO_HANDLER_NAME = {
    video: "MediabunnyVideoHandler",
    audio: "MediabunnySoundHandler",
    subtitle: "MediabunnyTextHandler"
  };
  var hdlr = (hasComponentType, handlerType, name, manufacturer = "\0\0\0\0") => fullBox("hdlr", 0, 0, [
    hasComponentType ? ascii("mhlr") : u32(0),
    // Component type
    ascii(handlerType),
    // Component subtype
    ascii(manufacturer),
    // Component manufacturer
    u32(0),
    // Component flags
    u32(0),
    // Component flags mask
    ascii(name, true)
    // Component name
  ]);
  var minf = (trackData) => box("minf", void 0, [
    TRACK_TYPE_TO_HEADER_BOX[trackData.type](),
    dinf(),
    stbl(trackData)
  ]);
  var vmhd = () => fullBox("vmhd", 0, 1, [
    u16(0),
    // Graphics mode
    u16(0),
    // Opcolor R
    u16(0),
    // Opcolor G
    u16(0)
    // Opcolor B
  ]);
  var smhd = () => fullBox("smhd", 0, 0, [
    u16(0),
    // Balance
    u16(0)
    // Reserved
  ]);
  var nmhd = () => fullBox("nmhd", 0, 0);
  var TRACK_TYPE_TO_HEADER_BOX = {
    video: vmhd,
    audio: smhd,
    subtitle: nmhd
  };
  var dinf = () => box("dinf", void 0, [
    dref()
  ]);
  var dref = () => fullBox("dref", 0, 0, [
    u32(1)
    // Entry count
  ], [
    url()
  ]);
  var url = () => fullBox("url ", 0, 1);
  var stbl = (trackData) => {
    const needsCtts = trackData.compositionTimeOffsetTable.length > 1 || trackData.compositionTimeOffsetTable.some((x) => x.sampleCompositionTimeOffset !== 0);
    return box("stbl", void 0, [
      stsd(trackData),
      stts(trackData),
      needsCtts ? ctts(trackData) : null,
      needsCtts ? cslg(trackData) : null,
      stsc(trackData),
      stsz(trackData),
      stco(trackData),
      stss(trackData)
    ]);
  };
  var stsd = (trackData) => {
    let sampleDescription;
    if (trackData.type === "video") {
      sampleDescription = videoSampleDescription(videoCodecToBoxName(trackData.track.source._codec, trackData.info.decoderConfig.codec), trackData);
    } else if (trackData.type === "audio") {
      const boxName = audioCodecToBoxName(trackData.track.source._codec, trackData.muxer.isQuickTime);
      assert(boxName);
      sampleDescription = soundSampleDescription(boxName, trackData);
    } else if (trackData.type === "subtitle") {
      sampleDescription = subtitleSampleDescription(SUBTITLE_CODEC_TO_BOX_NAME[trackData.track.source._codec], trackData);
    }
    assert(sampleDescription);
    return fullBox("stsd", 0, 0, [
      u32(1)
      // Entry count
    ], [
      sampleDescription
    ]);
  };
  var videoSampleDescription = (compressionType, trackData) => box(compressionType, [
    Array(6).fill(0),
    // Reserved
    u16(1),
    // Data reference index
    u16(0),
    // Pre-defined
    u16(0),
    // Reserved
    Array(12).fill(0),
    // Pre-defined
    u16(trackData.info.width),
    // Width
    u16(trackData.info.height),
    // Height
    u32(4718592),
    // Horizontal resolution
    u32(4718592),
    // Vertical resolution
    u32(0),
    // Reserved
    u16(1),
    // Frame count
    Array(32).fill(0),
    // Compressor name
    u16(24),
    // Depth
    i16(65535)
    // Pre-defined
  ], [
    VIDEO_CODEC_TO_CONFIGURATION_BOX[trackData.track.source._codec](trackData),
    pasp(trackData),
    colorSpaceIsComplete(trackData.info.decoderConfig.colorSpace) ? colr(trackData) : null
  ]);
  var pasp = (trackData) => {
    if (trackData.info.pixelAspectRatio.num === trackData.info.pixelAspectRatio.den) {
      return null;
    }
    return box("pasp", [
      u32(trackData.info.pixelAspectRatio.num),
      u32(trackData.info.pixelAspectRatio.den)
    ]);
  };
  var colr = (trackData) => box("colr", [
    ascii("nclx"),
    // Colour type
    u16(COLOR_PRIMARIES_MAP[trackData.info.decoderConfig.colorSpace.primaries]),
    // Colour primaries
    u16(TRANSFER_CHARACTERISTICS_MAP[trackData.info.decoderConfig.colorSpace.transfer]),
    // Transfer characteristics
    u16(MATRIX_COEFFICIENTS_MAP[trackData.info.decoderConfig.colorSpace.matrix]),
    // Matrix coefficients
    u8((trackData.info.decoderConfig.colorSpace.fullRange ? 1 : 0) << 7)
    // Full range flag
  ]);
  var avcC = (trackData) => trackData.info.decoderConfig && box("avcC", [
    // For AVC, description is an AVCDecoderConfigurationRecord, so nothing else to do here
    ...toUint8Array(trackData.info.decoderConfig.description)
  ]);
  var hvcC = (trackData) => trackData.info.decoderConfig && box("hvcC", [
    // For HEVC, description is an HEVCDecoderConfigurationRecord, so nothing else to do here
    ...toUint8Array(trackData.info.decoderConfig.description)
  ]);
  var vpcC = (trackData) => {
    if (!trackData.info.decoderConfig) {
      return null;
    }
    const decoderConfig = trackData.info.decoderConfig;
    const parts = decoderConfig.codec.split(".");
    const profile = Number(parts[1]);
    const level = Number(parts[2]);
    const bitDepth = Number(parts[3]);
    const chromaSubsampling = parts[4] ? Number(parts[4]) : 1;
    const videoFullRangeFlag = parts[8] ? Number(parts[8]) : Number(decoderConfig.colorSpace?.fullRange ?? 0);
    const thirdByte = (bitDepth << 4) + (chromaSubsampling << 1) + videoFullRangeFlag;
    const colourPrimaries = parts[5] ? Number(parts[5]) : decoderConfig.colorSpace?.primaries ? COLOR_PRIMARIES_MAP[decoderConfig.colorSpace.primaries] : 2;
    const transferCharacteristics = parts[6] ? Number(parts[6]) : decoderConfig.colorSpace?.transfer ? TRANSFER_CHARACTERISTICS_MAP[decoderConfig.colorSpace.transfer] : 2;
    const matrixCoefficients = parts[7] ? Number(parts[7]) : decoderConfig.colorSpace?.matrix ? MATRIX_COEFFICIENTS_MAP[decoderConfig.colorSpace.matrix] : 2;
    return fullBox("vpcC", 1, 0, [
      u8(profile),
      // Profile
      u8(level),
      // Level
      u8(thirdByte),
      // Bit depth, chroma subsampling, full range
      u8(colourPrimaries),
      // Colour primaries
      u8(transferCharacteristics),
      // Transfer characteristics
      u8(matrixCoefficients),
      // Matrix coefficients
      u16(0)
      // Codec initialization data size
    ]);
  };
  var av1C = (trackData) => {
    return box("av1C", generateAv1CodecConfigurationFromCodecString(trackData.info.decoderConfig.codec));
  };
  var soundSampleDescription = (compressionType, trackData) => {
    let version = 0;
    let contents;
    let sampleSizeInBits = 16;
    const isPcmCodec = PCM_AUDIO_CODECS.includes(trackData.track.source._codec);
    if (isPcmCodec) {
      const codec = trackData.track.source._codec;
      const { sampleSize } = parsePcmCodec(codec);
      sampleSizeInBits = 8 * sampleSize;
      if (sampleSizeInBits > 16) {
        version = 1;
      }
    }
    if (trackData.muxer.isQuickTime) {
      version = 1;
    }
    if (version === 0) {
      contents = [
        Array(6).fill(0),
        // Reserved
        u16(1),
        // Data reference index
        u16(version),
        // Version
        u16(0),
        // Revision level
        u32(0),
        // Vendor
        u16(trackData.info.numberOfChannels),
        // Number of channels
        u16(sampleSizeInBits),
        // Sample size (bits)
        u16(0),
        // Compression ID
        u16(0),
        // Packet size
        u16(trackData.info.sampleRate < 2 ** 16 ? trackData.info.sampleRate : 0),
        // Sample rate (upper)
        u16(0)
        // Sample rate (lower)
      ];
    } else {
      const compressionId = isPcmCodec ? 0 : -2;
      contents = [
        Array(6).fill(0),
        // Reserved
        u16(1),
        // Data reference index
        u16(version),
        // Version
        u16(0),
        // Revision level
        u32(0),
        // Vendor
        u16(trackData.info.numberOfChannels),
        // Number of channels
        u16(Math.min(sampleSizeInBits, 16)),
        // Sample size (bits)
        i16(compressionId),
        // Compression ID
        u16(0),
        // Packet size
        u16(trackData.info.sampleRate < 2 ** 16 ? trackData.info.sampleRate : 0),
        // Sample rate (upper)
        u16(0),
        // Sample rate (lower)
        isPcmCodec ? [
          u32(1),
          // Samples per packet (must be 1 for uncompressed formats)
          u32(sampleSizeInBits / 8),
          // Bytes per packet
          u32(trackData.info.numberOfChannels * sampleSizeInBits / 8)
          // Bytes per frame
        ] : [
          u32(0),
          // Samples per packet (don't bother, still works with 0)
          u32(0),
          // Bytes per packet (variable)
          u32(0)
          // Bytes per frame (variable)
        ],
        u32(2)
        // Bytes per sample (constant in FFmpeg)
      ];
    }
    return box(compressionType, contents, [
      audioCodecToConfigurationBox(trackData.track.source._codec, trackData.muxer.isQuickTime)?.(trackData) ?? null
    ]);
  };
  var esds = (trackData) => {
    let objectTypeIndication;
    switch (trackData.track.source._codec) {
      case "aac":
        {
          objectTypeIndication = 64;
        }
        ;
        break;
      case "mp3":
        {
          objectTypeIndication = 107;
        }
        ;
        break;
      case "vorbis":
        {
          objectTypeIndication = 221;
        }
        ;
        break;
      default:
        throw new Error(`Unhandled audio codec: ${trackData.track.source._codec}`);
    }
    let bytes2 = [
      ...u8(objectTypeIndication),
      // Object type indication
      ...u8(21),
      // stream type(6bits)=5 audio, flags(2bits)=1
      ...u24(0),
      // 24bit buffer size
      ...u32(0),
      // max bitrate
      ...u32(0)
      // avg bitrate
    ];
    if (trackData.info.decoderConfig.description) {
      const description = toUint8Array(trackData.info.decoderConfig.description);
      bytes2 = [
        ...bytes2,
        ...u8(5),
        // TAG(5) = DecoderSpecificInfo
        ...variableUnsignedInt(description.byteLength),
        ...description
      ];
    }
    bytes2 = [
      ...u16(1),
      // ES_ID = 1
      ...u8(0),
      // flags etc = 0
      ...u8(4),
      // TAG(4) = ES Descriptor
      ...variableUnsignedInt(bytes2.length),
      ...bytes2,
      ...u8(6),
      // TAG(6)
      ...u8(1),
      // length
      ...u8(2)
      // data
    ];
    bytes2 = [
      ...u8(3),
      // TAG(3) = Object Descriptor
      ...variableUnsignedInt(bytes2.length),
      ...bytes2
    ];
    return fullBox("esds", 0, 0, bytes2);
  };
  var wave = (trackData) => {
    return box("wave", void 0, [
      frma(trackData),
      enda(trackData),
      box("\0\0\0\0")
      // NULL tag at the end
    ]);
  };
  var frma = (trackData) => {
    return box("frma", [
      ascii(audioCodecToBoxName(trackData.track.source._codec, trackData.muxer.isQuickTime))
    ]);
  };
  var enda = (trackData) => {
    const { littleEndian } = parsePcmCodec(trackData.track.source._codec);
    return box("enda", [
      u16(+littleEndian)
    ]);
  };
  var dOps = (trackData) => {
    let outputChannelCount = trackData.info.numberOfChannels;
    let preSkip = 3840;
    let inputSampleRate = trackData.info.sampleRate;
    let outputGain = 0;
    let channelMappingFamily = 0;
    let channelMappingTable = new Uint8Array(0);
    const description = trackData.info.decoderConfig?.description;
    if (description) {
      assert(description.byteLength >= 18);
      const bytes2 = toUint8Array(description);
      const header = parseOpusIdentificationHeader(bytes2);
      outputChannelCount = header.outputChannelCount;
      preSkip = header.preSkip;
      inputSampleRate = header.inputSampleRate;
      outputGain = header.outputGain;
      channelMappingFamily = header.channelMappingFamily;
      if (header.channelMappingTable) {
        channelMappingTable = header.channelMappingTable;
      }
    }
    return box("dOps", [
      u8(0),
      // Version
      u8(outputChannelCount),
      // OutputChannelCount
      u16(preSkip),
      // PreSkip
      u32(inputSampleRate),
      // InputSampleRate
      i16(outputGain),
      // OutputGain
      u8(channelMappingFamily),
      // ChannelMappingFamily
      ...channelMappingTable
    ]);
  };
  var dfLa = (trackData) => {
    const description = trackData.info.decoderConfig?.description;
    assert(description);
    const bytes2 = toUint8Array(description);
    return fullBox("dfLa", 0, 0, [
      ...bytes2.subarray(4)
    ]);
  };
  var pcmC = (trackData) => {
    const { littleEndian, sampleSize } = parsePcmCodec(trackData.track.source._codec);
    const formatFlags = +littleEndian;
    return fullBox("pcmC", 0, 0, [
      u8(formatFlags),
      u8(8 * sampleSize)
    ]);
  };
  var dac3 = (trackData) => {
    const frameInfo = parseAc3SyncFrame(trackData.info.firstPacket.data);
    if (!frameInfo) {
      throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
    }
    const bytes2 = new Uint8Array(3);
    const bitstream = new Bitstream(bytes2);
    bitstream.writeBits(2, frameInfo.fscod);
    bitstream.writeBits(5, frameInfo.bsid);
    bitstream.writeBits(3, frameInfo.bsmod);
    bitstream.writeBits(3, frameInfo.acmod);
    bitstream.writeBits(1, frameInfo.lfeon);
    bitstream.writeBits(5, frameInfo.bitRateCode);
    bitstream.writeBits(5, 0);
    return box("dac3", [...bytes2]);
  };
  var dec3 = (trackData) => {
    const frameInfo = parseEac3SyncFrame(trackData.info.firstPacket.data);
    if (!frameInfo) {
      throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
    }
    let totalBits = 16;
    for (const sub of frameInfo.substreams) {
      totalBits += 23;
      if (sub.numDepSub > 0) {
        totalBits += 9;
      } else {
        totalBits += 1;
      }
    }
    const size = Math.ceil(totalBits / 8);
    const bytes2 = new Uint8Array(size);
    const bitstream = new Bitstream(bytes2);
    bitstream.writeBits(13, frameInfo.dataRate);
    bitstream.writeBits(3, frameInfo.substreams.length - 1);
    for (const sub of frameInfo.substreams) {
      bitstream.writeBits(2, sub.fscod);
      bitstream.writeBits(5, sub.bsid);
      bitstream.writeBits(1, 0);
      bitstream.writeBits(1, 0);
      bitstream.writeBits(3, sub.bsmod);
      bitstream.writeBits(3, sub.acmod);
      bitstream.writeBits(1, sub.lfeon);
      bitstream.writeBits(3, 0);
      bitstream.writeBits(4, sub.numDepSub);
      if (sub.numDepSub > 0) {
        bitstream.writeBits(9, sub.chanLoc);
      } else {
        bitstream.writeBits(1, 0);
      }
    }
    return box("dec3", [...bytes2]);
  };
  var subtitleSampleDescription = (compressionType, trackData) => box(compressionType, [
    Array(6).fill(0),
    // Reserved
    u16(1)
    // Data reference index
  ], [
    SUBTITLE_CODEC_TO_CONFIGURATION_BOX[trackData.track.source._codec](trackData)
  ]);
  var vttC = (trackData) => box("vttC", [
    ...textEncoder.encode(trackData.info.config.description)
  ]);
  var stts = (trackData) => {
    return fullBox("stts", 0, 0, [
      u32(trackData.timeToSampleTable.length),
      // Number of entries
      trackData.timeToSampleTable.map((x) => [
        u32(x.sampleCount),
        // Sample count
        u32(x.sampleDelta)
        // Sample duration
      ])
    ]);
  };
  var stss = (trackData) => {
    if (trackData.samples.every((x) => x.type === "key"))
      return null;
    const keySamples = [...trackData.samples.entries()].filter(([, sample]) => sample.type === "key");
    return fullBox("stss", 0, 0, [
      u32(keySamples.length),
      // Number of entries
      keySamples.map(([index]) => u32(index + 1))
      // Sync sample table
    ]);
  };
  var stsc = (trackData) => {
    return fullBox("stsc", 0, 0, [
      u32(trackData.compactlyCodedChunkTable.length),
      // Number of entries
      trackData.compactlyCodedChunkTable.map((x) => [
        u32(x.firstChunk),
        // First chunk
        u32(x.samplesPerChunk),
        // Samples per chunk
        u32(1)
        // Sample description index
      ])
    ]);
  };
  var stsz = (trackData) => {
    if (trackData.type === "audio" && trackData.info.requiresPcmTransformation) {
      const { sampleSize } = parsePcmCodec(trackData.track.source._codec);
      return fullBox("stsz", 0, 0, [
        u32(sampleSize * trackData.info.numberOfChannels),
        // Sample size
        u32(trackData.samples.reduce((acc, x) => acc + intoTimescale(x.duration, trackData.timescale), 0))
      ]);
    }
    return fullBox("stsz", 0, 0, [
      u32(0),
      // Sample size (0 means non-constant size)
      u32(trackData.samples.length),
      // Number of entries
      trackData.samples.map((x) => u32(x.size))
      // Sample size table
    ]);
  };
  var stco = (trackData) => {
    if (trackData.finalizedChunks.length > 0 && last(trackData.finalizedChunks).offset >= 2 ** 32) {
      return fullBox("co64", 0, 0, [
        u32(trackData.finalizedChunks.length),
        // Number of entries
        trackData.finalizedChunks.map((x) => u64(x.offset))
        // Chunk offset table
      ]);
    }
    return fullBox("stco", 0, 0, [
      u32(trackData.finalizedChunks.length),
      // Number of entries
      trackData.finalizedChunks.map((x) => u32(x.offset))
      // Chunk offset table
    ]);
  };
  var ctts = (trackData) => {
    return fullBox("ctts", 1, 0, [
      u32(trackData.compositionTimeOffsetTable.length),
      // Number of entries
      trackData.compositionTimeOffsetTable.map((x) => [
        u32(x.sampleCount),
        // Sample count
        i32(x.sampleCompositionTimeOffset)
        // Sample offset
      ])
    ]);
  };
  var cslg = (trackData) => {
    let leastDecodeToDisplayDelta = Infinity;
    let greatestDecodeToDisplayDelta = -Infinity;
    let compositionStartTime = Infinity;
    let compositionEndTime = -Infinity;
    assert(trackData.compositionTimeOffsetTable.length > 0);
    assert(trackData.samples.length > 0);
    for (let i = 0; i < trackData.compositionTimeOffsetTable.length; i++) {
      const entry = trackData.compositionTimeOffsetTable[i];
      leastDecodeToDisplayDelta = Math.min(leastDecodeToDisplayDelta, entry.sampleCompositionTimeOffset);
      greatestDecodeToDisplayDelta = Math.max(greatestDecodeToDisplayDelta, entry.sampleCompositionTimeOffset);
    }
    for (let i = 0; i < trackData.samples.length; i++) {
      const sample = trackData.samples[i];
      compositionStartTime = Math.min(compositionStartTime, intoTimescale(sample.timestamp, trackData.timescale));
      compositionEndTime = Math.max(compositionEndTime, intoTimescale(sample.timestamp + sample.duration, trackData.timescale));
    }
    const compositionToDtsShift = Math.max(-leastDecodeToDisplayDelta, 0);
    if (compositionEndTime >= 2 ** 31) {
      return null;
    }
    return fullBox("cslg", 0, 0, [
      i32(compositionToDtsShift),
      // Composition to DTS shift
      i32(leastDecodeToDisplayDelta),
      // Least decode to display delta
      i32(greatestDecodeToDisplayDelta),
      // Greatest decode to display delta
      i32(compositionStartTime),
      // Composition start time
      i32(compositionEndTime)
      // Composition end time
    ]);
  };
  var mvex = (trackDatas) => {
    return box("mvex", void 0, trackDatas.map(trex));
  };
  var trex = (trackData) => {
    return fullBox("trex", 0, 0, [
      u32(trackData.track.id),
      // Track ID
      u32(1),
      // Default sample description index
      u32(0),
      // Default sample duration
      u32(0),
      // Default sample size
      u32(0)
      // Default sample flags
    ]);
  };
  var moof = (sequenceNumber, trackDatas) => {
    return box("moof", void 0, [
      mfhd(sequenceNumber),
      ...trackDatas.map(traf)
    ]);
  };
  var mfhd = (sequenceNumber) => {
    return fullBox("mfhd", 0, 0, [
      u32(sequenceNumber)
      // Sequence number
    ]);
  };
  var fragmentSampleFlags = (sample) => {
    let byte1 = 0;
    let byte2 = 0;
    const byte3 = 0;
    const byte4 = 0;
    const sampleIsDifferenceSample = sample.type === "delta";
    byte2 |= +sampleIsDifferenceSample;
    if (sampleIsDifferenceSample) {
      byte1 |= 1;
    } else {
      byte1 |= 2;
    }
    return byte1 << 24 | byte2 << 16 | byte3 << 8 | byte4;
  };
  var traf = (trackData) => {
    return box("traf", void 0, [
      tfhd(trackData),
      tfdt(trackData),
      trun(trackData)
    ]);
  };
  var tfhd = (trackData) => {
    assert(trackData.currentChunk);
    let tfFlags = 0;
    tfFlags |= 8;
    tfFlags |= 16;
    tfFlags |= 32;
    tfFlags |= 131072;
    const referenceSample = trackData.currentChunk.samples[1] ?? trackData.currentChunk.samples[0];
    const referenceSampleInfo = {
      duration: referenceSample.timescaleUnitsToNextSample,
      size: referenceSample.size,
      flags: fragmentSampleFlags(referenceSample)
    };
    return fullBox("tfhd", 0, tfFlags, [
      u32(trackData.track.id),
      // Track ID
      u32(referenceSampleInfo.duration),
      // Default sample duration
      u32(referenceSampleInfo.size),
      // Default sample size
      u32(referenceSampleInfo.flags)
      // Default sample flags
    ]);
  };
  var tfdt = (trackData) => {
    assert(trackData.currentChunk);
    return fullBox("tfdt", 1, 0, [
      u64(intoTimescale(trackData.currentChunk.startTimestamp, trackData.timescale))
      // Base Media Decode Time
    ]);
  };
  var trun = (trackData) => {
    assert(trackData.currentChunk);
    const allSampleDurations = trackData.currentChunk.samples.map((x) => x.timescaleUnitsToNextSample);
    const allSampleSizes = trackData.currentChunk.samples.map((x) => x.size);
    const allSampleFlags = trackData.currentChunk.samples.map(fragmentSampleFlags);
    const allSampleCompositionTimeOffsets = trackData.currentChunk.samples.map((x) => intoTimescale(x.timestamp - x.decodeTimestamp, trackData.timescale));
    const uniqueSampleDurations = new Set(allSampleDurations);
    const uniqueSampleSizes = new Set(allSampleSizes);
    const uniqueSampleFlags = new Set(allSampleFlags);
    const uniqueSampleCompositionTimeOffsets = new Set(allSampleCompositionTimeOffsets);
    const firstSampleFlagsPresent = uniqueSampleFlags.size === 2 && allSampleFlags[0] !== allSampleFlags[1];
    const sampleDurationPresent = uniqueSampleDurations.size > 1;
    const sampleSizePresent = uniqueSampleSizes.size > 1;
    const sampleFlagsPresent = !firstSampleFlagsPresent && uniqueSampleFlags.size > 1;
    const sampleCompositionTimeOffsetsPresent = uniqueSampleCompositionTimeOffsets.size > 1 || [...uniqueSampleCompositionTimeOffsets].some((x) => x !== 0);
    let flags = 0;
    flags |= 1;
    flags |= 4 * +firstSampleFlagsPresent;
    flags |= 256 * +sampleDurationPresent;
    flags |= 512 * +sampleSizePresent;
    flags |= 1024 * +sampleFlagsPresent;
    flags |= 2048 * +sampleCompositionTimeOffsetsPresent;
    return fullBox("trun", 1, flags, [
      u32(trackData.currentChunk.samples.length),
      // Sample count
      u32(trackData.currentChunk.offset - trackData.currentChunk.moofOffset || 0),
      // Data offset
      firstSampleFlagsPresent ? u32(allSampleFlags[0]) : [],
      trackData.currentChunk.samples.map((_, i) => [
        sampleDurationPresent ? u32(allSampleDurations[i]) : [],
        // Sample duration
        sampleSizePresent ? u32(allSampleSizes[i]) : [],
        // Sample size
        sampleFlagsPresent ? u32(allSampleFlags[i]) : [],
        // Sample flags
        // Sample composition time offsets
        sampleCompositionTimeOffsetsPresent ? i32(allSampleCompositionTimeOffsets[i]) : []
      ])
    ]);
  };
  var mfra = (trackDatas) => {
    return box("mfra", void 0, [
      ...trackDatas.map(tfra),
      mfro()
    ]);
  };
  var tfra = (trackData, trackIndex) => {
    const version = 1;
    return fullBox("tfra", version, 0, [
      u32(trackData.track.id),
      // Track ID
      u32(63),
      // This specifies that traf number, trun number and sample number are 32-bit ints
      u32(trackData.finalizedChunks.length),
      // Number of entries
      trackData.finalizedChunks.map((chunk) => [
        u64(intoTimescale(chunk.samples[0].timestamp, trackData.timescale)),
        // Time (in presentation time)
        u64(chunk.moofOffset),
        // moof offset
        u32(trackIndex + 1),
        // traf number
        u32(1),
        // trun number
        u32(1)
        // Sample number
      ])
    ]);
  };
  var mfro = () => {
    return fullBox("mfro", 0, 0, [
      // This value needs to be overwritten manually from the outside, where the actual size of the enclosing mfra box
      // is known
      u32(0)
      // Size
    ]);
  };
  var vtte = () => box("vtte");
  var vttc = (payload, timestamp, identifier, settings2, sourceId) => box("vttc", void 0, [
    sourceId !== null ? box("vsid", [i32(sourceId)]) : null,
    identifier !== null ? box("iden", [...textEncoder.encode(identifier)]) : null,
    timestamp !== null ? box("ctim", [...textEncoder.encode(formatSubtitleTimestamp(timestamp))]) : null,
    settings2 !== null ? box("sttg", [...textEncoder.encode(settings2)]) : null,
    box("payl", [...textEncoder.encode(payload)])
  ]);
  var vtta = (notes) => box("vtta", [...textEncoder.encode(notes)]);
  var udta = (muxer) => {
    const boxes = [];
    const metadataFormat = muxer.format._options.metadataFormat ?? "auto";
    const metadataTags = muxer.output._metadataTags;
    if (metadataFormat === "mdir" || metadataFormat === "auto" && !muxer.isQuickTime) {
      const metaBox = metaMdir(metadataTags);
      if (metaBox)
        boxes.push(metaBox);
    } else if (metadataFormat === "mdta") {
      const metaBox = metaMdta(metadataTags);
      if (metaBox)
        boxes.push(metaBox);
    } else if (metadataFormat === "udta" || metadataFormat === "auto" && muxer.isQuickTime) {
      addQuickTimeMetadataTagBoxes(boxes, muxer.output._metadataTags);
    }
    if (boxes.length === 0) {
      return null;
    }
    return box("udta", void 0, boxes);
  };
  var addQuickTimeMetadataTagBoxes = (boxes, tags) => {
    for (const { key, value } of keyValueIterator(tags)) {
      switch (key) {
        case "title":
          {
            boxes.push(metadataTagStringBoxShort("\xA9nam", value));
          }
          ;
          break;
        case "description":
          {
            boxes.push(metadataTagStringBoxShort("\xA9des", value));
          }
          ;
          break;
        case "artist":
          {
            boxes.push(metadataTagStringBoxShort("\xA9ART", value));
          }
          ;
          break;
        case "album":
          {
            boxes.push(metadataTagStringBoxShort("\xA9alb", value));
          }
          ;
          break;
        case "albumArtist":
          {
            boxes.push(metadataTagStringBoxShort("albr", value));
          }
          ;
          break;
        case "genre":
          {
            boxes.push(metadataTagStringBoxShort("\xA9gen", value));
          }
          ;
          break;
        case "date":
          {
            boxes.push(metadataTagStringBoxShort("\xA9day", value.toISOString().slice(0, 10)));
          }
          ;
          break;
        case "comment":
          {
            boxes.push(metadataTagStringBoxShort("\xA9cmt", value));
          }
          ;
          break;
        case "lyrics":
          {
            boxes.push(metadataTagStringBoxShort("\xA9lyr", value));
          }
          ;
          break;
        case "raw":
          {
          }
          ;
          break;
        case "discNumber":
        case "discsTotal":
        case "trackNumber":
        case "tracksTotal":
        case "images":
          {
          }
          ;
          break;
        default:
          assertNever(key);
      }
    }
    if (tags.raw) {
      for (const key in tags.raw) {
        const value = tags.raw[key];
        if (value == null || key.length !== 4 || boxes.some((x) => x.type === key)) {
          continue;
        }
        if (typeof value === "string") {
          boxes.push(metadataTagStringBoxShort(key, value));
        } else if (value instanceof Uint8Array) {
          boxes.push(box(key, Array.from(value)));
        }
      }
    }
  };
  var metadataTagStringBoxShort = (name, value) => {
    const encoded = textEncoder.encode(value);
    return box(name, [
      u16(encoded.length),
      u16(getLanguageCodeInt("und")),
      Array.from(encoded)
    ]);
  };
  var DATA_BOX_MIME_TYPE_MAP = {
    "image/jpeg": 13,
    "image/png": 14,
    "image/bmp": 27
  };
  var generateMetadataPairs = (tags, isMdta) => {
    const pairs = [];
    for (const { key, value } of keyValueIterator(tags)) {
      switch (key) {
        case "title":
          {
            pairs.push({ key: isMdta ? "title" : "\xA9nam", value: dataStringBoxLong(value) });
          }
          ;
          break;
        case "description":
          {
            pairs.push({ key: isMdta ? "description" : "\xA9des", value: dataStringBoxLong(value) });
          }
          ;
          break;
        case "artist":
          {
            pairs.push({ key: isMdta ? "artist" : "\xA9ART", value: dataStringBoxLong(value) });
          }
          ;
          break;
        case "album":
          {
            pairs.push({ key: isMdta ? "album" : "\xA9alb", value: dataStringBoxLong(value) });
          }
          ;
          break;
        case "albumArtist":
          {
            pairs.push({ key: isMdta ? "album_artist" : "aART", value: dataStringBoxLong(value) });
          }
          ;
          break;
        case "comment":
          {
            pairs.push({ key: isMdta ? "comment" : "\xA9cmt", value: dataStringBoxLong(value) });
          }
          ;
          break;
        case "genre":
          {
            pairs.push({ key: isMdta ? "genre" : "\xA9gen", value: dataStringBoxLong(value) });
          }
          ;
          break;
        case "lyrics":
          {
            pairs.push({ key: isMdta ? "lyrics" : "\xA9lyr", value: dataStringBoxLong(value) });
          }
          ;
          break;
        case "date":
          {
            pairs.push({
              key: isMdta ? "date" : "\xA9day",
              value: dataStringBoxLong(value.toISOString().slice(0, 10))
            });
          }
          ;
          break;
        case "images":
          {
            for (const image of value) {
              if (image.kind !== "coverFront") {
                continue;
              }
              pairs.push({ key: "covr", value: box("data", [
                u32(DATA_BOX_MIME_TYPE_MAP[image.mimeType] ?? 0),
                // Type indicator
                u32(0),
                // Locale indicator
                Array.from(image.data)
                // Kinda slow, hopefully temp
              ]) });
            }
          }
          ;
          break;
        case "trackNumber":
          {
            if (isMdta) {
              const string = tags.tracksTotal !== void 0 ? `${value}/${tags.tracksTotal}` : value.toString();
              pairs.push({ key: "track", value: dataStringBoxLong(string) });
            } else {
              pairs.push({ key: "trkn", value: box("data", [
                u32(0),
                // 8 bytes empty
                u32(0),
                u16(0),
                // Empty
                u16(value),
                u16(tags.tracksTotal ?? 0),
                u16(0)
                // Empty
              ]) });
            }
          }
          ;
          break;
        case "discNumber":
          {
            if (!isMdta) {
              pairs.push({ key: "disc", value: box("data", [
                u32(0),
                // 8 bytes empty
                u32(0),
                u16(0),
                // Empty
                u16(value),
                u16(tags.discsTotal ?? 0),
                u16(0)
                // Empty
              ]) });
            }
          }
          ;
          break;
        case "tracksTotal":
        case "discsTotal":
          {
          }
          ;
          break;
        case "raw":
          {
          }
          ;
          break;
        default:
          assertNever(key);
      }
    }
    if (tags.raw) {
      for (const key in tags.raw) {
        const value = tags.raw[key];
        if (value == null || !isMdta && key.length !== 4 || pairs.some((x) => x.key === key)) {
          continue;
        }
        if (typeof value === "string") {
          pairs.push({ key, value: dataStringBoxLong(value) });
        } else if (value instanceof Uint8Array) {
          pairs.push({ key, value: box("data", [
            u32(0),
            // Type indicator
            u32(0),
            // Locale indicator
            Array.from(value)
          ]) });
        } else if (value instanceof RichImageData) {
          pairs.push({ key, value: box("data", [
            u32(DATA_BOX_MIME_TYPE_MAP[value.mimeType] ?? 0),
            // Type indicator
            u32(0),
            // Locale indicator
            Array.from(value.data)
            // Kinda slow, hopefully temp
          ]) });
        }
      }
    }
    return pairs;
  };
  var metaMdir = (tags) => {
    const pairs = generateMetadataPairs(tags, false);
    if (pairs.length === 0) {
      return null;
    }
    return fullBox("meta", 0, 0, void 0, [
      hdlr(false, "mdir", "", "appl"),
      // mdir handler
      box("ilst", void 0, pairs.map((pair) => box(pair.key, void 0, [pair.value])))
      // Item list without keys box
    ]);
  };
  var metaMdta = (tags) => {
    const pairs = generateMetadataPairs(tags, true);
    if (pairs.length === 0) {
      return null;
    }
    return box("meta", void 0, [
      hdlr(false, "mdta", ""),
      // mdta handler
      fullBox("keys", 0, 0, [
        u32(pairs.length)
      ], pairs.map((pair) => box("mdta", [
        ...textEncoder.encode(pair.key)
      ]))),
      box("ilst", void 0, pairs.map((pair, i) => {
        const boxName = String.fromCharCode(...u32(i + 1));
        return box(boxName, void 0, [pair.value]);
      }))
    ]);
  };
  var dataStringBoxLong = (value) => {
    return box("data", [
      u32(1),
      // Type indicator (UTF-8)
      u32(0),
      // Locale indicator
      ...textEncoder.encode(value)
    ]);
  };
  var videoCodecToBoxName = (codec, fullCodecString) => {
    switch (codec) {
      case "avc":
        return fullCodecString.startsWith("avc3") ? "avc3" : "avc1";
      case "hevc":
        return "hvc1";
      case "vp8":
        return "vp08";
      case "vp9":
        return "vp09";
      case "av1":
        return "av01";
    }
  };
  var VIDEO_CODEC_TO_CONFIGURATION_BOX = {
    avc: avcC,
    hevc: hvcC,
    vp8: vpcC,
    vp9: vpcC,
    av1: av1C
  };
  var audioCodecToBoxName = (codec, isQuickTime) => {
    switch (codec) {
      case "aac":
        return "mp4a";
      case "mp3":
        return "mp4a";
      case "opus":
        return "Opus";
      case "vorbis":
        return "mp4a";
      case "flac":
        return "fLaC";
      case "ulaw":
        return "ulaw";
      case "alaw":
        return "alaw";
      case "pcm-u8":
        return "raw ";
      case "pcm-s8":
        return "sowt";
      case "ac3":
        return "ac-3";
      case "eac3":
        return "ec-3";
    }
    if (isQuickTime) {
      switch (codec) {
        case "pcm-s16":
          return "sowt";
        case "pcm-s16be":
          return "twos";
        case "pcm-s24":
          return "in24";
        case "pcm-s24be":
          return "in24";
        case "pcm-s32":
          return "in32";
        case "pcm-s32be":
          return "in32";
        case "pcm-f32":
          return "fl32";
        case "pcm-f32be":
          return "fl32";
        case "pcm-f64":
          return "fl64";
        case "pcm-f64be":
          return "fl64";
      }
    } else {
      switch (codec) {
        case "pcm-s16":
          return "ipcm";
        case "pcm-s16be":
          return "ipcm";
        case "pcm-s24":
          return "ipcm";
        case "pcm-s24be":
          return "ipcm";
        case "pcm-s32":
          return "ipcm";
        case "pcm-s32be":
          return "ipcm";
        case "pcm-f32":
          return "fpcm";
        case "pcm-f32be":
          return "fpcm";
        case "pcm-f64":
          return "fpcm";
        case "pcm-f64be":
          return "fpcm";
      }
    }
  };
  var audioCodecToConfigurationBox = (codec, isQuickTime) => {
    switch (codec) {
      case "aac":
        return esds;
      case "mp3":
        return esds;
      case "opus":
        return dOps;
      case "vorbis":
        return esds;
      case "flac":
        return dfLa;
      case "ac3":
        return dac3;
      case "eac3":
        return dec3;
    }
    if (isQuickTime) {
      switch (codec) {
        case "pcm-s24":
          return wave;
        case "pcm-s24be":
          return wave;
        case "pcm-s32":
          return wave;
        case "pcm-s32be":
          return wave;
        case "pcm-f32":
          return wave;
        case "pcm-f32be":
          return wave;
        case "pcm-f64":
          return wave;
        case "pcm-f64be":
          return wave;
      }
    } else {
      switch (codec) {
        case "pcm-s16":
          return pcmC;
        case "pcm-s16be":
          return pcmC;
        case "pcm-s24":
          return pcmC;
        case "pcm-s24be":
          return pcmC;
        case "pcm-s32":
          return pcmC;
        case "pcm-s32be":
          return pcmC;
        case "pcm-f32":
          return pcmC;
        case "pcm-f32be":
          return pcmC;
        case "pcm-f64":
          return pcmC;
        case "pcm-f64be":
          return pcmC;
      }
    }
    return null;
  };
  var SUBTITLE_CODEC_TO_BOX_NAME = {
    webvtt: "wvtt"
  };
  var SUBTITLE_CODEC_TO_CONFIGURATION_BOX = {
    webvtt: vttC
  };
  var getLanguageCodeInt = (code) => {
    assert(code.length === 3);
    ;
    let language = 0;
    for (let i = 0; i < 3; i++) {
      language <<= 5;
      language += code.charCodeAt(i) - 96;
    }
    return language;
  };

  // ../../node_modules/mediabunny/dist/modules/src/writer.js
  var Writer = class {
    constructor() {
      this.ensureMonotonicity = false;
      this.trackedWrites = null;
      this.trackedStart = -1;
      this.trackedEnd = -1;
    }
    start() {
    }
    maybeTrackWrites(data) {
      if (!this.trackedWrites) {
        return;
      }
      let pos = this.getPos();
      if (pos < this.trackedStart) {
        if (pos + data.byteLength <= this.trackedStart) {
          return;
        }
        data = data.subarray(this.trackedStart - pos);
        pos = 0;
      }
      const neededSize = pos + data.byteLength - this.trackedStart;
      let newLength = this.trackedWrites.byteLength;
      while (newLength < neededSize) {
        newLength *= 2;
      }
      if (newLength !== this.trackedWrites.byteLength) {
        const copy = new Uint8Array(newLength);
        copy.set(this.trackedWrites, 0);
        this.trackedWrites = copy;
      }
      this.trackedWrites.set(data, pos - this.trackedStart);
      this.trackedEnd = Math.max(this.trackedEnd, pos + data.byteLength);
    }
    startTrackingWrites() {
      this.trackedWrites = new Uint8Array(2 ** 10);
      this.trackedStart = this.getPos();
      this.trackedEnd = this.trackedStart;
    }
    stopTrackingWrites() {
      if (!this.trackedWrites) {
        throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
      }
      const slice = this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart);
      const result = {
        data: slice,
        start: this.trackedStart,
        end: this.trackedEnd
      };
      this.trackedWrites = null;
      return result;
    }
  };
  var ARRAY_BUFFER_INITIAL_SIZE = 2 ** 16;
  var ARRAY_BUFFER_MAX_SIZE = 2 ** 32;
  var BufferTargetWriter = class extends Writer {
    constructor(target) {
      super();
      this.pos = 0;
      this.maxPos = 0;
      this.target = target;
      this.supportsResize = "resize" in new ArrayBuffer(0);
      if (this.supportsResize) {
        try {
          this.buffer = new ArrayBuffer(ARRAY_BUFFER_INITIAL_SIZE, { maxByteLength: ARRAY_BUFFER_MAX_SIZE });
        } catch {
          this.buffer = new ArrayBuffer(ARRAY_BUFFER_INITIAL_SIZE);
          this.supportsResize = false;
        }
      } else {
        this.buffer = new ArrayBuffer(ARRAY_BUFFER_INITIAL_SIZE);
      }
      this.bytes = new Uint8Array(this.buffer);
    }
    ensureSize(size) {
      let newLength = this.buffer.byteLength;
      while (newLength < size)
        newLength *= 2;
      if (newLength === this.buffer.byteLength)
        return;
      if (newLength > ARRAY_BUFFER_MAX_SIZE) {
        throw new Error(`ArrayBuffer exceeded maximum size of ${ARRAY_BUFFER_MAX_SIZE} bytes. Please consider using another target.`);
      }
      if (this.supportsResize) {
        this.buffer.resize(newLength);
      } else {
        const newBuffer = new ArrayBuffer(newLength);
        const newBytes = new Uint8Array(newBuffer);
        newBytes.set(this.bytes, 0);
        this.buffer = newBuffer;
        this.bytes = newBytes;
      }
    }
    write(data) {
      this.maybeTrackWrites(data);
      this.ensureSize(this.pos + data.byteLength);
      this.bytes.set(data, this.pos);
      this.target.onwrite?.(this.pos, this.pos + data.byteLength);
      this.pos += data.byteLength;
      this.maxPos = Math.max(this.maxPos, this.pos);
    }
    seek(newPos) {
      this.pos = newPos;
    }
    getPos() {
      return this.pos;
    }
    async flush() {
    }
    async finalize() {
      this.ensureSize(this.pos);
      this.target.buffer = this.buffer.slice(0, Math.max(this.maxPos, this.pos));
    }
    async close() {
    }
    getSlice(start, end) {
      return this.bytes.slice(start, end);
    }
  };
  var DEFAULT_CHUNK_SIZE = 2 ** 24;
  var MAX_CHUNKS_AT_ONCE = 2;
  var StreamTargetWriter = class extends Writer {
    constructor(target) {
      super();
      this.pos = 0;
      this.sections = [];
      this.lastWriteEnd = 0;
      this.lastFlushEnd = 0;
      this.writer = null;
      this.writeError = null;
      this.chunks = [];
      this.target = target;
      this.chunked = target._options.chunked ?? false;
      this.chunkSize = target._options.chunkSize ?? DEFAULT_CHUNK_SIZE;
    }
    start() {
      this.writer = this.target._writable.getWriter();
    }
    write(data) {
      if (this.pos > this.lastWriteEnd) {
        const paddingBytesNeeded = this.pos - this.lastWriteEnd;
        this.pos = this.lastWriteEnd;
        this.write(new Uint8Array(paddingBytesNeeded));
      }
      this.maybeTrackWrites(data);
      this.sections.push({
        data: data.slice(),
        start: this.pos
      });
      this.target.onwrite?.(this.pos, this.pos + data.byteLength);
      this.pos += data.byteLength;
      this.lastWriteEnd = Math.max(this.lastWriteEnd, this.pos);
    }
    seek(newPos) {
      this.pos = newPos;
    }
    getPos() {
      return this.pos;
    }
    async flush() {
      if (this.writeError !== null) {
        throw this.writeError;
      }
      if (this.pos > this.lastWriteEnd) {
        const paddingBytesNeeded = this.pos - this.lastWriteEnd;
        this.pos = this.lastWriteEnd;
        this.write(new Uint8Array(paddingBytesNeeded));
      }
      assert(this.writer);
      if (this.sections.length === 0)
        return;
      const chunks = [];
      const sorted = [...this.sections].sort((a, b) => a.start - b.start);
      chunks.push({
        start: sorted[0].start,
        size: sorted[0].data.byteLength
      });
      for (let i = 1; i < sorted.length; i++) {
        const lastChunk = chunks[chunks.length - 1];
        const section = sorted[i];
        if (section.start <= lastChunk.start + lastChunk.size) {
          lastChunk.size = Math.max(lastChunk.size, section.start + section.data.byteLength - lastChunk.start);
        } else {
          chunks.push({
            start: section.start,
            size: section.data.byteLength
          });
        }
      }
      for (const chunk of chunks) {
        chunk.data = new Uint8Array(chunk.size);
        for (const section of this.sections) {
          if (chunk.start <= section.start && section.start < chunk.start + chunk.size) {
            chunk.data.set(section.data, section.start - chunk.start);
          }
        }
        if (this.writer.desiredSize !== null && this.writer.desiredSize <= 0) {
          await this.writer.ready;
        }
        if (this.chunked) {
          this.writeDataIntoChunks(chunk.data, chunk.start);
          this.tryToFlushChunks();
        } else {
          if (this.ensureMonotonicity && chunk.start !== this.lastFlushEnd) {
            throw new Error("Internal error: Monotonicity violation.");
          }
          void this.writer.write({
            type: "write",
            data: chunk.data,
            position: chunk.start
          }).catch((error) => {
            this.writeError ??= error;
          });
          this.lastFlushEnd = chunk.start + chunk.data.byteLength;
        }
      }
      this.sections.length = 0;
    }
    writeDataIntoChunks(data, position) {
      let chunkIndex = this.chunks.findIndex((x) => x.start <= position && position < x.start + this.chunkSize);
      if (chunkIndex === -1)
        chunkIndex = this.createChunk(position);
      const chunk = this.chunks[chunkIndex];
      const relativePosition = position - chunk.start;
      const toWrite = data.subarray(0, Math.min(this.chunkSize - relativePosition, data.byteLength));
      chunk.data.set(toWrite, relativePosition);
      const section = {
        start: relativePosition,
        end: relativePosition + toWrite.byteLength
      };
      this.insertSectionIntoChunk(chunk, section);
      if (chunk.written[0].start === 0 && chunk.written[0].end === this.chunkSize) {
        chunk.shouldFlush = true;
      }
      if (this.chunks.length > MAX_CHUNKS_AT_ONCE) {
        for (let i = 0; i < this.chunks.length - 1; i++) {
          this.chunks[i].shouldFlush = true;
        }
        this.tryToFlushChunks();
      }
      if (toWrite.byteLength < data.byteLength) {
        this.writeDataIntoChunks(data.subarray(toWrite.byteLength), position + toWrite.byteLength);
      }
    }
    insertSectionIntoChunk(chunk, section) {
      let low = 0;
      let high = chunk.written.length - 1;
      let index = -1;
      while (low <= high) {
        const mid = Math.floor(low + (high - low + 1) / 2);
        if (chunk.written[mid].start <= section.start) {
          low = mid + 1;
          index = mid;
        } else {
          high = mid - 1;
        }
      }
      chunk.written.splice(index + 1, 0, section);
      if (index === -1 || chunk.written[index].end < section.start)
        index++;
      while (index < chunk.written.length - 1 && chunk.written[index].end >= chunk.written[index + 1].start) {
        chunk.written[index].end = Math.max(chunk.written[index].end, chunk.written[index + 1].end);
        chunk.written.splice(index + 1, 1);
      }
    }
    createChunk(includesPosition) {
      const start = Math.floor(includesPosition / this.chunkSize) * this.chunkSize;
      const chunk = {
        start,
        data: new Uint8Array(this.chunkSize),
        written: [],
        shouldFlush: false
      };
      this.chunks.push(chunk);
      this.chunks.sort((a, b) => a.start - b.start);
      return this.chunks.indexOf(chunk);
    }
    tryToFlushChunks(force = false) {
      assert(this.writer);
      for (let i = 0; i < this.chunks.length; i++) {
        const chunk = this.chunks[i];
        if (!chunk.shouldFlush && !force)
          continue;
        for (const section of chunk.written) {
          const position = chunk.start + section.start;
          if (this.ensureMonotonicity && position !== this.lastFlushEnd) {
            throw new Error("Internal error: Monotonicity violation.");
          }
          void this.writer.write({
            type: "write",
            data: chunk.data.subarray(section.start, section.end),
            position
          }).catch((error) => {
            this.writeError ??= error;
          });
          this.lastFlushEnd = chunk.start + section.end;
        }
        this.chunks.splice(i--, 1);
      }
    }
    async finalize() {
      if (this.chunked) {
        this.tryToFlushChunks(true);
      }
      if (this.writeError !== null) {
        throw this.writeError;
      }
      assert(this.writer);
      await this.writer.ready;
      return this.writer.close();
    }
    async close() {
      return this.writer?.close();
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/target.js
  var Target = class {
    constructor() {
      this._output = null;
      this.onwrite = null;
    }
  };
  var BufferTarget = class extends Target {
    constructor() {
      super(...arguments);
      this.buffer = null;
    }
    /** @internal */
    _createWriter() {
      return new BufferTargetWriter(this);
    }
  };
  var StreamTarget = class extends Target {
    /** Creates a new {@link StreamTarget} which writes to the specified `writable`. */
    constructor(writable, options = {}) {
      super();
      if (!(writable instanceof WritableStream)) {
        throw new TypeError("StreamTarget requires a WritableStream instance.");
      }
      if (options != null && typeof options !== "object") {
        throw new TypeError("StreamTarget options, when provided, must be an object.");
      }
      if (options.chunked !== void 0 && typeof options.chunked !== "boolean") {
        throw new TypeError("options.chunked, when provided, must be a boolean.");
      }
      if (options.chunkSize !== void 0 && (!Number.isInteger(options.chunkSize) || options.chunkSize < 1024)) {
        throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.");
      }
      this._writable = writable;
      this._options = options;
    }
    /** @internal */
    _createWriter() {
      return new StreamTargetWriter(this);
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/isobmff/isobmff-muxer.js
  var GLOBAL_TIMESCALE = 1e3;
  var TIMESTAMP_OFFSET = 2082844800;
  var getTrackMetadata = (trackData) => {
    const metadata = {};
    const track = trackData.track;
    if (track.metadata.name !== void 0) {
      metadata.name = track.metadata.name;
    }
    return metadata;
  };
  var intoTimescale = (timeInSeconds, timescale, round = true) => {
    const value = timeInSeconds * timescale;
    return round ? Math.round(value) : value;
  };
  var IsobmffMuxer = class extends Muxer {
    constructor(output, format) {
      super(output);
      this.auxTarget = new BufferTarget();
      this.auxWriter = this.auxTarget._createWriter();
      this.auxBoxWriter = new IsobmffBoxWriter(this.auxWriter);
      this.mdat = null;
      this.ftypSize = null;
      this.trackDatas = [];
      this.allTracksKnown = promiseWithResolvers();
      this.creationTime = Math.floor(Date.now() / 1e3) + TIMESTAMP_OFFSET;
      this.finalizedChunks = [];
      this.nextFragmentNumber = 1;
      this.maxWrittenTimestamp = -Infinity;
      this.format = format;
      this.writer = output._writer;
      this.boxWriter = new IsobmffBoxWriter(this.writer);
      this.isQuickTime = format instanceof MovOutputFormat;
      const fastStartDefault = this.writer instanceof BufferTargetWriter ? "in-memory" : false;
      this.fastStart = format._options.fastStart ?? fastStartDefault;
      this.isFragmented = this.fastStart === "fragmented";
      if (this.fastStart === "in-memory" || this.isFragmented) {
        this.writer.ensureMonotonicity = true;
      }
      this.minimumFragmentDuration = format._options.minimumFragmentDuration ?? 1;
    }
    async start() {
      const release = await this.mutex.acquire();
      const holdsAvc = this.output._tracks.some((x) => x.type === "video" && x.source._codec === "avc");
      {
        if (this.format._options.onFtyp) {
          this.writer.startTrackingWrites();
        }
        this.boxWriter.writeBox(ftyp({
          isQuickTime: this.isQuickTime,
          holdsAvc,
          fragmented: this.isFragmented
        }));
        if (this.format._options.onFtyp) {
          const { data, start } = this.writer.stopTrackingWrites();
          this.format._options.onFtyp(data, start);
        }
      }
      this.ftypSize = this.writer.getPos();
      if (this.fastStart === "in-memory") {
      } else if (this.fastStart === "reserve") {
        for (const track of this.output._tracks) {
          if (track.metadata.maximumPacketCount === void 0) {
            throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.");
          }
        }
      } else if (this.isFragmented) {
      } else {
        if (this.format._options.onMdat) {
          this.writer.startTrackingWrites();
        }
        this.mdat = mdat(true);
        this.boxWriter.writeBox(this.mdat);
      }
      await this.writer.flush();
      release();
    }
    allTracksAreKnown() {
      for (const track of this.output._tracks) {
        if (!track.source._closed && !this.trackDatas.some((x) => x.track === track)) {
          return false;
        }
      }
      return true;
    }
    async getMimeType() {
      await this.allTracksKnown.promise;
      const codecStrings = this.trackDatas.map((trackData) => {
        if (trackData.type === "video") {
          return trackData.info.decoderConfig.codec;
        } else if (trackData.type === "audio") {
          return trackData.info.decoderConfig.codec;
        } else {
          const map = {
            webvtt: "wvtt"
          };
          return map[trackData.track.source._codec];
        }
      });
      return buildIsobmffMimeType({
        isQuickTime: this.isQuickTime,
        hasVideo: this.trackDatas.some((x) => x.type === "video"),
        hasAudio: this.trackDatas.some((x) => x.type === "audio"),
        codecStrings
      });
    }
    getVideoTrackData(track, packet, meta) {
      const existingTrackData = this.trackDatas.find((x) => x.track === track);
      if (existingTrackData) {
        return existingTrackData;
      }
      validateVideoChunkMetadata(meta);
      assert(meta);
      assert(meta.decoderConfig);
      const decoderConfig = { ...meta.decoderConfig };
      assert(decoderConfig.codedWidth !== void 0);
      assert(decoderConfig.codedHeight !== void 0);
      let requiresAnnexBTransformation = false;
      if (track.source._codec === "avc" && !decoderConfig.description) {
        const decoderConfigurationRecord = extractAvcDecoderConfigurationRecord(packet.data);
        if (!decoderConfigurationRecord) {
          throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
        }
        decoderConfig.description = serializeAvcDecoderConfigurationRecord(decoderConfigurationRecord);
        requiresAnnexBTransformation = true;
      } else if (track.source._codec === "hevc" && !decoderConfig.description) {
        const decoderConfigurationRecord = extractHevcDecoderConfigurationRecord(packet.data);
        if (!decoderConfigurationRecord) {
          throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
        }
        decoderConfig.description = serializeHevcDecoderConfigurationRecord(decoderConfigurationRecord);
        requiresAnnexBTransformation = true;
      }
      const timescale = computeRationalApproximation(1 / (track.metadata.frameRate ?? 57600), 1e6).denominator;
      const displayAspectWidth = decoderConfig.displayAspectWidth;
      const displayAspectHeight = decoderConfig.displayAspectHeight;
      const pixelAspectRatio = displayAspectWidth === void 0 || displayAspectHeight === void 0 ? { num: 1, den: 1 } : simplifyRational({
        num: displayAspectWidth * decoderConfig.codedHeight,
        den: displayAspectHeight * decoderConfig.codedWidth
      });
      const newTrackData = {
        muxer: this,
        track,
        type: "video",
        info: {
          width: decoderConfig.codedWidth,
          height: decoderConfig.codedHeight,
          pixelAspectRatio,
          decoderConfig,
          requiresAnnexBTransformation
        },
        timescale,
        samples: [],
        sampleQueue: [],
        timestampProcessingQueue: [],
        timeToSampleTable: [],
        compositionTimeOffsetTable: [],
        lastTimescaleUnits: null,
        lastSample: null,
        finalizedChunks: [],
        currentChunk: null,
        compactlyCodedChunkTable: []
      };
      this.trackDatas.push(newTrackData);
      this.trackDatas.sort((a, b) => a.track.id - b.track.id);
      if (this.allTracksAreKnown()) {
        this.allTracksKnown.resolve();
      }
      return newTrackData;
    }
    getAudioTrackData(track, packet, meta) {
      const existingTrackData = this.trackDatas.find((x) => x.track === track);
      if (existingTrackData) {
        return existingTrackData;
      }
      validateAudioChunkMetadata(meta);
      assert(meta);
      assert(meta.decoderConfig);
      const decoderConfig = { ...meta.decoderConfig };
      let requiresAdtsStripping = false;
      if (track.source._codec === "aac" && !decoderConfig.description) {
        const adtsFrame = readAdtsFrameHeader(FileSlice.tempFromBytes(packet.data));
        if (!adtsFrame) {
          throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
        }
        const sampleRate = aacFrequencyTable[adtsFrame.samplingFrequencyIndex];
        const numberOfChannels = aacChannelMap[adtsFrame.channelConfiguration];
        if (sampleRate === void 0 || numberOfChannels === void 0) {
          throw new Error("Invalid ADTS frame header.");
        }
        decoderConfig.description = buildAacAudioSpecificConfig({
          objectType: adtsFrame.objectType,
          sampleRate,
          numberOfChannels
        });
        requiresAdtsStripping = true;
      }
      const newTrackData = {
        muxer: this,
        track,
        type: "audio",
        info: {
          numberOfChannels: meta.decoderConfig.numberOfChannels,
          sampleRate: meta.decoderConfig.sampleRate,
          decoderConfig,
          requiresPcmTransformation: !this.isFragmented && PCM_AUDIO_CODECS.includes(track.source._codec),
          requiresAdtsStripping,
          firstPacket: packet
        },
        timescale: decoderConfig.sampleRate,
        samples: [],
        sampleQueue: [],
        timestampProcessingQueue: [],
        timeToSampleTable: [],
        compositionTimeOffsetTable: [],
        lastTimescaleUnits: null,
        lastSample: null,
        finalizedChunks: [],
        currentChunk: null,
        compactlyCodedChunkTable: []
      };
      this.trackDatas.push(newTrackData);
      this.trackDatas.sort((a, b) => a.track.id - b.track.id);
      if (this.allTracksAreKnown()) {
        this.allTracksKnown.resolve();
      }
      return newTrackData;
    }
    getSubtitleTrackData(track, meta) {
      const existingTrackData = this.trackDatas.find((x) => x.track === track);
      if (existingTrackData) {
        return existingTrackData;
      }
      validateSubtitleMetadata(meta);
      assert(meta);
      assert(meta.config);
      const newTrackData = {
        muxer: this,
        track,
        type: "subtitle",
        info: {
          config: meta.config
        },
        timescale: 1e3,
        // Reasonable
        samples: [],
        sampleQueue: [],
        timestampProcessingQueue: [],
        timeToSampleTable: [],
        compositionTimeOffsetTable: [],
        lastTimescaleUnits: null,
        lastSample: null,
        finalizedChunks: [],
        currentChunk: null,
        compactlyCodedChunkTable: [],
        lastCueEndTimestamp: 0,
        cueQueue: [],
        nextSourceId: 0,
        cueToSourceId: /* @__PURE__ */ new WeakMap()
      };
      this.trackDatas.push(newTrackData);
      this.trackDatas.sort((a, b) => a.track.id - b.track.id);
      if (this.allTracksAreKnown()) {
        this.allTracksKnown.resolve();
      }
      return newTrackData;
    }
    async addEncodedVideoPacket(track, packet, meta) {
      const release = await this.mutex.acquire();
      try {
        const trackData = this.getVideoTrackData(track, packet, meta);
        let packetData = packet.data;
        if (trackData.info.requiresAnnexBTransformation) {
          const nalUnits = [...iterateNalUnitsInAnnexB(packetData)].map((loc) => packetData.subarray(loc.offset, loc.offset + loc.length));
          if (nalUnits.length === 0) {
            throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
          }
          packetData = concatNalUnitsInLengthPrefixed(nalUnits, 4);
        }
        const timestamp = this.validateAndNormalizeTimestamp(trackData.track, packet.timestamp, packet.type === "key");
        const internalSample = this.createSampleForTrack(trackData, packetData, timestamp, packet.duration, packet.type);
        await this.registerSample(trackData, internalSample);
      } finally {
        release();
      }
    }
    async addEncodedAudioPacket(track, packet, meta) {
      const release = await this.mutex.acquire();
      try {
        const trackData = this.getAudioTrackData(track, packet, meta);
        let packetData = packet.data;
        if (trackData.info.requiresAdtsStripping) {
          const adtsFrame = readAdtsFrameHeader(FileSlice.tempFromBytes(packetData));
          if (!adtsFrame) {
            throw new Error("Expected ADTS frame, didn't get one.");
          }
          const headerLength = adtsFrame.crcCheck === null ? MIN_ADTS_FRAME_HEADER_SIZE : MAX_ADTS_FRAME_HEADER_SIZE;
          packetData = packetData.subarray(headerLength);
        }
        const timestamp = this.validateAndNormalizeTimestamp(trackData.track, packet.timestamp, packet.type === "key");
        const internalSample = this.createSampleForTrack(trackData, packetData, timestamp, packet.duration, packet.type);
        if (trackData.info.requiresPcmTransformation) {
          await this.maybePadWithSilence(trackData, timestamp);
        }
        await this.registerSample(trackData, internalSample);
      } finally {
        release();
      }
    }
    async maybePadWithSilence(trackData, untilTimestamp) {
      const lastSample = last(trackData.samples);
      const lastEndTimestamp = lastSample ? lastSample.timestamp + lastSample.duration : 0;
      const delta = untilTimestamp - lastEndTimestamp;
      const deltaInTimescale = intoTimescale(delta, trackData.timescale);
      if (deltaInTimescale > 0) {
        const { sampleSize, silentValue } = parsePcmCodec(trackData.info.decoderConfig.codec);
        const samplesNeeded = deltaInTimescale * trackData.info.numberOfChannels;
        const data = new Uint8Array(sampleSize * samplesNeeded).fill(silentValue);
        const paddingSample = this.createSampleForTrack(trackData, new Uint8Array(data.buffer), lastEndTimestamp, delta, "key");
        await this.registerSample(trackData, paddingSample);
      }
    }
    async addSubtitleCue(track, cue, meta) {
      const release = await this.mutex.acquire();
      try {
        const trackData = this.getSubtitleTrackData(track, meta);
        this.validateAndNormalizeTimestamp(trackData.track, cue.timestamp, true);
        if (track.source._codec === "webvtt") {
          trackData.cueQueue.push(cue);
          await this.processWebVTTCues(trackData, cue.timestamp);
        } else {
        }
      } finally {
        release();
      }
    }
    async processWebVTTCues(trackData, until) {
      while (trackData.cueQueue.length > 0) {
        const timestamps = /* @__PURE__ */ new Set([]);
        for (const cue of trackData.cueQueue) {
          assert(cue.timestamp <= until);
          assert(trackData.lastCueEndTimestamp <= cue.timestamp + cue.duration);
          timestamps.add(Math.max(cue.timestamp, trackData.lastCueEndTimestamp));
          timestamps.add(cue.timestamp + cue.duration);
        }
        const sortedTimestamps = [...timestamps].sort((a, b) => a - b);
        const sampleStart = sortedTimestamps[0];
        const sampleEnd = sortedTimestamps[1] ?? sampleStart;
        if (until < sampleEnd) {
          break;
        }
        if (trackData.lastCueEndTimestamp < sampleStart) {
          this.auxWriter.seek(0);
          const box2 = vtte();
          this.auxBoxWriter.writeBox(box2);
          const body2 = this.auxWriter.getSlice(0, this.auxWriter.getPos());
          const sample2 = this.createSampleForTrack(trackData, body2, trackData.lastCueEndTimestamp, sampleStart - trackData.lastCueEndTimestamp, "key");
          await this.registerSample(trackData, sample2);
          trackData.lastCueEndTimestamp = sampleStart;
        }
        this.auxWriter.seek(0);
        for (let i = 0; i < trackData.cueQueue.length; i++) {
          const cue = trackData.cueQueue[i];
          if (cue.timestamp >= sampleEnd) {
            break;
          }
          inlineTimestampRegex.lastIndex = 0;
          const containsTimestamp = inlineTimestampRegex.test(cue.text);
          const endTimestamp = cue.timestamp + cue.duration;
          let sourceId = trackData.cueToSourceId.get(cue);
          if (sourceId === void 0 && sampleEnd < endTimestamp) {
            sourceId = trackData.nextSourceId++;
            trackData.cueToSourceId.set(cue, sourceId);
          }
          if (cue.notes) {
            const box3 = vtta(cue.notes);
            this.auxBoxWriter.writeBox(box3);
          }
          const box2 = vttc(cue.text, containsTimestamp ? sampleStart : null, cue.identifier ?? null, cue.settings ?? null, sourceId ?? null);
          this.auxBoxWriter.writeBox(box2);
          if (endTimestamp === sampleEnd) {
            trackData.cueQueue.splice(i--, 1);
          }
        }
        const body = this.auxWriter.getSlice(0, this.auxWriter.getPos());
        const sample = this.createSampleForTrack(trackData, body, sampleStart, sampleEnd - sampleStart, "key");
        await this.registerSample(trackData, sample);
        trackData.lastCueEndTimestamp = sampleEnd;
      }
    }
    createSampleForTrack(trackData, data, timestamp, duration, type) {
      const sample = {
        timestamp,
        decodeTimestamp: timestamp,
        // This may be refined later
        duration,
        data,
        size: data.byteLength,
        type,
        timescaleUnitsToNextSample: intoTimescale(duration, trackData.timescale)
        // Will be refined
      };
      return sample;
    }
    processTimestamps(trackData, nextSample) {
      if (trackData.timestampProcessingQueue.length === 0) {
        return;
      }
      if (trackData.type === "audio" && trackData.info.requiresPcmTransformation) {
        let totalDuration = 0;
        for (let i = 0; i < trackData.timestampProcessingQueue.length; i++) {
          const sample = trackData.timestampProcessingQueue[i];
          const duration = intoTimescale(sample.duration, trackData.timescale);
          totalDuration += duration;
        }
        if (trackData.timeToSampleTable.length === 0) {
          trackData.timeToSampleTable.push({
            sampleCount: totalDuration,
            sampleDelta: 1
          });
        } else {
          const lastEntry = last(trackData.timeToSampleTable);
          lastEntry.sampleCount += totalDuration;
        }
        trackData.timestampProcessingQueue.length = 0;
        return;
      }
      const sortedTimestamps = trackData.timestampProcessingQueue.map((x) => x.timestamp).sort((a, b) => a - b);
      for (let i = 0; i < trackData.timestampProcessingQueue.length; i++) {
        const sample = trackData.timestampProcessingQueue[i];
        sample.decodeTimestamp = sortedTimestamps[i];
        if (!this.isFragmented && trackData.lastTimescaleUnits === null) {
          sample.decodeTimestamp = 0;
        }
        const sampleCompositionTimeOffset = intoTimescale(sample.timestamp - sample.decodeTimestamp, trackData.timescale);
        const durationInTimescale = intoTimescale(sample.duration, trackData.timescale);
        if (trackData.lastTimescaleUnits !== null) {
          assert(trackData.lastSample);
          const timescaleUnits = intoTimescale(sample.decodeTimestamp, trackData.timescale, false);
          const delta = Math.round(timescaleUnits - trackData.lastTimescaleUnits);
          assert(delta >= 0);
          trackData.lastTimescaleUnits += delta;
          trackData.lastSample.timescaleUnitsToNextSample = delta;
          if (!this.isFragmented) {
            let lastTableEntry = last(trackData.timeToSampleTable);
            assert(lastTableEntry);
            if (lastTableEntry.sampleCount === 1) {
              lastTableEntry.sampleDelta = delta;
              const entryBefore = trackData.timeToSampleTable[trackData.timeToSampleTable.length - 2];
              if (entryBefore && entryBefore.sampleDelta === delta) {
                entryBefore.sampleCount++;
                trackData.timeToSampleTable.pop();
                lastTableEntry = entryBefore;
              }
            } else if (lastTableEntry.sampleDelta !== delta) {
              lastTableEntry.sampleCount--;
              trackData.timeToSampleTable.push(lastTableEntry = {
                sampleCount: 1,
                sampleDelta: delta
              });
            }
            if (lastTableEntry.sampleDelta === durationInTimescale) {
              lastTableEntry.sampleCount++;
            } else {
              trackData.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: durationInTimescale
              });
            }
            const lastCompositionTimeOffsetTableEntry = last(trackData.compositionTimeOffsetTable);
            assert(lastCompositionTimeOffsetTableEntry);
            if (lastCompositionTimeOffsetTableEntry.sampleCompositionTimeOffset === sampleCompositionTimeOffset) {
              lastCompositionTimeOffsetTableEntry.sampleCount++;
            } else {
              trackData.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset
              });
            }
          }
        } else {
          trackData.lastTimescaleUnits = intoTimescale(sample.decodeTimestamp, trackData.timescale, false);
          if (!this.isFragmented) {
            trackData.timeToSampleTable.push({
              sampleCount: 1,
              sampleDelta: durationInTimescale
            });
            trackData.compositionTimeOffsetTable.push({
              sampleCount: 1,
              sampleCompositionTimeOffset
            });
          }
        }
        trackData.lastSample = sample;
      }
      trackData.timestampProcessingQueue.length = 0;
      assert(trackData.lastSample);
      assert(trackData.lastTimescaleUnits !== null);
      if (nextSample !== void 0 && trackData.lastSample.timescaleUnitsToNextSample === 0) {
        assert(nextSample.type === "key");
        const timescaleUnits = intoTimescale(nextSample.timestamp, trackData.timescale, false);
        const delta = Math.round(timescaleUnits - trackData.lastTimescaleUnits);
        trackData.lastSample.timescaleUnitsToNextSample = delta;
      }
    }
    async registerSample(trackData, sample) {
      if (sample.type === "key") {
        this.processTimestamps(trackData, sample);
      }
      trackData.timestampProcessingQueue.push(sample);
      if (this.isFragmented) {
        trackData.sampleQueue.push(sample);
        await this.interleaveSamples();
      } else if (this.fastStart === "reserve") {
        await this.registerSampleFastStartReserve(trackData, sample);
      } else {
        await this.addSampleToTrack(trackData, sample);
      }
    }
    async addSampleToTrack(trackData, sample) {
      if (!this.isFragmented) {
        trackData.samples.push(sample);
        if (this.fastStart === "reserve") {
          const maximumPacketCount = trackData.track.metadata.maximumPacketCount;
          assert(maximumPacketCount !== void 0);
          if (trackData.samples.length > maximumPacketCount) {
            throw new Error(`Track #${trackData.track.id} has already reached the maximum packet count (${maximumPacketCount}). Either add less packets or increase the maximum packet count.`);
          }
        }
      }
      let beginNewChunk = false;
      if (!trackData.currentChunk) {
        beginNewChunk = true;
      } else {
        trackData.currentChunk.startTimestamp = Math.min(trackData.currentChunk.startTimestamp, sample.timestamp);
        const currentChunkDuration = sample.timestamp - trackData.currentChunk.startTimestamp;
        if (this.isFragmented) {
          const keyFrameQueuedEverywhere = this.trackDatas.every((otherTrackData) => {
            if (trackData === otherTrackData) {
              return sample.type === "key";
            }
            const firstQueuedSample = otherTrackData.sampleQueue[0];
            if (firstQueuedSample) {
              return firstQueuedSample.type === "key";
            }
            return otherTrackData.track.source._closed;
          });
          if (currentChunkDuration >= this.minimumFragmentDuration && keyFrameQueuedEverywhere && sample.timestamp > this.maxWrittenTimestamp) {
            beginNewChunk = true;
            await this.finalizeFragment();
          }
        } else {
          beginNewChunk = currentChunkDuration >= 0.5;
        }
      }
      if (beginNewChunk) {
        if (trackData.currentChunk) {
          await this.finalizeCurrentChunk(trackData);
        }
        trackData.currentChunk = {
          startTimestamp: sample.timestamp,
          samples: [],
          offset: null,
          moofOffset: null
        };
      }
      assert(trackData.currentChunk);
      trackData.currentChunk.samples.push(sample);
      if (this.isFragmented) {
        this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, sample.timestamp);
      }
    }
    async finalizeCurrentChunk(trackData) {
      assert(!this.isFragmented);
      if (!trackData.currentChunk)
        return;
      trackData.finalizedChunks.push(trackData.currentChunk);
      this.finalizedChunks.push(trackData.currentChunk);
      let sampleCount = trackData.currentChunk.samples.length;
      if (trackData.type === "audio" && trackData.info.requiresPcmTransformation) {
        sampleCount = trackData.currentChunk.samples.reduce((acc, sample) => acc + intoTimescale(sample.duration, trackData.timescale), 0);
      }
      if (trackData.compactlyCodedChunkTable.length === 0 || last(trackData.compactlyCodedChunkTable).samplesPerChunk !== sampleCount) {
        trackData.compactlyCodedChunkTable.push({
          firstChunk: trackData.finalizedChunks.length,
          // 1-indexed
          samplesPerChunk: sampleCount
        });
      }
      if (this.fastStart === "in-memory") {
        trackData.currentChunk.offset = 0;
        return;
      }
      trackData.currentChunk.offset = this.writer.getPos();
      for (const sample of trackData.currentChunk.samples) {
        assert(sample.data);
        this.writer.write(sample.data);
        sample.data = null;
      }
      await this.writer.flush();
    }
    async interleaveSamples(isFinalCall = false) {
      assert(this.isFragmented);
      if (!isFinalCall && !this.allTracksAreKnown()) {
        return;
      }
      outer: while (true) {
        let trackWithMinTimestamp = null;
        let minTimestamp = Infinity;
        for (const trackData of this.trackDatas) {
          if (!isFinalCall && trackData.sampleQueue.length === 0 && !trackData.track.source._closed) {
            break outer;
          }
          if (trackData.sampleQueue.length > 0 && trackData.sampleQueue[0].timestamp < minTimestamp) {
            trackWithMinTimestamp = trackData;
            minTimestamp = trackData.sampleQueue[0].timestamp;
          }
        }
        if (!trackWithMinTimestamp) {
          break;
        }
        const sample = trackWithMinTimestamp.sampleQueue.shift();
        await this.addSampleToTrack(trackWithMinTimestamp, sample);
      }
    }
    async finalizeFragment(flushWriter = true) {
      assert(this.isFragmented);
      const fragmentNumber = this.nextFragmentNumber++;
      if (fragmentNumber === 1) {
        if (this.format._options.onMoov) {
          this.writer.startTrackingWrites();
        }
        const movieBox = moov(this);
        this.boxWriter.writeBox(movieBox);
        if (this.format._options.onMoov) {
          const { data, start } = this.writer.stopTrackingWrites();
          this.format._options.onMoov(data, start);
        }
      }
      const tracksInFragment = this.trackDatas.filter((x) => x.currentChunk);
      const moofBox = moof(fragmentNumber, tracksInFragment);
      const moofOffset = this.writer.getPos();
      const mdatStartPos = moofOffset + this.boxWriter.measureBox(moofBox);
      let currentPos = mdatStartPos + MIN_BOX_HEADER_SIZE;
      let fragmentStartTimestamp = Infinity;
      for (const trackData of tracksInFragment) {
        trackData.currentChunk.offset = currentPos;
        trackData.currentChunk.moofOffset = moofOffset;
        for (const sample of trackData.currentChunk.samples) {
          currentPos += sample.size;
        }
        fragmentStartTimestamp = Math.min(fragmentStartTimestamp, trackData.currentChunk.startTimestamp);
      }
      const mdatSize = currentPos - mdatStartPos;
      const needsLargeMdatSize = mdatSize >= 2 ** 32;
      if (needsLargeMdatSize) {
        for (const trackData of tracksInFragment) {
          trackData.currentChunk.offset += MAX_BOX_HEADER_SIZE - MIN_BOX_HEADER_SIZE;
        }
      }
      if (this.format._options.onMoof) {
        this.writer.startTrackingWrites();
      }
      const newMoofBox = moof(fragmentNumber, tracksInFragment);
      this.boxWriter.writeBox(newMoofBox);
      if (this.format._options.onMoof) {
        const { data, start } = this.writer.stopTrackingWrites();
        this.format._options.onMoof(data, start, fragmentStartTimestamp);
      }
      assert(this.writer.getPos() === mdatStartPos);
      if (this.format._options.onMdat) {
        this.writer.startTrackingWrites();
      }
      const mdatBox = mdat(needsLargeMdatSize);
      mdatBox.size = mdatSize;
      this.boxWriter.writeBox(mdatBox);
      this.writer.seek(mdatStartPos + (needsLargeMdatSize ? MAX_BOX_HEADER_SIZE : MIN_BOX_HEADER_SIZE));
      for (const trackData of tracksInFragment) {
        for (const sample of trackData.currentChunk.samples) {
          this.writer.write(sample.data);
          sample.data = null;
        }
      }
      if (this.format._options.onMdat) {
        const { data, start } = this.writer.stopTrackingWrites();
        this.format._options.onMdat(data, start);
      }
      for (const trackData of tracksInFragment) {
        trackData.finalizedChunks.push(trackData.currentChunk);
        this.finalizedChunks.push(trackData.currentChunk);
        trackData.currentChunk = null;
      }
      if (flushWriter) {
        await this.writer.flush();
      }
    }
    async registerSampleFastStartReserve(trackData, sample) {
      if (this.allTracksAreKnown()) {
        if (!this.mdat) {
          const moovBox = moov(this);
          const moovSize = this.boxWriter.measureBox(moovBox);
          const reservedSize = moovSize + this.computeSampleTableSizeUpperBound() + 4096;
          assert(this.ftypSize !== null);
          this.writer.seek(this.ftypSize + reservedSize);
          if (this.format._options.onMdat) {
            this.writer.startTrackingWrites();
          }
          this.mdat = mdat(true);
          this.boxWriter.writeBox(this.mdat);
          for (const trackData2 of this.trackDatas) {
            for (const sample2 of trackData2.sampleQueue) {
              await this.addSampleToTrack(trackData2, sample2);
            }
            trackData2.sampleQueue.length = 0;
          }
        }
        await this.addSampleToTrack(trackData, sample);
      } else {
        trackData.sampleQueue.push(sample);
      }
    }
    computeSampleTableSizeUpperBound() {
      assert(this.fastStart === "reserve");
      let upperBound = 0;
      for (const trackData of this.trackDatas) {
        const n = trackData.track.metadata.maximumPacketCount;
        assert(n !== void 0);
        upperBound += (4 + 4) * Math.ceil(2 / 3 * n);
        upperBound += 4 * n;
        upperBound += (4 + 4) * Math.ceil(2 / 3 * n);
        upperBound += (4 + 4 + 4) * Math.ceil(2 / 3 * n);
        upperBound += 4 * n;
        upperBound += 8 * n;
      }
      return upperBound;
    }
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async onTrackClose(track) {
      const release = await this.mutex.acquire();
      if (track.type === "subtitle" && track.source._codec === "webvtt") {
        const trackData = this.trackDatas.find((x) => x.track === track);
        if (trackData) {
          await this.processWebVTTCues(trackData, Infinity);
        }
      }
      if (this.allTracksAreKnown()) {
        this.allTracksKnown.resolve();
      }
      if (this.isFragmented) {
        await this.interleaveSamples();
      }
      release();
    }
    /** Finalizes the file, making it ready for use. Must be called after all video and audio chunks have been added. */
    async finalize() {
      const release = await this.mutex.acquire();
      this.allTracksKnown.resolve();
      for (const trackData of this.trackDatas) {
        if (trackData.type === "subtitle" && trackData.track.source._codec === "webvtt") {
          await this.processWebVTTCues(trackData, Infinity);
        }
      }
      if (this.isFragmented) {
        await this.interleaveSamples(true);
        for (const trackData of this.trackDatas) {
          this.processTimestamps(trackData);
        }
        await this.finalizeFragment(false);
      } else {
        for (const trackData of this.trackDatas) {
          this.processTimestamps(trackData);
          await this.finalizeCurrentChunk(trackData);
        }
      }
      if (this.fastStart === "in-memory") {
        this.mdat = mdat(false);
        let mdatSize;
        for (let i = 0; i < 2; i++) {
          const movieBox2 = moov(this);
          const movieBoxSize = this.boxWriter.measureBox(movieBox2);
          mdatSize = this.boxWriter.measureBox(this.mdat);
          let currentChunkPos = this.writer.getPos() + movieBoxSize + mdatSize;
          for (const chunk of this.finalizedChunks) {
            chunk.offset = currentChunkPos;
            for (const { data } of chunk.samples) {
              assert(data);
              currentChunkPos += data.byteLength;
              mdatSize += data.byteLength;
            }
          }
          if (currentChunkPos < 2 ** 32)
            break;
          if (mdatSize >= 2 ** 32)
            this.mdat.largeSize = true;
        }
        if (this.format._options.onMoov) {
          this.writer.startTrackingWrites();
        }
        const movieBox = moov(this);
        this.boxWriter.writeBox(movieBox);
        if (this.format._options.onMoov) {
          const { data, start } = this.writer.stopTrackingWrites();
          this.format._options.onMoov(data, start);
        }
        if (this.format._options.onMdat) {
          this.writer.startTrackingWrites();
        }
        this.mdat.size = mdatSize;
        this.boxWriter.writeBox(this.mdat);
        for (const chunk of this.finalizedChunks) {
          for (const sample of chunk.samples) {
            assert(sample.data);
            this.writer.write(sample.data);
            sample.data = null;
          }
        }
        if (this.format._options.onMdat) {
          const { data, start } = this.writer.stopTrackingWrites();
          this.format._options.onMdat(data, start);
        }
      } else if (this.isFragmented) {
        const startPos = this.writer.getPos();
        const mfraBox = mfra(this.trackDatas);
        this.boxWriter.writeBox(mfraBox);
        const mfraBoxSize = this.writer.getPos() - startPos;
        this.writer.seek(this.writer.getPos() - 4);
        this.boxWriter.writeU32(mfraBoxSize);
      } else {
        assert(this.mdat);
        const mdatPos = this.boxWriter.offsets.get(this.mdat);
        assert(mdatPos !== void 0);
        const mdatSize = this.writer.getPos() - mdatPos;
        this.mdat.size = mdatSize;
        this.mdat.largeSize = mdatSize >= 2 ** 32;
        this.boxWriter.patchBox(this.mdat);
        if (this.format._options.onMdat) {
          const { data, start } = this.writer.stopTrackingWrites();
          this.format._options.onMdat(data, start);
        }
        const movieBox = moov(this);
        if (this.fastStart === "reserve") {
          assert(this.ftypSize !== null);
          this.writer.seek(this.ftypSize);
          if (this.format._options.onMoov) {
            this.writer.startTrackingWrites();
          }
          this.boxWriter.writeBox(movieBox);
          const remainingSpace = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
          this.boxWriter.writeBox(free(remainingSpace));
        } else {
          if (this.format._options.onMoov) {
            this.writer.startTrackingWrites();
          }
          this.boxWriter.writeBox(movieBox);
        }
        if (this.format._options.onMoov) {
          const { data, start } = this.writer.stopTrackingWrites();
          this.format._options.onMoov(data, start);
        }
      }
      release();
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/matroska/matroska-muxer.js
  var MIN_CLUSTER_TIMESTAMP_MS = -(2 ** 15);
  var MAX_CLUSTER_TIMESTAMP_MS = 2 ** 15 - 1;
  var APP_NAME = "Mediabunny";
  var SEGMENT_SIZE_BYTES = 6;
  var CLUSTER_SIZE_BYTES = 5;
  var TRACK_TYPE_MAP = {
    video: 1,
    audio: 2,
    subtitle: 17
  };
  var MatroskaMuxer = class extends Muxer {
    constructor(output, format) {
      super(output);
      this.trackDatas = [];
      this.allTracksKnown = promiseWithResolvers();
      this.segment = null;
      this.segmentInfo = null;
      this.seekHead = null;
      this.tracksElement = null;
      this.tagsElement = null;
      this.attachmentsElement = null;
      this.segmentDuration = null;
      this.cues = null;
      this.currentCluster = null;
      this.currentClusterStartMsTimestamp = null;
      this.currentClusterMaxMsTimestamp = null;
      this.trackDatasInCurrentCluster = /* @__PURE__ */ new Map();
      this.duration = 0;
      this.writer = output._writer;
      this.format = format;
      this.ebmlWriter = new EBMLWriter(this.writer);
      if (this.format._options.appendOnly) {
        this.writer.ensureMonotonicity = true;
      }
    }
    async start() {
      const release = await this.mutex.acquire();
      this.writeEBMLHeader();
      this.createSegmentInfo();
      this.createCues();
      await this.writer.flush();
      release();
    }
    writeEBMLHeader() {
      if (this.format._options.onEbmlHeader) {
        this.writer.startTrackingWrites();
      }
      const ebmlHeader = { id: EBMLId.EBML, data: [
        { id: EBMLId.EBMLVersion, data: 1 },
        { id: EBMLId.EBMLReadVersion, data: 1 },
        { id: EBMLId.EBMLMaxIDLength, data: 4 },
        { id: EBMLId.EBMLMaxSizeLength, data: 8 },
        { id: EBMLId.DocType, data: this.format instanceof WebMOutputFormat ? "webm" : "matroska" },
        { id: EBMLId.DocTypeVersion, data: 2 },
        { id: EBMLId.DocTypeReadVersion, data: 2 }
      ] };
      this.ebmlWriter.writeEBML(ebmlHeader);
      if (this.format._options.onEbmlHeader) {
        const { data, start } = this.writer.stopTrackingWrites();
        this.format._options.onEbmlHeader(data, start);
      }
    }
    /**
     * Creates a SeekHead element which is positioned near the start of the file and allows the media player to seek to
     * relevant sections more easily. Since we don't know the positions of those sections yet, we'll set them later.
     */
    maybeCreateSeekHead(writeOffsets) {
      if (this.format._options.appendOnly) {
        return;
      }
      const kaxCues = new Uint8Array([28, 83, 187, 107]);
      const kaxInfo = new Uint8Array([21, 73, 169, 102]);
      const kaxTracks = new Uint8Array([22, 84, 174, 107]);
      const kaxAttachments = new Uint8Array([25, 65, 164, 105]);
      const kaxTags = new Uint8Array([18, 84, 195, 103]);
      const seekHead = { id: EBMLId.SeekHead, data: [
        { id: EBMLId.Seek, data: [
          { id: EBMLId.SeekID, data: kaxCues },
          {
            id: EBMLId.SeekPosition,
            size: 5,
            data: writeOffsets ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
          }
        ] },
        { id: EBMLId.Seek, data: [
          { id: EBMLId.SeekID, data: kaxInfo },
          {
            id: EBMLId.SeekPosition,
            size: 5,
            data: writeOffsets ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
          }
        ] },
        { id: EBMLId.Seek, data: [
          { id: EBMLId.SeekID, data: kaxTracks },
          {
            id: EBMLId.SeekPosition,
            size: 5,
            data: writeOffsets ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
          }
        ] },
        this.attachmentsElement ? { id: EBMLId.Seek, data: [
          { id: EBMLId.SeekID, data: kaxAttachments },
          {
            id: EBMLId.SeekPosition,
            size: 5,
            data: writeOffsets ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
          }
        ] } : null,
        this.tagsElement ? { id: EBMLId.Seek, data: [
          { id: EBMLId.SeekID, data: kaxTags },
          {
            id: EBMLId.SeekPosition,
            size: 5,
            data: writeOffsets ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
          }
        ] } : null
      ] };
      this.seekHead = seekHead;
    }
    createSegmentInfo() {
      const segmentDuration = { id: EBMLId.Duration, data: new EBMLFloat64(0) };
      this.segmentDuration = segmentDuration;
      const segmentInfo = { id: EBMLId.Info, data: [
        { id: EBMLId.TimestampScale, data: 1e6 },
        { id: EBMLId.MuxingApp, data: APP_NAME },
        { id: EBMLId.WritingApp, data: APP_NAME },
        !this.format._options.appendOnly ? segmentDuration : null
      ] };
      this.segmentInfo = segmentInfo;
    }
    createTracks() {
      const tracksElement = { id: EBMLId.Tracks, data: [] };
      this.tracksElement = tracksElement;
      for (const trackData of this.trackDatas) {
        const codecId = CODEC_STRING_MAP[trackData.track.source._codec];
        assert(codecId);
        let seekPreRollNs = 0;
        if (trackData.type === "audio" && trackData.track.source._codec === "opus") {
          seekPreRollNs = 1e6 * 80;
          const description = trackData.info.decoderConfig.description;
          if (description) {
            const bytes2 = toUint8Array(description);
            const header = parseOpusIdentificationHeader(bytes2);
            seekPreRollNs = Math.round(1e9 * (header.preSkip / OPUS_SAMPLE_RATE));
          }
        }
        tracksElement.data.push({ id: EBMLId.TrackEntry, data: [
          { id: EBMLId.TrackNumber, data: trackData.track.id },
          { id: EBMLId.TrackUID, data: trackData.track.id },
          { id: EBMLId.TrackType, data: TRACK_TYPE_MAP[trackData.type] },
          trackData.track.metadata.disposition?.default === false ? { id: EBMLId.FlagDefault, data: 0 } : null,
          trackData.track.metadata.disposition?.forced ? { id: EBMLId.FlagForced, data: 1 } : null,
          trackData.track.metadata.disposition?.hearingImpaired ? { id: EBMLId.FlagHearingImpaired, data: 1 } : null,
          trackData.track.metadata.disposition?.visuallyImpaired ? { id: EBMLId.FlagVisualImpaired, data: 1 } : null,
          trackData.track.metadata.disposition?.original ? { id: EBMLId.FlagOriginal, data: 1 } : null,
          trackData.track.metadata.disposition?.commentary ? { id: EBMLId.FlagCommentary, data: 1 } : null,
          { id: EBMLId.FlagLacing, data: 0 },
          { id: EBMLId.Language, data: trackData.track.metadata.languageCode ?? UNDETERMINED_LANGUAGE },
          { id: EBMLId.CodecID, data: codecId },
          { id: EBMLId.CodecDelay, data: 0 },
          { id: EBMLId.SeekPreRoll, data: seekPreRollNs },
          trackData.track.metadata.name !== void 0 ? { id: EBMLId.Name, data: new EBMLUnicodeString(trackData.track.metadata.name) } : null,
          trackData.type === "video" ? this.videoSpecificTrackInfo(trackData) : null,
          trackData.type === "audio" ? this.audioSpecificTrackInfo(trackData) : null,
          trackData.type === "subtitle" ? this.subtitleSpecificTrackInfo(trackData) : null
        ] });
      }
    }
    videoSpecificTrackInfo(trackData) {
      const { frameRate, rotation } = trackData.track.metadata;
      const elements = [
        trackData.info.decoderConfig.description ? {
          id: EBMLId.CodecPrivate,
          data: toUint8Array(trackData.info.decoderConfig.description)
        } : null,
        frameRate ? {
          id: EBMLId.DefaultDuration,
          data: 1e9 / frameRate
        } : null
      ];
      const flippedRotation = rotation ? normalizeRotation(-rotation) : 0;
      const hasNonSquarePixelAspectRatio = !!trackData.info.aspectRatio && trackData.info.aspectRatio.num * trackData.info.height !== trackData.info.aspectRatio.den * trackData.info.width;
      const colorSpace = trackData.info.decoderConfig.colorSpace;
      const videoElement = { id: EBMLId.Video, data: [
        { id: EBMLId.PixelWidth, data: trackData.info.width },
        { id: EBMLId.PixelHeight, data: trackData.info.height },
        hasNonSquarePixelAspectRatio ? { id: EBMLId.DisplayWidth, data: trackData.info.aspectRatio.num } : null,
        hasNonSquarePixelAspectRatio ? { id: EBMLId.DisplayHeight, data: trackData.info.aspectRatio.den } : null,
        hasNonSquarePixelAspectRatio ? { id: EBMLId.DisplayUnit, data: 3 } : null,
        // 3 = display aspect ratio
        trackData.info.alphaMode ? { id: EBMLId.AlphaMode, data: 1 } : null,
        colorSpaceIsComplete(colorSpace) ? {
          id: EBMLId.Colour,
          data: [
            {
              id: EBMLId.MatrixCoefficients,
              data: MATRIX_COEFFICIENTS_MAP[colorSpace.matrix]
            },
            {
              id: EBMLId.TransferCharacteristics,
              data: TRANSFER_CHARACTERISTICS_MAP[colorSpace.transfer]
            },
            {
              id: EBMLId.Primaries,
              data: COLOR_PRIMARIES_MAP[colorSpace.primaries]
            },
            {
              id: EBMLId.Range,
              data: colorSpace.fullRange ? 2 : 1
            }
          ]
        } : null,
        flippedRotation ? {
          id: EBMLId.Projection,
          data: [
            {
              id: EBMLId.ProjectionType,
              data: 0
              // rectangular
            },
            {
              id: EBMLId.ProjectionPoseRoll,
              data: new EBMLFloat32((flippedRotation + 180) % 360 - 180)
              // [0, 270] -> [-180, 90]
            }
          ]
        } : null
      ] };
      elements.push(videoElement);
      return elements;
    }
    audioSpecificTrackInfo(trackData) {
      const pcmInfo = PCM_AUDIO_CODECS.includes(trackData.track.source._codec) ? parsePcmCodec(trackData.track.source._codec) : null;
      return [
        trackData.info.decoderConfig.description ? {
          id: EBMLId.CodecPrivate,
          data: toUint8Array(trackData.info.decoderConfig.description)
        } : null,
        { id: EBMLId.Audio, data: [
          { id: EBMLId.SamplingFrequency, data: new EBMLFloat32(trackData.info.sampleRate) },
          { id: EBMLId.Channels, data: trackData.info.numberOfChannels },
          pcmInfo ? { id: EBMLId.BitDepth, data: 8 * pcmInfo.sampleSize } : null
        ] }
      ];
    }
    subtitleSpecificTrackInfo(trackData) {
      return [
        { id: EBMLId.CodecPrivate, data: textEncoder.encode(trackData.info.config.description) }
      ];
    }
    maybeCreateTags() {
      const simpleTags = [];
      const addSimpleTag = (key, value) => {
        simpleTags.push({ id: EBMLId.SimpleTag, data: [
          { id: EBMLId.TagName, data: new EBMLUnicodeString(key) },
          typeof value === "string" ? { id: EBMLId.TagString, data: new EBMLUnicodeString(value) } : { id: EBMLId.TagBinary, data: value }
        ] });
      };
      const metadataTags = this.output._metadataTags;
      const writtenTags = /* @__PURE__ */ new Set();
      for (const { key, value } of keyValueIterator(metadataTags)) {
        switch (key) {
          case "title":
            {
              addSimpleTag("TITLE", value);
              writtenTags.add("TITLE");
            }
            ;
            break;
          case "description":
            {
              addSimpleTag("DESCRIPTION", value);
              writtenTags.add("DESCRIPTION");
            }
            ;
            break;
          case "artist":
            {
              addSimpleTag("ARTIST", value);
              writtenTags.add("ARTIST");
            }
            ;
            break;
          case "album":
            {
              addSimpleTag("ALBUM", value);
              writtenTags.add("ALBUM");
            }
            ;
            break;
          case "albumArtist":
            {
              addSimpleTag("ALBUM_ARTIST", value);
              writtenTags.add("ALBUM_ARTIST");
            }
            ;
            break;
          case "genre":
            {
              addSimpleTag("GENRE", value);
              writtenTags.add("GENRE");
            }
            ;
            break;
          case "comment":
            {
              addSimpleTag("COMMENT", value);
              writtenTags.add("COMMENT");
            }
            ;
            break;
          case "lyrics":
            {
              addSimpleTag("LYRICS", value);
              writtenTags.add("LYRICS");
            }
            ;
            break;
          case "date":
            {
              addSimpleTag("DATE", value.toISOString().slice(0, 10));
              writtenTags.add("DATE");
            }
            ;
            break;
          case "trackNumber":
            {
              const string = metadataTags.tracksTotal !== void 0 ? `${value}/${metadataTags.tracksTotal}` : value.toString();
              addSimpleTag("PART_NUMBER", string);
              writtenTags.add("PART_NUMBER");
            }
            ;
            break;
          case "discNumber":
            {
              const string = metadataTags.discsTotal !== void 0 ? `${value}/${metadataTags.discsTotal}` : value.toString();
              addSimpleTag("DISC", string);
              writtenTags.add("DISC");
            }
            ;
            break;
          case "tracksTotal":
          case "discsTotal":
            {
            }
            ;
            break;
          case "images":
          case "raw":
            {
            }
            ;
            break;
          default:
            assertNever(key);
        }
      }
      if (metadataTags.raw) {
        for (const key in metadataTags.raw) {
          const value = metadataTags.raw[key];
          if (value == null || writtenTags.has(key)) {
            continue;
          }
          if (typeof value === "string" || value instanceof Uint8Array) {
            addSimpleTag(key, value);
          }
        }
      }
      if (simpleTags.length === 0) {
        return;
      }
      this.tagsElement = {
        id: EBMLId.Tags,
        data: [{ id: EBMLId.Tag, data: [
          { id: EBMLId.Targets, data: [
            { id: EBMLId.TargetTypeValue, data: 50 },
            { id: EBMLId.TargetType, data: "MOVIE" }
          ] },
          ...simpleTags
        ] }]
      };
    }
    maybeCreateAttachments() {
      const metadataTags = this.output._metadataTags;
      const elements = [];
      const existingFileUids = /* @__PURE__ */ new Set();
      const images = metadataTags.images ?? [];
      for (const image of images) {
        let imageName = image.name;
        if (imageName === void 0) {
          const baseName = image.kind === "coverFront" ? "cover" : image.kind === "coverBack" ? "back" : "image";
          imageName = baseName + (imageMimeTypeToExtension(image.mimeType) ?? "");
        }
        let fileUid;
        while (true) {
          fileUid = 0n;
          for (let i = 0; i < 8; i++) {
            fileUid <<= 8n;
            fileUid |= BigInt(Math.floor(Math.random() * 256));
          }
          if (fileUid !== 0n && !existingFileUids.has(fileUid)) {
            break;
          }
        }
        existingFileUids.add(fileUid);
        elements.push({
          id: EBMLId.AttachedFile,
          data: [
            image.description !== void 0 ? { id: EBMLId.FileDescription, data: new EBMLUnicodeString(image.description) } : null,
            { id: EBMLId.FileName, data: new EBMLUnicodeString(imageName) },
            { id: EBMLId.FileMediaType, data: image.mimeType },
            { id: EBMLId.FileData, data: image.data },
            { id: EBMLId.FileUID, data: fileUid }
          ]
        });
      }
      for (const [key, value] of Object.entries(metadataTags.raw ?? {})) {
        if (!(value instanceof AttachedFile)) {
          continue;
        }
        const keyIsNumeric = /^\d+$/.test(key);
        if (!keyIsNumeric) {
          continue;
        }
        if (images.find((x) => x.mimeType === value.mimeType && uint8ArraysAreEqual(x.data, value.data))) {
          continue;
        }
        elements.push({
          id: EBMLId.AttachedFile,
          data: [
            value.description !== void 0 ? { id: EBMLId.FileDescription, data: new EBMLUnicodeString(value.description) } : null,
            { id: EBMLId.FileName, data: new EBMLUnicodeString(value.name ?? "") },
            { id: EBMLId.FileMediaType, data: value.mimeType ?? "" },
            { id: EBMLId.FileData, data: value.data },
            { id: EBMLId.FileUID, data: BigInt(key) }
          ]
        });
      }
      if (elements.length === 0) {
        return;
      }
      this.attachmentsElement = { id: EBMLId.Attachments, data: elements };
    }
    createSegment() {
      this.createTracks();
      this.maybeCreateTags();
      this.maybeCreateAttachments();
      this.maybeCreateSeekHead(false);
      const segment = {
        id: EBMLId.Segment,
        size: this.format._options.appendOnly ? -1 : SEGMENT_SIZE_BYTES,
        data: [
          this.seekHead,
          // null if append-only
          this.segmentInfo,
          this.tracksElement,
          // Matroska spec says put this at the end of the file, but I think placing it before the first cluster
          // makes more sense, and FFmpeg agrees (argumentum ad ffmpegum fallacy)
          this.attachmentsElement,
          this.tagsElement
        ]
      };
      this.segment = segment;
      if (this.format._options.onSegmentHeader) {
        this.writer.startTrackingWrites();
      }
      this.ebmlWriter.writeEBML(segment);
      if (this.format._options.onSegmentHeader) {
        const { data, start } = this.writer.stopTrackingWrites();
        this.format._options.onSegmentHeader(data, start);
      }
    }
    createCues() {
      this.cues = { id: EBMLId.Cues, data: [] };
    }
    get segmentDataOffset() {
      assert(this.segment);
      return this.ebmlWriter.dataOffsets.get(this.segment);
    }
    allTracksAreKnown() {
      for (const track of this.output._tracks) {
        if (!track.source._closed && !this.trackDatas.some((x) => x.track === track)) {
          return false;
        }
      }
      return true;
    }
    async getMimeType() {
      await this.allTracksKnown.promise;
      const codecStrings = this.trackDatas.map((trackData) => {
        if (trackData.type === "video") {
          return trackData.info.decoderConfig.codec;
        } else if (trackData.type === "audio") {
          return trackData.info.decoderConfig.codec;
        } else {
          const map = {
            webvtt: "wvtt"
          };
          return map[trackData.track.source._codec];
        }
      });
      return buildMatroskaMimeType({
        isWebM: this.format instanceof WebMOutputFormat,
        hasVideo: this.trackDatas.some((x) => x.type === "video"),
        hasAudio: this.trackDatas.some((x) => x.type === "audio"),
        codecStrings
      });
    }
    getVideoTrackData(track, packet, meta) {
      const existingTrackData = this.trackDatas.find((x) => x.track === track);
      if (existingTrackData) {
        return existingTrackData;
      }
      validateVideoChunkMetadata(meta);
      assert(meta);
      assert(meta.decoderConfig);
      assert(meta.decoderConfig.codedWidth !== void 0);
      assert(meta.decoderConfig.codedHeight !== void 0);
      const displayAspectWidth = meta.decoderConfig.displayAspectWidth;
      const displayAspectHeight = meta.decoderConfig.displayAspectHeight;
      const aspectRatio = displayAspectWidth === void 0 || displayAspectHeight === void 0 ? null : simplifyRational({
        num: displayAspectWidth,
        den: displayAspectHeight
      });
      const newTrackData = {
        track,
        type: "video",
        info: {
          width: meta.decoderConfig.codedWidth,
          height: meta.decoderConfig.codedHeight,
          aspectRatio,
          decoderConfig: meta.decoderConfig,
          alphaMode: !!packet.sideData.alpha
          // The first packet determines if this track has alpha or not
        },
        chunkQueue: [],
        lastWrittenMsTimestamp: null
      };
      if (track.source._codec === "vp9") {
        newTrackData.info.decoderConfig = {
          ...newTrackData.info.decoderConfig,
          description: new Uint8Array(generateVp9CodecConfigurationFromCodecString(newTrackData.info.decoderConfig.codec))
        };
      } else if (track.source._codec === "av1") {
        newTrackData.info.decoderConfig = {
          ...newTrackData.info.decoderConfig,
          description: new Uint8Array(generateAv1CodecConfigurationFromCodecString(newTrackData.info.decoderConfig.codec))
        };
      }
      this.trackDatas.push(newTrackData);
      this.trackDatas.sort((a, b) => a.track.id - b.track.id);
      if (this.allTracksAreKnown()) {
        this.allTracksKnown.resolve();
      }
      return newTrackData;
    }
    getAudioTrackData(track, packet, meta) {
      const existingTrackData = this.trackDatas.find((x) => x.track === track);
      if (existingTrackData) {
        return existingTrackData;
      }
      validateAudioChunkMetadata(meta);
      assert(meta);
      assert(meta.decoderConfig);
      const decoderConfig = { ...meta.decoderConfig };
      let requiresAdtsStripping = false;
      if (track.source._codec === "aac" && !decoderConfig.description) {
        const adtsFrame = readAdtsFrameHeader(FileSlice.tempFromBytes(packet.data));
        if (!adtsFrame) {
          throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
        }
        const sampleRate = aacFrequencyTable[adtsFrame.samplingFrequencyIndex];
        const numberOfChannels = aacChannelMap[adtsFrame.channelConfiguration];
        if (sampleRate === void 0 || numberOfChannels === void 0) {
          throw new Error("Invalid ADTS frame header.");
        }
        decoderConfig.description = buildAacAudioSpecificConfig({
          objectType: adtsFrame.objectType,
          sampleRate,
          numberOfChannels
        });
        requiresAdtsStripping = true;
      }
      const newTrackData = {
        track,
        type: "audio",
        info: {
          numberOfChannels: meta.decoderConfig.numberOfChannels,
          sampleRate: meta.decoderConfig.sampleRate,
          decoderConfig,
          requiresAdtsStripping
        },
        chunkQueue: [],
        lastWrittenMsTimestamp: null
      };
      this.trackDatas.push(newTrackData);
      this.trackDatas.sort((a, b) => a.track.id - b.track.id);
      if (this.allTracksAreKnown()) {
        this.allTracksKnown.resolve();
      }
      return newTrackData;
    }
    getSubtitleTrackData(track, meta) {
      const existingTrackData = this.trackDatas.find((x) => x.track === track);
      if (existingTrackData) {
        return existingTrackData;
      }
      validateSubtitleMetadata(meta);
      assert(meta);
      assert(meta.config);
      const newTrackData = {
        track,
        type: "subtitle",
        info: {
          config: meta.config
        },
        chunkQueue: [],
        lastWrittenMsTimestamp: null
      };
      this.trackDatas.push(newTrackData);
      this.trackDatas.sort((a, b) => a.track.id - b.track.id);
      if (this.allTracksAreKnown()) {
        this.allTracksKnown.resolve();
      }
      return newTrackData;
    }
    async addEncodedVideoPacket(track, packet, meta) {
      const release = await this.mutex.acquire();
      try {
        const trackData = this.getVideoTrackData(track, packet, meta);
        const isKeyFrame = packet.type === "key";
        let timestamp = this.validateAndNormalizeTimestamp(trackData.track, packet.timestamp, isKeyFrame);
        let duration = packet.duration;
        if (track.metadata.frameRate !== void 0) {
          timestamp = roundToMultiple(timestamp, 1 / track.metadata.frameRate);
          duration = roundToMultiple(duration, 1 / track.metadata.frameRate);
        }
        const additions = trackData.info.alphaMode ? packet.sideData.alpha ?? null : null;
        const videoChunk = this.createInternalChunk(packet.data, timestamp, duration, packet.type, additions);
        if (track.source._codec === "vp9")
          this.fixVP9ColorSpace(trackData, videoChunk);
        trackData.chunkQueue.push(videoChunk);
        await this.interleaveChunks();
      } finally {
        release();
      }
    }
    async addEncodedAudioPacket(track, packet, meta) {
      const release = await this.mutex.acquire();
      try {
        const trackData = this.getAudioTrackData(track, packet, meta);
        let packetData = packet.data;
        if (trackData.info.requiresAdtsStripping) {
          const adtsFrame = readAdtsFrameHeader(FileSlice.tempFromBytes(packetData));
          if (!adtsFrame) {
            throw new Error("Expected ADTS frame, didn't get one.");
          }
          const headerLength = adtsFrame.crcCheck === null ? MIN_ADTS_FRAME_HEADER_SIZE : MAX_ADTS_FRAME_HEADER_SIZE;
          packetData = packetData.subarray(headerLength);
        }
        const isKeyFrame = packet.type === "key";
        const timestamp = this.validateAndNormalizeTimestamp(trackData.track, packet.timestamp, isKeyFrame);
        const audioChunk = this.createInternalChunk(packetData, timestamp, packet.duration, packet.type);
        trackData.chunkQueue.push(audioChunk);
        await this.interleaveChunks();
      } finally {
        release();
      }
    }
    async addSubtitleCue(track, cue, meta) {
      const release = await this.mutex.acquire();
      try {
        const trackData = this.getSubtitleTrackData(track, meta);
        const timestamp = this.validateAndNormalizeTimestamp(trackData.track, cue.timestamp, true);
        let bodyText = cue.text;
        const timestampMs = Math.round(timestamp * 1e3);
        inlineTimestampRegex.lastIndex = 0;
        bodyText = bodyText.replace(inlineTimestampRegex, (match) => {
          const time = parseSubtitleTimestamp(match.slice(1, -1));
          const offsetTime = time - timestampMs;
          return `<${formatSubtitleTimestamp(offsetTime)}>`;
        });
        const body = textEncoder.encode(bodyText);
        const additions = `${cue.settings ?? ""}
${cue.identifier ?? ""}
${cue.notes ?? ""}`;
        const subtitleChunk = this.createInternalChunk(body, timestamp, cue.duration, "key", additions.trim() ? textEncoder.encode(additions) : null);
        trackData.chunkQueue.push(subtitleChunk);
        await this.interleaveChunks();
      } finally {
        release();
      }
    }
    async interleaveChunks(isFinalCall = false) {
      if (!isFinalCall && !this.allTracksAreKnown()) {
        return;
      }
      outer: while (true) {
        let trackWithMinTimestamp = null;
        let minTimestamp = Infinity;
        for (const trackData of this.trackDatas) {
          if (!isFinalCall && trackData.chunkQueue.length === 0 && !trackData.track.source._closed) {
            break outer;
          }
          if (trackData.chunkQueue.length > 0 && trackData.chunkQueue[0].timestamp < minTimestamp) {
            trackWithMinTimestamp = trackData;
            minTimestamp = trackData.chunkQueue[0].timestamp;
          }
        }
        if (!trackWithMinTimestamp) {
          break;
        }
        const chunk = trackWithMinTimestamp.chunkQueue.shift();
        this.writeBlock(trackWithMinTimestamp, chunk);
      }
      if (!isFinalCall) {
        await this.writer.flush();
      }
    }
    /**
     * Due to [a bug in Chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=1377842), VP9 streams often
     * lack color space information. This method patches in that information.
     */
    fixVP9ColorSpace(trackData, chunk) {
      if (chunk.type !== "key")
        return;
      if (!trackData.info.decoderConfig.colorSpace || !trackData.info.decoderConfig.colorSpace.matrix)
        return;
      const bitstream = new Bitstream(chunk.data);
      bitstream.skipBits(2);
      const profileLowBit = bitstream.readBits(1);
      const profileHighBit = bitstream.readBits(1);
      const profile = (profileHighBit << 1) + profileLowBit;
      if (profile === 3)
        bitstream.skipBits(1);
      const showExistingFrame = bitstream.readBits(1);
      if (showExistingFrame)
        return;
      const frameType = bitstream.readBits(1);
      if (frameType !== 0)
        return;
      bitstream.skipBits(2);
      const syncCode = bitstream.readBits(24);
      if (syncCode !== 4817730)
        return;
      if (profile >= 2)
        bitstream.skipBits(1);
      const colorSpaceID = {
        rgb: 7,
        bt709: 2,
        bt470bg: 1,
        smpte170m: 3
      }[trackData.info.decoderConfig.colorSpace.matrix];
      writeBits(chunk.data, bitstream.pos, bitstream.pos + 3, colorSpaceID);
    }
    /** Converts a read-only external chunk into an internal one for easier use. */
    createInternalChunk(data, timestamp, duration, type, additions = null) {
      const internalChunk = {
        data,
        type,
        timestamp,
        duration,
        additions
      };
      return internalChunk;
    }
    /** Writes a block containing media data to the file. */
    writeBlock(trackData, chunk) {
      if (!this.segment) {
        this.createSegment();
      }
      const msTimestamp = Math.round(1e3 * chunk.timestamp);
      const keyFrameQueuedEverywhere = this.trackDatas.every((otherTrackData) => {
        if (trackData === otherTrackData) {
          return chunk.type === "key";
        }
        const firstQueuedSample = otherTrackData.chunkQueue[0];
        if (firstQueuedSample) {
          return firstQueuedSample.type === "key";
        }
        return otherTrackData.track.source._closed;
      });
      let shouldCreateNewCluster = false;
      if (!this.currentCluster) {
        shouldCreateNewCluster = true;
      } else {
        assert(this.currentClusterStartMsTimestamp !== null);
        assert(this.currentClusterMaxMsTimestamp !== null);
        const relativeTimestamp2 = msTimestamp - this.currentClusterStartMsTimestamp;
        shouldCreateNewCluster = keyFrameQueuedEverywhere && msTimestamp > this.currentClusterMaxMsTimestamp && relativeTimestamp2 >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || relativeTimestamp2 > MAX_CLUSTER_TIMESTAMP_MS;
      }
      if (shouldCreateNewCluster) {
        this.createNewCluster(msTimestamp);
      }
      const relativeTimestamp = msTimestamp - this.currentClusterStartMsTimestamp;
      if (relativeTimestamp < MIN_CLUSTER_TIMESTAMP_MS) {
        return;
      }
      const prelude = new Uint8Array(4);
      const view2 = new DataView(prelude.buffer);
      view2.setUint8(0, 128 | trackData.track.id);
      view2.setInt16(1, relativeTimestamp, false);
      const msDuration = Math.round(1e3 * chunk.duration);
      if (!chunk.additions) {
        view2.setUint8(3, Number(chunk.type === "key") << 7);
        const simpleBlock = { id: EBMLId.SimpleBlock, data: [
          prelude,
          chunk.data
        ] };
        this.ebmlWriter.writeEBML(simpleBlock);
      } else {
        const blockGroup = { id: EBMLId.BlockGroup, data: [
          { id: EBMLId.Block, data: [
            prelude,
            chunk.data
          ] },
          chunk.type === "delta" ? {
            id: EBMLId.ReferenceBlock,
            data: new EBMLSignedInt(trackData.lastWrittenMsTimestamp - msTimestamp)
          } : null,
          chunk.additions ? { id: EBMLId.BlockAdditions, data: [
            { id: EBMLId.BlockMore, data: [
              { id: EBMLId.BlockAddID, data: 1 },
              // Some players expect BlockAddID to come first
              { id: EBMLId.BlockAdditional, data: chunk.additions }
            ] }
          ] } : null,
          msDuration > 0 ? { id: EBMLId.BlockDuration, data: msDuration } : null
        ] };
        this.ebmlWriter.writeEBML(blockGroup);
      }
      this.duration = Math.max(this.duration, msTimestamp + msDuration);
      trackData.lastWrittenMsTimestamp = msTimestamp;
      if (!this.trackDatasInCurrentCluster.has(trackData)) {
        this.trackDatasInCurrentCluster.set(trackData, {
          firstMsTimestamp: msTimestamp
        });
      }
      this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, msTimestamp);
    }
    /** Creates a new Cluster element to contain media chunks. */
    createNewCluster(msTimestamp) {
      if (this.currentCluster) {
        this.finalizeCurrentCluster();
      }
      if (this.format._options.onCluster) {
        this.writer.startTrackingWrites();
      }
      this.currentCluster = {
        id: EBMLId.Cluster,
        size: this.format._options.appendOnly ? -1 : CLUSTER_SIZE_BYTES,
        data: [
          { id: EBMLId.Timestamp, data: msTimestamp }
        ]
      };
      this.ebmlWriter.writeEBML(this.currentCluster);
      this.currentClusterStartMsTimestamp = msTimestamp;
      this.currentClusterMaxMsTimestamp = msTimestamp;
      this.trackDatasInCurrentCluster.clear();
    }
    finalizeCurrentCluster() {
      assert(this.currentCluster);
      if (!this.format._options.appendOnly) {
        const clusterSize = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster);
        const endPos = this.writer.getPos();
        this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4);
        this.ebmlWriter.writeVarInt(clusterSize, CLUSTER_SIZE_BYTES);
        this.writer.seek(endPos);
      }
      if (this.format._options.onCluster) {
        assert(this.currentClusterStartMsTimestamp !== null);
        const { data, start } = this.writer.stopTrackingWrites();
        this.format._options.onCluster(data, start, this.currentClusterStartMsTimestamp / 1e3);
      }
      const clusterOffsetFromSegment = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset;
      const groupedByTimestamp = /* @__PURE__ */ new Map();
      for (const [trackData, { firstMsTimestamp }] of this.trackDatasInCurrentCluster) {
        if (!groupedByTimestamp.has(firstMsTimestamp)) {
          groupedByTimestamp.set(firstMsTimestamp, []);
        }
        groupedByTimestamp.get(firstMsTimestamp).push(trackData);
      }
      const groupedAndSortedByTimestamp = [...groupedByTimestamp.entries()].sort((a, b) => a[0] - b[0]);
      for (const [msTimestamp, trackDatas] of groupedAndSortedByTimestamp) {
        assert(this.cues);
        this.cues.data.push({ id: EBMLId.CuePoint, data: [
          { id: EBMLId.CueTime, data: msTimestamp },
          // Create CueTrackPositions for each track that starts at this timestamp
          ...trackDatas.map((trackData) => {
            return { id: EBMLId.CueTrackPositions, data: [
              { id: EBMLId.CueTrack, data: trackData.track.id },
              { id: EBMLId.CueClusterPosition, data: clusterOffsetFromSegment }
            ] };
          })
        ] });
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async onTrackClose() {
      const release = await this.mutex.acquire();
      if (this.allTracksAreKnown()) {
        this.allTracksKnown.resolve();
      }
      await this.interleaveChunks();
      release();
    }
    /** Finalizes the file, making it ready for use. Must be called after all media chunks have been added. */
    async finalize() {
      const release = await this.mutex.acquire();
      this.allTracksKnown.resolve();
      if (!this.segment) {
        this.createSegment();
      }
      await this.interleaveChunks(true);
      if (this.currentCluster) {
        this.finalizeCurrentCluster();
      }
      assert(this.cues);
      this.ebmlWriter.writeEBML(this.cues);
      if (!this.format._options.appendOnly) {
        const endPos = this.writer.getPos();
        const segmentSize = this.writer.getPos() - this.segmentDataOffset;
        this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4);
        this.ebmlWriter.writeVarInt(segmentSize, SEGMENT_SIZE_BYTES);
        this.segmentDuration.data = new EBMLFloat64(this.duration);
        this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration));
        this.ebmlWriter.writeEBML(this.segmentDuration);
        assert(this.seekHead);
        this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead));
        this.maybeCreateSeekHead(true);
        this.ebmlWriter.writeEBML(this.seekHead);
        this.writer.seek(endPos);
      }
      release();
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/output-format.js
  var OutputFormat = class {
    /** Returns a list of video codecs that this output format can contain. */
    getSupportedVideoCodecs() {
      return this.getSupportedCodecs().filter((codec) => VIDEO_CODECS.includes(codec));
    }
    /** Returns a list of audio codecs that this output format can contain. */
    getSupportedAudioCodecs() {
      return this.getSupportedCodecs().filter((codec) => AUDIO_CODECS.includes(codec));
    }
    /** Returns a list of subtitle codecs that this output format can contain. */
    getSupportedSubtitleCodecs() {
      return this.getSupportedCodecs().filter((codec) => SUBTITLE_CODECS.includes(codec));
    }
    /** @internal */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _codecUnsupportedHint(codec) {
      return "";
    }
  };
  var IsobmffOutputFormat = class extends OutputFormat {
    /** Internal constructor. */
    constructor(options = {}) {
      if (!options || typeof options !== "object") {
        throw new TypeError("options must be an object.");
      }
      if (options.fastStart !== void 0 && ![false, "in-memory", "reserve", "fragmented"].includes(options.fastStart)) {
        throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
      }
      if (options.minimumFragmentDuration !== void 0 && (!Number.isFinite(options.minimumFragmentDuration) || options.minimumFragmentDuration < 0)) {
        throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
      }
      if (options.onFtyp !== void 0 && typeof options.onFtyp !== "function") {
        throw new TypeError("options.onFtyp, when provided, must be a function.");
      }
      if (options.onMoov !== void 0 && typeof options.onMoov !== "function") {
        throw new TypeError("options.onMoov, when provided, must be a function.");
      }
      if (options.onMdat !== void 0 && typeof options.onMdat !== "function") {
        throw new TypeError("options.onMdat, when provided, must be a function.");
      }
      if (options.onMoof !== void 0 && typeof options.onMoof !== "function") {
        throw new TypeError("options.onMoof, when provided, must be a function.");
      }
      if (options.metadataFormat !== void 0 && !["mdir", "mdta", "udta", "auto"].includes(options.metadataFormat)) {
        throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
      }
      super();
      this._options = options;
    }
    getSupportedTrackCounts() {
      const max = 2 ** 32 - 1;
      return {
        video: { min: 0, max },
        audio: { min: 0, max },
        subtitle: { min: 0, max },
        total: { min: 1, max }
      };
    }
    get supportsVideoRotationMetadata() {
      return true;
    }
    get supportsTimestampedMediaData() {
      return true;
    }
    /** @internal */
    _createMuxer(output) {
      return new IsobmffMuxer(output, this);
    }
  };
  var Mp4OutputFormat = class extends IsobmffOutputFormat {
    /** Creates a new {@link Mp4OutputFormat} configured with the specified `options`. */
    constructor(options) {
      super(options);
    }
    /** @internal */
    get _name() {
      return "MP4";
    }
    get fileExtension() {
      return ".mp4";
    }
    get mimeType() {
      return "video/mp4";
    }
    getSupportedCodecs() {
      return [
        ...VIDEO_CODECS,
        ...NON_PCM_AUDIO_CODECS,
        // These are supported via ISO/IEC 23003-5:
        "pcm-s16",
        "pcm-s16be",
        "pcm-s24",
        "pcm-s24be",
        "pcm-s32",
        "pcm-s32be",
        "pcm-f32",
        "pcm-f32be",
        "pcm-f64",
        "pcm-f64be",
        ...SUBTITLE_CODECS
      ];
    }
    /** @internal */
    _codecUnsupportedHint(codec) {
      if (new MovOutputFormat().getSupportedCodecs().includes(codec)) {
        return " Switching to MOV will grant support for this codec.";
      }
      return "";
    }
  };
  var MovOutputFormat = class extends IsobmffOutputFormat {
    /** Creates a new {@link MovOutputFormat} configured with the specified `options`. */
    constructor(options) {
      super(options);
    }
    /** @internal */
    get _name() {
      return "MOV";
    }
    get fileExtension() {
      return ".mov";
    }
    get mimeType() {
      return "video/quicktime";
    }
    getSupportedCodecs() {
      return [
        ...VIDEO_CODECS,
        ...AUDIO_CODECS
      ];
    }
    /** @internal */
    _codecUnsupportedHint(codec) {
      if (new Mp4OutputFormat().getSupportedCodecs().includes(codec)) {
        return " Switching to MP4 will grant support for this codec.";
      }
      return "";
    }
  };
  var MkvOutputFormat = class extends OutputFormat {
    /** Creates a new {@link MkvOutputFormat} configured with the specified `options`. */
    constructor(options = {}) {
      if (!options || typeof options !== "object") {
        throw new TypeError("options must be an object.");
      }
      if (options.appendOnly !== void 0 && typeof options.appendOnly !== "boolean") {
        throw new TypeError("options.appendOnly, when provided, must be a boolean.");
      }
      if (options.minimumClusterDuration !== void 0 && (!Number.isFinite(options.minimumClusterDuration) || options.minimumClusterDuration < 0)) {
        throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
      }
      if (options.onEbmlHeader !== void 0 && typeof options.onEbmlHeader !== "function") {
        throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
      }
      if (options.onSegmentHeader !== void 0 && typeof options.onSegmentHeader !== "function") {
        throw new TypeError("options.onHeader, when provided, must be a function.");
      }
      if (options.onCluster !== void 0 && typeof options.onCluster !== "function") {
        throw new TypeError("options.onCluster, when provided, must be a function.");
      }
      super();
      this._options = options;
    }
    /** @internal */
    _createMuxer(output) {
      return new MatroskaMuxer(output, this);
    }
    /** @internal */
    get _name() {
      return "Matroska";
    }
    getSupportedTrackCounts() {
      const max = 127;
      return {
        video: { min: 0, max },
        audio: { min: 0, max },
        subtitle: { min: 0, max },
        total: { min: 1, max }
      };
    }
    get fileExtension() {
      return ".mkv";
    }
    get mimeType() {
      return "video/x-matroska";
    }
    getSupportedCodecs() {
      return [
        ...VIDEO_CODECS,
        ...NON_PCM_AUDIO_CODECS,
        ...PCM_AUDIO_CODECS.filter((codec) => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(codec)),
        ...SUBTITLE_CODECS
      ];
    }
    get supportsVideoRotationMetadata() {
      return false;
    }
    get supportsTimestampedMediaData() {
      return true;
    }
  };
  var WebMOutputFormat = class extends MkvOutputFormat {
    /** Creates a new {@link WebMOutputFormat} configured with the specified `options`. */
    constructor(options) {
      super(options);
    }
    getSupportedCodecs() {
      return [
        ...VIDEO_CODECS.filter((codec) => ["vp8", "vp9", "av1"].includes(codec)),
        ...AUDIO_CODECS.filter((codec) => ["opus", "vorbis"].includes(codec)),
        ...SUBTITLE_CODECS
      ];
    }
    /** @internal */
    get _name() {
      return "WebM";
    }
    get fileExtension() {
      return ".webm";
    }
    get mimeType() {
      return "video/webm";
    }
    /** @internal */
    _codecUnsupportedHint(codec) {
      if (new MkvOutputFormat().getSupportedCodecs().includes(codec)) {
        return " Switching to MKV will grant support for this codec.";
      }
      return "";
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/encode.js
  var validateVideoEncodingConfig = (config) => {
    if (!config || typeof config !== "object") {
      throw new TypeError("Encoding config must be an object.");
    }
    if (!VIDEO_CODECS.includes(config.codec)) {
      throw new TypeError(`Invalid video codec '${config.codec}'. Must be one of: ${VIDEO_CODECS.join(", ")}.`);
    }
    if (!(config.bitrate instanceof Quality) && (!Number.isInteger(config.bitrate) || config.bitrate <= 0)) {
      throw new TypeError("config.bitrate must be a positive integer or a quality.");
    }
    if (config.keyFrameInterval !== void 0 && (!Number.isFinite(config.keyFrameInterval) || config.keyFrameInterval < 0)) {
      throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
    }
    if (config.sizeChangeBehavior !== void 0 && !["deny", "passThrough", "fill", "contain", "cover"].includes(config.sizeChangeBehavior)) {
      throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
    }
    if (config.onEncodedPacket !== void 0 && typeof config.onEncodedPacket !== "function") {
      throw new TypeError("config.onEncodedChunk, when provided, must be a function.");
    }
    if (config.onEncoderConfig !== void 0 && typeof config.onEncoderConfig !== "function") {
      throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
    }
    validateVideoEncodingAdditionalOptions(config.codec, config);
  };
  var validateVideoEncodingAdditionalOptions = (codec, options) => {
    if (!options || typeof options !== "object") {
      throw new TypeError("Encoding options must be an object.");
    }
    if (options.alpha !== void 0 && !["discard", "keep"].includes(options.alpha)) {
      throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
    }
    if (options.bitrateMode !== void 0 && !["constant", "variable"].includes(options.bitrateMode)) {
      throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
    }
    if (options.latencyMode !== void 0 && !["quality", "realtime"].includes(options.latencyMode)) {
      throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
    }
    if (options.fullCodecString !== void 0 && typeof options.fullCodecString !== "string") {
      throw new TypeError("fullCodecString, when provided, must be a string.");
    }
    if (options.fullCodecString !== void 0 && inferCodecFromCodecString(options.fullCodecString) !== codec) {
      throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${codec}).`);
    }
    if (options.hardwareAcceleration !== void 0 && !["no-preference", "prefer-hardware", "prefer-software"].includes(options.hardwareAcceleration)) {
      throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
    }
    if (options.scalabilityMode !== void 0 && typeof options.scalabilityMode !== "string") {
      throw new TypeError("scalabilityMode, when provided, must be a string.");
    }
    if (options.contentHint !== void 0 && typeof options.contentHint !== "string") {
      throw new TypeError("contentHint, when provided, must be a string.");
    }
  };
  var buildVideoEncoderConfig = (options) => {
    const resolvedBitrate = options.bitrate instanceof Quality ? options.bitrate._toVideoBitrate(options.codec, options.width, options.height) : options.bitrate;
    return {
      codec: options.fullCodecString ?? buildVideoCodecString(options.codec, options.width, options.height, resolvedBitrate),
      width: options.width,
      height: options.height,
      displayWidth: options.squarePixelWidth,
      displayHeight: options.squarePixelHeight,
      bitrate: resolvedBitrate,
      bitrateMode: options.bitrateMode,
      alpha: options.alpha ?? "discard",
      framerate: options.framerate,
      latencyMode: options.latencyMode,
      hardwareAcceleration: options.hardwareAcceleration,
      scalabilityMode: options.scalabilityMode,
      contentHint: options.contentHint,
      ...getVideoEncoderConfigExtension(options.codec)
    };
  };
  var validateAudioEncodingConfig = (config) => {
    if (!config || typeof config !== "object") {
      throw new TypeError("Encoding config must be an object.");
    }
    if (!AUDIO_CODECS.includes(config.codec)) {
      throw new TypeError(`Invalid audio codec '${config.codec}'. Must be one of: ${AUDIO_CODECS.join(", ")}.`);
    }
    if (config.bitrate === void 0 && (!PCM_AUDIO_CODECS.includes(config.codec) || config.codec === "flac")) {
      throw new TypeError("config.bitrate must be provided for compressed audio codecs.");
    }
    if (config.bitrate !== void 0 && !(config.bitrate instanceof Quality) && (!Number.isInteger(config.bitrate) || config.bitrate <= 0)) {
      throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
    }
    if (config.onEncodedPacket !== void 0 && typeof config.onEncodedPacket !== "function") {
      throw new TypeError("config.onEncodedChunk, when provided, must be a function.");
    }
    if (config.onEncoderConfig !== void 0 && typeof config.onEncoderConfig !== "function") {
      throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
    }
    validateAudioEncodingAdditionalOptions(config.codec, config);
  };
  var validateAudioEncodingAdditionalOptions = (codec, options) => {
    if (!options || typeof options !== "object") {
      throw new TypeError("Encoding options must be an object.");
    }
    if (options.bitrateMode !== void 0 && !["constant", "variable"].includes(options.bitrateMode)) {
      throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
    }
    if (options.fullCodecString !== void 0 && typeof options.fullCodecString !== "string") {
      throw new TypeError("fullCodecString, when provided, must be a string.");
    }
    if (options.fullCodecString !== void 0 && inferCodecFromCodecString(options.fullCodecString) !== codec) {
      throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${codec}).`);
    }
  };
  var buildAudioEncoderConfig = (options) => {
    const resolvedBitrate = options.bitrate instanceof Quality ? options.bitrate._toAudioBitrate(options.codec) : options.bitrate;
    return {
      codec: options.fullCodecString ?? buildAudioCodecString(options.codec, options.numberOfChannels, options.sampleRate),
      numberOfChannels: options.numberOfChannels,
      sampleRate: options.sampleRate,
      bitrate: resolvedBitrate,
      bitrateMode: options.bitrateMode,
      ...getAudioEncoderConfigExtension(options.codec)
    };
  };
  var Quality = class {
    /** @internal */
    constructor(factor) {
      this._factor = factor;
    }
    /** @internal */
    _toVideoBitrate(codec, width, height) {
      const pixels = width * height;
      const codecEfficiencyFactors = {
        avc: 1,
        // H.264/AVC (baseline)
        hevc: 0.6,
        // H.265/HEVC (~40% more efficient than AVC)
        vp9: 0.6,
        // Similar to HEVC
        av1: 0.4,
        // ~60% more efficient than AVC
        vp8: 1.2
        // Slightly less efficient than AVC
      };
      const referencePixels = 1920 * 1080;
      const referenceBitrate = 3e6;
      const scaleFactor = Math.pow(pixels / referencePixels, 0.95);
      const baseBitrate = referenceBitrate * scaleFactor;
      const codecAdjustedBitrate = baseBitrate * codecEfficiencyFactors[codec];
      const finalBitrate = codecAdjustedBitrate * this._factor;
      return Math.ceil(finalBitrate / 1e3) * 1e3;
    }
    /** @internal */
    _toAudioBitrate(codec) {
      if (PCM_AUDIO_CODECS.includes(codec) || codec === "flac") {
        return void 0;
      }
      const baseRates = {
        aac: 128e3,
        // 128kbps base for AAC
        opus: 64e3,
        // 64kbps base for Opus
        mp3: 16e4,
        // 160kbps base for MP3
        vorbis: 64e3,
        // 64kbps base for Vorbis
        ac3: 384e3,
        // 384kbps base for AC-3
        eac3: 192e3
        // 192kbps base for E-AC-3
      };
      const baseBitrate = baseRates[codec];
      if (!baseBitrate) {
        throw new Error(`Unhandled codec: ${codec}`);
      }
      let finalBitrate = baseBitrate * this._factor;
      if (codec === "aac") {
        const validRates = [96e3, 128e3, 16e4, 192e3];
        finalBitrate = validRates.reduce((prev, curr) => Math.abs(curr - finalBitrate) < Math.abs(prev - finalBitrate) ? curr : prev);
      } else if (codec === "opus" || codec === "vorbis") {
        finalBitrate = Math.max(6e3, finalBitrate);
      } else if (codec === "mp3") {
        const validRates = [
          8e3,
          16e3,
          24e3,
          32e3,
          4e4,
          48e3,
          64e3,
          8e4,
          96e3,
          112e3,
          128e3,
          16e4,
          192e3,
          224e3,
          256e3,
          32e4
        ];
        finalBitrate = validRates.reduce((prev, curr) => Math.abs(curr - finalBitrate) < Math.abs(prev - finalBitrate) ? curr : prev);
      }
      return Math.round(finalBitrate / 1e3) * 1e3;
    }
  };
  var QUALITY_LOW = /* @__PURE__ */ new Quality(0.6);
  var QUALITY_MEDIUM = /* @__PURE__ */ new Quality(1);
  var QUALITY_HIGH = /* @__PURE__ */ new Quality(2);
  var QUALITY_VERY_HIGH = /* @__PURE__ */ new Quality(4);
  var canEncodeAudio = async (codec, options = {}) => {
    const { numberOfChannels = 2, sampleRate = 48e3, bitrate = 128e3, ...restOptions } = options;
    if (!AUDIO_CODECS.includes(codec)) {
      return false;
    }
    if (!Number.isInteger(numberOfChannels) || numberOfChannels <= 0) {
      throw new TypeError("numberOfChannels must be a positive integer.");
    }
    if (!Number.isInteger(sampleRate) || sampleRate <= 0) {
      throw new TypeError("sampleRate must be a positive integer.");
    }
    if (!(bitrate instanceof Quality) && (!Number.isInteger(bitrate) || bitrate <= 0)) {
      throw new TypeError("bitrate must be a positive integer.");
    }
    validateAudioEncodingAdditionalOptions(codec, restOptions);
    let encoderConfig = null;
    if (customAudioEncoders.length > 0) {
      encoderConfig ??= buildAudioEncoderConfig({
        codec,
        numberOfChannels,
        sampleRate,
        bitrate,
        ...restOptions
      });
      if (customAudioEncoders.some((x) => x.supports(codec, encoderConfig))) {
        return true;
      }
    }
    if (PCM_AUDIO_CODECS.includes(codec)) {
      return true;
    }
    if (typeof AudioEncoder === "undefined") {
      return false;
    }
    encoderConfig ??= buildAudioEncoderConfig({
      codec,
      numberOfChannels,
      sampleRate,
      bitrate,
      ...restOptions
    });
    const support = await AudioEncoder.isConfigSupported(encoderConfig);
    return support.supported === true;
  };
  var getFirstEncodableAudioCodec = async (checkedCodecs, options) => {
    for (const codec of checkedCodecs) {
      if (await canEncodeAudio(codec, options)) {
        return codec;
      }
    }
    return null;
  };

  // ../../node_modules/mediabunny/dist/modules/src/media-source.js
  var MediaSource = class {
    constructor() {
      this._connectedTrack = null;
      this._closingPromise = null;
      this._closed = false;
      this._timestampOffset = 0;
    }
    /** @internal */
    _ensureValidAdd() {
      if (!this._connectedTrack) {
        throw new Error("Source is not connected to an output track.");
      }
      if (this._connectedTrack.output.state === "canceled") {
        throw new Error("Output has been canceled.");
      }
      if (this._connectedTrack.output.state === "finalizing" || this._connectedTrack.output.state === "finalized") {
        throw new Error("Output has been finalized.");
      }
      if (this._connectedTrack.output.state === "pending") {
        throw new Error("Output has not started.");
      }
      if (this._closed) {
        throw new Error("Source is closed.");
      }
    }
    /** @internal */
    async _start() {
    }
    /** @internal */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async _flushAndClose(forceClose) {
    }
    /**
     * Closes this source. This prevents future samples from being added and signals to the output file that no further
     * samples will come in for this track. Calling `.close()` is optional but recommended after adding the
     * last sample - for improved performance and reduced memory usage.
     */
    close() {
      if (this._closingPromise) {
        return;
      }
      const connectedTrack = this._connectedTrack;
      if (!connectedTrack) {
        throw new Error("Cannot call close without connecting the source to an output track.");
      }
      if (connectedTrack.output.state === "pending") {
        throw new Error("Cannot call close before output has been started.");
      }
      this._closingPromise = (async () => {
        await this._flushAndClose(false);
        this._closed = true;
        if (connectedTrack.output.state === "finalizing" || connectedTrack.output.state === "finalized") {
          return;
        }
        connectedTrack.output._muxer.onTrackClose(connectedTrack);
      })();
    }
    /** @internal */
    async _flushOrWaitForOngoingClose(forceClose) {
      return this._closingPromise ??= (async () => {
        await this._flushAndClose(forceClose);
        this._closed = true;
      })();
    }
  };
  var VideoSource = class extends MediaSource {
    /** Internal constructor. */
    constructor(codec) {
      super();
      this._connectedTrack = null;
      if (!VIDEO_CODECS.includes(codec)) {
        throw new TypeError(`Invalid video codec '${codec}'. Must be one of: ${VIDEO_CODECS.join(", ")}.`);
      }
      this._codec = codec;
    }
  };
  var VideoEncoderWrapper = class {
    constructor(source, encodingConfig) {
      this.source = source;
      this.encodingConfig = encodingConfig;
      this.ensureEncoderPromise = null;
      this.encoderInitialized = false;
      this.encoder = null;
      this.muxer = null;
      this.lastMultipleOfKeyFrameInterval = -1;
      this.codedWidth = null;
      this.codedHeight = null;
      this.resizeCanvas = null;
      this.customEncoder = null;
      this.customEncoderCallSerializer = new CallSerializer();
      this.customEncoderQueueSize = 0;
      this.alphaEncoder = null;
      this.splitter = null;
      this.splitterCreationFailed = false;
      this.alphaFrameQueue = [];
      this.error = null;
    }
    async add(videoSample, shouldClose, encodeOptions) {
      try {
        this.checkForEncoderError();
        this.source._ensureValidAdd();
        if (this.codedWidth !== null && this.codedHeight !== null) {
          if (videoSample.codedWidth !== this.codedWidth || videoSample.codedHeight !== this.codedHeight) {
            const sizeChangeBehavior = this.encodingConfig.sizeChangeBehavior ?? "deny";
            if (sizeChangeBehavior === "passThrough") {
            } else if (sizeChangeBehavior === "deny") {
              throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${videoSample.codedWidth}x${videoSample.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'strict' in the encoding options.`);
            } else {
              let canvasIsNew = false;
              if (!this.resizeCanvas) {
                if (typeof document !== "undefined") {
                  this.resizeCanvas = document.createElement("canvas");
                  this.resizeCanvas.width = this.codedWidth;
                  this.resizeCanvas.height = this.codedHeight;
                } else {
                  this.resizeCanvas = new OffscreenCanvas(this.codedWidth, this.codedHeight);
                }
                canvasIsNew = true;
              }
              const context = this.resizeCanvas.getContext("2d", {
                alpha: isFirefox()
                // Firefox has VideoFrame glitches with opaque canvases
              });
              assert(context);
              if (!canvasIsNew) {
                if (isFirefox()) {
                  context.fillStyle = "black";
                  context.fillRect(0, 0, this.codedWidth, this.codedHeight);
                } else {
                  context.clearRect(0, 0, this.codedWidth, this.codedHeight);
                }
              }
              videoSample.drawWithFit(context, { fit: sizeChangeBehavior });
              if (shouldClose) {
                videoSample.close();
              }
              videoSample = new VideoSample(this.resizeCanvas, {
                timestamp: videoSample.timestamp,
                duration: videoSample.duration,
                rotation: videoSample.rotation
              });
              shouldClose = true;
            }
          }
        } else {
          this.codedWidth = videoSample.codedWidth;
          this.codedHeight = videoSample.codedHeight;
        }
        if (!this.encoderInitialized) {
          if (!this.ensureEncoderPromise) {
            this.ensureEncoder(videoSample);
          }
          if (!this.encoderInitialized) {
            await this.ensureEncoderPromise;
          }
        }
        assert(this.encoderInitialized);
        const keyFrameInterval = this.encodingConfig.keyFrameInterval ?? 5;
        const multipleOfKeyFrameInterval = Math.floor(videoSample.timestamp / keyFrameInterval);
        const finalEncodeOptions = {
          ...encodeOptions,
          keyFrame: encodeOptions?.keyFrame || keyFrameInterval === 0 || multipleOfKeyFrameInterval !== this.lastMultipleOfKeyFrameInterval
        };
        this.lastMultipleOfKeyFrameInterval = multipleOfKeyFrameInterval;
        if (this.customEncoder) {
          this.customEncoderQueueSize++;
          const clonedSample = videoSample.clone();
          const promise = this.customEncoderCallSerializer.call(() => this.customEncoder.encode(clonedSample, finalEncodeOptions)).then(() => this.customEncoderQueueSize--).catch((error) => this.error ??= error).finally(() => {
            clonedSample.close();
          });
          if (this.customEncoderQueueSize >= 4) {
            await promise;
          }
        } else {
          assert(this.encoder);
          const videoFrame = videoSample.toVideoFrame();
          if (!this.alphaEncoder) {
            this.encoder.encode(videoFrame, finalEncodeOptions);
            videoFrame.close();
          } else {
            const frameDefinitelyHasNoAlpha = !!videoFrame.format && !videoFrame.format.includes("A");
            if (frameDefinitelyHasNoAlpha || this.splitterCreationFailed) {
              this.alphaFrameQueue.push(null);
              this.encoder.encode(videoFrame, finalEncodeOptions);
              videoFrame.close();
            } else {
              const width = videoFrame.displayWidth;
              const height = videoFrame.displayHeight;
              if (!this.splitter) {
                try {
                  this.splitter = new ColorAlphaSplitter(width, height);
                } catch (error) {
                  console.error("Due to an error, only color data will be encoded.", error);
                  this.splitterCreationFailed = true;
                  this.alphaFrameQueue.push(null);
                  this.encoder.encode(videoFrame, finalEncodeOptions);
                  videoFrame.close();
                }
              }
              if (this.splitter) {
                const colorFrame = this.splitter.extractColor(videoFrame);
                const alphaFrame = this.splitter.extractAlpha(videoFrame);
                this.alphaFrameQueue.push(alphaFrame);
                this.encoder.encode(colorFrame, finalEncodeOptions);
                colorFrame.close();
                videoFrame.close();
              }
            }
          }
          if (shouldClose) {
            videoSample.close();
          }
          if (this.encoder.encodeQueueSize >= 4) {
            await new Promise((resolve) => this.encoder.addEventListener("dequeue", resolve, { once: true }));
          }
        }
        await this.muxer.mutex.currentPromise;
      } finally {
        if (shouldClose) {
          videoSample.close();
        }
      }
    }
    ensureEncoder(videoSample) {
      this.ensureEncoderPromise = (async () => {
        const encoderConfig = buildVideoEncoderConfig({
          width: videoSample.codedWidth,
          height: videoSample.codedHeight,
          squarePixelWidth: videoSample.squarePixelWidth,
          squarePixelHeight: videoSample.squarePixelHeight,
          ...this.encodingConfig,
          framerate: this.source._connectedTrack?.metadata.frameRate
        });
        this.encodingConfig.onEncoderConfig?.(encoderConfig);
        const MatchingCustomEncoder = customVideoEncoders.find((x) => x.supports(this.encodingConfig.codec, encoderConfig));
        if (MatchingCustomEncoder) {
          this.customEncoder = new MatchingCustomEncoder();
          this.customEncoder.codec = this.encodingConfig.codec;
          this.customEncoder.config = encoderConfig;
          this.customEncoder.onPacket = (packet, meta) => {
            if (!(packet instanceof EncodedPacket)) {
              throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");
            }
            if (meta !== void 0 && (!meta || typeof meta !== "object")) {
              throw new TypeError("The second argument passed to onPacket must be an object or undefined.");
            }
            this.encodingConfig.onEncodedPacket?.(packet, meta);
            void this.muxer.addEncodedVideoPacket(this.source._connectedTrack, packet, meta).catch((error) => {
              this.error ??= error;
            });
          };
          await this.customEncoder.init();
        } else {
          if (typeof VideoEncoder === "undefined") {
            throw new Error("VideoEncoder is not supported by this browser.");
          }
          encoderConfig.alpha = "discard";
          if (this.encodingConfig.alpha === "keep") {
            encoderConfig.latencyMode = "quality";
          }
          const hasOddDimension = encoderConfig.width % 2 === 1 || encoderConfig.height % 2 === 1;
          if (hasOddDimension && (this.encodingConfig.codec === "avc" || this.encodingConfig.codec === "hevc")) {
            throw new Error(`The dimensions ${encoderConfig.width}x${encoderConfig.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);
          }
          const support = await VideoEncoder.isConfigSupported(encoderConfig);
          if (!support.supported) {
            throw new Error(`This specific encoder configuration (${encoderConfig.codec}, ${encoderConfig.bitrate} bps, ${encoderConfig.width}x${encoderConfig.height}, hardware acceleration: ${encoderConfig.hardwareAcceleration ?? "no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`);
          }
          const colorChunkQueue = [];
          const nullAlphaChunkQueue = [];
          let encodedAlphaChunkCount = 0;
          let alphaEncoderQueue = 0;
          const addPacket = (colorChunk, alphaChunk, meta) => {
            const sideData = {};
            if (alphaChunk) {
              const alphaData = new Uint8Array(alphaChunk.byteLength);
              alphaChunk.copyTo(alphaData);
              sideData.alpha = alphaData;
            }
            const packet = EncodedPacket.fromEncodedChunk(colorChunk, sideData);
            this.encodingConfig.onEncodedPacket?.(packet, meta);
            void this.muxer.addEncodedVideoPacket(this.source._connectedTrack, packet, meta).catch((error) => {
              this.error ??= error;
            });
          };
          const stack = new Error("Encoding error").stack;
          this.encoder = new VideoEncoder({
            output: (chunk, meta) => {
              if (!this.alphaEncoder) {
                addPacket(chunk, null, meta);
                return;
              }
              const alphaFrame = this.alphaFrameQueue.shift();
              assert(alphaFrame !== void 0);
              if (alphaFrame) {
                this.alphaEncoder.encode(alphaFrame, {
                  // Crucial: The alpha frame is forced to be a key frame whenever the color frame
                  // also is. Without this, playback can glitch and even crash in some browsers.
                  // This is the reason why the two encoders are wired in series and not in parallel.
                  keyFrame: chunk.type === "key"
                });
                alphaEncoderQueue++;
                alphaFrame.close();
                colorChunkQueue.push({ chunk, meta });
              } else {
                if (alphaEncoderQueue === 0) {
                  addPacket(chunk, null, meta);
                } else {
                  nullAlphaChunkQueue.push(encodedAlphaChunkCount + alphaEncoderQueue);
                  colorChunkQueue.push({ chunk, meta });
                }
              }
            },
            error: (error) => {
              error.stack = stack;
              this.error ??= error;
            }
          });
          this.encoder.configure(encoderConfig);
          if (this.encodingConfig.alpha === "keep") {
            const stack2 = new Error("Encoding error").stack;
            this.alphaEncoder = new VideoEncoder({
              // We ignore the alpha chunk's metadata
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              output: (chunk, meta) => {
                alphaEncoderQueue--;
                const colorChunk = colorChunkQueue.shift();
                assert(colorChunk !== void 0);
                addPacket(colorChunk.chunk, chunk, colorChunk.meta);
                encodedAlphaChunkCount++;
                while (nullAlphaChunkQueue.length > 0 && nullAlphaChunkQueue[0] === encodedAlphaChunkCount) {
                  nullAlphaChunkQueue.shift();
                  const colorChunk2 = colorChunkQueue.shift();
                  assert(colorChunk2 !== void 0);
                  addPacket(colorChunk2.chunk, null, colorChunk2.meta);
                }
              },
              error: (error) => {
                error.stack = stack2;
                this.error ??= error;
              }
            });
            this.alphaEncoder.configure(encoderConfig);
          }
        }
        assert(this.source._connectedTrack);
        this.muxer = this.source._connectedTrack.output._muxer;
        this.encoderInitialized = true;
      })();
    }
    async flushAndClose(forceClose) {
      if (!forceClose)
        this.checkForEncoderError();
      if (this.customEncoder) {
        if (!forceClose) {
          void this.customEncoderCallSerializer.call(() => this.customEncoder.flush());
        }
        await this.customEncoderCallSerializer.call(() => this.customEncoder.close());
      } else if (this.encoder) {
        if (!forceClose) {
          await this.encoder.flush();
          await this.alphaEncoder?.flush();
        }
        if (this.encoder.state !== "closed") {
          this.encoder.close();
        }
        if (this.alphaEncoder && this.alphaEncoder.state !== "closed") {
          this.alphaEncoder.close();
        }
        this.alphaFrameQueue.forEach((x) => x?.close());
        this.splitter?.close();
      }
      if (!forceClose)
        this.checkForEncoderError();
    }
    getQueueSize() {
      if (this.customEncoder) {
        return this.customEncoderQueueSize;
      } else {
        return this.encoder?.encodeQueueSize ?? 0;
      }
    }
    checkForEncoderError() {
      if (this.error) {
        throw this.error;
      }
    }
  };
  var ColorAlphaSplitter = class {
    constructor(initialWidth, initialHeight) {
      this.lastFrame = null;
      if (typeof OffscreenCanvas !== "undefined") {
        this.canvas = new OffscreenCanvas(initialWidth, initialHeight);
      } else {
        this.canvas = document.createElement("canvas");
        this.canvas.width = initialWidth;
        this.canvas.height = initialHeight;
      }
      const gl = this.canvas.getContext("webgl2", {
        alpha: true
        // Needed due to the YUV thing we do for alpha
      });
      if (!gl) {
        throw new Error("Couldn't acquire WebGL 2 context.");
      }
      this.gl = gl;
      this.colorProgram = this.createColorProgram();
      this.alphaProgram = this.createAlphaProgram();
      this.vao = this.createVAO();
      this.sourceTexture = this.createTexture();
      this.alphaResolutionLocation = this.gl.getUniformLocation(this.alphaProgram, "u_resolution");
      this.gl.useProgram(this.colorProgram);
      this.gl.uniform1i(this.gl.getUniformLocation(this.colorProgram, "u_sourceTexture"), 0);
      this.gl.useProgram(this.alphaProgram);
      this.gl.uniform1i(this.gl.getUniformLocation(this.alphaProgram, "u_sourceTexture"), 0);
    }
    createVertexShader() {
      return this.createShader(this.gl.VERTEX_SHADER, `#version 300 es
			in vec2 a_position;
			in vec2 a_texCoord;
			out vec2 v_texCoord;
			
			void main() {
				gl_Position = vec4(a_position, 0.0, 1.0);
				v_texCoord = a_texCoord;
			}
		`);
    }
    createColorProgram() {
      const vertexShader = this.createVertexShader();
      const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, `#version 300 es
			precision highp float;
			
			uniform sampler2D u_sourceTexture;
			in vec2 v_texCoord;
			out vec4 fragColor;
			
			void main() {
				vec4 source = texture(u_sourceTexture, v_texCoord);
				fragColor = vec4(source.rgb, 1.0);
			}
		`);
      const program = this.gl.createProgram();
      this.gl.attachShader(program, vertexShader);
      this.gl.attachShader(program, fragmentShader);
      this.gl.linkProgram(program);
      return program;
    }
    createAlphaProgram() {
      const vertexShader = this.createVertexShader();
      const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, `#version 300 es
			precision highp float;
			
			uniform sampler2D u_sourceTexture;
			uniform vec2 u_resolution; // The width and height of the canvas
			in vec2 v_texCoord;
			out vec4 fragColor;

			// This function determines the value for a single byte in the YUV stream
			float getByteValue(float byteOffset) {
				float width = u_resolution.x;
				float height = u_resolution.y;

				float yPlaneSize = width * height;

				if (byteOffset < yPlaneSize) {
					// This byte is in the luma plane. Find the corresponding pixel coordinates to sample from
					float y = floor(byteOffset / width);
					float x = mod(byteOffset, width);
					
					// Add 0.5 to sample the center of the texel
					vec2 sampleCoord = (vec2(x, y) + 0.5) / u_resolution;
					
					// The luma value is the alpha from the source texture
					return texture(u_sourceTexture, sampleCoord).a;
				} else {
					// Write a fixed value for chroma and beyond
					return 128.0 / 255.0;
				}
			}
			
			void main() {
				// Each fragment writes 4 bytes (R, G, B, A)
				float pixelIndex = floor(gl_FragCoord.y) * u_resolution.x + floor(gl_FragCoord.x);
				float baseByteOffset = pixelIndex * 4.0;

				vec4 result;
				for (int i = 0; i < 4; i++) {
					float currentByteOffset = baseByteOffset + float(i);
					result[i] = getByteValue(currentByteOffset);
				}
				
				fragColor = result;
			}
		`);
      const program = this.gl.createProgram();
      this.gl.attachShader(program, vertexShader);
      this.gl.attachShader(program, fragmentShader);
      this.gl.linkProgram(program);
      return program;
    }
    createShader(type, source) {
      const shader = this.gl.createShader(type);
      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);
      if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", this.gl.getShaderInfoLog(shader));
      }
      return shader;
    }
    createVAO() {
      const vao = this.gl.createVertexArray();
      this.gl.bindVertexArray(vao);
      const vertices = new Float32Array([
        -1,
        -1,
        0,
        1,
        1,
        -1,
        1,
        1,
        -1,
        1,
        0,
        0,
        1,
        1,
        1,
        0
      ]);
      const buffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW);
      const positionLocation = this.gl.getAttribLocation(this.colorProgram, "a_position");
      const texCoordLocation = this.gl.getAttribLocation(this.colorProgram, "a_texCoord");
      this.gl.enableVertexAttribArray(positionLocation);
      this.gl.vertexAttribPointer(positionLocation, 2, this.gl.FLOAT, false, 16, 0);
      this.gl.enableVertexAttribArray(texCoordLocation);
      this.gl.vertexAttribPointer(texCoordLocation, 2, this.gl.FLOAT, false, 16, 8);
      return vao;
    }
    createTexture() {
      const texture = this.gl.createTexture();
      this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
      return texture;
    }
    updateTexture(sourceFrame) {
      if (this.lastFrame === sourceFrame) {
        return;
      }
      if (sourceFrame.displayWidth !== this.canvas.width || sourceFrame.displayHeight !== this.canvas.height) {
        this.canvas.width = sourceFrame.displayWidth;
        this.canvas.height = sourceFrame.displayHeight;
      }
      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.sourceTexture);
      this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, sourceFrame);
      this.lastFrame = sourceFrame;
    }
    extractColor(sourceFrame) {
      this.updateTexture(sourceFrame);
      this.gl.useProgram(this.colorProgram);
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
      this.gl.bindVertexArray(this.vao);
      this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
      return new VideoFrame(this.canvas, {
        timestamp: sourceFrame.timestamp,
        duration: sourceFrame.duration ?? void 0,
        alpha: "discard"
      });
    }
    extractAlpha(sourceFrame) {
      this.updateTexture(sourceFrame);
      this.gl.useProgram(this.alphaProgram);
      this.gl.uniform2f(this.alphaResolutionLocation, this.canvas.width, this.canvas.height);
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
      this.gl.bindVertexArray(this.vao);
      this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
      const { width, height } = this.canvas;
      const chromaSamples = Math.ceil(width / 2) * Math.ceil(height / 2);
      const yuvSize = width * height + chromaSamples * 2;
      const requiredHeight = Math.ceil(yuvSize / (width * 4));
      let yuv = new Uint8Array(4 * width * requiredHeight);
      this.gl.readPixels(0, 0, width, requiredHeight, this.gl.RGBA, this.gl.UNSIGNED_BYTE, yuv);
      yuv = yuv.subarray(0, yuvSize);
      assert(yuv[width * height] === 128);
      assert(yuv[yuv.length - 1] === 128);
      const init = {
        format: "I420",
        codedWidth: width,
        codedHeight: height,
        timestamp: sourceFrame.timestamp,
        duration: sourceFrame.duration ?? void 0,
        transfer: [yuv.buffer]
      };
      return new VideoFrame(yuv, init);
    }
    close() {
      this.gl.getExtension("WEBGL_lose_context")?.loseContext();
      this.gl = null;
    }
  };
  var VideoSampleSource = class extends VideoSource {
    /**
     * Creates a new {@link VideoSampleSource} whose samples are encoded according to the specified
     * {@link VideoEncodingConfig}.
     */
    constructor(encodingConfig) {
      validateVideoEncodingConfig(encodingConfig);
      super(encodingConfig.codec);
      this._encoder = new VideoEncoderWrapper(this, encodingConfig);
    }
    /**
     * Encodes a video sample (frame) and then adds it to the output.
     *
     * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
     * to respect writer and encoder backpressure.
     */
    add(videoSample, encodeOptions) {
      if (!(videoSample instanceof VideoSample)) {
        throw new TypeError("videoSample must be a VideoSample.");
      }
      return this._encoder.add(videoSample, false, encodeOptions);
    }
    /** @internal */
    _flushAndClose(forceClose) {
      return this._encoder.flushAndClose(forceClose);
    }
  };
  var AudioSource = class extends MediaSource {
    /** Internal constructor. */
    constructor(codec) {
      super();
      this._connectedTrack = null;
      if (!AUDIO_CODECS.includes(codec)) {
        throw new TypeError(`Invalid audio codec '${codec}'. Must be one of: ${AUDIO_CODECS.join(", ")}.`);
      }
      this._codec = codec;
    }
  };
  var AudioEncoderWrapper = class {
    constructor(source, encodingConfig) {
      this.source = source;
      this.encodingConfig = encodingConfig;
      this.ensureEncoderPromise = null;
      this.encoderInitialized = false;
      this.encoder = null;
      this.muxer = null;
      this.lastNumberOfChannels = null;
      this.lastSampleRate = null;
      this.isPcmEncoder = false;
      this.outputSampleSize = null;
      this.writeOutputValue = null;
      this.customEncoder = null;
      this.customEncoderCallSerializer = new CallSerializer();
      this.customEncoderQueueSize = 0;
      this.lastEndSampleIndex = null;
      this.error = null;
    }
    async add(audioSample, shouldClose) {
      try {
        this.checkForEncoderError();
        this.source._ensureValidAdd();
        if (this.lastNumberOfChannels !== null && this.lastSampleRate !== null) {
          if (audioSample.numberOfChannels !== this.lastNumberOfChannels || audioSample.sampleRate !== this.lastSampleRate) {
            throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${audioSample.numberOfChannels} channels at ${audioSample.sampleRate} Hz.`);
          }
        } else {
          this.lastNumberOfChannels = audioSample.numberOfChannels;
          this.lastSampleRate = audioSample.sampleRate;
        }
        if (!this.encoderInitialized) {
          if (!this.ensureEncoderPromise) {
            this.ensureEncoder(audioSample);
          }
          if (!this.encoderInitialized) {
            await this.ensureEncoderPromise;
          }
        }
        assert(this.encoderInitialized);
        {
          const startSampleIndex = Math.round(audioSample.timestamp * audioSample.sampleRate);
          const endSampleIndex = Math.round((audioSample.timestamp + audioSample.duration) * audioSample.sampleRate);
          if (this.lastEndSampleIndex === null) {
            this.lastEndSampleIndex = endSampleIndex;
          } else {
            const sampleDiff = startSampleIndex - this.lastEndSampleIndex;
            if (sampleDiff >= 64) {
              const fillSample = new AudioSample({
                data: new Float32Array(sampleDiff * audioSample.numberOfChannels),
                format: "f32-planar",
                sampleRate: audioSample.sampleRate,
                numberOfChannels: audioSample.numberOfChannels,
                numberOfFrames: sampleDiff,
                timestamp: this.lastEndSampleIndex / audioSample.sampleRate
              });
              await this.add(fillSample, true);
            }
            this.lastEndSampleIndex += audioSample.numberOfFrames;
          }
        }
        if (this.customEncoder) {
          this.customEncoderQueueSize++;
          const clonedSample = audioSample.clone();
          const promise = this.customEncoderCallSerializer.call(() => this.customEncoder.encode(clonedSample)).then(() => this.customEncoderQueueSize--).catch((error) => this.error ??= error).finally(() => {
            clonedSample.close();
          });
          if (this.customEncoderQueueSize >= 4) {
            await promise;
          }
          await this.muxer.mutex.currentPromise;
        } else if (this.isPcmEncoder) {
          await this.doPcmEncoding(audioSample, shouldClose);
        } else {
          assert(this.encoder);
          const audioData = audioSample.toAudioData();
          this.encoder.encode(audioData);
          audioData.close();
          if (shouldClose) {
            audioSample.close();
          }
          if (this.encoder.encodeQueueSize >= 4) {
            await new Promise((resolve) => this.encoder.addEventListener("dequeue", resolve, { once: true }));
          }
          await this.muxer.mutex.currentPromise;
        }
      } finally {
        if (shouldClose) {
          audioSample.close();
        }
      }
    }
    async doPcmEncoding(audioSample, shouldClose) {
      assert(this.outputSampleSize);
      assert(this.writeOutputValue);
      const { numberOfChannels, numberOfFrames, sampleRate, timestamp } = audioSample;
      const CHUNK_SIZE = 2048;
      const outputs = [];
      for (let frame = 0; frame < numberOfFrames; frame += CHUNK_SIZE) {
        const frameCount = Math.min(CHUNK_SIZE, audioSample.numberOfFrames - frame);
        const outputSize = frameCount * numberOfChannels * this.outputSampleSize;
        const outputBuffer = new ArrayBuffer(outputSize);
        const outputView = new DataView(outputBuffer);
        outputs.push({ frameCount, view: outputView });
      }
      const allocationSize = audioSample.allocationSize({ planeIndex: 0, format: "f32-planar" });
      const floats = new Float32Array(allocationSize / Float32Array.BYTES_PER_ELEMENT);
      for (let i = 0; i < numberOfChannels; i++) {
        audioSample.copyTo(floats, { planeIndex: i, format: "f32-planar" });
        for (let j = 0; j < outputs.length; j++) {
          const { frameCount, view: view2 } = outputs[j];
          for (let k = 0; k < frameCount; k++) {
            this.writeOutputValue(view2, (k * numberOfChannels + i) * this.outputSampleSize, floats[j * CHUNK_SIZE + k]);
          }
        }
      }
      if (shouldClose) {
        audioSample.close();
      }
      const meta = {
        decoderConfig: {
          codec: this.encodingConfig.codec,
          numberOfChannels,
          sampleRate
        }
      };
      for (let i = 0; i < outputs.length; i++) {
        const { frameCount, view: view2 } = outputs[i];
        const outputBuffer = view2.buffer;
        const startFrame = i * CHUNK_SIZE;
        const packet = new EncodedPacket(new Uint8Array(outputBuffer), "key", timestamp + startFrame / sampleRate, frameCount / sampleRate);
        this.encodingConfig.onEncodedPacket?.(packet, meta);
        await this.muxer.addEncodedAudioPacket(this.source._connectedTrack, packet, meta);
      }
    }
    ensureEncoder(audioSample) {
      this.ensureEncoderPromise = (async () => {
        const { numberOfChannels, sampleRate } = audioSample;
        const encoderConfig = buildAudioEncoderConfig({
          numberOfChannels,
          sampleRate,
          ...this.encodingConfig
        });
        this.encodingConfig.onEncoderConfig?.(encoderConfig);
        const MatchingCustomEncoder = customAudioEncoders.find((x) => x.supports(this.encodingConfig.codec, encoderConfig));
        if (MatchingCustomEncoder) {
          this.customEncoder = new MatchingCustomEncoder();
          this.customEncoder.codec = this.encodingConfig.codec;
          this.customEncoder.config = encoderConfig;
          this.customEncoder.onPacket = (packet, meta) => {
            if (!(packet instanceof EncodedPacket)) {
              throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");
            }
            if (meta !== void 0 && (!meta || typeof meta !== "object")) {
              throw new TypeError("The second argument passed to onPacket must be an object or undefined.");
            }
            this.encodingConfig.onEncodedPacket?.(packet, meta);
            void this.muxer.addEncodedAudioPacket(this.source._connectedTrack, packet, meta).catch((error) => {
              this.error ??= error;
            });
          };
          await this.customEncoder.init();
        } else if (PCM_AUDIO_CODECS.includes(this.encodingConfig.codec)) {
          this.initPcmEncoder();
        } else {
          if (typeof AudioEncoder === "undefined") {
            throw new Error("AudioEncoder is not supported by this browser.");
          }
          const support = await AudioEncoder.isConfigSupported(encoderConfig);
          if (!support.supported) {
            throw new Error(`This specific encoder configuration (${encoderConfig.codec}, ${encoderConfig.bitrate} bps, ${encoderConfig.numberOfChannels} channels, ${encoderConfig.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);
          }
          const stack = new Error("Encoding error").stack;
          this.encoder = new AudioEncoder({
            output: (chunk, meta) => {
              if (this.encodingConfig.codec === "aac" && meta?.decoderConfig) {
                let needsDescriptionOverwrite = false;
                if (!meta.decoderConfig.description || meta.decoderConfig.description.byteLength < 2) {
                  needsDescriptionOverwrite = true;
                } else {
                  const audioSpecificConfig = parseAacAudioSpecificConfig(toUint8Array(meta.decoderConfig.description));
                  needsDescriptionOverwrite = audioSpecificConfig.objectType === 0;
                }
                if (needsDescriptionOverwrite) {
                  const objectType = Number(last(encoderConfig.codec.split(".")));
                  meta.decoderConfig.description = buildAacAudioSpecificConfig({
                    objectType,
                    numberOfChannels: meta.decoderConfig.numberOfChannels,
                    sampleRate: meta.decoderConfig.sampleRate
                  });
                }
              }
              const packet = EncodedPacket.fromEncodedChunk(chunk);
              this.encodingConfig.onEncodedPacket?.(packet, meta);
              void this.muxer.addEncodedAudioPacket(this.source._connectedTrack, packet, meta).catch((error) => {
                this.error ??= error;
              });
            },
            error: (error) => {
              error.stack = stack;
              this.error ??= error;
            }
          });
          this.encoder.configure(encoderConfig);
        }
        assert(this.source._connectedTrack);
        this.muxer = this.source._connectedTrack.output._muxer;
        this.encoderInitialized = true;
      })();
    }
    initPcmEncoder() {
      this.isPcmEncoder = true;
      const codec = this.encodingConfig.codec;
      const { dataType, sampleSize, littleEndian } = parsePcmCodec(codec);
      this.outputSampleSize = sampleSize;
      switch (sampleSize) {
        case 1:
          {
            if (dataType === "unsigned") {
              this.writeOutputValue = (view2, byteOffset, value) => view2.setUint8(byteOffset, clamp((value + 1) * 127.5, 0, 255));
            } else if (dataType === "signed") {
              this.writeOutputValue = (view2, byteOffset, value) => {
                view2.setInt8(byteOffset, clamp(Math.round(value * 128), -128, 127));
              };
            } else if (dataType === "ulaw") {
              this.writeOutputValue = (view2, byteOffset, value) => {
                const int16 = clamp(Math.floor(value * 32767), -32768, 32767);
                view2.setUint8(byteOffset, toUlaw(int16));
              };
            } else if (dataType === "alaw") {
              this.writeOutputValue = (view2, byteOffset, value) => {
                const int16 = clamp(Math.floor(value * 32767), -32768, 32767);
                view2.setUint8(byteOffset, toAlaw(int16));
              };
            } else {
              assert(false);
            }
          }
          ;
          break;
        case 2:
          {
            if (dataType === "unsigned") {
              this.writeOutputValue = (view2, byteOffset, value) => view2.setUint16(byteOffset, clamp((value + 1) * 32767.5, 0, 65535), littleEndian);
            } else if (dataType === "signed") {
              this.writeOutputValue = (view2, byteOffset, value) => view2.setInt16(byteOffset, clamp(Math.round(value * 32767), -32768, 32767), littleEndian);
            } else {
              assert(false);
            }
          }
          ;
          break;
        case 3:
          {
            if (dataType === "unsigned") {
              this.writeOutputValue = (view2, byteOffset, value) => setUint24(view2, byteOffset, clamp((value + 1) * 83886075e-1, 0, 16777215), littleEndian);
            } else if (dataType === "signed") {
              this.writeOutputValue = (view2, byteOffset, value) => setInt24(view2, byteOffset, clamp(Math.round(value * 8388607), -8388608, 8388607), littleEndian);
            } else {
              assert(false);
            }
          }
          ;
          break;
        case 4:
          {
            if (dataType === "unsigned") {
              this.writeOutputValue = (view2, byteOffset, value) => view2.setUint32(byteOffset, clamp((value + 1) * 21474836475e-1, 0, 4294967295), littleEndian);
            } else if (dataType === "signed") {
              this.writeOutputValue = (view2, byteOffset, value) => view2.setInt32(byteOffset, clamp(Math.round(value * 2147483647), -2147483648, 2147483647), littleEndian);
            } else if (dataType === "float") {
              this.writeOutputValue = (view2, byteOffset, value) => view2.setFloat32(byteOffset, value, littleEndian);
            } else {
              assert(false);
            }
          }
          ;
          break;
        case 8:
          {
            if (dataType === "float") {
              this.writeOutputValue = (view2, byteOffset, value) => view2.setFloat64(byteOffset, value, littleEndian);
            } else {
              assert(false);
            }
          }
          ;
          break;
        default:
          {
            assertNever(sampleSize);
            assert(false);
          }
          ;
      }
    }
    async flushAndClose(forceClose) {
      if (!forceClose)
        this.checkForEncoderError();
      if (this.customEncoder) {
        if (!forceClose) {
          void this.customEncoderCallSerializer.call(() => this.customEncoder.flush());
        }
        await this.customEncoderCallSerializer.call(() => this.customEncoder.close());
      } else if (this.encoder) {
        if (!forceClose) {
          await this.encoder.flush();
        }
        if (this.encoder.state !== "closed") {
          this.encoder.close();
        }
      }
      if (!forceClose)
        this.checkForEncoderError();
    }
    getQueueSize() {
      if (this.customEncoder) {
        return this.customEncoderQueueSize;
      } else if (this.isPcmEncoder) {
        return 0;
      } else {
        return this.encoder?.encodeQueueSize ?? 0;
      }
    }
    checkForEncoderError() {
      if (this.error) {
        throw this.error;
      }
    }
  };
  var AudioSampleSource = class extends AudioSource {
    /**
     * Creates a new {@link AudioSampleSource} whose samples are encoded according to the specified
     * {@link AudioEncodingConfig}.
     */
    constructor(encodingConfig) {
      validateAudioEncodingConfig(encodingConfig);
      super(encodingConfig.codec);
      this._encoder = new AudioEncoderWrapper(this, encodingConfig);
    }
    /**
     * Encodes an audio sample and then adds it to the output.
     *
     * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
     * to respect writer and encoder backpressure.
     */
    add(audioSample) {
      if (!(audioSample instanceof AudioSample)) {
        throw new TypeError("audioSample must be an AudioSample.");
      }
      return this._encoder.add(audioSample, false);
    }
    /** @internal */
    _flushAndClose(forceClose) {
      return this._encoder.flushAndClose(forceClose);
    }
  };
  var SubtitleSource = class extends MediaSource {
    /** Internal constructor. */
    constructor(codec) {
      super();
      this._connectedTrack = null;
      if (!SUBTITLE_CODECS.includes(codec)) {
        throw new TypeError(`Invalid subtitle codec '${codec}'. Must be one of: ${SUBTITLE_CODECS.join(", ")}.`);
      }
      this._codec = codec;
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/output.js
  var ALL_TRACK_TYPES = ["video", "audio", "subtitle"];
  var validateBaseTrackMetadata = (metadata) => {
    if (!metadata || typeof metadata !== "object") {
      throw new TypeError("metadata must be an object.");
    }
    if (metadata.languageCode !== void 0 && !isIso639Dash2LanguageCode(metadata.languageCode)) {
      throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
    }
    if (metadata.name !== void 0 && typeof metadata.name !== "string") {
      throw new TypeError("metadata.name, when provided, must be a string.");
    }
    if (metadata.disposition !== void 0) {
      validateTrackDisposition(metadata.disposition);
    }
    if (metadata.maximumPacketCount !== void 0 && (!Number.isInteger(metadata.maximumPacketCount) || metadata.maximumPacketCount < 0)) {
      throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
    }
  };
  var Output = class {
    /**
     * Creates a new instance of {@link Output} which can then be used to create a new media file according to the
     * specified {@link OutputOptions}.
     */
    constructor(options) {
      this.state = "pending";
      this._tracks = [];
      this._startPromise = null;
      this._cancelPromise = null;
      this._finalizePromise = null;
      this._mutex = new AsyncMutex();
      this._metadataTags = {};
      if (!options || typeof options !== "object") {
        throw new TypeError("options must be an object.");
      }
      if (!(options.format instanceof OutputFormat)) {
        throw new TypeError("options.format must be an OutputFormat.");
      }
      if (!(options.target instanceof Target)) {
        throw new TypeError("options.target must be a Target.");
      }
      if (options.target._output) {
        throw new Error("Target is already used for another output.");
      }
      options.target._output = this;
      this.format = options.format;
      this.target = options.target;
      this._writer = options.target._createWriter();
      this._muxer = options.format._createMuxer(this);
    }
    /** Adds a video track to the output with the given source. Can only be called before the output is started. */
    addVideoTrack(source, metadata = {}) {
      if (!(source instanceof VideoSource)) {
        throw new TypeError("source must be a VideoSource.");
      }
      validateBaseTrackMetadata(metadata);
      if (metadata.rotation !== void 0 && ![0, 90, 180, 270].includes(metadata.rotation)) {
        throw new TypeError(`Invalid video rotation: ${metadata.rotation}. Has to be 0, 90, 180 or 270.`);
      }
      if (!this.format.supportsVideoRotationMetadata && metadata.rotation) {
        throw new Error(`${this.format._name} does not support video rotation metadata.`);
      }
      if (metadata.frameRate !== void 0 && (!Number.isFinite(metadata.frameRate) || metadata.frameRate <= 0)) {
        throw new TypeError(`Invalid video frame rate: ${metadata.frameRate}. Must be a positive number.`);
      }
      this._addTrack("video", source, metadata);
    }
    /** Adds an audio track to the output with the given source. Can only be called before the output is started. */
    addAudioTrack(source, metadata = {}) {
      if (!(source instanceof AudioSource)) {
        throw new TypeError("source must be an AudioSource.");
      }
      validateBaseTrackMetadata(metadata);
      this._addTrack("audio", source, metadata);
    }
    /** Adds a subtitle track to the output with the given source. Can only be called before the output is started. */
    addSubtitleTrack(source, metadata = {}) {
      if (!(source instanceof SubtitleSource)) {
        throw new TypeError("source must be a SubtitleSource.");
      }
      validateBaseTrackMetadata(metadata);
      this._addTrack("subtitle", source, metadata);
    }
    /**
     * Sets descriptive metadata tags about the media file, such as title, author, date, or cover art. When called
     * multiple times, only the metadata from the last call will be used.
     *
     * Can only be called before the output is started.
     */
    setMetadataTags(tags) {
      validateMetadataTags(tags);
      if (this.state !== "pending") {
        throw new Error("Cannot set metadata tags after output has been started or canceled.");
      }
      this._metadataTags = tags;
    }
    /** @internal */
    _addTrack(type, source, metadata) {
      if (this.state !== "pending") {
        throw new Error("Cannot add track after output has been started or canceled.");
      }
      if (source._connectedTrack) {
        throw new Error("Source is already used for a track.");
      }
      const supportedTrackCounts = this.format.getSupportedTrackCounts();
      const presentTracksOfThisType = this._tracks.reduce((count, track2) => count + (track2.type === type ? 1 : 0), 0);
      const maxCount = supportedTrackCounts[type].max;
      if (presentTracksOfThisType === maxCount) {
        throw new Error(maxCount === 0 ? `${this.format._name} does not support ${type} tracks.` : `${this.format._name} does not support more than ${maxCount} ${type} track${maxCount === 1 ? "" : "s"}.`);
      }
      const maxTotalCount = supportedTrackCounts.total.max;
      if (this._tracks.length === maxTotalCount) {
        throw new Error(`${this.format._name} does not support more than ${maxTotalCount} tracks${maxTotalCount === 1 ? "" : "s"} in total.`);
      }
      const track = {
        id: this._tracks.length + 1,
        output: this,
        type,
        source,
        metadata
      };
      if (track.type === "video") {
        const supportedVideoCodecs = this.format.getSupportedVideoCodecs();
        if (supportedVideoCodecs.length === 0) {
          throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(track.source._codec));
        } else if (!supportedVideoCodecs.includes(track.source._codec)) {
          throw new Error(`Codec '${track.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${supportedVideoCodecs.map((codec) => `'${codec}'`).join(", ")}.` + this.format._codecUnsupportedHint(track.source._codec));
        }
      } else if (track.type === "audio") {
        const supportedAudioCodecs = this.format.getSupportedAudioCodecs();
        if (supportedAudioCodecs.length === 0) {
          throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(track.source._codec));
        } else if (!supportedAudioCodecs.includes(track.source._codec)) {
          throw new Error(`Codec '${track.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${supportedAudioCodecs.map((codec) => `'${codec}'`).join(", ")}.` + this.format._codecUnsupportedHint(track.source._codec));
        }
      } else if (track.type === "subtitle") {
        const supportedSubtitleCodecs = this.format.getSupportedSubtitleCodecs();
        if (supportedSubtitleCodecs.length === 0) {
          throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(track.source._codec));
        } else if (!supportedSubtitleCodecs.includes(track.source._codec)) {
          throw new Error(`Codec '${track.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${supportedSubtitleCodecs.map((codec) => `'${codec}'`).join(", ")}.` + this.format._codecUnsupportedHint(track.source._codec));
        }
      }
      this._tracks.push(track);
      source._connectedTrack = track;
    }
    /**
     * Starts the creation of the output file. This method should be called after all tracks have been added. Only after
     * the output has started can media samples be added to the tracks.
     *
     * @returns A promise that resolves when the output has successfully started and is ready to receive media samples.
     */
    async start() {
      const supportedTrackCounts = this.format.getSupportedTrackCounts();
      for (const trackType of ALL_TRACK_TYPES) {
        const presentTracksOfThisType = this._tracks.reduce((count, track) => count + (track.type === trackType ? 1 : 0), 0);
        const minCount = supportedTrackCounts[trackType].min;
        if (presentTracksOfThisType < minCount) {
          throw new Error(minCount === supportedTrackCounts[trackType].max ? `${this.format._name} requires exactly ${minCount} ${trackType} track${minCount === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${minCount} ${trackType} track${minCount === 1 ? "" : "s"}.`);
        }
      }
      const totalMinCount = supportedTrackCounts.total.min;
      if (this._tracks.length < totalMinCount) {
        throw new Error(totalMinCount === supportedTrackCounts.total.max ? `${this.format._name} requires exactly ${totalMinCount} track${totalMinCount === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${totalMinCount} track${totalMinCount === 1 ? "" : "s"}.`);
      }
      if (this.state === "canceled") {
        throw new Error("Output has been canceled.");
      }
      if (this._startPromise) {
        console.warn("Output has already been started.");
        return this._startPromise;
      }
      return this._startPromise = (async () => {
        this.state = "started";
        this._writer.start();
        const release = await this._mutex.acquire();
        await this._muxer.start();
        const promises = this._tracks.map((track) => track.source._start());
        await Promise.all(promises);
        release();
      })();
    }
    /**
     * Resolves with the full MIME type of the output file, including track codecs.
     *
     * The returned promise will resolve only once the precise codec strings of all tracks are known.
     */
    getMimeType() {
      return this._muxer.getMimeType();
    }
    /**
     * Cancels the creation of the output file, releasing internal resources like encoders and preventing further
     * samples from being added.
     *
     * @returns A promise that resolves once all internal resources have been released.
     */
    async cancel() {
      if (this._cancelPromise) {
        console.warn("Output has already been canceled.");
        return this._cancelPromise;
      } else if (this.state === "finalizing" || this.state === "finalized") {
        console.warn("Output has already been finalized.");
        return;
      }
      return this._cancelPromise = (async () => {
        this.state = "canceled";
        const release = await this._mutex.acquire();
        const promises = this._tracks.map((x) => x.source._flushOrWaitForOngoingClose(true));
        await Promise.all(promises);
        await this._writer.close();
        release();
      })();
    }
    /**
     * Finalizes the output file. This method must be called after all media samples across all tracks have been added.
     * Once the Promise returned by this method completes, the output file is ready.
     */
    async finalize() {
      if (this.state === "pending") {
        throw new Error("Cannot finalize before starting.");
      }
      if (this.state === "canceled") {
        throw new Error("Cannot finalize after canceling.");
      }
      if (this._finalizePromise) {
        console.warn("Output has already been finalized.");
        return this._finalizePromise;
      }
      return this._finalizePromise = (async () => {
        this.state = "finalizing";
        const release = await this._mutex.acquire();
        const promises = this._tracks.map((x) => x.source._flushOrWaitForOngoingClose(false));
        await Promise.all(promises);
        await this._muxer.finalize();
        await this._writer.flush();
        await this._writer.finalize();
        this.state = "finalized";
        release();
      })();
    }
  };

  // ../../node_modules/mediabunny/dist/modules/src/index.js
  var MEDIABUNNY_LOADED_SYMBOL = /* @__PURE__ */ Symbol.for("mediabunny loaded");
  if (globalThis[MEDIABUNNY_LOADED_SYMBOL]) {
    console.error("[WARNING]\nMediabunny was loaded twice. This will likely cause Mediabunny not to work correctly. Check if multiple dependencies are importing different versions of Mediabunny, or if something is being bundled incorrectly.");
  }
  globalThis[MEDIABUNNY_LOADED_SYMBOL] = true;

  // ../core/dist/freezer.js
  var ElementFreezer = class {
    async freezeAll(element, options = {}) {
      const { freezeAnimations = true, freezeCanvas = true, freezeVideo = true, freezeImages = true, removeScripts = true, removeAudio = true } = options;
      let restoreStyles;
      if (freezeAnimations) {
        restoreStyles = this._commitWebAnimations(element);
      }
      const frozenElement = element.cloneNode(true);
      if (restoreStyles)
        restoreStyles();
      const promises = [];
      if (freezeAnimations) {
        frozenElement.querySelectorAll("*").forEach((el) => {
          if (el.style?.animation)
            el.style.animation = "none";
        });
        if (frozenElement.style?.animation)
          frozenElement.style.animation = "none";
        const sourceSmil = element.querySelectorAll("animate, animateTransform, animateMotion, set");
        const destSmil = frozenElement.querySelectorAll("animate, animateTransform, animateMotion, set");
        promises.push(...Array.from(sourceSmil).map((src, i) => this.freezeSmilAnimation(src, destSmil[i])));
      }
      if (freezeCanvas) {
        const sourceCanvases = element.querySelectorAll("canvas");
        const destCanvases = frozenElement.querySelectorAll("canvas");
        promises.push(...Array.from(sourceCanvases).map((src, i) => this.freezeCanvas(src, destCanvases[i])));
      }
      if (freezeVideo) {
        const sourceVideos = element.querySelectorAll("video");
        const destVideos = frozenElement.querySelectorAll("video");
        promises.push(...Array.from(sourceVideos).map((src, i) => this.freezeVideo(src, destVideos[i])));
      }
      if (freezeImages) {
        const sourceImages = element.querySelectorAll("image, img");
        const destImages = frozenElement.querySelectorAll("image, img");
        promises.push(...Array.from(sourceImages).map((src, i) => this.freezeImage(src, destImages[i])));
      }
      await Promise.all(promises);
      if (removeScripts) {
        frozenElement.querySelectorAll("script").forEach((script) => script.remove());
      }
      if (removeAudio) {
        frozenElement.querySelectorAll("audio").forEach((audio) => audio.remove());
      }
      return frozenElement;
    }
    /** Commit all Web/CSS animation styles to inline style attributes on the source elements.
     *  Returns a cleanup function that restores the original styles. */
    _commitWebAnimations(element) {
      const animations = element.getAnimations({ subtree: true });
      const targets = /* @__PURE__ */ new Map();
      for (const a of animations) {
        const target = a.effect?.target;
        if (target && !targets.has(target)) {
          targets.set(target, target.getAttribute("style"));
        }
      }
      for (const [target] of targets) {
        const targetAnims = target.getAnimations();
        for (const anim of targetAnims) {
          try {
            anim.commitStyles();
          } catch {
          }
        }
      }
      return () => {
        for (const [target, original] of targets) {
          if (original !== null) {
            target.setAttribute("style", original);
          } else {
            target.removeAttribute("style");
          }
        }
      };
    }
    freezeWebAnimation(source, dest) {
      const animations = source.getAnimations();
      for (const animation of animations) {
        const originalStyle = source.getAttribute("style");
        animation.commitStyles();
        dest.setAttribute("style", source.getAttribute("style") || "");
        if (originalStyle) {
          source.setAttribute("style", originalStyle);
        } else {
          source.removeAttribute("style");
        }
      }
      if (animations.length > 0) {
        dest.style.animation = "none";
      }
    }
    async freezeSmilAnimation(source, dest) {
      const sourceHref = source.getAttribute("href") || source.getAttribute("xlink:href");
      const sourceTarget = sourceHref ? source.ownerSVGElement?.querySelector(sourceHref) ?? source.parentElement : source.parentElement;
      const destHref = dest.getAttribute("href") || dest.getAttribute("xlink:href");
      const destTarget = destHref ? dest.ownerSVGElement?.querySelector(destHref) ?? dest.parentElement : dest.parentElement;
      if (!destTarget || !sourceTarget) {
        dest.remove();
        return;
      }
      const attrName = source.getAttribute("attributeName");
      if (source.tagName === "animateMotion" || source.tagName === "animateTransform" || attrName === "transform") {
        if (sourceTarget instanceof SVGGraphicsElement) {
          const matrix = sourceTarget.getCTM();
          if (matrix) {
            destTarget.setAttribute("transform", `matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.e},${matrix.f})`);
          }
        }
        dest.remove();
        return;
      }
      if (!attrName) {
        dest.remove();
        return;
      }
      const animatedProperty = sourceTarget[attrName];
      if (animatedProperty && animatedProperty.animVal !== void 0) {
        const animVal = animatedProperty.animVal;
        if (typeof animVal === "boolean" || typeof animVal === "number" || typeof animVal === "string") {
          destTarget.setAttribute(attrName, String(animVal));
        } else if (typeof animVal === "object" && animVal !== null) {
          if (animVal.value !== void 0) {
            destTarget.setAttribute(attrName, String(animVal.value));
          } else if (animVal.x !== void 0 && animVal.y !== void 0) {
            if (animVal.width !== void 0 && animVal.height !== void 0) {
              destTarget.setAttribute(attrName, `${animVal.x} ${animVal.y} ${animVal.width} ${animVal.height}`);
            } else {
              destTarget.setAttribute(attrName, `${animVal.x} ${animVal.y}`);
            }
          } else if (animVal.numberOfItems !== void 0) {
            const items = [];
            for (let i = 0; i < animVal.numberOfItems; i++) {
              const item = animVal.getItem(i);
              if (item.matrix) {
                const m = item.matrix;
                items.push(`matrix(${m.a},${m.b},${m.c},${m.d},${m.e},${m.f})`);
              } else if (item.value !== void 0) {
                items.push(String(item.value));
              }
            }
            if (items.length > 0)
              destTarget.setAttribute(attrName, items.join(" "));
          } else if (animVal.align !== void 0) {
            destTarget.setAttribute(attrName, `${animVal.align} ${animVal.meetOrSlice}`);
          }
        }
      } else {
        try {
          const computedValue = window.getComputedStyle(sourceTarget).getPropertyValue(attrName);
          if (computedValue) {
            destTarget.style.setProperty(attrName, computedValue);
          }
        } catch {
          const attrVal = sourceTarget.getAttribute(attrName);
          if (attrVal !== null)
            destTarget.setAttribute(attrName, attrVal);
        }
      }
      dest.remove();
    }
    async freezeCanvas(source, dest) {
      if (!this.isVisible(dest)) {
        const div = document.createElement("div");
        Array.from(dest.attributes).forEach((attr) => div.setAttribute(attr.name, attr.value));
        dest.parentNode?.replaceChild(div, dest);
        return;
      }
      const img = document.createElement("img");
      img.crossOrigin = "anonymous";
      const blob = await new Promise((res) => source.toBlob(res, "image/webp", 1));
      if (!blob)
        return;
      const url2 = URL.createObjectURL(blob);
      img.src = url2;
      Array.from(dest.attributes).forEach((attr) => img.setAttribute(attr.name, attr.value));
      dest.parentNode?.replaceChild(img, dest);
      URL.revokeObjectURL(url2);
    }
    async freezeVideo(source, dest) {
      if (!this.isVisible(dest)) {
        const div = document.createElement("div");
        Array.from(dest.attributes).forEach((attr) => {
          if (attr.name !== "src")
            div.setAttribute(attr.name, attr.value);
        });
        dest.parentNode?.replaceChild(div, dest);
        return;
      }
      const canvas = new OffscreenCanvas(source.videoWidth || 640, source.videoHeight || 480);
      const ctx = canvas.getContext("2d");
      if (!ctx)
        return;
      ctx.drawImage(source, 0, 0);
      const blob = await canvas.convertToBlob({ type: "image/webp", quality: 1 });
      const url2 = URL.createObjectURL(blob);
      const img = document.createElement("img");
      img.crossOrigin = "anonymous";
      img.src = url2;
      Array.from(dest.attributes).forEach((attr) => {
        if (attr.name !== "src")
          img.setAttribute(attr.name, attr.value);
      });
      dest.parentNode?.replaceChild(img, dest);
      URL.revokeObjectURL(url2);
    }
    async freezeImage(source, dest) {
      if (!this.isVisible(dest)) {
        if (dest instanceof SVGImageElement) {
          dest.setAttribute("href", "");
        } else {
          const div = document.createElement("div");
          Array.from(dest.attributes).forEach((attr) => {
            if (attr.name !== "src")
              div.setAttribute(attr.name, attr.value);
          });
          dest.parentNode?.replaceChild(div, dest);
        }
        return;
      }
      const src = source.getAttribute("src") || source.getAttribute("href");
      if (!src)
        return;
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;
      await img.decode();
      if (dest instanceof SVGImageElement) {
        dest.setAttribute("href", src);
      } else {
        dest.setAttribute("src", src);
      }
      dest.crossOrigin = "anonymous";
    }
    isVisible(element) {
      let current = element;
      while (current) {
        if (current instanceof SVGElement) {
          const display = current.getAttribute("display");
          const visibility = current.getAttribute("visibility");
          const opacity = current.getAttribute("opacity");
          if (display === "none" || visibility === "hidden" || opacity === "0") {
            return false;
          }
        }
        current = current.parentElement;
      }
      return true;
    }
  };

  // ../core/dist/media.js
  async function waitMedia(el) {
    el.load();
    if (el.readyState < 2) {
      await new Promise((r) => el.addEventListener("loadedmetadata", () => r(), { once: true }));
    }
    if (el.readyState < 4) {
      await new Promise((r) => el.addEventListener("loadeddata", () => r(), { once: true }));
    }
  }
  async function seekMedia(el, time) {
    const clamped = Math.max(0, Math.min(el.duration || 0, time));
    if (Math.abs(el.currentTime - clamped) < 1e-3)
      return;
    el.currentTime = clamped;
    if (el.readyState < 2) {
      await new Promise((r) => el.addEventListener("seeked", () => r(), { once: true }));
    }
  }
  function seekElement(element, time) {
    if ("setCurrentTime" in element)
      element.setCurrentTime(time);
    for (const a of element.getAnimations({ subtree: true }))
      a.currentTime = time * 1e3;
  }

  // ../core/dist/renderer.js
  var ElementRenderer = class {
    /**
     * Render any HTML or SVG element to an OffscreenCanvas.
     * HTML elements use html2canvas for native HTML→Canvas rendering.
     * SVG elements use XMLSerializer → dataURL → Image.
     */
    async renderToCanvas(element, width, height) {
      let w;
      let h;
      if (width && height) {
        w = width;
        h = height;
      } else if (element instanceof SVGSVGElement) {
        const img = await this.renderSvgToImage(element);
        w = width ?? (element.width.baseVal.value || img.width);
        h = height ?? (element.height.baseVal.value || img.height);
      } else {
        const rect = element.getBoundingClientRect();
        w = width ?? (rect.width > 0 ? rect.width : element.scrollWidth || 800);
        h = height ?? (rect.height > 0 ? rect.height : element.scrollHeight || 600);
      }
      w = Math.max(1, Math.round(w));
      h = Math.max(1, Math.round(h));
      if (element instanceof SVGSVGElement) {
        const img = await this.renderSvgToImage(element);
        const canvas = new OffscreenCanvas(w, h);
        const ctx = canvas.getContext("2d");
        if (!ctx)
          throw new Error("Failed to get canvas context");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        return canvas;
      }
      return this.renderHtmlToCanvas(element, w, h);
    }
    async renderSvgToImage(element) {
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(element);
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const dataURL = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = dataURL;
      await img.decode();
      return img;
    }
    async renderHtmlToCanvas(element, width, height) {
      try {
        const html2canvas = (await Promise.resolve().then(() => __toESM(require_html2canvas(), 1))).default;
        const canvas = await html2canvas(element, {
          width,
          height,
          scale: 1,
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          logging: false
        });
        const offscreen = new OffscreenCanvas(width, height);
        const ctx = offscreen.getContext("2d");
        if (!ctx)
          throw new Error("Failed to get canvas context");
        ctx.drawImage(canvas, 0, 0, width, height, 0, 0, width, height);
        return offscreen;
      } catch {
        return this.renderHtmlViaForeignObject(element, width, height);
      }
    }
    async renderHtmlViaForeignObject(element, width, height) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", String(width));
      svg.setAttribute("height", String(height));
      const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      foreignObject.setAttribute("width", "100%");
      foreignObject.setAttribute("height", "100%");
      foreignObject.appendChild(element.cloneNode(true));
      svg.appendChild(foreignObject);
      const img = await this.renderSvgToImage(svg);
      const canvas = new OffscreenCanvas(width, height);
      const ctx = canvas.getContext("2d");
      if (!ctx)
        throw new Error("Failed to get canvas context");
      ctx.drawImage(img, 0, 0);
      return canvas;
    }
  };

  // ../core/dist/exporter.js
  var MIME = {
    mp4: "video/mp4",
    webm: "video/webm",
    m4a: "audio/mp4",
    ogg: "audio/ogg"
  };
  var exporters = typeof window !== "undefined" && window.__framvExporters || /* @__PURE__ */ new Map();
  if (typeof window !== "undefined") {
    window.__framvExporters = exporters;
  }
  var ElementExporter = class {
    freezer = new ElementFreezer();
    renderer = new ElementRenderer();
    async export(element, settings2, onProgress) {
      const { format, quality = 1, fps = 30, start = 0, end = 5, width, height } = settings2;
      switch (format) {
        case "svg":
          return this.exportSvg(element);
        case "png":
        case "jpg":
        case "webp":
          return this.exportImage(element, format, quality, width, height);
        case "webm":
        case "mp4":
          return this.exportMedia(element, format, quality, fps, start, end, true, onProgress, width, height);
        case "m4a":
        case "ogg":
          return this.exportMedia(element, format, quality, fps, start, end, false, onProgress);
        default: {
          const custom = exporters.get(format);
          if (custom)
            return custom(element, settings2, { freezer: this.freezer, renderer: this.renderer });
          throw new Error(`Unsupported format: ${format}`);
        }
      }
    }
    exportSvg(element) {
      const svgString = new XMLSerializer().serializeToString(element);
      return Promise.resolve(new Blob([svgString], { type: "image/svg+xml" }));
    }
    async exportImage(element, format, quality, width, height) {
      const frozen = await this.freezer.freezeAll(element);
      const canvas = await this.renderer.renderToCanvas(frozen, width, height);
      const mime = { png: "image/png", jpg: "image/jpeg", webp: "image/webp" };
      return canvas.convertToBlob({ type: mime[format], quality });
    }
    async exportMedia(element, format, quality, fps, start, end, includeVideo, onProgress, width, height) {
      const isMP4 = format === "mp4" || format === "m4a";
      const totalFrames = Math.ceil((end - start) * fps);
      const frameDuration = 1 / fps;
      const mbQuality = quality >= 0.95 ? QUALITY_VERY_HIGH : quality >= 0.8 ? QUALITY_HIGH : quality >= 0.5 ? QUALITY_MEDIUM : QUALITY_LOW;
      const chunks = [];
      const output = new Output({
        format: isMP4 ? new Mp4OutputFormat({ fastStart: "fragmented" }) : new WebMOutputFormat(),
        target: new StreamTarget(new WritableStream({
          write: (c) => {
            chunks.push(c.data);
          }
        }))
      });
      let videoSource;
      if (includeVideo) {
        videoSource = new VideoSampleSource({ codec: isMP4 ? "avc" : "vp9", bitrate: mbQuality, keyFrameInterval: 2, latencyMode: "realtime" });
        output.addVideoTrack(videoSource, { frameRate: fps });
      }
      const mediaEls = Array.from(element.querySelectorAll("audio, video")).filter((m) => m.src && (m.tagName === "AUDIO" || hasAudio(m)));
      let audioSource;
      let audioCtx;
      if (mediaEls.length > 0) {
        audioCtx = new AudioContext();
        audioSource = new AudioSampleSource({
          codec: isMP4 ? await getFirstEncodableAudioCodec(["aac", "opus", "pcm-s16"]) ?? "aac" : "opus",
          bitrate: mbQuality
        });
        output.addAudioTrack(audioSource);
      }
      await output.start();
      for (const m of mediaEls)
        await waitMedia(m);
      for (const m of mediaEls)
        await seekMedia(m, m.duration);
      for (const m of mediaEls)
        await seekMedia(m, 0);
      for (let i = 0; i < totalFrames; i++) {
        if (onProgress) {
          const ok = await onProgress((i + 1) / totalFrames);
          if (!ok)
            throw new Error("Export cancelled");
        }
        const frameTime = start + i * frameDuration;
        seekElement(element, frameTime);
        for (const m of mediaEls)
          await seekMedia(m, frameTime - (parseFloat(m.dataset.mediaStart ?? "0") || 0));
        if (includeVideo && videoSource) {
          const frozen = await this.freezer.freezeAll(element);
          const canvas = await this.renderer.renderToCanvas(frozen, width, height);
          const ctx = canvas.getContext("2d");
          if (ctx) {
            const vf = new VideoFrame(ctx.getImageData(0, 0, canvas.width, canvas.height).data.buffer, {
              format: "RGBA",
              codedWidth: canvas.width,
              codedHeight: canvas.height,
              timestamp: Math.round(i / fps * 1e6)
            });
            await videoSource.add(new VideoSample(vf));
            vf.close();
          }
        }
        if (audioSource && audioCtx) {
          for await (const chunk of mixAudioFrame(mediaEls, frameTime, frameDuration, audioCtx.sampleRate)) {
            await audioSource.add(new AudioSample({ format: "f32", sampleRate: audioCtx.sampleRate, numberOfChannels: 2, ...chunk }));
          }
        }
      }
      await output.finalize();
      if (audioCtx)
        await audioCtx.close();
      return new Blob(chunks, { type: MIME[format] });
    }
  };

  // ../core/dist/factory.js
  async function exportElement(options) {
    const { element, settings: settings2, onProgress } = options;
    const exporter = new ElementExporter();
    return exporter.export(element, settings2, onProgress);
  }

  // src/player.ts
  var Player = class {
    /** The root element whose animations this player controls. Can be any HTML element (div, section, etc.) or SVGSVGElement. */
    _element;
    _currentTime = 0;
    _duration = 0;
    _playing = false;
    _rafId = null;
    _lastRafTime = null;
    _listeners = /* @__PURE__ */ new Map();
    constructor(element) {
      this._element = element;
    }
    // ─── State ───────────────────────────────────────────────────────────────
    get currentTime() {
      return this._currentTime;
    }
    get duration() {
      return this._duration;
    }
    get playing() {
      return this._playing;
    }
    setDuration(duration) {
      if (duration >= 0) {
        this._duration = duration;
      }
    }
    // ─── Controls ────────────────────────────────────────────────────────────
    async play() {
      if (this._playing) return;
      this._playing = true;
      await this._playElement(this._element);
      this._startRafLoop();
      this._emit("play");
    }
    pause() {
      if (!this._playing) return;
      this._playing = false;
      this._stopRafLoop();
      this._pauseElement(this._element);
      this._emit("pause");
    }
    async seek(time) {
      const clamped = this._duration > 0 ? Math.max(0, Math.min(time, this._duration)) : Math.max(0, time);
      this._currentTime = clamped;
      await this._seekElement(this._element, clamped);
      this._emit("seek", clamped);
      this._emit("timeupdate", clamped);
    }
    destroy() {
      this.pause();
      this._listeners.clear();
    }
    // ─── Events ──────────────────────────────────────────────────────────────
    on(event, cb) {
      if (!this._listeners.has(event)) {
        this._listeners.set(event, /* @__PURE__ */ new Set());
      }
      this._listeners.get(event).add(cb);
      return () => {
        this._listeners.get(event)?.delete(cb);
      };
    }
    // ─── Internal: rAF loop ──────────────────────────────────────────────────
    _startRafLoop() {
      this._lastRafTime = null;
      const tick = (now) => {
        if (!this._playing) return;
        if (this._lastRafTime !== null) {
          const delta = (now - this._lastRafTime) / 1e3;
          this._currentTime += delta;
          if (this._duration > 0 && this._currentTime >= this._duration) {
            this._currentTime = this._duration;
            this._emit("timeupdate", this._currentTime);
            this._playing = false;
            this._stopRafLoop();
            this._pauseElement(this._element);
            this._emit("ended");
            return;
          }
        }
        this._lastRafTime = now;
        const all = [this._element, ...Array.from(this._element.querySelectorAll("*"))];
        for (const el of all) {
          if (typeof el.draw === "function") el.draw(this._currentTime);
        }
        this._emit("timeupdate", this._currentTime);
        this._rafId = requestAnimationFrame(tick);
      };
      this._rafId = requestAnimationFrame(tick);
    }
    _stopRafLoop() {
      if (this._rafId !== null) {
        cancelAnimationFrame(this._rafId);
        this._rafId = null;
      }
      this._lastRafTime = null;
    }
    // ─── Internal: element control ───────────────────────────────────────────
    async _playElement(element) {
      const all = [element, ...Array.from(element.querySelectorAll("*"))];
      for (const el of all) {
        if (el instanceof SVGSVGElement) {
          el.unpauseAnimations();
        } else if (el instanceof HTMLMediaElement) {
          await this._playMedia(el);
        } else if (el.getAnimations?.().length > 0) {
          el.getAnimations().forEach((a) => a.play());
        }
      }
    }
    _pauseElement(element) {
      const all = [element, ...Array.from(element.querySelectorAll("*"))];
      for (const el of all) {
        if (el instanceof SVGSVGElement) {
          el.pauseAnimations();
        } else if (el instanceof HTMLMediaElement) {
          el.pause();
          const extEl = el;
          if (extEl._autoplayTimeout) {
            clearTimeout(extEl._autoplayTimeout);
            delete extEl._autoplayTimeout;
          }
        } else if (el.getAnimations?.().length > 0) {
          el.getAnimations().forEach((a) => a.pause());
        }
      }
    }
    async _seekElement(element, time) {
      const all = [element, ...Array.from(element.querySelectorAll("*"))];
      const promises = [];
      for (const el of all) {
        if (el instanceof SVGSVGElement) {
          el.setCurrentTime(time);
        } else if (el instanceof HTMLMediaElement) {
          promises.push(this._seekMedia(el, time));
        } else if (el.getAnimations?.().length > 0) {
          el.getAnimations().forEach((a) => {
            a.currentTime = time * 1e3;
          });
        }
      }
      await Promise.all(promises);
    }
    async _playMedia(el) {
      const startTime = this._getMediaStartTime(el);
      const now = this._currentTime;
      if (startTime > 0) {
        if (now >= startTime) {
          await this._seekMedia(el, now);
          await el.play().catch(() => void 0);
        } else {
          const extEl = el;
          extEl._autoplayTimeout = setTimeout(
            async () => {
              await el.play().catch(() => void 0);
            },
            (startTime - now) * 1e3
          );
        }
      } else if (startTime < 0) {
        await this._seekMedia(el, now);
        await el.play().catch(() => void 0);
      } else {
        await el.play().catch(() => void 0);
      }
    }
    _seekMedia(el, containerTime) {
      return new Promise((resolve) => {
        const startTime = this._getMediaStartTime(el);
        let adjusted;
        if (startTime > 0) {
          adjusted = containerTime >= startTime ? containerTime - startTime : 0;
        } else if (startTime < 0) {
          adjusted = containerTime + Math.abs(startTime);
        } else {
          adjusted = containerTime;
        }
        const target = el.loop && el.duration > 0 ? adjusted % el.duration : Math.min(adjusted, el.duration || 0);
        const onSeeked = () => {
          el.removeEventListener("seeked", onSeeked);
          resolve();
        };
        el.addEventListener("seeked", onSeeked);
        el.currentTime = target;
      });
    }
    _getMediaStartTime(el) {
      const attr = el.getAttribute("data-media-start");
      return attr ? parseFloat(attr) : 0;
    }
    // ─── Internal: emit ──────────────────────────────────────────────────────
    _emit(event, time) {
      this._listeners.get(event)?.forEach((cb) => cb(time));
    }
  };

  // src/element.ts
  var STYLES = `
  :host { display: block; position: relative; overflow: hidden; }
  .framv-stage {
    position: relative;
    width: var(--framv-w, 1920px);
    height: var(--framv-h, 1080px);
    transform-origin: top left;
    overflow: hidden;
  }
  .framv-toolbar {
    display: flex; align-items: center; gap: 10px;
    padding: 8px 12px;
    background: rgba(0,0,0,0.7); backdrop-filter: blur(6px);
    color: #fff; font: 13px/1 system-ui, monospace;
    position: absolute; bottom: 0; left: 0; right: 0;
    opacity: 0; transition: opacity 0.2s;
    z-index: 10;
  }
  :host(:hover) .framv-toolbar,
  :host([controls]) .framv-toolbar { opacity: 1; }
  .framv-toolbar button {
    background: none; border: 1px solid rgba(255,255,255,0.2);
    color: inherit; cursor: pointer;
    padding: 4px 10px; font: inherit; border-radius: 4px;
  }
  .framv-toolbar button:hover { background: rgba(255,255,255,0.15); }
  .framv-toolbar .btn-export {
    border-color: #ff79c6; color: #ff79c6;
  }
  input[type=range] {
    flex: 1; accent-color: #ff79c6; cursor: pointer; height: 3px;
  }
  .framv-time { white-space: nowrap; font-variant-numeric: tabular-nums; opacity: 0.8; min-width: 100px; text-align: center; }
  .framv-badge {
    position: absolute; top: 8px; right: 8px;
    background: rgba(0,0,0,0.6); color: #fff;
    padding: 2px 8px; border-radius: 4px;
    font: 11px system-ui; letter-spacing: 0.5px;
    text-transform: uppercase; z-index: 5;
  }
  .framv-exporting-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.7);
    display: flex; align-items: center; justify-content: center;
    color: #fff; font: 16px system-ui; z-index: 20;
  }
  .framv-exporting-overlay .spinner {
    width: 32px; height: 32px; border: 3px solid rgba(255,255,255,0.3);
    border-top-color: #ff79c6; border-radius: 50%;
    animation: framv-spin 0.8s linear infinite;
    margin-right: 12px;
  }
  @keyframes framv-spin { to { transform: rotate(360deg); } }
`;
  var fmt = (s) => {
    const m = Math.floor(s / 60);
    return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  };
  var FramvVideoElement = class extends HTMLElement {
    static observedAttributes = ["duration", "width", "height", "format"];
    _player = null;
    _stage;
    _toolbar;
    _btn;
    _range;
    _time;
    _exportBtn;
    _shadow;
    _dragging = false;
    _exporting = false;
    constructor() {
      super();
      this._shadow = this.attachShadow({ mode: "open" });
    }
    get width() {
      return parseInt(this.getAttribute("width") ?? "1920");
    }
    get height() {
      return parseInt(this.getAttribute("height") ?? "1080");
    }
    get fps() {
      return parseInt(this.getAttribute("fps") ?? "30");
    }
    get duration() {
      return parseFloat(this.getAttribute("duration") ?? "5");
    }
    get format() {
      return this.getAttribute("format") ?? "mp4";
    }
    get quality() {
      return parseFloat(this.getAttribute("quality") ?? "0.95");
    }
    get player() {
      return this._player;
    }
    connectedCallback() {
      const w = this.width;
      const h = this.height;
      this._shadow.innerHTML = `
      <style>${STYLES}</style>
      <div class="framv-badge">framv video \xB7 ${this.format.toUpperCase()} \xB7 ${w}x${h}</div>
      <div class="framv-stage" style="--framv-w:${w}px;--framv-h:${h}px">
        <slot></slot>
      </div>
      <div class="framv-toolbar">
        <button class="btn-play">\u25B6</button>
        <input type="range" min="0" max="1000" value="0" step="1">
        <span class="framv-time">0:00 / 0:00</span>
        <button class="btn-export">\u2B07 Export ${this.format.toUpperCase()}</button>
      </div>
    `;
      this._stage = this._shadow.querySelector(".framv-stage");
      this._toolbar = this._shadow.querySelector(".framv-toolbar");
      this._btn = this._shadow.querySelector(".btn-play");
      this._range = this._shadow.querySelector("input");
      this._time = this._shadow.querySelector(".framv-time");
      this._exportBtn = this._shadow.querySelector(".btn-export");
      this._adaptSize();
      this._player = new Player(this);
      const d = this.duration;
      if (d > 0) this._player.setDuration(d);
      else this._player.setDuration(5);
      this._player.on("play", () => {
        this._btn.textContent = "\u23F8";
      });
      this._player.on("pause", () => {
        this._btn.textContent = "\u25B6";
      });
      this._player.on("ended", () => {
        this._btn.textContent = "\u21BA";
        if (this.hasAttribute("loop")) {
          this._player.seek(0).then(() => this._player.play());
        }
      });
      this._player.on("timeupdate", (t = 0) => {
        if (!this._dragging) this._range.value = String(Math.round(t / (this._player.duration || 1) * 1e3));
        this._time.textContent = `${fmt(t)} / ${fmt(this._player.duration)}`;
      });
      this._btn.addEventListener("click", () => {
        if (this._exporting) return;
        if (this._player.playing) {
          this._player.pause();
        } else if (this._player.currentTime >= this._player.duration && this._player.duration > 0) {
          this._player.seek(0).then(() => this._player.play());
        } else {
          this._player.play();
        }
      });
      this._range.addEventListener("mousedown", () => {
        this._dragging = true;
      });
      this._range.addEventListener("mouseup", () => {
        this._dragging = false;
      });
      this._range.addEventListener("input", () => {
        const t = Number(this._range.value) / 1e3 * (this._player.duration || 1);
        this._player.seek(t);
      });
      this._exportBtn.addEventListener("click", () => this._export());
      if (this.hasAttribute("autoplay")) this._player.play();
      new ResizeObserver(() => this._adaptSize()).observe(this);
    }
    disconnectedCallback() {
      this._player?.destroy();
      this._player = null;
    }
    attributeChangedCallback(name, _old, value) {
      if (name === "duration" && this._player) {
        this._player.setDuration(parseFloat(value) || 0);
      }
      if (name === "format" && this._toolbar) {
        const badge = this._shadow.querySelector(".framv-badge");
        if (badge) badge.textContent = `framv video \xB7 ${this.format.toUpperCase()} \xB7 ${this.width}x${this.height}`;
        this._exportBtn.textContent = `\u2B07 Export ${this.format.toUpperCase()}`;
      }
      if ((name === "width" || name === "height") && this._stage) {
        const w = this.width;
        const h = this.height;
        this._stage.style.setProperty("--framv-w", `${w}px`);
        this._stage.style.setProperty("--framv-h", `${h}px`);
        const badge = this._shadow.querySelector(".framv-badge");
        if (badge) badge.textContent = `framv video \xB7 ${this.format.toUpperCase()} \xB7 ${w}x${h}`;
        this._adaptSize();
      }
    }
    _adaptSize() {
      const w = this.width;
      const h = this.height;
      const containerW = this.clientWidth || w;
      const scale = Math.min(containerW / w, 1);
      this._stage.style.transform = `scale(${scale})`;
      this.style.minHeight = `${h * scale}px`;
    }
    async _export() {
      if (this._exporting) return;
      this._exporting = true;
      const overlay = document.createElement("div");
      overlay.className = "framv-exporting-overlay";
      overlay.innerHTML = '<div class="spinner"></div><span>Exporting... 0%</span>';
      const label = overlay.querySelector("span");
      this._shadow.appendChild(overlay);
      const container = document.createElement("div");
      container.style.width = `${this.width}px`;
      container.style.height = `${this.height}px`;
      container.style.position = "relative";
      container.style.overflow = "hidden";
      Array.from(this.children).forEach((child) => container.appendChild(child.cloneNode(true)));
      try {
        const blob = await exportElement({
          element: container,
          settings: {
            format: this.format,
            fps: this.fps,
            start: 0,
            end: this.duration,
            width: this.width,
            height: this.height,
            quality: this.quality
          },
          onProgress: (p) => {
            label.textContent = `Exporting... ${Math.round(p * 100)}%`;
            return true;
          }
        });
        const url2 = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url2;
        a.download = `framv-video.${this.format}`;
        this._shadow.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url2);
      } catch (err) {
        console.error("Export failed:", err);
        label.textContent = "Export failed. Check console.";
      } finally {
        overlay.remove();
        this._exporting = false;
      }
    }
  };
  if (!customElements.get("framv-video")) {
    customElements.define("framv-video", FramvVideoElement);
  }
  return __toCommonJS(cdn_exports);
})();
/*! Bundled license information:

html2canvas/dist/html2canvas.js:
  (*!
   * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   *)
  (*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
  
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
  
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** *)

mediabunny/dist/modules/src/misc.js:
mediabunny/dist/modules/src/metadata.js:
mediabunny/dist/modules/src/codec.js:
mediabunny/dist/modules/shared/ac3-misc.js:
mediabunny/dist/modules/src/codec-data.js:
mediabunny/dist/modules/src/custom-coder.js:
mediabunny/dist/modules/src/packet.js:
mediabunny/dist/modules/src/pcm.js:
mediabunny/dist/modules/src/sample.js:
mediabunny/dist/modules/src/isobmff/isobmff-misc.js:
mediabunny/dist/modules/src/isobmff/isobmff-reader.js:
mediabunny/dist/modules/src/matroska/ebml.js:
mediabunny/dist/modules/src/matroska/matroska-misc.js:
mediabunny/dist/modules/src/adts/adts-reader.js:
mediabunny/dist/modules/src/reader.js:
mediabunny/dist/modules/src/muxer.js:
mediabunny/dist/modules/src/subtitles.js:
mediabunny/dist/modules/src/isobmff/isobmff-boxes.js:
mediabunny/dist/modules/src/writer.js:
mediabunny/dist/modules/src/target.js:
mediabunny/dist/modules/src/isobmff/isobmff-muxer.js:
mediabunny/dist/modules/src/matroska/matroska-muxer.js:
mediabunny/dist/modules/src/output-format.js:
mediabunny/dist/modules/src/encode.js:
mediabunny/dist/modules/src/media-source.js:
mediabunny/dist/modules/src/output.js:
mediabunny/dist/modules/src/index.js:
  (*!
   * Copyright (c) 2026-present, Vanilagy and contributors
   *
   * This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at https://mozilla.org/MPL/2.0/.
   *)
*/
