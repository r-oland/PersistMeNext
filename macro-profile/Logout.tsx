// Components==============
import firebase from "firebase/app";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

type props = {};

export default function Logout({}: props) {
  const handleLogoutChange = () => {
    firebase.auth().signOut();
  };

  return (
    <Wrapper>
      <button onClick={handleLogoutChange}>log out</button>
    </Wrapper>
  );
}
