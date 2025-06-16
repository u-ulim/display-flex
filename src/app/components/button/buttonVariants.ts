import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "flex cursor-pointer inline-flex items-center justify-center focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default:
        "bg-color-white border border-gray-300 text-black hover:bg-gray-100 rounded-md hover:bg-gray-100/60 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700",
      play: "bg-orange-600 hover:bg-orange-700 px-8 rounded-md text-white dark:bg-orange-500 dark:hover:bg-orange-600",
      arrow:
        "bg-black/30 hover:bg-black/50 rounded-full p-2 text-white transition-colors dark:bg-white/20 dark:hover:bg-white/40",
      nonOutline:
        "bg-color-white text-white hover:bg-gray-100 rounded-md hover:bg-gray-100/60 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
      allView:
        "text-orange-600 border border-transparent dark:text-orange-400 hover:border-gray-300 dark:hover:border-gray-600 rounded-md",
      outline:
        "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md hover:bg-gray-100/60 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white",
      footer:
        "bg-white text-gray-500 hover:text-gray-900 dark:bg-gray-900 dark:text-gray-400 dark:hover:text-white",
      upgrade:
        "bg-blue-300 text-white hover:bg-blue-400 hover:text-white rounded-md dark:bg-blue-700 dark:hover:bg-blue-800",
      select:
        "hover:bg-orange-50 border border-gray-300 hover:border-orange-300 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 rounded-md",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8",
      footer: "w-14 py-1",
      pagination: "h-9 w-9",
    },
  },
});
