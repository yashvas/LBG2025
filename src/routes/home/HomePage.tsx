import Hero from "./components/Hero";
import { Main } from "../../components/styled/Main.styled";
import Products from "./components/Products";
import CustomerReviews from "./components/CustomerReviews";
import StyledButtonComponent from "../../components/styledButton/StyledButton";
import ProgressBar from "../../components/progressBar/ProgressBar";
import GoalField from "../../components/goalField/GoalField";
import BigDropDown from "../../components/bigDropDown/BigDropDown";

export default function HomePage() {
  return (
    <Main>
      <Hero />
      <Products />
      <CustomerReviews />
      <StyledButtonComponent to={"hello"}>Hello</StyledButtonComponent>
      <ProgressBar progress={10} />
      <GoalField />
      <BigDropDown
        title="Click to Expand"
        content={<div>Here is the expanded content!</div>}
        expandedHeight={300}
      >
        <h1>Hello</h1>
      </BigDropDown>
    </Main>
  );
}
