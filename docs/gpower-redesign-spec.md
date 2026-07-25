# GPower Solutions website redesign

## 1. Website / product audit

### Current UI and UX issues

- A rotating hero made the primary value proposition move before a buyer could absorb it. For a complex, high-consideration purchase, one decisive message is clearer than three competing campaigns.
- Placeholder partner names looked like client logos without proving client relationships. That can weaken trust instead of building it.
- The visual language was clean but relied on familiar rounded-card patterns and a wide green/blue gradient; it did not consistently express industrial rigour.
- Repeated section heading markup and card treatments made future expansion more expensive than it needed to be.
- The assessment form had solid validation, but its status, progress, and two modes did not have enough visual hierarchy at the end of a long page.

### Messaging, credibility, and lead-generation gaps

- The original hero stated the net-zero story but did not immediately show how GPower works or why an industrial buyer should choose it.
- Proof existed later in the page as process steps, metrics, industries, and projects, rather than being introduced early as a coherent operating model.
- Fake wordmarks were a credibility risk. They are replaced with verifiable delivery principles until approved client logos are available.
- The assessment CTA was visible but could compete with the carousel's changing actions. It is now the constant primary action.

### Accessibility, responsiveness, performance, and architecture

- Strengths retained: semantic sections, heading order, visible labels, native form controls, explicit errors, keyboard carousel controls, reduced-motion support, lazy-loaded lower-page images, and a responsive menu.
- Improvements needed in the legacy version: clearer focus hierarchy across new interactive elements, more deliberate mobile card collapse, and removing unused carousel / logo-strip code.
- The page is still a single route by design. Content remains data-driven in `src/content/homepage.ts`, so solution, industry, project, and assessment routes can share the same components later.

### Top 10 highest-impact improvements

1. Use one decision-ready hero rather than a rotating campaign carousel.
2. Put the delivery model beside the core value proposition.
3. Replace unsupported partner claims with operational proof.
4. Give the assessment a single, persistent primary CTA.
5. Use a dark spruce, mineral, and lime system that feels engineered rather than generic.
6. Make section rhythm, headings, cards, and metrics consistent through design tokens.
7. Turn the four-step process into an ordered, low-noise execution sequence.
8. Add direct solution-card conversion paths without promising unavailable detail pages.
9. Preserve validation, disabled, success, error, and loading states in the assessment flow.
10. Test real desktop and 390 px mobile layouts, including navigation and horizontal overflow.

## 2. Redesign strategy

### Direction and personality

The direction is **industrial clarity**: deep spruce surfaces, restrained mineral accents, luminous lime only for decisions and outcomes, square architectural edges, thin grid lines, and a mix of editorial scale with operational detail. It is confident, measured, engineering-led, and avoids generic sustainability imagery or SaaS-style decoration.

### Information architecture and sequence

1. A focused net-zero value proposition with assessment and expert CTAs.
2. A three-part transition brief that explains how GPower operates.
3. Verified trust signals: technology-agnostic design, end-to-end delivery, measurable outcomes.
4. Partner positioning, then the four-step delivery process.
5. Solution ecosystem and industry relevance.
6. Impact metrics and deployment proof.
7. The assessment / contact conversion module and footer.

### Hero, CTA, trust, and assessment approach

- The hero uses a single promise, one primary action, one lower-pressure expert action, and a visible execution model.
- The primary CTA is `Start your free assessment`; all solution-card actions lead to the same qualified conversion flow.
- Trust comes from the process, sector language, measurable impact, and projects — not invented logos.
- Assessment retains two modes, explicit client-side validation, focus management after step changes, status feedback, disabled deployment messaging, and an error / success presentation. When the endpoint is enabled, no UI change is required.

## 3. Design system

### Token system

| Role | Token | Value / intent |
| --- | --- | --- |
| Canvas | `--bg` | `#f5f7f2`, an understated mineral white |
| Surface | `--surface` | `#ffffff`, primary readable surface |
| Primary ink | `--ink` | `#09241f`, deep spruce for authority |
| Supporting ink | `--ink-2` | `#163832`, elevated dark text |
| Accent / primary action | `--green` | `#b7dd58`, reserved for decisions and outcomes |
| Technical accent | `--blue-strong` | `#187781`, restrained mineral teal |
| Structural line | `--line` | `#d7e0d7`, quiet separation |
| Error | `--danger` | existing semantic error token |

The dark mode foundation is already semantic: `--ink` / `#061d18` power hero, impact, assessment, and footer areas while components retain named surface and line tokens. A full user-selectable theme can be added by overriding the same variables on `[data-theme='dark']`; no component-specific color migration is required.

### Type, space, shape, and elevation

- **Typeface:** Manrope for readable high-performance B2B copy; DM Mono for labels, phases, and system metadata.
- **Scale:** display `clamp(3rem, 5.5vw, 5.45rem)`; section title `clamp(2rem, 3.7vw, 3.35rem)`; body 0.84–1.15rem according to density.
- **Spacing:** 4 px base; sections use `clamp(4.5rem, 8vw, 8rem)`, grids use 1 px structural gaps, and desktop containers cap at 1240 px.
- **Shape:** near-square 0.2–0.45 rem control corners; this is deliberately less consumer-like than large pill cards. Buttons retain a small consistent radius.
- **Elevation:** `--shadow-sm`, `--shadow`, and `--shadow-lg` use low-opacity spruce shadows. Elevation communicates surface hierarchy only.
- **Motion:** 200–600 ms ease-out transitions, no auto-rotating hero, and global `prefers-reduced-motion` support.

### State rules

