import styled, { css } from 'styled-components';
import { device } from 'styles';

const Layout = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: auto;
    width: 100%;
    padding: 0 100px;

    @media ${device.laptop} {
      padding: 0 30px;
    }
  `}
`;

export default Layout;
