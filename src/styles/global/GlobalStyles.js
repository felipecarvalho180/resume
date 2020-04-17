
import { createGlobalStyle } from 'styled-components';
import { GRAY } from '../colors/Colors';

const GlobalStyles = createGlobalStyle`
  body {
    width: 100%;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    background-color: ${ GRAY };
  }
`;

export default GlobalStyles;