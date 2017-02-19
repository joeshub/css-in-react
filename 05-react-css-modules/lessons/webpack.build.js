var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill','./App.js'],
  output: {
    path: path.join(__dirname + '/build'),
    filename: 'app.js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: '../../assets/templates/app.html' }),
    new ExtractTextPlugin({ filename: 'app.css', disable: false, allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
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
        use: ExtractTextPlugin.extract({ 
          fallback: 'style-loader', 
          use: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  }
}
