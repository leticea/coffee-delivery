import { InputHTMLAttributes, forwardRef } from "react";
import { InputWrapper } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper>
        <div></div>
      </InputWrapper>
    );
  }
);
