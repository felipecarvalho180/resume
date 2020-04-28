
import React from 'react';

import { Email } from '@styled-icons/material-outlined/Email';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { SocialLinkedin } from '@styled-icons/foundation/SocialLinkedin';
import { transitions } from 'polished';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { GRAY, DARK_BLUE, DARK_GRAY, ORANGE } from '../../../../../styles/colors/Colors';
import { mqDesktop, pointer } from '../../../../../styles/helper/HelperStyles';



export default function Contact({
  href,
  icon,
  value,
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

  ${ mqDesktop(() => css`
    ${ ({ href }) => !!href && css`
      transform: scale(1);
      opacity: 1;
      ${ pointer };

      ${ transitions([ 'transform', 'opacity' ], 'ease .3s') }
      &:hover {
        transform: scale(1.01);
        opacity: 0.7;
      }

    ` }
  `) }
`;

const contactIconStyle = css`
  height: 18px;
  align-self: center;
  color: ${ DARK_GRAY };
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
  font-size: 14px;
  font-weight: bold;
  color: ${ ORANGE };
`;

Contact.propTypes = {
  href: propTypes.string,
  icon: propTypes.string,
  value: propTypes.string,
};