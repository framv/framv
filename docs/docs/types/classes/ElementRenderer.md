# Class: ElementRenderer

Defined in: [renderer.ts:1](https://github.com/framv/framv/blob/f87656fa4b5c9e658d6ad62ff02b63f8c2b5d9ec/packages/core/src/renderer.ts#L1)

## Constructors

### Constructor

> **new ElementRenderer**(): `ElementRenderer`

#### Returns

`ElementRenderer`

## Methods

### renderToCanvas()

> **renderToCanvas**(`element`, `width?`, `height?`): `Promise`\<`OffscreenCanvas`\>

Defined in: [renderer.ts:7](https://github.com/framv/framv/blob/f87656fa4b5c9e658d6ad62ff02b63f8c2b5d9ec/packages/core/src/renderer.ts#L7)

Render any HTML or SVG element to an OffscreenCanvas.
HTML elements use html2canvas for native HTML→Canvas rendering.
SVG elements use XMLSerializer → dataURL → Image.

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

##### width?

`number`

##### height?

`number`

#### Returns

`Promise`\<`OffscreenCanvas`\>
