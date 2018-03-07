import React, { Component } from 'react'
import pkg from './package.json'
import { Button } from './Button'
import { ButtonGroup } from './ButtonGroup'

export default class App extends Component {
  state = {
    bgColor: '#ec4800',
    bgHover: '#ec480080'
  }

  onMouseMove = (e) => {
    const maxOffset = 5
    const { clientX, clientY } = e
    const { width, height, top, left } = e.target.getBoundingClientRect()
    const isAboveMid = top + (height/2) > clientY
    const isLeftOfMid = left + (width/2) > clientX
    const offsetPerPixelWidth = maxOffset / width * 2
    const offsetPerPixelHeight = maxOffset / height * 2
    const offsetX = (clientX - (left + (width/2))) * offsetPerPixelWidth * -1
    const offsetY = (clientY - (top + (height/2))) * offsetPerPixelHeight * -1

    this.setState({
      style: {
        textShadow: `${offsetX}px ${offsetY}px 0 #000`
      }
    })
  }

  render () {
    const { style } = this.state

    return (
      <main>
        <p>{pkg.description}</p>
        <Button style={ style } onMouseMove={ this.onMouseMove }>Button</Button>
        {/* <ButtonGroup>
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup> */}
      </main>
    )
  }
}
