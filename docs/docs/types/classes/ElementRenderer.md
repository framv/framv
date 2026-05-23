# Class: ElementRenderer

Defined in: [renderer.ts:1](https://github.com/framv/framv/blob/c1fa494ee9517873d6863661aaa24b53c80c5f62/packages/core/src/renderer.ts#L1)

## Constructors

### Constructor

> **new ElementRenderer**(): `ElementRenderer`

#### Returns

`ElementRenderer`

## Methods

### renderToCanvas()

> **renderToCanvas**(`element`, `width?`, `height?`): `Promise`\<`OffscreenCanvas`\>

Defined in: [renderer.ts:9](https://github.com/framv/framv/blob/c1fa494ee9517873d6863661aaa24b53c80c5f62/packages/core/src/renderer.ts#L9)

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

Defined in: [renderer.ts:2](https://github.com/framv/framv/blob/c1fa494ee9517873d6863661aaa24b53c80c5f62/packages/core/src/renderer.ts#L2)

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

#### Returns

`Promise`\<`HTMLImageElement`\>
