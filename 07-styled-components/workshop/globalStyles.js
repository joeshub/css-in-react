import { injectGlobal, css } from 'styled-components'
import theme from './theme'

const resets = css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }  
`

const appGlobals = css`
  body {
    font-size: 16px;
    min-height: 100vh;
    background-color: ${theme.white};
  }

  @media screen and (min-width: 700px) {
    body {
      font-size: 15px;
    }
  }

  body, input, button {  
    font-family: helvetica;
  }

  body, a {
    color: ${theme.black};
  }
`

const cssTransitionGroupStyles = css`
  /* animate removing store content */
  .closeStoreContent-leave {
    max-height: 320px;
    opacity: 1;
  }

  @media screen and (min-width: 700px) {
    .closeStoreContent-leave {
      padding-bottom: 50px;
    }
  }

  .closeStoreContent-leave-active {
    max-height: 0;
    opacity: 0.01;
    padding-bottom: 0 !important;
    transition: all ${theme.videoAnimationSpeed}ms ${theme.videoAnimationFunc};
  }
`

injectGlobal(resets, appGlobals, cssTransitionGroupStyles)
