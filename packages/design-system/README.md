# Design System

## Theme

The theme is a plain old object that describes the component's variation styles. Each variation can have visual state styles. The styles included do not affect the box model, for example:

```javascript
const theme = {
  button: {
    standard: {
      default: {
        fontFamily: sassVariable.fontFamily,
        fontStyle: '',
        fontWeight: '',
        color: '',
        background: '', 
        border: '', 
        borderRadius: '', 
        borderImage: '',
        boxShadow: '',
        opacity: '',
        listStyle: '',
        textAlign: '',
        whitespace: '',
        textTransform: '',
        textDecoration: '',
        textShadow: ''
      },
      focus: {},
      hover: {},
      disabled: {},
      active: {},
      // ...
    }
  }
}
```

The theme overrides any visual styles the Global Stylesheet provides by default.

### Global Stylesheet

Global stylesheet takes care of default styles for all HTML Elements. It lays the ground work for
Typography, Vertical Rhythm, Size, and Spacing. That is all handled using SASS and produces a `dist/styles.css`. That file should be imported into your application.

There are cases where you may need to override these global styles. For example you may want to update the global focus ring color. You can import your own global stylesheet, use your favorite CSS-in-JS global styles function, or lastly, import the design system SASS file with your own SASS variable overrides (provided your application supports SASS). I **strongly recommend** to not override any typography (font family is fine) or box model related styles. Doing so may break visual continuity.

To override global styles using SASS in your application you should create a new SASS file and re-declare the global variables and then use that file. For example:

```scss
// styles/custom.scss

// Default variable overrides
$body-bg: #000;
$body-color: #111;

// Required
@import "../node_modules/@cw/design-system/src";
```

### Component Styles

The Design System components is CSS-in-JS agnostic. Bring your own library. This is made possible because all Design System Components will accept a `theme` property. The intent of this property is to override variation styles with your own theme object.

Variants that affect the Box Model like "size" for instance will be built into the component and handled through component properties. The component will then apply suitable styles from the design system ensuring scale and vertical rhythm continuity.
