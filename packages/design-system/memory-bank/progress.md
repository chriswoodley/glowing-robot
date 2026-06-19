# Progress: @cw/design-system

## What Works

### Components

- ✅ **Atoms** (13 full components with stories + styles):
  - AspectRatioContainer
  - CardCover
  - CardSection
  - HamburgerButton
  - Icon
  - Icons
  - Image
  - Nav
  - NavItem
  - NavLink
  - Overlay
  - (Form, inline-text, interactive, layout, multimedia, table, text atoms documented via MDX only)

- ✅ **Molecules** (2 components):
  - Card (with Card.Section, Card.Cover compound pattern)
  - ContentOverlay

- ✅ **Organisms** (1 component):
  - Navbar

### Hooks

- ✅ usePrevious
- ✅ useViewportMatch
- ✅ useMaxHeight
- ✅ useVerticalRhythmUnit

### Utilities

- ✅ device-helpers (touch detection, viewport matching)
- ✅ suspense (createResource for React Suspense)

### Styles

- ✅ Global SCSS stylesheet system with organized modules:
  - Root (breakpoints, CSS custom properties)
  - Form, Interactive, Multimedia, Table, Text
  - Utility classes (accessibility, border, color, elevation, layout, motion, overflow, position, space)
  - Reset styles
- ✅ Exported CSS custom properties for JS consumption (breakpoints, motion, color, etc.)

### Design Tokens

- ✅ Primitive light theme tokens in DTCG format (exported from Figma)
- ✅ Covers: color, font, lineHeight, letterSpacing, opacity, breakpoint, zindex, timing, radius, duration, dimension
- ✅ Style Dictionary pipeline (`scripts/sd.config.js` + `scripts/build-tokens.js`)
  - Light theme CSS custom properties generated (602 lines, 596 CSS vars)
  - Semantic tokens correctly reference primitives via `var()`
  - Dark mode ready — builds automatically when `dark.tokens.json` files are added
  - Custom `ds/font-weight` transform: Figma weight names → CSS numeric values
  - Normalisation preprocessor bridges Figma export inconsistencies
  - `npm run build:tokens` script

### Build & Testing

- ✅ Vite library mode (ESM + CJS output)
- ✅ Storybook v10 with MDX documentation
- ✅ Vitest + Playwright for browser-based story testing
- ✅ ESLint + Stylelint for code quality
- ✅ Chromatic addon configured

## What's Left to Build

### Design Tokens Pipeline (High Priority)

1. ~~Create Style Dictionary configuration and build scripts~~ ✅
2. Set up token linting scripts for pre-conversion validation
3. ~~Generate CSS custom properties from tokens~~ ✅
4. Create dark mode tokens (files are ready, dark.tokens.json needs to be created)

### Component Refinements

5. Replace hardcoded values with design tokens in all components
6. Review CardCover/CardSection location (atoms vs molecules)
7. Expand compound component pattern in additional components

### Style System Refactoring

8. Plan new style system (`newStyles/`) with generated CSS tokens
9. Migrate without discarding existing SCSS until stable

### Documentation

10. Write blog posts about design token process and architecture decisions
11. Expand Storybook documentation with usage guides

### Testing

12. Add unit tests for utility functions and hooks
13. Expand story test coverage

## Known Issues

- Components use hardcoded color values and variables instead of design tokens (many TODO comments)
- Token values show `"$value": 100` for all duration categories (likely a Figma export issue needing resolution)
- Blue `subtle` palette has a `900` scale instead of stopping at `800` like other palettes
- `useVerticalRhythmUnit` uses deferred state updates via `setTimeout` for SSR compatibility (potential race conditions)

## Evolution of Key Decisions

| Decision                   | Context                     | Date    |
| -------------------------- | --------------------------- | ------- |
| Atomic Design structure    | Project initialization      | Initial |
| Named exports everywhere   | Coding convention           | Initial |
| CSS Modules for components | Scoped styling              | Initial |
| DTCG token format          | Industry standard alignment | Initial |
| Vite library mode          | Modern build tooling        | Initial |
| Storybook v10 + Vitest     | Integrated testing          | Initial |
