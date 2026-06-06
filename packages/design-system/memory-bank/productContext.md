# Product Context: @cw/design-system

## Why This Project Exists

This design system exists to create a single source of truth for UI components, patterns, and styles across all projects within the `@cw` ecosystem. By centralizing design decisions into a reusable library, we ensure:

- **Visual Consistency**: All applications share the same base components, typography, spacing, and color palettes
- **Development Efficiency**: Teams don't rebuild common UI patterns from scratch
- **Design-Dev Alignment**: Design tokens exported from Figma bridge the gap between designers and developers

## Problems It Solves

1. **Inconsistent UI**: Without a design system, each project evolves its own patterns, leading to fragmentation
2. **Duplicate Effort**: Common components (cards, overlays, navigation) are rebuilt multiple times
3. **Styling Drift**: Global styles (typography, vertical rhythm) need a single authoritative source
4. **Design Handoff**: Figma variable exports (via Style Dictionary) provide a direct pipeline from design to code

## How It Should Work

- **Component Development**: Components are built in isolation via Storybook, following Atomic Design hierarchy
- **Styles**: A global Sass stylesheet provides baseline HTML element styling (reset + typography + spacing)
- **Tokens**: Design tokens (colors, spacing, typography) are defined in DTCG JSON format, exported from Figma, and processed by Style Dictionary
- **Consumption**: Applications import `@cw/design-system` for components and `@cw/design-system/main.css` for global styles

## User Experience Goals

- **For Developers**: Simple, predictable API with named exports; components accept standard HTML attributes where appropriate
- **For Designers**: Token names and component variations align with Figma component library
- **For End Users**: Accessible, performant, and visually consistent interfaces
