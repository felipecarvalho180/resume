
import React from 'react';

import styled, { css } from 'styled-components';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';
import { LineChart } from '@styled-icons/boxicons-regular/LineChart';
import { Star } from '@styled-icons/boxicons-regular/Star';

import { LIGHT_ORANGE, ORANGE } from '../../../styles/colors/Colors';

export default function Option({
  type
}) {
  let Icon;
  switch(type) {
    case Option.TYPE.USER: Icon = UserIcon; break;
    case Option.TYPE.TECHS: Icon = TechsIcon; break;
    case Option.TYPE.HISTORIC: Icon = HistoricIcon; break;
    default: throw new Error('Unknow type.');
  }

  return(
    <Wrapper>
      <ActiveBar />
      <IconWrapper>
        <Icon />
      </IconWrapper>
    </Wrapper>
  );
};

Option.TYPE = {
  USER: 'USER',
  TECHS: 'TECHS',
  HISTORIC: 'HISTORIC',
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: ${ LIGHT_ORANGE };
`;

const ActiveBar = styled.div`
  height: 100%;
  width: 10px;
  background-color: ${ ORANGE };
`;

const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const iconBaseStyle = css`
  height: 25px;
  align-self: center;
  color: ${ ORANGE };
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