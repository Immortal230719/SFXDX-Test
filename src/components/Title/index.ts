import styled, { css } from 'styled-components';

const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    margin: 50px 0;
    font-size: 40px;
  `}
`;

export default Title;
