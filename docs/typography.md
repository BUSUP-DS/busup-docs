---
sidebar_label: 'Typography'
sidebar_position: 2
---

export const TypeSpecimen = ({ size, weight, lineHeight, label, name, token }) => (
  <div style={{
    marginBottom: '32px',
    paddingBottom: '16px',
    borderBottom: '1px solid var(--color-neutral-100, #dbdbdb)',
  }}>
    <div style={{
      fontSize: size,
      fontWeight: weight,
      lineHeight: lineHeight,
      fontFamily: 'var(--font-family-brand, "Busup Sans", sans-serif)',
      marginBottom: '8px',
      color: 'var(--ifm-font-color-base)',
    }}>
      {label}
    </div>
    <div style={{ fontSize: '11px', color: 'var(--color-neutral-300, #989898)', fontFamily: 'monospace', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <span><strong>Token:</strong> {token}</span>
      <span><strong>Size:</strong> {size}</span>
      <span><strong>Weight:</strong> {weight}</span>
      <span><strong>Line-height:</strong> {lineHeight}</span>
    </div>
  </div>
);

# Typography

Our typography system is built on **Busup Sans**, a brand typeface designed to ensure readability and clear hierarchy across all BUSUP touchpoints.

---

## Font Family

| Token | Value | Fallback |
|---|---|---|
| `--font-family-brand` | `'Busup Sans'` | `sans-serif` |

> **Note:** Busup Sans is a proprietary typeface. Font files (`.woff2`) must be placed in `static/fonts/` and declared with `@font-face` at the top of `custom.css`.

---

## Headings

Used for titles and interface highlights. All heading styles use **line-height: 1.2 (120%)**.

<TypeSpecimen
  name="Display"
  token="--font-size-display"
  size="50px"
  weight="700"
  lineHeight="1.2"
  label="Heading Display — The quick brown fox."
/>

<TypeSpecimen
  name="Header"
  token="--font-size-header"
  size="42px"
  weight="700"
  lineHeight="1.2"
  label="Heading Header — The quick brown fox."
/>

<TypeSpecimen
  name="Headline"
  token="--font-size-headline"
  size="35px"
  weight="700"
  lineHeight="1.2"
  label="Heading Headline — The quick brown fox."
/>

<TypeSpecimen
  name="Subheader"
  token="--font-size-subheader"
  size="29px"
  weight="700"
  lineHeight="1.2"
  label="Heading Subheader — The quick brown fox."
/>

<TypeSpecimen
  name="Subheadline"
  token="--font-size-subheadline"
  size="24px"
  weight="700"
  lineHeight="1.2"
  label="Heading Subheadline — The quick brown fox."
/>

### Heading Token Reference

| Token | Value | Usage |
|---|---|---|
| `--font-size-display` | `50px` | Hero titles, splash screens |
| `--font-size-header` | `42px` | Page headers |
| `--font-size-headline` | `35px` | Section titles |
| `--font-size-subheader` | `29px` | Sub-section titles |
| `--font-size-subheadline` | `24px` | Card headings, modal titles |

---

## Body

Used for running text, captions, and descriptions. All body styles use **line-height: 1.5 (150%)**.

<TypeSpecimen
  name="Body Large — Regular"
  token="--font-size-body-lg"
  size="20px"
  weight="400"
  lineHeight="1.5"
  label="The quick brown fox jumps over the lazy dog."
/>

<TypeSpecimen
  name="Body Large — Bold"
  token="--font-size-body-lg"
  size="20px"
  weight="700"
  lineHeight="1.5"
  label="The quick brown fox jumps over the lazy dog."
/>

<TypeSpecimen
  name="Body Medium — Regular"
  token="--font-size-body-md"
  size="16px"
  weight="400"
  lineHeight="1.5"
  label="The quick brown fox jumps over the lazy dog."
/>

<TypeSpecimen
  name="Body Medium — Bold"
  token="--font-size-body-md"
  size="16px"
  weight="700"
  lineHeight="1.5"
  label="The quick brown fox jumps over the lazy dog."
/>

<TypeSpecimen
  name="Body Default — Regular"
  token="--font-size-body-default"
  size="14px"
  weight="400"
  lineHeight="1.5"
  label="The quick brown fox jumps over the lazy dog."
/>

<TypeSpecimen
  name="Body Default — Bold"
  token="--font-size-body-default"
  size="14px"
  weight="700"
  lineHeight="1.5"
  label="The quick brown fox jumps over the lazy dog."
/>

<TypeSpecimen
  name="Body Small — Regular"
  token="--font-size-body-sm"
  size="12px"
  weight="400"
  lineHeight="1.5"
  label="The quick brown fox jumps over the lazy dog."
/>

<TypeSpecimen
  name="Body XSmall — Regular"
  token="--font-size-body-xs"
  size="10px"
  weight="400"
  lineHeight="1.5"
  label="The quick brown fox jumps over the lazy dog."
/>

### Body Token Reference

| Token | Value | Usage |
|---|---|---|
| `--font-size-body-lg` | `20px` | Introductory paragraphs, lead text |
| `--font-size-body-md` | `16px` | Standard UI text |
| `--font-size-body-default` | `14px` | Default paragraph text |
| `--font-size-body-sm` | `12px` | Captions, labels, helper text |
| `--font-size-body-xs` | `10px` | Legal text, timestamps, badges |

---

## Font Weights

| Token | Value | Name | Usage |
|---|---|---|---|
| `--font-weight-light` | `300` | Light | Subtle contrast, secondary labels |
| `--font-weight-regular` | `400` | Regular | Default for body text |
| `--font-weight-bold` | `700` | Bold | Headings, emphasis, buttons |

---

## Line Heights

| Token | Value | Applied to |
|---|---|---|
| `--line-height-heading` | `1.2` | All heading styles |
| `--line-height-body` | `1.5` | All body styles |