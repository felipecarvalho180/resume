
import React, { useState, useEffect } from 'react';

import { transitions } from 'polished';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as DarkModeReducerActions } from '../../reducers/dark-mode/dark-mode.reducer';
import { WHITE, LIGHT_BLACK } from '../../styles/colors/Colors';
import Option from './option/Option';
import CustomToggle from '../../components/custom-toggle/CustomToggle';
import { withRouter } from 'react-router-dom';
import PathConstants from '../../constants/path/PathConstants';

function SideBar({
  history
}) {
  const { pathname } = history?.location;

  const { darkMode } = useSelector(state => ({
    darkMode: state.darkMode,
  }));

  const { updateDarkMode } = bindActionCreators({
    updateDarkMode: DarkModeReducerActions.updateDarkMode,
  }, useDispatch());

  const [ selectedOption, setSelectedOption ] = useState(null);

  useEffect(() => {
    if(!pathname) return;
    setSelectedOption(pathname);
  }, [ pathname ]);
  

  return (
    <Wrapper>
      <OptionWrapper>
        { SideBar.OPTIONS.map(so => (
          <Option 
            key={ so.type } 
            type={ so.type }
            onClick={ () => history.push(so.type) }     
            isActive={ so.type === selectedOption }
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
  { type: PathConstants.HOME },
  { type: PathConstants.TECHS },
  { type: PathConstants.HISTORIC },
]

const Wrapper = styled.div.attrs({
  id: 'SideBar'
})`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 80px;
  padding: 30px 0;
  -webkit-box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  /* background-color: ${ WHITE };
  ${ transitions(['background-color'], 'ease .3s') };
  background-color: ${ ({ darkMode }) => darkMode && LIGHT_BLACK }; */
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DarkModeToggle = styled(CustomToggle)`
  display: flex;
  align-self: center;
`;

export default withRouter(SideBar);