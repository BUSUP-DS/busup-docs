---
sidebar_label: Avatar
sidebar_position: 10
---

import { AvatarDemo } from '@site/src/components/HomepageFeatures/DS/Avatar';

# Avatar

<AvatarDemo />

<div style={{marginBottom: "40px"}} />

Avatar is the visual representation of a user or entity in the interface. In BUSUP it has two variants:

- **Default** — compact avatar, used inline in the UI (lists, headers, profile)
- **Hero** — larger, prominent avatar. Used on profile or welcome screens

---

## When to Use

| Variant | Use when… | Avoid when… |
|:---|:---|:---|
| **Default** | Identifying the user in navigation contexts, lists, or headers | The space is too small — below 32px the avatar loses legibility |
| **Hero** | Profile screen, welcome screen, contexts where the user's identity is the focus | Dense contexts with a lot of information — the large size competes with the content |

---

## Dos & Don'ts

### Image
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Display the user's photo when available. Use a consistent visual placeholder when there's no photo (initials or generic person icon). Always use centred crop with a 1:1 ratio.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't leave the avatar empty or broken — a fallback must always be defined. Don't distort the image.</p>
  </div>
</div>

### Usage
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use the Default Avatar for contextual identification (who is logged in, who the driver is). Use the Hero Avatar on screens where the user views and edits their own profile.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use avatars to represent non-human entities (routes, companies, vehicles) — use specific icons instead.</p>
  </div>
</div>

### Accessibility
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Always provide a descriptive <code>alt</code> when the avatar loads a real image. Ensure the initials fallback has sufficient contrast between text and background.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use a decorative <code>alt=""</code> for a meaningful avatar — screen readers need to communicate whose avatar it is.</p>
  </div>
</div>

---

## Best Practices

- **Fallback always defined.** The user's photo may not exist or may fail to load — the no-photo state must be as polished as the photo state.
- **Don't repeat the name next to the Hero Avatar.** On profile screens, the name displayed below the avatar already does the job — the avatar doesn't need a redundant label.
- **Badge + Avatar.** A Badge can be applied over the Default Avatar to signal pending notifications — use the top-right corner, following the same pattern as navigation icons.
