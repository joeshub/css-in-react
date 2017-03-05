import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Button } from './index'

const customStyles = {
  backgroundColor: '#ec4800',
  width: '110px',
  ':hover': {
    backgroundColor: '#f98d00',
  }
}

export class ButtonBuyNow extends Component {

  state = {
    depressed: false,
    buttonText: 'Buy Now'
  }

  static propTypes = {
    onClick: PropTypes.func
  }

  onButtonClicked = () => {
    this.props.onClick && this.props.onClick()
    this.setState({
      buttonText: 'Confirmed',
      depressed: true
    })
  }

  render () {
    const { depressed, buttonText } = this.state
    const { onClick, ...otherProps } = this.props

    return (
      <Button 
        customStyles={ customStyles }
        depressed={ depressed }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      >
        { buttonText }
      </Button>
    )
    
  }
}
