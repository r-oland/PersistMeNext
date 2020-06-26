// Components==============
import firebase from "firebase/app";
import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../firebase/useUser";
import { Button } from "../styles/mixins";
import { createUserDoc } from "./createUserDoc";
import { Form } from "./FormStyling";
// =========================

type props = {};

const Error = styled.p`
  color: red;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  ${({ theme: { fontSize } }) => fontSize.s}
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
  opacity: 0.9;
`;

export default function RegisterForm({}: props) {
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    activities: {
      activity1: { activity: "work", style: 1, order: 1 },
      activity2: { activity: "exercise", style: 2, order: 2 },
      activity3: { activity: "music", style: 3, order: 3 },
    },
    dayTypes: {
      type1: "Workday",
      type2: "Half-day",
      type3: "Off-day",
    },
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
        .then((r) => {
          return createUserDoc(formValues, r.user?.uid);
        })
        .catch((error) => setError(error.message));
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
    <Form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        value={formValues.name}
        type="name"
        name="name"
        placeholder="Jon"
        onChange={handleInputChange}
        required
      />
      <label>Email</label>
      <input
        value={formValues.email}
        type="email"
        name="email"
        placeholder="Jon@example.com"
        onChange={handleInputChange}
        required
      />
      <label>Password</label>
      <input
        value={formValues.password}
        type="password"
        name="password"
        placeholder="********"
        onChange={handleInputChange}
        required
        minLength={6}
      />
      <label>Confirm password</label>
      <input
        value={formValues.confirmPassword}
        type="password"
        name="confirmPassword"
        placeholder="********"
        onChange={handleInputChange}
        required
        minLength={6}
      />
      <Error>{error}</Error>
      <Button type="submit">Register</Button>
    </Form>
  );
}
