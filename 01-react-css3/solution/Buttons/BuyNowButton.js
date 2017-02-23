import React, { Component } from 'react'
import classnames from 'classnames'
import { Button } from './index'

export class BuyNowButton extends Component {

  state = { 
    depressed: false,
    buttonText: 'Buy Now'
  }

  onButtonClicked = (e) => {
    this.setState({
      buttonText: 'Confirmed',
      depressed: true
    })
  }

  render () {
    const { buttonText, depressed } = this.state
    const { classNames } = this.props
    const buttonClassNames = classnames(classNames)

    return (
      <Button 
        classNames={buttonClassNames} 
        onClick={this.onButtonClicked}
        depressed={depressed}>
        { buttonText }
      </Button>
    )
    
  }
}
