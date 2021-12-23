// Components==============
import axios from 'axios';
import Head from 'next/head';
import { useQuery, useMutation } from 'react-query';
import styled from 'styled-components';
import Activities from '../macro-settings/Activities';
import DayTypes from '../macro-settings/DayTypes';
import User from '../macro-settings/User';
import Modal from '../micro-components/Modal';
import { Container } from '../styles/mixins';
import { queryClient } from './_app';
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

// Typings folder
type Test = { _id: number; name?: string }[];

// Actions folder
const getMongo = () => axios.get('/api/mongo').then((res) => res.data as Test);

const postMongo = () => axios.post('/api/mongo');

export default function settings({}: props) {
  const { data } = useQuery('all-mongo', getMongo);

  const mutation = useMutation(postMongo, {
    onSuccess: ({ data }) => {
      queryClient.setQueryData('all-mongo', (prev?: Test) =>
        prev ? [...prev, data] : [data]
      );
    },
  });

  return (
    <>
      <Head>
        <title>Settings</title>
        <meta name="description" content="PersistMe settings" />
      </Head>
      <Wrapper>
        <Modal>
          <h2 onClick={() => mutation.mutate()}>Settings</h2>
          {data?.map((d) => (
            <p key={d._id}>
              {d._id} {d?.name}
            </p>
          ))}
          <SubTitle>User</SubTitle>
          <User />
          <SubTitle>Activities</SubTitle>
          <Activities />
          <SubTitle>Day types</SubTitle>
          <DayTypes />
        </Modal>
      </Wrapper>
    </>
  );
}
