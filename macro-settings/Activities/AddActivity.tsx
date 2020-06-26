// Components==============
import firebase from "firebase/app";
import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
import Block from "../../micro-components/Block";
import StylePicker from "./StylePicker";
// =========================

const Wrapper = styled.div`
  form {
    display: flex;
    input {
      margin-left: ${({ theme: { spacing } }) => spacing[4]};
      border: none;
      border-bottom: solid 1px ${({ theme: { color } }) => color.gray};
      width: 140px;
      background: none;
    }

    button {
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    }
  }
`;

const Add = styled.button`
  margin-left: ${({ theme: { spacing } }) => spacing[3]};
`;

type props = {};

export default function AddActivity({}: props) {
  const [showFields, setShowFields] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [blockStyle, setBlockStyle] = useState(1);
  const { user } = useUser();

  const handleInputChange = (e: any) => {
    e.persist();
    setFormValue(e.target.value);
  };

  let orderArr: number[] = [];
  user?.activities.forEach((r: { order: number }) => orderArr.push(r?.order));

  const hightesNumber = Math.max.apply(null, orderArr) + 1;

  const addActivity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowFields(false);

    firebase
      .firestore()
      .collection("users")
      .doc(user?.uid)
      .update({
        [`activities.${hightesNumber}`]: {
          activity: formValue,
          style: blockStyle,
          order: hightesNumber,
        },
      });
  };

  return (
    <Wrapper>
      {!showFields ? (
        <Add
          onClick={() =>
            showFields ? setShowFields(false) : setShowFields(true)
          }
        >
          <svg width="16" height="16" viewBox="0 0 14 14">
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#1A1A1A" />
          </svg>
        </Add>
      ) : (
        <>
          <form onSubmit={addActivity}>
            <div
              onClick={() =>
                showPicker ? setShowPicker(false) : setShowPicker(true)
              }
            >
              <Block style={blockStyle} />
            </div>
            <input
              value={formValue}
              name="activity"
              placeholder="activity"
              onChange={handleInputChange}
              required
            />
            <Add style={{ display: formValue !== "" ? "initial" : "none" }}>
              add
            </Add>
          </form>

          {showPicker && (
            <StylePicker
              setShowPicker={setShowPicker}
              newStyle
              setBlockStyle={setBlockStyle}
            />
          )}
        </>
      )}
    </Wrapper>
  );
}
