export * from 'styled-components';
export { default } from 'styled-components';

export const color = {
  white: '#FFFFFF',
  info: '#F2F3F7',
  lightGrey: '#B5B5B5',
  grey: '#A6A6A6',
  black: '#000000',
  primary: '#2C98F0',
  danger: '#EC5453',
  warning: '#F9BF3F',
  purple: '#A84CB8',
  success: '#2FA499',
  indigo: '#4054B2',
};

export const size = {
  xxl: '1599px',
  xl: '1399px',
  lg: '1199px',
  md: '991px',
  sm: '767px',
  xs: '575px',
};

export const media = {
  xl: `(max-width: ${size.xl})`,
  lg: `(max-width: ${size.lg})`,
  md: `(max-width: ${size.md})`,
  sm: `(max-width: ${size.sm})`,
  xs: `(max-width: ${size.xs})`,
};

export const font = {
  kr: `'Noto Sans KR', sans-serif`,
  en: `'Quicksand', sans-serif`,
  name: `'Playfair Display', serif`,
};
