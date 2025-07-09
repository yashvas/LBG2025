import heroImage from "../../../assets/mobile-banking.jpg";
import {
  HeroContainer,
  StyledHeroImage,
  StyledHeroButton,
} from "../HomePage.styled";
import * as routes from "../../manifest";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <HeroContainer>
        <StyledHeroImage src={heroImage} />
        <StyledHeroButton
          onClick={() => {
            navigate(routes.MobileBanking);
          }}
        >
          Explore mobile banking
        </StyledHeroButton>
      </HeroContainer>
    </>
  );
}
