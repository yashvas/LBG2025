import { styled } from "styled-components";

export const HorizontalFlexBox = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: row;
  align-items: top;
  gap: ${({ gap }) => `${gap}px`};
  margin: 30px;
`;
