// Components==============
import Head from "next/head";
import styled from "styled-components";
import DailyView from "../macro-tracker/Daily";
import { Container } from "../styles/mixins";
// =========================

const Wrapper = styled(Container)``;

type props = {};

export default function Index({}: props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <DailyView />
      </Wrapper>
    </>
  );
}
