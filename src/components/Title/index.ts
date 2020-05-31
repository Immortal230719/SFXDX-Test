import styled, { css } from 'styled-components';
import { device } from 'styles';

const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    margin: 50px 0;
    font-size: 40px;

    @media ${device.mobileL} {
      font-size: 26px;
    }
  `}
`;

export default Title;
