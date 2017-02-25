import React, { Component, PropTypes } from 'react'
import { BuyNowButton } from './index'
import numeral from 'numeral'
import '../../../public/workshop/css/buy-strip.css'

export class BuyStrip extends Component {

  state = {
    confirmed: false
  }

  static propTypes = {
    totalPrice: PropTypes.number,
    onBuy: PropTypes.func.isRequired
  }

  buyNowClicked () {
    this.props.onBuy()
    this.setState({ confirmed: true })
  }

  render () {
    const { totalPrice } = this.props
    const formattedPrice = numeral(totalPrice).format('$0.00')
    const { confirmed } = this.state

    return confirmed ? 
    (
      <aside className="buy sold">
        <div className="buy_title"><p>Get Ready to eat!</p> Your order is confirmed. Your card was charged <span className="buy_total">{ formattedPrice }</span></div>
      </aside>
    ) : (
      <aside className="buy">
        <div className="buy_title">Total:<span className="buy_total">{ formattedPrice }</span></div>
        <BuyNowButton 
          onClick={ this.buyNowClicked.bind(this) }
          disabled={ totalPrice === 0 }>
          Buy Now
        </BuyNowButton>
      </aside>
    )
  }

}