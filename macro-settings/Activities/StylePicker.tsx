// Components==============
import firebase from "firebase/app";
import React from "react";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
import Block from "../../micro-components/Block";
import { activityStyles } from "../../styles/activityStyles";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing[2]};
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  display: grid;
  grid-gap: ${({ theme: { spacing } }) => spacing[2]};
  grid-template-columns: repeat(4, 1fr);

  ${({ theme: { mediaQ } }) => mediaQ.mobile} {
    grid-template-columns: repeat(6, 1fr);
  }
  ${({ theme: { mediaQ } }) => mediaQ.tablet} {
    grid-template-columns: repeat(7, 1fr);
  }
`;

type props = {
  setShowPicker: any;
  activityNumber?: string;
  newStyle?: boolean;
  setBlockStyle?: any;
};

export default function StylePicker({
  setShowPicker,
  activityNumber,
  newStyle,
  setBlockStyle,
}: props) {
  const { user } = useUser();

  const changeStyle = async (style: number) => {
    setShowPicker(false);

    await firebase
      .firestore()
      .collection("users")
      .doc(user?.uid)
      .update({ [`activities.${activityNumber}.style`]: style });
  };

  const pickStyle = (style: number) => {
    setBlockStyle(style);
    setShowPicker(false);
  };

  const styles = activityStyles.map((e, index) => {
    if (index !== 0) {
      return (
        <button
          key={index}
          onClick={() => {
            newStyle ? pickStyle(index) : changeStyle(index);
          }}
        >
          <Block completeStyle={e} />
        </button>
      );
    }
    return <React.Fragment key={index}> </React.Fragment>;
  });

  return <Wrapper>{styles}</Wrapper>;
}
