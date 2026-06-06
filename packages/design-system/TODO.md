3. Scripts to lint and convert figma variables
4. Style Dictionary script
5. Replace styles/ with newStyles/ (don't throw away scss code until newStyles are in place)
   - newStyles
     - reset css
     - generated css tokens
6. Go back and use tokens in components
7. Create and use design tokens for consistent styling
8. use compound component pattern
9. write about design tokens for the blog...take notes as you go along so i can refer to them later when writting the article.

## Linting pre-conversion checklist

1. **Naming & Scope**: camelCase, no duplicate names across scopes
2. **Token Types**: color, string, number, boolean. standard figma variable types.
3. **Value Validation**: valid values for each token type

- **Color**: named colors, hex, hsl, hsla, rgb, rgba, oklch
- **String**: depends on what it is, e.g. easing functions
- **Number**: scale numbers are integers divisible by 4, opacity and letter spacing are decimals, handle negative values appropriately.

4. **Redundant Tokens**: Detect identical values across different names and warn on duplicated definitions
5. **Token Aliases**: Detect semantic token aliases within semantic tokens. semantic tokens should only alias primitive tokens.
