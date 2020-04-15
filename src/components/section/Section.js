
import React, { useEffect, useState } from 'react';

import propTypes from 'prop-types';
import styled from 'styled-components';

import { Title } from '../../styles/component/ComponentStyles';

export default function Section({
  children,
  dinamicTitle,
  title,
}) {
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
      { dinamicTitle ? screenSize >= 1080 && (
        <SectionTitle>{ title }</SectionTitle>
      ) : (
        <SectionTitle>{ title }</SectionTitle>
      ) }
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  :last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled(Title)`
  margin-bottom: 40px;
`;

Section.propTypes = {
  children: propTypes.node,
  dinamicTitle: propTypes.bool,
  title: propTypes.string,
};