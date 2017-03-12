import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

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
    ':hover': {
      backgroundColor: '#f98d00'
    }
  },
  depressed: {
    color: '#848484',
    backgroundColor: '#bebebe',
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
    const { depressed } = this.state
    return (
      <button 
        className={ css(styles.btn, depressed && styles.depressed) }
        onClick={ this.onButtonClicked } 
        { ...this.props }>
      </button>
    )
  }
}