import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Button } from './index'

const StyledButtonPlayNow = styled(Button)`
  background-color: #ec4800;
  box-shadow: 1px -1px 2px rgba(0, 0, 0, .2);
  width: 110px;
  &:hover {
    background-color: #f98d00;
  }
`

const customStyles = {
  btn: {
    backgroundColor: '#ec4800',
    boxShadow: '1px -1px 2px rgba(0, 0, 0, 0.2)',
    width: '110px',
    ':hover': {
      backgroundColor: '#f98d00'
    }
  }
}

export class ButtonPlayNow extends Component {

  render () {
    return (
      <StyledButtonPlayNow 
        icon="play"
        customStyles={ customStyles }
        { ...this.props }
      >
      </StyledButtonPlayNow>
    )
  }
}
