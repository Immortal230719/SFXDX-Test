import styled, { css } from 'styled-components';

export const StyledTextList = styled.fieldset`
  ${({ theme }) => css`
    font-family: 'Quicksand';
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid ${theme.colors.lightBlue};
    width: 300px;
    margin: 30px 0;
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
      user-select: none;
    }
  `}
`;

export const StyledTitleTextList = styled.legend`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    padding: 0 7px;
    user-select: none;
  `}
`;
