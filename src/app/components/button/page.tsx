"use client";
import { Button } from "./Button";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Home,
  Telescope,
  Sparkles,
  ChartNoAxesGantt,
  CircleUserRound,
  SquarePen,
  Flame,
  Film,
  Smile,
  Zap,
  Heart,
  Rocket,
} from "lucide-react";
import { useState } from "react";

const genres = [
  { label: "액션", icon: <Flame className="w-4 h-4 mr-1 text-red-500" /> },
  { label: "드라마", icon: <Film className="w-4 h-4 mr-1 text-blue-500" /> },
  { label: "코미디", icon: <Smile className="w-4 h-4 mr-1 text-yellow-500" /> },
  { label: "스릴러", icon: <Zap className="w-4 h-4 mr-1 text-green-500" /> },
  { label: "로맨스", icon: <Heart className="w-4 h-4 mr-1 text-pink-500" /> },
  { label: "SF", icon: <Rocket className="w-4 h-4 mr-1 text-purple-500" /> },
];

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

const years = [
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2010년대",
  "2000년대",
  "90년대",
  "클래식",
];

export default function page() {
  // const [currentBanner, setCurrentBanner] = useState(0);
  // const [autoplay, setAutoplay] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex gap-4">
        <Button
          type="button"
          className="bg-primary font-regular-14 w-32 h-10 
          "
          onClick={() => console.log("clicked")}
          variant="play"
          size="sm"
        >
          <Play className="w-4 h-4 mr-4" />
          예고편 보기
        </Button>
        <Button
          type="button"
          className="bg-primary font-regular-14 w-40"
          onClick={() => console.log("clicked")}
          variant="play"
          size="md"
        >
          <Play className="w-4 h-4 mr-4" />
          예고편 보기
        </Button>
      </div>
      <Button
        type="button"
        onClick={() => {
          console.log("clicked");
        }}
        variant="arrow"
      >
        {/* absolute left-4 top-1/2 transform -translate-y-1/2 */}
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        type="button"
        className=""
        onClick={() => {
          console.log("clicked");
        }}
        variant="arrow"
      >
        {/* absolute left-4 top-1/2 transform -translate-y-1/2 */}
        <ChevronRight className="w-6 h-6" />
      </Button>
      <Button type="button" variant="outline" size="sm">
        {/*
           onClick={() => moveSlide("next", "popular")}
        disabled={popularSlide >= popularMovies.length - visibleItems}          */}
        <ChevronRight className="w-4 h-4" />
      </Button>
      <Button type="button" variant="outline" size="sm" disabled>
        {/*
           onClick={() => moveSlide("next", "popular")}
        disabled={popularSlide >= popularMovies.length - visibleItems}          */}
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <div className="flex gap-4">
        {footerMenu.map((item) => (
          <Button
            key={item.key}
            type="button"
            variant="footer"
            size="footer"
            className="flex flex-col items-center"
          >
            {item.icon}
            <span className="font-medium-12">{item.label}</span>
          </Button>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-2">
        <Button type="button" variant="outline" size="sm" disabled>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        {[1, 2, 3, 4, 5].map((num) => (
          <Button
            type="button"
            key={num}
            variant={num === 1 ? "nonOutline" : "outline"}
            size="pagination"
            className={num === 1 ? "bg-orange-600 hover:bg-orange-700" : ""}
          >
            {num}
          </Button>
        ))}
        <span className="px-2 text-gray-500">...</span>
        <Button type="button" variant="outline" size="pagination">
          25
        </Button>
        <Button type="button" variant="outline" size="sm">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="w-[200px]">
        <Button type="button" variant="upgrade" size="sm" className="w-full">
          업그레이드
        </Button>
      </div>
      <Button
        type="button"
        variant="default"
        size="sm"
        className="font-regular-14"
      >
        교환
      </Button>
      <Button
        type="button"
        variant="default"
        size="sm"
        className="font-regular-14"
      >
        <SquarePen className="w-4 h-4 mr-2" />
        편집
      </Button>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <Button
            type="button"
            key={genre.label}
            variant="select"
            size="sm"
            className="font-regular-14"
            onClick={() => {}}
          >
            {genre.icon}
            {genre.label}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {years.map((year) => (
          <Button
            type="button"
            key={year}
            variant="select"
            size="sm"
            className="font-regular-14"
            onClick={() => {}}
          >
            {year}
          </Button>
        ))}
      </div>
    </div>
  );
}
