import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Button } from './index'
import { buttonBuyNow } from '../css-modules'

let styles = { ...styles, ...buttonBuyNow }

@CSSModules(styles, { allowMultiple: true })
export class ButtonBuyNow extends Component {

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
      depressed: true
    })
  }

  render () {
    const { depressed, buttonText } = this.state
    const { onClick, ...otherProps } = this.props

    return (
      <Button 
        classNames={ styles['button_buy_now'] }
        depressed={ depressed }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      >
        { buttonText }
      </Button>
    )
    
  }
}
