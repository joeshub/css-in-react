import React, { Component } from 'react'
import '../../public/css/tacoshack.css'

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
              <img className="food_photo_image" src="../../img/burrito_large.jpg" />
            </figure>
            <div className="food_options">
              <ul className="options_list">
                <li className="option_item">
                  <figure className="option_item_image"><img className="option_item_photo" src="../../img/pulledpork.jpg" /></figure>
                  <div className="option_item_name">Pulled Pork<span className="option_item_price">$3.00</span></div>
                  <button className="btn depressed option_add_button">Remove</button>
                </li>
                <li className="option_item">
                  <figure className="option_item_image"><img className="option_item_photo" src="../../img/guacamole.jpg" /></figure>
                  <div className="option_item_name">Guacamole<span className="option_item_price">$2.00</span></div>
                  <button className="btn icon icon-plus option_add_button">Add</button>
                </li>
                <li className="option_item">
                  <figure className="option_item_image"><img className="option_item_photo" src="../../img/brownrice.jpg" /></figure>
                  <div className="option_item_name">Brown Rice<span className="option_item_price">$1.00</span></div>
                  <button className="btn icon icon-plus option_add_button">Add</button>
                </li>
                <li className="option_item">
                  <figure className="option_item_image"><img className="option_item_photo" src="../../img/salsa.jpg" /></figure>
                  <div className="option_item_name">Extra Salsa<span className="option_item_price">$0.50</span></div>
                  <button className="btn icon icon-plus option_add_button">Add</button>
                </li>
              </ul>
            </div>
          </main>
          <aside className="buy">
            <div className="buy_title">Total:<span className="buy_total">$10.50</span></div><button className="btn buy_button">Buy Now</button>
          </aside>
        </section>
        <footer className="footer">
          123 Narrow Road, San Francisco, CA
        </footer>
      </div>
    )
  }
}

