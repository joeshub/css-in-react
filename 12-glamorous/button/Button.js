import React, { Component } from 'react'
import glamorous from 'glamorous'

const StyledButton = glamorous.button({
  display: 'inline-block',
  outline: 'none',
  textAlign: 'center',
  font: 'bold 32px helvetica',
  padding: '20px 40px',
  border: '0',
  cursor: 'pointer',
  color: '#fff',
  transition: 'all 300ms'
},({ depressed, bgDepressed, bgColor, bgHover }) => ({
  backgroundColor: depressed ? bgDepressed : bgColor,
  ':hover': {
    backgroundColor: depressed ? bgDepressed : bgHover
  }
}))


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

    return (
      <StyledButton
        depressed={ depressed }
        bgColor={ bgColor }
        bgDepressed={ bgDepressed }
        bgHover={ bgHover }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      />
    )
  }
}
