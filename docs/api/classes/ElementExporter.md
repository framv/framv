# Class: ElementExporter

Defined in: [exporter.ts:19](https://github.com/framv/framv/blob/bea1632d1408d636ef514ead2104dd275fad506a/packages/core/src/exporter.ts#L19)

## Constructors

### Constructor

> **new ElementExporter**(): `ElementExporter`

#### Returns

`ElementExporter`

## Methods

### export()

> **export**(`element`, `settings`, `onProgress?`): `Promise`\<`Blob`\>

Defined in: [exporter.ts:23](https://github.com/framv/framv/blob/bea1632d1408d636ef514ead2104dd275fad506a/packages/core/src/exporter.ts#L23)

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

##### settings

[`ExportSettings`](../interfaces/ExportSettings.md)

##### onProgress?

(`progress`) => `boolean` \| `Promise`\<`boolean`\>

#### Returns

`Promise`\<`Blob`\>
