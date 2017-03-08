# React CSS Modules Workshop

## 1. Add the new global nav button to the header

A UX team has created a new global nav component for everyone to use. We have been asked to add this new Nav button to our checkout page by Product. Find the component in /public/Nav/Nav.js and import it into App.js Then render Nav in App.js just before the header section.

## 2. Examine nav.css and button.css

Notice the updated header! Open up /public/Nav/nav.css and look at the classes. We see a .header class and a .btn class
Since both Nav and App write to the global .header class, Nav has updated the background-color of header in our app.

Now lets' look at /components/Button/buttons.css and notice our .btn class, Notice that nav.css also uses a .btn class. But since we used CSS Modules to scope our button css, Nav's styles did not overwrite any of our .btn styles, and vice versa.

## 3. Write global CSS in button.css to style the Nav button.

Inside of /components/Button/buttons.css add a new global rule that makes the nav button 100 pixels wide. Hint: the syntax for global rules in css-modules looks like this

:global .foo {}

## 4. Apply new colors

We have a new set of colors to apply to the site also from the marketing team. Luckily we have already extracted our colors for this project. Open up the variables.css and update these colors. You should be able to copy and paste.

  --primary-color-dark: #8E5E8F;
  --primary-color-light: #E699E8;
  --primary-color-light-20: #8E5E8F;
  --secondary-color-dark: #55D750;
  --secondary-color-light: #71DE6E;

