import Hero from "./components/Hero";
import { Main } from "../../components/styled/Main.styled";
import Products from "./components/Products";
import CustomerReviews from "./components/CustomerReviews";

export default function HomePage() {
  return (
    <Main>
      <Hero />
      <Products />
      <CustomerReviews />
    </Main>
  );
}
