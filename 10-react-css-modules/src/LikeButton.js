import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/likebutton.scss'

@CSSModules(styles, {allowMultiple: true})
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
    let buttonStyles = 'btn btn-primary'
    if (liked) buttonStyles += ' btn-liked'
    return (
      <button 
        onClick={this.onClick}
        styleName={buttonStyles}>
        Like <span styleName="badge">{likes}</span>
      </button>
    )
  }
}