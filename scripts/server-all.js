var path = require('path')
var express = require('express')
var webpack = require('webpack')
var serveStatic = require('serve-static')
var config = require(path.join(process.cwd(), 'webpack.config'))
var server = express()
var compiler = webpack(config)

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
  res.sendFile(path.join(__dirname, '../public/templates/app.html'))
})

server.listen(config.devServer.port, config.devServer.host , function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://' + config.devServer.host + ':' + config.devServer.port)
})
