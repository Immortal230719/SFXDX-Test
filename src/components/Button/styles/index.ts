import styled, { css } from 'styled-components';
import { device } from '../../../styles';

export const StyledButton = styled.button`
  ${({ theme }) => css`
    display: block;
    width: 250px;
    height: 80px;
    color: ${theme.colors.white};
    border-radius: 15px;
    border: 2px solid ${theme.colors.white};
    font-size: 20px;
    text-transform: uppercase;
    background-color: inherit;
    cursor: pointer;
    margin: 0 auto;

    @media ${device.mobile} {
      width: 100px;
      height: 50px;
      font-size: 14px;
      border: 1px solid ${theme.colors.white};
    }

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.deepBlue};
    }
  `}
`;
