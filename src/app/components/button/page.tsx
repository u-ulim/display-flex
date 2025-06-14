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
} from "lucide-react";
import { useState } from "react";

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
        <Button
          type="button"
          variant="footer"
          size="footer"
          className="flex flex-col items-center"
        >
          <Home className="w-4 h-4 mb-1" />
          <span className="font-medium-12 ">홈</span>
        </Button>
        <Button
          type="button"
          variant="footer"
          size="footer"
          className="flex flex-col items-center"
        >
          <Telescope className="w-4 h-4 mb-1" />
          <span className="font-medium-12 ">탐색</span>
        </Button>
        <Button
          type="button"
          variant="footer"
          size="footer"
          className="flex flex-col items-center"
        >
          <Sparkles className="w-4 h-4 mb-1" />
          <span className="font-medium-12 ">혜택</span>
        </Button>
        <Button
          type="button"
          variant="footer"
          size="footer"
          className="flex flex-col items-center"
        >
          <ChartNoAxesGantt className="w-4 h-4 mb-1" />
          <span className="font-medium-12 ">리뷰</span>
        </Button>
        <Button
          type="button"
          variant="footer"
          size="footer"
          className="flex flex-col items-center"
        >
          <CircleUserRound className="w-4 h-4 mb-1" />
          <span className="font-medium-12 ">내 페이지</span>
        </Button>
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
    </div>
  );
}
