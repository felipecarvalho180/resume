
import React from 'react';

import styled from 'styled-components';
import './style/style.css';
import Toggle from 'react-toggle';
import { Moon, Sun } from '@styled-icons/boxicons-regular/'
import { WHITE, LIGHT_BLACK } from '../../styles/colors/Colors';

export default function CustomToggle({
  onChange,
  value,
  className
}) {
  return (
      <Toggle 
        className={ className }
        checked={ !value }
        icons={{  
          checked: <SunIcon />,
          unchecked: <MoonIcon /> 
        }}
        onChange={ onChange }
      />
  );
};

const MoonIcon = styled(Moon)`
  height: 15px;
  color: ${ WHITE };
`;

const SunIcon = styled(Sun)`
  height: 15px;
  color: ${ LIGHT_BLACK };
`;