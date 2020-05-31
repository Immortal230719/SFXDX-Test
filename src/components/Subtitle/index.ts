import styled, { css } from 'styled-components';

const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: 20px 0;
    font-size: 25px;
  `}
`;

export default Subtitle;
