import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useMediaQ } from "../micro-components/useMediaQ";
import GlobalStyles from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
import UserContextComp from "./firebase/useUser";
import Layout from "./Layout";

type props = {
  children: React.ReactNode;
};

export const QueryContext = createContext({ hydrate: false, query: false });

export default function AppWrapper({ children }: props) {
  const query = useMediaQ("min", 900);
  const [hydrate, setHydrate] = useState(false);
  useEffect(() => setHydrate(true), []);

  return (
    <UserContextComp>
      <QueryContext.Provider value={{ hydrate, query }}>
        <ThemeProvider theme={theme}>
          <Layout>{children}</Layout>
          <GlobalStyles />
        </ThemeProvider>
      </QueryContext.Provider>
    </UserContextComp>
  );
}
