// Components==============
import firebase from "firebase/app";
import { motion } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
import { AppContext } from "../../global-components/AppWrapper";
import { today } from "../../micro-components/dateFormating";
import { leftVariants, rightVariants } from "../../styles/activityStyles";
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

type props = { i: number; day?: string };

type activity = {
  activity: string;
  style: number;
  order: number;
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

export const shadowVariants = {
  hovering: {
    x: -5,
    y: -5,
    transition: {
      damping: 4,
    },
  },
};
