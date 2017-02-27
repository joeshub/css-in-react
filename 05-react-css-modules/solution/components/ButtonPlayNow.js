import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Button } from './index'
import { buttonPlayNow } from '../css-modules'

let styles = {}
Object.assign(styles, buttonPlayNow)

@CSSModules(styles, { allowMultiple: true })
export class ButtonPlayNow extends Component {

  render () {    
    return (
      <Button 
        icon="play"
        styleName="button_play_now"
        { ...this.props }
      >
      </Button>
    )
  }
}
