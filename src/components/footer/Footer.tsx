import {
  StyledFooterContainer,
  StyledFooterItemsContainer,
  StyledFooterItem,
} from "./Footer.styled";
import * as routes from "../../routes/manifest";
export default function Footer() {
  return (
    <StyledFooterContainer>
      <StyledFooterItemsContainer>
        <StyledFooterItem href={routes.AboutUs}>About Us</StyledFooterItem>
        <StyledFooterItem href="#">Careers</StyledFooterItem>
        <StyledFooterItem href="#">Contact</StyledFooterItem>
        <StyledFooterItem href="#">Privacy Policy</StyledFooterItem>
      </StyledFooterItemsContainer>
    </StyledFooterContainer>
  );
}
