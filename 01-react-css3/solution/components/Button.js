import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import '../../../public/workshop/css/button.css'
import '../../../public/workshop/css/button-icons.css'

export const Button = ({
  icon,
  classNames, 
  depressed, 
  disabled,
  onClick,
  children,
  ...otherProps
}) => {

  const buttonClassNames = classnames('btn', classNames,
    {
      [`icon icon-${icon}`]: icon,
      'depressed': depressed, 
      'disabled': disabled
    }
  )

  return (
    <button 
      className={ buttonClassNames } 
      onClick={ onClick }
      { ...otherProps }
    >
      { children }
    </button>
  )

}
