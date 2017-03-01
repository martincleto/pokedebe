// Webpack configuration for production

'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const paths = require('../config/paths')

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: paths.server
      },
      {
        from: path.join(__dirname, '../package.deploy.json'),
        to: path.build
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
