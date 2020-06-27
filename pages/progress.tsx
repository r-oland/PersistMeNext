// Components==============
import Head from "next/head";
import styled from "styled-components";
import { Container } from "../styles/mixins";
// =========================

const Wrapper = styled(Container)`
  display: grid;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 0 auto;

  h1 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
    width: 100%;
    max-width: 800px;
  }
`;

type props = {};

export default function progress({}: props) {
  return (
    <>
      <Head>
        <title>Progress</title>
        <meta name="description" content="Overview of data" />
      </Head>
      <Wrapper>
        <h1>This page is still a work in progress...</h1>
        <svg
          width="250"
          viewBox="0 0 84 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: `0 auto` }}
        >
          <path
            d="M1.51389 51.0555H82.4861V77.0278H1.51389V51.0555Z"
            fill="#FDC61A"
          />
          <path
            d="M9.15277 58.6945H29.0139V77.0278H9.15277V58.6945Z"
            fill="#FAFAFA"
          />
          <path
            d="M36.6528 58.6945H44.2917V66.3333H36.6528V58.6945Z"
            fill="white"
          />
          <path
            d="M44.2917 58.6945H51.9305V66.3333H44.2917V58.6945Z"
            fill="white"
          />
          <path
            d="M51.9305 58.6945H59.5694V66.3333H51.9305V58.6945Z"
            fill="white"
          />
          <path
            d="M59.5694 58.6945H67.2083V66.3333H59.5694V58.6945Z"
            fill="white"
          />
          <path
            d="M67.2083 58.6945H74.8472V66.3333H67.2083V58.6945Z"
            fill="white"
          />
          <path
            d="M72.5556 51.0555H63.3889L64.9167 26.6111H71.0278L72.5556 51.0555Z"
            fill="#FDC61A"
          />
          <path
            d="M9.14819 40.3611L9.15583 51.0555H24.426L9.14819 40.3611Z"
            fill="#484848"
          />
          <path
            d="M25.1944 40.3611L25.2021 51.0555H40.4722L25.1944 40.3611Z"
            fill="#484848"
          />
          <path
            d="M40.4722 40.3611L40.4799 51.0555H55.75L40.4722 40.3611Z"
            fill="#484848"
          />
          <path
            d="M1.51389 51.0555H82.4861V77.0277H1.51389V51.0555Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.15277 58.6945H29.0139V77.0278H9.15277V58.6945Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.15277 64.8055H29.0139"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.15277 70.9166H29.0139"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.6528 58.6945H44.2917V66.3333H36.6528V58.6945Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.2917 58.6945H51.9306V66.3333H44.2917V58.6945Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M51.9306 58.6945H59.5694V66.3333H51.9306V58.6945Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M59.5694 58.6945H67.2083V66.3333H59.5694V58.6945Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M67.2083 58.6945H74.8472V66.3333H67.2083V58.6945Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M72.5556 51.0555H63.3889L64.9167 26.6111H71.0278L72.5556 51.0555Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.14819 40.3611L9.15583 51.0555H24.426L9.14819 40.3611Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.1944 40.3611L25.2021 51.0555H40.4722L25.1944 40.3611Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.4722 40.3611L40.4799 51.0555H55.75L40.4722 40.3611Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M69.5 22.0277C69.5657 19.0394 69.0035 15.9136 66.3237 13.5241C64.0519 11.4968 61.6762 11.92 57.7392 10.3112C55.4185 9.36094 55.75 3.69441 51.2965 1.37219"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M64.9167 22.0278C63.9312 19.2059 63.6792 17.2153 60.3333 15.9166C57.4947 14.8151 51.1667 15.9166 49.6389 12.8611"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
      </Wrapper>
    </>
  );
}
