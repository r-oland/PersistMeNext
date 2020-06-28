// Components==============
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../global-components/AppWrapper";
import WeeklyView from "../macro-tracker/Weekly";
import WeekSelector from "../macro-tracker/WeekSelector";
import { Container } from "../styles/mixins";
// =========================

const Wrapper = styled(Container)`
  margin-top: ${({ theme: { spacing } }) => spacing[8]};
`;

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
        <title>Week-view</title>
        <meta name="author" content="Weekly overview of data" />
      </Head>
      <Wrapper>
        <WeekSelector />
        <WeeklyView />
      </Wrapper>
    </>
  );
}
