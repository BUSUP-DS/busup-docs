---
sidebar_label: Form Controls
sidebar_position: 5
---

# Form Controls

Selection controls let users make choices — single or multiple — within a form or settings panel. The BUSUP Design System provides three controls: **Checkbox**, **Radiobutton**, and **Toggle**.

<div style={{background: 'var(--ifm-color-success-contrast-background)', borderLeft: '4px solid var(--ifm-color-success)', borderRadius: '4px', padding: '12px 16px', marginBottom: '24px', fontSize: '14px'}}>
  <strong>💡 Real Components:</strong> The demos below are rendered with the actual CSS tokens from <code>custom.css</code>. No images — all live HTML.
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
The checked color was updated from **Secondary 300** (`#ea6753`, coral) to **Primary 300** (`#00bf6f`, green) to unify all three selection controls under the same affirmative-state color. Secondary 300 is reserved for secondary actions only.
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

Use toggles for **binary on/off settings** that take effect immediately — no submit needed.

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

## Compositions

These are the established patterns used across BUSUP products.

### Checkbox group with category heading

Used in dense configuration panels (e.g. Site settings, Route configuration). Related checkboxes are grouped under a bold heading, with consistent column spacing.

<div style={{background: 'var(--ifm-background-surface-color)', borderRadius: '8px', padding: '24px', marginBottom: '24px'}}>
  <p style={{fontSize: '12px', fontWeight: 700, color: '#414141', marginBottom: '16px', marginTop: 0}}>App User Configuration</p>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px'}}>
    <label className="busup-control"><input type="checkbox" className="busup-checkbox" /><span className="busup-control__label">Renewal option</span></label>
    <label className="busup-control"><input type="checkbox" className="busup-checkbox" /><span className="busup-control__label">Route change</span></label>
    <label className="busup-control"><input type="checkbox" className="busup-checkbox" defaultChecked /><span className="busup-control__label">Show in Landing</span></label>
    <label className="busup-control"><input type="checkbox" className="busup-checkbox" defaultChecked /><span className="busup-control__label">Published</span></label>
    <label className="busup-control"><input type="checkbox" className="busup-checkbox" /><span className="busup-control__label">Published dash only</span></label>
  </div>
</div>

### Radio group — horizontal

Used when the options are short labels and the number of choices is small (2–4). Typically placed at the top of a configuration form to determine the mode of the fields below.

<div style={{background: 'var(--ifm-background-surface-color)', borderRadius: '8px', padding: '24px', marginBottom: '24px'}}>
  <p style={{fontSize: '12px', color: '#989898', marginBottom: '16px', marginTop: 0}}>Select an option to start configuration</p>
  <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap'}}>
    <label className="busup-control"><input type="radio" className="busup-radio" name="rate-type" /><span className="busup-control__label">Create new flexible rate</span></label>
    <label className="busup-control"><input type="radio" className="busup-radio" name="rate-type" /><span className="busup-control__label">Select existing flex rate</span></label>
    <label className="busup-control"><input type="radio" className="busup-radio" name="rate-type" defaultChecked /><span className="busup-control__label">Create standard rate</span></label>
  </div>
</div>

### Toggle with descriptive subtitle

Used in mobile contexts (App Driver, App User) when the toggle controls a significant operational state. The subtitle describes the **current active state** so the user always knows what "On" means in context.

<div style={{background: 'var(--ifm-background-surface-color)', borderRadius: '8px', padding: '24px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
  <div>
    <p style={{fontSize: '14px', fontWeight: 700, color: '#414141', margin: 0}}>On-Demand Rides</p>
    <p style={{fontSize: '12px', color: '#989898', margin: '4px 0 0 0'}}>You are accepting ride requests</p>
  </div>
  <label className="busup-control" style={{margin: 0}}>
    <input type="checkbox" role="switch" className="busup-toggle" defaultChecked />
  </label>
</div>

### Toggle in table row

Used in data tables to control per-row visibility or status (e.g. Show in App). The Yes/No label updates alongside the toggle state.

<div style={{background: 'var(--ifm-background-surface-color)', borderRadius: '8px', overflow: 'hidden', marginBottom: '24px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '8px 16px', borderBottom: '1px solid #dbdbdb'}}>
    <span style={{fontSize: '12px', fontWeight: 700, color: '#414141'}}>Channel</span>
    <span style={{fontSize: '12px', fontWeight: 700, color: '#414141'}}>Main channel</span>
    <span style={{fontSize: '12px', fontWeight: 700, color: '#414141'}}>Show in App</span>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '10px 16px', borderBottom: '1px solid #dbdbdb', alignItems: 'center'}}>
    <span style={{fontSize: '12px', color: '#414141'}}>Email</span>
    <label className="busup-control" style={{margin: 0}}><input type="radio" className="busup-radio" name="main-channel" defaultChecked /></label>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
      <label className="busup-control" style={{margin: 0}}><input type="checkbox" role="switch" className="busup-toggle" defaultChecked /></label>
      <span style={{fontSize: '12px', color: '#414141'}}>Yes</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '10px 16px', borderBottom: '1px solid #dbdbdb', alignItems: 'center'}}>
    <span style={{fontSize: '12px', color: '#414141'}}>Phone call</span>
    <label className="busup-control" style={{margin: 0}}><input type="radio" className="busup-radio" name="main-channel" /></label>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
      <label className="busup-control" style={{margin: 0}}><input type="checkbox" role="switch" className="busup-toggle" defaultChecked /></label>
      <span style={{fontSize: '12px', color: '#414141'}}>Yes</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '10px 16px', alignItems: 'center'}}>
    <span style={{fontSize: '12px', color: '#414141'}}>WhatsApp</span>
    <label className="busup-control" style={{margin: 0}}><input type="radio" className="busup-radio" name="main-channel" /></label>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
      <label className="busup-control" style={{margin: 0}}><input type="checkbox" role="switch" className="busup-toggle" /></label>
      <span style={{fontSize: '12px', color: '#414141'}}>No</span>
    </div>
  </div>
