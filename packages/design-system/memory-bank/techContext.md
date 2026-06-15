# Technical Context: @cw/design-system

## Technology Stack

| Technology       | Version  | Purpose                               |
| ---------------- | -------- | ------------------------------------- |
| React            | ^19.2.3  | UI component library                  |
| Vite             | ^7.3.0   | Build tool (library mode)             |
| Storybook        | ^10.4.1  | Component development & documentation |
| Vitest           | ^4.0.16  | Test runner                           |
| Playwright       | ^1.57.0  | Browser provider for testing          |
| Sass             | ^1.97.1  | CSS preprocessor                      |
| PostCSS          | ^8.5.6   | CSS post-processing                   |
| Style Dictionary | ^5.3.3   | Design token transformation           |
| ESLint           | ^10.0.0  | JavaScript linting                    |
| Stylelint        | ^16.26.1 | SCSS linting                          |
| Prettier         | 3.7.4    | Code formatting                       |
| Chromatic        | ^5.2.1   | Visual regression testing             |

## Dependencies

### Peer Dependencies

- `react`: ^19.2.3
- `react-dom`: ^19.2.3

### Runtime Dependencies

- `clsx`: ^2.1.1
- `lodash`: ^4.17.21

## Development Setup

### Node Version

- Required: >=24.16.0
- Managed via `.node-version` file

### Key Scripts

| Command                   | Description                             |
| ------------------------- | --------------------------------------- |
| `npm run storybook`       | Start Storybook dev server on port 6006 |
| `npm run build-storybook` | Build static Storybook site             |
| `npm run test-storybook`  | Run Storybook tests via Vitest          |
| `npm run build`           | Build library (ESM + CJS + CSS)         |
| `npm run lint:js`         | ESLint across all JS files              |
| `npm run lint:styles`     | Stylelint for SCSS files                |

### Vite Configuration

- **Plugins**: `@vitejs/plugin-react`
- **Resolve Aliases**:
  - `atoms` → `src/atoms/`
  - `molecules` → `src/molecules/`
  - `organisms` → `src/organisms/`
  - `styles` → `src/styles/`
  - `utils` → `src/utils/`
  - `hooks` → `src/hooks/`
  - `icons` → `src/icons/`
- **Library Entry**: `src/index.js`
- **Output**: ESM (`main.es.js`), CJS (`main.cjs.js`), CSS (`design-system.css`)

### Testing Setup

- **Runner**: Vitest with Storybook addon (`@storybook/addon-vitest`)
- **Browser**: Playwright (Chromium, headless)
- **Configuration**: Storybook stories serve as test cases
- **Setup File**: `.storybook/vitest.setup.js`

## Storybook Configuration

- **Framework**: `@storybook/react-vite` (StrictMode enabled)
- **Addons**:
  - `@storybook/addon-vitest` - Test integration
  - `@storybook/addon-a11y` - Accessibility checks
  - `@storybook/addon-docs` - Documentation/MDX
  - `@chromatic-com/storybook` - Chromatic visual testing
  - `@storybook/addon-mcp` - MCP server for AI tooling
- **Story Location**: `../src/**/*.mdx`, `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`

## Design Tokens

- **Format**: DTCG (Design Tokens Community Group) JSON format
- **Location**: `src/tokens/primitive/light.tokens.json`
- **Categories**: color, font, lineHeight, letterSpacing, opacity, breakpoint, zindex, timing, radius, duration, dimension
- **Figma Integration**: Each token includes `com.figma.variableId` and `com.figma.scopes` extensions
- **Planned**: Style Dictionary scripts for token transformation; dark mode tokens

## Build Output

- **`dist/main.es.js`**: ESM module bundle
- **`dist/main.cjs.js`**: CommonJS module bundle
- **`dist/design-system.css`**: Compiled global stylesheet
- **`dist/`**: Preserved module structure for tree-shaking

## Key Constraints

1. Node >=24.16.0 required
2. Named exports only (no default exports)
3. Function declarations preferred over arrow functions for components
4. CSS Modules for component-specific styles
5. kebab-case for all CSS-related naming
6. camelCase for JS variables and Style Dictionary token names
7. Storybook stories located alongside components
