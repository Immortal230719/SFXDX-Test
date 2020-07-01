import styled from 'styled-components';
import { device } from '../../styles';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-auto-flow: dense;
  margin: 15px 0;

  @media ${device.laptop} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 150px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      box-shadow: 0px 2px 10px #fff;
    }
  }
`;
