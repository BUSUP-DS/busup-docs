---
sidebar_label: Filters
sidebar_position: 3
---

import { FiltersDemo } from '@site/src/components/HomepageFeatures/DS/Filters';

# Filters

<FiltersDemo />

<div style={{marginBottom: "40px"}} />

Filters is the Dashboard's primary mechanism for selecting the context of a page or changing the data shown in it. It always initiates or changes the content of a flow — filters are never decorative or auxiliary.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Header** | Collapsible panel trigger — "Filters" label in Primary_300, green bottom border, chevron icon |
| **Dropdown (single select)** | Selects one value from a list. The option list closes automatically after selection |
| **Dropdown (multi select)** | Selects one or more values. Uses checkboxes. The list stays open until the user closes it |
| **Text input** | Free-text field for name or keyword search. Optional — not all filter panels include it |
| **Mandatory indicator** | Red asterisk `*` next to the label — the Apply button stays disabled until all mandatory fields are filled |
| **Clear all button** | Resets all fields to their default state without applying changes (secondary) |
| **Apply button** | Submits the filter selection and loads the filtered content. Disabled until all mandatory fields are filled (primary) |

---

## Behaviour

- Filters are **never applied immediately**. The user must press **Apply** to trigger the data load.
- The **Apply button is disabled** as long as any mandatory field (`*`) is empty.
- **Clear all** resets all fields to their default state without changing the current view.
- The panel **collapses and expands** via the header. Collapsed state does not imply filters are inactive.
- The grey background on a dropdown option indicates **focus (hover)** only — it does not represent a selected state.

---

## When to Use

The Filters component is used when a page requires context to load or display its content. It is always present at the top of the page flow, before the data is shown.

| Use when… | Avoid when… |
|:---|:---|
| The page requires a context selection to define what data to load | Only a single dimension is being filtered — use a standalone dropdown |
| Multiple dimensions need to be set together before the data can be shown | |

---

## Dos & Don'ts

### Mandatory fields
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Mark every required field with a red asterisk. Keep the Apply button visually disabled (grey) until all mandatory fields are filled. This communicates to the user what is blocking them.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't allow Apply to be clicked when mandatory fields are empty — even if you plan to show a validation error. Disable the button proactively.</p>
  </div>
</div>

### Single vs multi select
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use single select when only one value makes sense in context (e.g. a specific company). Use multi select when the user may legitimately want to compare or combine values (e.g. multiple route types).</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use multi select for fields where multiple values would produce an undefined or contradictory result. Don't use free-text search as a substitute for a structured dropdown when the values are known.</p>
  </div>
</div>

---

## Best Practices

- **Always include Clear all and Apply.** Never submit filter changes automatically — the user must have explicit control over when the data loads.
- **Both buttons are always centred** at the bottom of the panel.
- **Free-text search is optional.** Include a text input only when name or keyword search genuinely adds value. It is the least common filter field in the Dashboard.
- **Panel starts open by default** on pages where a filter selection is required to load content.
