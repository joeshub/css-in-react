import React, { Component } from 'react'
import '../../public/css/sxburritos.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <header className="header">
          <h1 className="logo"><span>SXBURRITOS</span></h1>
          <svg style={{fill:'white',width:'50px',height:'50px'}}>
            <use xlinkHref="../../svg/foo.svg#shape" x="50" y="50" />
          </svg>
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
                  <button className="btn withicon depressed option_add_button">Remove</button>
                </li>
                <li className="option_item">
                  <figure className="option_item_image"><img className="option_item_photo" src="../../img/guacamole.jpg" /></figure>
                  <div className="option_item_name">Guacamole<span className="option_item_price">$2.00</span></div>
                  <button className="btn withicon option_add_button">Add
                    <svg className="icon icon-plus">
                      <use xlinkHref="svg/svgsprite.svg#plus"></use>
                    </svg>
                  </button>
                </li>
                <li className="option_item">
                  <figure className="option_item_image"><img className="option_item_photo" src="../../img/brownrice.jpg" /></figure>
                  <div className="option_item_name">Brown Rice<span className="option_item_price">$1.00</span></div>
                  <button className="btn withicon option_add_button">Add
                    <svg className="icon icon-plus">
                      <use href="svg/svgsprite.svg#plus"></use>
                    </svg>
                  </button>
                </li>
                <li className="option_item">
                  <figure className="option_item_image"><img className="option_item_photo" src="../../img/salsa.jpg" /></figure>
                  <div className="option_item_name">Extra Salsa<span className="option_item_price">$0.50</span></div>
                  <button className="btn withicon option_add_button">Add
                    <svg className="icon icon-plus">
                      <use href="svg/svgsprite.svg#plus"></use>
                    </svg>
                  </button>
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

