
import React from 'react';

import styled, { css } from 'styled-components';
import { UserCircle, LineChart, Star } from '@styled-icons/boxicons-regular';
import { transitions } from 'polished';

import { LIGHT_ORANGE, ORANGE, DARK_GRAY } from '../../../styles/colors/Colors';
import { pointer } from '../../../styles/helper/HelperStyles';
import PathConstants from '../../../constants/path/PathConstants';

export default function Option({
  type,
  onClick,
  isActive,
}) {
  let Icon;
  switch(type) {
    case PathConstants.HOME: Icon = UserIcon; break;
    case PathConstants.TECHS: Icon = TechsIcon; break;
    case PathConstants.HISTORIC: Icon = HistoricIcon; break;
    default: throw new Error('Unknow type.');
  }

  return(
    <Wrapper onClick={ onClick } isActive={ isActive }>
      <ActiveBar isActive={ isActive }/>
      <IconWrapper>
        <Icon isActive={ isActive }/>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;

  ${ transitions([ 'background-color' ], 'ease .2s') };

  ${ ({ isActive }) => isActive && css`
    background-color: ${ LIGHT_ORANGE };
  ` };

  :hover {
    background-color: ${ LIGHT_ORANGE };
    ${ pointer };
    & > :first-child {
      width: 15px;
    };

    & > :last-child > svg {
      color: ${ ORANGE };
    }
  };
`;

const ActiveBar = styled.div`
  height: 100%;
  background-color: ${ ORANGE };
  width: 0;

  ${ ({ isActive }) => isActive && css`
    width: 10px;
  ` };
  ${ transitions([ 'width' ], 'ease .2s') };
`;

const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const iconBaseStyle = css`
  height: 25px;
  align-self: center;
  color: ${ DARK_GRAY };
  ${ ({ isActive }) => isActive && css`
    color: ${ ORANGE };
  ` };

  ${ transitions([ 'color' ], 'ease .2s') };
`;

const UserIcon = styled(UserCircle)`
  ${ iconBaseStyle }
`;

const TechsIcon = styled(LineChart)`
  ${ iconBaseStyle }
`;

const HistoricIcon = styled(Star)`
  ${ iconBaseStyle }
`;