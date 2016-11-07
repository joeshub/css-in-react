var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ],
  module: {
    loaders: [
      { test: /\.css$/,
        loader: DEBUG ? "style!css" : ExtractTextPlugin.extract("style", "css")
      }
    ]
  }
};
