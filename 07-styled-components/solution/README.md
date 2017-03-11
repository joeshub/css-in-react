# Styled Components Workshop

## 1. Import ThemeProvider from styled-components

```javascript
import { ThemeProvider } from 'styled-components'
```

## 2. Pass a theme to ThemeProvider
```javascript
import theme from './theme'

<ThemeProvider theme={ theme }>
```

## 3. Extract the header section into its own component
```javascript
export const Header = () => (
  <header className="header">
    <h1 className="header_logo"><span>Festival Store</span></h1>
    <h2 className="header_title">New Videos This Week</h2>
  </header>
)
```

## 4. Convert header into a Styled Component

```javascript
const StyledHeader = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  justify-content: center;
  height: 100px;
  align-items: center;
  color: #fff;
  flex-direction: column;
  @media screen and (min-width: 700px) {
      height: 166px;
  }
`

export const Header = () => 
  <StyledHeader className="header">
    <h1 className="header_logo"><span>Festival Store</span></h1>
    <h2 className="header_title">New Videos This Week</h2>
  </StyledHeader>
```

Notes: 
* The `back ticks` preceded by styled.div, this is the special sauce in Styled Components, known in ES6 as tagged template literals.
* Styled Components uses composition, so your class names are actually just functions that return styled html elements. This is why you don't need to have class declarations.

## 5. Change h1 and h2 to Logo and HeaderTitle

To save time we have already created these 2 components for you but you can go through them to learn how they work if you like.

```javascript
export const Header = () => 
  <StyledHeader>
    <Logo title="Festival Store" color={ theme.black } />
    <HeaderTitle>New Videos This Week</HeaderTitle>
  </StyledHeader>
```

## 6. Change color: #fff to use the black color from ThemeProvide

```javascript
color: ${props => props.theme.black};
```