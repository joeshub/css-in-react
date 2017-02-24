import React, { Component } from 'react'
import classnames from 'classnames'
import { Button } from './index'
import '../../../public/workshop/css/button-icons.css'

export class AddToCartButton extends Component {

  state = { 
    depressed: false,
    buttonText: 'Add'
  }

  onButtonClicked = (e) => {
    this.props.onClick(!this.state.depressed)
    this.setState({
      buttonText: this.state.depressed ? 'Add' : 'Remove',
      depressed: !this.state.depressed
    })
  }

  render () {
    const { buttonText, depressed } = this.state
    const { classNames, onClick, ...otherProps } = this.props
    const buttonClassNames = classnames('icon icon-add', classNames)
    
    return (
      <Button 
        classNames={ buttonClassNames } 
        depressed={ depressed }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      >
        { buttonText }
      </Button>
    )
    
  }
}
