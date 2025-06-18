import { tv } from "tailwind-variants";

export const cardVariants = tv({
  base: "group cursor-pointer hover:shadow-lg dark:hover:shadow-gray-700 transition-shadow h-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg",
  variants: {
    variant: {
      default: "",
    },
  },
});
