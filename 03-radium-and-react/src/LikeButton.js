import React, { Component } from 'react'
import Radium from 'radium'
import { styles } from './styles'

@Radium
export default class LikeButton extends Component {
  state = {
    liked: false
  }
  onClick = () => {
    this.setState({liked: true})
  }
  render () {
    const { likes } = this.props
    const { liked } = this.state
    return (
      <button 
        onClick={this.onClick}
        style={[
          styles.btn,
          styles.btn.btn_primary,
          liked && styles.btn.btn_liked
        ]}>
        Like <span style={[
          styles.btn.badge,
          styles.btn.btn_primary.badge
        ]}>{likes}</span>
      </button>
    )
  }
}