import React, { Component } from 'react'
import Button from './Button'

export class ButtonGroup extends Component {

  render () {
    const { children } = this.props
    // const buttons = children.map((el, i) => React.cloneElement(el, className="buttonGroup" />)
    return (
        <div>
          {children}
        </div>
    )
  }
}
