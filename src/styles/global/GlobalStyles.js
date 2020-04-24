
import { createGlobalStyle } from 'styled-components';
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
    background-color: ${ ({ colors }) => colors.primaryBackgroundColor };
    ${ transitions(['background-color'], 'ease .3s') };
  }

  h1, label {
    color: ${ ({ colors }) => colors.primaryColor };
  }

  #Section {
    ${ transitions(['background-color'], 'ease .3s') };
    background-color: ${ ({ colors }) => colors.secondaryBackgroundColor };
  }

  #SideBar {
    ${ transitions(['background-color'], 'ease .3s') };
    background-color: ${ ({ colors }) => colors.secondaryBackgroundColor };
  }
`;

export default GlobalStyles;