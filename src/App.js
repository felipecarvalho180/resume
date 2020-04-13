
import React from 'react';

import styled from 'styled-components'; 

import PersonalInfo from './pages/personal-info/PersonalInfo';
import GlobalStyles from './styles/global/GlobalStyles';

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <PersonalInfo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export default App;
