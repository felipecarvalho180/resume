
import React from 'react';

import styled from 'styled-components';
import { Title } from '../../styles/component/ComponentStyles';
import Card from './card/Card';

export default function WorkExperience() {
  return (
    <Wrapper>
      <WorkExperienceTitle>Work Experience</WorkExperienceTitle>
      <Card></Card>
      <Card></Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkExperienceTitle = styled(Title)`
  margin-bottom: 40px;
`;