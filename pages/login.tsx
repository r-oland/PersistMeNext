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
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <AuthComp />
      </Wrapper>
    </>
  );
}
