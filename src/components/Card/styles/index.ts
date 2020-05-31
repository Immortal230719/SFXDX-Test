import styled, { css } from 'styled-components';
import { device } from 'styles';

const Figure = styled.figure`
  ${({ theme }) => css`
    padding: 20px;
    width: 100%;
    border-radius: 8px;
    transition: ${theme.transition};
    cursor: pointer;
    margin: 15px;

    @media ${device.mobileL} {
      margin: 10px;
    }

    img {
      width: 150px;
      height: 150px;
      display: block;
      margin: 0 auto;

      @media ${device.laptop} {
        width: 120px;
        height: 120px;
      }

      @media ${device.tablet} {
        width: 85px;
        height: 85px;
      }
    }

    figcaption {
      margin-top: 15px;
      font-family: 'Quicksand';
      font-size: 18px;
      text-align: center;
      text-transform: uppercase;

      @media ${device.mobileL} {
        font-size: 16px;
      }
    }
  `}
`;

export default Figure;
