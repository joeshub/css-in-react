import styled from 'styled-components'
import THEME from './theme'

const StyledLikeButton = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-family: arial;
  padding: 6px 12px;
  border: 0;
  cursor: pointer;
  ${props => props.primary ? `
    color: ${THEME.textColor};
    background-color: ${THEME.buttonColor};
    &:hover {
      background-color: ${THEME.buttonColorHover};
    }
    .badge {
      color: ${THEME.buttonColorHover};
      background-color: ${THEME.textColor};
    }
    ` : ''};
  .badge {
    display: inline-block;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    border-radius: 10px;
    padding: 3px 6px;
    position: relative;
    top: -1px;
  }
`
export default StyledLikeButton
