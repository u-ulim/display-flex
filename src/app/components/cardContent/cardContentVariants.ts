import { tv } from "tailwind-variants";

export const cardContentVariants = tv({
  base: "p-0 h-full",
  variants: {
    variant: {
      default: "flex flex-col",
    },
  },
});
