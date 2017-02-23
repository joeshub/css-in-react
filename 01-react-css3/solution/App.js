import React, { Component } from 'react'
import { AddToCartButton, BuyNowButton, Button } from './Buttons'
import './app.css'

export default class App extends Component {
  render () {
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
            <div className="food_options">
              <ul className="options_list">
                <li className="option_item">
                  <figure className="option_item_image"><img className="option_item_photo" src="../../workshop/img/steak.jpg" /></figure>
                  <div className="option_item_name">Carne Asada<span className="option_item_price">$3.00</span></div>
                  <AddToCartButton classNames="option_add_button" />
                </li>
                <li className="option_item">
                  <figure className="option_item_image"><img className="option_item_photo" src="../../workshop/img/guacamole.jpg" /></figure>
                  <div className="option_item_name">Guacamole<span className="option_item_price">$2.00</span></div>
                  <AddToCartButton classNames="option_add_button" />
                </li>
                <li className="option_item">
                  <figure className="option_item_image"><img className="option_item_photo" src="../../workshop/img/fish.jpg" /></figure>
                  <div className="option_item_name">Baja Fish<span className="option_item_price">$1.00</span></div>
                  <AddToCartButton classNames="option_add_button" />
                </li>
                <li className="option_item">
                  <figure className="option_item_image"><img className="option_item_photo" src="../../workshop/img/chicken.jpg" /></figure>
                  <div className="option_item_name">Chicken<span className="option_item_price">$0.50</span></div>
                  <AddToCartButton classNames="option_add_button" />
                </li>
              </ul>
            </div>
          </main>
          <aside className="buy">
            <div className="buy_title">Total:<span className="buy_total">$10.50</span></div>
            <BuyNowButton classNames="buy_button">Buy Now</BuyNowButton>
          </aside>
        </section>
        <footer className="footer">
          123 Narrow Road, San Francisco, CA
        </footer>
      </div>
    )
  }
}

