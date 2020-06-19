// Components==============
import firebase from "firebase/app";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
// =========================

const Logout = styled.button`
  border: solid 2px ${({ theme: { color } }) => color.gray};
  padding: ${({ theme: { spacing } }) => `${spacing[0]} ${spacing[3]}`};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  width: ${({ theme: { spacing } }) => spacing[12]};
  ${({ theme: { fontSize } }) => fontSize.l}
`;

const Save = styled.button`
  background: ${({ theme: { color } }) => color.primary};
  border: 2px solid ${({ theme: { color } }) => color.primary};
  padding: ${({ theme: { spacing } }) => `${spacing[0]} ${spacing[3]}`};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  width: ${({ theme: { spacing } }) => spacing[12]};
  ${({ theme: { fontSize } }) => fontSize.l}
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
    firebase.auth().signOut();
    router.push("/login");
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
      <Save
        type="submit"
        onClick={() => setSaveBtn(false)}
        style={{ display: saveBtn ? "initial" : "none" }}
      >
        Save
      </Save>
      <LogoutBtn />
    </Wrapper>
  );
}
