import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  width: 50vw;
`;

export const StyledHeroImage = styled.img`
  width: 100%;
  max-height: 600px;
  border-radius: 25px;
  display: block;
`;

export const StyledHeroButton = styled.button`
  position: absolute;
  top: 75%;
  left: 5%;
  color: white;
  max-width: 10vw;
  background-color: #11b67a;

  &:hover {
    background-color: #0e9e6a;
  }

  @media (max-width: 768px) {
    top: 80%;
    left: 10%;
    max-width: 20vw;
  }

  @media (max-width: 480px) {
    top: 85%;
    left: 5%;
    max-width: 40vw;
  }
`;

export const StyledProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 36px;
`;

export const StyledProduct = styled.img`
  width: 8vw;
  height: 12vw;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

export const StyledProductContentContainer = styled.div`
  background-color: white;
  border-radius: 25px;
  max-width: 80%;
  margin-top: 12px;
  padding: 12px;
`;

export const StyledHeader = styled.h1`
  font-size: 24px;
  color: black;
  font-weight: bold;
`;

export const StyledText = styled.p`
  color: black;
  white-space: normal;
  overflow-wrap: break-word;
`;

export const StyledCustomerReview = styled.div`
  background-color: white;
  border-radius: 25px;
  flex: 1 1 calc(50% - 12px); /* two per row, accounting for 24px gap */
  margin-top: 12px;
  padding: 12px;
  box-sizing: border-box;
`;

export const StyledCustomerReviewContainer = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap; /* allow items to wrap */
  max-width: 80%;
  gap: 24px;
`;
