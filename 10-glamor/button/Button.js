import React, { Component } from 'react'
import { css } from 'glamor'

export class Button extends Component {

  state = {
    depressed: false
  }

  static defaultProps = {
    bgColor: '#ec4800',
    bgHover: '#f98d00',
    bgDepressed: '#bebebe'
  }

  onButtonClicked = () => this.setState({
    depressed: !this.state.depressed
  })

  render () {
    const { depressed } = this.state
    const { bgColor, bgHover, bgDepressed, ...otherProps } = this.props

    let className = css({
      display: 'inline-block',
      outline: 'none',
      textAlign: 'center',
      font: 'bold 32px helvetica',
      padding: '20px 40px',
      border: 0,
      cursor: 'pointer',
      color: '#fff',
      transition: 'background-color 300ms',
      transform: 'translateZ(0)',
      backfaceVisibility: 'visible',
      backgroundColor: depressed ? bgDepressed : bgColor,
      ':hover': {
        backgroundColor: depressed ? bgDepressed : bgHover
      }
    })

    return (
      <button
        className={ className }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      />
    )
  }
}
