const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const production = process.env.NODE_ENV === 'production'
const settings = require('./scripts/settings.js')
const devServer = settings.devServer
const basePath = path.join(__dirname)
const cssModulesPath = path.resolve(__dirname, '05-react-css-modules')

let cssModulesLoaders = [
  'style-loader',
  'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
  'postcss-loader'
]

if (production) {
  cssModulesLoaders = ExtractTextPlugin.extract([
    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss-loader'
  ])
}

function isDirectory (dir) {
  return fs.lstatSync(dir).isDirectory()
}

const projectPaths = fs.readdirSync(basePath).filter((projdDir) =>{
  if(projdDir.startsWith('0') && projdDir.indexOf('-') === 2) {
    return isDirectory(path.join(basePath, projdDir))
  }
})

// HMR using react-hot-loader 3 & webpack-hot-middleware
const reactHotLoader = 'react-hot-loader/patch'
const webpackHotMiddleware = 'webpack-hot-middleware/client?reload=1'
const babelPolyfill = 'babel-polyfill' // core-js ?

const hotEntries = [ babelPolyfill, reactHotLoader, webpackHotMiddleware ]

const webpackEntries = projectPaths.reduce((allEntreis, currPath) => {
  if (fs.existsSync(path.join(basePath, currPath, './button/entry.js'))) {
    allEntreis[currPath.substr(3) + '/button'] = [ ...hotEntries, path.join(basePath, currPath, './button/entry.js') ]
  }
  if (fs.existsSync(path.join(basePath, currPath, './workshop/entry.js'))) {
    allEntreis[currPath.substr(3) + '/workshop'] = [ ...hotEntries, path.join(basePath, currPath, './workshop/entry.js') ]
  }
  if (fs.existsSync(path.join(basePath, currPath, './solution/entry.js'))) {
    allEntreis[currPath.substr(3) + '/solution'] = [ ...hotEntries, path.join(basePath, currPath, 'solution/entry.js') ]
  }
  return allEntreis
}, {})

let htmlPlugins = Object.keys(webpackEntries).reduce((acc, cur, idx, arr) => {
  acc.push(new HtmlWebpackPlugin({
    inject: true, 
    template: cur.indexOf('button') !== -1 ? 'templates/server.ejs' : 'templates/plain.ejs', 
    title: cur,
    filename: cur + '/index.html',
    chunks: [ cur ]
  }))
  return acc
}, [])

const webpackPlugins = [
  ...htmlPlugins,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

if (production) {
  webpackPlugins.push(new ExtractTextPlugin('[name].css'))
}

module.exports = {
  devServer: devServer,
  devtool: 'cheap-module-eval-source-map',
  entry: webpackEntries,
  plugins: webpackPlugins,
  output: {
    path: path.join(__dirname),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      CSS3: path.resolve(__dirname, 'public/css')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 
          'react-hot-loader/webpack', 
          'babel-loader?cacheDirectory=true' 
        ]
      },
      {
        test: /\.s?css$/,
        include: [ cssModulesPath ],
        use: cssModulesLoaders
      },
      {
        test: /\.css$/,
        use: [ 
          'style-loader',
          'css-loader' 
        ],
        exclude: [ cssModulesPath ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [ 'file-loader?name=[path][name].[hash].[ext]' ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  }
}
