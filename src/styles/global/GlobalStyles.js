
import { createGlobalStyle } from 'styled-components';
import { GRAY, BLACK } from '../colors/Colors';
import { transitions } from 'polished';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    width: 100%;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    background-color: ${ GRAY };
    ${ transitions(['background-color'], 'ease .3s') };
    background-color: ${ ({ darkMode }) => darkMode && BLACK };
  }
`;

export default GlobalStyles;