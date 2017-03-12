import React, { Component } from 'react'
import Styletron from 'styletron-client'
import { StyletronProvider } from 'styletron-react'
import pkg from './package.json'
import { Button } from './Button/Button'

const styleSheet = document.createElement('style')
document.head.appendChild(styleSheet)
const styletron = new Styletron([ styleSheet ])

export default class App extends Component {
  render () {
    return (
      <StyletronProvider styletron={ styletron }>
        <main>
          <p>{pkg.description}</p>
          <Button>Button</Button>
        </main>
      </StyletronProvider>
    )
  }
}
