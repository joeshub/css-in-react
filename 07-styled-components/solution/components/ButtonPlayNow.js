import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from './index'

const StyledButtonPlayNow = styled(Button)`
  background-color: ${(props) => props.theme.secondaryColor};
  width: 110px;
  height: 50px;
  font-size: 18px;
  &:hover {
    background-color: ${(props) => props.theme.secondaryColorLight};
  }
`

export class ButtonPlayNow extends Component {

  render () {
    return (
      <StyledButtonPlayNow 
        iconName="play"
        { ...this.props }
      >
      </StyledButtonPlayNow>
    )
  }
}
