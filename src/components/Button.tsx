import React from "react";
import styled from "styled-components";

interface ButtonStyle {
  variant: string;
  shape: string;
}

const Button = styled.button<ButtonStyle>`
  background-color: ${({ variant }) =>
    variant === "primary" ? "#52bbab" : "#aad9e4"};
  color: ${({ variant }) => (variant === "primary" ? "#fff" : "#1d1e1f")};
  padding: 8px 12px;
  border-color: transparent;
  border-radius: ${({ shape }) => (shape === "square" ? "2px" : "8px")};
  cursor: pointer;
`;

interface ButtonProps {
  label: string;
  variant: string;
  shape: string;
  onClick?: () => void;
}

export default function StyledButton({
  label,
  variant,
  shape,
  ...props
}: ButtonProps) {
  return (
    <Button variant={variant} shape={shape} {...props}>
      {label}
    </Button>
  );
}
