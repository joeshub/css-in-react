import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import '../../../public/workshop/css/button.css'

export const Button = ({classNames, depressed, onClick, ...otherProps}) => {

  const buttonClassNames = classnames('btn', classNames, 
    { 'depressed': depressed }
  )

  return (
    <button 
      className={buttonClassNames} 
      onClick={onClick}>
      { otherProps.children }
    </button>
  )

}
