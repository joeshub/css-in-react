import React, { Component } from 'react'
import Radium from 'radium'
import { Icon } from './index'

const depressedStyles = {
  color: '#848484',
  backgroundColor: '#bebebe',
  ':hover': {
    backgroundColor: '#bebebe'
  }
}

const buttonStyles = {
  display: 'inline-block',
  outline: 'none',
  textAlign: 'center',
  font: 'bold 15px helvetica',
  padding: '10px',
  border: '0',
  cursor: 'pointer',
  color: '#fff',
  backgroundColor: '#07314d',
  userSelect: 'none',
  transition: 'all 120ms',
  ':hover': {
    backgroundColor: '#336086'
  },
  depressed: depressedStyles,
  disabled: {
    cursor: 'auto',
    pointerEvents: 'none',
    ...depressedStyles
  }
}

const Button = ({
  icon,
  classNames,
  customStyles = {},
  depressed,
  disabled,
  onClick,
  children,
  ...otherProps
}) => {

  return (
    <button 
      style={ [
        buttonStyles,
        depressed && buttonStyles.depressed,
        disabled && buttonStyles.disabled,
        customStyles && customStyles,
        depressed ? customStyles.depressed ? customStyles.depressed : buttonStyles.depressed : undefined,
        disabled ? customStyles.disabled ? customStyles.disabled : buttonStyles.disabled : undefined
      ] }
      className={ classNames } 
      onClick={ onClick }
      { ...otherProps }
    >
      { children }
      {!depressed && <Icon name={ icon } /> }
    </button>
  )

}

const DecoratedButton = Radium(Button)
export { DecoratedButton as Button }