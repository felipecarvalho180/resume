
import React from 'react';

import styled, { css } from 'styled-components';

import CircleBackgroundImage from '../../../components/circle-background-image/CircleBackgroundImage';
import ProfileImage from '../../../assets/ProfileImage.jpg';
import { Title } from '../../../styles/componet/ComponentStyles';
import Section from '../../../components/section/Section';
import Contacts from './contacts/Contacts';
import { mqTablet } from '../../../styles/helper/HelperStyles';

export default function Profile() {
  return (
    <Wrapper>
      <Section>
        <PersonalWrapper>
          <CustomCircleBackgroundImage src={ ProfileImage } />
          <NameWrapper>
            <Title>Felipe Carvalho</Title>
          </NameWrapper>
        </PersonalWrapper>
        <JobLabel>Front End Developer</JobLabel>
        <Contacts />
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs({
  id: 'Profile'
})`
  display: flex;
  flex: 1;
  margin-bottom: 20px;

  ${ mqTablet(() => css`
    margin-right: 20px;
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
  flex-direction: column;
  align-items: center;
`;

const CustomCircleBackgroundImage = styled(CircleBackgroundImage)`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

const JobLabel = styled.label`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
`;