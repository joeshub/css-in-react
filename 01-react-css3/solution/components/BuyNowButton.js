import React, { Component } from 'react'
import { Button } from './index'

export class BuyNowButton extends Component {

  state = { 
    depressed: false,
    buttonText: 'Buy Now'
  }

  onButtonClicked = () => {
    this.props.onClick()
    this.setState({
      buttonText: 'Confirmed',
      depressed: true,
      disabled: true
    })
  }

  render () {
    const { buttonText, depressed, disabled } = this.state
    const { classNames, onClick, ...otherProps } = this.props

    return (
      <Button 
        classNames={ classNames } 
        depressed={ depressed }
        disabled={ disabled }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      >
        { buttonText }
      </Button>
    )
    
  }
}
