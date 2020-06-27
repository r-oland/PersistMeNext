// Components==============
import firebase from "firebase/app";
import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../firebase/useUser";
import { Button } from "../styles/mixins";
import { Form } from "./FormStyling";
// =========================

const Error = styled.p`
  color: red;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  ${({ theme: { fontSize } }) => fontSize.s}
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
  opacity: 0.9;
`;

type props = {};

export default function LoginForm({}: props) {
  const [formValues, setformValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { user } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (user === null) {
      firebase
        .auth()
        .signInWithEmailAndPassword(formValues.email, formValues.password)
        .catch((error) => setError(error.message));
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
      <label htmlFor="email">Email</label>
      <input
        value={formValues.email}
        type="email"
        name="email"
        id="email"
        placeholder="myemail@example.com"
        onChange={handleInputChange}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        value={formValues.password}
        type="password"
        name="password"
        id="password"
        autoComplete="on"
        placeholder="********"
        onChange={handleInputChange}
        required
      />
      <Error>{error}</Error>
      <Button type="submit">login</Button>
    </Form>
  );
}
