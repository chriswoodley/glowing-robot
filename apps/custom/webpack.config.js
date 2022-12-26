const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common');
const developmentConfig = require('./webpack.config.development');
const productionConfig = require('./webpack.config.production');

module.exports = (env, args) => {
  switch(args.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}