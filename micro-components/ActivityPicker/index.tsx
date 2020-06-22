// Components==============
import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
import { AppContext } from "../../global-components/AppWrapper";
import { useOnClickOutside } from "../useOnClickOutside";
// =========================

const Wrapper = styled.div``;

const Modal = styled.div``;

const Svg = styled.svg`
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

type props = { className?: string };

export default function ActivityPicker({ className }: props) {
  const [modal, setModal] = useState(false);
  const { user } = useUser();
  const { activity, setActivity } = useContext(AppContext);

  console.log(activity);

  const ref = useRef(null!);
  useOnClickOutside(ref, () => setModal(false), modal);

  const modalItems = user?.activities.map(
    (e: { activity: string; style: number }, index) => {
      return (
        <button
          onClick={() => {
            setActivity(e);
            setModal(false);
          }}
          key={index}
        >
          {e.activity}
        </button>
      );
    }
  );

  return (
    <Wrapper className={className} ref={ref}>
      {modal && <Modal>{modalItems}</Modal>}
      <Svg
        viewBox="0 0 50 50"
        onClick={() => (modal ? setModal(false) : setModal(true))}
      >
        <circle
          cx="25"
          cy="25"
          r="23.5"
          fill="#FDC61A"
          stroke="#1A1A1A"
          strokeWidth="2.5"
        />
      </Svg>
    </Wrapper>
  );
}
