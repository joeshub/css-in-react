import React, { Component } from 'react'
import { styled } from 'styletron-react'

const StyledButton = styled('button', ({ depressed }) => ({
  display: 'inline-block',
  outline: 'none',
  textAlign: 'center',
  font: 'bold 32px helvetica',
  padding: '20px 40px',
  border: '0',
  cursor: 'pointer',
  color: depressed ? '#848484' : '#fff',
  backgroundColor: depressed ? '#bebebe' : '#ec4800',
  transition: 'all 300ms',
  ':hover': {
    backgroundColor: depressed ? '#bebebe' : '#f98d00'
  }
}))

export class Button extends Component {

  state = { depressed: false }

  onButtonClicked = () => this.setState({
    depressed: !this.state.depressed
  })
  
  render () {
    return (
      <StyledButton
        depressed={ this.state.depressed }
        onClick={ this.onButtonClicked } 
        { ...this.props }>
      </StyledButton>
    )
  }
}