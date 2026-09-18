/**
 * Generated from docs/design-skill.md by scripts/sync-design-skill.mjs.
 * Edit the markdown, then run `npm run sync:skill`. npm run verify checks that
 * the two stay identical.
 */
export const DESIGN_SKILL_NAME = "website-build";

export const DESIGN_SKILL_SOURCE = `---
name: website-build
description: Use when building, redesigning, or iterating on a premium interactive website — from brief to shippable code. Covers discovery, design system, narrative, motion, responsive build, accessibility, performance, and QA. Triggers on "build website", "design site", "landing page", "interactive site", "premium website", "product site", "marketing site", "redesign".
---

# Premium Interactive Website — Build Skill

Design, build, test, and refine a real responsive website that communicates clearly, feels original, works reliably, and is ready to hand off.

Aim for the craft of premium interactive product websites: cinematic when useful, controlled rather than theatrical, technically credible, fast, accessible, and memorable.

Do not clone another company's identity, copy, composition, motion, or assets. References are for standards, pacing, discipline, and interaction quality — not imitation.

---

## Phase 0: Discovery

### 0.1 — Read everything provided

Before asking anything, consume all available material:

- Product brief or repository
- Existing website (if any)
- Screenshots, recordings, or prototypes
- Brand assets, logo, palette
- Product interface or demo
- Research, positioning, or strategy documents
- Technical constraints (framework, hosting, CMS)
- Competitor references
- User comments from prior iterations

Do not ask for information already available.

### 0.2 — Ask targeted questions

No more than five at once. Only ask when the missing answer materially changes the outcome.

Prefer concrete questions over abstract ones:

| Good | Bad |
|------|-----|
| Who must understand the product within five seconds? | What's the target audience? |
| What should a qualified visitor do next? | What are the conversion goals? |
| What real proof can be shown rather than claimed? | What makes you different? |
| Which part of the product is hardest to understand? | What features should we highlight? |
| What implementation environment must the final site run in? | What tech stack do you prefer? |

When only minor information is missing, proceed with clearly stated assumptions rather than blocking.

Never invent clients, integrations, metrics, performance claims, testimonials, pricing, certifications, or product capabilities.

### 0.3 — Brand guide check

If a brand guide (BRAND.md, design-system.md, or similar) exists in the project:

- Read it completely before any design work
- Extract and enforce all tokens (colors, typography, spacing, radius, shadows, motion timing)
- Use mark and logo assets exactly as provided — do not recreate or approximate
- Follow copy tone, voice, and grammar rules from the guide
- Reference the guide's component library for UI patterns
- Match the animation language and timing from the guide
- Implement dark and light mode exactly as the guide specifies

If no brand guide exists:

- Proceed with Phase 4 (Visual System) to establish tokens
- Make design decisions that serve the product — not fashion
- Document all tokens as you go — they become the reference

---

## Phase 1: Design Thesis

Write a concise internal design thesis before writing any code. This anchors every downstream decision.

### Template

\`\`\`
Product truth:    [One plain sentence — what the product literally does]
Audience tension: [The visitor's most important problem, risk, ambition, or objection]
Core promise:     [The most compelling outcome the product can credibly promise]
Trust mechanism:  [The evidence or product behavior that makes the promise believable]
Conversion goal:  [Primary action + any secondary action]
Desired feeling:  [2-3 precise qualities — e.g., precise, assured, calm, technical,
                   editorial, tactile, severe, playful, private]
                   NOT "modern, clean, and innovative"
Creative concept: [One visual metaphor connected to the product mechanism — e.g.,
                   routing, assembly, signal processing, mapping, compression,
                   calibration, translation, coordination, observation]
                   The metaphor MUST influence layout, transitions, imagery,
                   interaction, and language — it cannot exist only as
                   decorative copy.
\`\`\`

---

## Phase 2: UX Success Criteria

Define what "working well" means before building. These become the pass/fail gates.

- [ ] The product is understandable without animation
- [ ] The primary action is visible and clearly labeled in the first viewport
- [ ] No section hides content because of fixed heights or overflow rules
- [ ] No horizontal scrolling at supported viewport widths
- [ ] Fixed header does not obscure anchored content
- [ ] Every interactive element has hover, focus-visible, active, disabled states
- [ ] All primary interactions work by keyboard
- [ ] Touch targets are at least 44x44px
- [ ] Reduced-motion mode preserves full narrative and all content
- [ ] Mobile is recomposed, not merely scaled down
- [ ] Forms explain their purpose and do not pretend to submit without a backend
- [ ] Page remains readable at 200% browser zoom
- [ ] Short laptop heights (720-768px) are treated as first-class layout constraints

---

## Phase 3: Narrative Architecture

Design the sequence around the visitor's decision process, not a template.

### Default decision journey

| # | Stage | Visitor question | Section purpose |
|---|-------|-----------------|-----------------|
| 1 | Positioning | "What is this?" | State the product and outcome immediately |
| 2 | Proof | "Does it work?" | Show real product, output, or evidence |
| 3 | Stakes | "Why does this matter?" | Make the problem feel real and urgent |
| 4 | Mechanism | "How is this different?" | Explain the unique approach or technology |
| 5 | Experience | "What does it feel like?" | Let the visitor interact with or see the product |
| 6 | Benefits | "What do I get?" | Translate features into outcomes |
| 7 | Trust | "Who else uses this?" | Evidence, data, case studies, social proof |
| 8 | Objection | "What if it doesn't work for me?" | Address the strongest objection directly |
| 9 | Switching | "Is it worth the effort?" | Reduce friction to start or switch |
| 10 | Convert | "What do I do now?" | Clear, single primary action |

Change the sequence when the product requires it. Remove any stage that repeats claims or exists only because landing pages usually have it.

### Section design checklist

For every section, define:

- [ ] The visitor question being answered
- [ ] The single takeaway (one sentence)
- [ ] The evidence being shown (not claimed)
- [ ] The desired interaction
- [ ] Why this section deserves space
- [ ] How it advances from the previous section

### Composition variety

Use varied layouts appropriate to the information type:

| Type | When to use |
|------|-------------|
| Annotated interface | Showing product UI with callouts |
| Fullscreen demonstration | Product is visually compelling |
| Scroll-controlled comparison | Before/after, version comparison |
| Technical diagram | Explaining architecture or mechanism |
| Timeline | Showing process or history |
| Interactive calculator | Letting visitor compute their own value |
| Process demonstration | Step-by-step mechanism |
| Case study narrative | Deep evidence story |
| Dense specification | Technical audience, detailed data |
| Quiet editorial | Reading-heavy trust building |

Do not default to: hero, logo strip, three feature cards, testimonials, pricing, FAQ. Use that only if it genuinely serves the product.

---

## Phase 4: Visual System

Create a visual system from the product context, not current design fashion.

### 4.1 — Color

Define with precise hex values:

| Token | Hex | Usage |
|-------|-----|-------|
| Background | | Page body |
| Surface | | Cards, elevated surfaces |
| Surface raised | | Modals, popovers |
| Border | | Card borders, dividers |
| Border subtle | | Lighter dividers, rule lines |
| Text primary | | Headings, body text |
| Text secondary | | Labels, hints, captions |
| Text disabled | | Disabled states only |
| Brand accent | | CTAs, active states, links |
| Data positive | | Success, gains, positive values |
| Data negative | | Error, losses, negative values |
| Data warning | | Alerts, warnings |
| Data info | | Informational callouts |

Do not default to purple-blue gradients, cyan glows, generic cyberpunk styling, floating blurred orbs, rainbow gradients, or beige as a substitute for taste.

### 4.2 — Typography

Define distinct roles:

| Role | Purpose | Characteristics |
|------|---------|----------------|
| Display | Hero headlines, section titles | Large, confident, tight tracking |
| Heading | Section and card headings | Clear hierarchy from display |
| Body | Paragraphs, descriptions | Comfortable reading size and line-height |
| Label | Form labels, UI labels | Functional, slightly smaller |
| Caption | Metadata, timestamps, hints | Smallest readable size |
| Mono | Code, data, technical values | Monospace for alignment |

Avoid:
- One typeface used identically everywhere
- Enormous full-sentence headlines
- Tiny grey body text
- Paragraphs in uppercase
- Repeated tiny uppercase eyebrows above every heading
- Gradient text
- Monospace used as decoration

### 4.3 — Surfaces and hierarchy

Build hierarchy through position, scale, alignment, whitespace, dividers, cropping, typography, background changes, shared edges, and motion.

Do not:
- Turn all content into rounded cards
- Nest cards inside cards
- Use excessive border radius
- Rely solely on elevation or shadow for hierarchy

### 4.4 — Spacing and grid

Define a spacing scale based on a consistent unit (e.g., 4px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128).

Define container widths and max-widths per breakpoint.

Define column counts per breakpoint (e.g., 12-col desktop, 8-col tablet, 4-col mobile).

### 4.5 — Token implementation

Map all design tokens to CSS custom properties. This enables theme switching, easy overrides, and consistency:

\`\`\`
:root {
  /* Color */
  --color-bg: #0A0A0A;
  --color-surface: #141414;
  --color-border: #262626;
  --color-text: #F5F5F5;
  --color-text-secondary: #A3A3A3;
  --color-accent: #D4A847;

  /* Spacing (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* Typography */
  --font-display: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Motion */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-exit: cubic-bezier(0.55, 0, 1, 0.45);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 600ms;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.5);
}
\`\`\`

---

## Phase 5: Motion Language

Define motion tokens before implementation:

| Token | Value | Example |
|-------|-------|---------|
| Fast interaction | 100-150ms | Button hover, toggle |
| Standard transition | 200-300ms | Card reveal, nav transition |
| Deliberate cinematic | 500-800ms | Hero entrance, section transition |
| Stagger interval | 50-100ms | Sequential element reveal |
| Default easing | cubic-bezier(0.25, 0.1, 0.25, 1) | Most transitions |
| Exit easing | cubic-bezier(0.55, 0, 1, 0.45) | Elements leaving |
| Scroll interpolation | 0.05-0.15 | Parallax or scroll-linked motion |

### When to animate

Every animation must do at least one:

- Explain spatial change
- Show cause and effect
- Direct attention
- Reveal information progressively
- Communicate state
- Reinforce the product metaphor
- Make navigation easier to understand

Remove it when it does none of these.

### Reduced motion

Under \`prefers-reduced-motion\`:

- Skip long loaders
- Disable cursor trailing
- Replace scroll-scrubbed movement with immediate states or short fades (150ms max)
- Keep every piece of content available
- Avoid motion that cannot be paused

---

## Phase 6: Storytelling Components

### 6.1 — Fullscreen and sticky storytelling

Use fullscreen or pinned scrollytelling only where sequencing improves understanding.

#### Mandatory fit rule

A pinned stage may activate only when its complete visible content fits inside the available viewport after accounting for:

- Fixed header height
- Browser chrome and safe areas
- Required top and bottom breathing room
- The tallest content state
- Zoom and text wrapping

If it does not fit, automatic fallback to normal document flow.

#### Safe implementation

- Use native scrolling
- Prefer \`100svh\` or \`100dvh\` with fallbacks
- Keep content height flexible with \`min-height\`; avoid hard fixed heights for text containers
- Use \`ResizeObserver\` for runtime height measurement when needed
- Release sticky sections cleanly on scroll past
- Keep anchor links and keyboard navigation functional
- Provide static fallback when JavaScript fails

#### Per-viewport behavior

| Viewport | Behavior |
|----------|----------|
| Wide desktop (1440px+) | Pinned version with full choreography |
| Short laptop (1280x720, 1366x768) | Compact layout or normal flow |
| Tablet (768-1024px) | Reduced layers, shorter pins or normal flow |
| Mobile (below 768px) | Normal document flow, tabs or simple state transitions |

### 6.2 — Loader

Optional. Use only when it meaningfully establishes the brand or prepares critical first-view assets.

Rules:

- Keep it brief and tied to actual readiness
- Never impose an arbitrary delay
- Do not show fake percentages
- Skip or abbreviate on repeat visits (use sessionStorage)
- Skip the long version under \`prefers-reduced-motion\`
- Share one visual element with the hero so the transition is continuous
- Unlock scrolling only when the page is stable

A generic spinner is not a premium experience.

### 6.3 — Custom cursor

Optional, desktop-only. Use only when it improves feedback or reinforces the concept.

Rules:

- Enable only for fine pointers (\`@media (pointer: fine)\`)
- Disable on touch devices
- Respect reduced motion
- Preserve native cursor for text, forms, and precision tasks
- Keep interpolation fast and controlled
- Never obscure text or small controls
- Clickability must not depend on the cursor effect

State system (pick relevant subset): default, link, primary action, drag, view, play, external link.

Do not combine expansion, magnetic movement, labels, distortion, and sound on every hover.

---

## Phase 7: Product-Led Imagery

Prioritize in order:

1. Real product interfaces
2. Real outputs or results
3. Real customer environments
4. Real technical diagrams
5. Real data
6. Real process artifacts
7. Carefully directed photography
8. Purpose-built generated imagery

Avoid generic stock illustration and meaningless 3D decoration.

### Product screenshot rules

- Crop intentionally — show one meaningful task at a time
- Preserve legibility — never blur or obscure to look "artistic"
- Use real interface content where permitted
- Avoid hiding the product behind excessive tilt, glow, blur, or device frames
- Show the product doing something, not just existing

When no visual assets exist, derive visuals from the product mechanism. Do not fabricate fake dashboards or unsupported evidence.

---

## Phase 8: Copy Standards

Write concrete, credible copy.

### Requirements

- Explain what the product literally does
- Explain what outcome it creates
- Explain how it works
- Explain why it is different
- Support claims with evidence
- Tell the visitor what to do next

### Rules

- Use specific nouns and verbs
- Keep headlines concise
- Do not repeat the headline in the paragraph below it
- Do not invent urgency
- Do not make every section sound like a manifesto
- Voice should feel authored for the actual product

### Forbidden words

Revolutionary, world-class, next-generation, supercharge, empower, seamless, cutting-edge, game-changing, disruptive, innovative, best-in-class, unmatched, unparalleled, effortless, powerful, robust, scalable, enterprise-grade.

### Content strategy when real copy is unavailable

- Derive copy from the product brief — what it does, who it is for, why it is different
- Write factual, specific sentences — not marketing fluff
- Mark any placeholder content clearly with HTML comments: \`<!-- PLACEHOLDER: needs real testimonial -->\`
- Never fabricate testimonials, metrics, client names, integration partners, or security certifications
- Use real product terminology from the brief
- If the product has real data (metrics, pricing, features), use it
- If not, use plausible but clearly marked examples

---

## Phase 9: Interaction Design

### 9.1 — Navigation

- Show current location where useful
- Remain legible over changing backgrounds
- Behave predictably through sticky sections
- Support keyboard operation (arrow keys, Escape to close)
- Collapse cleanly on small screens (hamburger or drawer)
- Close through selection, outside click, Escape, and viewport changes
- Never depend solely on hover for discoverability

### 9.2 — Tabs and segmented controls

- Use correct semantic roles (\`role="tablist"\`, \`role="tab"\`, \`role="tabpanel"\`)
- Support arrow-key navigation between tabs
- Keep the selected state visually obvious
- Avoid trapping content off-screen on mobile
- Scroll horizontally when wrapping would create a tall block

### 9.3 — Forms

- Use persistent visible labels (not placeholder-only)
- Explain why information is requested
- Validate on blur with clear inline messages
- Preserve entered data after errors
- Provide meaningful loading, success, and error states
- State honestly when the form is a prototype without a live endpoint

### 9.4 — All interactive components

Every interactive element must have these states where applicable:

| State | Visual | Keyboard |
|-------|--------|----------|
| Default | Resting appearance | — |
| Hover | Subtle feedback | — |
| Focus-visible | Clear ring/outline | Tab to element |
| Active/pressed | Momentary feedback | Enter/Space |
| Disabled | Reduced opacity, no interaction | Tab reaches but cannot activate |
| Loading | Spinner or skeleton | Announced to screen reader |
| Error | Red border + message | Focus moves to error |
| Success | Green confirmation | Announced to screen reader |

---

## Phase 10: Responsive Strategy

Treat desktop, short laptop, tablet, and mobile as related but distinct compositions.

### Breakpoints

| Name | Width | Height concerns |
|------|-------|-----------------|
| Wide desktop | 1440px+ | None — full composition |
| Desktop | 1280-1439px | None |
| Short laptop | 1280x720, 1366x768 | 720-768px height is critical |
| Tablet landscape | 1024-1279px | Varies |
| Tablet portrait | 768-1023px | 1024px height common |
| Mobile large | 430-767px | Safe areas, notch |
| Mobile standard | 375-429px | Primary mobile target |
| Mobile small | 320-374px | Minimum supported |

### Per-viewport rules

**Wide desktop:**
- Allow complex spatial composition
- Use fullscreen sequences only when content fits
- Preserve enough product detail to be useful

**Short laptop:**
- Reduce headline scale and vertical spacing
- Remove unnecessary decorative layers
- Disable pinned stages that cannot fit
- Ensure primary actions remain visible without scrolling

**Tablet:**
- Reduce simultaneous layers
- Shorten pinned durations or return to normal flow
- Increase touch targets to 48px minimum
- Test both portrait and landscape

**Mobile:**
- Normal document flow (no scroll locking)
- No custom cursor
- Navigation reachable (thumb zone)
- Core message and action prioritized
- No horizontal media overflow
- Body text 16px minimum
- Respect safe areas (notch, home indicator)

The mobile experience must feel designed, not tolerated.

### CSS approach

- Use CSS custom properties for all tokens (enables theme switching, easy overrides)
- Mobile-first media queries (min-width) for progressive enhancement
- BEM naming for component styles (\`.block__element--modifier\`)
- Avoid \`!important\` — specificity should be managed through structure
- Keep animation CSS separate from layout CSS when possible

---

## Phase 11: Accessibility

Implement WCAG 2.2 AA as the minimum standard.

### Required

- [ ] Semantic HTML5 elements (\`<header>\`, \`<nav>\`, \`<main>\`, \`<section>\`, \`<article>\`, \`<footer>\`)
- [ ] Logical heading hierarchy (h1, h2, h3 — no skips)
- [ ] Correct ARIA landmarks and roles
- [ ] Skip navigation link (first focusable element)
- [ ] Full keyboard operation for all interactive elements
- [ ] Visible focus indicators (minimum 2px solid, high contrast)
- [ ] Color contrast: 4.5:1 normal text, 3:1 large text (18px+ or 14px+ bold)
- [ ] Alternative text for all meaningful images
- [ ] Persistent form labels (not placeholder-only)
- [ ] Screen-reader-friendly names for custom components
- [ ] Touch targets at least 44x44px
- [ ] Clear link purpose (avoid "click here")
- [ ] Captions or transcripts for meaningful video or audio
- [ ] No content relies solely on color to convey meaning
- [ ] No keyboard traps
- [ ] No content disappears on focus

### Reduced motion

- [ ] Respect \`prefers-reduced-motion: reduce\`
- [ ] Disable or replace all non-essential animation
- [ ] All content remains available without motion
- [ ] No motion that cannot be paused

---

## Phase 12: Performance

Treat performance as part of design quality.

### Core Web Vitals targets

| Metric | Target | What it measures |
|--------|--------|------------------|
| LCP | Under 2.5s | Largest Contentful Paint — when main content is visible |
| INP | Under 200ms | Interaction to Next Paint — responsiveness |
| CLS | Under 0.1 | Cumulative Layout Shift — visual stability |

### Implementation rules

- [ ] Hero renders quickly — preload only critical first-viewport assets
- [ ] Lazy-load below-the-fold media (\`loading="lazy"\`)
- [ ] Reserve media dimensions to prevent layout shifts (width/height or aspect-ratio CSS)
- [ ] Use appropriately sized images (WebP/AVIF with fallbacks)
- [ ] Avoid large video files for minor atmospheric movement
- [ ] Pause off-screen canvases and animation loops (\`IntersectionObserver\`)
- [ ] Keep custom cursor updates outside main component render cycle
- [ ] Clean up observers and event listeners on unmount
- [ ] Use \`requestAnimationFrame\` for visual updates
- [ ] Provide static fallbacks for heavy effects
- [ ] Avoid fake loading delays
- [ ] Test on average hardware, not only high-end development machines
- [ ] No layout shifts from font loading (\`font-display: swap\` or \`optional\`)

A page that stutters is not premium.

---

## Phase 13: SEO and Meta

- [ ] Single \`<h1>\` per page
- [ ] Descriptive \`<title>\` (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Structured data (JSON-LD) where applicable
- [ ] Semantic HTML structure (headings, landmarks)
- [ ] Descriptive alt text on images
- [ ] Clean URL structure
- [ ] Sitemap.xml
- [ ] robots.txt

---

## Phase 14: Error States and Edge Cases

Handle gracefully:

- [ ] 404 page (on-page, not server default)
- [ ] Network failure / offline state
- [ ] Form submission failure
- [ ] Empty states (no data, no results)
- [ ] Loading states (skeleton, spinner, progress)
- [ ] Image load failure (fallback or graceful hide)
- [ ] JavaScript disabled (core content still accessible)
- [ ] Slow network (progressive enhancement)
- [ ] Browser zoom at 200%+ (no clipping, no overflow)
- [ ] Very long content (text wrapping, no truncation)
- [ ] Very short content (no awkward empty space)

---

## Phase 15: Implementation Architecture

Choose technology based on the experience, not novelty.

### Stack decision

| Complexity | Stack |
|------------|-------|
| Static content, minimal interaction | HTML + CSS + vanilla JS |
| Moderate interaction, need reactivity | HTML + CSS + Alpine.js or htmx |
| Complex state, component-driven | React, Next.js, Vue, or Svelte |
| Complex scroll choreography | Above + GSAP + ScrollTrigger |
| 3D or WebGL required | Three.js or R3F |

Default to plain HTML, CSS, and vanilla JavaScript unless the experience genuinely demands more.

### Architecture rules

- Do not use multiple animation libraries for the same job
- Keep content separate from animation logic
- Create reusable primitives only after the design reveals a real pattern
- Do not over-abstract early
- Use CSS custom properties for design tokens (colors, spacing, timing)
- Keep JavaScript progressive — core content works without it

### Useful primitives (create as needed)

| Primitive | Purpose |
|-----------|---------|
| Section stage | Standardized section wrapper |
| Sticky sequence | Scroll-controlled pinned section |
| Reveal | Scroll-triggered entrance animation |
| Mask transition | Content reveal through shape |
| Cursor state | Custom cursor management |
| Loader | Page load sequence |
| Media frame | Image/video container with fallbacks |
| Nav state | Navigation behavior management |
| Reduced-motion substitute | Alternate behavior for a11y |
| Height-aware layout | Viewport height fallback logic |

---

## Phase 16: Build Sequence

Follow this order when implementing. Complete each step fully before moving to the next.

### Step 1: Project setup

- Create folder structure
- Set up HTML boilerplate with meta tags
- Link CSS and JS files
- Create the CSS custom property token system (from Phase 4 or brand guide)

### Step 2: Layout shell

- Build header, nav, main sections (with IDs for anchoring), footer
- Content is placeholder text at this stage
- Responsive breakpoints in CSS from the start
- Verify no horizontal overflow at all viewports

### Step 3: Hero section (complete)

- Design, content, responsive, animation — finish it fully
- This becomes the quality benchmark for every other section
- Test at all viewports before proceeding

### Step 4: One "pattern" section (complete)

- Pick the most representative section (usually product demo or proof section)
- Build it end-to-end: layout, content, interaction, animation, responsive
- This establishes the reusable patterns for remaining sections

### Step 5: Remaining sections

- Replicate the pattern, adapting per the narrative architecture
- Each section: content first, then layout refinement, then animation
- Checkpoint: review all sections before adding global interactions

### Step 6: Global interactions

- Navigation behavior (sticky, collapse, current state)
- Custom cursor (if justified by Phase 6.3)
- Form handling and validation
- Tab and segmented control behavior

### Step 7: Motion and animation

- Page load sequence (loader if justified)
- Scroll-triggered reveals
- Scroll-linked animations (if used)
- State transitions

### Step 8: Responsive pass

- Test and fix at every breakpoint in the matrix
- Short laptop critical — test 1280x720 and 1366x768
- Mobile: verify normal flow, touch targets, no overflow

### Step 9: Accessibility pass

- Keyboard navigation through all interactive elements
- Screen reader test (VoiceOver or NVDA)
- Focus indicator visibility check
- Contrast ratio verification
- ARIA attributes on custom components

### Step 10: Performance pass

- Lazy load below-fold media
- Font loading optimization
- Animation cleanup (offscreen pauses, observer cleanup)
- Image optimization (format, size, dimensions)

### Step 11: Error states and edge cases

- 404 page
- Form failure states
- Empty states
- Loading states
- Image fallbacks

### Step 12: SEO and meta

- Title, description, Open Graph, Twitter Card
- Structured data if applicable
- robots.txt, sitemap.xml

### Step 13: Final QA

- Full test matrix from Phase 21
- Anti-slop checklist from Phase 23
- Self-critique from Phase 24

### Iteration checkpoints

Pause and get user feedback at these moments:

- **After Step 3:** "Hero section complete. Review before I build the remaining sections."
- **After Step 4:** "Pattern section complete. This establishes the design language. Review before I replicate across other sections."
- **After Step 5:** "All sections built. Review content and layout before I add interactions and animation."
- **After Step 8:** "Responsive pass complete. Review at mobile and short laptop before the accessibility pass."
- **After Step 13:** "Final QA complete. Full test results below. Ready for delivery or additional revisions."

---

## Phase 17: Build-Test-Critique Loop

Do not present the first functioning version as finished.

### Pass 1 — Build

- Implement the real responsive page
- Use real content and evidence where available
- Ensure semantic structure and baseline accessibility
- All interactive states implemented
- Responsive at all target viewports

### Pass 2 — UX Audit

Inspect the page as a user, not as its author:

- [ ] Is the hero understandable immediately?
- [ ] Is the first action obvious?
- [ ] Does anything clip on short screens?
- [ ] Is any information hidden behind overflow?
- [ ] Do fixed or sticky elements collide?
- [ ] Are controls discoverable without explanation?
- [ ] Are transitions helping comprehension?
- [ ] Does mobile have too much vertical control chrome?
- [ ] Does the page feel too dense, too slow, or too repetitive?
- [ ] Can a visitor explain the product after five seconds?

Fix all findings.

### Pass 3 — Validation

Run the test matrix. Capture screenshots. Revise any failure before delivery.

When a defect is found, correct the underlying rule — do not patch only one viewport.

---

## Phase 18: Viewport and Input Test Matrix

### Viewports to test

| Viewport | Width x Height | Priority |
|----------|---------------|----------|
| Wide desktop | 1600 x 1000 | High |
| Desktop | 1440 x 900 | High |
| Standard laptop | 1366 x 768 | High |
| Desktop compact | 1280 x 720 | Critical |
| Tablet landscape | 1024 x 768 | High |
| Tablet portrait | 768 x 1024 | High |
| Mobile large | 430 x 932 | High |
| Mobile standard | 390 x 844 | High |
| Mobile small | 360 x 640 | Medium |
| Mobile tiny | 320 x 568 | Low |

### Additional tests

- [ ] 200% browser zoom
- [ ] Keyboard-only navigation (Tab, Enter, Space, Escape, Arrow keys)
- [ ] Touch input (tap, swipe, long press)
- [ ] Fine-pointer input (hover, click, drag)
- [ ] Reduced-motion mode (\`prefers-reduced-motion: reduce\`)
- [ ] Slow network / disabled cache
- [ ] JavaScript failure or disabled enhancement

### Per-viewport verification

- [ ] No horizontal overflow
- [ ] No clipped text or controls
- [ ] No hidden content inside \`overflow: hidden\`
- [ ] No overlapping fixed header and content
- [ ] No unreachable controls
- [ ] No accidental scroll traps
- [ ] No body scroll lock after loader or menu closes
- [ ] No layout jump when fonts or media load
- [ ] No pinned sequence exceeding available height
- [ ] No mobile control group consuming most of the first screen

### Screenshots to capture

- [ ] Hero (first viewport)
- [ ] Main product demonstration
- [ ] Most complex sticky or interactive section
- [ ] Product navigation or tabs
- [ ] Form or conversion section
- [ ] Mobile menu (open state)
- [ ] Mobile content flow

---

## Phase 19: Quality Gates

Do not call the site complete unless ALL of the following are true.

### Content

- [ ] Opening viewport states what the product does
- [ ] Each section says something new
- [ ] Claims are supported or clearly labeled as conceptual
- [ ] No fabricated evidence
- [ ] Copy avoids all forbidden words

### UX

- [ ] Primary actions are obvious
- [ ] Current navigation state is understandable
- [ ] Controls work by mouse, touch, and keyboard
- [ ] Forms provide honest feedback
- [ ] Short screens do not clip fullscreen content

### Visual design

- [ ] Concept is product-specific
- [ ] Typography has clear roles
- [ ] Color is intentional (tokens defined)
- [ ] Cards, glows, labels, decorative layers ruthlessly edited
- [ ] Page could not belong to ten unrelated startups

### Motion

- [ ] Motion has narrative or functional purpose
- [ ] Reverse scrolling remains understandable
- [ ] Reduced-motion mode is complete
- [ ] No scroll hijacking
- [ ] No long repeated loader

### Technical

- [ ] No console errors
- [ ] No horizontal overflow
- [ ] No broken media
- [ ] No missing focus states
- [ ] No skipped heading levels
- [ ] No unnecessary dependencies
- [ ] No obvious performance bottlenecks
- [ ] Core Web Vitals targets met

### Accessibility

- [ ] WCAG 2.2 AA contrast ratios met
- [ ] All interactive elements keyboard-accessible
- [ ] Screen reader testing completed
- [ ] No keyboard traps
- [ ] Form labels and ARIA attributes correct

---

## Phase 20: Anti-Slop Checklist

Reject and revise when several of these appear without a product-specific reason.

### Visual

- [ ] Purple-blue gradient by default
- [ ] Decorative neon glow
- [ ] Glass cards everywhere
- [ ] Excessive border radius
- [ ] Floating blurred orbs
- [ ] Generic repeating stripe textures
- [ ] Gradient heading text
- [ ] Every element placed inside a container

### Typography

- [ ] One indistinct typeface for all roles
- [ ] Tiny uppercase eyebrow above every section
- [ ] Oversized full-sentence hero
- [ ] Tiny low-contrast body copy
- [ ] Flat hierarchy
- [ ] Excessively tight display tracking

### Layout

- [ ] Repeated equal three-column feature cards
- [ ] Cards nested inside cards
- [ ] Identical centered composition in every section
- [ ] Arbitrary 01, 02, 03 labels with no navigational value
- [ ] Mobile content touching viewport edges
- [ ] Fixed-height sections containing variable text
- [ ] Every section looks the same (same layout, same rhythm)
- [ ] No visual hierarchy between sections
- [ ] Content organized by feature list instead of user journey
- [ ] Navigation that requires explanation
- [ ] Footer with more content than the body

### Motion

- [ ] Every element fading upward
- [ ] Constant floating
- [ ] Elastic or bouncy entrances
- [ ] Image zoom on every hover
- [ ] Scroll hijacking
- [ ] Cursor effects that reduce precision
- [ ] Motion with no narrative purpose

### Interaction

- [ ] Hover effects that hide content
- [ ] Animations that play on every scroll event
- [ ] Modal or popup for content that could be inline
- [ ] Infinite scroll where pagination would be clearer
- [ ] Auto-playing video without user consent
- [ ] Chatbot popup that obstructs content on load

### Copy

- [ ] Generic SaaS phrases
- [ ] Inflated superlatives
- [ ] Headline and paragraph repeating the same claim
- [ ] Unverifiable urgency
- [ ] Empty manifesto language

### Trust

- [ ] "Trusted by" with no actual names
- [ ] "Coming soon" for features that should be launched
- [ ] Beta labels on production features
- [ ] "AI-powered" without explanation of what the AI does
- [ ] Security badges with no certification details

### Quality

- [ ] Placeholder imagery
- [ ] Broken media
- [ ] Weak contrast
- [ ] Missing focus states
- [ ] Overflow on mobile
- [ ] Clipping on short laptops
- [ ] Loading states with no feedback
- [ ] Effects that break when scrolling backward
- [ ] Desktop-only thinking
- [ ] Fabricated data or testimonials

---

## Phase 21: Final Self-Critique

Answer honestly before delivery:

1. Can a visitor explain the product after five seconds?
2. Is the hero clear without motion?
3. What decision is uniquely connected to this product?
4. Is the real product or mechanism shown early enough?
5. Does every section advance the story?
6. Does any section clip at 1280x720 or 1366x768?
7. Does every fullscreen composition genuinely fit its viewport?
8. Is normal scrolling still under the user's control?
9. Does the mobile version feel independently designed?
10. Is reduced-motion mode complete?
11. Are primary actions obvious?
12. Are claims supported?
13. Does the copy sound like the actual company?
14. Are the interactions useful rather than decorative?
15. Can any card, glow, label, animation, or paragraph be removed?
16. Would an experienced designer believe every visible choice was intentional?
17. Does the page remain smooth on ordinary hardware?
18. Have at least two refinement passes been completed?

Revise any area with an unsatisfactory answer.

---

## Phase 22: Deliverables

Provide all of the following:

1. **Assumptions made** — what was assumed when information was missing
2. **Design thesis** — product truth, audience tension, promise, trust, goal, feeling, concept
3. **Narrative and sitemap** — section sequence with visitor questions and takeaways
4. **Visual system** — color tokens, typography roles, spacing scale, surface treatment
5. **Motion and interaction system** — timing tokens, easing, scroll behavior, cursor behavior
6. **Responsive strategy** — breakpoint behavior including short-laptop fallback
7. **Completed implementation** — the real code, not a mockup
8. **Accessibility decisions** — what was implemented and any tradeoffs
9. **Performance decisions** — what was optimized and any tradeoffs
10. **Test matrix results** — which viewports were tested and outcomes
11. **Screenshots** — representative desktop, short-laptop, tablet, and mobile
12. **Remaining gaps** — content, asset, or integration items still needed
13. **What makes it original** — concise explanation of the design's uniqueness
14. **Source files** — repository-ready output or downloadable files

Do not claim tests were performed unless they were actually run.

Do not claim a form, integration, analytics, or backend works unless it is connected and verified.

The final result should feel coherent, precise, alive, and useful — not busy for the sake of appearing premium.

---

## Phase 23: Handoff

Leave the project in a state where another developer can pick it up.

### README.md should include

- What the site is and what it does
- How to run locally (file path or dev server command)
- Folder structure explanation
- Design token reference (or link to brand guide)
- Known issues or technical debt
- Browser support targets
- Deployment instructions (if applicable)

### Code conventions

- Consistent indentation (2 spaces for HTML/CSS, 2 or 4 for JS — pick one and stick to it)
- Descriptive class names (not \`.a\`, \`.box1\`, \`.wrapper-inner-final-v2\`)
- Comments only where the why is non-obvious (not what the code does)
- Separate concerns: HTML structure, CSS presentation, JS behavior
- No dead code — remove what is not used
- Clean git history with meaningful commit messages
`;
