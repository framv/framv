# @framv/sheet

`<framv-sheet>` — spreadsheet component with sort, filter, formula bar, and CSV/PDF export.

## Install

```bash
npm install @framv/sheet
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@framv/core/dist/bundle.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@framv/sheet/dist/bundle.iife.js"></script>

<framv-sheet sortable filterable>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Widget</td>
        <td>29.99</td>
        <td>150</td>
      </tr>
      <tr>
        <td>Gadget</td>
        <td>49.99</td>
        <td>85</td>
      </tr>
    </tbody>
  </table>
</framv-sheet>
```

## Attributes

| Attribute    | Description           |
| ------------ | --------------------- |
| `sortable`   | Click headers to sort |
| `filterable` | Show filter row       |
| `editable`   | Inline cell editing   |

## Formula bar

Supports `=SUM(A2:A10)`, `=AVG(B:B)`, `=MAX(...)`, `=MIN(...)`, `=COUNT(...)`.

## Export

CSV and PDF export buttons in the toolbar.
