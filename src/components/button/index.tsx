import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import style from "./button.module.scss";

export type ButtonProps = { fullWidth?: boolean } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ fullWidth, ...rest }, ref) => {
    const className = [style.button, rest.className].filter(Boolean).join(" ");
    return <button data-fullWidth={fullWidth} {...{ className }} {...rest} ref={ref} />;
  }
);
