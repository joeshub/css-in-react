import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// uncomment this line to import styled components
import styled, { ThemeProvider } from 'styled-components'
import { videoListData } from '../../public/API'
import theme from './theme'
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

    return (
      <ThemeProvider theme={ theme }>
        <Wrapper>
          <CustomNav />
          <Header />
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
