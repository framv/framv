# Class: ElementStreamer

Defined in: [streamer.ts:9](https://github.com/framv/framv/blob/b94c28336cef2b7fab4486f3b655aca161751648/packages/core/src/streamer.ts#L9)

Renders an SVG/HTML element at a specific point in time to an OffscreenCanvas.
Used as the inner streaming primitive by the exporter and the player.

## Constructors

### Constructor

> **new ElementStreamer**(): `ElementStreamer`

#### Returns

`ElementStreamer`

## Methods

### renderFrame()

> **renderFrame**(`element`, `time`, `width?`, `height?`): `Promise`\<`OffscreenCanvas`\>

Defined in: [streamer.ts:14](https://github.com/framv/framv/blob/b94c28336cef2b7fab4486f3b655aca161751648/packages/core/src/streamer.ts#L14)

Seek to `time` seconds, freeze, and render to an OffscreenCanvas.

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

##### time

`number`

##### width?

`number`

##### height?

`number`

#### Returns

`Promise`\<`OffscreenCanvas`\>
