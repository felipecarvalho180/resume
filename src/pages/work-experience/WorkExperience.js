
import React from 'react';

import styled from 'styled-components';
import { Title } from '../../styles/component/ComponentStyles';
import Card from '../../components/card/Card';
import Experience from '../../constants/experience/ExperienceConstants';

export default function WorkExperience() {
  return (
    <Wrapper>
      <WorkExperienceTitle>Work Experience</WorkExperienceTitle>
      { Experience.map(e => (
        <Card 
          key={ e.timeLapsed }
          { ...e }
        />
      )) }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const WorkExperienceTitle = styled(Title)`
  margin-bottom: 40px;
`;