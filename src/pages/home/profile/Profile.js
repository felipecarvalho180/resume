
import React from 'react';

import styled from 'styled-components';

import CircleBackgroundImage from '../../../components/circle-background-image/CircleBackgroundImage';
import ProfileImage from '../../../assets/ProfileImage.jpg';
import { Title } from '../../../styles/componet/ComponentStyles';
import Section from '../../../components/section/Section';

export default function Profile() {
  return (
    <Wrapper>
      <Section>
        <PersonalWrapper>
          <CustomCircleBackgroundImage src={ ProfileImage } />
          <NameWrapper>
            <Title>Felipe</Title>
            <Title>Carvalho</Title>
          </NameWrapper>
        </PersonalWrapper>
        <JobLabel>Front End Developer</JobLabel>
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
  height: 250px;
  width: 250px;
  border-radius: 125px;
  margin-bottom: 20px;
`;

const JobLabel = styled.label`
  margin-bottom: 10px;
  font-size: 25px;
  text-align: center;
`;