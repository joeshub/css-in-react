import React, { Component, PropTypes } from 'react'
import numeral from 'numeral'
import { ButtonAddToCart } from './index'
import '../../../public/workshop/css/video-item.css'

export class VideoItem extends Component {

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
      <li className="video_item">
        <figure className="video_item_figure">
          <img className="video_item_image" src={ photoPath } />
        </figure>
        <div className="video_item_name">
          { name }
          <span className="food_item_price">{ numeral(price).format('$0.00') }</span>
        </div>
        <ButtonAddToCart 
          onClick={ this.addToCart.bind(this) } 
          disabled={ disabled }
        />
      </li>
    )
  }

}