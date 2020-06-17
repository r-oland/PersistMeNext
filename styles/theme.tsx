import { DefaultTheme } from "styled-components";

const mediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

const fontSize = (small: number, big: number) =>
  `font-size: ${small}px;

  ${mediaQuery(768)} {
     font-size: ${big}px; 
  }`;

export const theme: DefaultTheme = {
  gray: [
    "rgba(255, 255, 255, 1)",
    "rgba(250, 250, 250, 1)",
    "rgba(237, 237, 237, 1)",
    "rgba(227, 227, 227, 1)",
    "rgba(217, 217, 217, 1)",
    "rgba(204, 204, 204, 1)",
    "rgba(192, 192, 192, 1)",
    "rgba(176, 176, 176, 1)",
    "rgba(153, 153, 153, 1)",
    "rgba(128, 128, 128, 1)",
    "rgba(114, 114, 114, 1)",
    "rgba(105, 105, 105, 1)",
    "rgba(77, 77, 77, 1)",
    "rgba(54, 54, 54, 1)",
    "rgba(33, 33, 33, 1)",
  ],
  primary: [
    " rgba(255, 207, 63, 1)",
    "rgba(255, 196, 53, 1)",
    "rgba(255, 185, 42, 1)",
    "rgba(255, 174, 32, 1)",
    "rgba(255, 162, 21, 1)",
    "rgba(255, 151, 11, 1)",
    "rgba(255, 140, 0, 1)",
  ],
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
  borderRadius: "5px",
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
    xs: fontSize(14, 14),
    s: fontSize(15, 16),
    m: fontSize(16, 17),
    l: fontSize(17, 18),
    xl: fontSize(19, 22),
    h4: fontSize(22, 25),
    h3: fontSize(24, 28),
    h2: fontSize(26, 35),
    h1: fontSize(30, 45),
  },
};
