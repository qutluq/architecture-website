import type { ComponentProps } from "react";
import { classNames } from "src/utils";
import type { Variant } from "src/components/button";

type ButtonProps = ComponentProps<"button"> & {
  isRounded?: boolean;
  hasBorder?: boolean;
  variant?: Variant;
};

const background = (variant: Variant): string => {
  if (variant === "primary") {
    return "bg-sky-500 hover:bg-sky-600 active:bg-sky-700";
  } else if (variant === "text") {
    return "hover:bg-sky-100 active:bg-sky-200";
  }
  return "";
};

export const Button = ({
  className = "",
  hasBorder = true,
  isRounded = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const css = classNames(
    "flex justify-center gap-1 px-4 py-2 text-center text-sm font-medium text-gray-100 items-center",
    className,
    hasBorder && "border",
    isRounded && "rounded-md",
    props.disabled === undefined || !props.disabled
      ? background(variant)
      : "bg-sky-300"
  );

  return <button {...props} className={css} />;
};
