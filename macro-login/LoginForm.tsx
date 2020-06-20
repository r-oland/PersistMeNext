// Components==============
import firebase from "firebase/app";
import { useState } from "react";
import { useUser } from "../global-components/firebase/useUser";
import { Button } from "../styles/mixins";
import { Form } from "./FormStyling";
// =========================

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
      <p>{error}</p>
      <label>Email</label>
      <input
        value={formValues.email}
        type="email"
        name="email"
        placeholder="myemail@example.com"
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
      />
      <Button type="submit">login</Button>
    </Form>
  );
}
