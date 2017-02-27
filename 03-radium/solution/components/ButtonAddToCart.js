import React, { Component, PropTypes } from 'react'
import { Button } from './index'
import Radium from 'radium'

const customStyles = {
  btn: { 
    minWidth: '110px' 
  }
}

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
