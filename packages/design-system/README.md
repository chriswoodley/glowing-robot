# Design System

## Global Stylesheet

Global stylesheet takes care of default styles for all HTML Elements. It lays the ground work for
Typography, Vertical Rhythm, Size, and Spacing. That is all handled using SASS and produces a `dist/styles.css`. That file should be imported into your application.

To override global styles using SASS in your application you should create a new SASS file and re-declare the global variables and then use that file. For example:

```scss
// styles/custom.scss

// Default variable overrides
$body-bg: #000;
$body-color: #111;

// Required
@import '../node_modules/@cw/design-system/src';
```
