
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { Title, BaseLabel } from '../../styles/component/ComponentStyles';

export default function Summary() {
  const [ screenSize, setScreenSize ] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setScreenSize(window.innerWidth));
    }
  });

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, [ ]);

  return (
    <Wrapper>
      { screenSize >= 1080 && (
        <SummaryTitle>Professional Summary</SummaryTitle>
      ) }
      <SummaryLabel>
        I'm learning Web Development for two and half years, and in that time I went through several challenges, througout my developer journey, however I'm a developer that always looking to grow up and overcome.<br/>
        I have been working with a large part of the React eco system dealing with Hooks, Redux, Saga, Styled Components...<br/>
        During the last year, I work with React Native where I could learn a lot about the mobile universe and its functionalities.<br/>
        Welcome to my page!
      </SummaryLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const SummaryTitle = styled(Title)`
  margin-bottom: 40px;
`;

const SummaryLabel = styled(BaseLabel)`
  line-height: 35px;
  text-align: justify;
`;