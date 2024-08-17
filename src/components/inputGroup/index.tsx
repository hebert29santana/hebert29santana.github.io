import { forwardRef } from "react";
import { Input, InputProps } from "../input";
import style from "./inputGroup.module.scss";

type InputGroupProps = {
  id: string;
  label: string;
  hint?: string;
} & InputProps;
export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ id, label, hint, ...rest }, ref) => {
    return (
      <div className={style.container}>
        <label htmlFor={id}>{label}</label>
        <Input id={id} data-testid={id} {...rest} ref={ref}></Input>
        {hint && <small>{hint}</small>}
      </div>
    );
  }
);
