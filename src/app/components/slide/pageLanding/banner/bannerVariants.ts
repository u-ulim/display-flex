import { tv } from "tailwind-variants";

export const bannerVariants = tv({
  slots: {
    section:
      "relative h-96  md:h-120 bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden",
    overlay:
      "absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-700/40 z-10",
  },
});
