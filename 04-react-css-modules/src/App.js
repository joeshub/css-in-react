import React, { Component } from 'react'
import { render } from 'react-dom'
import pkg from '../package'
import { Button } from './Button/Button'

class App extends Component {
  render () {
    return (
      <main>
        <p>{pkg.description}</p>
        <Button>Button</Button>
      </main>
    )
  }
}

render (<App />, document.getElementById('app'))
