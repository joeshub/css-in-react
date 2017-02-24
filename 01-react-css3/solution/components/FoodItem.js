import React, { Component } from 'react'
import { AddToCartButton } from './index'
import numeral from 'numeral'

export class FoodItem extends Component {

  state = {
    inCart: false
  }

  addToCart (inCart) {
    this.props.updateTotal(this.props.price, inCart)
  }

  render () {
    const { id, name, price, photoPath, disabled } = this.props
    const { inCart } = this.state

    return (
      <li className="food_item">
        <figure className="food_item_image"><img className="food_item_photo" src={ photoPath } /></figure>
        <div className="food_item_name">{ name }<span className="food_item_price">{ numeral(price).format('$0.00') }</span></div>
        <AddToCartButton 
          onClick={ this.addToCart.bind(this) } 
          classNames="food_add_button" 
          disabled={ disabled }
        />
      </li>
    )
  }

}