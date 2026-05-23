# Class: ElementRenderer

Defined in: [renderer.ts:1](https://github.com/framv/framv/blob/b9694ec0a824a11fe843ba71cea9a176f9c289cf/packages/core/src/renderer.ts#L1)

## Constructors

### Constructor

> **new ElementRenderer**(): `ElementRenderer`

#### Returns

`ElementRenderer`

## Methods

### renderToCanvas()

> **renderToCanvas**(`element`, `width?`, `height?`): `Promise`\<`OffscreenCanvas`\>

Defined in: [renderer.ts:7](https://github.com/framv/framv/blob/b9694ec0a824a11fe843ba71cea9a176f9c289cf/packages/core/src/renderer.ts#L7)

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
