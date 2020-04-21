
import styled, { css } from 'styled-components';

import { GRAY, DARK_BLUE } from '../colors/Colors';

export const iconBaseStyle = css`
  height: 25px;
  align-self: center;
  color: ${ GRAY };
`;

export const BaseLabel = styled.label`
  /* color: ${ DARK_BLUE }; */
  font-size: 16px;
`;

export const Title = styled(BaseLabel)`
  font-size: 30px;
  font-weight: bold;

  :first-child {
    margin-right: 5px;
  }
`;

export const SubTitle = styled(BaseLabel)`
  font-size: 25px;
`;

export default {
  iconBaseStyle,
  Title,
  SubTitle,
  BaseLabel,
}