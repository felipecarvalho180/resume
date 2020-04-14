
import React from 'react';

import styled, { css } from 'styled-components';

import { mqDesktop } from '../../styles/helper/HelperStyles';
import Profile from './profile/Profile';
import Contacts from './contacts/Contacts';

export default function PersonalInfo() {
  return (
    <Wrapper>
      <Profile />
      <Contacts />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;

  ${ mqDesktop(() => css`
    width: 500px;
    padding: 20px 50px;
    margin-bottom: 0;
  `) }
`;