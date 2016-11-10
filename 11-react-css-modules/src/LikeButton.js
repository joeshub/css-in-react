import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/likebutton.scss'

@CSSModules(styles, {allowMultiple: true})
class LikeButton extends Component {
  render () {
    const { likes } = this.props
    return (
      <button styleName="btn btn-primary">
        Like <span styleName="badge">{likes}</span>
      </button>
    )
  }
}

export default LikeButton
