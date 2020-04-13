
import React from 'react';

import styled from 'styled-components';

export default function CircleBackgroundImage({
  src,
  className,
}) {
  return (
    <Wrapper className={ className }>
      <Image src={ src } />
    </Wrapper>
  ); 
};

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #FFF;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
