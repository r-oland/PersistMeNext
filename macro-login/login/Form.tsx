// Components==============
import firebase from "firebase/app";
import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../global-components/firebase/useUser";
// =========================

const Wrapper = styled.form``;

type props = {};

export default function Form({}: props) {
  const [formValues, setformValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { user } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (user === null) {
      firebase
        .auth()
        .signInWithEmailAndPassword(formValues.email, formValues.password)
        .catch((error) => setError(error));
    }
  };

  const handleInputChange = (e: any) => {
    e.persist();
    setformValues((currentValues) => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <p>{error}</p>
      <input
        value={formValues.email}
        type="email"
        name="email"
        placeholder="email"
        onChange={handleInputChange}
        required
      />
      <input
        value={formValues.password}
        type="password"
        name="password"
        placeholder="password"
        onChange={handleInputChange}
        required
      />
      <button type="submit">login</button>
    </Wrapper>
  );
}
