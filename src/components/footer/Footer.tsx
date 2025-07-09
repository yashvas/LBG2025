import {
  StyledFooterContainer,
  StyledFooterItemsContainer,
  StyledFooterItem,
} from "./Footer.styled";

export default function Footer() {
  return (
    <StyledFooterContainer>
      <StyledFooterItemsContainer>
        <StyledFooterItem href="#">About Us</StyledFooterItem>
        <StyledFooterItem href="#">Careers</StyledFooterItem>
        <StyledFooterItem href="#">Contact</StyledFooterItem>
        <StyledFooterItem href="#">Privacy Policy</StyledFooterItem>
      </StyledFooterItemsContainer>
    </StyledFooterContainer>
  );
}
