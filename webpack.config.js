const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const settings = require('./scripts/settings.js')

const devServer = settings.devServer
const basePath = path.join(__dirname)
const cssModulesPath = path.resolve(__dirname, '05-react-css-modules')

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
  if (fs.existsSync(path.join(basePath, currPath, './lessons/entry.js'))) {
    allEntreis[currPath.substr(3) + '/lessons'] = [ ...hotEntries, path.join(basePath, currPath, './lessons/entry.js') ]
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
    template: 'templates/app.ejs', 
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

module.exports = {
  devServer: devServer,
  devtool: 'cheap-module-eval-source-map',
  entry: webpackEntries,
  plugins: webpackPlugins,
  output: {
    path: path.join(__dirname),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/',
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
        use: [
          'style-loader',
          'css-loader?sourceMap=1&importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]', 
          'postcss-loader'
        ]
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
