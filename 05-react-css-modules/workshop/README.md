# React CSS Modules Workshop

## 1. Add the new global nav button to the header

We have been asked to add the company's new global 
Nav component to our page. Find the Nav component 
in /public/external/Nav.js and import it into App.js 
and render it just before the header section.

## 2. Why did our header color change?

Examine 
/public/external/nav.css and 
components/Button/button.css 
Can you see why this happened?

## 3. Did Nav also have a side effect on our buttons?

Looking carefully at nav.css and button.css do you 
see shared class names?

## 4. Move the Nav menu button to the right

Inside of components/main.css write a new global rule 
to move Nav's .btn to the right side. Hint: the 
syntax for global rules in css-modules looks like this 

```css
:global .foo {}
```

## 5. Apply new color theme

Design has updated our brand's look. They sent us 
new primary and secondary colors. Luckily we've 
already extracted all colors into the 
variables.css file. Update these colors in that file.

```css
  --primary-color-dark: #8E5E8F;
  --primary-color-light: #E699E8;
  --primary-color-lighter: #8E5E8F;
  --secondary-color-dark: #55D750;
  --secondary-color-light: #71DE6E;
```

Now uncomment the 2 commented out rules in main.css 
to finalize our theme change. 

## 6. Try extract-text-plugin and weigh in

Stop the server by hitting ctrl+c a couple of times, then run 
'npm run build'. Take a look at the page again, and notice 
that now we have an actual css file for this workshop 
which is loaded in the head that looks like this 
<link href="/react-css-modules/workshop.css" rel="stylesheet">

Name some pros and some cons of extracting 
our CSS out of JS into CSS files?