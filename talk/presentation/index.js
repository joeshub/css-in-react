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
              CSS in
            </Heading>
            <Heading bold fit>
              React
            </Heading>
          </Slide>

          <Slide transition={['zoom']} bgImage={images.gbu.replace('/', '')} bgDarken={0.65} textColor="primary">
            <Appear><Heading bold caps fit>the good</Heading></Appear>
            <Appear><Heading bold caps fit> the bad </Heading></Appear>
            <Appear><Heading caps fit>and the ugly</Heading></Appear>
          </Slide>

          <Slide>
            <div style={{marginBottom:20}}>
              <Logo />
            </div>
            <Link href="https://twitter.com/joeseifi">
              <Text>@joeseifi</Text>
            </Link>
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
              <Appear><ListItem>No Variables, No Functions</ListItem></Appear>
              <Appear><ListItem>Some dynamic updates still require JavaScript</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgImage={images.pollution.replace('/', '')} bgDarken={0.65} textColor="primary">
            <Heading bold caps fit>
              CSS3 (the ugly)
            </Heading>
            <List textColor="secondary">
              <Appear><ListItem>Global namespace pollution</ListItem></Appear>
              <Appear><ListItem>Importance, Specificity wars, & eventually !important</ListItem></Appear>
              <Appear><ListItem>Nondeterministic, depends on source order</ListItem></Appear>
              <Appear><ListItem>Encapsulation - Sharing code across components is scary</ListItem></Appear>
              <Appear><ListItem>Changes & Dead code elimination are manual</ListItem></Appear>
              <Appear><ListItem>Missing rules and syntax errors at runtime</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading bold caps fit>
              Methodologies
            </Heading>
            <Heading>
              (like flux for css)
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
              (like babel for css)
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
            <Heading bold fit>a like button</Heading>
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
              { loc: [0, 25], title: 'CSS in JavaScript' },
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
              { loc: [0, 25], title: 'in your component' },
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
            <Heading bold fit>JSON Object</Heading>
            <List>
              <Appear><ListItem>No Pseudo Selectors :hover :before etc.</ListItem></Appear>
              <Appear><ListItem>No Media Queries @media viewport etc.</ListItem></Appear>
              <Appear><ListItem>No Rule Nesting</ListItem></Appear>
              <Appear><ListItem>No Auto Prefixing</ListItem></Appear>
              <Appear><ListItem>No CSS extraction</ListItem></Appear>
              <Appear><ListItem>FOUC</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading bold caps fit>Frameworks for</Heading>
            <Heading bold fit>inline styles</Heading>
            <List>
              <Appear><ListItem>Radium</ListItem></Appear>
              <Appear><ListItem>aphrodite</ListItem></Appear>
              <Appear><ListItem>jss, cxs, csjs, glamor</ListItem></Appear>
              <Appear><ListItem>so so many more</ListItem></Appear>
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
              { loc: [0, 0], title: 'Radium style syntax' },
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
              { loc: [0, 0], title: 'Radium React syntax' },
              { loc: [0, 20] },
              { loc: [1, 3], note: 'import your styles and Radium' },
              { loc: [4, 6], note: 'decorate your component class with @Radium' },
              { loc: [9, 13], note: 'build your inline style references in an array' }
            ]} />

          <Slide>
            <Heading bold fit>Radium notes</Heading>
            <List>
              <Appear><ListItem>Wraps your function or component with @decorators</ListItem></Appear>
              <Appear><ListItem>Creates a class to manage state for :hover :active :focus</ListItem></Appear>
              <Appear><ListItem textColor="black">Radium.getState(this.state, 'keyForButton', ':hover')</ListItem></Appear>
              <Appear><ListItem>To style similar child elements you can use .map()</ListItem></Appear>
              <Appear><ListItem>matchMedia for media queries - IE polyfill, server-side?</ListItem></Appear>
              <Appear><ListItem>Styles are inline, extract into CSS for production?</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="You get free dead code elimination, styles of unused components are left out of the build.">
            <Heading bold caps fit>inline styles (the good)</Heading>
            <List>
              <Appear><ListItem>Built in dead code elimination</ListItem></Appear>
              <Appear><ListItem>Presentation logic is in your view, know where to find and edit it.</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="">
            <Heading bold caps fit>inline styles (the bad)</Heading>
            <List>
              <Appear><ListItem></ListItem></Appear>
              <Appear><ListItem>You can't define CSS keyframe animations in inline styles, so you can't define them in Radium JS objects. You can, however, reference a CSS animation you defined in a stylesheet (and soon a CSS animation you define in a Style tag) in an inline style:</ListItem></Appear>
              <Appear><ListItem>Two Radium features don't work completely with server side rendering yet:
                Media queries in their present state can't be evaluated until the app is hydrated with JS, meaning that the server-side render will not include proper media query styles.
              Browser states aren't functional until the app is hydrated with JS, meaning that elements will not have hover, focus, or active styles until JS is loaded.</ListItem></Appear>
              <Appear><ListItem>Media Queries or Element Queries - matchMedia - server side -  initial state you ship down to the client has a very good chance of being wrong - FISC flash of incorrectly styled content</ListItem></Appear>
              <Appear><ListItem>Re-usable animations with @keyframes are out too. That's a bummer because CSS-based animations are a lot easier to make performant than JavaScript based animations</ListItem></Appear>
              <Appear><ListItem>debugging in devtools is a pain. Inline-styles make it impossible to see changes made to one component affect all other similar components.</ListItem></Appear>
              <Appear><ListItem>Of course, there's also the problem of re-usability. One of the greatest features (and pain points) of CSS is that styles can be overridden with specificity or order. Inline styles have the highest specificity and are last in the order priority. Without a way to override styles, it's much harder to build generic components like button or a.</ListItem></Appear>
              <Appear><ListItem>duplicate markup for (potentially many) similarly styled elements.</ListItem></Appear>
              <Appear><ListItem>browser needs to parse all the  style tags instead of a single CSS rule</ListItem></Appear>
              <Appear><ListItem>Without global styles we loose out on the cascading nature of CSS</ListItem></Appear>
              <Appear><ListItem>vendor prefixes - without style-fallbacks, we don't get wonderful features like flexbox</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="">
            <Heading bold caps fit>inline styles (the ugly)</Heading>
            <List>
              <Appear><ListItem></ListItem></Appear>
              <Appear><ListItem>You can't define CSS keyframe animations in inline styles, so you can't define them in Radium JS objects. You can, however, reference a CSS animation you defined in a stylesheet (and soon a CSS animation you define in a Style tag) in an inline style:</ListItem></Appear>
              <Appear><ListItem>Two Radium features don't work completely with server side rendering yet:
                Media queries in their present state can't be evaluated until the app is hydrated with JS, meaning that the server-side render will not include proper media query styles.
              Browser states aren't functional until the app is hydrated with JS, meaning that elements will not have hover, focus, or active styles until JS is loaded.</ListItem></Appear>
              <Appear><ListItem>Media Queries or Element Queries - matchMedia - server side -  initial state you ship down to the client has a very good chance of being wrong - FISC flash of incorrectly styled content</ListItem></Appear>
              <Appear><ListItem>Re-usable animations with @keyframes are out too. That's a bummer because CSS-based animations are a lot easier to make performant than JavaScript based animations</ListItem></Appear>
              <Appear><ListItem>debugging in devtools is a pain. Inline-styles make it impossible to see changes made to one component affect all other similar components.</ListItem></Appear>
              <Appear><ListItem>Of course, there's also the problem of re-usability. One of the greatest features (and pain points) of CSS is that styles can be overridden with specificity or order. Inline styles have the highest specificity and are last in the order priority. Without a way to override styles, it's much harder to build generic components like button or a.</ListItem></Appear>
              <Appear><ListItem>duplicate markup for (potentially many) similarly styled elements.</ListItem></Appear>
              <Appear><ListItem>browser needs to parse all the  style tags instead of a single CSS rule</ListItem></Appear>
              <Appear><ListItem>Without global styles we loose out on the cascading nature of CSS</ListItem></Appear>
              <Appear><ListItem>vendor prefixes - without style-fallbacks, we don't get wonderful features like flexbox</ListItem></Appear>
            </List>
          </Slide>

          <Slide>

            Pros of inline styles
            https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e#.vj9fphdxt

            div

            display: -webkit-flex;
            display: flex;

            Because you can't declare two display styles. That makes flexbox impossible because iOS needs the webkit prefix.
          </Slide>

          <Slide>
          </Slide>

          <Slide>
          </Slide>

          <Slide>
            <Link href="https://github.com/joeshub/css-in-react"><Text bold caps textColor="tertiary">View on Github</Text></Link>
          </Slide>

        </Deck>
      </Spectacle>
    )
  }
}
