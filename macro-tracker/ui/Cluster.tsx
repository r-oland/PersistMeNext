// Components==============
import styled from "styled-components";
import Block from "./Block";
// =========================

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 20px;
`;

type props = { i: number; day?: string };

export default function Cluster({ i, day }: props) {
  const amount = ["", "", "", "", "", "", "", ""];

  const items = amount.map((_, ind) => {
    const index = ind + 1;

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

    return <Block key={index} i={newI} day={day} />;
  });

  return <Grid>{items}</Grid>;
}
