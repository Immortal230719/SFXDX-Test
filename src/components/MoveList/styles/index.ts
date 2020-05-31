import styled, { css } from 'styled-components';

export const StyledMoveList = styled.ul`
  ${({ theme }) => css`
    font-family: 'Quicksand';
    color: ${theme.colors.white};
    margin: 50px auto;
    min-width: 300px;
    max-width: 500px;
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 10px;
      font-size: 20px;
      line-height: 25px;

      span {
        &:nth-child(1) {
          color: ${theme.colors.lightBlue};
          margin: 0 20px 0 0;
        }

        &:nth-child(2) {
          text-align: end;
        }
      }
    }
  `}
`;
