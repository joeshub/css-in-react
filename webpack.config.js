const fs = require('fs')
const path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var settings = require('./scripts/settings.js')
var devServer = settings.devServer

function isDirectory (dir) {
  return fs.lstatSync(dir).isDirectory()
}

const basePath = path.join(__dirname)
// console.log('basePath', basePath)

const projectPaths = fs.readdirSync(basePath).filter((projdDir) =>{
  if(projdDir.startsWith('0') && projdDir.indexOf('-') === 2) {
    return isDirectory(path.join(basePath, projdDir))
  }
})
// console.log('projectPaths', projectPaths)

// HMR using react-hot-loader 3 & webpack-hot-middleware
// https://github.com/gaearon/react-hot-loader/tree/next/docs
// https://github.com/gaearon/redux-devtools/commit/64f58b7010a1b2a71ad16716eb37ac1031f93915

var reactHotLoader = 'react-hot-loader/patch'
var webpackHotMiddleware = 'webpack-hot-middleware/client?reload=1'
var babelPolyfill = 'babel-polyfill'

var hotEntries = [reactHotLoader, webpackHotMiddleware]

const webpackEntries = projectPaths.reduce((allEntreis, currPath) => {
  if (fs.existsSync(path.join(basePath, currPath, './lessons/entry.js'))) {
    allEntreis[currPath.substr(3) + '/lessons'] = [...hotEntries, path.join(basePath, currPath, './lessons/entry.js')]
  }
  if (fs.existsSync(path.join(basePath, currPath, './workshop/entry.js'))) {
    allEntreis[currPath.substr(3) + '/workshop'] = [...hotEntries, path.join(basePath, currPath, './workshop/entry.js')]
  }
  if (fs.existsSync(path.join(basePath, currPath, './solution/entry.js'))) {
    allEntreis[currPath.substr(3) + '/solution'] = [...hotEntries, path.join(basePath, currPath, 'solution/entry.js')]
  }
  return allEntreis
}, {})
// console.log('webpackEntries', webpackEntries)

let htmlPlugins = Object.keys(webpackEntries).reduce((acc, cur, idx, arr) => {
  acc.push(new HtmlWebpackPlugin({
    inject: true, 
    template: 'public/templates/app.html', 
    filename: cur + '/index.html',
    chunks: [cur]
  }))
  return acc
}, [])
// console.log('htmlPlugins', htmlPlugins)

const webpackPlugins = [
  ...htmlPlugins,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

module.exports = {
  devServer: devServer,
  devtool: 'source-map',
  entry: webpackEntries,
  plugins: webpackPlugins,
  output: {
    path: path.join(__dirname),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: 'http://' + devServer.host  + ':' + devServer.port + '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /05-react-css-modules\/.*\.css$/,
        use: ['style-loader','css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]']
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
        exclude: /05-react-css-modules/,
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  }
}
