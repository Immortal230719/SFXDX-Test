import styled, { css } from 'styled-components';

const Layout = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: auto;
    width: 100%;
  `}
`;

export default Layout;
