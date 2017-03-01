import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import numeral from 'numeral'
import { ButtonBuyNow, ButtonPlayNow } from './index'

const Cart = styled.aside`
  display: flex;
  align-items: center;
  height: ${props => props.confirmed ? '350px' : '60px'};
  width: 100%;
  position: sticky;
  bottom: 0;
  padding:22px;
  box-sizing: border-box;
  background-color: ${props => props.confirmed ? 'rgba(71, 59, 180, 0.20)' : '#07314d'};
  color: #fff;
  transition: all 350ms ease 250ms;
  @media screen and (min-width: 700px) {
    height: ${props => props.confirmed ? '350px' : '80px'};
    position: inherit;
    bottom: inherit;
    justify-content: center;
  }
`

const CartTitle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: ${props => props.confirmed ? 'column' : 'row'};
  font-weight: ${props => props.confirmed ? 'normal' : 'bold'};
  align-items: ${props => props.confirmed ? 'center' : 'auto'};
  line-height: 2;
  @media screen and (min-width: 700px) {
    flex-grow: 0;
  }
`

const CartTotal = styled.span`
  padding-left: ${props => props.confirmed ? '0' : '10px'};
  padding-right: ${props => props.confirmed ? '0' : '10px'};
  min-width: ${props => props.confirmed ? 'auto' : '80px'};
  font-weight: normal;
`

const PlayTitle = styled.h3`
  margin: 20px auto;
  font-weight: bold;
  font-size: 20px;
`

export class ShoppingCart extends Component {

  static propTypes = {
    totalPrice: PropTypes.number.isRequired,
    confirmed: PropTypes.bool.isRequired,
    onBuy: PropTypes.func.isRequired
  }

  render () {
    const { totalPrice, confirmed } = this.props
    const formattedPrice = numeral(totalPrice).format('$0.00')

    return confirmed ? 
    (
      <Cart confirmed>
        <CartTitle confirmed>
          <p>Thank you!</p> 
          <p>Your order is confirmed. Your card was charged 
            <CartTotal confirmed> { formattedPrice }</CartTotal>
          </p>
          <PlayTitle>Start Watching Now</PlayTitle>
          <ButtonPlayNow>Play</ButtonPlayNow>
        </CartTitle>
      </Cart>
    ) : (
      <Cart>
        <CartTitle>
          Total: <CartTotal>{ formattedPrice }</CartTotal>
        </CartTitle>
        <ButtonBuyNow 
          onClick={ this.props.onBuy }
          disabled={ totalPrice === 0 }>
          Buy Now
        </ButtonBuyNow>
      </Cart>
    )
  }

}