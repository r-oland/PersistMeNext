import { createContext, useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useData } from "../firebase/useData";
import { useUser } from "../firebase/useUser";
import { useMediaQ } from "../micro-components/useMediaQ";
import GlobalStyles from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
import Layout from "./Layout";

type props = {
  children: React.ReactNode;
};

const Ref = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1000;
  top: 0;
  left: 0;
`;

export const AppContext = createContext<Partial<any>>({});

export default function AppWrapper({ children }: props) {
  const query = useMediaQ("min", 900);
  const { week, setWeek } = useData();
  const { user } = useUser();
  const [activity, setActivity] = useState({ activity: "initial", style: 0 });
  const [dayModalState, setDayModalState] = useState(false);
  const dragRef = useRef(null!);

  useEffect(() => {
    if (user?.activities) {
      setActivity(user?.activities[0]);
    }
  }, [user?.activities]);

  return (
    <AppContext.Provider
      value={{
        dragRef,
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
        <Ref ref={dragRef} />
        <Layout>{children}</Layout>
        <GlobalStyles />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
