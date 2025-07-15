import { ButtonStyles } from "./StyledButton.styled";
import { Link } from "react-router-dom";

interface StyledButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function StyledButtonComponent({
  to,
  children,
}: StyledButtonProps) {
  return (
    <Link to={to}>
      <ButtonStyles>{children}</ButtonStyles>
    </Link>
  );
}
