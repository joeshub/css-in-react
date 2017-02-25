import React, { Component, PropTypes } from 'react'
import { Button } from './index'
import '../../../public/workshop/css/button-buy-now.css'

export class ButtonBuyNow extends Component {

  state = {
    depressed: false,
    disabled: false,
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
    const { depressed, disabled, buttonText } = this.state
    const { onClick, ...otherProps } = this.props

    return (
      <Button 
        classNames="button_buy_now"
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
