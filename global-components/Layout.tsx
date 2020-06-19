import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "./firebase/useUser";
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
  const { user, loadingUser } = useUser();

  useEffect(() => {
    if (!loadingUser && !user && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [loadingUser, router.pathname, user]);

  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  );
}
