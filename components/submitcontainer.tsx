import { Button } from "@nextui-org/button";
import { ComponentProps } from "react";
type Props = {
  onClick?: () => void;
  text?: string;
} & ComponentProps<typeof Button>;

export const SubmitContainer = ({ onClick, text, ...rest }: Props) => {
  return (
    <div className="fixed sm:relative z-40 bottom-0 left-0 w-full max-w-lg flex flex-col justify-center gap-3 py-6 px-4 sm:px-0">
      <Button
        onClick={onClick}
        className="w-full max-w-lg h-[44px] rounded bg-[#fff] disabled:bg-[#99999999] disabled:cursor-not-allowed text-[#000]"
        {...rest}
      >
        {text}
      </Button>
    </div>
  );
};
