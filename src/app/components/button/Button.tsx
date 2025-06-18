"use client";
import { IButtonProps } from "./button.type";
import { buttonVariants } from "./buttonVariants";

export const Button = ({
  type = "button",
  children,
  className,
  variant,
  size,
  disabled,
  onClick,
}: IButtonProps) => {
  const buttonClasses = buttonVariants({ variant, size });
  return (
    <button
      type={type}
      className={`${buttonClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
