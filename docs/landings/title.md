---
sidebar_label: Title
sidebar_position: 4
---

import { TitleDemo } from '@site/src/components/HomepageFeatures/DS/LandingsComponents';

# Title

<TitleDemo />

<div style={{marginBottom: "40px"}} />

The Title component provides a set of named typographic styles for section headings. It is not a layout component — it defines the text style only, and can be applied to any section header in the page.

:::info Shared component
Title is used in both **Landings** and **Dashboard**. The variants and tokens are the same across both products.
:::

---

## Variants

| Variant | Size | Weight | Line height |
|:---|:---|:---|:---|
| 24px regular | `24px` | Regular (400) | `1.2` |
| 20px regular | `20px` | Regular (400) | `1.5` |
| 16px regular | `16px` | Regular (400) | `1.5` |
| 24px bold | `24px` | Bold (700) | `1.2` |
| 20px bold | `20px` | Bold (700) | `1.5` |
| 16px bold | `16px` | Bold (700) | `1.5` |

All variants use `#000000` as text colour and `Busup Sans` as font family.

---

## Tokens

| Property | Value |
|:---|:---|
| Font family | `"Busup Sans", sans-serif` |
| Color | `#000000` |
| 24px line-height | `1.2` |
| 20px line-height | `1.5` |
| 16px line-height | `1.5` |

---

## When to use

Use the Title component to label sections of content on Landings pages — e.g. "Popular routes", "How it works", "Our partners". Choose the variant based on the visual hierarchy of the section:

- **24px** — primary section heading
- **20px** — sub-section heading
- **16px** — tertiary label or card title

Bold variants create stronger visual weight; Regular variants feel lighter and editorial. Use Bold for key sections, Regular for supporting content.
