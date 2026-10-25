---
name: "Jade Head Spa & Beauty"
description: "Bojagi & Porcelain Exhibition Sheet visual system for Kissimmee’s Japanese Golden Ring Waterfall & Shiseido Scalp Sanctuary"
colors:
  imperial-jade: "#1D4B3B"
  velvet-jade: "#11241E"
  velvet-jade-elevated: "#18332B"
  gold-24k: "#C59B5F"
  gold-champagne: "#DFC294"
  camellia-rose: "#C97A85"
  celadon-sage: "#7FA693"
  silk-pearl: "#FCF8F5"
  camellia-blush: "#F7ECE8"
  blush-deep: "#EFE0DA"
  celadon-glaze: "#EDF3EF"
  pure-porcelain: "#FFFFFF"
  obsidian-ink: "#161B19"
  charcoal-ink: "#3E4A45"
  muted-plum: "#5A5255"
  warm-ivory: "#FAF6F2"
  soft-ivory: "#E5DCD4"
typography:
  monolith:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "3.4rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  display:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "2.05rem"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "1.65rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Work Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Work Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Work Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.84rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.02em"
  caption:
    fontFamily: "Work Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.02em"
rounded:
  sharp: "0px"
  pedestal: "2px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.imperial-jade}"
    textColor: "{colors.warm-ivory}"
    rounded: "{rounded.sharp}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.velvet-jade}"
    textColor: "{colors.gold-champagne}"
  button-gold:
    backgroundColor: "{colors.gold-24k}"
    textColor: "{colors.obsidian-ink}"
    rounded: "{rounded.sharp}"
    padding: "13px 22px"
  button-gold-hover:
    backgroundColor: "{colors.gold-champagne}"
    textColor: "{colors.obsidian-ink}"
  button-outline:
    backgroundColor: "{colors.pure-porcelain}"
    textColor: "{colors.obsidian-ink}"
    rounded: "{rounded.sharp}"
    padding: "13px 22px"
  card-patch:
    backgroundColor: "{colors.silk-pearl}"
    textColor: "{colors.obsidian-ink}"
    rounded: "{rounded.sharp}"
    padding: "24px 28px"
  input-search:
    backgroundColor: "{colors.pure-porcelain}"
    textColor: "{colors.obsidian-ink}"
    rounded: "{rounded.sharp}"
    padding: "10px 16px 10px 42px"
---

# Design System: Jade Head Spa & Beauty

## Overview

**Creative North Star: "Bojagi & Porcelain Exhibition Sheet"**

Jade Head Spa & Beauty’s digital architecture rejects the rounded, floating-card wellness template in favor of an architectural *bojagi* (traditional Korean pieced silk) and Japanese porcelain catalog sheet. Rather than floating shadowed boxes over an empty canvas, the viewport is constructed as an interlocked patchwork of Silk Pearl, Camellia Blush Rose, Celadon Glaze, and Deep Velvet Jade panels joined by exposed 1px 24K Gold (`1px solid #C59B5F`) seams.

Every treatment is presented simultaneously as tactile sensory atmosphere and transparent tariff record. High-resolution photography from the Kissimmee suites sits edge-to-edge beside custom studio cutout plates and tabular-numeral price columns, allowing a guest to verify the exact duration, protocol, and price ($40–$398) of all 30 official rituals at a glance.

The system forbids pill badges, floating glassmorphic chips, uppercase eyebrow kickers above headings, and soft generic drop-shadow cards. Contrast is achieved through deliberate surface alternation—moving from warm Camellia Blush and Silk Pearl daylight panels into deep Velvet Jade candlelit chambers for the Six-Ritual Tariff Sweep, Couples Suites, and Verified 5.0 Google Reviews.

**Key Characteristics:**
- **Exposed 24K Gold Seam Joinery:** Major layout boundaries are defined by continuous `1px solid #C59B5F` hairlines rather than margin gaps and outer shadows.
- **Tonal Bojagi Patchwork:** Adjacent panels alternate across Silk Pearl, Camellia Blush, Celadon Glaze, and Velvet Jade to separate content without floating card chrome.
- **Architectural Sharpness:** Buttons, plates, tariff rows, and drawers use `0px` (sharp) corners, reserving `2px` micro-chamfers strictly for studio cutout pedestals.
- **Tabular Price Discipline:** All 30 official treatment prices and durations are typeset with `font-variant-numeric: tabular-nums` and paired with `Marcellus` display numerals.
- **Dual-Medium Ritual Presentation:** Signature treatments pair real Kissimmee suite photography with isolated studio cutout illustrations on porcelain wells.

