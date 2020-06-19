import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.div``;

type props = {
  children: React.ReactNode;
};

export default function Layout({ children }: props) {
  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  );
}
