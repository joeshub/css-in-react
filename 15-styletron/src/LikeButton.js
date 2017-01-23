import React, { Component } from 'react'
import { styled } from 'styletron-react'
import THEME from './theme'

const Button = styled('button', (props) => {
  return {
    display: 'inline-block',
    textAlign: 'center',
    fontSize: props.fontSize || 14,
    fontFamily: 'arial',
    padding: '6px 12px',
    border: 0,
    cursor: 'pointer',
    color: THEME.textColor,
    backgroundColor: THEME.buttonColor,
    ':hover': {
      backgroundColor: THEME.buttonColorHover
    }
  }
})

const Badge = styled('span', (props) => {
  return {
    display: 'inline-block',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 700,
    borderRadius: '10px',
    padding: '3px 6px',
    position: 'relative',
    top: -1,
    color: THEME.buttonColorHover,
    backgroundColor: THEME.textColor
  }
})

class LikeButton extends Component {
  render () {
    const { likes } = this.props
    return (
      <Button>
        Like <Badge>{likes}</Badge>
      </Button>
    )
  }
}

export default LikeButton
