import {
  StyledCustomerReviewContainer,
  StyledText,
  StyledHeader,
  StyledCustomerReview,
} from "../HomePage.styled";

export default function CustomerReviews() {
  return (
    <StyledCustomerReviewContainer>
      <StyledCustomerReview>
        <StyledHeader>Joanne Frost</StyledHeader>
        <StyledText>
          "Applying for my mortgage through Lloyds was surprisingly easy. The
          team explained everything clearly, and I felt supported throughout the
          whole process."
        </StyledText>
      </StyledCustomerReview>
      <StyledCustomerReview>
        <StyledHeader>Anurada S</StyledHeader>
        <StyledText>
          "I started a savings account last year and it's been great watching my
          balance grow. The mobile app makes it so easy to keep track."
        </StyledText>
      </StyledCustomerReview>
      <StyledCustomerReview>
        <StyledHeader>Sambasivam V</StyledHeader>
        <StyledText>
          "Lloyds helped me finance my first car with a plan I could actually
          afford. I applied online and got a decision the same day!"
        </StyledText>
      </StyledCustomerReview>
      <StyledCustomerReview>
        <StyledHeader>Joshita S</StyledHeader>
        <StyledText>
          "I love how simple it is to manage everything in the Lloyds app. I can
          check savings, make payments, even track my mortgage — all in one
          place."
        </StyledText>
      </StyledCustomerReview>
    </StyledCustomerReviewContainer>
  );
}
