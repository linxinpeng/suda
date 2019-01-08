const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractHTML = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: true,
  template: path.join(__dirname, 'public/index.html'),
  chunks: ["common", "main"],
  chunksSortMode: function (chunk1, chunk2) {
    var order = ["common", 'main'];
    var order1 = order.indexOf(chunk1.names[0]);
    var order2 = order.indexOf(chunk2.names[0]);
    return order1 - order2;
  },
});
const config = {
  entry: ['@babel/polyfill', path.join(__dirname, 'src/main.js')],
  output: {
    filename: "[name].js?v=[hash]",
    chunkFilename: "[name].js?v=[hash]",
    publicPath: "/" 
  },
  optimization: {
    minimize: true,
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        common: {
          test: /node_modules/,
          chunks: "initial",
          name: "common",
          priority: 10,
          enforce: true
        }
      }
    },
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
  mode: 'production',
  plugins: [
    extractHTML,
    new MiniCssExtractPlugin({
      filename: '[name].css?v=[hash]',
    }),
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
          loader: "babel-loader",
        }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ],
      },
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader", // compiles Sass to CSS
          }]
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