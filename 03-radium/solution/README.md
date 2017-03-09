# Radium Solution Notes

## 1. Import the StyleRoot componet from radium and wrap App.js with StyleRoot

```javascript
import { StyleRoot } from 'radium'

// inside render
return (
  <StyleRoot>
    your app code here
  </StyleRoot>
)
```

## 2. Uncomment this line inside app.css to import our global stylesheet into App.js

```css
@import url("../../public/css/app.css");
```

## 3. Add the ButtonBuyNow component to the ShoppingCart.js component

```javascript
import { ButtonBuyNow } from './index'

// render it after the Cart Total amount
<ButtonBuyNow />
```

## 4. Apply custom styling to ButtonBuyNow.js

```javascript
const customStyles = {
  btn: {
    backgroundColor: '#ec4800',
    width: '110px',
    ':hover': {
      backgroundColor: '#f98d00',
    }
  }
}
```

## 5. Extra credit - Pass these props to ButtonBuyNow inside of ShoppingCart.js 
(onClick and disabled). The first one is to go to the confirmation page, and 
the second one is to disable the button if the cart is empty.

```javascript
<ButtonBuyNow 
  onClick={ this.props.onBuy }
  disabled={ totalPrice === 0 }
/>
```