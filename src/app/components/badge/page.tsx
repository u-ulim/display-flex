"use client";
import { Badge } from "./Badge";
import { Star } from "lucide-react";

export default function BadgePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Badge
        className="font-medium-12 
          "
        variant="primary"
        size="default"
      >
        추천 영화
      </Badge>
      <Badge
        className="font-medium-12 
          "
        variant="default"
        size="default"
      >
        기대작
      </Badge>
      <Badge
        className="font-sb-12
        !bg-green-500 !text-white
          "
        variant="default"
        size="default"
      >
        NEW
      </Badge>
      <Badge
        className="font-medium-12 
          "
        variant="cardRanking"
        size="sm"
      >
        #1
      </Badge>
      <Badge
        className="font-bold-14 bg-blue-500 
          "
        variant="cardRating"
        size="md"
      >
        <span className="relative top-[1px]">8.6</span>
      </Badge>
      <Badge
        className="font-bold-14 bg-blue-500 
          "
        variant="cardRating"
        size="md"
      >
        <Star className="w-3 h-3 mr-2 text-yellow-300  fill-yellow-300" />
        <span className="relative top-[1px]">8.6</span>
      </Badge>
    </div>
  );
}
