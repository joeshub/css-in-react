import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import numeral from 'numeral'
import { ButtonAddToCart } from './index'
import { videoItem as styles } from '../css-modules'

@CSSModules(styles, { allowMultiple: true })
export class VideoItem extends Component {

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
      <li styleName="video_item">
        <figure styleName="video_item_figure">
          <img styleName="video_item_image" src={ photoPath } />
        </figure>
        <div styleName="video_item_details">
          { name }
          <span styleName="video_item_price">{ numeral(price).format('$0.00') }</span>
          <span styleName="video_item_meta">{ length }<br />{ filesize } { format }</span>
        </div>
        <ButtonAddToCart 
          onClick={ this.addToCart.bind(this) } 
        />
      </li>
    )
  }

}