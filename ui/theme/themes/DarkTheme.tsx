import { DefaultTheme } from 'styled-components';

import { Default as theme } from './Default';
import colors from '../colors';

const DarkTheme: DefaultTheme = {
  ...theme,
  name: 'Dark Theme',
  palette: {
    ...theme.palette,
    primary: {
      A: colors.naturalBlue[100],
      B: colors.naturalBlue[300],
      C: colors.naturalBlue[400],
      D: colors.naturalBlue[500],
      E: colors.naturalBlue[700],
      text: colors.white,
      textAlt: colors.maizeYellow[200],
    },
    secondary: {
      A: colors.aquamarineGreen[100],
      B: colors.aquamarineGreen[300],
      C: colors.aquamarineGreen[400],
      D: colors.aquamarineGreen[500],
      E: colors.aquamarineGreen[700],
      text: colors.black,
      textAlt: colors.gunmetal[700],
    },
    background: {
      A: colors.gunmetal[700],
      B: colors.gunmetal[600],
      C: colors.gunmetal[500],
      D: colors.gunmetal[400],
      E: colors.black,
      text: colors.white,
      textAlt: colors.naturalBlue[100],
    },
    success: {
      main: colors.aquamarineGreen[600],
      text: colors.white,
    },
    error: {
      main: colors.outrageousOrange[400],
      text: colors.white,
    },
    warning: {
      main: colors.maizeYellow[400],
      text: colors.white,
    },
    text: colors.white,
  },
};

export default DarkTheme;
