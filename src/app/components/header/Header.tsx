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
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            {theme === "dark" ? (
              <img src="/Logo-black.png" alt="Display Flex" className="h-12" />
            ) : (
              <img src="/Logo-white.png" alt="Display Flex" className="h-12" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
