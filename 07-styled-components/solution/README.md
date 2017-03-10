# Styled Components Workshop

## 1. Replce the video_items unordered list in App.js with a new Styled Component

First Uncomment line 6, to import styled from 'styled-components'

Write the code for a new Styled Component on top of App.js on line 11 
and call it VideoItems. Here's the code to get you started:

const VideoItems = styled.ul``

Note the `back ticks` preceded by styled.ul, this is the special sauce 
in Styled Components, known in ES6 as tagged template literals.

## 2. Replace the UL element with the new VideoItems component

Still inside App.js find <ul className="video_items"></ul> and replace
it with the <VideoItems> component you just created. Save App.js and look
at the page in the browser. We've still have the same elements but now
we've lost the CSS rules from the .video_items class. So let's add those.

## 3. Migrate CSS rules from .video_items to VideoItems

Open up /public/css/app.css and find the /* video_items */ section.
Copy the 2 .video_items rules. Open App.js and paste those rules inside the
back ticks of the VideoItems component we created in step 1.

Think of this component as your .video_items class declarations. So, you'll just 
delete all the class declaration logic and keep everything else in between.
e.g. remove .video_items {} and keep its contents.

Now if you go back to your web browser everything should be back to normal. Inspect
the UL element. Notice the new 2 generated classes on the element.

Also tagged template 
literals are nice that you can have line breaks in them. Altohou if you have 
an error in your tagged template literal, you won't see an error in the console.