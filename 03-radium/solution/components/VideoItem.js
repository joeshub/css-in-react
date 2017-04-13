import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import numeral from 'numeral'
import { ButtonAddToCart } from './index'

const styles = {
  videoItem: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #E8E8E7',
    display: 'flex',
    height: '82px',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingRight: '20px',
    '@media (min-width: 700px)': {
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
  videoItemFigure: {
    height: '82px',
    width: '50px',
    overflow: 'hidden',
    marginRight: '20px',
    '@media screen and (min-width: 700px)': {
      height: '130px',
      width: '100.2%',
      position: 'absolute',
      left: '0',
      top: '0',
      display: 'block',
      overflow: 'hidden',
      marginRight: '0'
    },
  },
  videoItemImage: {
    height: '100%',
    marginLeft: '-50%',
    '@media screen and (min-width: 700px)': {
      transition: 'transform 180ms ease',
      marginLeft: '0',
      ':hover': {
        transform: 'scale3d(1.1, 1.1, 1)',
      }
    }
  },
  videoItemDetails: {
    flexGrow: '1',
    fontWeight: 'bold',
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    '@media screen and (min-width: 700px)': {
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
    color: '#f98d00',
    marginTop: '6px',
    fontWeight: 'normal',
    '@media screen and (min-width: 700px)': {
      marginTop: '12px',
      padding: '5px',
      border: '1px solid #f98d00',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  },
  videoItemMeta: {
    fontSize: '11px',
    fontWeight: 'normal',
    color: '#ccc',
    paddingTop: '6px',
    '@media screen and (min-width: 700px)': {
      paddingTop: '10px',
      lineHeight: '1.3'
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
    length: PropTypes.string,
    filesize: PropTypes.string,
    format: PropTypes.string,
    updateTotal: PropTypes.func.isRequired
  }

  addToCart (inCart) {
    this.props.updateTotal(this.props.price, inCart)
  }

  render () {
    const { id, name, price, photoPath, length, filesize, format } = this.props

    return (
      <li style={ [ styles.videoItem ] }>
        <figure style={ [ styles.videoItemFigure ] }>
          <img style={ [ styles.videoItemImage ] } src={ photoPath } />
        </figure>
        <div style={ [ styles.videoItemDetails ] }>
          { name }
          <span style={ [ styles.videoItemPrice ] }>{ numeral(price).format('$0.00') }</span>
          <span style={ [ styles.videoItemMeta ] }>{ length }<br />{ filesize } { format }</span>
        </div>
        <ButtonAddToCart 
          onClick={ this.addToCart.bind(this) } 
        />
      </li>
    )
  }

}