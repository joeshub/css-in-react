import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Button } from './index'

const StyledButtonPlayNow = styled(Button)`
  background-color: #ec4800;
  width: 110px;
  &:hover {
    background-color: #f98d00;
  }
`

const customStyles = {
  btn: {
    backgroundColor: '#ec4800',
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
