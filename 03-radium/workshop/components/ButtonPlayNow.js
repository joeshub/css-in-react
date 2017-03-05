import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Button } from './index'

const customStyles = {
  btn: {
    backgroundColor: '#ec4800',
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
