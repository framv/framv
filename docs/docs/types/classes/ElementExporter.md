# Class: ElementExporter

Defined in: [exporter.ts:15](https://github.com/framv/framv/blob/5a544e3620d70bf8994669b74e6b4115d7f842d0/packages/core/src/exporter.ts#L15)

## Constructors

### Constructor

> **new ElementExporter**(): `ElementExporter`

#### Returns

`ElementExporter`

## Methods

### export()

> **export**(`element`, `settings`, `onProgress?`): `Promise`\<`Blob`\>

Defined in: [exporter.ts:19](https://github.com/framv/framv/blob/5a544e3620d70bf8994669b74e6b4115d7f842d0/packages/core/src/exporter.ts#L19)

#### Parameters

##### element

`HTMLElement` | `SVGSVGElement`

##### settings

[`ExportSettings`](../interfaces/ExportSettings.md)

##### onProgress?

(`progress`) => `boolean` \| `Promise`\<`boolean`\>

#### Returns

`Promise`\<`Blob`\>
