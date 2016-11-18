# Topics
- Media Queries
- Assets
    - Images
    - Fonts
- Cascading
    - avoid duplication of rules
- Loading order
    - !important
    - selector specifity
- Globals, leaks, Namespacing
- Caching and code splitting
- component dependency chain
- SSR -> static file
- Browser execution speed
    - Bootstrap JS and CSSDOM takes time
    - Browsers have optimized their execution since the beginning
- React Native
- METHODOLOGIES
    - BEM
    - OOCSS
    - SMACSS
    - ATOMIC CSS
    - SUIT CSS
- Problems with Spaghetthi CSS
    - Global Namespace & Isolation
    - Nondeterministic
    - Maintenance and changes
- CSS Processor features
    - Variables
    - Mixins
    - Nesting
    - Math
    - Color Functions
    - Auto-Prefixing
    - Imports
    - Minification
    - Dependencies
    - Dead code removal
    - TYPES
        - PRE-PROCESS
            - Sass
            - Less
            - Stylus
        - POST-PROCESS
            - PostCSS
            - cssnext
- REACT
    - Inline Styles
        - JavaScript
        - Logic
        - Dynamic
        - camelCase css property Names
        - Animation
        - Object Literals
        - Issues
            - Sweeping changes are difficult
            - Logic spread across components
            - Pass some styles via Props to share code
            - Media Queries
        - Features That libraries provide
            - Media queries @media (min-width: 600px)
            - Pseudo classes :hover :active
            - Autoprefixing - border, flex, box-shadow etc
            - Extract CSS into separate files - avoid FOUC

