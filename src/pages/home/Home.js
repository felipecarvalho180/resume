
import React from 'react';

import styled from 'styled-components';

import Profile from './profile/Profile';
import Techs from '../techs/Techs';

export default function Home() {
  return (
    <Wrapper>
      <Profile />
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