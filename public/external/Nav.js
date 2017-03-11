import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import './nav.css'

export class Nav extends Component {

  state = {
    showMenu: false
  }

  toggleNav = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render () {
    const navClassNames = classnames('nav', {
      showMenu: this.state.showMenu
    })
    return (
      <nav className={ navClassNames }>
        <button className="btn" onClick={ this.toggleNav }></button>
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="">Purchases</a></li>
          <li><a href="">Profile</a></li>
          <li><a href="">Log out</a></li>
        </ul>
      </nav>
    )
  }
}
