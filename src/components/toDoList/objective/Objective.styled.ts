import styled from "styled-components";

export const CircularSelectBox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  border: 2px solid #007bff;
  border-radius: 50%;
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:checked {
    background-color: #007bff;
    border-color: #0056b3;
  }

  &:hover {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &:focus {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.8);
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
    color: #007bff;
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
  padding: 8px;
  border-radius: 10px;
  gap: 8px;
  width: 300px;
`;
