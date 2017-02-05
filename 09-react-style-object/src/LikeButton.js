import React, { Component } from 'react'
import { styles } from './styles'

export class LikeButton extends Component {
  render () {
    const { likes } = this.props
    return (
      <button style={{
        ...styles.btn,
        ...styles.btn_primary
      }}>
      Like <span style={{
        ...styles.btn__badge,
        ...styles.btn_primary__badge
      }}>{likes}</span>
      </button>
    )
  }
}
