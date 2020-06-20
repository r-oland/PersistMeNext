// Components==============
import firebase from "firebase/app";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
import { Button } from "../../styles/mixins";
// =========================

const Logout = styled(Button)`
  border: solid 2px ${({ theme: { color } }) => color.gray};
  background: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 225px;
  margin-top: ${({ theme: { spacing } }) => spacing[2]};
`;

function LogoutBtn() {
  const router = useRouter();
  const handleLogoutChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => router.push("/login"));
  };

  return <Logout onClick={handleLogoutChange}>log out</Logout>;
}

type props = {
  saveBtn: boolean;
  setSaveBtn: (arg: boolean) => void;
};

export default function Buttons({ saveBtn, setSaveBtn }: props) {
  return (
    <Wrapper>
      <Button
        type="submit"
        onClick={() => setSaveBtn(false)}
        style={{ display: saveBtn ? "initial" : "none" }}
      >
        Save
      </Button>
      <LogoutBtn />
    </Wrapper>
  );
}
