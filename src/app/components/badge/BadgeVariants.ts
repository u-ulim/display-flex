import { tv } from "tailwind-variants";

export const badgeVariants = tv({
  base: "flex inline-flex items-center justify-center",
  variants: {
    variant: {
      default:
        "bg-white text-black border border-gray-300 rounded-full dark:bg-gray-800 dark:text-white dark:border-gray-700",
      primary: "bg-orange-600 text-white  rounded-full",
      cardRanking: "bg-orange-600 text-white rounded-sm",
      cardRating: "bg-gray-700 text-white rounded-sm",
      cardNew: "bg-green-500 text-white rounded-full",
    },
    size: {
      default: "py-1 px-3",
      sm: "py-1.5 px-1.5",
      md: "px-2 py-1.5",
      lg: "h-11 px-8",
    },
  },
});
