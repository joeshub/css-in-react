import React, { Component } from 'react'
// import classnames from 'classnames'
import { Button } from './index'
import '../../../public/workshop/css/button-icons.css'

// TODO should take text as prop, not required

export class AddToCartButton extends Component {

  state = { buttonText: 'Add' }

  onButtonClicked = (depressed) => {
    this.setState({
      buttonText: depressed ? 'Add' : 'Remove'
    })
  }

  render () {
    // const buttonClassNames = classnames('btn', {
    //   'depressed': this.state.depressed
    // })
    const { buttonText } = this.state

    const buttonClassNames = 'icon icon-add option_add_button'

    return (
      <Button 
        classNames={buttonClassNames} 
        onClick={this.onButtonClicked}
        >
        { buttonText }
      </Button>
      // <button 
      //   className={buttonClassNames} 
      //   onClick={this.onButtonClicked} 
      //   {...this.props}>
      // </button>
    )
  }
}
