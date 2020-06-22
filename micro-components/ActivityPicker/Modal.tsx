// Components==============
import { useContext } from "react";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
import { AppContext } from "../../global-components/AppWrapper";
import Block from "../Block";
// =========================

type props = { setModal: (arg: any) => any };

const Wrapper = styled.div`
  position: absolute;
  background: ${({ theme: { color } }) => color.white};
  width: 250px;
  transform: translateX(-50%);
  left: 50%;
  padding: ${({ theme: { spacing } }) => `${spacing[2]} ${spacing[4]}`};
  box-shadow: ${({ theme: { shadow } }) => shadow.xs};
  bottom: 60px;
  * {
    &:last-child {
      margin-bottom: 0 !important;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  justify-items: start;
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};

  button {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

export default function Modal({ setModal }: props) {
  const { user } = useUser();
  const { setActivity } = useContext(AppContext);

  const modalItems = user?.activities.map(
    (e: { activity: string; style: number }, index) => {
      return (
        <Grid
          onClick={() => {
            setActivity(e);
            setModal(false);
          }}
          key={index}
        >
          <Block style={e.style !== undefined ? e.style : 0} />
          <button>{e.activity}</button>
        </Grid>
      );
    }
  );

  return <Wrapper>{modalItems}</Wrapper>;
}
