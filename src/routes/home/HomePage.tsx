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
import { HorizontalFlexBox } from "../../components/horizontalFlexBox/HorizontalFlexBox.styled";
import { VerticalFlexBox } from "../../components/verticalFlexBox/VerticalFlexBox.styled";
import PartitionedProgressBar from "../../components/partitionedProgressBar/PartitionedProgressBar";

export default function HomePage() {
  return (
    <Main>
      <Hero />
      <Products />
      <CustomerReviews />
    </Main>
  );
}
