import { createContext, useState } from "react";
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
  setWeek: (week: number) => {
    week;
  },
  week: 0,
  activity: { activity: "initial", style: 0 },
  setActivity: (activity: { activity: string; style: number }) => {
    activity;
  },
  dayModalState: false,
  setDayModalState: (dayModalState: boolean) => {
    dayModalState;
  },
});

export default function AppWrapper({ children }: props) {
  const query = useMediaQ("min", 900);
  const { week, setWeek } = useData();
  const [activity, setActivity] = useState({ activity: "initial", style: 0 });
  const [dayModalState, setDayModalState] = useState(false);

  return (
    <AppContext.Provider
      value={{
        query,
        week,
        setWeek,
        activity,
        setActivity,
        dayModalState,
        setDayModalState,
      }}
    >
      <ThemeProvider theme={theme}>
        <Layout>{children}</Layout>
        <GlobalStyles />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
