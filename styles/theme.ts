export const theme = {
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
  breakPoint: {
    mobile: "400px",
    tablet: "768px",
    desktopS: "900px",
    desktopM: "1200px",
    desktopL: "1600px",
  },
  fontSize: {
    xs: `
    font-size: 14px;
    `,
    s: `
    font-size: 15px;
    
    @media screen and (min-width: 768px) {
     font-size: 16px; 
    }
    `,
    m: `
    font-size: 16px;
    
    @media screen and (min-width: 768px) {
     font-size: 17px; 
    }
    `,
    l: `
    font-size: 17px;
    
    @media screen and (min-width: 768px) {
     font-size: 18px; 
    }
    `,
    xl: `
    font-size: 19px;
    
    @media screen and (min-width: 768px) {
     font-size: 22px; 
    }
    `,
    h4: `
    font-size: 22px;
    
    @media screen and (min-width: 768px) {
     font-size: 25px; 
    }
    `,
    h3: `
    font-size: 24px;
    
    @media screen and (min-width: 768px) {
     font-size: 28px; 
    }
    `,
    h2: `
    font-size: 26px;
    
    @media screen and (min-width: 768px) {
     font-size: 35px; 
    }
    `,
    h1: `
    font-size: 30px;
    
    @media screen and (min-width: 768px) {
     font-size: 45px; 
    }
    `,
  },
};
