import type { ComponentProps } from "react";
import { classNames } from "src/utils";
import type { Variant } from "src/components/button";
import Link from "next/link";

type ButtonProps = ComponentProps<"button"> & {
  isRounded?: boolean;
  hasBorder?: boolean;
  variant?: Variant;
  href?: string;
  hasPadding?: boolean;
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
  hasPadding = true,
  href,
  ...props
}: ButtonProps) => {
  const css = classNames(
    "flex justify-center gap-1 text-center text-sm font-medium text-gray-100 items-center",
    className,
    hasPadding && "px-4 py-2",
    hasBorder && "border",
    isRounded && "rounded-md",
    props.disabled === undefined || !props.disabled
      ? background(variant)
      : "bg-sky-300"
  );

  return href ? (
    <Link href={href}>
      <button {...props} className={css} />
    </Link>
  ) : (
    <button {...props} className={css} />
  );
};
