import Hero from "./components/Hero";
import { Main } from "../../components/styled/Main.styled";
import Products from "./components/Products";
import CustomerReviews from "./components/CustomerReviews";
import BigDropDown from "../../components/bigDropDown/BigDropDown";
import DropdownTextBox from "../../components/dropdownTextBox/DropdownTextBox";
import GoalField from "../../components/goalField/GoalField";
import ProgressBar from "../../components/progressBar/ProgressBar";
import StyledButtonComponent from "../../components/styledButton/StyledButton";
import * as routes from "../manifest";
import TextBox from "../../components/textBox/TextBox";

export default function HomePage() {
  return (
    <Main>
      <Hero />
      <Products />
      <CustomerReviews />
      <BigDropDown title={"Big drop down"} expandedHeight={2000}>
        <h1>This is how to use the big drop down</h1>
      </BigDropDown>

      <DropdownTextBox
        width={600}
        heading={"Regular drop down"}
        text={"click to find out more"}
      />

      <GoalField label="Label" />

      <ProgressBar progress={40} />

      <StyledButtonComponent to={routes.Careers}>
        Button Text here!!
      </StyledButtonComponent>

      <TextBox
        heading="This is a heading"
        text="Text box content here, skibidi or whatever"
      />
    </Main>
  );
}
