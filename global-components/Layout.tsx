import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../firebase/useUser";
import { AppContext } from "./AppWrapper";
import DayModal from "./DayModal";
import Nav from "./Nav";

const Wrapper = styled.div`
  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    position: relative;
    width: ${({ theme: { spacing } }) => `calc(100vw - ${spacing[13]})`};
    left: ${({ theme: { spacing } }) => spacing[13]};
  }
`;

type props = {
  children: React.ReactNode;
};

export default function Layout({ children }: props) {
  const router = useRouter();
  const { loadingUser, signedIn } = useUser();

  const { dayModalState } = useContext(AppContext);

  useEffect(() => {
    if (!loadingUser && !signedIn && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [loadingUser, router.pathname, signedIn]);

  return (
    <Wrapper>
      <AnimatePresence>{dayModalState && <DayModal />}</AnimatePresence>
      <Nav />

      {children}
    </Wrapper>
  );
}
