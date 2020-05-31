import styled, { css } from 'styled-components';
import { device } from 'styles';

export const StyledPaginator = styled.div`
  ${({ theme }) => css`
    margin: 50px auto;
    width: 500px;

    @media ${device.mobileL} {
      width: 100%;
    }

    ul {
      display: flex;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;

      li {
        width: fit-content;
        height: 40px;
        cursor: pointer;

        @media ${device.mobileL} {
          height: 20px;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: fit-content;
          padding: 0 15px;
          height: 100%;
          transition: ${theme.transition};
          border-radius: 10px;

          &:hover {
            background: ${theme.colors.lightBlue};
            color: ${theme.colors.black};
          }

          @media ${device.mobileL} {
            padding: 0 6px;
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
