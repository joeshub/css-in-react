import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Button } from './index'
import { buttonPlayNow as styles } from '../css-modules'

@CSSModules(styles, { allowMultiple: true })
export class ButtonPlayNow extends Component {

  render () {    
    return (
      <Button 
        icon="play"
        classNames={ styles['button_play_now'] }
        { ...this.props }
      >
      </Button>
    )
  }
}
