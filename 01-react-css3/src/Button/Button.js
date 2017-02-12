import React, { Component } from 'react'
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
    return (
      <button 
        className={`btn btn-primary ${this.state.depressed ? 'depressed' : ''}`} 
        onClick={this.onButtonClicked} 
        {...this.props}>
      </button>
    )
  }

}
