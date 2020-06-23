// Components==============
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../global-components/AppWrapper";
import { activityStyles, activityVariants } from "../../styles/activityStyles";
import { useOnClickOutside } from "../useOnClickOutside";
import Modal from "./Modal";
// =========================

const Wrapper = styled.div`
  position: relative;
  z-index: 1000;
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
  const { activity, dragRef, query } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef(null!);
  useOnClickOutside(ref, () => setModal(false), modal);

  useEffect(() => {
    setIsMobile(query);
  }, [query]);

  return (
    <Wrapper className={className} ref={ref}>
      <motion.div drag={isMobile} dragConstraints={dragRef}>
        {modal && <Modal setModal={setModal} />}
        <Circle
          animate={activityStyles[activity.style]}
          initial={false}
          variants={activityVariants}
          onTap={() => (modal ? setModal(false) : setModal(true))}
        />
      </motion.div>
    </Wrapper>
  );
}
