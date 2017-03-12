var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var settings = require('../../scripts/settings.js')
var devServer = settings.devServer

console.log(path.join(__dirname))

module.exports = {
  devServer: devServer,
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=1',
    'babel-polyfill',
    './entry'
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: '../../templates/server.ejs' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader','css-loader' ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  }
}
