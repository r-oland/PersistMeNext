// Components==============
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styled from "styled-components";
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

  const dailyView = pathname === "/";
  const weeklyView = pathname === "/week";

  const conName = dailyView ? "Weekly" : weeklyView ? "Daily" : "Overview";
  const conLink = dailyView ? "/week" : "/";

  const arr = [
    { name: conName, svg: "calendar", link: conLink },
    { name: "Progress", svg: "progress", link: "/progress" },
    { name: "Settings", svg: "settings", link: "/settings" },
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
