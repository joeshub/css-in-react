var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

module.exports = {
  devtool: 'source-map',
  entry: "./src/entry.js",
  output: {
    path: __dirname + '/dist',
    publicPath: DEBUG ? 'http://localhost:3333/' : '',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(scss|css)$/,
        loader: DEBUG ?
          "style!css?sourceMap!postcss!sass" :
          ExtractTextPlugin.extract(
            "style",
            "css?sourceMap&minimize!postcss!sass"
          )
      },{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file?name=[path][name].[hash].[ext]']
      },{
        test: /\.woff2?$/,
        loader: 'url?limit=6500000&mimetype=application/font-woff&name=dist/fonts/[name].[ext]'
      },
    ]
  },
  postcss: [
    autoprefixer()
  ],
  plugins: [
    new HtmlWebpackPlugin({title: 'images, fonts, and paths', template: 'index.ejs'}),
    new ExtractTextPlugin("bundle.css", {allChunks: true})
  ]
};
