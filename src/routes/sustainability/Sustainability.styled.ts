import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  overflow: hidden;
  background-color: #3a3a3a;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;

export const SlideImage = styled.img`
  max-height: 600px;
  width: 40vw;
  border-radius: 25px;
  display: block;
`;

export const SlideHeading = styled.p`
  position: absolute;
  font-size: clamp(8px, 4vw, 24px);
  font-weight: bold;
  color: black;
  top: 60%;
  left: 20%;
`;

export const SlideSupportiveText = styled.p`
  position: absolute;
  font-size: clamp(4px, 3vw, 16px);
  color: black;
  top: 75%;
  max-width: 35vw;
  left: 21%;
`;

export const FAQContainer = styled.div`
  margin: 2rem auto;
`;

export const Question = styled.button<{ isOpen: boolean }>`
  width: 100%;
  background: ${({ isOpen }) => (isOpen ? "#11b67a" : "#eee")};
  color: ${({ isOpen }) => (isOpen ? "white" : "#333")};
  border: none;
  padding: 1rem 1.5rem;
  text-align: left;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: background 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #11b67aaa;
  }
`;

export const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: #f7f7f7;
  padding: ${({ isOpen }) => (isOpen ? "1rem 1.5rem" : "0 1.5rem")};
  border-radius: 0 0 8px 8px;
  color: #555;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const FlexRowContainer = styled.div`
  width: 80%;
  margin-top: 32px;
  display: flex;
  gap: 32px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 50px;
  padding-right 50px;
`;

export const StyledSustainabilityImage = styled.img`
  width: 12vw;
  border-radius: 25px;
  height: 25vh;
`;

export const FormWrapper = styled.div`
  background-color: white;
  gap: 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  padding: 16px;
  align-items: center;
`;

export const FormContainer = styled.form`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1rem;
  color: #333;
`;

export const InputField = styled.input`
  padding: 10px 14px;
  font-size: 1rem;
  border: 1.5px solid #ccc;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: #11b67a;
    box-shadow: 0 0 5px #11b67a;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: #11b67a;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #0e9e5e;
  }
`;

export const StyledFormHeader = styled.h2`
  font-weight: bold;
  color: black;
`;
