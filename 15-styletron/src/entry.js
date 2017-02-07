import React from 'react'
import { render } from 'react-dom'
import Styletron from 'styletron-client'
import { StyletronProvider } from 'styletron-react'

import LikeButton from './LikeButton'

import '../styles/style.scss'

const styleSheet = document.createElement('style')
document.head.appendChild(styleSheet)
const styletron = new Styletron([styleSheet])

render (
  <StyletronProvider styletron={styletron}>
    <LikeButton likes={9}/>
  </StyletronProvider>, document.getElementById('output')
)
