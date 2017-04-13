import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from './index'
import '../../../public/css/button-add-to-cart.css'

export class ButtonAddToCart extends Component {

  state = {
    depressed: false,
    buttonText: 'Add'
  }

  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  }

  onButtonClicked = () => {
    this.props.onClick(!this.state.depressed)
    this.setState({
      buttonText: this.state.depressed ? 'Add' : 'In Cart',
      depressed: !this.state.depressed
    })
  }

  render () {
    const { depressed, buttonText } = this.state
    const { disabled, onClick, ...otherProps } = this.props
    
    return (
      <Button 
        icon="add"
        classNames="button_add_to_cart"
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
