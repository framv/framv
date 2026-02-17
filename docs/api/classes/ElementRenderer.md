# Class: ElementRenderer

Defined in: [renderer.ts:1](https://github.com/framv/framv/blob/9ad9889d9d8bf0eefff30e165838d27c6a4fae59/packages/core/src/renderer.ts#L1)

## Constructors

### Constructor

> **new ElementRenderer**(): `ElementRenderer`

#### Returns

`ElementRenderer`

## Methods

### renderToCanvas()

> **renderToCanvas**(`element`, `width?`, `height?`): `Promise`\<`OffscreenCanvas`\>

Defined in: [renderer.ts:9](https://github.com/framv/framv/blob/9ad9889d9d8bf0eefff30e165838d27c6a4fae59/packages/core/src/renderer.ts#L9)

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

Defined in: [renderer.ts:2](https://github.com/framv/framv/blob/9ad9889d9d8bf0eefff30e165838d27c6a4fae59/packages/core/src/renderer.ts#L2)

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

#### Returns

`Promise`\<`HTMLImageElement`\>
