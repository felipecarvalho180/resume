
import React from 'react';

import styled from 'styled-components';

import { Title } from '../../styles/component/ComponentStyles';
import Degree from '../../constants/degree/Degree';
import Card from '../../components/card/Card';

export default function Education() {
  return (
    <Wrapper>
      <EducationTitle>Education</EducationTitle>
      { Degree.map(d => (
        <Card 
          key={ d.timeLapsed }
          { ...d }
        />
      )) }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EducationTitle = styled(Title)`
  margin-bottom: 40px;
`;