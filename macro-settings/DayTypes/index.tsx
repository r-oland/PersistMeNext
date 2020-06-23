// Components==============
import firebase from "firebase/app";
import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
// =========================

const Wrapper = styled.div`
  span {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    margin-right: ${({ theme: { spacing } }) => spacing[4]};
  }

  form {
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  }

  input {
    width: 150px;
    border: none;
    background: none;
  }

  button {
    display: block;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

type props = {};

const DayType = ({ e, index }: { e: string; index: number }) => {
  const { user } = useUser();
  const [formValue, setFormValue] = useState(e);

  const setDayType = (e: any) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("users")
      .doc(user?.uid)
      .update({ [`dayTypes.type${index + 1}`]: formValue });
  };

  const handleInputChange = (e: any) => {
    e.persist();
    setFormValue(e.target.value);
  };

  return (
    <form onSubmit={setDayType}>
      <span>{index + 1}: </span>
      <input value={formValue} onChange={handleInputChange} required />
      <button style={{ display: formValue !== e ? "initial" : "none" }}>
        save
      </button>
    </form>
  );
};

export default function DayTypes({}: props) {
  const { user } = useUser();

  const dayTypes = user?.dayTypes.map((e, index) => {
    return <DayType e={e} key={index} index={index} />;
  });

  return <Wrapper>{dayTypes}</Wrapper>;
}
