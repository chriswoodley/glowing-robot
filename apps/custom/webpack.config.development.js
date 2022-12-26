const path = require('path');
const { DefinePlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: "babel-loader",
          options: {
            envName: 'development',
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        // include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      },
    ]
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ]
};
