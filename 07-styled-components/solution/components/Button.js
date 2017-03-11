import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'

export const StyledButton = styled.button`
  display: inline-block;
  align-items: ${props => props.iconName ? 'center' : 'initial'};
  justify-content: ${props => props.iconName ? 'center' : 'initial'};
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
  iconName,
  iconSize,
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
      iconName={ iconName }
      onClick={ onClick }
      { ...otherProps }
    >
      { children }
      {iconName && !depressed && <Icon iconName={ iconName } iconSize={ iconSize } /> }
    </StyledButton>
  )

}
