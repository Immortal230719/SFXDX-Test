import styled from 'styled-components';
import { device } from '../../../styles';

const StyledLogo = styled.div`
  h1 {
    display: none;
  }

  a {
    img {
      display: block;
      margin: 0 auto;
      height: 180px;

      @media ${device.mobile} {
        height: 100px;
      }
    }
  }
`;

export default StyledLogo;
