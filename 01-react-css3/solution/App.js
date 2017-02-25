import React, { Component } from 'react'
import { FoodItem, BuyStrip } from './components/index'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { foodListData } from './api'
import './app.css'

export default class App extends Component {

  state = {
    totalPrice: 0,
    confirmed: false
  }

  onBuy () {
    this.setState({
      confirmed: true
    })
  }

  updateTotal (price, inCart) {
    this.setState({
      totalPrice: inCart ? this.state.totalPrice + price : this.state.totalPrice - price
    })
  }

  render () {
    const { totalPrice, confirmed } = this.state

    return (
      <div>
        <header className="header">
          <h1 className="logo"><span>Taco Shack</span></h1>
        </header>
        <section className="order">
          <main className="food">
            <figure className="food_header">
              <img className="food_header_image" src="../../workshop/img/taco.jpg" />
            </figure>
            <ReactCSSTransitionGroup
              transitionName="closefoods"
              transitionEnterTimeout={ 500 }
              transitionLeaveTimeout={ 600 }>
            { !confirmed &&
            <div className="food_menu">
              <ul className="food_items">
              {
                foodListData.map( ({ id, name, price, photoPath }) => {
                  return <FoodItem 
                    key={ id }
                    name={ name }
                    price={ price }
                    photoPath={ photoPath }
                    updateTotal= { this.updateTotal.bind(this) }
                    disabled={ confirmed }
                   />
                })
              }
              </ul>
            </div>
          }
          </ReactCSSTransitionGroup>
          </main>
          <BuyStrip 
            totalPrice={ totalPrice }
            onBuy={ this.onBuy.bind(this) }
          />
        </section>
        <footer className="footer">
          123 Narrow Road, San Francisco, CA
        </footer>
      </div>
    )
  }
}
