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

type props = {};

export default function DayPicker({}: props) {
  const { dayModalState, setDayModalState } = useContext(AppContext);
  const { data } = useUser();
  const d = today();

  return (
    <Wrapper>
      <Flex>
        <button
          onClick={() =>
            dayModalState ? setDayModalState(false) : setDayModalState(true)
          }
        >
          {data && data[d].dayType}
        </button>
      </Flex>
    </Wrapper>
  );
}
