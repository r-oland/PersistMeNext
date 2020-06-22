// Components==============
import Head from "next/head";
import styled from "styled-components";
import Activities from "../macro-settings/Activities";
import User from "../macro-settings/User";
import Modal from "../micro-components/Modal";
import { Container } from "../styles/mixins";
// =========================

const Wrapper = styled(Container)``;

const SubTitle = styled.p`
  ${({ theme: { fontSize } }) => fontSize.l}
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  color: ${({ theme: { color } }) => color.gray};
  border-bottom: 1px solid ${({ theme: { color } }) => color.gray};
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
  margin-top: ${({ theme: { spacing } }) => spacing[4]};
  width: 75%;
`;

type props = {};

export default function settings({}: props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <Modal>
          <h2>Settings</h2>
          <SubTitle>User</SubTitle>
          <User />
          <SubTitle>Activities</SubTitle>
          <Activities />
        </Modal>
      </Wrapper>
    </>
  );
}
