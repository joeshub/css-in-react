const path = require('path')
const fs = require('fs-extra')
const express = require('express')
const webpack = require('webpack')
const serveStatic = require('serve-static')
const config = require(path.join(process.cwd(), 'webpack.config'))
const server = express()
const compiler = webpack(config)

const publicStylesPath = path.resolve(__dirname, '../public/workshop/css')
const cssModulesPath = path.resolve(__dirname, '../05-react-css-modules/css')

try {
  fs.copySync(publicStylesPath, cssModulesPath)
  console.log('CSS files copied from ' + publicStylesPath + ' to ' + cssModulesPath)
} catch (err) {
  console.error(err)
}

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
  res.sendFile(path.join(__dirname, '../templates/app.ejs'))
})

server.listen(config.devServer.port, config.devServer.host , function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://' + config.devServer.host + ':' + config.devServer.port)
})
