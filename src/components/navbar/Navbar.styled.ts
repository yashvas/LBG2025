import styled from "styled-components";

export const StyledNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #11b67a;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 60px;
  padding-right: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #11b67a;
  align-items: center;
`;

export const StyledNavItemsContainer = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: row;
  gap: 36px;
`;

export const StyledNavItem = styled.a`
  font-family: "Playfair Display", serif;
  cursor: pointer;
  font-size: 24px;
  line-height: 1.5;
  color: #000000;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLogo = styled.img`
  width: 90px;
  height: auto;
`;
