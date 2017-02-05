var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var cssNext = require('postcss-cssnext')
var atImport = require('postcss-import')

module.exports = {
  entry: ['babel-polyfill','./src/entry.js'],
  output: {
    path: path.join(__dirname + '/dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({inject: true, template: 'templates/dist.html'}),
    new ExtractTextPlugin('bundle.css', {allChunks: true}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&minimize!postcss')
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file?name=[path][name].[hash].[ext]']
      }, {
        test: /\.woff2?$/,
        loader: 'url?limit=6500000&mimetype=application/font-woff&name=dist/fonts/[name].[ext]'
      }
    ]
  },
  postcss: [
    atImport(),
    cssNext({
      browsers: ['ff >= 20', 'ie >= 9', 'safari >= 5.1', 'opera >= 12', 'chrome >=20'],
      compress: true
    })
  ]
}
