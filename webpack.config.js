const webpack = require('webpack'),
  path = require('path'),
  loaders = require('./webpack/loaders'),
  plugins = require('./webpack/plugins'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    app: [
      './src/assets/js/app.js',
      './src/assets/css/styles.css'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/dist')
  },
  module: {
    rules: [
      loaders.JSLoader,
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: __dirname + "/webpack/postcss.config.js"
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    })
  ]
};