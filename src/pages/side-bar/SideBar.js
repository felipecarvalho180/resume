
import React from 'react';

import styled from 'styled-components';
import { WHITE } from '../../styles/colors/Colors';
import Option from './option/Option';

export default function SideBar() {
  return (
    <Wrapper>
      { SideBar.OPTIONS.map(so => (
        <Option key={ so.type } type={ so.type }/>
      )) }
    </Wrapper>
  );
};

SideBar.OPTIONS = [
  { type: Option.TYPE.USER },
  { type: Option.TYPE.TECHS },
  { type: Option.TYPE.HISTORIC },
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 80px;
  padding: 30px 0;
  background-color: ${ WHITE };
  -webkit-box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
  box-shadow: 10px 0px 11px 0px rgba(0,0,0,0.1);
`;