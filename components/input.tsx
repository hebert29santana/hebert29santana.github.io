import { Input } from "@nextui-org/input";
import { ComponentPropsWithRef } from "react";

export type CustomInputProps = {} & Partial<
  ComponentPropsWithRef<typeof Input>
>;

export const CustomInput = ({ ...rest }: CustomInputProps) => (
  <Input
    labelPlacement="outside"
    placeholder=" "
    size="sm"
    color="primary"
    classNames={{
      base: ["text-[#838383]"],
      label: ["text-[#838383]"],
      input: ["bg-transparent", "placeholder:text-[#838383]"],
      innerWrapper: "bg-transparent",
      inputWrapper: [
        "bg-[#202020]",
        "text-[#838383]",
        "hover:bg-[#252525]",
        "group-data-[focus=true]:bg-[#252525]",
        "!cursor-text",
      ],
    }}
    {...rest}
  />
);
