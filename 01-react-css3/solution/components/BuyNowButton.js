import React, { Component, PropTypes } from 'react'
import { Button } from './index'
import '../../../public/workshop/css/buy-now-button.css'

export class BuyNowButton extends Component {

  state = { 
    depressed: false,
    buttonText: 'Buy Now'
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired
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
    const { onClick, ...otherProps } = this.props

    return (
      <Button 
        classNames="buy_now_button"
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
