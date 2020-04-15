
import React, { Fragment } from 'react'

import styled, { css } from 'styled-components';
import { transitions } from 'polished';

import { LIGHT_BLUE } from '../../../styles/colors/Colors';
import { pointer, mqDesktop } from '../../../styles/helper/HelperStyles';
import CONTACT from '../../../constants/contact/ContactConstants';
import Contact from './contact/Contact';
import PDF from '../../../assets/Felipe.pdf';

export default function Contacts() {
  return (
    <Fragment>
      { CONTACT.map(c => (
        <Contact 
          key={ c.key }
          { ...c }
        />
      )) }
      <ResumeButton href={ PDF } target='_blank'>
        <ButtonLabel>Resume</ButtonLabel>
      </ResumeButton>
    </Fragment>
  );
};

const ResumeButton = styled.a`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 50px;
  margin-top: 50px;
  background-color: ${ LIGHT_BLUE };
  border: none;
  border-radius: 15px;
  text-decoration: none;

  ${ pointer };

  ${ mqDesktop(() => css`
    :hover {
      opacity: .7;
      scale: 1.05;
      ${ transitions(['scale', 'opacity'], 'ease .3s') };
    }
  `) }
`;

const ButtonLabel = styled.label`
  font-size: 20px;
  color: #FFF;
  align-self: center;
`;