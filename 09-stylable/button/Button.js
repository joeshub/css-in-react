import React, { Component } from 'react'
import { stylable } from 'wix-react-tools'
import styles from './button.st.css'

@stylable(styles)
export class Button extends Component {

  state = { depressed: false }

  onButtonClicked = () => this.setState({
    depressed: !this.state.depressed
  })

  render () {
    const styleState = {
      depressed: this.state.depressed
    }

    return (
      <button
        style-state={ styleState }
        onClick={ this.onButtonClicked }>
        {this.props.children}
      </button>
    )
  }
}
