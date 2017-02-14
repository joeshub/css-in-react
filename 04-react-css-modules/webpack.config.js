var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var devConfig = {
  host: '0.0.0.0',
  port: '3333'
}

module.exports = {
  devConfig: devConfig,
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/App'
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    publicPath: 'http://' + devConfig.host  + ':' + devConfig.port + '/',
  },
  plugins: [
    new HtmlWebpackPlugin({inject: true, template: '../assets/templates/app.html'}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
