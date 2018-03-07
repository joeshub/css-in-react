import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('button')`
  display: inline-block;
  outline: none;
  text-align: center;
  font: bold 32px helvetica;
  padding: 20px 40px;
  border: 0;
  cursor: pointer;
  color: #fff;
  transition: background-color 300ms;
  &:hover {
    background-color: ${props => props.depressed === true ? props.bgDepressed : props.bgHover};
  }
  background-color: ${props => props.depressed === true ? props.bgDepressed : props.bgColor };
  transform: translateZ(0);
  backface-visibility: visible;
`

export class Button extends Component {

  state = {
    depressed: false
  }

  static defaultProps = {
    bgColor: '#ec4800',
    bgHover: '#f98d00',
    bgDepressed: '#bebebe',
    style: {},
    onMouseMove: () => {}
  }

  onButtonClicked = () => this.setState({
    depressed: !this.state.depressed
  })

  render () {
    const { depressed } = this.state
    const { style, onMouseMove, bgColor, bgHover, bgDepressed, ...otherProps } = this.props

    return (
      <StyledButton
        onClick={ this.onButtonClicked }
        depressed={ depressed }
        bgColor={ bgColor }
        bgHover={ bgHover }
        bgDepressed={ bgDepressed }
        onMouseMove={ onMouseMove }
        style={ style }
        { ...otherProps }
      />
    )
  }
}
