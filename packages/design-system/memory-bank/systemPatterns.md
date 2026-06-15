# System Patterns: @cw/design-system

## Architecture Overview

The design system follows Atomic Design methodology with a clear component hierarchy:

```
atoms/       → molecules/    → organisms/
  (basic       (composed       (complex
   HTML         components)     sections)
   elements)
```

## Component Architecture

### File Structure per Component

```
component-name/
├── index.jsx          # Component implementation (named export)
├── index.stories.jsx  # Storybook stories
└── styles.module.css  # CSS Module styles
```

### Component Patterns

- **Function Declarations**: All components use `function ComponentName()` declarations (not arrow functions)
- **Named Exports**: No default exports anywhere; components export themselves and are re-exported from `src/index.js`
- **CSS Modules**: Each component uses CSS Modules (`styles.module.css`) for scoped styling with kebab-case class names
- **clsx for Class Composition**: The `clsx` library is used for conditional class name merging
- **Custom Properties**: CSS custom properties (kebab-case) are set via inline `style` prop for dynamic values
- **Composite Components**: Molecule components (e.g., `Card`) use sub-components attached to the parent (`Card.Section`, `Card.Cover`)

### Key Component Examples

| Component                     | Type     | Description                                                  |
| ----------------------------- | -------- | ------------------------------------------------------------ |
| `Image`                       | Atom     | Enhanced img with lazy loading, placeholder color generation |
| `Icon`                        | Atom     | SVG icon using `<use xlinkHref>` for sprite-based icons      |
| `Overlay`                     | Atom     | Animated overlay with slide/fade effects                     |
| `HamburgerButton`             | Atom     | Animated hamburger menu button                               |
| `Nav` / `NavItem` / `NavLink` | Atom     | Navigation primitives                                        |
| `AspectRatioContainer`        | Atom     | Aspect-ratio-aware container with vertical rhythm            |
| `CardCover` / `CardSection`   | Atom     | Card sub-components (may move to Card dir)                   |
| `Card`                        | Molecule | Composite card using compound component pattern              |
| `ContentOverlay`              | Molecule | Content with toggle-able overlay (click/hover)               |
| `Navbar`                      | Organism | Full navbar combining brand + navigation                     |

## Design Tokens System

- **Source**: Figma variable exports in DTCG token format (`.tokens.json`)
- **Structure**: Primitive tokens organized by category (color, font, dimension, etc.)
- **Figma Extensions**: Each token includes `com.figma.variableId`, `com.figma.scopes`, and optional `com.figma.codeSyntax`
- **Processing**: Style Dictionary (planned) to transform tokens into usable formats
- **Current State**: Primitive tokens exist for light theme; semantic tokens and dark mode are upcoming

## Global Styles Architecture

```
src/styles/
├── index.scss                  # Entry point
├── _reset.scss                 # CSS reset/normalize
├── form/                       # Form element styles
├── interactive/                # Interactive element styles (buttons, links)
├── multimedia/                 # Media element styles
├── root/                       # Root-level styles (breakpoints, CSS custom properties)
├── table/                      # Table element styles
├── text/                       # Text/typography styles
├── utils/                      # Utility classes
│   ├── accessibility/
│   ├── border/
│   ├── color/
│   ├── elevation/
│   ├── lang/
│   ├── layout/
│   ├── motion/
│   ├── overflow/
│   ├── position/
│   └── space/
```

Each style category follows a consistent file pattern:

- `_variables.scss` - Sass variables
- `_functions.scss` - Sass functions
- `_mixins.scss` - Sass mixins
- `_placeholders.scss` - Sass placeholders
- `_styles.scss` - Actual style output
- `_module.scss` - CSS Module entry point
- `_export.module.scss` - Exported CSS custom properties for JS consumption

## Hooks

| Hook                    | Purpose                                        |
| ----------------------- | ---------------------------------------------- |
| `usePrevious`           | Track previous value of a state/prop           |
| `useViewportMatch`      | Media query matching for viewport breakpoints  |
| `useMaxHeight`          | Calculate max-height from vertical rhythm unit |
| `useVerticalRhythmUnit` | Get root line-height as a CSS unit value       |

## Utilities

| Utility          | Purpose                                             |
| ---------------- | --------------------------------------------------- |
| `device-helpers` | Touch device detection, viewport matching           |
| `suspense`       | `createResource()` for React Suspense data fetching |

## Build & Module System

- **Vite Library Mode**: Bundles into `dist/` with both ESM (`main.es.js`) and CJS (`main.cjs.js`) outputs
- **Preserve Modules**: Output preserves directory structure for tree-shaking
- **CSS Output**: Global styles compiled to `dist/design-system.css`
- **External Dependencies**: React, ReactDOM, clsx, lodash marked as external

## Naming Conventions

All naming follows strict conventions documented in `.clinerules`:

- **Directories/Files**: kebab-case
- **Component Functions**: PascalCase (function declarations)
- **JS Variables**: camelCase
- **CSS Classes**: kebab-case (root class: `.root`)
- **CSS Custom Properties**: `--kebab-case`
- **Sass Variables**: `$kebab-case`
- **Exports**: Named only, no defaults
