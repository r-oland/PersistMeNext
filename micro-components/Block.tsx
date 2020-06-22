// Components==============
import { motion } from "framer-motion";
import styled from "styled-components";
import { useUser } from "../firebase/useUser";
import { activityVariants } from "../styles/activityStyles";
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
  style: number;
};

export default function Block({ style }: props) {
  const { user } = useUser();
  const styles = ["initial"];

  user?.activities.forEach((e: { activity: string; style: number }) => {
    styles.push(`style${e.style}`);
  });

  return (
    <Wrapper>
      <Shadow />
      <Element
        animate={styles[style]}
        variants={activityVariants}
        initial={false}
      />
    </Wrapper>
  );
}
