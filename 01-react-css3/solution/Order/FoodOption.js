import React, { Component } from 'react'
import { AddToCartButton } from '../Buttons'
import numeral from 'numeral'

export class FoodOption extends Component {

  state = {
    inCart: false
  }

  addToCart (inCart) {
    this.props.updateTotal(this.props.price, inCart)
  }

  render () {
    const { id, name, price, photoPath } = this.props
    const { inCart } = this.state

    return (
      <li className="option_item">
        <figure className="option_item_image"><img className="option_item_photo" src={ photoPath } /></figure>
        <div className="option_item_name">{ name }<span className="option_item_price">{ numeral(price).format('$0.00') }</span></div>
        <AddToCartButton onClick={ this.addToCart.bind(this) } classNames="option_add_button" />
      </li>
    )
  }

}