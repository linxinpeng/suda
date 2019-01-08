const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const extractHTML = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: true,
  template: path.join(__dirname, 'public/index.html'),
});
const config = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: "[name].js?v=[hash]",
    chunkFilename: "[name].js?v=[hash]",
    publicPath: "/"
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    contentBase: path.resolve('public'),
    proxy: [{
      context: ['/api', '/zuul/api', '/ltimg/'],
      headers: { host: "www.lantusale.com" },
      target: 'http://www.lantusale.com/'
    }]
  },
  plugins: [
    extractHTML,
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
              sourceMap: true
          }
      }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
              loader: "css-loader",
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
            {
              loader: "style-loader"
            }, {
              loader: "css-loader", // translates CSS into CommonJS
            }, {
              loader: "sass-loader", // compiles Sass to CSS
            }
          ]
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-sprite-loader'
      // },
      {
        test: /\.(png|jpg|gif|woff|ttf|woff2|eot|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]',
          useRelativePath: true,
        }
      }
    ]
  },
};
module.exports = config;