"use client";
import { IBadgeProps } from "./Badge.type";
import { badgeVariants } from "./BadgeVariants";

export const Badge = ({
  children,
  className,
  variant,
  size,
  onClick,
}: IBadgeProps) => {
  const badgeClasses = badgeVariants({ variant, size });
  return (
    <div className={`${badgeClasses} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
