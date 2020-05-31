import styled, { css } from 'styled-components';

export const StyledItem = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.deepBlue};
    border-radius: 5px;
    padding: 4px;
  `}
`;
