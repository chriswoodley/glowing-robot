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
        { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
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
      icons: path.resolve(__dirname, "../src/icons/"),
    }

    config.stats = {
      ...config.stats,
      loggingDebug: ["sass-loader"],
    }

    // remove svg from file loader
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test.toString().includes('svg')) {
        const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
        return { ...rule, test: new RegExp(test) }
      } else {
        return rule
      }
    });

    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'svg[contenthash:6]'
          },
        }
      ]
    });

    // Return the altered config
    return config;
  },
}