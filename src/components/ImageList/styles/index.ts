import styled from 'styled-components';

const StyledImageList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  img {
    width: 100px;
    height: 100px;
  }
`;

export default StyledImageList;
