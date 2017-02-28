
// Webpack configuration for development

'use strict';

const path = require('path')
const webpack = require('webpack')

const paths = require('./paths')

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: paths.assets,
    hot: true,
    publicPath: '/',
    stats: {  // @see https://webpack.js.org/configuration/stats/
      assets: true,
      errors: true,
      errorDetails: true,
      timings: true,
      version: false,
      warnings: true
    },
    watchContentBase: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
