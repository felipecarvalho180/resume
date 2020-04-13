
import React from 'react';

import styled, { css } from 'styled-components';
import { Email } from '@styled-icons/material-outlined/Email';
import { SocialLinkedin } from '@styled-icons/foundation/SocialLinkedin';
import { Github } from '@styled-icons/boxicons-logos/Github';

import { iconBaseStyle } from '../../../../styles/component/ComponentStyles';
import { GRAY, DARK_BLUE } from '../../../../styles/colors/Colors';
import { pointer } from '../../../../styles/helper/HelperStyles';
import { transitions } from 'polished';

export default function Contact({
  icon,
  value,
  href
}) {
  let Icon;
  switch(icon) {
    case 'EMAIL': Icon = EmailIcon; break;
    case 'LINKEDIN': Icon = LinkedInIcon; break;
    case 'GITHUB': Icon = GithubIcon; break;
    default: Icon = EmailIcon; break;
  }

  return(
    <Wrapper href={ href } target='_blank'>
      <Icon/>
      <ValueLabel>{ value }</ValueLabel>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: flex;
  width: 100%;
  height: 30px;
  align-self: flex-start;
  border-bottom: 1px solid ${ GRAY };
  margin-bottom: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  scale: 1;

  ${ pointer };

  :hover {
    &, * {
      font-size: 22px;
      height: 30px;
      scale: 1.01;

      ${ transitions(['font-size', 'height', 'scale'], 'ease-in .2s') };
    }
  }
`;

const contactIconStyle = css`
  ${ iconBaseStyle };
  margin-right: 5px;
`;

const EmailIcon = styled(Email)`
  ${ contactIconStyle };
`;

const LinkedInIcon = styled(SocialLinkedin)`
  ${ contactIconStyle };
`;

const GithubIcon = styled(Github)`
  ${ contactIconStyle };
`;

const ValueLabel = styled.label`
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  color: ${ DARK_BLUE };
`;