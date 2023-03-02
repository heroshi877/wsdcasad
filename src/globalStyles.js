import { injectGlobal } from 'emotion'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Overpass;
    background: black;
    margin: 0;
  }

  a {
    color: #f3ba2f;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #f3ba2f;
    }

    &:visited {
      color: #f3ba2f
    } 
  }
`
