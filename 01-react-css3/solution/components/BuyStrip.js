import React, { Component, PropTypes } from 'react'
import numeral from 'numeral'
import { ButtonBuyNow } from './index'
import '../../../public/workshop/css/buy-strip.css'

export class BuyStrip extends Component {

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
      <aside className="buy sold">
        <div className="buy_title">
          <p>Get Ready to eat!</p> 
          Your order is confirmed. Your card was charged 
          <span className="buy_total">{ formattedPrice }</span>
        </div>
      </aside>
    ) : (
      <aside className="buy">
        <div className="buy_title">
          Total: <span className="buy_total">{ formattedPrice }</span>
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