- Focus uses the shared 3 px blue outline; hover changes elevation or an icon position, not just colour.
- Buttons have hover, focus, disabled, and submitting states. Inputs have focus and error states; error text is linked with `aria-describedby`.
- Assessment supports idle, loading, success, error, and deployment-disabled feedback. Empty state and skeleton patterns should use the same surface, line, and muted-text tokens when future CMS content is asynchronous.

## 4. Component architecture

```text
src/
  content/              # typed marketing content and future CMS adapters
  components/
    layout/              # Header, Footer, ScrollProgress
    sections/            # page-level marketing compositions
    ui/                  # low-level reusable primitives and icons
  hooks/                 # interaction hooks such as useCountUp
  lib/
    api/                 # lead endpoint adapter
    motion/              # reusable Framer Motion variants
  pages/                 # route compositions
```

- `SectionHeading` removes repeated section-title markup and is ready for all marketing routes.
- `Hero` and `TrustBar` are data-driven through `heroSection` and `trustSignals`.
- `AssessmentSection` owns form state and accessibility; the API transport stays separate in `lib/api/forms.ts`.
- Future routes should compose a shared `MarketingLayout` around `PageHeader`, `SectionHeading`, and content blocks. Suggested paths: `/solutions/:slug`, `/industries/:slug`, `/projects/:slug`, `/assessment`.
- Keep local React state for navigation and forms. Add a server-state library only when CMS or case-study APIs introduce caching / invalidation needs.
- Naming: PascalCase components, camelCase data and functions, semantic CSS class names, and one content object per section.

## 5. Component inventory

| Component | Purpose and main API | Key states / accessibility |
| --- | --- | --- |
| `Header` / mobile navigation | Primary anchors; future `items`, `cta` props | Current section, scroll state, Escape close, `aria-expanded`, dialog label |
| `Hero` | Core proposition; content object supplies CTAs, signals, brief | One H1, labelled region, readable image overlay |
| `TrustBar` | Evidence before claims; `trustSignals` data | Use only verified statements |
| `SectionHeading` | Shared eyebrow, title, body, `align` variant | Preserves heading hierarchy |
| Button links | `.btn` and `.btn-solid` / `.btn-outline` / `.btn-ghost-light` variants | Hover, focus, disabled, busy state |
| Process step | `number`, `title`, `body` from `whySteps` | Ordered phase language; responsive single column |
| Solution card | `slug`, `title`, `body`, `image`, `points` | Semantic article and image alt; direct CTA |
| Industry grid item | industry string from content | Dense responsive chips, no fake icons |
| Impact stat | numeric `value`, `suffix`, label, icon | Counts on view; motion-reduced safe |
| Project / case-study cards | featured and item metrics | Semantic articles, image alt, outcome-first view |
| Assessment form | `assessment` / `contact` mode and API adapter | Required labels, inline error, focus management, loading, disabled, success, error |
| Footer | brand and link config | Contact links remain semantic |

Future primitives: `Input`, `Select`, `Textarea`, `Checkbox`, `FieldMessage`, `Skeleton`, and `EmptyState` should be extracted only once another form or CMS list reuses them. That avoids premature component bloat while preserving the exact accessible patterns already in the form.

## 6. CSS / styling system

- Global variables, reset, type, layout, focus, responsive rules, and component classes live in `src/index.css`; this is the single styling strategy.
- Component styling is block-oriented (`.trust-bar`, `.transition-brief`, `.solution-card`) with semantic modifier classes (`.hero--editorial`, `.section--soft`).
- Container rule: `min(1240px, calc(100% - 3rem))`, reduced to 2 rem inline space on small screens.
- Responsive breakpoints: 1024 px for information density, 900 px for two-column composition collapse / mobile navigation, 620 px for phone-first flow.
- Layering: scroll progress 70, header 60, menu 55, decorative hero elements behind interactive content. Avoid arbitrary per-component z-index values.
- Dark sections use the semantic ink tokens, preserving contrast and a consistent visual bridge through hero, impact, and assessment.

## 7. Refactor plan

1. **Foundations:** set tokens, typography, layout rhythm, colours, and motion standards. **Completed.**
2. **App shell:** retain the route shell, refactor header behaviour, footer, and scroll progress. **Existing shell retained and validated.**
3. **Shared primitives:** introduce `SectionHeading`; maintain semantic button / form conventions. **Completed.**
4. **Homepage:** replace carousel and placeholder strip, then refactor every content section into the new visual system. **Completed.**
5. **Lead capture:** retain two-step validation and deployment-safe API handling; connect endpoint through environment variables when available. **Completed / endpoint pending.**
6. **Accessibility and responsive QA:** keyboard menu, visible form labels/errors, desktop and 390 px mobile inspection, and horizontal-overflow check. **Completed.**
7. **Performance and rollout:** keep lower images lazy, retain hero preload, add real client logos only with permission, add route-level code splitting and JSON-LD / analytics events when new detail routes ship. **Next.**

## 8. Implemented code output

- `src/components/sections/Hero.tsx` — focused hero, transition brief, two clear CTAs.
- `src/components/sections/TrustBar.tsx` — verified operating-model proof.
- `src/components/ui/SectionHeading.tsx` — reusable section heading primitive.
- `src/pages/HomePage.tsx` — updated homepage composition.
- `src/components/sections/WhyGPower.tsx`, `SolutionsSection.tsx`, `ImpactStats.tsx`, `CaseStudies.tsx` — now use the shared primitive and refined conversion / proof content.
- `src/content/homepage.ts` — revised content configuration; unused carousel and fake-logo data removed.
- `src/index.css` — semantic token refresh plus the responsive editorial industrial component system.
- `src/components/sections/AssessmentSection.tsx` and `src/lib/api/forms.ts` — retained as the robust lead-capture implementation with success, error, loading, disabled, and validation behaviour.
