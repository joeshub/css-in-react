import React, { Component } from 'react'
import { AddToCartButton, BuyNowButton, Button } from './Buttons'
import { FoodItem, BuyStrip } from './Order'
import numeral from 'numeral'

import { foodList } from './api'
import './app.css'

export default class App extends Component {

  state = {
    totalPrice: 0
  }

  updateTotal (price, inCart) {
    this.setState({
      totalPrice: inCart ? this.state.totalPrice + price : this.state.totalPrice - price
    })
  }

  render () {
    const { totalPrice } = this.state

    return (
      <div>
        <header className="header">
          <h1 className="logo"><span>Taco Shack</span></h1>
        </header>
        <section className="order">
          <main className="food">
            <figure className="food_photo">
              <img className="food_photo_image" src="../../workshop/img/taco.jpg" />
            </figure>
            <div className="food_menu">
              <ul className="food_items">
              {
                foodList.map( ({ id, name, price, photoPath }) => {
                  return <FoodItem 
                    key={ id }
                    name={ name }
                    price={ price }
                    photoPath={ photoPath }
                    updateTotal= { this.updateTotal.bind(this) }
                   />
                })
              }
              </ul>
            </div>
          </main>
          <BuyStrip totalPrice={ numeral(totalPrice).format('$0.00') } />
        </section>
        <footer className="footer">
          123 Narrow Road, San Francisco, CA
        </footer>
      </div>
    )
  }
}
