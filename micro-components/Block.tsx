// Components==============
import { motion } from "framer-motion";
import styled from "styled-components";
import { shadowVariants } from "../macro-tracker/ui/Block";
import {
  activityStyles,
  leftVariants,
  rightVariants,
} from "../styles/activityStyles";
// =========================

const Wrapper = styled(motion.div)`
  position: relative;
  height: 20px;
  width: 50px;
`;

const Svg = styled.svg`
  position: absolute;
  width: 105%;
  height: 105%;
  cursor: pointer;
  z-index: 3;
`;

const Shadow = styled(motion.div)`
  pointer-events: none;
  position: absolute;
  left: 6px;
  top: 6px;
  background: ${({ theme: { color } }) => color.gray};
  border: solid 2.5px ${({ theme: { color } }) => color.gray};
  height: 100%;
  width: 100%;
  border-radius: 1px;
  z-index: 1;
`;

type props = {
  style?: number;
  completeStyle?: string;
};

export default function Block({ style, completeStyle }: props) {
  return (
    <Wrapper
      animate={style ? activityStyles[style] : completeStyle}
      initial={false}
      whileHover="hovering"
    >
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.87 21.43">
        <motion.rect
          x="0.973"
          y="2.0293"
          width="49.9139"
          height="17.3614"
          fill="#1a1a1a"
          variants={rightVariants}
        />
        <motion.polygon
          points="50.887 19.391 0.973 19.391 0.973 2.029 50.887 19.391"
          fill="#FFFFFF"
          variants={leftVariants}
        />
        <path
          d="M50.83,0H1.03A1.0285,1.0285,0,0,0,0,1.03V20.4a1.0285,1.0285,0,0,0,1.03,1.03h49.8a1.0371,1.0371,0,0,0,1.04-1.03V1.03A1.0371,1.0371,0,0,0,50.83,0Zm-1.9,18.71h-46v-16h46Z"
          fill="#1a1a1a"
        />
      </Svg>
      <Shadow variants={shadowVariants} />
    </Wrapper>
  );
}
