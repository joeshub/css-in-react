import React, { Component } from 'react'
import injectSheet  from 'react-jss'

const styles = {
  btn: {
    display: 'inline-block',
    outline: 'none',
    textAlign: 'center',
    font: 'bold 32px helvetica',
    padding: '20px 40px',
    border: 0,
    cursor: 'pointer',
    color: '#fff',
    transition: 'background-color 300ms',
    transform: 'translateZ(0)',
    backfaceVisibility: 'visible',
    backgroundColor: props => props.depressed ? props.bgDepressed : props.bgColor,
    '&:hover': {
      backgroundColor: props => props.depressed ? props.bgDepressed : props.bgHover
    }
  }
}

class Button extends Component {

  static defaultProps = {
    bgColor: '#ec4800',
    bgHover: '#f98d00',
    bgDepressed: '#bebebe'
  }

  onButtonClicked = () => {
    this.props.onClick && this.props.onClick()
  }

  render () {
    const { depressed, classes, bgColor, bgHover, bgDepressed, ...otherProps } = this.props

    return (
      <button
        className={ classes.btn }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      />
    )
  }
}

export default injectSheet(styles)(Button)
