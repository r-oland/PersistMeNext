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

// Button

export const Button = styled.button`
  background: ${({ theme: { color } }) => color.primary};
  border: 2px solid ${({ theme: { color } }) => color.primary};
  padding: ${({ theme: { spacing } }) => `${spacing[0]} ${spacing[3]}`};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  width: ${({ theme: { spacing } }) => spacing[12]};
  ${({ theme: { fontSize } }) => fontSize.l}
`;
