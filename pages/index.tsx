// Components==============
import Head from "next/head";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

type props = {};

export default function Index({}: props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper></Wrapper>
    </>
  );
}
