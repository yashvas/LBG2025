import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error this import works in browser but VS code can't find it
import "swiper/css";
import Slide from "./Slide";
import buyHome from "../../../assets/buyHome.jpg";
import electricCar from "../../../assets/electricCar.jpg";
import homeImprovement from "../../../assets/homeImprovement.jpg";
import investment from "../../../assets/investment.jpg";
import solarPanel from "../../../assets/solarPanel.jpg";
import { StyledSwiper } from "../Sustainability.styled";

export default function Carousel() {
  return (
    <StyledSwiper>
      <Swiper slidesPerView={1}>
        <SwiperSlide>
          <Slide
            imageSrc={homeImprovement}
            heading={"Get a Green Home Improvement Loan"}
            supportiveText={
              "Use bank-provided loans to insulate your home, upgrade windows, or install efficient heating — cutting down energy use and bills."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imageSrc={solarPanel}
            heading={"Finance Solar Panel Installations"}
            supportiveText={
              "Apply for solar panel financing to generate clean energy at home — many banks offer special rates for renewable upgrades."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imageSrc={electricCar}
            heading={"Switch to an Electric Vehicle with Eco Car Loans"}
            supportiveText={
              "Some banks offer lower-interest loans for EVs or hybrid cars to reduce emissions from daily travel."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imageSrc={buyHome}
            heading={"Apply for an Energy-Efficient Mortgage"}
            supportiveText={
              "Buy or renovate homes with high energy ratings — banks may offer better terms for sustainable properties."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imageSrc={investment}
            heading={"Invest in Sustainable Funds"}
            supportiveText={
              "Grow your savings in eco-conscious investment options, supporting companies that prioritize sustainability and clean energy."
            }
          />
        </SwiperSlide>
      </Swiper>
    </StyledSwiper>
  );
}
