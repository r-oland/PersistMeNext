// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled(motion.svg)`
  filter: ${({ theme: { shadow } }) => `drop-shadow(${shadow.xs})`};
  width: 110px;
  transform-origin: center !important;
`;

export default function Loader() {
  return (
    <Wrapper>
      <Svg
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate="mount"
        variants={loader}
      >
        <circle cx="90" cy="90" r="90" fill="white" />
        <path
          d="M92.827 48.6641C114.06 48.6641 124.527 60.9253 124.527 75.4293C124.527 86.0457 118.845 97.2602 103.742 100.998C98.1589 101.952 94.5387 102.171 87.7431 102.344H76.5286V138.081H61.875V48.6641H92.827ZM92.827 60.6262H76.5286V90.6811H92.827C104.341 90.6811 109.424 84.4009 109.424 75.4293C109.424 66.4577 104.191 60.6262 92.827 60.6262Z"
          fill="#333333"
        />
        <path
          d="M99.7053 41.7857C120.938 41.7857 131.405 54.0469 131.405 68.551C131.405 79.1674 125.723 90.3819 110.621 94.12C104.464 94.8757 100.967 95.1866 94.6213 95.4658H83.4068V131.203H68.7532V41.7857H99.7053ZM99.7053 53.7478H83.4068V83.8027H99.7053C111.219 83.8027 116.303 77.5226 116.303 68.551C116.303 59.5794 111.069 53.7478 99.7053 53.7478Z"
          fill="#FFD332"
        />
      </Svg>
    </Wrapper>
  );
}

const loader = {
  mount: {
    scale: [1, 1.2, 1, 0.9, 1],
    transition: { loop: Infinity, duration: 1.5 },
  },
};
