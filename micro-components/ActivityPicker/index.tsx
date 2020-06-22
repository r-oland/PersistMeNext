// Components==============
import { motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../global-components/AppWrapper";
import { activityStyles, activityVariants } from "../../styles/activityStyles";
import { useOnClickOutside } from "../useOnClickOutside";
import Modal from "./Modal";
// =========================

const Wrapper = styled.div`
  position: relative;
`;

const Circle = styled(motion.div)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 3px solid ${({ theme: { color } }) => color.black};
`;

type props = { className?: string };

export default function ActivityPicker({ className }: props) {
  const { activity } = useContext(AppContext);
  const [modal, setModal] = useState(false);

  const ref = useRef(null!);
  useOnClickOutside(ref, () => setModal(false), modal);

  return (
    <Wrapper className={className} ref={ref}>
      {modal && <Modal setModal={setModal} />}
      <Circle
        animate={activityStyles[activity.style]}
        initial={false}
        variants={activityVariants}
        onClick={() => (modal ? setModal(false) : setModal(true))}
      />
    </Wrapper>
  );
}
