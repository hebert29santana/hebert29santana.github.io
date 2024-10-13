import { Select, SelectItem } from "@nextui-org/select";

type Props = {
  value: string;
  onChange: (value: string) => void;
  options: Array<{ label: string; value: string | number }>;
} & Omit<React.ComponentProps<typeof Select>, "onChange" | "children">;

export const SuperSelect = ({ value, onChange, options, ...rest }: Props) => {
  return (
    <Select
      variant="bordered"
      size="md"
      classNames={{
        label: ["!text-[#838383] text-left block border-box mt-1 sm:mt-0"],
        value: ["!text-[#999999]"],
        base: ["text-[#838383]"],
        mainWrapper: ["bg-transparent", "placeholder:text-[#838383]"],
      }}
      selectedKeys={[value]}
      className="w-full"
      labelPlacement="outside"
      onChange={(event) => {
        onChange(event.target.value);
      }}
      {...rest}
    >
      {options.map((option) => (
        <SelectItem value={option.value} key={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
};
