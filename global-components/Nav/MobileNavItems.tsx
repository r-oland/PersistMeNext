// Components==============
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
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

export default function MobileNavItems({}: props) {
  const { pathname } = useRouter();

  const { signedIn } = useUser();

  return (
    <Wrapper>
      <Link href={signedIn ? "/progress" : "/login"}>
        <a>
          <img src="/navMobile/progress.svg" alt="progress" />
        </a>
      </Link>
      {pathname === "/" ? (
        <ActivityPicker />
      ) : (
        <Link href={signedIn ? "/" : "/login"}>
          <a>
            <img src="/navMobile/calendar.svg" alt="progress" />
          </a>
        </Link>
      )}
      <Link href={signedIn ? "/settings" : "/login"}>
        <a>
          <img src="/navMobile/settings.svg" alt="settings" />
        </a>
      </Link>
    </Wrapper>
  );
}