## Colors

The palette balances warm daytime porcelain and camellia silk surfaces against deep nocturnal jade chambers and metallic 24K gold joinery.

### Primary
- **Imperial Jade** (`#1D4B3B`): Primary interactive action surface for booking CTAs, active tariff rows, and selected filter states on light sheets.
- **Deep Velvet Jade** (`#11241E`): Nocturnal sanctuary ground for the masthead brand block, the Six-Ritual Tariff Sweep rail, the Couples Suite spread, the 5.0 Google Review monolith, and the colophon.
- **Elevated Velvet Jade** (`#18332B`): Secondary dark chamber surface used for hover states, recessed review cards, and concierge callouts inside Velvet Jade sections.

### Secondary
- **24K Gold Seam** (`#C59B5F`): Structural hairline border (`1px solid`) joining *bojagi* panels, star rating geometry, and high-visibility booking CTAs on dark Velvet Jade surfaces.
- **Champagne Gold** (`#DFC294`): Luminous metallic highlight used for display numerals on dark jade backgrounds, active tab indicators, and hover states on gold actions.

### Tertiary
- **Camellia Rose Accent** (`#C97A85`): Botanical rose accent echoed from the fresh pink roses in the Kissimmee suites.
- **Celadon Sage** (`#7FA693`): Mineral celadon accent derived from the embroidered sage Jade Spa towels.

### Neutral
- **Silk Pearl** (`#FCF8F5`): Primary daylight exhibition ground for the 30-treatment tariff ledger, signature patchwork, and photographic plate sections.
- **Camellia Blush** (`#F7ECE8`): Warm rose-silk panel surface used for the first-viewport editorial lead, section header bars, and etiquette accordions.
- **Deep Camellia Blush** (`#EFE0DA`): Hover and pressed tonal step for Blush panels and secondary button states.
- **Celadon Glaze** (`#EDF3EF`): Cool mineral green-white panel surface used for the five-stage hydrotherapy progression strip and alternating signature patches.
- **Pure Porcelain** (`#FFFFFF`): Crisp studio well background for transparent ritual cutout illustrations, search inputs, and outlined buttons.
- **Jade Obsidian Ink** (`#161B19`): Primary display and heading ink on light Silk Pearl, Blush, and Celadon surfaces.
- **Deep Charcoal Ink** (`#3E4A45`): Primary body copy and secondary metadata ink on light surfaces (verified ≥7:1 contrast).
- **Muted Plum Ink** (`#5A5255`): Tertiary caption and input placeholder ink on light surfaces.
- **Warm Ivory** (`#FAF6F2`): Primary display and heading ink on Imperial Jade and Velvet Jade surfaces.
- **Soft Ivory** (`#E5DCD4`): Secondary body and metadata ink on dark Velvet Jade surfaces.

### Named Rules
**The Exposed Gold Seam Rule.** Structural panels meet edge-to-edge along a `1px solid #C59B5F` (or `rgba(197, 155, 95, 0.35)` internal) seam; never separate top-level sections with empty whitespace plus floating drop-shadow wrappers.

**The Dark-Ground Gold Contrast Rule.** Whenever `#C59B5F` (24K Gold) is used as a solid button fill (`.action-gold`, `.dock-book-btn`), its label ink must be Jade Obsidian (`#161B19`), never ivory or white.

## Typography

**Display Font:** `Marcellus` (with `Georgia, serif` fallback)
**Body Font:** `Work Sans` (with `-apple-system, BlinkMacSystemFont, sans-serif` fallback)

**Character:** `Marcellus` brings carved Roman-meets-East-Asian stone inscription poise to headlines, Roman stage numerals (`I`–`V`), and tariff prices, while `Work Sans` (weights 400, 500, 600) delivers crisp, unpretentious legibility across 30 service descriptions, durations, and booking controls.

