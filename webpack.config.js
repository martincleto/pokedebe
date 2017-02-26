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
    vendor: [
      'babel-polyfill'
    ]
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
         ],
        //  options: {
        //    plugins: ['transform-runtime'],
        //    presets: [
        //      ['es2015', {
        //        modules: false
        //      }],
        //      'react'
        //    ],
        //    env: {
        //      test: {
        //        plugins: ['transform-es2015-modules-commonjs'],
        //        presets: [
        //          'es2015',
        //          'react'
        //        ],
        //      }
        //    }
        //  }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
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
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
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
      Components: path.join(paths.src, 'components'),
      Config: path.join(paths.src, 'config'),
      Containers: path.join(paths.src, 'containers'),
      Stylesheets: path.join(paths.src, 'stylesheets')
    },
    extensions: [
      '.js',
      '.json',
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
