import { useState } from "react";
import {
  AddButton,
  StyledFlexContainer,
  TextBoxEntry,
} from "./ObjectiveEntry.styled";

interface ObjectiveEntryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setObjectives: any;
}

const ObjectiveEntry = ({ setObjectives }: ObjectiveEntryProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddObjective = () => {
    if (inputValue.trim() !== "") {
      setObjectives((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  return (
    <StyledFlexContainer>
      <TextBoxEntry
        placeholder="Enter your objective..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <AddButton onClick={handleAddObjective}>Add</AddButton>
    </StyledFlexContainer>
  );
};

export default ObjectiveEntry;
