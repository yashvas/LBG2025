import {
  SlideSupportiveText,
  SlideHeading,
  SlideImage,
  SlideWrapper,
} from "../Sustainability.styled";

interface SlideProps {
  imageSrc: string;
  heading: string;
  supportiveText: string;
}

export default function Slide({
  imageSrc,
  heading,
  supportiveText,
}: SlideProps) {
  return (
    <SlideWrapper>
      <SlideImage src={imageSrc} />
      <SlideHeading>{heading}</SlideHeading>
      <SlideSupportiveText>{supportiveText}</SlideSupportiveText>
    </SlideWrapper>
  );
}
