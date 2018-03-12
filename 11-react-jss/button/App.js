import React, { Component } from 'react'
import pkg from './package.json'
import Button from './Button'

export default class App extends Component {

  state = {
    depressed: false
  }

  onButtonClicked = () => this.setState({
    depressed: !this.state.depressed
  })

  render () {
    const { depressed } = this.state

    return (
      <main>
        <p>{pkg.description}</p>
        <Button
          onClick={ this.onButtonClicked }
          depressed={ depressed }
        >Button</Button>
      </main>
    )
  }
}
