// Components==============
import firebase from "firebase/app";
import { motion } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
import { AppContext } from "../../global-components/AppWrapper";
import { today, year } from "../../micro-components/dateFormating";
// =========================

const Wrapper = styled(motion.div)`
  position: relative;
  height: 20px;
  width: 50px;
`;

const Element = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border: solid 2.5px ${({ theme: { color } }) => color.black};
  cursor: pointer;
  border-radius: 1px;
`;

const Shadow = styled(motion.div)`
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

type props = { i: number };

export default function Block({ i }: props) {
  const { user, data } = useUser();
  const { week, activity } = useContext(AppContext);

  const day = `${today()}.${i}`;
  const firebaseActivity = data ? data[today()][i] : "initial";

  const handleClick = () => {
    if (firebaseActivity === "initial" && activity.activity === "initial") {
      console.log("select a activity");
    } else {
      const document = firebase
        .firestore()
        .collection("users")
        .doc(user?.uid)
        .collection("data")
        .doc(`${year()}_${week}`);

      if (firebaseActivity === activity.activity) {
        document.update({ [day]: "initial" });
      } else {
        document.update({ [day]: activity.activity });
      }
    }
  };

  return (
    <Wrapper
      animate={firebaseActivity}
      whileHover="hovering"
      initial="initial"
      onClick={handleClick}
    >
      <Shadow variants={shadowVariants} />
      <Element variants={blockVariants} />
    </Wrapper>
  );
}

const blockVariants = {
  initial: { backgroundColor: "#ffffff" },
  hovering: {},
  work: { backgroundColor: "#FDC61A" },
  exercise: { backgroundColor: "#FDC61A" },
};

const shadowVariants = {
  hovering: {
    x: -4.4,
    y: -4,
    transition: {
      damping: 4,
    },
  },
};
