import { DefaultTheme } from 'styled-components';

import { Default as theme } from './Default';
import colors from '../colors';

const OledTheme: DefaultTheme = {
  ...theme,
  name: 'Oled Theme',
  palette: {
    ...theme.palette,
    background: {
      A: colors.black,
      B: colors.gunmetal[700],
      C: colors.gunmetal[600],
      D: colors.gunmetal[500],
      E: colors.gunmetal[400],
      text: colors.white,
      textAlt: colors.naturalBlue[100],
    },
  },
};

export default OledTheme;
