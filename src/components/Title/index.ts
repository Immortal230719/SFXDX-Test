import styled, { css } from 'styled-components';

const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    margin: 0;
  `}
`;

export default Title;
