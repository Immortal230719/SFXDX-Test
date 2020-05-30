import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

function fontFace(
  name: string,
  src: string,
  fontWeight = 400,
  fontStyle = 'normal'
) {
  return `
    @font-face{
        font-family: "${name}";
        src: url(${require('../../public/fonts/' +
          src +
          '.woff')}) format("woff"),
             url(${require('../../public/fonts/' +
               src +
               '.ttf')}) format("truetype"),
             url(${require('../../public/fonts/' +
               src +
               '.svg')}#${name}) format("svg");
        font-style: ${fontStyle};
        font-weight: ${fontWeight};
    }
`;
}

export default createGlobalStyle`
  ${props => css`
    ${normalize}
    ${fontFace('Montserrat', 'montserrat/montserrat', 400, 'normal')}
    ${fontFace('Montserrat', 'montserrat/montserratbold', 900, 'normal')}
    ${fontFace('Quicksand', 'quicksand/quicksandbold', 900, 'normal')}
    #root {
      font-family: 'Montserrat';
      background: ${props.theme.colors.background};
      color: ${props.theme.colors.black};
      display: flex;
      justify-content: center;
      padding: 0;
    }
  `}
`;
