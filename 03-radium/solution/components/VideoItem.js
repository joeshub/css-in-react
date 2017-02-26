import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import numeral from 'numeral'
import { ButtonAddToCart } from './index'

const styles = {
  foodItem: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #E8E8E7',
    display: 'flex',
    height: '82px',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingRight: '20px',
    '@media (min-width: 608px)': {
      border: '0',
      height: 'auto',
      minWidth: '100px',
      flexFlow: 'column',
      width: '23%',
      flexShrink: '1',
      position: 'relative',
      padding: '150px 22px 22px',
      maxWidth: '188px'
    }
  },
  foodItemFigure: {
    height: '82px',
    width: '50px',
    overflow: 'hidden',
    marginRight: '20px',
    '@media screen and (min-width: 608px)': {
      height: '130px',
      width: '100%',
      position: 'absolute',
      left: '0',
      top: '0',
      display: 'block',
      overflow: 'hidden',
      marginRight: '0'
    },
  },
  foodItemImage: {
    height: '100%',
    marginLeft: '-50%',
    '@media screen and (min-width: 608px)': {
      marginLeft: 'initial'
    }
  },
  foodItemName: {
    flexGrow: '1',
    fontWeight: 'bold',
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    '@media screen and (min-width: 608px)': {
      display: 'flex',
      flexFlow: 'inherit',
      marginBottom: '20px',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'flex-end',
      fontSize: 'inherit'
    },
  },
  videoItemPrice: {
    paddingTop: '6px',
    fontWeight: 'normal',
    color: '#848484',
    '@media screen and (min-width: 608px)': {
      marginTop: '4px'
    }
  }
}

@Radium export class VideoItem extends Component {

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
          <span style={ [ styles.videoItemPrice ] }>{ numeral(price).format('$0.00') }</span>
        </div>
        <ButtonAddToCart 
          onClick={ this.addToCart.bind(this) } 
          disabled={ disabled }
        />
      </li>
    )
  }

}