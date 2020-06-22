// Components==============
import styled from "styled-components";
// =========================

const Grid = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  align-content: center;
  margin-top: ${({ theme: { spacing } }) => spacing[10]};

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    height: 100vh;
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    padding: ${({ theme: { spacing } }) => `${spacing[7]} ${spacing[6]}`};
    background: ${({ theme: { color } }) => color.white};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    box-shadow: ${({ theme: { shadow } }) => shadow.xs};
  }

  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  }
`;

type props = {
  children: React.ReactNode;
};

export default function Modal({ children }: props) {
  return (
    <Grid>
      <Wrapper>{children}</Wrapper>
    </Grid>
  );
}
