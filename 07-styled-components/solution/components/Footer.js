import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  text-align: center;
  padding: 40px 0 80px;
  font-size: 12px;
  color: ${props => props.theme.grayLight};
`

export const Footer = () => 
  <StyledFooter>
    Festival Store - 123 Lorem ipsum dolor sit amet, consectetur adipiscing elit, San Francisco, CA
  </StyledFooter>
