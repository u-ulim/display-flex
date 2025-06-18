import { ICardProps } from "./card.type";
import { cardVariants } from "./cardVariants";

export const Card = ({ children, className, onClick, variant }: ICardProps) => {
  return (
    <div className={cardVariants({ variant, className })} onClick={onClick}>
      {children}
    </div>
  );
};
