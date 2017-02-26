import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import numeral from 'numeral'
import { ButtonAddToCart } from './index'

const styles = {
  foodItem: {
    borderBottom: '1px solid rgba(169, 169, 169, 0.29)',
    display: 'flex',
    height: '82px',
    alignItems: 'center',
    padding: '22px',
    boxSizing: 'border-box',
    '@media (min-width: 608px)': {
      border: '1px solid rgba(169, 169, 169, 0.29)',
      height: 'auto',
      minWidth: '100px',
      flexFlow: 'column',
      width: '23%',
      flexShrink: '1',
      position: 'relative',
      paddingTop: '100px',
      maxWidth: '188px',
    }
  },
  foodItemFigure: {
    display: 'none',
    '@media screen and (min-width: 608px)': {
      height: '80px',
      width: '100%',
      position: 'absolute',
      left: '0',
      top: '0',
      display: 'block',
      overflow: 'hidden',
    },
  },
  foodItemImage: {
    '@media screen and (min-width: 608px)': {
      height: '100%'
    }
  },
  foodItemName: {
    flexGrow: '1',
    fontWeight: 'bold',
    '@media screen and (min-width: 608px)': {
      display: 'flex',
      flexFlow: 'inherit',
      marginBottom: '20px',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'flex-end',
    },
  },
  foodItemPrice: {
    paddingLeft: '10px',
    fontWeight: 'normal',
    color: '#848484',
    '@media screen and (min-width: 608px)': {
      marginTop: '20px'
    }
  }
}

@Radium export class FoodItem extends Component {

  state = {
    inCart: false
  }

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    photoPath: PropTypes.string,
    disabled: PropTypes.bool,
    updateTotal: PropTypes.func.isRequired
  }

  addToCart (inCart) {
    this.props.updateTotal(this.props.price, inCart)
  }

  render () {
    const { id, name, price, photoPath, disabled } = this.props

    return (
      <li style={ [ styles.foodItem ] }>
        <figure style={ [ styles.foodItemFigure ] }>
          <img style={ [ styles.foodItemImage ] } src={ photoPath } />
        </figure>
        <div style={ [ styles.foodItemName ] }>
          { name }
          <span style={ [ styles.foodItemPrice ] }>{ numeral(price).format('$0.00') }</span>
        </div>
        <ButtonAddToCart 
          onClick={ this.addToCart.bind(this) } 
          disabled={ disabled }
        />
      </li>
    )
  }

}