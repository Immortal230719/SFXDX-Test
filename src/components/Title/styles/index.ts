import styled, { css } from 'styled-components';
import { device } from 'styles';

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    text-align: center;
    font-size: 40px;
    width: fit-content;

    img {
      position: absolute;
      top: -30px;
      right: 0;
      transform: translate(120%, 0);
      width: 80px;
      height: 80px;
    }

    @media ${device.mobile} {
      font-size: 26px;

      img {
        top: 30px;
        width: 30px;
        height: 30px;
      }
    }
  `}
`;
