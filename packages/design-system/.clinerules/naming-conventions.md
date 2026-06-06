# Naming Conventions

All naming in this project follows established patterns. Adhere strictly to these conventions to maintain consistency across the codebase.

## Files & Directories

### Atomic Design Structure

```
src/
├── atoms/          # Basic HTML elements
├── molecules/      # Composed components
├── organisms/      # Complex components
├── hooks/          # Shared React hooks
├── utils/          # Utility functions
├── tokens/         # Design tokens (Style Dictionary)
├── styles/         # Global Sass stylesheet
└── index.js        # Public API exports
```

### Component Directories

- **kebab-case** for all directory names
- One component per directory

```
✅ atoms/aspect-ratio-container/
✅ atoms/hamburger-button/
✅ molecules/content-overlay/
❌ atoms/AspectRatioContainer/
❌ atoms/aspectRatioContainer/
```

### Component Files

Each component directory contains these files (use exact names):

| File                | Purpose                  | Convention                 |
| ------------------- | ------------------------ | -------------------------- |
| `index.jsx`         | Component implementation | Always `index.jsx`         |
| `index.stories.jsx` | Storybook stories        | Always `index.stories.jsx` |
| `styles.module.css` | CSS Module styles        | Always `styles.module.css` |
| `index.mdx`         | Documentation (optional) | Always `index.mdx`         |

### SCSS Files

- **Underscore prefix** for all partial SCSS files
- **kebab-case** for all SCSS file names
- Standard naming pattern per style category:

```
_styles.scss         # Actual styles
_variables.scss      # Sass variables
_functions.scss      # Sass functions
_mixins.scss         # Sass mixins
_placeholders.scss   # Sass placeholders
_module.scss         # CSS Module entry
_export.module.scss  # Exported CSS custom properties
```

### Hooks, Utilities & Documentation

- Hooks: `use-kebab-case.js` in `src/hooks/`
- Utilities: `kebab-case.js` in `src/utils/`
- Documentation: `index.mdx` or `kebab-case.mdx` for standalone docs

---

## Components

### Function Names

- **PascalCase** for all React component function names
- Use **function declarations**, not arrow functions

```jsx
// ✅ Correct
function Image({ alt, src, width, height }) { ... }
function Overlay({ children, className }) { ... }
function HamburgerButton({ isOpen, onClick }) { ... }

// ❌ Incorrect
const Image = ({ alt, src, width, height }) => { ... };
const overlay = ({ children, className }) => { ... };
```

### Export Pattern

- **Named exports only** — no default exports anywhere
- Components export themselves from `index.jsx`
- Re-export from `src/index.js` using named export syntax

```jsx
// ✅ in component/index.jsx
export { Image };

// ✅ in src/index.js
export { Image } from 'atoms/image';
export { usePrevious } from 'hooks/use-previous';
```

---

## Variables & Functions

### JavaScript

- **camelCase** for all variables, functions, parameters, and local bindings
- **`get` prefix** for pure utility functions that retrieve/compute a value

```js
// ✅ Correct
function getIsTouchDevice() { ... }
function getShouldMatchViewportMinWidth(minWidth) { ... }
const colorPlaceholderImageCache = new Map();

// ❌ Incorrect
function IsTouchDevice() { ... }
function get_should_match_viewport_min_width(minWidth) { ... }
```

### React Hooks

- **camelCase** with `use` prefix
- File names mirror the hook name in kebab-case

```js
// Hook name: useViewportMatch → file: use-viewport-match.js
export function useViewportMatch({ type, value }) { ... }
```

### Sass Variables

- **`$kebab-case`** for all Sass variables
- Prefix with the component/section name for namespacing
- Map keys use **quoted strings** with kebab-case

```scss
// ✅ Correct
$button-border-size: 1px;
$breakpoints-in-px: (
  'sm': 816,
  'md': 1008,
);

// ❌ Incorrect
$buttonBorderSize: 1px;
$breakpointsInPx: (
  sm: 816,
  md: 1008,
);
```

---

## CSS Classes

### CSS Module Classes

- **kebab-case** for all class names
- Root element: use `.root` as the primary class
- State modifiers: prefix with `is-` (e.g., `.is-active`)
- Variant patterns: `{category}-{variant}` (e.g., `.effect-slideUp`, `.type-screen`)

```css
/* ✅ Correct */
.root {
}
.root.fill {
}
.is-active {
}
.effect-slideUp {
}
.position-bottom {
}

/* ❌ Incorrect */
.Root {
}
.isActive {
}
.slideUpEffect {
}
.positionBottom {
}
```

### CSS Custom Properties

- **`--kebab-case`** for all custom properties

```css
/* ✅ Correct */
--placeholder: url(data:...);
--breakpoint-small: 51rem;

/* ❌ Incorrect */
--placeholderUrl: url(data:...);
--breakpointSmall: 51rem;
```

---

## Tokens

### Token Files

- **`kebab-case.tokens.json`** in `src/tokens/`

### Token Naming

- **camelCase** for token names (Style Dictionary convention)
- No duplicate names across scopes
- Semantic tokens reference primitive tokens via aliases

---

## Summary Table

| Context                | Convention               | Example                         |
| ---------------------- | ------------------------ | ------------------------------- |
| Directories            | `kebab-case`             | `aspect-ratio-container/`       |
| Component files        | `index.jsx`              | `index.jsx`                     |
| Story files            | `index.stories.jsx`      | `index.stories.jsx`             |
| CSS Modules            | `styles.module.css`      | `styles.module.css`             |
| Hook files             | `use-*.js`               | `use-viewport-match.js`         |
| Utility files          | `kebab-case.js`          | `device-helpers.js`             |
| SCSS files             | `_*-kebab-case.scss`     | `_variables.scss`               |
| Documentation          | `*.mdx`                  | `button.mdx`                    |
| Component names        | `PascalCase`             | `AspectRatioContainer`          |
| JS variables/functions | `camelCase`              | `generateColorPlaceholder`      |
| Sass variables         | `$kebab-case`            | `$button-border-size`           |
| CSS classes            | `kebab-case`             | `.is-active`, `.effect-slideUp` |
| CSS custom properties  | `--kebab-case`           | `--placeholder`                 |
| Token names            | `camelCase`              | `breakpointSmall`               |
| Token files            | `kebab-case.tokens.json` | `light.tokens.json`             |
