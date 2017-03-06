import React, { Component, PropTypes } from 'react'
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
