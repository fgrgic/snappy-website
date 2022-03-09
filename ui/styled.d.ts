import { StatusBarStyle } from 'expo-status-bar';
import 'styled-components';

import { ThemeShadowConfig } from '../types';
import colors from './theme/colors';
import { IPalette } from './types';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    typography: {
      sizes: {
        xxxsmall: number;
        xxsmall: number;
        xsmall: number;
        small: number;
        medium: number;
        large: number;
        xlarge: number;
        xxlarge: number;
        xxxlarge: number;
      };
      rem: (number: number) => number;
    };
    shape: {
      borderRadius: {
        xsmall: number;
        small: number;
        medium: number;
        large: number;
        xlarge: number;
      };
    };
    spacing: {
      sizes: {
        xxxsmall: number;
        xxsmall: number;
        xsmall: number;
        small: number;
        medium: number;
        large: number;
        xlarge: number;
        xxlarge: number;
        xxxlarge: number;
      };
      rem: (number: number) => number;
    };
    palette: {
      common: {
        black: string;
        blackTransparent: string;
        white: string;
        whiteTransparent: string;
      };
      primary: IPalette;
      secondary: IPalette;
      background: IPalette;
      alpha: IPalette;
      success: IPaletteFunction;
      warning: IPaletteFunction;
      error: IPaletteFunction;
      text: string;
    };
    colors: typeof colors;
    statusBarStyle: StatusBarStyle;
  }
}
