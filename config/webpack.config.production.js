// Webpack configuration for production

'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const paths = require('../config/paths')

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: paths.server
      }
    ]),
    new webpack.optimize.UglifyJsPlugin({
      debug: true,
      minimize: true,
      sourceMap: false,
      test: /(\.jsx?)$/
    })
  ],
  devtool: 'cheap-module-source-map'
};
