import React, { Component } from 'react'
import StyledLikeButton from './StyledLikeButton'

class LikeButton extends Component {
  render () {
    const { likes } = this.props
    return (
      <StyledLikeButton className="btn-primary">
        Like <span className="badge">{likes}</span>
      </StyledLikeButton>
    )
  }
}

export default LikeButton