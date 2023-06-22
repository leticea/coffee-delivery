import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyleContainer, InputWrapper } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper>
        <InputStyleContainer hasError={!!error}>
          <div>

          </div>
        </InputStyleContainer>
      </InputWrapper>
    );
  }
);
