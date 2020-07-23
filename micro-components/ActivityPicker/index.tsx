// Components==============
import { motion } from "framer-motion";
import { useClient, useOnClickOutside } from "hooks-lib";
import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../global-components/AppWrapper";
import {
  activityStyles,
  leftVariants,
  rightVariants,
} from "../../styles/activityStyles";
import Modal from "./Modal";

// =========================

const Wrapper = styled.div`
  position: relative;
  z-index: 299;
`;

const Circle = styled(motion.svg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

type props = { className?: string };

export default function ActivityPicker({ className }: props) {
  const { activity, dragRef, query } = useContext(AppContext);
  const [modal, setModal] = useState(false);

  const ref = useRef(null!);
  useOnClickOutside(ref, () => setModal(false), modal);

  const { isClient } = useClient();

  return (
    <Wrapper className={className} ref={ref}>
      <motion.div drag={query && isClient} dragConstraints={dragRef}>
        {modal && <Modal setModal={setModal} />}

        <Circle
          xmlns="http://www.w3.org/2000/svg"
          width="19.6712mm"
          height="19.6712mm"
          viewBox="0 0 55.7609 55.7609"
          animate={activityStyles[activity.style]}
          initial={false}
          onTap={() => (modal ? setModal(false) : setModal(true))}
        >
          <motion.path
            d="M21.0553,4.254a24.6245,24.6245,0,1,1-16.15,14.8578A24.6056,24.6056,0,0,1,21.0553,4.254Z"
            fill="#fdc61b"
            variants={rightVariants}
            style={{ transform: `translate(0.7px, -2px)` }}
          />
          <motion.path
            d="M3.8646,18.3434,52.03,36.3711A25.7142,25.7142,0,0,1,3.8646,18.3434Z"
            fill="#1a1a1a"
            variants={leftVariants}
          />
          <path
            d="M1.1039,35.6369A27.88,27.88,0,1,0,20.1446,1.1029,27.8834,27.8834,0,0,0,1.1039,35.6369ZM51.53,21.0639A24.61,24.61,0,0,1,4.2454,34.7291,24.61,24.61,0,1,1,51.53,21.0639Z"
            fill="#1a1a1a"
          />
        </Circle>
      </motion.div>
    </Wrapper>
  );
}
