import "styled-components";

type color = {
  primary: string;
  black: string;
  white: string;
  offWhite: string;
  gray: string;
};

type shadow = {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
};

type fontWeight = {
  normal: string;
  semiBold: string;
  bold: string;
  heavy: string;
};

type mediaQ = {
  custom: any;
  mobile: string;
  tablet: string;
  desktopS: string;
  desktopM: string;
  desktopL: string;
};

type fontSize = {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  h4: string;
  h3: string;
  h2: string;
  h1: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    color: color;
    shadow: shadow;
    spacing: string[];
    borderRadius: string;
    fontWeight: fontWeight;
    mediaQ: mediaQ;
    fontSize: fontSize;
  }
}
