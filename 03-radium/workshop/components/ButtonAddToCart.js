import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Button } from './index'

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
