import styled, { css } from 'styled-components';

export const StyledTextList = styled.fieldset`
  ${({ theme }) => css`
    font-family: 'Quicksand';
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid ${theme.colors.lightBlue};
    max-width: 300px;
    margin: 50px 0;
  `}
`;

export const StyledItemTextList = styled.ul`
  ${({ theme }) => css`
    li {
      background-color: inherit;
      color: ${theme.colors.white};
      padding: 8px;
      font-size: 18px;
      width: fit-content;

      &:hover {
        border-bottom: 1px solid ${theme.colors.blue};
        color: ${theme.colors.blue};
      }
    }
  `}
`;

export const StyledTitleTextList = styled.legend`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    padding: 0 7px;
  `}
`;
