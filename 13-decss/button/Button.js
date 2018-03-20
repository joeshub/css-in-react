import React, { Component } from 'react'
import { Button as CSSButton } from './button.css'

export default class Button extends Component {

  onButtonClicked = () => {
    if(this.props.onClick) {
      this.props.onClick()
    }
  }

  render () {
    let { depressed } = this.props
    return (
      <CSSButton
        tag="button"
        depressed={ depressed }
        onClick={ this.onButtonClicked }
      >
        {this.props.children}
      </CSSButton>
    )
  }
}
