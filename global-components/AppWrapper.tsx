import { useMediaQ } from "hooks-lib";
import { useRouter } from "next/dist/client/router";
import { createContext, useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useData } from "../firebase/useData";
import { useUser } from "../firebase/useUser";
import { today, weekNumber } from "../micro-components/dateFormating";
import Loader from "../micro-components/Loader";
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
  const { pathname } = useRouter();
  const { week, setWeek, year, setYear } = useData();
  const { user, data, isVerified, signedIn, loadingUser } = useUser();
  const [activity, setActivity] = useState({ activity: "initial", style: 0 });
  const [dayModalState, setDayModalState] = useState(false);
  const dragRef = useRef(null!);
  const todaysDayType = data && data[today()].dayType;

  useEffect(() => {
    if (
      (todaysDayType === "unset" && data.week === weekNumber()) ||
      (!isVerified && signedIn)
    ) {
      setDayModalState(true);
    }
  }, [todaysDayType]);

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
        year,
        setYear,
        activity,
        setActivity,
        dayModalState,
        setDayModalState,
      }}
    >
      <ThemeProvider theme={theme}>
        <Ref ref={dragRef} />
        <Layout>
          {(pathname === "/login" && !loadingUser) || user ? (
            children
          ) : (
            <Loader />
          )}
        </Layout>
        <GlobalStyles />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
