import { tv } from "tailwind-variants";

export const selectVariants = tv({
  slots: {
    trigger:
      "flex items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
    content:
      "flex flex-col absolute z-50 mt-1 overflow-auto rounded-md border bg-white dark:bg-gray-800 shadow-lg w-fit",
    item: "cursor-pointer select-none text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
  },
  variants: {
    variant: {
      default: {
        trigger:
          "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600",
        content: "border-gray-200 dark:border-gray-600",
        item: "text-gray-900 dark:text-white",
      },
      filter: {
        trigger:
          "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600",
        content: "border-gray-200 dark:border-gray-600",
        item: "text-gray-900 dark:text-white",
      },
      sort: {
        trigger:
          "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600",
        content: "border-gray-200 dark:border-gray-600",
        item: "text-gray-900 dark:text-white",
      },
    },
    size: {
      default: {
        trigger: "h-10 px-3 py-2",
        item: "px-8 py-2",
      },
      sm: {
        trigger: "h-9 px-2 py-1 text-sm",
        item: "px-6 py-2 text-sm",
      },
      lg: {
        trigger: "h-11 px-4 py-3",
        item: "px-10 py-3",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
