import styled from "styled-components";

export const AppHeader = styled.h1`
  font-size: 14px;
  font-weight: bold;
  color: #11b67a;
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const ToDoListContainer = styled.div`
  width: 400px;
  height: 460px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1a1a1a;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;
