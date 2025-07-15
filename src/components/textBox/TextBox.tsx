import { StyledHeader, StyledText, StyledTextBox } from "./TextBox.styled";

interface TextBoxProps {
  heading: string;
  text: string;
}

export default function TextBox({ heading, text }: TextBoxProps) {
  return (
    <StyledTextBox>
      <StyledHeader>{heading}</StyledHeader>
      <StyledText>{text}</StyledText>
    </StyledTextBox>
  );
}