### Hierarchy
- **Display** (`400`, `clamp(2.35rem, 3.6vw, 3.65rem)`, `line-height: 1.08`): First-viewport sanctuary statement and monolithic `5.0` rating figure.
- **Headline** (`400`, `clamp(1.75rem, 2.5vw, 2.45rem)`, `line-height: 1.15`): Top-level section headings (`Six Signature Studio Cutout Plates`, `Official 30-Treatment Tariff Ledger`, `Private Side-by-Side Couples & Duet Suites`).
- **Title** (`400`, `1.28rem`, `line-height: 1.25`): Signature ritual card titles, tariff category headers, and reviewer names.
- **Body** (`400`, `1rem`, `line-height: 1.65`, max line width `65ch`): Treatment descriptions, verified Google review quotes, and FAQ explanations.
- **Label** (`600`, `0.86rem`, `line-height: 1.2`, `letter-spacing: 0.02em`): Action buttons, category filter controls, and tabular duration/price metadata.

### Named Rules
**The No-Kicker Rule.** Never place a small uppercase eyebrow or category label above a `Marcellus` `<h1>` or `<h2>` heading; the heading itself leads the panel, followed directly by a substantive subtitle or tariff count.

**The Tabular Tariff Rule.** Every price (`$40`–`$398`), duration (`30 min`, `1 hour`, `1 hr 30 min`), and operating hour string must apply `font-variant-numeric: tabular-nums` so vertical columns align cleanly.

## Layout

The layout operates as a full-bleed architectural grid of seamed panels:
- **First Viewport Bojagi Sheet (`.first-viewport-sheet`):** Desktop (`>1180px`) uses an asymmetric 3-column grid (`1.08fr 1.18fr 0.94fr`) spanning `min-height: calc(100vh - 74px)` over a full-width 5-column Roman numeral progression bar (`240px` intro + `repeat(5, 1fr)` steps).
- **Signature Cutout Patchwork (`.signatures-patchwork`):** 3-column seamed grid on desktop (`repeat(3, 1fr)`), 2-column on tablet (`<=1180px`), 1-column on mobile (`<=820px`). Each patch splits its upper stage `0.88fr 1.12fr` between a porcelain studio cutout well and a real suite photograph.
- **30-Treatment Tariff Workspace (`.tariff-workspace`):** Desktop splits a sticky `290px` Velvet Jade category rail against a `minmax(0, 1fr)` Silk Pearl ledger body. Each service row uses a 5-column grid (`60px minmax(220px, 1.6fr) auto auto auto`). On tablet (`<=1180px`) the category rail transforms into a 3-column *bojagi* grid, and on mobile (`<=480px`) a 2-column grid with zero horizontal scroll.
- **Couples, Reviews & Visit Spreads:** Split two-panel compositions (`1.05fr 0.95fr` or `0.88fr 1.12fr`) where a dark Velvet Jade or Camellia Blush narrative sheet abuts a multi-plate photographic mosaic or live Google Maps embed.

## Elevation & Depth

This system is **flat and tonal by default**. Depth is communicated through surface color shifts across `1px` gold and obsidian seams rather than ambient drop shadows. Shadows are reserved strictly for the floating studio cutout pedestal in the first viewport and the slide-over inspection drawer.

### Shadow Vocabulary
- **Cutout Pedestal Lift** (`box-shadow: 0 14px 34px rgba(17, 36, 30, 0.22)`): Applied to `.cutout-pedestal` where the porcelain studio cutout overlaps the top-right corner of the hero photographic plate.
- **Slide-Over Drawer Curtain** (`box-shadow: -20px 0 50px rgba(17, 36, 30, 0.35)`): Applied to `.service-drawer-panel` when inspecting an individual ritual sheet over the dimmed (`rgba(17, 36, 30, 0.68)`) backdrop.

### Named Rules
**The Seamed-Flatness Rule.** Grid cells, signature patches, review cards, and tariff rows never carry `box-shadow`; their boundaries are established exclusively by `1px` seams and tonal background steps.

## Shapes

- **Zero-Radius Architecture (`0px`):** All buttons, inputs, category tabs, photographic plates, tariff rows, and modals use crisp `0px` rectangular corners to honor the folded paper and silk *bojagi* metaphor.
- **Pedestal Micro-Chamfer (`2px`):** Only the floating studio cutout pedestal uses a `2px` corner softening.
- **Golden Ring Water-Arc SVG:** The central hero plate carries a custom dual-stroke SVG arch (`stroke="#C59B5F"` solid + `stroke="#DFC294"` dashed `4 6`) echoing the physical 360-degree brass waterfall halo above the porcelain head spa basin.

## Components

