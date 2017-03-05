import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Button } from './index'

// insert custom button styles here
const customStyles = {
  btn: {}
}

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
        // customStyles={ customStyles }
        // depressed={ depressed }
        // disabled={ disabled }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      >
        { buttonText }
      </Button>
    )
    
  }
}
