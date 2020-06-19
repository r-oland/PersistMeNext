// Components==============
import styled from "styled-components";
// =========================

const Svg = styled.svg``;

type props = {};

export default function ActivityPicker({}: props) {
  return (
    <Svg width="50" height="50" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="23.5"
        fill="#FDC61A"
        stroke="#1A1A1A"
        strokeWidth="3"
      />
    </Svg>
  );
}
