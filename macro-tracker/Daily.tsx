// Components==============
import styled from "styled-components";
import ClusterCollection from "./ui/ClusterCollection";
// =========================

const Grid = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  align-content: center;
  margin-top: ${({ theme: { spacing } }) => spacing[12]};

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    height: 100vh;
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 850px;

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    padding: ${({ theme: { spacing } }) => `${spacing[7]} ${spacing[6]}`};
    background: ${({ theme: { color } }) => color.white};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    box-shadow: ${({ theme: { shadow } }) => shadow.xs};
    transform: translateY(-60px);
  }

  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  }
`;

type props = {};

export default function DailyView({}: props) {
  // const { setWeek, week } = useContext(AppContext);
  // const { data } = useContext(UserContext);

  return (
    <Grid>
      <Wrapper>
        <ClusterCollection />
      </Wrapper>
    </Grid>
  );
}
