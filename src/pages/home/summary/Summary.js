
import React from 'react';

import styled from 'styled-components';

import Section from '../../../components/section/Section';

export default function Summary() {
  return (
    <Wrapper>
      <Section>
        <Title>Professional Summary</Title>
        <SummaryLabel>
          I've been working with web development for two and half years and in that time I went through several challenges, however I'm always looking to improve my skill set.<br /><br />

          More specifically in the past year, worked with the React ecosystem meaning Hooks, Redux, Saga, Styled Components... I also worked with React Native where I could learn a lot about the mobile universe and its functionalities.<br /><br />
          
          Welcome to my page!
        </SummaryLabel>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 20px;
`;

const Title = styled.label`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SummaryLabel = styled.label`
  font-size: 16px;
  text-align: justify;
`;