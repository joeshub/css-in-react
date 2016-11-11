import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle'

import CodeSlide from 'spectacle-code-slide'
// import shiaLabeoufMagicGif from "./shiaLabeoufMagic.gif"
// import preloader from "spectacle/lib/utils/preloader";

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Import custom component
import Interactive from '../assets/interactive'

import Logo from './truliaLogo'

import { LikeButton as LikeButtonSass } from '../../08-sass-button/src/LikeButton'
import { LikeButton as LikeButtonJSON } from '../../09-react-style-object/src/LikeButton'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')


const images = {
  planet: require('../assets/images/planet.jpg'),
  gbu: require('../assets/images/gbu.gif'),
  good: require('../assets/images/good.jpg'),
  bad: require('../assets/images/bad.jpg'),
  pollution: require('../assets/images/pollution.jpg')
}

preloader(images)

const theme = createTheme({
  primary: '#20c063',
  secondary: '#ffffff',
  tertiary: '',
  quartenary: ''
}, {
  primary: 'Open Sans Condensed',
  secondary: 'Lobster Two',
  tertiary: 'monospace'
})

export default class Presentation extends React.Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>

          <Slide>
            <Heading bold caps fill>
              CSS <Text textColor="black" style={{marginTop:20}}>in</Text>
            </Heading>
            <Heading bold fit style={{marginTop:-50}}>
              React
            </Heading>
          </Slide>

          <Slide>
            <div style={{marginBottom:20}}>
              <Logo />
            </div>
            <Link href="https://twitter.com/joeseifi">
              <Text textColor="white" style={{marginBottom:50,marginTop:50}}>Joe Seifi &nbsp;&nbsp;&nbsp; @joeseifi</Text>
            </Link>
          </Slide>
          
          <Slide transition={['zoom']} bgImage={images.gbu.replace('/', '')} bgDarken={0.65} textColor="primary">
            <Appear><Heading bold caps fit textSize="10px">the good</Heading></Appear>
            <Appear><Heading bold caps> the bad </Heading></Appear>
            <Appear><Heading caps fit>and the ugly</Heading></Appear>
          </Slide>

          <Slide bgImage={images.good.replace('/', '')} bgDarken={0.65} textColor="primary">
            <Heading bold caps fit>
              CSS3 (the good)
            </Heading>
            <List textColor="secondary">
              <Appear><ListItem>Familiarity - (CSS Level 1 released 19 years ago)</ListItem></Appear>
              <Appear><ListItem>Optimized Browser parsing and layout</ListItem></Appear>
              <Appear><ListItem>JavaScript DOM API</ListItem></Appear>
              <Appear><ListItem>Inheritance structure - JSON like</ListItem></Appear>
              <Appear><ListItem>Media Queries - size and feature detection</ListItem></Appear>
              <Appear><ListItem>Pseudo Selectors - browser states</ListItem></Appear>
              <Appear><ListItem>Basic math via calc()</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgImage={images.bad.replace('/', '')} bgDarken={0.65} textColor="primary">
            <Heading bold caps fit>
              CSS3 (the bad)
            </Heading>
            <List textColor="secondary">
              <Appear><ListItem>Flat - nested rules not supported</ListItem></Appear>
              <Appear><ListItem>Needs vendor prefixes</ListItem></Appear>
              <Appear><ListItem>No variables, no functions</ListItem></Appear>
              <Appear><ListItem>Some dynamic updates still require JavaScript</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgImage={images.pollution.replace('/', '')} bgDarken={0.65} textColor="primary">
            <Heading bold caps fit>
              CSS3 (the ugly)
            </Heading>
            <List textColor="secondary">
              <Appear><ListItem>Global namespace pollution</ListItem></Appear>
              <Appear><ListItem>Importance, specificity wars, & eventually !important</ListItem></Appear>
              <Appear><ListItem>Nondeterministic, depends on source order</ListItem></Appear>
              <Appear><ListItem>Encapsulation - sharing code across components is scary</ListItem></Appear>
              <Appear><ListItem>Changes & dead code elimination are manual</ListItem></Appear>
              <Appear><ListItem>Missing rules and syntax errors at runtime</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading bold caps fit>
              Methodologies
            </Heading>
            <Heading>
              (like flux for CSS)
            </Heading>
            <List>
              <Appear><ListItem>Object-Oriented CSS (OOCSS)</ListItem></Appear>
              <Appear><ListItem>Scalable and Modular Architecture for CSS (SMACSS)</ListItem></Appear>
              <Appear><ListItem>Block, Element, Modifier (BEM)</ListItem></Appear>
              <Appear><ListItem>ATOMIC CSS</ListItem></Appear>
              <Appear><ListItem>SUIT CSS</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading bold caps fit>
              Pre/Post Processors
            </Heading>
            <Heading>
              (like babel for CSS)
            </Heading>
            <List>
              <Appear><ListItem>SASS</ListItem></Appear>
              <Appear><ListItem>LESS</ListItem></Appear>
              <Appear><ListItem>Stylus</ListItem></Appear>
              <Appear><ListItem>PostCSS</ListItem></Appear>
              <Appear><ListItem>Autoprefixer / cssnext</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading bold caps fit>example:</Heading>
            <Heading>a like button</Heading>
          </Slide>

          <Slide>
            <Heading bold caps>html</Heading>
            <CodePane textSize={20} lang='html' source={require('raw!../assets/examples/button-html.example')}></CodePane>
          </Slide>

          <Slide>
            <Heading bold caps>or</Heading>
          </Slide>

          <Slide>
            <Heading bold caps>jsx & react</Heading>
            <CodePane textSize={20} lang='jsx' source={require('raw!../assets/examples/button-react.example')}></CodePane>
          </Slide>

          <CodeSlide
            textSize={24}
            transition={[]}
            lang="javascript"
            code={require('raw!../assets/examples/button-react.example')}
            border="10px solid green"
            ranges={[
              { loc: [0, 8], title: 'DOM API' },
              { loc: [2, 5], note: 'JSX syntax' },
              { loc: [3, 4], note: 'class becomes className' }
            ]} />

          <Slide>
            <Heading bold caps>and</Heading>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <Heading bold caps>css3</Heading>
                <CodePane textSize={12} lang='css' source={require('raw!../assets/examples/css3.example')}></CodePane>
              </Fill>
              <Fill>
                <Heading bold caps>sass</Heading>
                <CodePane textSize={12} lang='css' source={require('raw!../assets/examples/sass.example')}></CodePane>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading bold caps>result</Heading>
            <LikeButtonSass likes={9} />
          </Slide>

          <Slide>
            <Heading bold caps fit>now let's try the same</Heading>
            <Appear><Heading bold caps fit>with inline styles</Heading></Appear>
            <Appear><Heading bold fit>in React</Heading></Appear>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <Heading bold caps>json</Heading>
                <CodePane textSize={12} lang='javascript' source={require('raw!../assets/examples/json.example')}></CodePane>
              </Fill>
              <Fill>
                <Heading bold caps>react</Heading>
                <CodePane textSize={12} lang='jsx' source={require('raw!../assets/examples/json-react.example')}></CodePane>
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            textSize={24}
            transition={[]}
            lang="jsx"
            code={require('raw!../assets/examples/json.example')}
            ranges={[
              { loc: [0, 25], title: 'CSS IN JAVASCRIPT' },
              { loc: [11, 14], note: 'No support for pseudo selectors like :hover & :after' },
              { loc: [16, 17], note: 'camelCase all your property names' },
              { loc: [20, 23], note: 'and wrap value declarations in quotes' }
            ]} />

          <CodeSlide
            textSize={24}
            transition={[]}
            lang="jsx"
            code={require('raw!../assets/examples/json-react.example')}
            ranges={[
              { loc: [0, 25], title: 'IN YOUR COMPONENT' },
              { loc: [2, 3], note: 'import your styles object' },
              { loc: [6, 10], note: 'and spread them into inline style rules' },
              { loc: [12, 17], note: 'Notice! 2 rule references to inline rule objects vs. just the "badge" className in CSS. Selectors are gone! No descendent selectors, no sibling selectors, no attribute selectors etc.' }
            ]} />

          <Slide>
            <Heading bold caps>result with json</Heading>
            <LikeButtonJSON likes={9} />
          </Slide>

          <Slide>
            <Heading bold caps fit>issues with using the plain</Heading>
            <Heading bold fit>JSON object</Heading>
            <List>
              <Appear><ListItem>No pseudo selectors :hover :before etc.</ListItem></Appear>
              <Appear><ListItem>No media queries @media viewport etc.</ListItem></Appear>
              <Appear><ListItem>No rule nesting</ListItem></Appear>
              <Appear><ListItem>No auto prefixing</ListItem></Appear>
              <Appear><ListItem>No CSS extraction</ListItem></Appear>
              <Appear><ListItem>FOUC</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading bold caps fit>Frameworks for</Heading>
            <Heading bold fit>CSS in JS</Heading>
            <List>
              <Appear><ListItem>Radium</ListItem></Appear>
              <Appear><ListItem>react-css-modules</ListItem></Appear>
              <Appear><ListItem>styled-components</ListItem></Appear>
              <Appear><ListItem>aphrodite, jss, cxs, csjs, glamor, so many more</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <Heading bold caps>radium</Heading>
                <CodePane textSize={12} lang='jsx' source={require('raw!../assets/examples/radium.example')}></CodePane>
              </Fill>
              <Fill>
                <Heading bold caps>react</Heading>
                <CodePane textSize={12} lang='jsx' source={require('raw!../assets/examples/radium-react.example')}></CodePane>
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            textSize={24}
            transition={[]}
            lang="jsx"
            code={require('raw!../assets/examples/radium-full.example')}
            ranges={[
              { loc: [0, 0], title: 'RADIUM STYLE SYNTAX' },
              { loc: [0, 20] },
              { loc: [1, 6], note: 'javascript object notation' },
              { loc: [1, 10], note: 'and we get nesting back' },
              { loc: [8, 9], note: 'still camelCase and quotes around values' },
              { loc: [10, 14], note: 'we also get pseudo selectors :hover :active :focus' },
              { loc: [14, 18], note: '@media queries are supported (with caveats) and internally use the matchMedia interface' }
            ]} />

          <CodeSlide
            textSize={24}
            transition={[]}
            lang="jsx"
            code={require('raw!../assets/examples/radium-react.example')}
            ranges={[
              { loc: [0, 0], title: 'RADIUM REACT SYNTAX' },
              { loc: [0, 20] },
              { loc: [1, 3], note: 'import your styles and Radium' },
              { loc: [4, 6], note: 'decorate your component class with @Radium' },
              { loc: [9, 13], note: 'build your inline style references in an array' }
            ]} />

          <Slide>
            <Heading bold fit caps>Radium notes</Heading>
            <List>
              <Appear><ListItem>Wraps your function or component with @decorators</ListItem></Appear>
              <Appear><ListItem>Creates a class to manage state for :hover :active :focus</ListItem></Appear>
              <Appear><ListItem><Code textSize={18}>Radium.getState(this.state, 'btnPrimary', ':hover')</Code></ListItem></Appear>
              <Appear><ListItem>Style similar child elements with .map()</ListItem></Appear>
              <Appear><ListItem>matchMedia for media queries - IE polyfill, server-side?</ListItem></Appear>
              <Appear><ListItem>Styles are inline, extract into CSS for production?</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="You get free dead code elimination, styles of unused components are left out of the build.">
            <Heading bold caps fit>inline styles (the good)</Heading>
            <List>
              <Appear><ListItem>No globals (with caveats)</ListItem></Appear>
              <Appear><ListItem>Built in dead code elimination, only used components</ListItem></Appear>
              <Appear><ListItem>Presentation logic is in your view, find and edit</ListItem></Appear>
              <Appear><ListItem>State, constants</ListItem></Appear>
              <Appear><ListItem>Composition, loops, computation</ListItem></Appear>
              <Appear><ListItem>Distribute via import and export</ListItem></Appear>
              <Appear><ListItem>Dynamic styling, app & DOM state e.g. data attributes</ListItem></Appear>
              <Appear><ListItem>Some :pseudo selectors re-implemented in JavaScript</ListItem></Appear>
              <Appear><ListItem>For example <Code textSize={18}>:last-child</Code> becomes <Code textSize={18}>i === arr.length - 1</Code></ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="Browser states aren't functional until the app is hydrated with JS, meaning that elements will not have hover, focus, or active styles until JS is loaded. Server-side render will need to know your browser size, chance of being wrong - FISC flash of incorrectly styled content">
            <Heading bold caps fit>inline styles (the bad)</Heading>
            <List>
              <Appear><ListItem>No <Code textSize={18}>::after ::before ::selection</Code></ListItem></Appear>
              <Appear><ListItem>Media queries have to use <Code textSize={18}>window.matchMedia()</Code></ListItem></Appear>
              <Appear><ListItem>Autoprefixing <Code textSize={18}>display: -webkit-flex; display: flex;</Code></ListItem></Appear>
              <Appear><ListItem>Animations via @keyframes re-implemented in JS</ListItem></Appear>
              <Appear><ListItem>Highest priority before !important No Specificity Cascading</ListItem></Appear>
              <Appear><ListItem>Performance</ListItem></Appear>
              <Appear><ListItem>Debugging in devtools is a pain</ListItem></Appear>
              <Appear><ListItem>Duplicate markup for similar elements</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading bold caps fit>CSS Modules</Heading>
          </Slide>

          <Slide>
            <Heading bold fit caps>react-css-modules</Heading>
            <List>
              <Appear><ListItem>Based on Interoperable CSS - loadable, linkable CSS</ListItem></Appear>
              <Appear><ListItem>Works with SASS, PostCSS etc.</ListItem></Appear>
              <Appear><ListItem>Broken CSS = compile error</ListItem></Appear>
              <Appear><ListItem>Using an undefined CSS Module = no warning</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <Heading bold caps>sass</Heading>
                <CodePane textSize={12} lang='css' source={require('raw!../assets/examples/modules.example')}></CodePane>
              </Fill>
              <Fill>
                <Heading bold caps>react</Heading>
                <CodePane textSize={12} lang='jsx' source={require('raw!../assets/examples/modules-react.example')}></CodePane>
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            textSize={24}
            transition={[]}
            lang="jsx"
            code={require('raw!../assets/examples/modules-react.example')}
            ranges={[
              { loc: [0, 0], title: 'REACT-CSS-MODULES SYNTAX' },
              { loc: [0, 17] },
              { loc: [1, 2], note: 'import the library' },
              { loc: [2, 3], note: 'import your css or sass file' },
              { loc: [4, 6], note: '@decorate your component with your styles' },
              { loc: [10, 11], note: 'use styleName to reference your css rules' }
            ]} />

          <Slide>
            <Heading bold fit caps>react-css-modules notes</Heading>
            <List>
              <Appear><ListItem>styles object or this.props.styles[yourClasslassName]</ListItem></Appear>
              <Appear><ListItem>Configure your component classnames via <Code textSize={18}>localIdentName</Code></ListItem></Appear>
              <Appear><ListItem>Webpack CSS loader <Code textSize={18}>[path]___[name]__[local]___[hash:base64:5]</Code></ListItem></Appear>
              <Appear><ListItem>Generated classname <Code textSize={18}>styles-___likebutton__btn-primary___HYx7V</Code></ListItem></Appear>
              <Appear><ListItem>No overruling, intentionally nor unintentionally</ListItem></Appear>
              <Appear><ListItem>Composition <Code textSize={18}>composes: parentClass</Code> same as <Code textSize={18}>@extend</Code> in Sass</ListItem></Appear>
              <Appear><ListItem>Others from ICSS <Code textSize={18}>:global :export :import</Code></ListItem></Appear>
              <Appear><ListItem>Use extract text plugin in production</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading bold caps fit>Styled Components</Heading>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <Heading bold caps>styled</Heading>
                <CodePane textSize={12} lang='jsx' source={require('raw!../assets/examples/styled-components.example')}></CodePane>
              </Fill>
              <Fill>
                <Heading bold caps>react</Heading>
                <CodePane textSize={12} lang='jsx' source={require('raw!../assets/examples/styled-components-react.example')}></CodePane>
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            textSize={24}
            transition={[]}
            lang="javascript"
            code={require('raw!../assets/examples/styled-components.example')}
            ranges={[
              { loc: [0, 0], title: 'STYLED COMPONENTS SYNTAX' },
              { loc: [0, 25] },
              { loc: [0, 1], note: 'import the library' },
              { loc: [2, 3], note: 'implement your styled component in an ES6 template literal' },
              { loc: [4, 17], note: 'write plain css' },
              { loc: [6, 17], note: 'with nested rules' },
              { loc: [9, 10], note: 'and pseudo selectors' },
              { loc: [13, 15], note: 'notice no quotes around anything! gotcha at first' },
              { loc: [14, 15], note: 'use variables, math, anything you can do in JS' }
            ]} />


          <CodeSlide
            textSize={24}
            transition={[]}
            lang="jsx"
            code={require('raw!../assets/examples/styled-components-react.example')}
            ranges={[
              { loc: [0, 0], title: 'STYLED COMPONENTS USAGE' },
              { loc: [0, 18] },
              { loc: [1, 2], note: 'import your styled component' },
              { loc: [8, 11], note: 'render it, passing in your overloaded classes and child classes' }
            ]} />

            <Slide>
              <Heading bold fit caps>styled components notes</Heading>
              <List>
                <Appear><ListItem>Autoprefixing included for free</ListItem></Appear>
                <Appear><ListItem>Write plain CSS, no weird polyfills needed</ListItem></Appear>
                <Appear><ListItem>Generated classnames are namespaced <Code textSize={18}>btn-primary gjkSC</Code></ListItem></Appear>
                <Appear><ListItem>Injects style tags into the document head</ListItem></Appear>
                <Appear><ListItem>Supports server-side rendering, but not extract text plugin</ListItem></Appear>
                <Appear><ListItem>keyframes helper keeps your rules local to your component</ListItem></Appear>
                <Appear><ListItem>Theming is built in</ListItem></Appear>
              </List>
            </Slide>

          <Slide>
            <Heading bold caps fit>WHAT'S NEXT</Heading>
            <List>
              <Appear><ListItem>Web Components and Shadow DOM</ListItem></Appear>
              <Appear><ListItem>cssnext</ListItem></Appear>
              <Appear><ListItem>CSS4</ListItem></Appear>
              <Appear><ListItem>¿¡ !?</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading bold caps fit>Thank you!</Heading>

            <Text>👋🏼</Text>
            <Link textColor="black" href="https://github.com/joeshub/css-in-react">

            <Text lineHeight={4} marginTop={20} bold textColor="tertiary">View examples on Github</Text>
          </Link>
          </Slide>

        </Deck>
      </Spectacle>
    )
  }
}
