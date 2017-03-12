import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './button.css'

@CSSModules(styles, { allowMultiple: true })
export class Button extends Component {

  state = { depressed: false }

  onButtonClicked = () => this.setState({
    depressed: !this.state.depressed
  })

  render () {
    return (
      <button
        styleName="btn"
        className={ this.state.depressed && styles.depressed }
        onClick={ this.onButtonClicked }>
        {this.props.children}
      </button>
    )
  }
}
