# Jarid Premium Motion Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the Jarid homepage layout and motion while preserving all rendered copy, brand colors, and navbar code, with only the explicitly requested hero and solution imagery refreshed.

**Architecture:** Keep `app/page.tsx` server-rendered and add declarative `data-motion-*` hooks. A focused client-only `MotionController` owns IntersectionObserver and scroll-linked parallax behavior, while scoped CSS appended to `app/globals.css` owns layout and animation presentation without targeting the navbar.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, IntersectionObserver, requestAnimationFrame, Node test runner

**Spec:** `docs/superpowers/specs/2026-08-25-premium-motion-refresh-design.md`

## Global Constraints

- Do not change any rendered Arabic copy.
- Do not change image sources or assets outside the explicitly requested hero and solution visuals.
- Do not change the existing color palette.
- Do not modify `app/components/SiteHeader.tsx` or existing navbar CSS selectors.
- Do not add a motion dependency; use progressive native browser APIs.
- Preserve reduced-motion accessibility and server-rendered visibility.

---

### Task 1: Lock content, assets, and motion markup contracts

**Files:**
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: rendered homepage HTML from the existing `render()` helper
- Produces: immutable content/image contracts and the required server-rendered motion-hook contract

- [ ] **Step 1: Write the failing motion contract and passing preservation contracts**

Add `createHash` from `node:crypto`, a `mainMarkup()` helper, and tests that hash normalized main-page text and ordered image sources. Add a separate test that requires `data-motion-root="home"`, one motion controller sentinel, all seven main motion sections, and motion groups for solutions, process, products, comparison, and FAQ.

- [ ] **Step 2: Run the focused test file to verify RED**

Run: `npm run build && node --test --test-name-pattern="الحركة" tests/rendered-html.test.mjs`

Expected: FAIL because `data-motion-root`, the controller sentinel, and section/group hooks do not exist.

- [ ] **Step 3: Record the preservation baseline**

Expected rendered hashes:

```text
text:   a108120549b65d14779986804995c32c8900816da19963f89911e4884e2fbd33
images: d25a734e9ea2eabf90a2bcea6870cf31f2edeacdfae06c5f37d2b2801a276158
```

### Task 2: Add progressive motion orchestration

**Files:**
- Create: `app/components/MotionController.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `[data-motion-reveal]`, `[data-motion-group]`, `[data-motion-item]`, and `[data-motion-parallax]`
- Produces: `.motion-ready`, `.is-visible`, `--motion-delay`, and `--motion-parallax`

- [ ] **Step 1: Add the client controller**

Create a component that renders one visually hidden `data-motion-controller` sentinel. In `useEffect`, exit early for reduced motion; otherwise add `.motion-ready`, calculate stagger delays, observe reveal targets once, and update bounded parallax variables inside one requestAnimationFrame callback.

- [ ] **Step 2: Add declarative hooks without changing copy or image sources**

Add `className="motion-page" data-motion-root="home"` to `main`, render `<MotionController />`, mark the seven homepage areas with `data-motion-section`, and mark grouped children with `data-motion-item`. Use `data-motion-parallax` only on existing media wrappers.

- [ ] **Step 3: Run the focused contract to verify GREEN**

Run: `npm run build && node --test --test-name-pattern="الحركة|النصوص والصور" tests/rendered-html.test.mjs`

Expected: PASS with the same text and image-source hashes.

### Task 3: Apply the premium layout and motion system

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: motion hooks and state from Task 2
- Produces: premium editorial layout, reveal variants, bento solutions, staged process/products, smooth FAQ, and ambient CTA behavior

- [ ] **Step 1: Append scoped desktop presentation rules**

Add only selectors rooted at `.motion-page` or `[data-motion-*]`. Define the hero/media composition, about sticky spread, solution bento grid, process/product offsets, comparison depth, FAQ content transition, and final CTA ambient detail.

- [ ] **Step 2: Append motion state rules**

Define hidden initial states only beneath `html.motion-ready`, visible states beneath `.is-visible`, group delays through `--motion-delay`, and parallax through `--motion-parallax`. Keep durations between 240ms and 1100ms with one restrained cubic-bezier family.

- [ ] **Step 3: Append responsive and reduced-motion overrides**

At `1100px`, `860px`, and `600px`, remove desktop offsets and keep cards within the viewport. Under reduced motion, force all motion targets visible and clear transforms, animation, and parallax.

- [ ] **Step 4: Run the full automated suite**

Run: `npm test`

Expected: 23 tests, 0 failures.

### Task 4: Browser and repository verification

**Files:**
- Verify only

**Interfaces:**
- Consumes: built homepage and Git diff
- Produces: evidence that layout, motion, content, assets, colors, and navbar constraints hold

- [ ] **Step 1: Verify desktop**

Open `/` at 1440×1050, sample the hero and each section after scrolling, verify `.is-visible` activation and no horizontal overflow.

- [ ] **Step 2: Verify mobile**

Open `/` at 390×844, verify stacked layouts, product rail behavior, FAQ expansion, and no horizontal overflow.

- [ ] **Step 3: Verify reduced motion**

Emulate `prefers-reduced-motion: reduce` and verify all content remains visible with parallax disabled.

- [ ] **Step 4: Verify immutable constraints**

Run:

```bash
git diff --exit-code 283ccf1 -- app/components/SiteHeader.tsx
git diff --check
npm run lint
npm test
```

Expected: no navbar diff, no whitespace errors, lint exit 0, and 23 tests passing.

- [ ] **Step 5: Commit the verified implementation**

```bash
git add app/page.tsx app/layout.tsx app/globals.css app/components/MotionController.tsx public/images tests/rendered-html.test.mjs docs/superpowers
git commit -m "feat: elevate Jarid visuals and motion"
```
