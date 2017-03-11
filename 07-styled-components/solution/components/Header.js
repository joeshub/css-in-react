import React from 'react'
import styled from 'styled-components'
import { Logo, HeaderTitle } from './index'
import theme from '../theme'

const StyledHeader = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  justify-content: center;
  height: 100px;
  align-items: center;
  color: ${props => props.theme.black};
  flex-direction: column;
  @media screen and (min-width: 700px) {
    height: 166px;
  }
`

export const Header = () => 
  <StyledHeader>
    <Logo title="Festival Store" color={ theme.black } />
    <HeaderTitle />
  </StyledHeader>
