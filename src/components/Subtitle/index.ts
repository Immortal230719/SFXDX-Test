import styled, { css } from 'styled-components';
import { device } from '../../styles';

const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: 20px 0;
    font-size: 25px;

    @media ${device.mobile} {
      text-align: center;
    }
  `}
`;

export default Subtitle;
