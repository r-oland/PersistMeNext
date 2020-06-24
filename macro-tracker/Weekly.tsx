// Components==============
import styled from "styled-components";
import { useUser } from "../firebase/useUser";
import { weekNames } from "../micro-components/dateFormating";
import DayPicker from "./DayPicker";
import ClusterCollection from "./ui/ClusterCollection";
// =========================

const Grid = styled.div`
  display: grid;
  margin-top: ${({ theme: { spacing } }) => spacing[8]};
  margin-bottom: ${({ theme: { spacing } }) => spacing[10]};
  justify-content: center;

  ${({ theme: { mediaQ } }) => mediaQ.custom(1500)} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${({ theme: { spacing } }) => spacing[8]};
  }

  ${({ theme: { mediaQ } }) => mediaQ.desktopL} {
    grid-column-gap: ${({ theme: { spacing } }) => spacing[10]};
  }
`;

const Title = styled.h2`
  ::first-letter {
    text-transform: capitalize;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};

  div {
    margin-bottom: 0;
    margin-left: ${({ theme: { spacing } }) => spacing[1]};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};

  padding: ${({ theme: { spacing } }) => `${spacing[4]} ${spacing[6]}`};
  background: ${({ theme: { color } }) => color.white};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.xs};

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
      <div key={index}>
        <Flex>
          <Title>{day}</Title>
          <DayPicker day={day} dayType={dayType} />
        </Flex>
        <Wrapper>
          <ClusterCollection day={day} />
        </Wrapper>
      </div>
    );
  });

  return <Grid>{items}</Grid>;
}
