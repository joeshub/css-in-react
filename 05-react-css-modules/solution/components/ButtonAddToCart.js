import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Button } from './index'
import { buttonAddToCart } from '../css-modules'

let styles = {}
Object.assign(styles, buttonAddToCart)

@CSSModules(styles, { allowMultiple: true })
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
        classNames={ styles['button_add_to_cart'] }
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
