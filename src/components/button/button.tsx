import type { ComponentProps } from "react";
import { classNames } from "src/utils";

type ButtonProps = ComponentProps<"button"> & {
  isRounded?: boolean;
  hasBorder?: boolean;
};

export const Button = ({
  className = "",
  hasBorder = true,
  isRounded = false,
  ...props
}: ButtonProps) => {
  const css = classNames(
    "flex justify-center gap-1 px-4 py-2 text-center text-sm font-medium text-gray-100 items-center",
    className,
    hasBorder && "border",
    isRounded && "rounded-md",
    props.disabled === undefined || !props.disabled
      ? "bg-sky-500 hover:bg-sky-600 active:bg-sky-700"
      : "bg-sky-300"
  );

  return <button {...props} className={css} />;
};
