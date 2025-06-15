"use client";
import { useTheme } from "@/app/contexts/ThemeContext";
import { footerVariants } from "./footerVariants";
import {
  ChartNoAxesGantt,
  CircleUserRound,
  Home,
  Sparkles,
  Telescope,
} from "lucide-react";
import { Button } from "../button";

const { footer, inner, flexWrapper } = footerVariants();

export const Footer = () => {
  const footerMenu = [
    {
      key: "home",
      label: "홈",
      icon: <Home className="w-4 h-4 mb-1" />,
    },
    {
      key: "explore",
      label: "탐색",
      icon: <Telescope className="w-4 h-4 mb-1" />,
    },
    {
      key: "benefit",
      label: "혜택",
      icon: <Sparkles className="w-4 h-4 mb-1" />,
    },
    {
      key: "review",
      label: "리뷰",
      icon: <ChartNoAxesGantt className="w-4 h-4 mb-1" />,
    },
    {
      key: "mypage",
      label: "내 페이지",
      icon: <CircleUserRound className="w-4 h-4 mb-1" />,
    },
  ];

  const { theme } = useTheme();
  return (
    <footer className={footer()}>
      <div className={inner()}>
        <div className={flexWrapper()}>
          {footerMenu.map((item) => (
            <Button
              key={item.key}
              type="button"
              variant="footer"
              size="footer"
              className="flex flex-col items-center"
            >
              {item.icon}
              <span className="font-regular-14">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};
