import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { device } from './device';
import { ThemeType } from '../types';

export default createGlobalStyle<{ theme: ThemeType }>`
    ${normalize}
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
