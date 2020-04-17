
import React from 'react';

import styled, { css } from 'styled-components'; 
import { useSelector } from 'react-redux';

import GlobalStyles from './styles/global/GlobalStyles';
import { mqDesktop } from './styles/helper/HelperStyles';
import SideBar from './pages/side-bar/SideBar';

function App() {
  const { darkMode } = useSelector(state => ({
    darkMode: state.darkMode,
  }));

  return (
    <Wrapper>
      <GlobalStyles darkMode={ darkMode }/>
      <SideBar />
    </Wrapper>
  );
}
    
    // <PersonalInfo />
    // <ContentWrapper>
    //   <Summary />
    //   <WorkExperience />
    //   <Education />
    //   <Techs />
    // </ContentWrapper>
const Wrapper = styled.div`
  display: flex;
  height: 100%;
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
