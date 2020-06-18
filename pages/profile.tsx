// Components==============
import Head from "next/head";
import styled from "styled-components";
import Logout from "../macro-profile/Logout";
// =========================

const Wrapper = styled.div``;

type props = {};

export default function profile({}: props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <Logout />
      </Wrapper>
    </>
  );
}
