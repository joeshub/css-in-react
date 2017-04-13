import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { Button } from '../index'
import styles from './button-buy-now.css'

@CSSModules(styles, { allowMultiple: true })
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
        classNames={ styles.button_buy_now }
        depressed={ depressed }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      >
        { buttonText }
      </Button>
    )
    
  }
}
