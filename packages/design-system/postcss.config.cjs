const postcssPresetEnv = require('postcss-preset-env');
const postcssSortMediaQueries = require('postcss-sort-media-queries');

module.exports = {
  plugins: [
    postcssPresetEnv({
      features: {
        'cascade-layers': false
      }
    }),
    postcssSortMediaQueries({
      sort: "mobile-first"
    })
  ]
}

