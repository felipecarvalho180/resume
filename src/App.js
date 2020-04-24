
import React, { useEffect, useState } from 'react';

import styled, { css } from 'styled-components'; 
import { useSelector } from 'react-redux';

import GlobalStyles from './styles/global/GlobalStyles';
import { mqDesktop } from './styles/helper/HelperStyles';
import SideBar from './pages/side-bar/SideBar';
import Routes from './routes/Routes';
import { ORANGE, LIGHT_ORANGE, GRAY, WHITE, BLACK, LIGHT_BLACK } from './styles/colors/Colors';
import Home from './pages/home/Home';
import Techs from './pages/techs/Techs';

function App() {
  const { darkMode } = useSelector(state => ({
    darkMode: state.darkMode,
  }));

  const [ activeColors, setActiveColors ] = useState({
    primaryColor: ORANGE,
    secondaryColor: LIGHT_ORANGE,
    primaryBackgroundColor: GRAY,
    secondaryBackgroundColor: WHITE,
  })

  useEffect(() => {
    if(!darkMode) {
      setActiveColors({
        primaryColor: ORANGE,
        secondaryColor: LIGHT_ORANGE,
        primaryBackgroundColor: GRAY,
        secondaryBackgroundColor: WHITE,
      });
      return;
    }

    setActiveColors({
      primaryColor: ORANGE,
      secondaryColor: LIGHT_ORANGE,
      primaryBackgroundColor: BLACK,
      secondaryBackgroundColor: LIGHT_BLACK,
    });
  }, [ darkMode ]);

  console.log(activeColors)
  return (
    <Wrapper>
      <GlobalStyles colors={ activeColors }/>
      <SideBar />
      <ChildWrapper>
        <Routes />
      </ChildWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const ChildWrapper = styled.div`
  width: 100%;
  padding-top: 60px;
`;

export default App;
