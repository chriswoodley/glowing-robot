module.exports = {
  plugins: [
    "postcss-preset-env",
    require('postcss-sort-media-queries')({
      sort: 'mobile-first', // default value
    }),
  ],
};
