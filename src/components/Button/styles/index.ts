import styled, { css } from 'styled-components';

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

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.deepBlue};
    }
  `}
`;
