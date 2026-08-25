# Jarid Premium Motion Refresh Design

## Goal

Raise the existing Jarid homepage to a premium editorial standard through layout rhythm, motion, and the specifically requested hero and solution imagery refresh.

## Locked constraints

- Preserve every rendered Arabic word exactly.
- Preserve every image source and image asset except the specifically requested hero and solution studio images.
- Preserve the existing brand palette exactly: `#112736`, `#cc9656`, `#e0ebf9`, `#ddd3d0`, `#62c7cd`, `#e6f0e7`, `#f7e9e6`, `#978a86`, and `#ffffff`.
- Do not modify `app/components/SiteHeader.tsx`.
- Do not modify any existing navbar selector or responsive navbar rule in `app/globals.css`.
- Keep the existing local DIN Next Arabic type family.
- Keep server-rendered copy and images available when JavaScript is disabled.

## Visual direction

The direction is “quiet luxury / precision studio”: generous negative space, carefully asymmetrical editorial grids, deep but restrained card layering, and one consistent rounded precision motif. The page should feel orchestrated rather than animated everywhere.

## Motion system

- Hero: staged title, copy, action, and image reveal using opacity, translation, scale, and a rounded clip mask.
- Scroll: a single small client controller observes explicit motion hooks and reveals each section once.
- Groups: solution cards, process cards, products, comparison rows, and FAQ items reveal in a measured stagger.
- Depth: selected media receives a small scroll-linked parallax offset; no large perspective tilt or pointer-following gimmicks.
- Interaction: image scale, card elevation, underline drawing, and FAQ expansion use consistent easing and durations.
- Final CTA: slow ambient logo and outline movement, disabled for reduced-motion users.

## Layout changes

- Hero keeps its content and gains a luxury Jarid studio image, exact brand seal, editorial split, layered media frame, and stronger spacing hierarchy.
- About becomes a composed text/image spread with a sticky media moment on large screens.
- Solutions becomes an eight/four-column bento composition on large screens and a clean stack on mobile.
- Process retains four stages but uses offset sequencing on large screens and a straightforward stack on mobile.
- Products use an editorial stagger on wide screens while retaining the existing mobile horizontal rail.
- Comparison rows gain clearer depth and progressive reveal without changing table content.
- FAQ retains native `details` semantics and gains smooth content expansion.
- Final CTA gains controlled ambient motion without changing content or colors.

## Accessibility and performance

- All motion uses transform, opacity, or clip-path where possible.
- Motion hooks are progressive enhancement; the page remains fully visible without JavaScript.
- `prefers-reduced-motion: reduce` disables reveals, parallax, ambient movement, and long transitions.
- Mobile layouts remove offsets that would create horizontal overflow.

## Acceptance checks

- The rendered homepage text SHA-256 remains `a108120549b65d14779986804995c32c8900816da19963f89911e4884e2fbd33`.
- The approved rendered homepage image-source SHA-256 is `33345bf13386cba60946e39ebecc33c68e6cd065e6c566506ba6c3876bd2cf51`.
- `app/components/SiteHeader.tsx` has no diff from base commit `283ccf1`.
- Desktop and mobile have no horizontal overflow.
- Motion respects reduced-motion preferences.
