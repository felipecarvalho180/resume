
import React, { useState } from 'react';

import { transitions } from 'polished';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as DarkModeReducerActions } from '../../reducers/dark-mode/dark-mode.reducer';
import { WHITE, BLACK, LIGHT_BLACK } from '../../styles/colors/Colors';
import Option from './option/Option';
import CustomToggle from '../../components/custom-toggle/CustomToggle';

export default function SideBar() {
  const { darkMode } = useSelector(state => ({
    darkMode: state.darkMode,
  }));

  const { updateDarkMode } = bindActionCreators({
    updateDarkMode: DarkModeReducerActions.updateDarkMode,
  }, useDispatch());
  
  const [ selectedOption, setSelectedOption ] = useState(null);

  return (
    <Wrapper darkMode={ darkMode }>
      <OptionWrapper>
        { SideBar.OPTIONS.map(so => (
          <Option 
            key={ so.type } 
            type={ so.type }
            onClick={ () => setSelectedOption(so.type) }     
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
  { type: Option.TYPE.USER },
  { type: Option.TYPE.TECHS },
  { type: Option.TYPE.HISTORIC },
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 80px;
  padding: 30px 0;
  background-color: ${ WHITE };
  -webkit-box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  ${ transitions(['background-color'], 'ease .3s') };
  background-color: ${ ({ darkMode }) => darkMode && LIGHT_BLACK };
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