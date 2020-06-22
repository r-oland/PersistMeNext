// Components==============
import styled from "styled-components";
import Cluster from "./Cluster";
// =========================

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
`;

type props = {};

export default function ClusterCollection({}: props) {
  const amount = ["", "", "", "", ""];

  const items = amount.map((_, index) => <Cluster key={index} i={index} />);

  return <Wrapper>{items}</Wrapper>;
}
