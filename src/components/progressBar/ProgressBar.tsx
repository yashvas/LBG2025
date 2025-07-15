import {
  StyledProgressDiv,
  ProgressFill,
  WhiteFill,
} from "./ProgressBar.styled";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <StyledProgressDiv>
      <ProgressFill />
      <WhiteFill progress={progress} />
    </StyledProgressDiv>
  );
}
