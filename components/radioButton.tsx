import { Check, X } from "@geist-ui/icons";
import { Button, ButtonGroup } from "@nextui-org/button";
import { useEffect, useState } from "react";

type Props = {
  label: string;
  value?: boolean;
  hint?: string;
  onChange?: (value: boolean) => void;
};

export const RadioButton = ({ value, label, hint, onChange }: Props) => {
  const [select, setSelect] = useState(value);
  useEffect(() => {
    setSelect(value);
  }, [value]);

  return (
    <div className="flex flex-col gap-1">
      <label
        data-slot="label"
        className="origin-top-left rtl:origin-top-right subpixel-antialiased block will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 group-data-[filled-within=true]:start-0 start-2 text-tiny group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)] pe-2 max-w-full text-ellipsis overflow-hidden text-[#838383]"
        id="id"
      >
        {label}
      </label>
      <ButtonGroup className="flex gap-1 content-start justify-start align-start">
        <Button
          type="button"
          onClick={() => {
            onChange?.(false);
            setSelect(false);
          }}
          onPress={() => {
            onChange?.(false);
            setSelect(false);
          }}
          fullWidth
          startContent={<X />}
          variant={select === false ? "solid" : "ghost"}
          {...(select === false && { color: "primary" })}
        >
          Não
        </Button>
        <Button
          type="button"
          onClick={() => {
            onChange?.(true);
            setSelect(true);
          }}
          onPress={() => {
            onChange?.(true);
            setSelect(true);
          }}
          fullWidth
          endContent={<Check />}
          variant={select === true ? "solid" : "ghost"}
          {...(select === true && { color: "primary" })}
        >
          Sim
        </Button>
      </ButtonGroup>
      {hint && (
        <small
          data-slot="label"
          className="origin-top-left rtl:origin-top-right subpixel-antialiased block will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 group-data-[filled-within=true]:start-0 start-2 text-tiny group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)] pe-2 max-w-full text-ellipsis overflow-hidden text-[#838383]"
        >
          {hint}
        </small>
      )}
    </div>
  );
};
