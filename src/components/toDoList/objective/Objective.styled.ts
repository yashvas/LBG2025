import styled from "styled-components";

export const CircularSelectBox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  border: 2px solid #11b67a;
  border-radius: 50%;
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:checked {
    background-color: #11b67a;
    border-color: #11b67a;
  }

  &:hover {
    box-shadow: 0 0 5px rgba(17, 182, 122, 0.5);
  }

  &:focus {
    box-shadow: 0 0 5px rgba(17, 182, 122, 0.8);
  }
`;

export const ToDoText = styled.span`
  font-size: 16px;
  color: white;
  padding: 5px 10px;
  flex: 1;
  word-break: break-word;
  transition: color 0.3s ease;

  &:hover {
    color: #11b67a;
  }

  &.completed {
    text-decoration: line-through;
    color: #6c757d;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #343a40;
  padding: 5px;
  border-radius: 10px;
  gap: 3px;
  width: 325px;
`;
