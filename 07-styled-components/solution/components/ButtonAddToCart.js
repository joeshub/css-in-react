import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from './index'

const StyledButtonAddToCart = styled(Button)`
  min-width: 110px;
`

export class ButtonAddToCart extends Component {

  state = {
    depressed: false,
    buttonText: 'Add'
  }

  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  }

  onButtonClicked = () => {
    this.props.onClick(!this.state.depressed)
    this.setState({
      buttonText: this.state.depressed ? 'Add' : 'In Cart',
      depressed: !this.state.depressed
    })
  }

  render () {
    const { depressed, buttonText } = this.state
    const { disabled, onClick, ...otherProps } = this.props
    
    return (
      <StyledButtonAddToCart 
        iconName="add"
        depressed={ depressed }
        disabled={ disabled }
        onClick={ this.onButtonClicked }
        { ...otherProps }
      >
        { buttonText }
      </StyledButtonAddToCart>
    )
    
  }
}
