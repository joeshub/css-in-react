import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

const iconStyles = {
  content: '',
  display: 'inline-block',
  width: '12px',
  height: '12px',
  marginLeft: '6px',
  backgroundSize: '12px',
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat',
  depressed: {
    display: 'none'
  },
  'icon-add': {
    backgroundImage: 'url(/workshop/svg/add.svg)'
  },
  'icon-play': {
    backgroundImage: 'url(/workshop/svg/play.svg)'
  }
}

const Icon = ({
  name,
  children,
  ...otherProps
}) => {

  return (
    <span 
      style={ [
        name && iconStyles,
        name && iconStyles['icon-' + name]
      ] }
      { ...otherProps }
    />
  )

}

const DecoratedIcon = Radium(Icon)
export { DecoratedIcon as Icon }