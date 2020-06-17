import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
import Layout from "./Layout";

type props = {
  children: React.ReactNode;
};

export default function AppWrapper({ children }: props) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>{children}</Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
}
