import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline-block;
  outline: none;
  text-align: center;
  font: bold 32px helvetica;
  padding: 20px 40px;
  border: 0;
  cursor: pointer;
  color: #fff;
  transition: all 300ms;
  &:hover {
    background-color: ${props => props.depressed === true ? '#bebebe' : '#f98d00'};
  }
  background-color: ${props => props.depressed === true ? '#bebebe' : '#ec4800'};
`

export class Button extends Component {

  state = {
    depressed: false
  }

  onButtonClicked = () => this.setState({
    depressed: !this.state.depressed
  })

  render () {
    return (
      <StyledButton 
        onClick={this.onButtonClicked} 
        depressed={this.state.depressed}
        {...this.props} 
      />
    )
  }
}
