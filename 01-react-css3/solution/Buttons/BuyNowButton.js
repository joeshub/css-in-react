import React, { Component } from 'react'
import { Button } from './index'

export class BuyNowButton extends Component {

  state = { 
    depressed: false,
    buttonText: 'Buy Now'
  }

  onButtonClicked = (e) => {
    this.setState({
      buttonText: 'Confirmed',
      depressed: true,
      disabled: true
    })
  }

  render () {
    const { buttonText, depressed, disabled } = this.state
    const { classNames, ...otherProps } = this.props

    return (
      <Button 
        classNames={ classNames } 
        onClick={ this.onButtonClicked }
        depressed={ depressed }
        disabled={ disabled }
        { ...otherProps }
      >
        { buttonText }
      </Button>
    )
    
  }
}
