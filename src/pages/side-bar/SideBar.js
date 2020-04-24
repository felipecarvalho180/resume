
import React from 'react';

import SweetScroll from 'sweet-scroll';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as DarkModeReducerActions } from '../../reducers/dark-mode/dark-mode.reducer';
import Option from './option/Option';
import CustomToggle from '../../components/custom-toggle/CustomToggle';
import { withRouter } from 'react-router-dom';

function SideBar() {
  const scroller = new SweetScroll({
    easing: 'easeInOutQuad',
    duration: 1000,
    offset: -80,
  });

  const { darkMode } = useSelector(state => ({
    darkMode: state.darkMode,
  }));

  const { updateDarkMode } = bindActionCreators({
    updateDarkMode: DarkModeReducerActions.updateDarkMode,
  }, useDispatch());

  return (
    <Wrapper>
      <OptionWrapper>
        { SideBar.OPTIONS.map(so => (
          <Option 
            key={ so.type } 
            type={ so.type }
            onClick={ () => scroller.toElement(document.getElementById(so.type)) }
          />
        )) }
      </OptionWrapper>

      <DarkModeToggle 
        value={ darkMode }
        onChange={ () => updateDarkMode(!darkMode) }
      />
    </Wrapper>
  );
};

SideBar.OPTIONS = [
  { type: 'Profile' },
  { type: 'Techs' },
  { type: 'Historic' },
]

const Wrapper = styled.div.attrs({
  id: 'SideBar'
})`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  z-index: 999;

  -webkit-box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
`;

const OptionWrapper = styled.div`
  display: flex;
`;

const DarkModeToggle = styled(CustomToggle)`
  display: flex;
  align-self: center;
  margin-right: 35px;
`;

export default withRouter(SideBar);