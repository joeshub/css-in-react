import React, { Component } from 'react'
import styles from './styles'

export const LikeButton = ({likes}) => 
  <button style={{
    ...styles.btn,
    ...styles.btn_primary
  }}>
  Like <span style={{
    ...styles.btn__badge,
    ...styles.btn_primary__badge
  }}>{likes}</span>
  </button>
