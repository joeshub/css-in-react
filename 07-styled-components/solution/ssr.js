import Express from 'express'
import React from 'react'
import { renderToString } from  'react-dom/server'
import styled, { styleSheet } from 'styled-components'
import StoreApp from './App'
const serveStatic = require('serve-static')
const path = require('path')

const app = new Express()
const port = 8080

app.use('/', serveStatic(path.join(__dirname, '../../public')))

app.get('*', (req, res) => {
  const componentHTML = renderToString(<StoreApp />)
  
  const css = styleSheet.getCSS()

  res.status(200).send(`
    <!doctype html>
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${componentHTML}
      </body>
  </html>`)
})

app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info(
      '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port
    )
  }
})