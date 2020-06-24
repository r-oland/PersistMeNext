// Components==============
import styled from "styled-components";
import Cluster from "./Cluster";
// =========================

type props = {
  day?: string;
};

const Wrapper = styled.div<props>`
  display: grid;
  grid-gap: ${({ theme: { spacing }, day }) =>
    typeof day === "string" ? spacing[5] : spacing[6]};
  justify-items: center;

  ${({ theme: { mediaQ } }) => mediaQ.custom(300)} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme: { mediaQ } }) => mediaQ.custom(500)} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${({ theme: { mediaQ } }) => mediaQ.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    grid-template-columns: ${({ day }) =>
      typeof day === "string" && `1fr 1fr 1fr 1fr 1fr`};
  }

  ${({ theme: { mediaQ } }) => mediaQ.custom(1000)} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default function ClusterCollection({ day }: props) {
  const amount = ["", "", "", "", ""];

  const items = amount.map((_, index) => (
    <Cluster key={index} i={index} day={day} />
  ));

  return <Wrapper day={day}>{items}</Wrapper>;
}
