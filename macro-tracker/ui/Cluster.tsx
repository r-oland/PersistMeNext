// Components==============
import styled from "styled-components";
import Block from "./Block";
// =========================
type props = { i: number; day?: string };

const Grid = styled.div<{ day?: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ day }) =>
    typeof day === "string" ? "10px 15px" : "10px 20px"};
`;

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

  return <Grid day={day}>{items}</Grid>;
}
