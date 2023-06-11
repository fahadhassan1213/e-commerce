import { DefaultTheme } from 'styled-components';

export interface Palette {
  primary: string;
  secondary: string;
  light: string;
  darkGrey: string;
  grey: string;
  success: string;
  error: string;
  warning: string;
  info: string;
  default: string;
  black: string;
}

export interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface FontSize {
  fs1: string;
  fs2: string;
  fs3: string;
  fs4: string;
  fs5: string;
  fs6: string;
  fs7: string;
  fs8: string;
}

export interface FontWeight {
  regular: number;
  medium: number;
  bold: number;
}

export interface BorderRadius {
  sm: string;
  lg: string;
  xl: string;
}

export interface Width {
  sm: string;
  lg: string;
  xl: string;
}

export interface Theme extends DefaultTheme {
  palette: Palette;
  spacing: Spacing;
  typography: {
    fontFamily: string;
    fontSize: FontSize;
    fontWeight: FontWeight;
  };
  sizes: {
    borderRadius: BorderRadius;
    width: Width;
  };
}

const theme: Theme = {
  palette: {
    primary: '#F86338',
    secondary: '#E2E2EA',
    light: '#F4F7F8',
    grey: '#9A9AB0',
    darkGrey: '#515151',
    success: '#28a745',
    error: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    default: '#FFF',
    black: '#000',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.8rem',
    lg: '1rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: {
      fs1: '0.5rem',
      fs2: '0.7rem',
      fs3: '0.8rem',
      fs4: '1rem',
      fs5: '1.5rem',
      fs6: '2rem',
      fs7: '2.5rem',
      fs8: '3rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  sizes: {
    borderRadius: {
      sm: '5px',
      lg: '10px',
      xl: '15px',
    },
    width: {
      sm: '5rem',
      lg: '9.5rem',
      xl: '100%',
    },
  },
};

export default theme;
