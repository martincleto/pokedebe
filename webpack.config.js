'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const paths = require('./config/paths')
const env = process.env.NODE_ENV || 'development'

let baseConfig = {
  context: paths.src,
  entry: {
    app: './index.js',
  },
  output: {
    filename: '[name].bundle.js?[hash]',
    path: paths.dist,
    publicPath: '/'
  },
  module: {
     rules: [
       {
         test: /\.(jsx?)$/,
         loader: 'babel-loader',
         exclude: [
           /node_modules/,
           path.join(paths.src, '/**/*.spec.js')
         ]
      },
      {
       test: /\.scss$/,
       loader: ExtractTextPlugin.extract(`css-loader?sourceMap!postcss-loader!sass-loader?sourceMap&includePaths=${paths.assets}`)
      },
      {
       test: /\.css$/,
       loader: 'css-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/styles.css?[hash]',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: path.join(paths.src, 'index.html')
    })
  ],
  resolve: {
    alias: {
      AppContainer: path.join(paths.src, 'containers/AppContainer.jsx'),
      Components: path.join(paths.src, 'components'),
      Containers: path.join(paths.src, 'containers'),
      Core: path.join(paths.src, 'core'),
      stylesheets: path.join(paths.src, 'stylesheets')
    },
    extensions: [
      '.js',
      '.jsx'
    ],
    modules: [
      paths.src,
      'node_modules'
    ]
  }
};

let envConfig = require(`./config/webpack.config.${env}.js`)

module.exports = merge(baseConfig, envConfig)