### Buttons
- **Shape:** Sharp rectangular (`border-radius: 0px`), minimum touch target `44px`–`48px`.
- **Primary (`.action-jade`):** Imperial Jade (`#1D4B3B`) fill, Warm Ivory (`#FAF6F2`) text, `1px solid #1D4B3B` border, `0.85rem 1.4rem` padding. Hover shifts to Deep Velvet Jade (`#11241E`) with Champagne Gold (`#DFC294`) text and a `3px` horizontal arrow glide.
- **Gold Accent (`.action-gold`):** 24K Gold (`#C59B5F`) fill with Jade Obsidian (`#161B19`) text (`font-weight: 600`). Hover shifts to Champagne Gold (`#DFC294`).
- **Outline Dark / Light (`.action-outline-dark`, `.action-outline-light`):** Pure Porcelain (`#FFFFFF`) with `1px solid #161B19` border on light sheets, or transparent with `1px solid #C59B5F` border and Warm Ivory text on dark Velvet Jade sheets.

### Cards / Containers
- **Corner Style:** Sharp (`0px`), edge-to-edge within parent grid.
- **Background:** Alternates across Silk Pearl (`#FCF8F5`), Camellia Blush (`#F7ECE8`), and Celadon Glaze (`#EDF3EF`) for `.sig-patch`, or Elevated Velvet Jade (`#18332B`) for `.review-entry`.
- **Shadow Strategy:** None (`box-shadow: none`).
- **Border:** Shared `1px solid #C59B5F` outer seams and `1px solid rgba(22, 27, 25, 0.12)` internal dividers.
- **Internal Padding:** `1.6rem 1.75rem` on signature patches; `2rem 2.25rem` on review entries.

### Inputs / Fields
- **Style:** Sharp rectangular (`0px`), Pure Porcelain (`#FFFFFF`) background, `1px solid #161B19` border, `46px` minimum height, `0.65rem 1rem 0.65rem 2.65rem` padding with inline 16px search magnifier SVG.
- **Focus:** `2px solid #C59B5F` (24K Gold) outline with `3px` offset.

### Navigation
- **Desktop Masthead (`.masthead`):** Sticky `74px` 3-zone seamed bar (`310px 1fr auto`) with Velvet Jade brand block on the left, Silk Pearl anchor links in the center with animated `1px` Imperial Jade underline on hover, and Camellia Blush phone block + Imperial Jade `Book Online` CTA on the right.
- **Mobile Navigation & Dock (`<=820px`):** Collapses into a 64px top bar with hamburger sheet toggle plus a fixed `56px` 2-button bottom thumb dock (`Call (407) 989-3326` in Velvet Jade | `Book Online ($40–$398)` in 24K Gold).

### Six-Ritual Tariff Sweep & Studio Cutout Pedestal
- **Behavior:** The right-hand First Viewport rail lists the 6 flagship treatments as full-bleed interactive tabs. Selecting any row live-swaps the center photographic plate, its bottom glass-jade marginalia bar, and the floating top-right Studio Cutout Pedestal (`assets/images/ai/cutout-*.png`), while clicking `View Selected Ritual Sheet` or the pedestal opens the slide-over Service Detail Drawer.

## Do's and Don'ts

### Do:
- **Do** join top-level sections and asymmetric panels with exposed `1px solid #C59B5F` (24K Gold) seams so the page reads as a continuous *bojagi* exhibition sheet.
- **Do** pair custom studio cutout illustrations (`assets/images/ai/cutout-*.png`) on Pure Porcelain (`#FFFFFF`) wells alongside real Kissimmee suite photography (`assets/images/gmaps/*`).
- **Do** keep all 30 official `jadespafl.com` service names, durations, and prices (`$40`–`$398`) verbatim and immediately bookable via the Kissimmee ByChronos URL.
- **Do** use Jade Obsidian (`#161B19`) text on all `#C59B5F` and `#DFC294` gold button surfaces to guarantee high-contrast legibility.

### Don't:
- **Don't** introduce `border-radius: 9999px` pill badges, status dots, or floating glassmorphic announcement chips anywhere in the interface.
- **Don't** place small uppercase eyebrow kickers above `Marcellus` section headings.
- **Don't** wrap grid items in rounded cards (`border-radius: 12px`–`24px`) with soft ambient drop shadows.
- **Don't** use horizontal scrolling tab strips on mobile when a 2-column seamed *bojagi* grid displays all categories cleanly within the viewport.
