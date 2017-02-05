import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/likebutton.css'
import classnames from 'classnames'

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
    const buttonClassNames = classnames('btn', 'btn-primary', {
      'btn-liked': liked
    })
    return (
      <button 
        onClick={this.onClick}
        styleName={buttonClassNames}>
        Like <span styleName="badge">{likes}</span>
      </button>
    )
  }
}