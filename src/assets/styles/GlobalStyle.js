import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  a, button, p, h1, h2 {
    font-family: 'Montserrat', sans-serif;
  }
`;
