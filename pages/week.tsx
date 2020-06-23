// Components==============
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../global-components/AppWrapper";
import WeeklyView from "../macro-tracker/Weekly";
import { Container } from "../styles/mixins";
// =========================

const Wrapper = styled(Container)``;

type props = {};

export default function Index({}: props) {
  const { query } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!query) {
      router.push("/");
    }
  }, [query]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <WeeklyView />
      </Wrapper>
    </>
  );
}
