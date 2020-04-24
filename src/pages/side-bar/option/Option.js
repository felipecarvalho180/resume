
import React from 'react';

import styled, { css } from 'styled-components';
import { UserCircle, LineChart, Star } from '@styled-icons/boxicons-regular';
import { transitions } from 'polished';

import { LIGHT_ORANGE, ORANGE, DARK_GRAY } from '../../../styles/colors/Colors';
import { pointer } from '../../../styles/helper/HelperStyles';

export default function Option({
  type,
  onClick,
}) {
  let Icon;
  switch(type) {
    case 'Profile': Icon = UserIcon; break;
    case 'Techs': Icon = TechsIcon; break;
    case 'Historic': Icon = HistoricIcon; break;
    default: throw new Error('Unknow type.');
  }

  return(
    <Wrapper onClick={ onClick }>
      <IconWrapper>
        <Icon />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;

  ${ transitions([ 'background-color' ], 'ease .2s') };

  :hover {
    background-color: ${ LIGHT_ORANGE };
    ${ pointer };

    & > :last-child > svg {
      color: ${ ORANGE };
    }
  };
`;

const IconWrapper = styled.div`
  display: flex;
  width: 60px;
  justify-content: center;
`;

const iconBaseStyle = css`
  height: 25px;
  align-self: center;
  color: ${ DARK_GRAY };
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