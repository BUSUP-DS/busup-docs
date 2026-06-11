---
sidebar_label: 'Typography'
sidebar_position: 2
---

export const Specimen = ({ label, size, weight, lineHeight, meta }) => (
  <div style={{
    display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
    gap: '24px', padding: '16px 0',
    borderBottom: '1px solid #f4f4f4',
    flexWrap: 'wrap',
  }}>
    <span style={{
      fontSize: size, fontWeight: weight, lineHeight,
      fontFamily: '"Busup Sans", sans-serif',
      color: '#212121', flexShrink: 0,
    }}>
      {label}
    </span>
    <span style={{
      fontSize: '11px', color: '#989898', fontFamily: 'monospace',
      whiteSpace: 'nowrap', flexShrink: 0,
    }}>
      {meta}
    </span>
  </div>
);

export const GroupTitle = ({ children }) => (
  <p style={{
    fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em',
    textTransform: 'uppercase', color: '#989898',
    marginTop: '32px', marginBottom: '4px',
  }}>{children}</p>
);

# Typography

BUSUP's type system is built on **Busup Sans**, a proprietary brand typeface. One unified scale serves all platforms — Dashboard, App User, and App Driver. What varies per platform is *which token* is applied to each UI element, not the scale values themselves.

---

## Type Scale

### Headings — line-height 1.2

<GroupTitle>Regular</GroupTitle>
<Specimen label="Display — The quick brown fox." size="50px" weight="400" lineHeight="1.2" meta="50px · Regular · lh 1.2" />
<Specimen label="Header — The quick brown fox." size="42px" weight="400" lineHeight="1.2" meta="42px · Regular · lh 1.2" />
<Specimen label="Headline — The quick brown fox." size="35px" weight="400" lineHeight="1.2" meta="35px · Regular · lh 1.2" />
<Specimen label="Subheader — The quick brown fox." size="29px" weight="400" lineHeight="1.2" meta="29px · Regular · lh 1.2" />
<Specimen label="Subheadline — The quick brown fox." size="24px" weight="400" lineHeight="1.2" meta="24px · Regular · lh 1.2" />

<GroupTitle>Bold</GroupTitle>
<Specimen label="Display — The quick brown fox." size="50px" weight="700" lineHeight="1.2" meta="50px · Bold · lh 1.2" />
<Specimen label="Header — The quick brown fox." size="42px" weight="700" lineHeight="1.2" meta="42px · Bold · lh 1.2" />
<Specimen label="Headline — The quick brown fox." size="35px" weight="700" lineHeight="1.2" meta="35px · Bold · lh 1.2" />
<Specimen label="Subheader — The quick brown fox." size="29px" weight="700" lineHeight="1.2" meta="29px · Bold · lh 1.2" />
<Specimen label="Subheadline — The quick brown fox." size="24px" weight="700" lineHeight="1.2" meta="24px · Bold · lh 1.2" />

---

### Body — line-height 1.5

<GroupTitle>Regular</GroupTitle>
<Specimen label="The quick brown fox jumps over the lazy dog." size="20px" weight="400" lineHeight="1.5" meta="20px · Regular · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="16px" weight="400" lineHeight="1.5" meta="16px · Regular · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="14px" weight="400" lineHeight="1.5" meta="14px · Regular · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="12px" weight="400" lineHeight="1.5" meta="12px · Regular · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="10px" weight="400" lineHeight="1.5" meta="10px · Regular · lh 1.5" />

<GroupTitle>Bold</GroupTitle>
<Specimen label="The quick brown fox jumps over the lazy dog." size="20px" weight="700" lineHeight="1.5" meta="20px · Bold · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="16px" weight="700" lineHeight="1.5" meta="16px · Bold · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="14px" weight="700" lineHeight="1.5" meta="14px · Bold · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="12px" weight="700" lineHeight="1.5" meta="12px · Bold · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="10px" weight="700" lineHeight="1.5" meta="10px · Bold · lh 1.5" />

<GroupTitle>Light</GroupTitle>
<Specimen label="The quick brown fox jumps over the lazy dog." size="20px" weight="300" lineHeight="1.5" meta="20px · Light · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="16px" weight="300" lineHeight="1.5" meta="16px · Light · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="14px" weight="300" lineHeight="1.5" meta="14px · Light · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="12px" weight="300" lineHeight="1.5" meta="12px · Light · lh 1.5" />
<Specimen label="The quick brown fox jumps over the lazy dog." size="10px" weight="300" lineHeight="1.5" meta="10px · Light · lh 1.5" />

---

## Usage in context

The same scale is used across all platforms. The table below maps each UI element to the correct token.

### Dashboard (Desktop)

| UI element | Size | Weight |
|:---|:---|:---|
| Page title | 24px | Regular |
| Modal title, filter panel title | 20px | Regular |
| Sub-section title | 16px | Regular |
| Button label | 14px | Bold |
| Navigation item, filter label, dropdown value | 14px | Regular |
| Dropdown option | 12px | Light |
| Table header cell | 12px | Bold |
| Table body cell | 12px | Light |
| Status tag, field tag, badge | 12px | Regular / Bold |
| Search bar placeholder | 12px | Regular |
| Icon button label (xsmall) | 10px | Bold |

### App User & App Driver (Mobile)

| UI element | Size | Weight |
|:---|:---|:---|
| Screen title | 24px | Bold |
| Section heading | 20px | Bold |
| Card title | 16px | Bold |
| Body text, description | 14px | Regular |
| Button label | 14px | Bold |
| Caption, helper text, label | 12px | Regular |
| Badge, notification count | 10px | Bold |

---

## Weights

| Weight | Value | When to use |
|:---|:---|:---|
| **Light** | 300 | Secondary data, table cells, dropdown options — creates contrast against bolder elements |
| **Regular** | 400 | Default for body text, nav items, labels, titles |
| **Bold** | 700 | Buttons, emphasis, table headers, tags, screen titles |

---

## Font family

| Token | Value |
|:---|:---|
| `--font-family-brand` | `'Busup Sans', sans-serif` |

Busup Sans is a proprietary typeface. Font files (`.woff2`) must be placed in `static/fonts/` and declared with `@font-face` in `custom.css`.
