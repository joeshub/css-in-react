# Radium Workshop

## 1. Import the StyleRoot component from radium and wrap App with StyleRoot

Notice we have an error. This is because Radium uses plugins to handle things 
like media queries and keyframe animations. To fix this issue we need to 'wrap' 
our entire app with the StyleRoot component. Open up App.js to get started.

## 2. Import our external global app.css file

We will be using a global css file for main layout of the our app. Open up 
app.css and uncomment the line that is importing the file from /public/css/app.css
Notice how in App.js we are using className="" to refer to these global classes.

## 3. Add the ButtonBuyNow component to the ShoppingCart component

BuyNowButton.js has already been created for you in the components folder. 
'import' it into ShoppingCart and render it after the Cart Total amount.

## 4. Apply custom styling to ButtonBuyNow
You'll notice the styling needs to be adjusted. In ButtonBuyNow.js add customStyles 
to btn and pass those via the customStyles prop to Button in render.
- background color should be: #ec4800
- hovered background color should be: #f98d00
- width of the button should be: 110 pixels

## 5. For extra credit
Pass 2 props to ButtonBuyNow inside of ShoppingCart.js
- disabled - when the totalPrice is 0
- onClick - this should call onBuy inside ShoppingCart.js which 
  takes the user to the confirmation page.
