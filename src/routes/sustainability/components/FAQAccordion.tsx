import { useState } from "react";
import { FAQContainer, Question, Answer } from "../Sustainability.styled";

const faqs = [
  {
    question: "What can I use a Green Home Improvement Loan for?",
    answer:
      "You can use this loan to insulate your home, upgrade windows, or install efficient heating systems that reduce energy use and lower your bills.",
  },
  {
    question: "How do solar panel financing options work?",
    answer:
      "Solar panel financing helps you cover the upfront cost of installing solar panels at home, often with special rates to encourage renewable energy adoption.",
  },
  {
    question: "Are there special loans for electric vehicles?",
    answer:
      "Yes, many banks offer eco car loans with lower interest rates to help you buy electric or hybrid vehicles, promoting greener transportation options.",
  },
  {
    question: "What is an energy-efficient mortgage?",
    answer:
      "An energy-efficient mortgage allows you to buy or renovate a home with high energy ratings, often qualifying for better loan terms due to the reduced environmental impact.",
  },
  {
    question: "How can I invest sustainably?",
    answer:
      "Sustainable investment funds focus on companies committed to environmental responsibility and clean energy, helping you grow your savings while supporting green initiatives.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      {faqs.map(({ question, answer }, i) => (
        <div key={i}>
          <Question
            isOpen={openIndex === i}
            onClick={() => toggleIndex(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
          >
            {question}
          </Question>
          <Answer
            isOpen={openIndex === i}
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
          >
            {answer}
          </Answer>
        </div>
      ))}
    </FAQContainer>
  );
}
