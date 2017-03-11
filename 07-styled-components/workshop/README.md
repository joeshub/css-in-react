# Styled Components Workshop

* npm start
* open http://0.0.0.0:3333/styled-components/workshop/
* open the /07-styled-components/workshop/ folder in your editor 

References:
* This README https://github.com/joeshub/css-in-react/tree/master/07-styled-components/workshop
* Solution https://github.com/joeshub/css-in-react/tree/master/07-styled-components/solution

## 1. Import ThemeProvider from styled-components

Notice we are using ThemeProvider but it hasn't been defined. Notice an error on the page as well. Let's fix it.

* Open App.js and import ThemeProvider from styled-components.
* Nice work, now check the page, there is a new error asking us to pass in a theme to ThemeProvider

## 2. Pass a theme to ThemeProvider

We now need to pass ThemeProvider a theme. Luckily we have already created a theme.js file for you in our workshop folder.

* Import theme.js into App.js
* Next, find below where ThemeProvider is being rendered and pass it the imported 'theme' as a prop.
* Now check the page again in the browser, the error should be gone but we notice an unstyled header section.

## 3. Extract the header section into its own component

We will fix the styling in few mintues, but first let's move the header section out of App.js into its own component. To get you started we've already created a scaffold.

* Cut out the entire header section from App.js and paste it into the export section of components/Header.js
* Next back in App.js render Header where the header tag used to be. You have now extracted out Header into its own component.

## 4. Convert header into a Styled Component

Notice the header of our app still works but is still unstyled. That is because in this workshop we no longer uses an external css file that dictates layout. So .header, .header_logo, and .header_title are not defined anywhere. We will need to import those styles into our App. 

* Open up /public/css/app.css
* Copy the 2 rules for the header element styles
* Open up Header.js and paste them in between the two backticks ``
* Delete the 2 the lines that have a .header selector on them along with the matching curly braxces.
* Finally in the export section, swap out the 'header' HTML tag with the 'StyledHeader' component we just created
* Save this and open up the browser again, You should see styling for the header component!

## 5. Change h1 and h2 to Logo and HeaderTitle

Next we will render 2 new Styled Components instead of the H1 and H2 tags in Header.js file.

* Find on line 3 that we have imported Logo, and HeaderTitle
* Change <h1 to <Logo
* Change <h2 to <HeaderTitle
* Remove all the className attributes from all 3 elements
* Pass the string "Festival Store" as a prop named title to Logo
* Pass black to Logo from our theme, e.g. color={ theme.black }

## 6. Change color: #fff to use the black color from ThemeProvide

Notice we can't see the HeaderTitle text on the page. Let's fix that.
We also want to take advantage of our theme so we don't hard code colors in our app.

* Replace color: #fff in styled.div with
* ${props => props.theme.black};

## 7. For Extra credit 

* Look into globalStyles.js and see how we are injecting global styles like resets and fonts
* Look into CustomNav.js and see how we are using the 3rd party Nav library and styling it differently
* Look at Button.js and notice that we always render the icon after the text. Can you figure out how we can make the position of the button icon configurable?
