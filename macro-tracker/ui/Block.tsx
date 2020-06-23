// Components==============
import firebase from "firebase/app";
import { motion } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
import { AppContext } from "../../global-components/AppWrapper";
import { today, year } from "../../micro-components/dateFormating";
import { activityVariants } from "../../styles/activityStyles";
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

type props = { i: number; day?: string };

type activity = {
  activity: string;
  style: number;
};

export default function Block({ i, day }: props) {
  const { user, data } = useUser();
  const { week, activity } = useContext(AppContext);

  const thisDay = day ? `${day}.${i}` : `${today()}.${i}`;
  const firebaseActivity =
    data && !day ? data[today()][i] : data && day ? data[day][i] : "initial";

  const handleClick = () => {
    if (activity.activity !== "initial") {
      const document = firebase
        .firestore()
        .collection("users")
        .doc(user?.uid)
        .collection("data")
        .doc(`${year()}_${week}`);

      if (firebaseActivity === activity.activity) {
        document.update({ [thisDay]: firebase.firestore.FieldValue.delete() });
      } else {
        document.update({ [thisDay]: activity.activity });
      }
    }
  };

  const filter: any = user?.activities?.filter(
    (e: activity) => e.activity === firebaseActivity
  );
  const style =
    filter?.length > 0
      ? filter?.map((e: activity) => `style${e.style}`)[0]
      : "initial";

  return (
    <Wrapper
      animate={style}
      whileHover="hovering"
      initial={style}
      onClick={handleClick}
    >
      <Shadow variants={shadowVariants} />
      <Element variants={activityVariants} />
    </Wrapper>
  );
}

const shadowVariants = {
  hovering: {
    x: -4.4,
    y: -4,
    transition: {
      damping: 4,
    },
  },
};
