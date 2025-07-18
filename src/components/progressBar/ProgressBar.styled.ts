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
  height: 20px;
  width: 100%;
  background: linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(17, 182, 122, 1) 100%);
  position: absolute;
  top: 0;
  left: 0;
`;

export const WhiteFill = styled.div<{ progress: number }>`
  height: 20px;
  width: 100%;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: inset(0 0 0 ${({ progress }) => progress}%);
  transition: clip-path 0.3s ease-in-out;
`;
