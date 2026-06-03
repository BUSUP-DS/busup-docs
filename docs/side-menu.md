---
sidebar_label: Side Menu
sidebar_position: 6
---

# Side Menu

Side Menu items are used in profile pages, settings panels, and navigation lists. Each item has a left icon, a label, a right chevron, and a bottom divider.

<div style={{background: 'var(--ifm-color-success-contrast-background)', borderLeft: '4px solid var(--ifm-color-success)', borderRadius: '4px', padding: '12px 16px', marginBottom: '24px', fontSize: '14px'}}>
  <strong>💡 Real Components:</strong> The demos below are rendered with the actual CSS tokens from <code>custom.css</code>. No images — all live HTML.
</div>

---

## States

### Default

<div style={{width: '358px', marginBottom: '32px', border: '1px solid var(--color-neutral-100)', borderRadius: '8px', overflow: 'hidden'}}>

  <div className="busup-side-menu-item">
    <span className="busup-side-menu-item__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="5" r="3" stroke="#414141" strokeWidth="1.5"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
    <span className="busup-side-menu-item__label">Your information</span>
    <span className="busup-side-menu-item__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  </div>

  <div className="busup-side-menu-item">
    <span className="busup-side-menu-item__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#414141" strokeWidth="1.5"/><path d="M5 8h6M8 5v6" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
    <span className="busup-side-menu-item__label">Payment methods</span>
    <span className="busup-side-menu-item__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  </div>

  <div className="busup-side-menu-item" style={{borderBottom: 'none'}}>
    <span className="busup-side-menu-item__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4M8 10v4M2 8h4M10 8h4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
    <span className="busup-side-menu-item__label">Settings</span>
    <span className="busup-side-menu-item__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  </div>

</div>

### Disabled

A disabled item renders at **30% opacity** and does not respond to interaction. Use when a section exists but is temporarily unavailable.

<div style={{width: '358px', marginBottom: '32px', border: '1px solid var(--color-neutral-100)', borderRadius: '8px', overflow: 'hidden'}}>

  <div className="busup-side-menu-item">
    <span className="busup-side-menu-item__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="5" r="3" stroke="#414141" strokeWidth="1.5"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
    <span className="busup-side-menu-item__label">Your information</span>
    <span className="busup-side-menu-item__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  </div>

  <div className="busup-side-menu-item" style={{opacity: 0.3, borderBottom: 'none'}}>
    <span className="busup-side-menu-item__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#414141" strokeWidth="1.5"/><path d="M5 8h6M8 5v6" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
    <span className="busup-side-menu-item__label">Payment methods</span>
    <span className="busup-side-menu-item__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  </div>

</div>

---

## Technical Specifications

| Property | Token | Value |
|:---|:---|:---|
| Width | `--side-menu-width` | 358px |
| Height | `--side-menu-height` | 65px |
| Padding | `--side-menu-padding-v` / `--side-menu-padding-h` | 20px / 16px |
| Icon size | `--side-menu-icon-size` | 16×16px |
| Gap | `--side-menu-gap` | 12px |
| Label font size | `--side-menu-font-size` | 14px |
| Label font weight | `--side-menu-font-weight` | 400 |
| Label color | `--side-menu-color` | `#414141` — Neutral 400 |
| Divider color | `--side-menu-divider` | `#dbdbdb` — Neutral 100 |
| Divider height | `--side-menu-divider-height` | 1px |
| Disabled opacity | — | 30% |

---

## Component API

```html
<div class="busup-side-menu-item">
  <span class="busup-side-menu-item__icon"><!-- left icon svg --></span>
  <span class="busup-side-menu-item__label">Label text</span>
  <span class="busup-side-menu-item__icon"><!-- right chevron svg --></span>
</div>
```

| Class | Element | Purpose |
|:---|:---|:---|
| `.busup-side-menu-item` | `<div>` | Row wrapper — height, padding, divider |
| `.busup-side-menu-item__icon` | `<span>` | Icon slot — left and right |
| `.busup-side-menu-item__label` | `<span>` | Label text — grows to fill available space |

---

## When to Use

