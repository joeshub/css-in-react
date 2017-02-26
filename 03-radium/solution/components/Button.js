import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

const buttonStyles = {
  btn: {
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
    depressed: {
      color: '#848484',
      backgroundColor: '#bebebe',
      ':hover': {
        backgroundColor: '#bebebe'
      }
    },
    disabled: {
      cursor: 'auto',
      pointerEvents: 'none',
      color: '#848484',
      backgroundColor: '#bebebe',
      ':hover': {
        backgroundColor: '#bebebe'
      }
    },
    icon: {
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
      }
    },
    'icon-add': {
      backgroundImage: 'url(/workshop/svg/add.svg)'
    }
  }
}

const Button = ({
  icon,
  classNames,
  customStyles,
  depressed,
  disabled,
  onClick,
  children,
  ...otherProps
}) => {

  return (
    <button 
      style={ [
        buttonStyles.btn,
        depressed && buttonStyles.btn.depressed,
        disabled && buttonStyles.btn.disabled,
        customStyles.btn && customStyles.btn,
        depressed && customStyles.btn && customStyles.btn.depressed && customStyles.btn.depressed,
        disabled && customStyles.btn &&customStyles.btn.depressed && customStyles.btn.disabled,
      ] }
      className={ classNames } 
      onClick={ onClick }
      { ...otherProps }
    >
      { children }
      {
        <span style={ [
          icon && buttonStyles.btn.icon,
          icon && buttonStyles.btn['icon-' + icon],
          depressed && buttonStyles.btn.icon.depressed
        ] }></span>
      }
    </button>
  )

}

const DecoratedButton = Radium(Button)
export { DecoratedButton as Button }