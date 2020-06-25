/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { device } from './device';
import { ThemeType } from '../types';

const fontFace = (
  name: string,
  src: string,
  fontWeight = 400,
  fontStyle = 'normal',
): string => {
  const cssObject = `
    @font-face {
      font-family: "${name}";
      src:  url(${require(`../../public/fonts/${src}.woff`)}) format("woff"),
            url(${require(`../../public/fonts/${src}.ttf`)}) format("truetype"),
            url(${require(`../../public/fonts/${src}.svg`)}) format("svg");
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
    }`;

  return cssObject;
};

export default createGlobalStyle<{ theme: ThemeType }>`
    ${normalize},
    ${fontFace('Montserrat', 'montserrat/montserrat', 400, 'normal')}
    ${fontFace('Montserrat', 'montserrat/montserratBold', 900, 'normal')}
    ${fontFace('Quicksand', 'quicksand/quicksandbold', 900, 'normal')}
    #root {
      font-family: 'Montserrat';
      background: ${({ theme }): string => theme.colors.background};
      color: ${({ theme }): string => theme.colors.black};
      padding: 50px 100px;    
      min-height: 100vh;

      @media ${device.laptop} {
        padding: 20px 30px;
      }

      @media ${device.mobile} {
        padding: 20px 10px;
      }
    }

    .center {
      align-items: center;
      justify-content: center;
    }

    .between {
      justify-content: space-between;
    }

    .around {
      justify-content: space-around;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }

    ul {    
      list-style: none;
      padding: 0;
      margin: 0;
    }
`;
