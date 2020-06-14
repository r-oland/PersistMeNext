import styled from "styled-components";

// Container

export const Container = styled.div`
  padding: 0 5%;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 0 6.5%;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 12.5%;
  }

  @media screen and (min-width: 1600px) {
    padding: 0 15%;
    max-width: 130rem;
  }
`;
