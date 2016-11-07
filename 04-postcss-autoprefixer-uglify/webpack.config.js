var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

module.exports = {
  devtool: 'source-map',
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin("bundle.css", {allChunks: true})
  ],
  module: {
    loaders: [
      {
        test: /\.(scss|css)$/,
        loader: DEBUG ? "style!css?sourceMap!postcss!sass?sourceMap" : ExtractTextPlugin.extract(
          "style",
          "css?sourceMap&minimize!postcss!sass?sourceMap")
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 4 versions'] })
  ]
};
