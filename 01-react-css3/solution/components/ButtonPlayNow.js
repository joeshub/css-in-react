import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from './index'
import '../../../public/css/button-play-now.css'

export class ButtonPlayNow extends Component {

  render () {    
    return (
      <Button 
        icon="play"
        classNames="button_play_now"
        { ...this.props }
      >
      </Button>
    )
  }
}
