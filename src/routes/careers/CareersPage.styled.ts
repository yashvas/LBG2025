import styled from "styled-components";

export const StyledJobContainer = styled.div`
  border-radius: 25px;
  background-color: #f1f1f1;
  padding: 16px;
  width: 230px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const StyledJobsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 16px;
`;

export const StyledJobTitle = styled.h2`
  color: black;
  font-weight: bold;
`;

export const StyledJobDescription = styled.p`
  color: black;
`;

export const StyledCareerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 25px;
  object-fit: cover;
`;

export const StyledHeaderContainer = styled.div`
  width: 100%;
  padding-left: 32px;
`;

export const StyledSectionHeader = styled.h1`
  color: white;
  font-weight: bold;
  text-align: left;
  font-size: 32px;
`;