</div>

---

## When to Use

| Control | Use when… | Avoid when… |
|:---|:---|:---|
| **Checkbox** | The user can select zero or more independent options | Only one option should be active at a time — use Radio instead |
| **Checkbox (Select all)** | A table or list allows bulk selection with individual override | The items aren't selectable in bulk — it adds unnecessary complexity |
| **Radiobutton** | Exactly one option must be selected from a group (2–6 options) | Options are not mutually exclusive — use Checkboxes instead |
| **Radiobutton (horizontal)** | Labels are short and options are 2–4 — horizontal layout saves vertical space | Labels are long or options exceed 4 — switch to vertical layout |
| **Toggle** | A binary setting takes effect immediately without a submit action | The setting requires a save/confirm step — use a Checkbox in a form instead |
| **Toggle with subtitle** | The active state has operational impact and needs extra context | The state is self-evident from the label alone |
| **Toggle in table** | Per-row on/off control is needed alongside other data columns | The toggle controls a global state — move it outside the table |

---

## Dos & Don'ts

### Choosing the right control

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <div style={{marginBottom: '16px'}}>
      <p style={{fontSize: '11px', color: '#989898', marginBottom: '8px', marginTop: 0}}>Mutually exclusive → Radio</p>
      <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
        <label className="busup-control"><input type="radio" className="busup-radio" name="do-rate" /><span className="busup-control__label">Standard</span></label>
        <label className="busup-control"><input type="radio" className="busup-radio" name="do-rate" defaultChecked /><span className="busup-control__label">Flexible</span></label>
      </div>
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use Radio when only one option can be true at a time. The group name enforces mutual exclusivity.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <div style={{marginBottom: '16px'}}>
      <p style={{fontSize: '11px', color: '#989898', marginBottom: '8px', marginTop: 0}}>Mutually exclusive → Checkbox</p>
      <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
        <label className="busup-control"><input type="checkbox" className="busup-checkbox" /><span className="busup-control__label">Standard</span></label>
        <label className="busup-control"><input type="checkbox" className="busup-checkbox" defaultChecked /><span className="busup-control__label">Flexible</span></label>
      </div>
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use Checkboxes for mutually exclusive choices. Nothing prevents the user from selecting both — creating an invalid state.</p>
  </div>
</div>

### Toggle label

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <div style={{marginBottom: '16px'}}>
      <label className="busup-control"><input type="checkbox" role="switch" className="busup-toggle" defaultChecked /><span className="busup-control__label">Show booking section</span></label>
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Label describes what is enabled when the toggle is <strong>on</strong>. The user always knows what turning it on will do.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <div style={{marginBottom: '16px'}}>
      <label className="busup-control"><input type="checkbox" role="switch" className="busup-toggle" defaultChecked /><span className="busup-control__label">Booking section</span></label>
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use a noun alone as the label. "Booking section" doesn't communicate whether the toggle enables or disables it.</p>
  </div>
</div>

### Toggle vs Checkbox in forms

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', marginBottom: '12px'}}>Use <strong>Checkbox</strong> inside a form that has a Save/Confirm button. The change is only applied on submit.</p>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px'}}>
      <label className="busup-control"><input type="checkbox" className="busup-checkbox" defaultChecked /><span className="busup-control__label">Published</span></label>
      <label className="busup-control"><input type="checkbox" className="busup-checkbox" /><span className="busup-control__label">Show in Landing</span></label>
    </div>
    <button className="busup-btn busup-btn--primary">Save</button>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', marginBottom: '12px'}}>Don't use a <strong>Toggle</strong> inside a form that requires a submit action. The user expects the change to be immediate — the Save button creates a false expectation.</p>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px'}}>
      <label className="busup-control"><input type="checkbox" role="switch" className="busup-toggle" defaultChecked /><span className="busup-control__label">Published</span></label>
      <label className="busup-control"><input type="checkbox" role="switch" className="busup-toggle" /><span className="busup-control__label">Show in Landing</span></label>
    </div>
    <button className="busup-btn busup-btn--primary">Save</button>
  </div>
</div>

---

## Best Practices

**Checkbox**
- Use for independent multi-select options (e.g. filters, permissions, configuration flags).
- Always include a visible label — never a standalone checkbox.
- Group related checkboxes under a shared category heading.
- In tables, provide a "Select all" checkbox in the header when bulk actions are available.

**Radiobutton**
- Always group by `name` attribute so only one can be selected at a time.
- Provide a sensible default selection when one option is required.
- Use 2–6 options max — beyond that, consider a Dropdown.
- Prefer horizontal layout for short labels (2–4 options); switch to vertical for longer labels or more options.

<div style={{background: 'var(--ifm-color-success-contrast-background)', borderLeft: '4px solid var(--ifm-color-success)', borderRadius: '4px', padding: '12px 16px', marginBottom: '24px', fontSize: '14px'}}>
  <strong>💡 Radio buttons vs. dropdowns:</strong> Research from Nielsen Norman Group found that dropdowns have higher cognitive load because users can't see all options at once. Prefer radio buttons when you have 6 or fewer options.
</div>

**Toggle**
- Reserve for settings that take effect immediately — not for form fields that need confirmation.
- Label should describe the **active (on) state**: "Show booking section", not "Booking section".
- Add a descriptive subtitle when the toggle controls a significant operational state (e.g. accepting ride requests).
- Do not use inside a form that requires a submit button to apply changes — use Checkbox instead.
- In tables, pair the toggle with a Yes/No text label so the state is readable at a glance.