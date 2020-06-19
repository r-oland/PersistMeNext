// Components==============
import { useState } from "react";
import styled from "styled-components";
import Modal from "../micro-components/Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
// =========================

const Button = styled.button`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
`;

const Flex = styled.div`
  display: inline-block;
  margin-top: ${({ theme: { spacing } }) => spacing[3]};

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    display: flex;
  }
`;

type props = {};

export default function AuthComp({}: props) {
  const [displayedForm, setDisplayedForm] = useState("login");

  const switchForm = () =>
    setDisplayedForm((prev) => (prev === "login" ? "register" : "login"));

  return (
    <Modal>
      {displayedForm === "login" ? <LoginForm /> : <RegisterForm />}
      <Flex>
        {displayedForm === "login" ? (
          <>
            <p>Don't have an account yet?</p>
            <div style={{ width: 5 }} />
            <Button onClick={switchForm}>Register</Button>
          </>
        ) : (
          <>
            <p>Already have an account?</p>
            <div style={{ width: 5 }} />
            <Button onClick={switchForm}>Log in</Button>
          </>
        )}
      </Flex>
    </Modal>
  );
}
