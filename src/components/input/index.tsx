import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";
import style from "./input.module.scss";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, ref) => {
    const className = [style.input, rest.className].filter(Boolean).join(" ");
    return <input {...{ className }} {...rest} ref={ref} />;
  }
);
