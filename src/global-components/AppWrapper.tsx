import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import { theme } from "../styles/theme";
import Layout from "./Layout";

export default function AppWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>{children}</Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
}
