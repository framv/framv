# Class: ElementRenderer

Defined in: [renderer.ts:1](https://github.com/framv/framv/blob/e5a5ad0d58b85c953696f919e1f6065282ef301d/packages/core/src/renderer.ts#L1)

## Constructors

### Constructor

> **new ElementRenderer**(): `ElementRenderer`

#### Returns

`ElementRenderer`

## Methods

### renderToCanvas()

> **renderToCanvas**(`element`, `width?`, `height?`): `Promise`\<`OffscreenCanvas`\>

Defined in: [renderer.ts:9](https://github.com/framv/framv/blob/e5a5ad0d58b85c953696f919e1f6065282ef301d/packages/core/src/renderer.ts#L9)

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

Defined in: [renderer.ts:2](https://github.com/framv/framv/blob/e5a5ad0d58b85c953696f919e1f6065282ef301d/packages/core/src/renderer.ts#L2)

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

#### Returns

`Promise`\<`HTMLImageElement`\>
