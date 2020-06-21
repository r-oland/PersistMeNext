import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { useData } from "../firebase/useData";
import { useMediaQ } from "../micro-components/useMediaQ";
import GlobalStyles from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
import Layout from "./Layout";

type props = {
  children: React.ReactNode;
};

export const AppContext = createContext({
  query: false,
  setWeek: (week: number) => {},
  week: 0,
});

export default function AppWrapper({ children }: props) {
  const query = useMediaQ("min", 900);
  const { week, setWeek } = useData();

  return (
    <AppContext.Provider value={{ query, week, setWeek }}>
      <ThemeProvider theme={theme}>
        <Layout>{children}</Layout>
        <GlobalStyles />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
