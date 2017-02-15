import React, { Component } from 'react'
import classnames from 'classnames'
import './button.css'

export class Button extends Component {

  state = {
    depressed:  false
  }

  onButtonClicked = () => {
    this.setState({
      depressed: !this.state.depressed
    })
  }

  render () {
    const buttonClassNames = classnames('btn', {
      'depressed': this.state.depressed
    })
    return (
      <button 
        className={buttonClassNames} 
        onClick={this.onButtonClicked} 
        {...this.props}>
      </button>
    )
  }

}
