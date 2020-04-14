
import styled, { css } from 'styled-components';

import { GRAY, DARK_BLUE } from '../colors/Colors';

export const iconBaseStyle = css`
  height: 25px;
  align-self: center;
  color: ${ GRAY };
`;

export const Title = styled.label`
  font-size: 30px;
  font-weight: bold;
  color: ${ DARK_BLUE };

  :first-child {
    margin-right: 5px;
  }
`;

export default {
  iconBaseStyle,
  Title,
}