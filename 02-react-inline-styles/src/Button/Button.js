import React, { Component } from 'react'

const styles = {
  'btn': {
    'display': 'inline-block',
    'outline': 'none',
    'textAlign': 'center',
    'font': 'bold 32px helvetica',
    'padding': '20px 40px',
    'border': '0',
    'cursor': 'pointer'
  },

  'btn_primary': {
    'color': '#fff',
    'backgroundColor': '#ec4800',
    'transition': 'all 300ms'
  },

  // Not possible
  'btn_primary_hover': {
    'backgroundColor': '#f98d00'
  },

  'btn_primary_depressed': {
    'color': '#848484',
    'backgroundColor': '#bebebe'
  }

}

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
    const depressedStyles = this.state.depressed ? styles.btn_primary_depressed : {}
    return (
      <button 
        style={{
          ...styles.btn,
          ...styles.btn_primary,
          ...depressedStyles
        }}
        onClick={this.onButtonClicked} 
        {...this.props}>
      </button>
    )
  }

}