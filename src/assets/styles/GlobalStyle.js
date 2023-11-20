import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
 
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
    font-weight: bold;
  }

  a, button, p, h1, h2 {
    font-family: 'Montserrat', sans-serif;
      font-weight: bold;
  }
`;
