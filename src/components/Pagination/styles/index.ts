import styled, { css } from 'styled-components';

export const StyledPaginator = styled.div`
  ${({ theme }) => css`
    margin: 50px auto;
    width: 500px;

    ul {
      display: flex;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;

      li {
        width: fit-content;
        height: 40px;
        cursor: pointer;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 30px;
          padding: 0 10px;
          height: 100%;
          transition: ${theme.transition};
          border-radius: 10px;

          &:hover {
            background: ${theme.colors.lightBlue};
            color: ${theme.colors.black};
          }
        }
      }

      li.active {
        background: ${theme.colors.lightBlue};
        color: ${theme.colors.black};
        border: none;
        border-radius: 10px;
      }
    }
  `}
`;
