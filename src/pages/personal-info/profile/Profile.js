
import React from 'react';

import styled, { css } from 'styled-components';

import CircleBackgroundImage from '../../../components/circle-background-image/CircleBackgroundImage';
import ProfileImage from '../../../assets/ProfileImage.jpg';
import { DARK_BLUE } from '../../../styles/colors/Colors';
import { mqDesktop } from '../../../styles/helper/HelperStyles';

export default function Profile() {
  return (
    <Wrapper>
      <PersonalWrapper>
        <CustomCircleBackgroundImage src={ ProfileImage } />
        <NameWrapper>
          <NameLabel>Felipe</NameLabel>
          <NameLabel>Carvalho</NameLabel>
        </NameWrapper>
      </PersonalWrapper>
      <JobLabel>Front End Developer</JobLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-bottom: 50px;

  ${ mqDesktop(() => css`
    flex-direction: column;
  `) }
`;

const PersonalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${ mqDesktop(() => css`
    flex-direction: column;
    align-items: center;
  `) }
`;

const CustomCircleBackgroundImage = styled(CircleBackgroundImage)`
  height: 250px;
  width: 250px;
  border-radius: 125px;
  margin-bottom: 20px;
`;

const NameLabel = styled.label`
  font-size: 30px;
  font-weight: bold;
  color: ${ DARK_BLUE };

  :first-child {
    margin-right: 5px;
  }
`;

const JobLabel = styled.label`
  color: ${ DARK_BLUE };
  margin-bottom: 10px;
  font-size: 34px;
  align-self: center;

  ${ mqDesktop(() => css`
    font-size: 20px;
  `) }
`;