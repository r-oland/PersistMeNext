// Components==============
import firebase from "firebase/app";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
// =========================

const Wrapper = styled.button`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

type props = { setError: any };

export default function ResetPassword({ setError }: props) {
  const { user } = useUser();

  const reset = () =>
    user?.email &&
    firebase
      .auth()
      .sendPasswordResetEmail(user?.email)
      .then(() => setError("Check your mailbox"))
      .catch((err) => setError(err.message));

  return <Wrapper onClick={reset}>Change password</Wrapper>;
}
