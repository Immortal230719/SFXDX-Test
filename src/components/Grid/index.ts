import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-auto-flow: dense;

  div {
    overflow: hidden;
  }
`;

export default Grid;
