---
sidebar_label: Data Table
sidebar_position: 2
---

import { DataTableDemo } from '@site/src/components/HomepageFeatures/DS/DataTable';

# Data Table

<DataTableDemo />

<div style={{marginBottom: "40px"}} />

Data Table is the primary data display component of the Dashboard. It presents structured information in rows and columns, supporting selection, filtering, sorting, and inline actions. It is the backbone of every management screen — Companies, Passengers, Routes, Sites, and more.

---

## Anatomy

A Data Table is composed of modular cells assembled into rows:

| Element | Description |
|:---|:---|
| **Search bar** | Free-text input positioned above the table on the right, for narrowing rows by name or keyword |
| **Header cell** | Column title in 12px Bold, with optional sort icon |
| **Table cell** | Content cell in 12px Light — plain text |
| **Field tag** | Editable-looking chip inside a cell — dropdown trigger |
| **Status tag** | Colour-coded badge for semantic states (Active, Inactive, Pending) |
| **Toggle cell** | On/Off toggle with label, for boolean values |
| **Checkbox cell** | Row selection — individual or select-all in header |
| **Actions cell** | 2–4 icon buttons for row-level actions (edit, delete, more) |
| **Scroll bar** | Horizontal scroll indicator |
| **Pagination** | Rows-per-page control + page navigation |

---

## Row alternation

Rows alternate between **white** (`#ffffff`) and **grey** (`#f4f4f4`). This is a fixed pattern — do not apply it selectively or invert the order.

---

## When to Use

| Use when… | Avoid when… |
|:---|:---|
| Displaying a list of entities that need to be managed (viewed, edited, deleted) | Displaying read-only summary data — use cards or metrics instead |
| Users need to compare values across multiple entities | The list has fewer than 3 rows — a simple list is clearer |
| Bulk selection and action is needed | The data is hierarchical — consider a tree or accordion instead |

---

## Dos & Don'ts

### Column headers
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use short, descriptive labels. Add a sort icon only when the column is sortable. Align header labels consistently with cell content (left-aligned for text, centred for status/actions).</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use all-caps or truncated abbreviations that require a tooltip to understand. Don't add sort icons to columns that aren't actually sortable.</p>
  </div>
</div>

### Actions column
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Always place the Actions column as the last column. Use descriptive icons that clearly communicate the action — a pencil for edit, a bin for delete, an eye for view. The icon alone should be enough to understand the action without needing a label or tooltip.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't scatter action buttons across multiple columns. Don't use generic or ambiguous icons — if the user has to guess what a button does, the icon is wrong.</p>
  </div>
</div>

### Status tags
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use semantic colours consistently: green for active/success, grey for inactive, amber for pending/warning. Keep labels to a single word.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't invent new status colours outside the system tokens. Don't use status tags for non-semantic information (e.g. a category name doesn't need a coloured badge).</p>
  </div>
</div>

---

## Best Practices

- **Pagination is mandatory.** Never display an unbounded list — always define a default rows-per-page (10 or 15) and show the total count.
- **Empty state.** When a table has no rows, show a meaningful empty state — not a blank table shell with only the header.
- **Checkbox select-all.** The header checkbox should reflect three states: none selected, some selected (indeterminate), all selected.
- **Row alternation is structural.** White/grey alternation is not decoration — it is a readability aid. Apply it consistently starting from the first row as white.
- **Destructive actions need confirmation.** A delete icon button in the Actions cell should always trigger a confirmation modal before executing.
