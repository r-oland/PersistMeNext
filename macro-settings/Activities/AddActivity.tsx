// Components==============
import { useState } from "react";
import styled from "styled-components";
import Block from "../../micro-components/Block";
// =========================

const Wrapper = styled.div`
  button {
    margin-left: ${({ theme: { spacing } }) => spacing[3]};
  }

  form {
    display: flex;
    input {
      margin-left: ${({ theme: { spacing } }) => spacing[4]};
      border: none;
      border-bottom: solid 1px ${({ theme: { color } }) => color.gray};
      width: 140px;
    }

    button {
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    }
  }
`;

type props = {};

export default function AddActivity({}: props) {
  const [showFields, setShowFields] = useState(false);
  const [formValue, setFormValue] = useState("");

  const handleInputChange = (e: any) => {
    e.persist();
    setFormValue(e.target.value);
  };

  const addActivity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowFields(false);

    console.log("activity added");
  };

  return (
    <Wrapper>
      {!showFields ? (
        <button
          onClick={() =>
            showFields ? setShowFields(false) : setShowFields(true)
          }
        >
          <svg width="16" height="16" viewBox="0 0 14 14">
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#1A1A1A" />
          </svg>
        </button>
      ) : (
        <form onSubmit={addActivity}>
          <Block style={1} />
          <input
            value={formValue}
            name="activity"
            placeholder="activity"
            onChange={handleInputChange}
            required
          />
          <button style={{ display: formValue !== "" ? "initial" : "none" }}>
            add
          </button>
        </form>
      )}
    </Wrapper>
  );
}
