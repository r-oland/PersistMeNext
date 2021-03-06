// Components==============
import styled from "styled-components";
// =========================

const Grid = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  align-content: center;
  margin-top: ${({ theme: { spacing } }) => spacing[10]};
  padding-bottom: ${({ theme: { spacing } }) => spacing[12]};

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    height: 100vh;
    margin-top: 0;
    padding-bottom: 0;
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
    max-height: 90vh;
    overflow: auto;
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
