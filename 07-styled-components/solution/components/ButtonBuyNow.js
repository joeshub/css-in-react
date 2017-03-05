import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Button } from './index'

const StyledButtonBuyNow = styled(Button)`
  background-color: ${props => props.disabled ? '#bebebe' : '#ec4800'};
  width: 110px;
  &:hover {
    background-color: #f98d00;
  }
`

export class ButtonBuyNow extends Component {

  state = {
    depressed: false,
    disabled: false,
    buttonText: 'Buy Now'
  }

  static propTypes = {
    onClick: PropTypes.func
  }

  onButtonClicked = () => {
    this.props.onClick && this.props.onClick()
    this.setState({
      buttonText: 'Confirmed',
      depressed: true,
      disabled: true
    })
  }

  render () {
    const { depressed, disabled, buttonText } = this.state
    const { onClick, ...otherProps } = this.props

    return (
      <StyledButtonBuyNow 
        depressed={ depressed }
        disabled={ disabled }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      >
        { buttonText }
      </StyledButtonBuyNow>
    )
    
  }
}
