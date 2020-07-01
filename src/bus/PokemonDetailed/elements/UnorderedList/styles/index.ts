import styled, { css } from 'styled-components';

export const StyledItem = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    background-color: ${theme.colors.deepBlue};
    border-radius: 8px;
    padding: 0 7px;
    line-height: 30px;
    margin: 4px 7px;

    &:hover {
      box-shadow: 0 3px 5px ${theme.colors.black};
    }
  `}
`;
