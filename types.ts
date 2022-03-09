import colors from './colors'

import { StatusBarStyle } from 'expo-status-bar';

export interface IPalette {
  A: string
  B: string
  C: string
  D: string
  E: string
  text: string
  textAlt: string
}

export interface IPaletteFunction {
  main: string
  text: string
}