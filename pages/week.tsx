// Components==============
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { QueryContext } from "../global-components/AppWrapper";
// =========================

const Wrapper = styled.div``;

type props = {};

export default function week({}: props) {
  const { query } = useContext(QueryContext);
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
      <Wrapper></Wrapper>
    </>
  );
}
