// Components==============
import Head from "next/head";
import styled from "styled-components";
import { useUser } from "../global-components/firebase/useUser";
import Form from "../macro-login/login/Form";
import Register from "../macro-login/register/Form";
// =========================

const Wrapper = styled.div``;

type props = {};

export default function login({}: props) {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        {user?.username}
        <Form />
        <Register />
      </Wrapper>
    </>
  );
}
