
import React from 'react';

import styled, { css } from 'styled-components'; 

import PersonalInfo from './pages/personal-info/PersonalInfo';
import GlobalStyles from './styles/global/GlobalStyles';
import Summary from './pages/summary/Summary';
import WorkExperience from './pages/work-experience/WorkExperience';
import { mqDesktop } from './styles/helper/HelperStyles';
import Education from './pages/education/Education';

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <PersonalInfo />
      <ContentWrapper>
        <Summary />
        <WorkExperience />
        <Education />
      </ContentWrapper>
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
