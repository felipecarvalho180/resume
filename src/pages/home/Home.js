
import React from 'react';

import styled, { css } from 'styled-components';

import Profile from './profile/Profile';
import Techs from './techs/Techs';
import Summary from './summary/Summary';
import { mqTablet } from '../../styles/helper/HelperStyles';

export default function Home() {
  return (
    <Wrapper>
      <ProfileWrapper>
        <Profile />
        <Summary />
      </ProfileWrapper>
      <Techs />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${ mqTablet(() => css`
    flex-direction: row;
  `) }
`;