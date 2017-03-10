import React, { Component } from 'react'
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { videoListData } from '../../public/API'
import './globalStyles'
import { 
  VideoItem, 
  ShoppingCart, 
  CustomNav,
  Footer, 
  Header,
  Main,
  Store,
  VideoItems,
  Wrapper
} from './components/index'

// Import ThemeProvider from styled-components

// Import theme.js and store it in the theme variable

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
    const newTotal = inCart ? this.state.totalPrice + price : this.state.totalPrice - price
    this.setState({
      totalPrice: parseFloat(newTotal.toFixed(2))
    })
  }

  render () {
    const { totalPrice, confirmed } = this.state

    { /* pass theme to ThemeProvider */ }
    return (
      <ThemeProvider theme={ theme }>
        <Wrapper>
          <CustomNav />
          <header className="header">
            <h1 className="header_logo"><span>Festival Store</span></h1>
            <h2 className="header_title">New Videos This Week</h2>
          </header>
          <Store>
            <Main>
              <ReactCSSTransitionGroup
                transitionName="closeStoreContent"
                transitionEnterTimeout={ theme.videoAnimationSpeed }
                transitionLeaveTimeout={ theme.videoAnimationSpeed }>
              { !confirmed &&
              <VideoItems>
              {
                videoListData.map( ({ id, name, price, photoPath, length, filesize, format }) => {
                  return <VideoItem 
                    key={ id }
                    name={ name }
                    price={ price }
                    photoPath={ photoPath }
                    length={ length }
                    filesize={ filesize }
                    format={ format }
                    updateTotal= { this.updateTotal.bind(this) }
                    />
                })
              }
              </VideoItems>
            }
            </ReactCSSTransitionGroup>
            </Main>
            <ShoppingCart 
              totalPrice={ totalPrice }
              confirmed={ confirmed }
              onBuy={ this.onBuy.bind(this) }
            />
          </Store>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    )
  }
}
