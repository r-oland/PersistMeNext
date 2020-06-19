import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  label {
    display: block;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
    ${({ theme: { fontSize } }) => fontSize.m}
  }

  input {
    display: block;
    border: none;
    padding-bottom: ${({ theme: { spacing } }) => spacing[0]};
    margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
    border-bottom: solid 1px ${({ theme: { color } }) => color.gray};
    width: 100%;
    background: none;
    ${({ theme: { fontSize } }) => fontSize.m}
  }

  button {
    background: ${({ theme: { color } }) => color.primary};
    padding: ${({ theme: { spacing } }) => `${spacing[0]} ${spacing[3]}`};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    width: ${({ theme: { spacing } }) => spacing[12]};
    ${({ theme: { fontSize } }) => fontSize.l}
  }
`;
