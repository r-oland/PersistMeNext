// Components==============
import firebase from "firebase/app";
import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../global-components/firebase/useUser";
// =========================

const Wrapper = styled.form``;

type props = {};

export default function Form({}: props) {
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const { user } = useUser();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const passwordConf = formValues.password === formValues.confirmPassword;

    if (user === null && passwordConf) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(formValues.email, formValues.password)
        .then(() => {
          const createUserDoc = firebase
            .functions()
            .httpsCallable("createUserDoc");
          return createUserDoc(formValues.username);
        })
        .catch((error) => setError(error));
    } else {
      setError("The passwords do not match");
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
        value={formValues.username}
        type="username"
        name="username"
        placeholder="username"
        onChange={handleInputChange}
        required
      />
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
        minLength={6}
      />
      <input
        value={formValues.confirmPassword}
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        onChange={handleInputChange}
        required
        minLength={6}
      />
      <button type="submit">Register</button>
    </Wrapper>
  );
}
