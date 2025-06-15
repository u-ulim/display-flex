import { ITitleProps } from "./title.type";
import { titleVariants } from "./titleVariants";

export const Title = ({ children, className }: ITitleProps) => {
  return (
    <div className={titleVariants({ variant: "default", className })}>
      {children}
    </div>
  );
};
