import {
  StyledNavContainer,
  StyledNavItem,
  StyledLogo,
  StyledNavItemsContainer,
} from "./Navbar.styled";
import logo from "../../assets/LBGHorse.jpg";
import * as routes from "../../routes/manifest";

export default function Navbar() {
  return (
    <StyledNavContainer>
      <StyledLogo src={logo} />
      <StyledNavItemsContainer>
        <StyledNavItem href={routes.Home}>Home</StyledNavItem>
        <StyledNavItem>Sustainability</StyledNavItem>
        <StyledNavItem>Mobile Banking</StyledNavItem>
        <StyledNavItem>Careers</StyledNavItem>
      </StyledNavItemsContainer>
    </StyledNavContainer>
  );
}
