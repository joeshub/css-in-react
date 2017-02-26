import React, { Component, PropTypes } from 'react'
import numeral from 'numeral'
import { ButtonBuyNow } from './index'
import '../../../public/workshop/css/shopping-cart.css'

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
      <aside className="shopping_cart confirmed">
        <div className="cart_title">
          <p>Get Ready to eat!</p> 
          <p>Your order is confirmed. Your card was charged
            <span className="cart_total"> { formattedPrice }</span>
          </p>
        </div>
      </aside>
    ) : (
      <aside className="shopping_cart">
        <div className="cart_title">
          Total: <span className="cart_total">{ formattedPrice }</span>
        </div>
        <ButtonBuyNow 
          onClick={ this.props.onBuy }
          disabled={ totalPrice === 0 }>
          Buy Now
        </ButtonBuyNow>
      </aside>
    )
  }

}