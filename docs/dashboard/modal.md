---
sidebar_label: Modal
sidebar_position: 3
---

import { ModalDemo } from '@site/src/components/HomepageFeatures/DS/Modal';

# Modal

<ModalDemo />

<div style={{marginBottom: "40px"}} />

Modal is the Dashboard's overlay container for focused tasks that interrupt the current flow — creating records, confirming destructive actions, importing data, or configuring options. It always requires an explicit user action (Cancel or Confirm) before returning to the page.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Overlay** | Semi-transparent dark backdrop (`rgba(70,70,70,0.5)`) that covers the page and blocks interaction with the content behind |
| **Container** | White panel, `border-radius 8px`, `box-shadow 0px 4px 6px rgba(0,0,0,0.16)`, max width 745px, padding 32px horizontal |
| **Title** | 20px Regular — describes the task being performed (e.g. "Create expedition", "Import routes") |
| **Content slot** | Free area between title and footer — accepts any composition of Dashboard components: form fields, dropdowns, tables, step indicators, messages |
| **Cancel button** | Secondary style — white background, green border. Always dismisses the modal without saving |
| **Confirm button** | Primary style — green background. Executes the action. Can be disabled until required fields are filled |

---

## Content slot

The content slot is intentionally unconstrained. It can contain:

- Form fields (text inputs, dropdowns, date pickers)
- Multi-step wizards with a step indicator
- Confirmation messages with a description of the consequences
- Data previews (tables, lists)
- Any combination of the above

The modal shell — overlay, title, footer buttons — stays fixed. Only the content slot changes per use case.

---

## Behaviour

- The modal **height is variable** — it grows with its content slot. There is no fixed height; the container expands to fit what is placed inside it.
- The modal **blocks interaction** with the page behind it until dismissed.
- Clicking the **overlay** closes the modal (same as Cancel).
- The **Confirm button is disabled** until all required fields in the content slot are filled.
- **Cancel never saves** — always returns the user to the previous state.
- The modal should always have a **clear, action-oriented title** that describes what is being done, not just "Modal" or "Dialog".

---

## When to Use

| Use when… | Avoid when… |
|:---|:---|
| The task requires focused input before the main page can continue | The action can be done inline without leaving the page context |
| A destructive action needs explicit confirmation | The content is read-only and doesn't require user input |
| A multi-step flow needs a contained context (e.g. import wizard) | The form has more than 6–8 fields — consider a full page instead |

---

## Dos & Don'ts

### Title
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use a verb + noun that describes the task: "Create expedition", "Import passengers", "Delete route". The title should make it immediately clear what will happen when Confirm is pressed.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use vague titles like "Settings", "Details", or "Edit". Don't repeat the button label as the title ("Confirm deletion" as both title and button).</p>
  </div>
</div>

### Confirm button state
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Disable Confirm proactively when required fields are empty. This prevents submission errors and communicates clearly what is blocking the user.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't allow Confirm to be clicked when required fields are empty and rely on a validation error to stop the user. Disable the button before they try.</p>
  </div>
</div>

---

## Best Practices

- **One task per modal.** A modal should do one thing. If it needs tabs or a complex navigation structure, consider a full page flow instead.
- **Label Confirm with the action**, not "OK" or "Submit" — "Create", "Import", "Delete", "Save" are clearer.
- **Always include Cancel.** Never show a modal with only one button — the user must always be able to exit without consequences.
- **Keep content focused.** Avoid putting too much inside the slot. If the form grows beyond ~6 fields, consider splitting into a multi-step modal or a dedicated page.
