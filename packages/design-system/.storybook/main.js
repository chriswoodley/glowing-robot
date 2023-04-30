const path = require('path');

// TODO: Migrate to using separate docs and story files
// See https://storybook.js.org/docs/react/writing-docs/mdx#setup-custom-documentation

module.exports = {
  "stories": ['../src/**/*.mdx', '../src/**/*.stories.@(js)'],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async (config, {
    configType
  }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    // remove svg from file loader
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test && rule.test.toString().includes('svg')) {
        const test = rule.test.toString().replace('svg|', '').replace(/\//g, '');
        return {
          ...rule,
          test: new RegExp(test)
        };
      } else {
        return rule;
      }
    });

    // For our Icons
    config.module.rules.push({
      test: /\.svg$/i,
      include: path.resolve(__dirname, '../src/icons/'),
      use: [{
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'svg[contenthash:6]'
        }
      }]
    });

    // For general svg imports
    config.module.rules.push({
      test: /\.svg$/,
      exclude: path.resolve(__dirname, '../src/icons/'),
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[path][name][ext]'
      }
    });

    // remove storybook CSS Loader config
    config.module.rules = config.module.rules.filter(rule => rule.test && !rule.test.toString().includes('css'));

    // Use Sass and CSS
    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      exclude: /_export.(sa|sc|c)ss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }]
    });

    // CSS Modules for exports
    config.module.rules.push({
      test: /_export.(sa|sc|c)ss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local'
          }
        }
      }, {
        loader: 'sass-loader'
      }]
    });

    // Alias'
    config.resolve.alias = {
      atoms: path.resolve(__dirname, "../src/atoms/"),
      molecules: path.resolve(__dirname, "../src/molecules/"),
      organisms: path.resolve(__dirname, "../src/organisms/"),
      templates: path.resolve(__dirname, "../src/templates/"),
      styles: path.resolve(__dirname, "../src/styles/"),
      utils: path.resolve(__dirname, "../src/utils/"),
      hooks: path.resolve(__dirname, "../src/hooks/"),
      icons: path.resolve(__dirname, "../src/icons/")
    };
    config.stats = {
      ...config.stats,
      loggingDebug: ["sass-loader"]
    };

    // Return the altered config
    return config;
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  }
};