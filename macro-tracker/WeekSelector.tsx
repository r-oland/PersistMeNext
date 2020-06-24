// Components==============
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../global-components/AppWrapper";
// =========================

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    margin: 0 ${({ theme: { spacing } }) => spacing[2]};
  }
`;

type props = {};

const Button = ({ direction }: { direction: string }) => {
  return (
    <svg width="12" height="22" viewBox="0 0 13 25">
      <path
        d={
          direction === "left"
            ? "M13 3.57099L4.875 12.4985L13 21.4259L11.375 24.9969L-1.03067e-07 12.4985L11.375 0L13 3.57099Z"
            : "M3.41633e-07 21.429L8.125 12.5015L2.0498e-06 3.57406L1.625 0.00306984L13 12.5015L1.625 25L3.41633e-07 21.429Z"
        }
        fill="#1A1A1A"
      />
    </svg>
  );
};

export default function WeekSelector({}: props) {
  const { week, setWeek, setYear } = useContext(AppContext);

  const nextWeek = () => {
    if (week === 52) {
      setYear((prev: number) => prev + 1);
      setWeek(1);
    } else {
      setWeek((prev: number) => prev + 1);
    }
  };

  const prevWeek = () => {
    if (week === 1) {
      setYear((prev: number) => prev - 1);
      setWeek(52);
    } else {
      setWeek((prev: number) => prev - 1);
    }
  };

  return (
    <Wrapper>
      <button onClick={prevWeek}>
        <Button direction="left" />
      </button>
      <h1>Week {week}</h1>
      <button onClick={nextWeek}>
        <Button direction="right" />
      </button>
    </Wrapper>
  );
}
