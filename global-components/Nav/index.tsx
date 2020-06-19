// Components==============
import styled from "styled-components";
import DesktopNavItems from "./DesktopNavItems";
import MobileNavItems from "./MobileNavItems";
// =========================

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ theme: { spacing } }) => spacing[10]};
  background: ${({ theme: { color } }) => color.white};
  box-shadow: ${({ theme: { shadow } }) => shadow.l};

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    width: ${({ theme: { spacing } }) => spacing[13]};
    height: 100%;
    box-shadow: ${({ theme: { shadow } }) => shadow.m};
  }
`;

type props = {};

export default function Nav({}: props) {
  return (
    <Wrapper>
      <MobileNavItems />
      <DesktopNavItems />
    </Wrapper>
  );
}
