var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

module.exports = {
  devtool: 'source-map',
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin("bundle.css", {allChunks: true})
  ],
  module: {
    loaders: [
      {
        test: /\.(scss|css)$/,
        loader: DEBUG ? "style!css?sourceMap!sass?sourceMap" : ExtractTextPlugin.extract("style", "css?sourceMap!sass?sourceMap")
      }
    ]
  }
};
