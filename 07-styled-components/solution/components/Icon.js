import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

const StyledIcon = styled.div`
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 6px;
  background-size: 12px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(/workshop/svg/${props => props.name }.svg);
`

export const Icon = ({
  name,
  classNames,
  customStyles = {},
  depressed,
  disabled,
  onClick,
  children,
  ...otherProps
}) => {

  return (
    <StyledIcon 
      disabled={ disabled }
      depressed={ depressed }
      className={ classNames }
      name={ name }
      onClick={ onClick }
      { ...otherProps }
    >
    </StyledIcon>
  )

}
