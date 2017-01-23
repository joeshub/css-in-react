var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cssNext = require('postcss-cssnext');
var atImport = require("postcss-import")
var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

module.exports = {
  devtool: 'source-map',
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: DEBUG ?
          "style!css?sourceMap!postcss" :
          ExtractTextPlugin.extract(
            "style",
            "css?sourceMap&minimize!postcss"
          )
      }
    ]
  },
  postcss: [
    atImport(),
    cssNext({
      browsers: ['ff >= 20', 'ie >= 9', 'safari >= 5.1', 'opera >= 12', 'chrome >=20'],
      compress: true
    })
  ],
  plugins: [
    new HtmlWebpackPlugin({template: 'index.ejs'}),
    new ExtractTextPlugin("bundle.css", {allChunks: true})
  ]
};
