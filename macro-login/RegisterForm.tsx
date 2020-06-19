// Components==============
import firebase from "firebase/app";
import { useState } from "react";
import { useUser } from "../global-components/firebase/useUser";
import { Form } from "./FormStyling";
// =========================

type props = {};

export default function RegisterForm({}: props) {
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
      <p>{error}</p>
      <label>Username</label>
      <input
        value={formValues.username}
        type="username"
        name="username"
        placeholder="coolname77 "
        onChange={handleInputChange}
        required
      />
      <label>Email</label>
      <input
        value={formValues.email}
        type="email"
        name="email"
        placeholder="coolname77@example.com"
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
      <button type="submit">Register</button>
    </Form>
  );
}
