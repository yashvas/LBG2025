import styled from "styled-components";

export const AppHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const ToDoListContainer = styled.div`
  width: 400px;
  height: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;
