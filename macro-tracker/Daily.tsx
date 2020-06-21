// Components==============
import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../firebase/useUser";
import ClusterCollection from "./ui/ClusterCollection";
// =========================

const Wrapper = styled.div`
  max-width: 850px;
  background: ${({ theme: { color } }) => color.white};
  padding: ${({ theme: { spacing } }) => `${spacing[4]} ${spacing[6]}`};
  box-shadow: ${({ theme: { shadow } }) => shadow.xs};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  margin: 0 auto;
`;

type props = {};

export default function DailyView({}: props) {
  // const { setWeek, week } = useContext(AppContext);
  const { data } = useContext(UserContext);
  console.log(data?.sunday);

  return (
    <Wrapper>
      <ClusterCollection />
    </Wrapper>
  );
}

//// create add document function
//// create update document function
//// add listener for data changes?
//// add data to user hook
//// format the dates correct
// add activities to user hook
// code activity picker
