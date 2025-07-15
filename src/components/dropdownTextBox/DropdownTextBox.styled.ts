import styled, { css } from "styled-components";

export const StyledTextBox = styled.div<{
  isActive: boolean;
  width: number;
  expandedHeight: number;
}>`
  background-color: white;
  border-radius: 25px;
  padding: 8px;
  overflow: hidden;
  max-height: ${({ isActive, expandedHeight }) =>
    isActive ? `${expandedHeight}px` : "40px"};
  transition: max-height 0.3s ease-in-out;
  width: ${({ width }) => `${width}px`}; /* Fixed interpolation */
`;
export const StyledHeader = styled.h2`
  color: black;
  margin: 0;
  padding: 0;
`;

export const StyledText = styled.p`
  color: black;
`;

export const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const StyledRotateContainer = styled.div<{ isActive: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
  display: flex;
  align-items: center;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `}
`;
