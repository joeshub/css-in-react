import React from 'react'
import styled from 'styled-components'

export const StyledHeaderTitle = styled.h2`
  margin-top: 6px;
  font-size: 13px;
  @media screen and (min-width: 700px) {
    margin-top: 12px;
    font-size: initial;
  }
`

export const HeaderTitle = () => 
<StyledHeaderTitle>New Videos This Week</StyledHeaderTitle>