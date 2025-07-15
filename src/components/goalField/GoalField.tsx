import {
  StyledCurrencySymbol,
  StyledFlexBox,
  StyledLabel,
  StyledTextBox,
  StyledTextBoxWrapper,
} from "./GoalField.styled";

interface GoalFieldProps {
  label: string;
}

export default function GoalField({ label }: GoalFieldProps) {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
  };

  return (
    <StyledFlexBox>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextBoxWrapper>
        <StyledCurrencySymbol>£</StyledCurrencySymbol>
        <StyledTextBox onInput={handleInput} />
      </StyledTextBoxWrapper>
    </StyledFlexBox>
  );
}
