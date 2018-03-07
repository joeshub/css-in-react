var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var StylablePlugin = require('stylable-integration/webpack-plugin')

module.exports = {
  entry: [ 'babel-polyfill','./entry.js' ],
  output: {
    path: path.join(__dirname + '/build'),
    filename: 'app.js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: '../../templates/plain.ejs' }),
    // new ExtractTextPlugin({ filename: 'button.css', disable: false, allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new StylablePlugin({
      injectBundleCss: false,
      nsDelimiter: 'x',
      filename: '[name].css',
    }),
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
        test: /\.json$/,
        use: 'json-loader'
      },
      StylablePlugin.rule(),
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}
