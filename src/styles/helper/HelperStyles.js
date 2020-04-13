
import { css } from 'styled-components';

export const mqTablet = (...style) => css`
@media (min-width: 768px) {
    ${ css(...style) };
}
`;

export const mqDesktop = (...style) => css`
@media (min-width: 1080px) {
    ${ css(...style) };
}
`;

export const pointer = css`
  &, * {
    cursor: pointer;
  }
`;

export default {
  mqTablet,
  mqDesktop,
  pointer,
}