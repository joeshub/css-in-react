import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import numeral from 'numeral'
import { ButtonBuyNow } from './index'

const styles = {
  buy: {
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    width: '100%',
    position: 'sticky',
    bottom: '0',
    padding: '22px',
    boxSizing: 'border-box',
    backgroundColor: '#EA491C',
    color: '#fff',
    transition: 'height 300ms ease 60ms',
    '@media (min-width: 608px)': {
      height: '80px',
      position: 'inherit',
      bottom: 'inherit',
      justifyContent: 'center',
      transition: 'height 300ms ease 260ms',
    },
    
    buyTitle: {
      display: 'flex',
      flexGrow: '1',
      fontWeight: 'bold',
      '@media (min-width: 608px)': {
        flexGrow: '0'
      }
    },
    buyTotal: {
      paddingLeft: '10px',
      paddingRight: '10px',
      minWidth: '80px',
      fontWeight: 'normal'
    },

    sold: {
      height: '200px',
      '@media (min-width: 608px)': {
        height: '200px',
      },
      buyTitle: {
        fontWeight: 'normal',
        display: 'block',
        lineHeight: '1.2',
        textAlign: 'center',
        '@media (min-width: 608px)': {
          lineHeight: '2'
        }
      },
      buyTotal: {
        paddingLeft: '0',
        minWidth: 'auto'
      }
    }
  }
}

@Radium export class BuyStrip extends Component {

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
      <aside style={ [ styles.buy, styles.buy.sold ] }>
        <div style={ [ styles.buy.sold.buyTitle ] }>
          <p>Get Ready to eat!</p> 
          Your order is confirmed. Your card was charged 
          <span style={ [ styles.buy.sold.buyTotal ] }>{ formattedPrice }</span>
        </div>
      </aside>
    ) : (
      <aside style={ [ styles.buy ] }>
        <div style={ [ styles.buy.buyTitle ] }>
          Total: <span style={ [ styles.buy.buyTotal ] }>{ formattedPrice }</span>
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