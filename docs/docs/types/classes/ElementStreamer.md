# Class: ElementStreamer

Defined in: [streamer.ts:9](https://github.com/framv/framv/blob/1b8a5bcad55ee17d36c126f0f097fd2df4c297b8/packages/core/src/streamer.ts#L9)

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

Defined in: [streamer.ts:14](https://github.com/framv/framv/blob/1b8a5bcad55ee17d36c126f0f097fd2df4c297b8/packages/core/src/streamer.ts#L14)

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
