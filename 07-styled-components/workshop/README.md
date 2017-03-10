# Styled Components Workshop

## 1. Import ThemeProvider from styled-components

Notice we are using ThemeProvider but it hasn't been defined. 

* Open App.js and import ThemeProvider from styled-components.

## 2. Pass a theme to ThemeProvider

We now need to pass ThemeProvider a theme. Luckily we have already created a theme.js file for you in our workshop folder.

* Import theme.js into App.js
* Next, find below where ThemeProvider is being rendered and pass it the imported 'theme' as a prop.

## 3. Extract the header section into its own component

Next we want to move the header section of our App.js file into a Styled Component. To get you started we've already created a scaffold.

* Cut out the enter header section from App.js and paste it into the export section of components/Header.js

* Next back in App.js render Header where the header tag used to be. You have now extracted out Header into its own component.

## 4. Convert header into a Styled Component

Notice the header of our app is unstyled. That is because in this workshop we no longer use an external css file that dictates layout. All that has been now imported into globalStyles.js

* Open up /public/css/app.css
* Copy the 2 rules for the header element styles
* Opne up Header.js and paste them in between the two backticks ``
* Delete the lines that define the .header wrappers
* Finally still in the export section, swap out the header HTML tag with StyledHeader component we just created

## 5. Change h1 and h2 to Logo and HeaderTitle

Next we will render 2 new Styled Components that give us the H1 and H2 tags in Header.js file.

* Find on line 3 that we have imported Logo, and HeaderTitle
* Change <h1 to <Logo
* Change <h2 to <HeaderTitle
* Remove all the className attributes from all 3 elements
* Change Logo so "Festival Store" is passed in as a title prop

## 6. Change color: #fff to use the black color from ThemeProvide

Notice we can't see the HeaderTitle text on the page. Let's fix that.
We also want to take advantage of our theme so we don't hard code colors in our app.

* Replace color: #fff in styled.div with
* ${props => props.theme.black};

## 7. For Extra credit 

* Look into globalStyles.js and see how we are injecting global styles like resets and fonts
* Look into CustomNav.js and see how we are using the 3rd party Nav library and styling it differently
* Look at Button.js and notice that we always render the icon after the text, can you figure out how we can make the position of the button icon configurable?