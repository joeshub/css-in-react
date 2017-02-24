import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import '../../../public/workshop/css/button.css'

export const Button = ({
  classNames, 
  depressed, 
  disabled,
  onClick,
  children,
  ...otherProps
}) => {

  const buttonClassNames = classnames('btn', classNames, 
    { 
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
