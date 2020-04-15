
import React from 'react';

import styled from 'styled-components';

import { BaseLabel } from '../../styles/component/ComponentStyles';
import Section from '../../components/section/Section';

export default function Summary() {
  return (
    <Section title='Professional Summary' dinamicTitle>
      <SummaryLabel>
        I'm learning Web Development for two and half years, and in that time I went through several challenges, througout my developer journey, however I'm a developer that always looking to grow up and overcome.<br/>
        I have been working with a large part of the React eco system dealing with Hooks, Redux, Saga, Styled Components...<br/>
        During the last year, I work with React Native where I could learn a lot about the mobile universe and its functionalities.<br/>
        Welcome to my page!
      </SummaryLabel>
    </Section>
  );
};

const SummaryLabel = styled(BaseLabel)`
  line-height: 35px;
  text-align: justify;
`;