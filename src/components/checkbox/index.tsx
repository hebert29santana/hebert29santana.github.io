import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";
import style from "./checkbox.module.scss";

type CheckboxProps = { id: string; label: string } & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, ...rest }, ref) => {
    return (
      <label className={style.container}>
        <input
          className={style.checkbox}
          type="checkbox"
          id={id}
          data-testid={id}
          {...rest}
          ref={ref}
        ></input>
        <span className={style.checkmark}></span>
        <label htmlFor={id}>{label}</label>
      </label>
    );
  }
);
