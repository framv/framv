# Class: ElementRenderer

Defined in: [renderer.ts:1](https://github.com/framv/framv/blob/5494213b6294fb782853dff973e0c9be903aca8b/packages/core/src/renderer.ts#L1)

## Constructors

### Constructor

> **new ElementRenderer**(): `ElementRenderer`

#### Returns

`ElementRenderer`

## Methods

### renderToCanvas()

> **renderToCanvas**(`element`, `width?`, `height?`): `Promise`\<`OffscreenCanvas`\>

Defined in: [renderer.ts:9](https://github.com/framv/framv/blob/5494213b6294fb782853dff973e0c9be903aca8b/packages/core/src/renderer.ts#L9)

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

##### width?

`number`

##### height?

`number`

#### Returns

`Promise`\<`OffscreenCanvas`\>

***

### renderToImage()

> **renderToImage**(`element`): `Promise`\<`HTMLImageElement`\>

Defined in: [renderer.ts:2](https://github.com/framv/framv/blob/5494213b6294fb782853dff973e0c9be903aca8b/packages/core/src/renderer.ts#L2)

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

#### Returns

`Promise`\<`HTMLImageElement`\>
