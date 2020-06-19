// Components==============
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styled from "styled-components";
import ActivityPicker from "../../micro-components/ActivityPicker";
// =========================

const Wrapper = styled.div`
  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    display: none;
  }

  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
`;

type props = {};

const MobileActivityPicker = () => {
  const { pathname } = useRouter();

  return pathname === "/" ? (
    <ActivityPicker />
  ) : (
    <Link href="/">
      <a>
        <ActivityPicker />
      </a>
    </Link>
  );
};

export default function MobileNavItems({}: props) {
  return (
    <Wrapper>
      <Link href="/progress">
        <a>
          <img src="/navMobile/progress.svg" alt="progress" />
        </a>
      </Link>
      <MobileActivityPicker />
      <Link href="/settings">
        <a>
          <img src="/navMobile/settings.svg" alt="settings" />
        </a>
      </Link>
    </Wrapper>
  );
}
