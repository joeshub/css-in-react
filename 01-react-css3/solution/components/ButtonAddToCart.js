import React, { Component, PropTypes } from 'react'
import { Button } from './index'
import '../../../public/workshop/css/button-icons.css'
import '../../../public/workshop/css/button-add-to-cart.css'

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
      buttonText: this.state.depressed ? 'Add' : 'Remove',
      depressed: !this.state.depressed
    })
  }

  render () {
    const { depressed, buttonText } = this.state
    const { disabled, onClick, ...otherProps } = this.props
    
    return (
      <Button 
        classNames="icon icon-add button_add_to_cart"
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
