// Components==============
import { useContext } from "react";
import styled from "styled-components";
import { useUser } from "../firebase/useUser";
import { AppContext } from "../global-components/AppWrapper";
import { today } from "../micro-components/dateFormating";
// =========================

const Wrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[5]};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

type props = {
  dayType?: string;
  day?: string;
};

export default function DayPicker({ dayType, day }: props) {
  const { dayModalState, setDayModalState } = useContext(AppContext);
  const { data } = useUser();
  const d = today();

  return (
    <Wrapper>
      <Flex>
        <button
          onClick={() =>
            dayModalState
              ? setDayModalState(false)
              : setDayModalState(dayType ? day : true)
          }
        >
          {dayType ? dayType : data && data[d].dayType}
        </button>
      </Flex>
    </Wrapper>
  );
}
