import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import numeral from 'numeral'
import { ButtonBuyNow, ButtonPlayNow } from '../index'
import styles from './shopping-cart.css'

@CSSModules(styles, { allowMultiple: true })
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
      <aside styleName="shopping_cart confirmed">
        <div styleName="cart_title">
          <p>Thank you!</p> 
          <p>Your order is confirmed. Your card was charged
            <span styleName="cart_total"> { formattedPrice }</span>
          </p>
          <h3 styleName="play_title">Start Watching Now</h3>
          <ButtonPlayNow>Play</ButtonPlayNow>
        </div>
      </aside>
    ) : (
      <aside styleName="shopping_cart">
        <div styleName="cart_title">
          Total: <span styleName="cart_total">{ formattedPrice }</span>
        </div>
        <ButtonBuyNow 
          onClick={ this.props.onBuy }
          disabled={ totalPrice === 0 }
        />
      </aside>
    )
  }

}