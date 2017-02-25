import React, { Component, PropTypes } from 'react'
import { BuyNowButton } from './index'
import numeral from 'numeral'
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
        <div className="buy_title"><p>Get Ready to eat!</p> Your order is confirmed. Your card was charged <span className="buy_total">{ formattedPrice }</span></div>
      </aside>
    ) : (
      <aside className="buy">
        <div className="buy_title">Total:<span className="buy_total">{ formattedPrice }</span></div>
        <BuyNowButton 
          onClick={ this.props.onBuy }
          disabled={ totalPrice === 0 }>
          Buy Now
        </BuyNowButton>
      </aside>
    )
  }

}