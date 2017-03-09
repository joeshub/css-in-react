# React CSS Modules Solution Notes

## 1. Add the new global nav button to the header

```javascript
import { Nav } from '../../public/external/Nav'

<Nav />
```
## 2. Why did our header color change?

Nav has inadvertently changed the background-color of header 
in our app because both Nav and App write to the global .header class

## 3. Did Nav also have a side effect on our buttons?

No, we were safe! This is because we used CSS Modules, Nav's styles 
did not overwrite any of our .btn styles, and vice versa.

## 4. Move the Nav menu button to the right

```css
:global .nav .btn {
  right: 20px;
  left: auto;
}
```
## 5. Apply new color theme

We use PostCSS in this workshop which gives us the ability to safely 
use CSS custom properties to create and use variables, amongst other things.

```css
  --primary-color-dark: #8E5E8F;
  --primary-color-light: #E699E8;
  --primary-color-lighter: #8E5E8F;
  --secondary-color-dark: #55D750;
  --secondary-color-light: #71DE6E;
```

## 6. Try extract-text-plugin and weigh in

Pros on Extracting CSS:
* CSS file can be cached by client and JS bundle size is smaller
* Less DOM updates during page load
* Avoid Flash of Unstyled Content (FOUC)

Cons of Extracting CSS:
* Additional HTTP request
* Takes longer to build
* Not HMR, bad for development