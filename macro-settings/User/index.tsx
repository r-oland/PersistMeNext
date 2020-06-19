// Components==============
import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../global-components/firebase/useUser";
import Buttons from "./Buttons";
// =========================

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};

  input {
    background: none;
    border: none;
  }

  label {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

function Fields() {
  const { user } = useUser();
  const [saveBtn, setSaveBtn] = useState(false);

  const fields = ["username", "email"];
  const [formFields, setFormFields]: any = useState({
    username: user?.username,
    email: user?.email,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;

    setSaveBtn(true);
    setFormFields((prev: any) => ({ ...prev, [field]: value }));
  };

  const inputItems = fields.map((field, index) => {
    return (
      <Grid key={index}>
        <label>{field}:</label>
        <input
          value={formFields[field]}
          onChange={handleInputChange}
          name={field}
        />
      </Grid>
    );
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputItems}
      <Buttons saveBtn={saveBtn} setSaveBtn={setSaveBtn} />
    </form>
  );
}

export default function User() {
  const { user } = useUser();
  const goodToGo = user?.username && user?.username !== "loading";

  return goodToGo ? <Fields /> : <></>;
}
