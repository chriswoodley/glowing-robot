const path = require('path');

module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, '../src/'),
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true, modules: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: true } }
      ],
    });

    config.resolve.alias = {
      atoms: path.resolve(__dirname, "../src/atoms/"),
      molecules: path.resolve(__dirname, "../src/molecules/"),
      organisms: path.resolve(__dirname, "../src/organisms/"),
      templates: path.resolve(__dirname, "../src/templates/"),
      styles: path.resolve(__dirname, "../src/styles/"),
      utils: path.resolve(__dirname, "../src/utils/"),
      hooks: path.resolve(__dirname, "../src/hooks/"),
    }

    config.stats = {
      ...config.stats,
      loggingDebug: ["sass-loader"],
    }

    // Return the altered config
    return config;
  },
}