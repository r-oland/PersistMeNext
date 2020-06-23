// Components==============
import styled from "styled-components";
import Cluster from "./Cluster";
// =========================

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme: { spacing } }) => spacing[6]};
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

  ${({ theme: { mediaQ } }) => mediaQ.custom(1000)} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

type props = {
  day?: string;
};

export default function ClusterCollection({ day }: props) {
  const amount = ["", "", "", "", ""];

  const items = amount.map((_, index) => (
    <Cluster key={index} i={index} day={day} />
  ));

  return <Wrapper>{items}</Wrapper>;
}