# Talk ideas
- Learning from other languages and other frameworks. From other developers. Student of core concepts not frameworks.
- From next.js README
    - Why CSS-in-JS?
        - next/css is powered by Glamor. While it exposes a JavaScript API, it produces regular CSS and therefore important features like :hover, animations, media queries all work.
        - There’s no tradeoff in power. Instead, we gain the power of simpler composition and usage of JavaScript expressions.
        - Compiling regular CSS files would be counter-productive to some of our goals. Some of these are listed below.
        - Please note: we are very interested in supporting regular CSS, since it's so much easier to write and already familiar. To that end, we're currently exploring the possibility of leveraging Shadow DOM to avoid the entire CSS parsing and mangling step [#22]

# Frameworks
https://github.com/andreypopp/react-css-components
https://github.com/threepointone/glamor
https://github.com/styled-components/styled-components
https://github.com/rtsao/csjs
https://github.com/Khan/aphrodite
https://github.com/cssinjs/jss
https://github.com/jxnblk/hyp
https://github.com/jxnblk/react-cxs
https://github.com/jxnblk/cxs
https://github.com/ReactTraining/react-media - MJ - media queries
https://github.com/tachyons-css/react-native-style-tachyons
https://github.com/Wildhoney/Interpose
http://reactpatterns.com/#Style component - proxy

# TODO
- csjs, glamor
- css modules
- postcss and css next http://cssnext.io/
- https://bigbitecreative.com/a-look-into-writing-future-css-with-postcss-cssnext/
- https://github.com/rtsao/csjs
- https://github.com/martinandert/react-inline
- https://github.com/rtsao/csjs
- pros of inline css https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e#.vj9fphdxt
- This comes the closest to what the "ultimate" solution likely is: Shadow DOM.
- https://formidable.com/blog/2015/03/01/launching-radium/
- https://github.com/FormidableLabs/radium/tree/master/docs/comparison
- PostCSS http://cssnext.io/usage/
- Aphrodite https://github.com/Khan/aphrodite
- Server side rendering
- Animation
- Component state
- sass resource loader https://github.com/shakacode/sass-resources-loader
- https://github.com/jxnblk/repng
- https://reactjsnews.com/isomorphic-react-in-real-life

# READ
- https://byjoeybaker.com/react-inline-styles
- https://medium.com/@jviereck/modularise-css-the-react-way-1e817b317b04#.t3xylc475
- https://glenmaddern.com/articles/interoperable-css

# TOREAD
- https://github.com/websdk/vanilla#2-styling
- https://github.com/thysultan/dio.js#diocomponentprototypestylesheet
- https://github.com/zeit/next.js/issues/22#issuecomment-260206661
- https://github.com/callemall/material-ui/issues/684
- https://github.com/styled-components/comparison
- https://github.com/MicheleBertoli/css-in-js
- https://speakerdeck.com/vjeux/react-css-in-js
- http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html
- https://docs.google.com/spreadsheets/d/1FaPtpyk66IJLSWt1FpDKpNu-gfrOUzVi8ZhDIiZ7sK8/edit#gid=0
- http://fullstackforum.com/software/2015/07/14/styling-in-react-and-atomic-css/
- http://bradfrost.com/blog/post/atomic-web-design/
- http://andrewhfarmer.com/how-to-style-react/
- https://medium.com/seek-developers/block-element-modifying-your-javascript-components-d7f99fcab52b#.5eyf-qco7q
- https://twitter.com/chantastic/status/754495969517985792
- https://docs.google.com/presentation/d/1pL8e2OC8iDUWCvGkixYB18bRXjiVRmSgwiWoxiQN3vQ/edit#slide=id.p
- https://www.youtube.com/watch?v=NoaxsCi13yQ
- https://www.youtube.com/watch?v=E3jQQsFxUes&feature=youtu.be&t=837
- https://www.youtube.com/watch?v=BXOF_8jDdf8
- https://www.youtube.com/watch?v=U86-MFPsarQ
- http://blog.vjeux.com/2015/javascript/react-rally-animated-react-performance-toolbox.html
- https://css-tricks.com/css-modules-part-1-need/
- https://github.com/ahfarmer/react-samples/tree/master/css-modules-by-example
- https://medium.com/@jviereck/modularise-css-the-react-way-1e817b317b04#.mv70ujmlg
- https://medium.com/seek-developers/the-end-of-global-css-90d2a4a06284#.95ekiyxcn
- http://survivejs.com/react/advanced-techniques/styling-react/
- http://maintainablecss.com/chapters/introduction/
- http://survivejs.com/blog/glamor-interview/
- http://hugogiraudel.com/2015/06/18/styling-react-components-in-sass/
- https://vimeo.com/187454104
- https://medium.com/maintainable-react-apps/journey-to-enjoyable-maintainable-styling-with-react-itcss-and-css-in-js-632cfa9c70d6
- https://github.com/zeit/next.js/issues/22
- http://glenmaddern.com/articles/interoperable-css
- https://speakerdeck.com/davidwells/bulletproof-css-in-react
- https://vimeo.com/channels/986495/187454104
- https://facebook.github.io/react/docs/dom-elements.html
- http://learn.shayhowe.com/advanced-html-css/complex-selectors/

# React Libraries that offer UI components
- https://github.com/palantir/blueprint
- https://github.com/react-bootstrap/react-bootstrap/
- https://github.com/callemall/material-ui/tree/master/src
- https://github.com/nordsoftware/react-foundation
- https://github.com/Semantic-Org/Semantic-UI-React
- https://github.com/Evo-Forge/Essence
- https://react-mdl.github.io/react-mdl/
- https://github.com/nikgraf/belle/
- https://github.com/elementalui/elemental
- https://github.com/muicss/mui
- https://github.com/grommet/grommet
- https://github.com/react-toolbox/react-toolbox/
- https://github.com/ant-design/ant-design
- http://coveo.github.io/vapor/components/

# Outside World
https://vuejs.org
React Native
Shadow DOM https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom
https://github.com/Wildhoney/ReactShadow
https://github.com/webyak/react-static-plate
http://postcss.parts
http://cssnext.io

# Animation libraries
https://github.com/joshwcomeau/react-flip-move

# Slideshow frameworks
https://github.com/FormidableLabs/spectacle-boilerplate
https://github.com/thejameskyle/spectacle-code-slide

# Tools
http://staxmanade.com/CssToReact/
https://babeljs.io/repl/

# Talks
ReactJS at Trulia!
- http://www.meetup.com/ReactJS-San-Francisco/events/231925171/

SXSW March 9th-March 19th
- http://schedule.sxsw.com/2017/events/PP67181
- http://schedule.sxsw.com/2017/speakers/832149

# Webpack
- file loader - generates files with hashes, can set a min size limit
- url loader - creates inline data URLs for small resources
- image loader - compress images
- css loader - finds import and url() statements and turns them into require
- style loader - style loader injects the resulting css into the bundle, JSON to style
