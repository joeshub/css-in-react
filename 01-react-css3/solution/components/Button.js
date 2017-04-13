import React, { Component } from 'react'
import classnames from 'classnames'
import '../../../public/css/button.css'
import '../../../public/css/button-icons.css'

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
      'depressed-icon': depressed,
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
