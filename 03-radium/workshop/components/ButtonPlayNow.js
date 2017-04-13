import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Button } from './index'

const customStyles = {
  backgroundColor: '#ec4800',
  width: '110px',
  ':hover': {
    backgroundColor: '#f98d00'
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
