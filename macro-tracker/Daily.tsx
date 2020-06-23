// Components==============
import styled from "styled-components";
import { month, today } from "../micro-components/dateFormating";
import DayPicker from "./DayPicker";
import ClusterCollection from "./ui/ClusterCollection";
// =========================

const Grid = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  align-content: center;
  margin-top: ${({ theme: { spacing } }) => spacing[10]};
  padding-bottom: ${({ theme: { spacing } }) => spacing[12]};

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    padding-bottom: 0;
    height: 100vh;
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 850px;

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    padding: ${({ theme: { spacing } }) => `${spacing[6]} ${spacing[6]}`};
    background: ${({ theme: { color } }) => color.white};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    box-shadow: ${({ theme: { shadow } }) => shadow.xs};
    transform: translateY(-60px);
  }

  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[0]};
    text-align: center;

    ::first-letter {
      text-transform: capitalize;
    }
  }
`;

type props = {};

export default function DailyView({}: props) {
  return (
    <Grid>
      <Wrapper>
        <h2>{`${today()} ${month()} ${new Date().getDate()}  `}</h2>
        <DayPicker />
        <ClusterCollection />
      </Wrapper>
    </Grid>
  );
}
