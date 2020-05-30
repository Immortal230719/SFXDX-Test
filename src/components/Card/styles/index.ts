import styled, { css } from 'styled-components';

const Figure = styled.figure`
  ${({ theme }) => css`
    background-color: rgb(166, 152, 243);
    padding: 20px;
    max-width: 300px;
    border-radius: 8px;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover {
      box-shadow: 0px 2px 10px #000;
    }

    img {
      display: block;
      margin: 0 auto;
    }

    figcaption {
      margin-top: 10px;
      font-family: 'Quicksand';
      font-size: 20px;
      text-align: center;
    }
  `}
`;

export default Figure;
