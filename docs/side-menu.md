---
sidebar_label: Side Menu
sidebar_position: 6
---

# Side Menu

Side Menu items are used in profile pages, settings panels, and navigation lists. Each item has a left icon, a label, a right icon, and a bottom divider.

<div style={{background: 'var(--ifm-color-success-contrast-background)', borderLeft: '4px solid var(--ifm-color-success)', borderRadius: '4px', padding: '12px 16px', marginBottom: '24px', fontSize: '14px'}}>
  <strong>💡 Real Components:</strong> The demos below are rendered with the actual CSS tokens from <code>custom.css</code>. No images — all live HTML.
</div>

---

## Default

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

---

## Component API

```html
<div class="busup-side-menu-item">
  <span class="busup-side-menu-item__icon"><!-- left icon svg --></span>
  <span class="busup-side-menu-item__label">Label text</span>
  <span class="busup-side-menu-item__icon"><!-- right icon svg --></span>
</div>
```

| Class | Element | Purpose |
|:---|:---|:---|
| `.busup-side-menu-item` | `<div>` | Row wrapper — height, padding, divider |
| `.busup-side-menu-item__icon` | `<span>` | Icon slot — left and right |
| `.busup-side-menu-item__label` | `<span>` | Label text — grows to fill available space |

---

## Best Practices

- Always include both a left icon (representing the section) and a right chevron icon (indicating navigation).
- Keep labels short and action-oriented: "Your information", "Payment methods", "Settings".
- Remove `border-bottom` from the last item in a group to avoid a double border with the container.
- Group related items inside a container with `border-radius: 8px` and `overflow: hidden`.