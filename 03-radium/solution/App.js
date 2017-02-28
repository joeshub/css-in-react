import React, { Component } from 'react'
import { StyleRoot } from 'radium'
import { VideoItem, ShoppingCart } from './components/index'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { videoListData } from '../../public/API'
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
      <StyleRoot>
        <header className="header">
          <h1 className="header_logo"><span>Festival Store</span></h1>
          <h2 className="header_title">New in the Festival Store Today</h2>
        </header>
        <section className="store">
          <main className="store_content">
            <ReactCSSTransitionGroup
              transitionName="closeStoreContent"
              transitionEnterTimeout={ 500 }
              transitionLeaveTimeout={ 500 }>
            { !confirmed &&
            <ul className="video_items">
            {
              videoListData.map( ({ id, name, price, photoPath }) => {
                return <VideoItem 
                  key={ id }
                  name={ name }
                  price={ price }
                  photoPath={ photoPath }
                  updateTotal= { this.updateTotal.bind(this) }
                  />
              })
            }
            </ul>
          }
          </ReactCSSTransitionGroup>
          </main>
          <ShoppingCart 
            totalPrice={ totalPrice }
            confirmed={ confirmed }
            onBuy={ this.onBuy.bind(this) }
          />
        </section>
        <footer className="footer">
          123 Narrow Road, San Francisco, CA
        </footer>
      </StyleRoot>
    )
  }
}
