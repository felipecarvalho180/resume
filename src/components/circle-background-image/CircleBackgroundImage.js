
import React from 'react';

import styled from 'styled-components';
import propTypes from 'prop-types';
import { ORANGE } from '../../styles/colors/Colors';

export default function CircleBackgroundImage({
  className,
  src,
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
  border: 1px solid ${ ORANGE };
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

CircleBackgroundImage.propTypes = {
  className: propTypes.string,
  src: propTypes.string,
};