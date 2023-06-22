import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>({ error, rightText, className, ...props }, ref) {
  return (
    
  )
}