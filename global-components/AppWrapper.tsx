import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { useMediaQ } from "../micro-components/useMediaQ";
import GlobalStyles from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
import UserContextComp from "./firebase/useUser";
import Layout from "./Layout";

type props = {
  children: React.ReactNode;
};

export const QueryContext = createContext({ query: false });

export default function AppWrapper({ children }: props) {
  const query = useMediaQ("min", 900);

  return (
    <UserContextComp>
      <QueryContext.Provider value={{ query }}>
        <ThemeProvider theme={theme}>
          <Layout>{children}</Layout>
          <GlobalStyles />
        </ThemeProvider>
      </QueryContext.Provider>
    </UserContextComp>
  );
}
