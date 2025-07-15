import {
  StyledCurrencySymbol,
  StyledFlexBox,
  StyledLabel,
  StyledTextBox,
  StyledTextBoxWrapper,
} from "./GoalField.styled";

export default function GoalField() {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
  };

  return (
    <StyledFlexBox>
      <StyledLabel>Field</StyledLabel>
      <StyledTextBoxWrapper>
        <StyledCurrencySymbol>£</StyledCurrencySymbol>
        <StyledTextBox onInput={handleInput} />
      </StyledTextBoxWrapper>
    </StyledFlexBox>
  );
}
