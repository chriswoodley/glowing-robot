module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
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
      ]
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
}
