# Class: ElementExporter

Defined in: [exporter.ts:29](https://github.com/framv/framv/blob/e5a5ad0d58b85c953696f919e1f6065282ef301d/packages/core/src/exporter.ts#L29)

## Constructors

### Constructor

> **new ElementExporter**(): `ElementExporter`

#### Returns

`ElementExporter`

## Methods

### export()

> **export**(`element`, `settings`, `onProgress?`): `Promise`\<`Blob`\>

Defined in: [exporter.ts:33](https://github.com/framv/framv/blob/e5a5ad0d58b85c953696f919e1f6065282ef301d/packages/core/src/exporter.ts#L33)

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

##### settings

[`ExportSettings`](../interfaces/ExportSettings.md)

##### onProgress?

(`progress`) => `boolean` \| `Promise`\<`boolean`\>

#### Returns

`Promise`\<`Blob`\>
