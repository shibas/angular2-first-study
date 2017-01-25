var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');
var path = require('path');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: '#source-map',
  output: {
    path: helpers.root("public/dist"),
    filename: "js/[name].[hash].js",
    publicPath: "/",
    chunkFilename: '[id].[hash].chunk.js'
  },
  plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({sourceMap: true, mangle: { keep_fnames: true }}),
      new CopyWebpackPlugin([{
        from: helpers.root('public/dist')
      }]),
      new ExtractTextPlugin('css/[name].[hash].css'),
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
