// Components==============
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styled from "styled-components";
import { useUser } from "../firebase/useUser";
// =========================

const Wrapper = styled.div`
  display: none;
  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    display: initial;
  }
  position: relative;
  top: ${({ theme: { spacing } }) => spacing[10]};
`;

const Item = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};
  text-align: center;
  width: 100%;

  img {
    margin: 0 auto ${({ theme: { spacing } }) => spacing[1]};
  }
`;

type props = {};

export default function DesktopNavItems({}: props) {
  const { pathname } = useRouter();
  const { user } = useUser();

  const dailyView = pathname === "/";
  const weeklyView = pathname === "/week";

  const conName = dailyView || weeklyView ? "Change view" : "Overview";
  const conLink = dailyView ? "/week" : "/";
  const conName2 = user ? user.username : "Login";
  const conLink2 = user ? "/profile" : "/login";

  const arr = [
    { name: conName, svg: "calendar", link: conLink },
    { name: "Progress", svg: "progress", link: "/progress" },
    { name: "Settings", svg: "settings", link: "/settings" },
    { name: conName2, svg: "login", link: conLink2 },
  ];

  const items = arr.map((e, index) => {
    const { name, svg, link } = e;

    return (
      <Item key={index}>
        <Link href={link}>
          <a>
            <img src={`/navDesktop/${svg}.svg`} alt={name} />
            <p>{name}</p>
          </a>
        </Link>
      </Item>
    );
  });

  return <Wrapper>{items}</Wrapper>;
}
