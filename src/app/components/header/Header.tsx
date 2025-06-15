"use client";
import { useTheme } from "@/app/contexts/ThemeContext";
import { headerVariants } from "./headerVariants";

const { header, inner, flexWrapper } = headerVariants();

export const Header = () => {
  const { theme } = useTheme();
  return (
    <header className={header()}>
      <div className={inner()}>
        <div className={flexWrapper()}>
          <button
            onClick={() => {}}
            className="hover:opacity-80 transition-opacity"
          >
            {theme === "dark" ? (
              <div className="h-12 flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Display Flex
                </span>
              </div>
            ) : (
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DisplayFlexLogo-pEcafJwvxzc6DK0F2eL51x46MTTyxt.png"
                alt="Display Flex"
                className="h-12"
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
