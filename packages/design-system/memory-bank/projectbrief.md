# Project Brief: @cw/design-system

## Overview

A private React component library and design system (`@cw/design-system`) built with Atomic Design principles. Provides reusable UI components, hooks, utilities, and global stylesheets for consistent application development.

## Core Requirements

- **Component Library**: Build reusable React components following Atomic Design (atoms → molecules → organisms)
- **Design Tokens**: Implement design tokens via Style Dictionary, sourced from Figma variables (DTCG format)
- **Global Styles**: Provide a Sass-based global stylesheet covering typography, vertical rhythm, sizing, and spacing
- **Storybook**: Document and develop components in isolation with Storybook (v10)
- **Testing**: Storybook-integrated tests via Vitest + Playwright
- **Build**: Library-mode Vite build producing both ESM and CJS output
- **Linting**: ESLint for JS, Stylelint for SCSS

## Scope

- **In Scope**:
  - Atomic components (atoms, molecules, organisms)
  - Custom hooks and utility functions
  - Design tokens pipeline (Style Dictionary)
  - Global SCSS stylesheets
  - Storybook documentation and tests
  - Dual-module build (ESM + CJS)

- **Out of Scope**:
  - Application-specific logic
  - Server-side rendering setup (though components should support SSR)

## Target Consumers

- Internal projects within the `@cw` npm scope
- Applications needing consistent branding and UI patterns

## Repository

- **URL**: https://github.com/chriswoodley/glowing-robot.git
- **Branch**: master
