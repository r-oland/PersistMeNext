// Components==============
import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
import Buttons from "./Buttons";
import ResetPassword from "./ResetPassword";
import { updateUserDoc } from "./updateUserDoc";
// =========================

const Grid = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr;
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};

  input {
    background: none;
    border: none;

    ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
      width: 70%;
    }
  }

  label {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const Error = styled.p`
  color: red;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  ${({ theme: { fontSize } }) => fontSize.s}
  opacity: 0.9;
`;

function Fields() {
  const { user } = useUser();
  const [saveBtn, setSaveBtn] = useState(false);
  const [error, setError] = useState("");

  const fields = ["name", "email"];
  const [formFields, setFormFields]: any = useState({
    name: user?.name,
    email: user?.email,
    uid: user?.uid,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;

    setSaveBtn(true);
    setError("");
    setFormFields((prev: any) => ({ ...prev, [field]: value }));
  };

  const inputItems = fields.map((field, index) => {
    return (
      <Grid key={index}>
        <label htmlFor={field}>{field}:</label>
        <input
          value={formFields[field]}
          onChange={handleInputChange}
          name={field}
          id={field}
        />
      </Grid>
    );
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    updateUserDoc(formFields, setError, user?.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputItems}
      <ResetPassword setError={setError} />
      <Error>{error}</Error>
      <Buttons saveBtn={saveBtn} setSaveBtn={setSaveBtn} />
    </form>
  );
}

export default function User() {
  const { user } = useUser();
  const ready = user?.name && user?.name !== "loading";

  return ready ? <Fields /> : <></>;
}
