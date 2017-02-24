import React, { Component } from 'react'
import { BuyNowButton } from '../Buttons'

export class BuyStrip extends Component {

  state = {
    confirmed: false
  }

  buyNowClicked () {
    this.setState({ confirmed: true })
  }

  render () {
    const { totalPrice } = this.props
    const { confirmed } = this.state

    return confirmed ? 
    (
      <aside className="buy sold">
        <div className="buy_title">Get Ready to eat! Your order is confirmed. Your card was charged <span className="buy_total">{ totalPrice }</span></div>
      </aside>
    ) : (
      <aside className="buy">
        <div className="buy_title">Total:<span className="buy_total">{ totalPrice }</span></div>
        <BuyNowButton onClick={ this.buyNowClicked.bind(this) }classNames="buy_button">Buy Now</BuyNowButton>
      </aside>
    )
  }

}