// Components==============
import firebase from "firebase/app";
import { motion } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
import { AppContext } from "../../global-components/AppWrapper";
import { today } from "../../micro-components/dateFormating";
import { activityVariants } from "../../styles/activityStyles";
// =========================

type wrapper = { day: string | undefined };

const Wrapper = styled(motion.div)<wrapper>`
  position: relative;
  height: ${({ day }) =>
    typeof day !== "string" ? "20px" : "calc(20px * 0.8)"};
  width: ${({ day }) =>
    typeof day !== "string" ? "50px" : "calc(50px * 0.8)"};

  ${({ theme: { mediaQ } }) => mediaQ.custom(1700)} {
    height: 20px;
    width: 50px;
  }
`;

const ElementWrapper = styled.div`
  border: solid 2.5px ${({ theme: { color } }) => color.black};
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  border-radius: 1px;
  z-index: 3;
`;

const Element = styled(motion.div)`
  position: absolute;
  width: 130%;
  height: 130%;
  transform: translate(-15%, -15%);
  z-index: 2;
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
  z-index: 1;
`;

type props = { i: number; day?: string };

type activity = {
  activity: string;
  style: number;
};

export default function Block({ i, day }: props) {
  const { user, data } = useUser();
  const { week, year, activity } = useContext(AppContext);

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
        .doc(`${year}_${week}`);

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
      day={day}
    >
      <Shadow variants={shadowVariants} />
      <ElementWrapper>
        <Element variants={activityVariants} />
      </ElementWrapper>
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
