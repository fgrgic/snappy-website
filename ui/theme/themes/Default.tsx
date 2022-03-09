import { DefaultTheme } from 'styled-components';
import colors from '../colors';
import rem from '../../utils/rem';

export const Default: DefaultTheme = {
  name: 'Default Theme',
  shape: {
    borderRadius: {
      xsmall: 2,
      small: 5,
      medium: 10,
      large: 20,
      xlarge: 40,
    },
  },
  typography: {
    sizes: {
      xxxsmall: rem(0.25),
      xxsmall: rem(0.5),
      xsmall: rem(0.75),
      small: rem(0.85),
      medium: rem(1),
      large: rem(1.5),
      xlarge: rem(2),
      xxlarge: rem(3),
      xxxlarge: rem(4),
    },
    rem: (size: number) => rem(size),
  },
  spacing: {
    sizes: {
      xxxsmall: rem(0.125),
      xxsmall: rem(0.25),
      xsmall: rem(0.5),
      small: rem(0.75),
      medium: rem(1),
      large: rem(1.5),
      xlarge: rem(2),
      xxlarge: rem(4),
      xxxlarge: rem(8),
    },
    rem: (size: number) => rem(size),
  },
  palette: {
    common: {
      black: colors.black,
      blackTransparent: colors.blackTransparent,
      white: colors.white,
      whiteTransparent: colors.whiteTransparent,
    },
    primary: {
      A: colors.naturalBlue[200],
      B: colors.naturalBlue[400],
      C: colors.naturalBlue[500],
      D: colors.naturalBlue[600],
      E: colors.naturalBlue[800],
      text: colors.white,
      textAlt: colors.maizeYellow[200],
    },
    secondary: {
      A: colors.aquamarineGreen[200],
      B: colors.aquamarineGreen[400],
      C: colors.aquamarineGreen[500],
      D: colors.aquamarineGreen[600],
      E: colors.aquamarineGreen[800],
      text: colors.black,
      textAlt: colors.gunmetal[700],
    },
    background: {
      A: colors.white,
      B: colors.gunmetal[50],
      C: colors.gunmetal[100],
      D: colors.gunmetal[300],
      E: colors.gunmetal[400],
      text: colors.black,
      textAlt: colors.gunmetal[500],
    },
    alpha: {
      A: colors.greyscale[50],
      B: colors.greyscale[100],
      C: colors.greyscale[400],
      D: colors.greyscale[600],
      E: colors.greyscale[800],
      text: colors.black,
      textAlt: colors.white,
    },
    success: {
      main: colors.aquamarineGreen[700],
      text: colors.white,
    },
    error: {
      main: colors.outrageousOrange[500],
      text: colors.white,
    },
    warning: {
      main: colors.maizeYellow[500],
      text: colors.white,
    },
    text: colors.black,
  },
  colors: colors,
  statusBarStyle: 'dark',
};
