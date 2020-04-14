
import React from 'react';

import styled, { css } from 'styled-components'; 

import PersonalInfo from './pages/personal-info/PersonalInfo';
import GlobalStyles from './styles/global/GlobalStyles';
import Summary from './pages/summary/Summary';
import { mqDesktop } from './styles/helper/HelperStyles';

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <PersonalInfo />
      <Summary />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 20px;
  flex-direction: column;

  ${ mqDesktop(() => css`
    flex-direction: row;
  `) }
`;

export default App;
