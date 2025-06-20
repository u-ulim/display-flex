"use client";
import { footerVariants } from "./footerVariants";
import {
  ChartNoAxesGantt,
  CircleUserRound,
  Home,
  Sparkles,
  Telescope,
} from "lucide-react";
import { Button } from "../button";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const { footer, inner, flexWrapper } = footerVariants();

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const footerMenu = [
    {
      key: "home",
      label: "홈",
      icon: <Home className="w-4 h-4 md:w-6 md:h-6 mb-2 md:mb-3" />,
      path: "/",
    },
    {
      key: "explore",
      label: "탐색",
      icon: <Telescope className="w-4 h-4 md:w-6 md:h-6 mb-2 md:mb-3" />,
      path: "/browse",
    },
    {
      key: "benefit",
      label: "혜택",
      icon: <Sparkles className="w-4 h-4 md:w-6 md:h-6 mb-2 md:mb-3" />,
      path: "/benefit",
    },
    {
      key: "review",
      label: "리뷰",
      icon: <ChartNoAxesGantt className="w-4 h-4 md:w-6 md:h-6 mb-2 md:mb-3" />,
      path: "/review",
    },
    {
      key: "mypage",
      label: "내 페이지",
      icon: <CircleUserRound className="w-4 h-4 md:w-6 md:h-6 mb-2 md:mb-3" />,
      path: "/mypage",
    },
  ];

  return (
    <footer className={footer()}>
      <div className={inner()}>
        <div className={flexWrapper()}>
          {footerMenu.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Button
                key={item.key}
                type="button"
                variant="footer"
                size="footer"
                className="flex flex-col items-center"
                onClick={() => router.push(item.path)}
              >
                {React.cloneElement(item.icon, {
                  className: `${item.icon.props.className} ${
                    isActive ? "text-orange-500" : ""
                  }`,
                })}
                <span
                  className={`font-regular-14 ${
                    isActive ? "text-orange-500" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
