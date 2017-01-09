import React from 'react'
import { render } from 'react-dom'
import { LikeButton } from './LikeButton'

import '../styles/style.css'

render (<LikeButton likes={9} />, document.getElementById('output'))
