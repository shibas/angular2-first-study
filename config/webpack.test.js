var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

var webpack = require('webpack');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
  devtool: '#inline-source-map',
  entry: {},
  output: {},

  module: {
    loaders: [
      {
        test: /\.ts$/,
        enforce: 'post',
        include: path.resolve('src'),
        loader: 'istanbul-instrumenter-loader',
        exclude: [/\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin({filename: 'css/[name].[hash].css', disable: true})
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
