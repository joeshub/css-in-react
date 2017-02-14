import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './button.css'
import classnames from 'classnames'

@CSSModules(styles, {allowMultiple: true})
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
    const buttonClassNames = classnames('btn', 'btn-primary', {
      'depressed': this.state.depressed
    })
    return (
      <button
        styleName={buttonClassNames}
        onClick={this.onButtonClicked}
      >
        {this.props.children}
      </button>
    )
  }

}
