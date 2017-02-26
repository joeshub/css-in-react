import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import numeral from 'numeral'
import { ButtonBuyNow } from './index'

const styles = {
  shoppingCart: {
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    width: '100%',
    position: 'sticky',
    bottom: '0',
    padding: '22px',
    boxSizing: 'border-box',
    backgroundColor: '#07314d',
    color: '#fff',
    transition: 'all 350ms ease 250ms',
    '@media (min-width: 608px)': {
      height: '80px',
      position: 'inherit',
      bottom: 'inherit',
      justifyContent: 'center'
    },
    
    cartTitle: {
      display: 'flex',
      flexGrow: '1',
      fontWeight: 'bold',
      lineHeight: '2',
      '@media (min-width: 608px)': {
        flexGrow: '0'
      }
    },
    cartTotal: {
      paddingLeft: '10px',
      paddingRight: '10px',
      minWidth: '80px',
      fontWeight: 'normal'
    },

    confirmed: {
      height: '350px',
      '@media (min-width: 608px)': {
        height: '350px'
      },
      cartTitle: {
        fontWeight: 'normal',
        display: 'block',
        textAlign: 'center'
      },
      cartTotal: {
        padding: '0',
        minWidth: 'auto'
      }
    }
  }
}

@Radium export class ShoppingCart extends Component {

  static propTypes = {
    totalPrice: PropTypes.number.isRequired,
    confirmed: PropTypes.bool.isRequired,
    onBuy: PropTypes.func.isRequired
  }

  render () {
    const { totalPrice, confirmed } = this.props
    const formattedPrice = numeral(totalPrice).format('$0.00')

    return confirmed ? 
    (
      <aside style={ [ styles.shoppingCart, styles.shoppingCart.confirmed ] }>
        <div style={ [ styles.shoppingCart.cartTitle, styles.shoppingCart.confirmed.cartTitle ] }>
          <p>Get Ready to eat!</p> 
          <p>Your order is confirmed. Your card was charged 
            <span style={ [ styles.shoppingCart.cartTotal, styles.shoppingCart.confirmed.cartTotal ] }> { formattedPrice }</span>
          </p>
        </div>
      </aside>
    ) : (
      <aside style={ [ styles.shoppingCart ] }>
        <div style={ [ styles.shoppingCart.cartTitle ] }>
          Total: <span style={ [ styles.shoppingCart.cartTotal ] }>{ formattedPrice }</span>
        </div>
        <ButtonBuyNow 
          onClick={ this.props.onBuy }
          disabled={ totalPrice === 0 }>
          Buy Now
        </ButtonBuyNow>
      </aside>
    )
  }

}