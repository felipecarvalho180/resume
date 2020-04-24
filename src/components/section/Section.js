
import React from 'react';

import propTypes from 'prop-types';
import styled from 'styled-components';

import { DARK_GRAY, WHITE } from '../../styles/colors/Colors';

export default function Section({
  children,
}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs({
  id: 'Section'
})`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${ WHITE };
  border-radius: 10px;
  padding: 20px;
  margin-right: 20px;

  :last-child {
    margin-right: 0px;
  }

  -webkit-box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
`;

Section.propTypes = {
  children: propTypes.node,
};