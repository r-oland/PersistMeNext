// Components==============
import Head from "next/head";
import styled from "styled-components";
import Modal from "../micro-components/Modal";
// =========================

const Wrapper = styled.div``;

type props = {};

export default function settings({}: props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <Modal>
          <p>test</p>
        </Modal>
      </Wrapper>
    </>
  );
}
