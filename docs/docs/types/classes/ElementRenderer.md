# Class: ElementRenderer

Defined in: [renderer.ts:1](https://github.com/framv/framv/blob/38cb2eee9cfe495006599d6e5536a1a0dc59d451/packages/core/src/renderer.ts#L1)

## Constructors

### Constructor

> **new ElementRenderer**(): `ElementRenderer`

#### Returns

`ElementRenderer`

## Methods

### renderToCanvas()

> **renderToCanvas**(`element`, `width?`, `height?`): `Promise`\<`OffscreenCanvas`\>

Defined in: [renderer.ts:7](https://github.com/framv/framv/blob/38cb2eee9cfe495006599d6e5536a1a0dc59d451/packages/core/src/renderer.ts#L7)

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
