import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "cursor-pointer inline-flex items-center justify-center transition-colors  focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default:
        "bg-color-main border border-gray-300 text-black  hover:bg-gray-100  rounded-md hover:bg-gray-100/60",
      play: "bg-orange-600 hover:bg-orange-700 px-8 rounded-md text-white",
      arrow:
        "bg-black/30 hover:bg-black/50 rounded-full p-2 text-white transition-colors",
      nonOutline:
        "bg-color-main  text-white  hover:bg-gray-100  rounded-md hover:bg-gray-100/60",
      outline:
        "border border-gray-300 bg-white text-gray-700  hover:bg-gray-100 hover:text-gray-900 rounded-md hover:bg-gray-100/60",
      footer: "bg-white text-gray-500 hover:text-gray-900 ",
      upgrade:
        "bg-blue-300 text-white  hover:bg-blue-400 hover:text-white rounded-md ",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8",
      footer: "w-14  py-1 ",
      pagination: "h-9 w-9",
    },
  },
});
