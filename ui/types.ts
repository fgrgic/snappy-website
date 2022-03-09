/**
 * Spacing
 */
export type SpacingType =
  | "xxxsmall"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge";

/**
 * Typography
 */
export type TextSize =
  | "xxxsmall"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge";

/**
 * Colors
 */
export type ColorType = "primary" | "secondary" | "background" | "alpha";
export type ColorTypeFunctional = "success" | "error" | "warning";
export type TextColor = "text";
export type CommonKeys =
  | "white"
  | "whiteTransparent"
  | "black"
  | "blackTransparent";
export type ColorKey = "A" | "B" | "C" | "D" | "E" | "text" | "textAlt";
export type ColorKeyFunctional = "main" | "text";

type Path<T extends ColorType | ColorTypeFunctional | TextColor | CommonKeys> =
  T extends ColorType
    ? `${T}.${ColorKey}`
    : T extends ColorTypeFunctional
    ? `${T}.${ColorKeyFunctional}`
    : T extends TextColor
    ? `${T}`
    : T extends CommonKeys
    ? `common.${T}`
    : never;

export type PalettePath = Path<ColorType>;
export type FunctionalPath = Path<ColorTypeFunctional>;
export type TextPath = Path<TextColor>;
export type CommonPath = Path<CommonKeys>;
export type ThemePalettePath =
  | PalettePath
  | FunctionalPath
  | TextPath
  | CommonKeys;

/**
 * Shadows
 */
export type ThemeShadowConfig = (string | number)[];

/**
 * Border Radius
 */
export type BorderRadiusSize =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge";

export interface IPalette {
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  text: string;
  textAlt: string;
}

export interface IPaletteFunction {
  main: string;
  text: string;
}
