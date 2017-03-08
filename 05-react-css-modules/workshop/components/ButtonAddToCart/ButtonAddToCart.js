import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Button } from '../index'
import styles from './button-add-to-cart.css'

@CSSModules(styles, { allowMultiple: true })
export class ButtonAddToCart extends Component {

  state = {
    depressed: false,
    buttonText: 'Add'
  }

  static propTypes = {
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
    const { onClick, ...otherProps } = this.props
    
    return (
      <Button 
        icon="add"
        classNames={ styles.button_add_to_cart }
        depressed={ depressed }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      >
        { buttonText }
      </Button>
    )
    
  }
}
