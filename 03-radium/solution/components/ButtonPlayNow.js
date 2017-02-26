import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Button } from './index'

const customStyles = {
  btn: {
    backgroundColor: '#ec4800',
    boxShadow: '1px -1px 2px rgba(0, 0, 0, 0.2)',
    width: '110px',
    ':hover': {
      backgroundColor: '#f98d00'
    }
  }
}

export class ButtonPlayNow extends Component {

  render () {
    return (
      <Button 
        icon="play"
        customStyles={ customStyles }
        { ...this.props }
      >
      </Button>
    )
  }
}
