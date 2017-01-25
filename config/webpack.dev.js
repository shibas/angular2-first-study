var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

var webpack = require('webpack');
var path = require('path');

//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: '#eval-source-map',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].js",
    publicPath: "http://localhost:3000/public/",
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3000,
    hot: true,
    inline: true
  }
});
