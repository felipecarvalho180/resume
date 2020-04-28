
import React, { Fragment } from 'react'

import styled, { css } from 'styled-components';
import { transitions } from 'polished';

import { LIGHT_BLUE, ORANGE } from '../../../../styles/colors/Colors';
import { pointer, mqDesktop } from '../../../../styles/helper/HelperStyles';
import CONTACT from '../../../../constants/contact/ContactConstants';
import Contact from './contact/Contact';
import PDF from '../../../../assets/Felipe.pdf';

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
  align-self: center;
  width: 150px;
  margin-top: 20px;
  padding: 10px;
  background-color: ${ ORANGE };
  border: none;
  border-radius: 15px;
  text-decoration: none;

  ${ pointer };

  ${ mqDesktop(() => css`
    transform: scale(1);

    ${ transitions(['scale', 'opacity'], 'ease .3s') };
    :hover {
      opacity: .7;
      transform: scale(1.01);
    }
  `) }
`;

const ButtonLabel = styled.label`
  font-size: 16px;
  color: #FFF;
  align-self: center;
`;