# Active Context: @cw/design-system

## Current State

The design system has a solid foundation with:

- 13 atomic components with stories and CSS modules
- 2 molecular components (Card, ContentOverlay) with compound component patterns
- 1 organism (Navbar)
- 4 custom hooks
- 2 utility modules
- Comprehensive global stylesheets
- Design tokens from Figma (light theme primitives)
- Storybook v10 with test integration
- Vite library build (ESM + CJS)

## Recent Changes

- Memory bank initialized with project documentation
- Project structure and conventions documented

## Active Decisions & Considerations

### Design Tokens

- Tokens exist as DTCG JSON from Figma but no Style Dictionary pipeline is active yet
- Components still use hardcoded values or Sass module exports rather than token references
- TODO items indicate tokens should replace hardcoded values across components

### Component Architecture

- `CardCover` and `CardSection` live in `atoms/` but may belong better as subcomponents of `Card`
- Several components reference TODO comments for token integration
- `Image` component uses a custom base64 placeholder generation approach

### Planned Work (from TODO.md)

1. **Figma Integration**: Scripts to lint and convert Figma variable exports
2. **Style Dictionary**: Build pipeline for token transformation
3. **Style Refactoring**: Replace `styles/` with `newStyles/` approach (don't discard existing SCSS until new system is in place)
   - New reset CSS
   - Generated CSS tokens
4. **Token Consumption**: Update components to use design tokens instead of hardcoded values
5. **Compound Components**: Expand compound component pattern
6. **Documentation**: Write blog posts about design token process

### Token Linting Checklist (pre-conversion)

- **Naming & Scope**: camelCase, no duplicate names across scopes
- **Token Types**: color, string, number, boolean
- **Value Validation**: Valid color formats, integers divisible by 4 for scales, proper decimal handling
- **Redundancy Detection**: Identical values across different names
- **Alias Validation**: Semantic tokens should only alias primitive tokens

## Current Focus

Design token pipeline is operational. Next steps involve integrating generated CSS tokens into the build and component system.

## Recent Changes

- Created `scripts/sd.config.js` — Style Dictionary configuration definitions
- Created `scripts/build-tokens.js` — runner that builds CSS for each theme
- Added `npm run build:tokens` script
- Generated `src/styles/light.css` (~580 lines, 596 CSS custom properties)
- Custom `ds/font-weight` transform converts Figma weight names to CSS numeric values
- `normaliseTokenData` preprocessor bridges Figma export inconsistencies (dimension scale mapping, letterSpacing.normal, paleTranslucent fallback)
- Dark mode auto-detects when `dark.tokens.json` files are added — zero config changes needed
- Fixed `ds/opacity` transform documentation to accurately describe 4 decimal place rounding

## Known Patterns & Preferences

- Use `clsx` for class composition
- CSS Modules are preferred over global styles for component-specific styling
- Inline `style` props with CSS custom properties for dynamic values
- Components are function declarations with named exports
- Sub-components attached as static properties (e.g., `Card.Section`)
