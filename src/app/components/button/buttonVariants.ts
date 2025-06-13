import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "text-red-500",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
    },
  },
});
