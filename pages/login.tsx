// Components==============
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../firebase/useUser";
import AuthComp from "../macro-login";
import { Container } from "../styles/mixins";
// =========================

const Wrapper = styled(Container)``;

type props = {};

export default function login({}: props) {
  const { signedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (signedIn) {
      router.push("/");
    }
  }, [signedIn]);

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to persistMe" />
      </Head>
      <Wrapper>
        <AuthComp />
      </Wrapper>
    </>
  );
}
