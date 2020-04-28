
import React from 'react';

import styled from 'styled-components';

import Card from '../../../components/card/Card';
import Experience from '../../../constants/experience/ExperienceConstants';
import Section from '../../../components/section/Section';
import { Title } from '../../../styles/componet/ComponentStyles';

export default function WorkExperience() {
  return (
    <Wrapper>
      <Section>
        <CustomTitle>Work Experience</CustomTitle>
        { Experience.map(e => (
          <Card 
            key={ e.timeLapsed }
            { ...e }
          />
        )) }
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs({
  id: 'WorkExperience'
})`
  display: flex;
  flex: 1;
`;

const CustomTitle = styled(Title)`
  align-self: flex-start;
  margin-bottom: 20px;
`;