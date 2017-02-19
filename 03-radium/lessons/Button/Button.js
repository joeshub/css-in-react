import React, { Component } from 'react'
import Radium from 'radium'

const styles = {
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
    },
    btn_depressed: {
      'color': '#848484',
      'backgroundColor': '#bebebe',
      ':hover': {
        backgroundColor: '#bebebe'
      }
    }
  }
}

@Radium
export class Button extends Component {

  state = {
    depressed: false
  }

  onButtonClicked = () => this.setState({
    depressed: !this.state.depressed
  })
  
  render () {
    const depressedStyles = this.state.depressed ? styles.btn.btn_depressed : {}

    return (
      <button 
        style={[
          styles.btn,
          depressedStyles
        ]}
        onClick={this.onButtonClicked} 
        {...this.props}>
      </button>
    )
  }

}