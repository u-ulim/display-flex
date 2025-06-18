import { tv } from "tailwind-variants";

export const headerVariants = tv({
  slots: {
    header:
      "bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 w-full transition-colors duration-300",
    inner: "max-w-[1080px] mx-auto px-4 py-4",
    flexWrapper: "flex items-center justify-center",
  },
});
