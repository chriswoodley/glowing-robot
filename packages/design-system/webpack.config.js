const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  devtool: false,
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
    library: {
      name: 'designSystem',
      type: 'umd',
    },
    clean: true
  },
  resolve: {
    alias: {
      atoms: path.resolve(__dirname, "src/atoms/"),
      molecules: path.resolve(__dirname, "src/molecules/"),
      organisms: path.resolve(__dirname, "src/organisms/"),
      templates: path.resolve(__dirname, "src/templates/"),
      styles: path.resolve(__dirname, "src/styles/"),
      utils: path.resolve(__dirname, "src/utils"),
      hooks: path.resolve(__dirname, "src/hooks"),
      icons: path.resolve(__dirname, "src/icons/"),
    }
  },
  module: {
    rules: [
      {
        test: /\.(mjs|jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: "babel-loader",
          options: {
            envName: 'production',
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /_export.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /_export.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local'
              }
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'svg[contenthash:6]'
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new StylelintPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        }
      },
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'react',
    },
    'react-dom': {
      commonjs: 'ReactDOM',
      commonjs2: 'ReactDOM',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  }
};
