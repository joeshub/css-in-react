import React, { Component } from 'react'
import { css } from 'aphrodite/no-important'
import { styles } from './styles'
import classnames from 'classnames'

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

    const classNormal = css(styles.btn, styles.btn_primary, styles.hover)
    const classLiked = css(styles.btn_liked)
    const buttonClassNames = classnames(
      classNormal,
      {
        [classLiked]: liked
      }
    )
    
    return (
      <button 
        onClick={this.onClick}
        className={buttonClassNames}>
        Like <span className={css(styles.badge)}>{likes}</span>
      </button>
    )
  }
}