# PlacementHub website — design system

Static marketing site. Register: **brand**. Quality bar: polished, corporate, low-iteration.

## Tokens (source of truth: `css/site.css` `:root`)

| Token | Role |
|---|---|
| `--primary-600` / `--primary-500` | Brand indigo — primary CTAs, brand badges |
| `--primary-50` / `--primary-200` | Soft brand surfaces, kicker chips |
| `--comp-navy` / slate `#1e293b` | Contrast — secondary badges, strong labels |
| `--content-max` `1200px` | Content column |
| `--content-pad` `1.5rem` | Side inset (nothing touches viewport edges except intentional full-bleed media) |
| `--btn-pad-y` / `--btn-pad-x` | All buttons |
| `--badge-pad-y` / `--badge-pad-x` | Kickers, pills, req badges, hero badges |

## Components

- **Buttons** (`.btn`): solid primary or outlined secondary. No trailing `→` on labels.
- **Badges** (`.comp-badge`, `.kicker`, `.pill`, `.resource-type`, `.comp-req-badge`): pill shape, generous horizontal padding from `--badge-pad-*`. Two fills only: **brand** (indigo) and **contrast** (navy). Soft tint + border for informational chips (kickers).
- **Hero jumps**: one connected badge row, never mixed underlined links + one button.
- **Diagrams / large visuals**: own full-width section after the hero — never a side pane.
- **Section titles**: weight + size hierarchy only. No colored left border stripe.

## Layout rules

1. Content stays inside `--content-max` + `--content-pad`.
2. Tinted bars (invitation strip, etc.) inherit the same inset — not edge-to-edge unless the visual is a dedicated full-bleed media section.
3. One job per section; hero stays brand + headline + lead + CTA group + one visual.

## Polish workflow (fewer iterations)

Before shipping UI changes: load this file + run impeccable `polish` mindset — fix **tokens/components**, not one-off pixel patches. Review in browser at desktop and ~390px.
