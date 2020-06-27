// Components==============
import Head from "next/head";
import styled from "styled-components";
import Activities from "../macro-settings/Activities";
import DayTypes from "../macro-settings/DayTypes";
import User from "../macro-settings/User";
import Modal from "../micro-components/Modal";
import { Container } from "../styles/mixins";
// =========================

const Wrapper = styled(Container)``;

const SubTitle = styled.p`
  ${({ theme: { fontSize } }) => fontSize.l}
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { color } }) => color.gray};
  border-bottom: 1.5px solid ${({ theme: { color } }) => color.gray};
  padding-bottom: ${({ theme: { spacing } }) => spacing[0]};
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
  margin-top: ${({ theme: { spacing } }) => spacing[4]};
  opacity: 0.8;
  
    ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
      
  width: 75%;
    }
`;

type props = {};

export default function settings({}: props) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="PersistMe settings" />
      </Head>
      <Wrapper>
        <Modal>
          <h2>Settings</h2>
          <SubTitle>User</SubTitle>
          <User />
          <SubTitle>Activities</SubTitle>
          <Activities />
          <SubTitle>Day-types</SubTitle>
          <DayTypes />
        </Modal>
      </Wrapper>
    </>
  );
}
