// Components==============
import styled from "styled-components";
import Block from "./Block";
// =========================

const Wrapper = styled.div`
  display: inline-block;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 20px;
`;

type props = { i: number };

export default function Cluster({ i }: props) {
  const amount = ["", "", "", "", "", "", "", ""];

  const items = amount.map((e, index) => {
    const newI =
      i === 1
        ? index + 8
        : i === 2
        ? index + 16
        : i === 3
        ? index + 24
        : i === 4
        ? index + 32
        : index;

    return <Block key={index} i={newI} />;
  });

  return (
    <Wrapper>
      <Grid>{items}</Grid>
    </Wrapper>
  );
}
