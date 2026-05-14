---
sidebar_label: Buttons
sidebar_position: 3
---

# Buttons

Buttons allow users to take actions and make choices. In the BUSUP ecosystem, we follow a strict hierarchy to ensure clarity.

<div style={{background: 'var(--ifm-color-success-contrast-background)', borderLeft: '4px solid var(--ifm-color-success)', borderRadius: '4px', padding: '12px 16px', marginBottom: '24px', fontSize: '14px'}}>
  <strong>💡 Real Components:</strong> These are not screenshots! The buttons below are rendered using the actual CSS variables defined in our Design System.
</div>

---

## Button Variants

Our three main types of action.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '32px'}}>
  <button className="busup-btn busup-btn--primary">Primary Button</button>
  <button className="busup-btn busup-btn--secondary">Secondary Button</button>
  <button className="busup-btn busup-btn--tertiary">Tertiary Button</button>
</div>

| Variant | CSS Class | Usage |
|:---|:---|:---|
| **Primary** | `.busup-btn--primary` | Main action on the page. Only **one** per context. |
| **Secondary** | `.busup-btn--secondary` | Complements the primary action or stands alone. |
| **Tertiary** | `.busup-btn--tertiary` | Used for less important actions. |

---

## Button States

<div style={{display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px'}}>

  <div>
    <p style={{fontSize: '12px', color: '#989898', marginBottom: '8px', fontWeight: 700,}}>Primary </p>
    <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center'}}>
      <button className="busup-btn busup-btn--primary">Default</button>
      <button className="busup-btn busup-btn--primary" style={{borderColor: '#b2ffdd', borderWidth: '1.5px', borderStyle: 'solid'}}>Hovered</button>
      <button className="busup-btn busup-btn--primary" style={{background: '#049157'}}>Focused</button>
      <button className="busup-btn busup-btn--primary" style={{background: '#0a5d3d'}}>Pressed</button>
      <button className="busup-btn busup-btn--primary" disabled>Disabled</button>
    </div>
  </div>

  <div>
    <p style={{fontSize: '12px', color: '#989898', marginBottom: '8px', fontWeight: 700,}}>Secondary </p>
    <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center'}}>
      <button className="busup-btn busup-btn--secondary">Default</button>
      <button className="busup-btn busup-btn--secondary" style={{background: '#d7ffed'}}>Hovered</button>
      <button className="busup-btn busup-btn--secondary" style={{borderColor: '#049157', color: '#049157'}}>Focused</button>
      <button className="busup-btn busup-btn--secondary" style={{background: '#b2ffdd', borderColor: '#00bf6f'}}>Pressed</button>
      <button className="busup-btn busup-btn--secondary" disabled>Disabled</button>
    </div>
  </div>

  <div>
    <p style={{fontSize: '12px', color: '#989898', marginBottom: '8px', fontWeight: 700,}}>Tertiary </p>
    <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center'}}>
      <button className="busup-btn busup-btn--tertiary">Default</button>
      <button className="busup-btn busup-btn--tertiary" style={{background: '#dbdbdb'}}>Hovered</button>
      <button className="busup-btn busup-btn--tertiary" style={{borderColor: '#dbdbdb', borderWidth: '1px', borderStyle: 'solid'}}>Focused</button>
      <button className="busup-btn busup-btn--tertiary" style={{background: '#c4c4c4'}}>Pressed</button>
      <button className="busup-btn busup-btn--tertiary" disabled>Disabled</button>
    </div>
  </div>

</div>

---

## Technical Specifications

| Property | Value | Token |
|:---|:---|:---|
| Height | 31px | `--btn-height` |
| Padding | 8px 24px | `--btn-padding-v` / `--btn-padding-h` |
| Border radius | 20px | `--btn-border-radius` |
| Font size | 10px | `--btn-font-size` |
| Font weight | 700 | `--btn-font-weight` |
| Font family | Busup Sans | `--btn-font-family` |
| Shadow (Primary + Tertiary) | `0 4px 12px 0 rgba(0,0,0,0.16)` | `--btn-shadow` |
| Shadow (Secondary / Disabled) | none | `--btn-shadow-none` |

<div style={{background: 'var(--ifm-color-info-contrast-background)', borderLeft: '4px solid var(--ifm-color-info)', borderRadius: '4px', padding: '12px 16px', marginBottom: '24px', fontSize: '14px'}}>
  <strong>Shadow behaviour:</strong> <strong>Primary</strong> and <strong>Tertiary</strong> always carry the <code>shadow-deep</code> drop shadow — including their Default state. <strong>Secondary</strong> never has a shadow. All disabled states have no shadow and render at 30% opacity.
</div>
---

## Component API

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| `label` | `string` | — | Required. Text displayed inside the button. |
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Visual style and hierarchy. |
| `disabled` | `boolean` | `false` | Prevents interaction, removes shadow, applies 30% opacity. |
| `onClick` | `function` | — | Called when the user clicks the button. |
| `type` | `'button' \| 'submit'` | `'button'` | HTML button type. |

---

## Best Practices

**Hierarchy & Placement**
- Use only **one** Primary button per screen to avoid competing priorities.
- Place the main action on the **right**, with secondary/tertiary actions to its left.
- Avoid cluttering a screen with too many buttons.

**Writing Labels**
- Use action verbs that describe the outcome: "Save", "Submit", "Delete" — not "OK".
- Use sentence case: "Save changes" not "SAVE CHANGES".

**Usage Summary**
- **Primary:** Main goal of the page (Confirm, Buy, Forward).
- **Secondary:** Direct alternative to primary (Edit, Clear, Next).
- **Tertiary:** Neutral or escape actions (Cancel, Back, See more).