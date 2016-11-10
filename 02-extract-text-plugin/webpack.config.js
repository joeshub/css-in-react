var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/,
        loader: DEBUG ? "style!css" : ExtractTextPlugin.extract("style", "css")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ]
};
