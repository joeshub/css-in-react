import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import numeral from 'numeral'
import { ButtonBuyNow, ButtonPlayNow } from './index'

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
    transition: 'all 300ms ease 200ms',
    '@media (min-width: 700px)': {
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
      '@media (min-width: 700px)': {
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
      backgroundColor: 'rgba(71, 59, 180, 0.20)',
      '@media (min-width: 700px)': {
        height: '350px'
      },
      cartTitle: {
        fontWeight: 'normal',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      },
      cartTotal: {
        paddingLeft: '0',
        paddingRight: '0',
        minWidth: 'auto'
      },
      playTitle: {
        margin: '20px auto',
        fontWeight: 'bold',
        fontSize: '20px'
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
          <p>Thank you!</p> 
          <p>Your order is confirmed. Your card was charged 
            <span style={ [ styles.shoppingCart.cartTotal, styles.shoppingCart.confirmed.cartTotal ] }> { formattedPrice }</span>
          </p>
          <h3 style={ [ styles.shoppingCart.confirmed.playTitle ] }>Start Watching Now</h3>
          <ButtonPlayNow>Play</ButtonPlayNow>
        </div>
      </aside>
    ) : (
      <aside style={ [ styles.shoppingCart ] }>
        <div style={ [ styles.shoppingCart.cartTitle ] }>
          Total: <span style={ [ styles.shoppingCart.cartTotal ] }>{ formattedPrice }</span>
        </div>
        <ButtonBuyNow 
          onClick={ this.props.onBuy }
          disabled={ totalPrice === 0 }
        />
      </aside>
    )
  }

}