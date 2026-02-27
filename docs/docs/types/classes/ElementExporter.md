# Class: ElementExporter

Defined in: [exporter.ts:29](https://github.com/framv/framv/blob/b94c28336cef2b7fab4486f3b655aca161751648/packages/core/src/exporter.ts#L29)

## Constructors

### Constructor

> **new ElementExporter**(): `ElementExporter`

#### Returns

`ElementExporter`

## Methods

### export()

> **export**(`element`, `settings`, `onProgress?`): `Promise`\<`Blob`\>

Defined in: [exporter.ts:33](https://github.com/framv/framv/blob/b94c28336cef2b7fab4486f3b655aca161751648/packages/core/src/exporter.ts#L33)

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

##### settings

[`ExportSettings`](../interfaces/ExportSettings.md)

##### onProgress?

(`progress`) => `boolean` \| `Promise`\<`boolean`\>

#### Returns

`Promise`\<`Blob`\>
