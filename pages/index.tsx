// Components==============
import Head from "next/head";
import styled from "styled-components";
import DailyView from "../macro-tracker/Daily";
import ActivityPicker from "../micro-components/ActivityPicker";
import { Container } from "../styles/mixins";
// =========================

const Wrapper = styled(Container)`
  .desktop {
    display: none;
    position: absolute;
    bottom: 90px;
    left: 50%;
    transform: translateX(-50%);
    ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
      display: initial;
    }
  }
`;

type props = {};

export default function Index({}: props) {
  return (
    <>
      <Head>
        <title>Day view</title>
        <meta
          name="description"
          content="Time management for the activities that matters"
        />
      </Head>
      <Wrapper>
        <p>service worker test</p>
        <DailyView />
        <ActivityPicker className="desktop" />
      </Wrapper>
    </>
  );
}
