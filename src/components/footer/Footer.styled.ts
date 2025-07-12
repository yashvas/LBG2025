import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #11b67a;
  padding: 24px 60px;
  width: 100%;
  height: 2vh;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledFooterItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
  }
`;

export const StyledFooterItem = styled.a`
  font-family: "Playfair Display", serif;
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
