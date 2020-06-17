import styled from "styled-components";

const Wrapper = styled.div``;

type props = {
  children: React.ReactNode;
};

export default function Layout({ children }: props) {
  return <Wrapper>{children}</Wrapper>;
}
