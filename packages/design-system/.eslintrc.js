module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:mdx/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: "*.js",
      extends: [
        "plugin:jsx-a11y/recommended",
      ],
      rules: {
        semi: [ "error", "always" ],
        "semi-spacing": [ "error", { "before": false, "after": true } ],
        "arrow-parens": [ "error", "always" ],
        "arrow-spacing": "error",
        "space-in-parens": [ "error", "never" ],
        "space-before-function-paren": [ "error", "never" ],
        "padded-blocks": [ "error", "never" ],
        "no-trailing-spaces": "error",
        "array-bracket-spacing": [ "error", "always" ],
        "object-curly-spacing": [ "error", "always" ],
        "eol-last": [ "error", "always" ]
      }
    },
    {
      files: '*.mdx',
      parser: 'eslint-mdx',
      "settings": {
        "mdx/code-blocks": true,
        // optional, if you want to disable language mapper, set it to `false`
        // if you want to override the default language mapper inside, you can provide your own
        "mdx/language-mapper": {}
      }
    }
  ]
};
