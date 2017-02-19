var path = require('path')
var express = require('express')
var webpack = require('webpack')
var Dashboard = require('webpack-dashboard')
var DashboardPlugin = require('webpack-dashboard/plugin')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require(path.join(process.cwd(), 'webpack.config'))

var app = express()
var compiler = webpack(config)
var dashboard = new Dashboard()

compiler.apply(new DashboardPlugin(dashboard.setData))

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/templates/app.html'))
})

app.listen(config.devServer.port, config.devServer.host , function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://' + config.devServer.host + ':' + config.devServer.port)
})
