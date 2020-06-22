// Components==============
import firebase from "firebase/app";
import { useState } from "react";
import { useUser } from "../firebase/useUser";
import { Button } from "../styles/mixins";
import { Form } from "./FormStyling";
// =========================

type props = {};

export default function RegisterForm({}: props) {
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    activities: {
      activity1: { activity: "work", style: 1 },
      activity2: { activity: "exercise", style: 2 },
      activity3: { activity: "music", style: 3 },
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
        .then(() => {
          const createUserDoc = firebase
            .functions()
            .httpsCallable("createUserDoc");
          return createUserDoc(formValues);
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
      <Button type="submit">Register</Button>
    </Form>
  );
}
