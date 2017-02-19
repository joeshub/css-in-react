var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var settings = require('../../assets/scripts/settings.js')
var devServer = settings.devServer

module.exports = {
  devServer: devServer,
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './App'
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    publicPath: 'http://' + devServer.host  + ':' + devServer.port + '/',
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: '../../assets/templates/app.html' }),
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
        use: ['style-loader','css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]']
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  }
}
