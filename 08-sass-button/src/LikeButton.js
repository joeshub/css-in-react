import React, { Component } from 'react'
import '../styles/likeButton.scss'

export class LikeButton extends Component {
  render () {
    const { likes } = this.props
    return (
      <button className="btn btn-primary">
        Like <span className="badge">{likes}</span>
      </button>
    )
  }
}
