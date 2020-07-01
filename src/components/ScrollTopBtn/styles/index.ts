import styled from 'styled-components';
import { device } from '../../../styles';

const StyledScrollTop = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  animation: fadeIn 300ms ease-in-out 1s both;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;

    @media ${device.mobile} {
      width: 30px;
      height: 30px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default StyledScrollTop;
