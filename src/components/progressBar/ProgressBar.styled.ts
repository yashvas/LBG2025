import styled from "styled-components";

export const StyledProgressDiv = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    green 0%,
    green 25%,
    green 50%,
    green 75%,
    green 100%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const WhiteFill = styled.div<{ progress: number }>`
  height: 100%;
  width: 100%;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: inset(0 0 0 ${({ progress }) => progress}%);
  transition: clip-path 0.3s ease-in-out;
`;