| | Use when… | Avoid when… |
|:---|:---|:---|
| **Side Menu item** | Navigating to a section within a profile or settings panel | The action triggers an immediate change — use a Toggle or Button instead |
| **Disabled item** | A section exists but isn't available in the current context (e.g. locked feature) | The section is permanently irrelevant — remove it from the list entirely |
| **Grouped items** | Related settings belong together under the same container | Items lead to completely unrelated sections — consider separate groups |

---

## Dos & Don'ts

### Icon usage

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>

  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <div style={{width: '100%', border: '1px solid var(--color-neutral-100)', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px'}}>
      <div className="busup-side-menu-item" style={{borderBottom: 'none'}}>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="#414141" strokeWidth="1.5"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg></span>
        <span className="busup-side-menu-item__label">Your information</span>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
      </div>
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Always include both a left icon (representing the section) and a right chevron (indicating navigation). Both slots are expected by the user.</p>
  </div>

  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <div style={{width: '100%', border: '1px solid var(--color-neutral-100)', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px'}}>
      <div className="busup-side-menu-item" style={{borderBottom: 'none'}}>
        <span className="busup-side-menu-item__label">Your information</span>
      </div>
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't omit icons. Without the left icon, items lose visual identity. Without the chevron, the user doesn't know the item is navigable.</p>
  </div>

</div>

### Labels

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>

  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <div style={{width: '100%', border: '1px solid var(--color-neutral-100)', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px'}}>
      <div className="busup-side-menu-item">
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="#414141" strokeWidth="1.5"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg></span>
        <span className="busup-side-menu-item__label">Your information</span>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
      </div>
      <div className="busup-side-menu-item" style={{borderBottom: 'none'}}>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#414141" strokeWidth="1.5"/><path d="M5 8h6M8 5v6" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg></span>
        <span className="busup-side-menu-item__label">Payment methods</span>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
      </div>
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Keep labels short and noun-based — they describe a section, not an action. 2–3 words max.</p>
  </div>

  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <div style={{width: '100%', border: '1px solid var(--color-neutral-100)', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px'}}>
      <div className="busup-side-menu-item">
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="#414141" strokeWidth="1.5"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg></span>
        <span className="busup-side-menu-item__label">Go to your personal information</span>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
      </div>
      <div className="busup-side-menu-item" style={{borderBottom: 'none'}}>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#414141" strokeWidth="1.5"/><path d="M5 8h6M8 5v6" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg></span>
        <span className="busup-side-menu-item__label">Manage your payment methods and cards</span>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
      </div>
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use long descriptive sentences. They break the visual rhythm and make the list harder to scan.</p>
  </div>

</div>

### Last item divider

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>

  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <div style={{width: '100%', border: '1px solid var(--color-neutral-100)', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px'}}>
      <div className="busup-side-menu-item">
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="#414141" strokeWidth="1.5"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg></span>
        <span className="busup-side-menu-item__label">Your information</span>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
      </div>
      <div className="busup-side-menu-item" style={{borderBottom: 'none'}}>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#414141" strokeWidth="1.5"/><path d="M5 8h6M8 5v6" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg></span>
        <span className="busup-side-menu-item__label">Payment methods</span>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
      </div>
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Remove <code>border-bottom</code> from the last item to avoid a double border against the container edge.</p>
  </div>

  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <div style={{width: '100%', border: '1px solid var(--color-neutral-100)', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px'}}>
      <div className="busup-side-menu-item">
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="#414141" strokeWidth="1.5"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg></span>
        <span className="busup-side-menu-item__label">Your information</span>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
      </div>
      <div className="busup-side-menu-item">
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#414141" strokeWidth="1.5"/><path d="M5 8h6M8 5v6" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/></svg></span>
        <span className="busup-side-menu-item__label">Payment methods</span>
        <span className="busup-side-menu-item__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
      </div>
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't keep the divider on the last item — it creates a double border against the container.</p>
  </div>

</div>

---

## Best Practices

- Always include both a left icon (representing the section) and a right chevron (indicating navigation).
- Keep labels short and noun-based: "Your information", "Payment methods", "Settings".
- Remove `border-bottom` from the last item in a group to avoid a double border with the container.
- Group related items inside a container with `border-radius: 8px` and `overflow: hidden`.
- Use the disabled state (30% opacity) when a section is temporarily unavailable — don't hide it entirely.
- Don't use the Side Menu item for actions that take immediate effect — use a Button or Toggle instead.
