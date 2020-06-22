// Components==============
import { motion } from "framer-motion";
import styled from "styled-components";
import { activityStyles, activityVariants } from "../styles/activityStyles";
// =========================

const Wrapper = styled.div`
  position: relative;
  height: 20px;
  width: 50px;
  cursor: pointer;
`;

const Element = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border: solid 2.5px ${({ theme: { color } }) => color.black};
  border-radius: 1px;
`;

const Shadow = styled.div`
  pointer-events: none;
  position: absolute;
  left: 4px;
  top: 4px;
  background: ${({ theme: { color } }) => color.gray};
  border: solid 2.5px ${({ theme: { color } }) => color.gray};
  height: 100%;
  width: 100%;
  border-radius: 1px;
`;

type props = {
  style?: number;
  completeStyle?: string;
};

export default function Block({ style, completeStyle }: props) {
  return (
    <Wrapper>
      <Shadow />
      <Element
        animate={style ? activityStyles[style] : completeStyle}
        variants={activityVariants}
        initial={false}
      />
    </Wrapper>
  );
}
