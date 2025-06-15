import { ICardContentProps } from "./cardContent.type";
import { cardContentVariants } from "./cardContentVariants";

export const CardContent = ({
  children,
  className,
  onClick,
  variant,
}: ICardContentProps) => {
  return (
    <div
      className={cardContentVariants({ variant, className })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
