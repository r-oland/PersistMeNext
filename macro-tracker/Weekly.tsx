// Components==============
import styled from "styled-components";
import { useUser } from "../firebase/useUser";
import { weekNames } from "../micro-components/dateFormating";
import DayPicker from "./DayPicker";
import ClusterCollection from "./ui/ClusterCollection";
// =========================

const Grid = styled.div`
  display: grid;
  margin-top: ${({ theme: { spacing } }) => spacing[10]};
  margin-bottom: ${({ theme: { spacing } }) => spacing[10]};
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 850px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[6]};

  padding: ${({ theme: { spacing } }) => `${spacing[6]} ${spacing[6]}`};
  background: ${({ theme: { color } }) => color.white};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.xs};

  h2 {
    text-align: center;

    ::first-letter {
      text-transform: capitalize;
    }
  }

  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    text-align: center;
  }
`;

type props = {};

export default function WeeklyView({}: props) {
  const { data } = useUser();

  const items = weekNames.map((e, index) => {
    const day = e.toLowerCase();
    const dayType = data && data[day].dayType;

    return (
      <Wrapper key={index}>
        <h2>{day}</h2>
        <DayPicker day={day} dayType={dayType} />
        <ClusterCollection day={day} />
      </Wrapper>
    );
  });

  return <Grid>{items}</Grid>;
}
