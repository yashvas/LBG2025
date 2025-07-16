import styled from "styled-components";

export const TextBoxEntry = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background-color: #242424;
  border: 0px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #11b67a;
    box-shadow: 0 0 5px rgba(17, 182, 122, 0.5);
  }
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #11b67a;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #11b67a;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #0e9262ff;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(17, 182, 122, 0.5);
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #343a40;
  padding: 8px;
  border-radius: 10px;
  gap: 8px;
  width: 335px;
`;
