import React, { Component, PropTypes } from 'react'
import { Button } from './index'
import Radium from 'radium'

const customStyles = {
  btn: {
    backgroundColor: '#fff',
    color: '#000',
    boxShadow: '1px -1px 2px rgba(0, 0, 0, 0.2)',
    width: '110px',
    ':hover': {
      backgroundColor: '#000',
      color: '#fff'
    },
    depressed: {
      boxShadow: '1px -1px 2px rgba(0, 0, 0, 0)'
    },
    disabled: {
      cursor: 'auto',
      pointerEvents: 'none',
      color: '#848484',
      backgroundColor: '#bebebe',
      ':hover': {
        backgroundColor: '#bebebe'
      }
    }
  }
}

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
        customStyles={ customStyles }
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
