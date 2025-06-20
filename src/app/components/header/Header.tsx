"use client";
import { useTheme } from "@/app/contexts/ThemeContext";
import { headerVariants } from "./headerVariants";
import Image from "next/image";
import Link from "next/link";
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
              <Link href="/">
                <Image
                  src="/Logo-black.png"
                  alt="Display Flex"
                  width={132}
                  height={48}
                />
              </Link>
            ) : (
              <Link href="/">
                <Image
                  src="/Logo-white.png"
                  alt="Display Flex"
                  width={132}
                  height={48}
                />
              </Link>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
