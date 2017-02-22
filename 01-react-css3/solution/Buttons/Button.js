import React, { Component } from 'react'
import classnames from 'classnames'
import './button.css'

// TODO Should take initial state depressed or not

export class Button extends Component {

  state = { depressed: false }

  onButtonClicked = () => {
    const { onClick } = this.props
    onClick(this.state.depressed)
    this.setState({
      depressed: !this.state.depressed
    })
  }

  render () {
    const classNameProps = this.props.classNames
    const buttonClassNames = classnames('btn', classNameProps, {
      'depressed': this.state.depressed,
    })
    return (
      <button 
        className={buttonClassNames} 
        onClick={this.onButtonClicked}>
        {this.props.children}
      </button>
    )
  }
}
