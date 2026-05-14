---
sidebar_label: Form Controls
sidebar_position: 5
---

# Form Controls

Selection controls let users make choices — single or multiple — within a form or settings panel. The BUSUP Design System provides three controls: **Checkbox**, **Radiobutton**, and **Toggle**.

<div style={{background: 'var(--ifm-color-success-contrast-background)', borderLeft: '4px solid var(--ifm-color-success)', borderRadius: '4px', padding: '12px 16px', marginBottom: '24px', fontSize: '14px'}}>
  <strong>💡 Real Components:</strong> The demos below are rendered with the actual CSS tokens from <code>custom.css</code>. No images, all live HTML.
</div>

---

## Checkbox

Use checkboxes when the user can select **zero or more** options independently.

### States

<div style={{display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', marginBottom: '24px'}}>

  <label className="busup-control">
    <input type="checkbox" className="busup-checkbox" defaultChecked />
    <span className="busup-control__label">Checked</span>
  </label>

  <label className="busup-control">
    <input type="checkbox" className="busup-checkbox" />
    <span className="busup-control__label">Unchecked</span>
  </label>

  <label className="busup-control">
    <input type="checkbox" className="busup-checkbox" defaultChecked disabled />
    <span className="busup-control__label" style={{color: 'var(--color-neutral-300)'}}>Checked — Disabled</span>
  </label>

  <label className="busup-control">
    <input type="checkbox" className="busup-checkbox" disabled />
    <span className="busup-control__label" style={{color: 'var(--color-neutral-300)'}}>Unchecked — Disabled</span>
  </label>

</div>

### Specs

| Property | Token | Value |
|---|---|---|
| Size | `--checkbox-size` | 24×24 px |
| Border radius | `--checkbox-border-radius` | 4 px |
| Border (unchecked) | `--checkbox-unchecked-border` | `#989898` — Neutral 300 |
| Border width | `--checkbox-unchecked-border-width` | 1.5 px |
| Background (checked) | `--checkbox-checked-bg` | `#00bf6f` — Primary 300 |
| Checkmark color | `--checkbox-checkmark-color` | `#ffffff` |
| Label font size | `--control-label-font-size` | 12 px |
| Label color | `--control-label-color` | `#414141` — Neutral 400 |
| Gap (control → label) | `--control-gap` | 8 px |

:::note Design decision
The checked color was updated from **Secondary 300** (`#ea6753`, coral) to **Primary 300** (`#00bf6f`, green) to unify all three selection controls (Checkbox, Radiobutton, Toggle) under the same affirmative-state color. Secondary 300 is reserved for secondary actions only.
:::

---

## Radiobutton

Use radio buttons when the user must select **exactly one** option from a group.

### States

<div style={{display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', marginBottom: '24px'}}>

  <label className="busup-control">
    <input type="radio" className="busup-radio" name="demo-radio" defaultChecked />
    <span className="busup-control__label">Marked</span>
  </label>

  <label className="busup-control">
    <input type="radio" className="busup-radio" name="demo-radio" />
    <span className="busup-control__label">Unmarked</span>
  </label>

  <label className="busup-control">
    <input type="radio" className="busup-radio" disabled defaultChecked />
    <span className="busup-control__label" style={{color: 'var(--color-neutral-300)'}}>Marked — Disabled</span>
  </label>

  <label className="busup-control">
    <input type="radio" className="busup-radio" disabled />
    <span className="busup-control__label" style={{color: 'var(--color-neutral-300)'}}>Unmarked — Disabled</span>
  </label>

</div>

### Specs

| Property | Token | Value |
|---|---|---|
| Size | `--radio-size` | 20×20 px |
| Dot size | `--radio-dot-size` | 8×8 px |
| Border (unmarked) | `--radio-unmarked-border` | `#989898` — Neutral 300 |
| Border width | `--radio-unmarked-border-width` | 1.5 px |
| Background (marked) | `--radio-marked-bg` | `#00bf6f` — Primary 300 |
| Dot color | `--radio-marked-dot-color` | `#ffffff` |
| Label font size | `--control-label-font-size` | 12 px |
| Label color | `--control-label-color` | `#414141` — Neutral 400 |
| Gap (control → label) | `--control-gap` | 8 px |

---

## Toggle

Use toggles for **binary on/off settings** that take effect immediately (no submit needed).

### States

<div style={{display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', marginBottom: '24px'}}>

  <label className="busup-control">
    <input type="checkbox" role="switch" className="busup-toggle" defaultChecked />
    <span className="busup-control__label">On</span>
  </label>

  <label className="busup-control">
    <input type="checkbox" role="switch" className="busup-toggle" />
    <span className="busup-control__label">Off</span>
  </label>

  <label className="busup-control">
    <input type="checkbox" role="switch" className="busup-toggle" defaultChecked disabled />
    <span className="busup-control__label" style={{color: 'var(--color-neutral-300)'}}>On — Disabled</span>
  </label>

  <label className="busup-control">
    <input type="checkbox" role="switch" className="busup-toggle" disabled />
    <span className="busup-control__label" style={{color: 'var(--color-neutral-300)'}}>Off — Disabled</span>
  </label>

</div>

### Specs

| Property | Token | Value |
|---|---|---|
| Track width | `--toggle-track-width` | 40 px |
| Track height | `--toggle-track-height` | 20 px |
| Track radius | `--toggle-track-radius` | 10 px |
| Thumb size | `--toggle-thumb-size` | 14×14 px |
| Thumb color | `--toggle-thumb-color` | `#ffffff` |
| Thumb offset | `--toggle-thumb-offset` | 3 px |
| Off background | `--toggle-off-bg` | `#dbdbdb` — Neutral 100 |
| On background | `--toggle-on-bg` | `#00bf6f` — Primary 300 |
| Thumb shadow | — | `0 2px 8px 0 rgba(0,0,0,0.08)` |

---

## Component API

All three controls follow the same HTML pattern:

```html
<!-- Checkbox -->
<label class="busup-control">
  <input type="checkbox" class="busup-checkbox" />
  <span class="busup-control__label">Label text</span>
</label>

<!-- Radiobutton (group inputs by name) -->
<label class="busup-control">
  <input type="radio" class="busup-radio" name="group" />
  <span class="busup-control__label">Option label</span>
</label>

<!-- Toggle -->
<label class="busup-control">
  <input type="checkbox" role="switch" class="busup-toggle" />
  <span class="busup-control__label">Setting label</span>
</label>
```

| Class | Element | Purpose |
|---|---|---|
| `.busup-control` | `<label>` | Flex row wrapper — gap, alignment |
| `.busup-checkbox` | `<input type="checkbox">` | Styled checkbox |
| `.busup-radio` | `<input type="radio">` | Styled radio button |
| `.busup-toggle` | `<input type="checkbox" role="switch">` | Styled toggle track + thumb |
| `.busup-control__label` | `<span>` | Label text |

---

## Best Practices

**Checkbox**
- Use for independent multi-select options (e.g., filters, permissions).
- Always include a visible label — never a checkbox alone.
- Group related checkboxes under a shared heading.

**Radiobutton**
- Always group by `name` attribute so only one can be selected.
- Provide a sensible default selection when one option is required.
- Use 2–6 options max; beyond that, consider a `<select>` dropdown.

<div style={{background: 'var(--ifm-color-success-contrast-background)', borderLeft: '4px solid var(--ifm-color-success)', borderRadius: '4px', padding: '12px 16px', marginBottom: '24px', fontSize: '14px'}}>
  <strong>💡 Radio buttons vs. single select dropdowns: </strong> Research from Nielsen Norman Group found that dropdowns have a higher cognitive load because users do not have all the options visually available when they are required to select an option. 
</div>

**Toggle**
- Reserve for settings that take effect immediately — not form fields that need confirmation.
- Label should describe the active (on) state: "Notifications enabled", not "Notifications".
- Do not use inside a form that requires a submit button to apply changes.


