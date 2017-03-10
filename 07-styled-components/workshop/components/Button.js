import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'

export const StyledButton = styled.button`
  display: ${props => props.icon ? 'flex' : 'inline-block'};
  align-items: ${props => props.icon ? 'center' : 'initial'};
  justify-content: ${props => props.icon ? 'center' : 'initial'};
  outline: none;
  text-align: center;
  font: bold 15px helvetica;
  padding: 10px;
  border: 0;
  cursor: ${props => props.disabled ? 'auto' : 'pointer'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  color: ${props => props.disabled || props.depressed ? props.theme.gray : props.theme.white};
  background-color: ${props => props.disabled || props.depressed ? props.theme.grayLight : props.theme.primaryColor};
  user-select: none;
  transition: all 120ms;
  &:hover {
    background-color: ${props => props.disabled || props.depressed ? props.theme.grayLight : props.theme.primaryColorLight};
  }
`

export const Button = ({
  icon,
  iconSize,
  classNames,
  customStyles = {},
  depressed,
  disabled,
  onClick,
  children,
  ...otherProps
}) => {

  return (
    <StyledButton 
      disabled={ disabled }
      depressed={ depressed }
      className={ classNames }
      icon={ icon }
      onClick={ onClick }
      { ...otherProps }
    >
      { children }
      {icon && !depressed && <Icon name={ icon } iconSize={ iconSize } /> }
    </StyledButton>
  )

}
