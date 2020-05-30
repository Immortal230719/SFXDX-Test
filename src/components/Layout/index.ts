import styled, { css } from 'styled-components';
import { device } from 'styles';

const Layout = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: auto;
    max-width: 1800px;

    @media ${device.laptopL} {
      max-width: 1300px;
    }

    @media ${device.laptop} {
      max-width: 900px;
    }

    @media ${device.tablet} {
      max-width: 700px;
    }

    @media ${device.mobileL} {
      max-width: 500px;
    }

    @media ${device.mobileS} {
      max-width: 300px;
    }
  `}
`;

export default Layout;
