import { STR } from 'typings';

interface DEVICE {
  [key: string]: STR;
}

const size: DEVICE = {
  mobileS: '320px',
  mobileL: '576px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
};

const device: DEVICE = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export default device;
