import { DefaultTheme } from "styled-components";

const mediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

const fontSize = (small: number, big: number) =>
  `font-size: ${small}px;

  ${mediaQuery(768)} {
     font-size: ${big}px; 
  }`;

export const theme: DefaultTheme = {
  color: {
    primary: "#FDC61A",
    black: "#1A1A1A",
    white: "#FFFFFF",
    offWhite: "#FAFAFA",
    gray: "#343434",
  },
  shadow: {
    xs: "0 1px 3px rgba(0, 0, 0, 0.1)",
    s: "0 1px 3px rgba(0, 0, 0, 0.2)",
    m: "0 4px 6px rgba(0, 0, 0, 0.1)",
    l: "0 10px 20px rgba(0, 0, 0, 0.15), 0 5px 8px rgba(0, 0, 0, 0.03)",
    xl: "0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)",
  },
  spacing: [
    "0.25em",
    "0.5em",
    "0.75em",
    "1em",
    "1.25em",
    "1.5em",
    "1.75em",
    "2em",
    "2.5em",
    "3em",
    "4em",
    "5em",
    "6em",
    "8em",
    "10em",
    "12.5em",
    "16em",
    "20em",
    "24em",
    "30em",
    "48em",
  ],
  borderRadius: "3px",
  fontWeight: {
    normal: "400",
    semiBold: "500",
    bold: "600",
    heavy: "700",
  },
  mediaQ: {
    custom: mediaQuery,
    mobile: mediaQuery(400),
    tablet: mediaQuery(768),
    desktopS: mediaQuery(900),
    desktopM: mediaQuery(1200),
    desktopL: mediaQuery(1600),
  },
  fontSize: {
    xs: fontSize(15, 15),
    s: fontSize(16, 17),
    m: fontSize(17, 17),
    l: fontSize(18, 18),
    xl: fontSize(20, 22),
    h4: fontSize(23, 25),
    h2: fontSize(28.5, 28),
    h3: fontSize(27, 35),
    h1: fontSize(30, 40),
  },
};
