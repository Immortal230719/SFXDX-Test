import styled from 'styled-components';
import { device } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${device.mobile} {
    justify-content: center;
  }
`;
