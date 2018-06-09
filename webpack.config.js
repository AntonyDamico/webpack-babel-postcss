const webpack = require('webpack'),
  path = require('path'),
  loaders = require('./webpack/loaders'),
  plugins = require('./webpack/plugins'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    app: [
      './src/js/app.js',
      './src/css/styles.css'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CssLoader
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    })
  ]
};