// Components==============
import Head from "next/head";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  img {
    width: 800px;
  }
`;

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
