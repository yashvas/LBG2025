import styled from "styled-components";

export const StyledTextBox = styled.textarea`
  width: 100%;
  height: 16px;
  padding: 12px 16px 12px 24px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  resize: vertical;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const StyledLabel = styled.h2`
  color: black;
`;

export const StyledCurrencySymbol = styled.span`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #333;
  pointer-events: none;
  font-weight: bold;
`;

export const StyledTextBoxWrapper = styled.div`
  position: relative;
  width: 100%;
`;
