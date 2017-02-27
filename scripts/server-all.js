var path = require('path')
var express = require('express')
var webpack = require('webpack')
var serveStatic = require('serve-static')
var ncp = require('ncp').ncp
var config = require(path.join(process.cwd(), 'webpack.config'))
var server = express()
var compiler = webpack(config)

const publicStylesPath = path.resolve(__dirname, '../public/workshop/css')
const cssModulesPath = path.resolve(__dirname, '../05-react-css-modules/css')

ncp(publicStylesPath, cssModulesPath, function (err) {
  if(err) {
    return console.error(err)
  }
  console.log('Copdied css files')
})

server.use(require('webpack-dev-middleware')(compiler, { 
  publicPath: config.output.publicPath,
  stats: {
    chunks: false,
    children: false,
    modules: false,
    colors: true
  }
}))

server.use(require('webpack-hot-middleware')(compiler))

server.use('/', serveStatic(path.join(__dirname, '../public')))

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../templates/app.html'))
})

server.listen(config.devServer.port, config.devServer.host , function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://' + config.devServer.host + ':' + config.devServer.port)
})
