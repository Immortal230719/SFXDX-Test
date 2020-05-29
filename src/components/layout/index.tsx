import styled, { css } from 'styled-components';
import { device } from 'styles';

const Layout = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: auto;
    max-width: 1920px;

    @media ${device.desktop} {
      max-width: 800px;
    }

    @media ${device.laptop} {
      max-width: 800px;
    }
  `}
`;

export default Layout;
