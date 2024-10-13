import { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = {
  text: React.ReactNode;
  className?: string;
} & Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  "className"
>;
export const TextLabel = ({ text, className, ...rest }: Props) => {
  const defaultClassName =
    "origin-top-left rtl:origin-top-right subpixel-antialiased block will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 group-data-[filled-within=true]:start-0 start-2 text-tiny group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)] pe-2 max-w-full text-ellipsis overflow-hidden text-[#838383]";
  const customClassname = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return (
    <small data-slot="label" className={customClassname}>
      {text}
    </small>
  );
};
