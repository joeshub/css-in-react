import React, { Component } from 'react'
import pkg from './package.json'
import Button from './Button'

export default class App extends Component {
  state = { depressed: false }

  onClick = () => {
    this.setState({
      depressed: !this.state.depressed
    })
  }

  render () {
    let { depressed } = this.state
    return (
      <main>
        <p>{pkg.description}</p>
        <Button
          depressed={ depressed }
          onClick={ this.onClick }
        >
          Button
        </Button>
      </main>
    )
  }
}
