// Components==============
import firebase from "firebase/app";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { useUser } from "../firebase/useUser";
import { today } from "../micro-components/dateFormating";
import { AppContext } from "./AppWrapper";
// =========================

const Modal = styled(motion.div)`
  position: fixed;
  z-index: 301;
  background: ${({ theme: { color } }) => color.white};
  padding: ${({ theme: { spacing } }) => `${spacing[4]} ${spacing[4]}`};
  max-width: 300px;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  display: grid;
  grid-gap: ${({ theme: { spacing } }) => spacing[2]};

  h4 {
    text-align: center;
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  }

  button {
    display: block;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    ${({ theme: { fontSize } }) => fontSize.l}

    &:hover {
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    }
  }

  div {
    width: 75%;
    height: 1.5px;
    background: ${({ theme: { color } }) => color.gray};
    margin: 0 auto;
    opacity: 0.2;

    &:last-child {
      display: none;
    }
  }
`;
const Shade = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: black;
  z-index: 300;
`;

type props = {};

export default function DayModal({}: props) {
  const { dayModalState, setDayModalState, week, year } = useContext(
    AppContext
  );

  const { user, isVerified } = useUser();
  const d = typeof dayModalState === "string" ? dayModalState : today();
  const w = week;
  const y = year;

  const setDayType = (e: string) => {
    firebase
      .firestore()
      .collection("users")
      .doc(user?.uid)
      .collection("data")
      .doc(`${y}_${w}`)
      .update({ [`${d}.dayType`]: e });

    setDayModalState(false);
  };

  const dayTypes = user?.dayTypes.map((e, index) => {
    return (
      <React.Fragment key={index}>
        <button onClick={() => setDayType(e)}>{e}</button>
        <div />
      </React.Fragment>
    );
  });

  return (
    <motion.div animate="mount" initial="unMounted" exit="unMounted">
      <Shade onClick={() => setDayModalState(false)} variants={shadeVariants} />
      <Modal variants={modalVariants}>
        {isVerified ? (
          <>
            <h4>Today is a</h4>
            {dayTypes}
          </>
        ) : (
          <p style={{ textAlign: "center" }}>
            Please check your mailbox and verify your account.
          </p>
        )}
      </Modal>
    </motion.div>
  );
}

const shadeVariants = {
  mount: {
    opacity: 0.8,
  },
  unMounted: {
    opacity: 0,
  },
};

const modalVariants = {
  mount: {
    opacity: 1,
    transition: { delay: 0.2 },
  },
  unMounted: {
    opacity: 0,
  },
};
