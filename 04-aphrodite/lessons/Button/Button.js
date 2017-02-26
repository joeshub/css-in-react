import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import classnames from 'classnames'

const styles = StyleSheet.create({
  btn: {
    display: 'inline-block',
    outline: 'none',
    textAlign: 'center',
    font: 'bold 32px helvetica',
    padding: '20px 40px',
    border: '0',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: '#ec4800',
    transition: 'all 300ms',
  },
  depressed: {
    color: '#848484',
    backgroundColor: '#bebebe',
  },
  hover: {
    ':hover': {
      backgroundColor: '#f98d00'
    }
  },
  hoverDepressed: {
    ':hover': {
      backgroundColor: '#bebebe'
    }
  }
})

export class Button extends Component {

  state = { depressed: false }

  onButtonClicked = () => this.setState({
    depressed: !this.state.depressed
  })
  
  render () {
    const normalClassnames = css(styles.btn, styles.hover, styles.hover.depressed)
    const depressedClassnames = css(styles.depressed, styles.hoverDepressed)
    const buttonClassNames = classnames(normalClassnames,
      {
        [depressedClassnames]: this.state.depressed
      }
    )

    return (
      <button 
        className={ buttonClassNames }
        onClick={ this.onButtonClicked } 
        { ...this.props }>
      </button>
    )
  }
}