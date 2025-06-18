"use client";
import { Badge } from "../../../badge/Badge";
import { Card } from "../../../card/Card";
import { CardContent } from "../../../cardContent";
import { NewVariants } from "./newVariants";
const { section } = NewVariants();

import Image from "next/image";
import { useVisibleItems } from "@/hooks/useVisibleItems";
import { Button } from "../../../button/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fetchNews } from "@/api/landing/fetchNews";
import { INewsSlide } from "./newSlide.type";

export const NewSlide = () => {
  const [newsrSlide, setNewsrSlide] = useState(0);
  const visibleItems = useVisibleItems();
  const [newsMovies, setNewsMovies] = useState([]);

  useEffect(() => {
    fetchNews().then((data) => {
      setNewsMovies(data);
    });
  }, []);
  // 인기 영화 데이터

  // 슬라이드 이동 함수
  const moveSlide = (
    direction: "prev" | "next",
    type: "popular" | "new" | "genre"
  ) => {
    const maxSlides = {
      popular: Math.max(0, newsMovies.length - visibleItems),
    };
    if (type === "popular") {
      if (direction === "prev") {
        setNewsrSlide(Math.max(0, newsrSlide - 1));
      } else {
        setNewsrSlide(Math.min(maxSlides.popular, newsrSlide + 1));
      }
    }
  };

  // 슬라이드 컨테이너 참조
  const popularRef = useRef<HTMLDivElement>(null);

  return (
    <section className={section()}>
      <div className="flex items-center justify-between mb-8 pt-10">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          최신 개봉 영화
        </h3>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => moveSlide("prev", "popular")}
              disabled={newsrSlide === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => moveSlide("next", "popular")}
              disabled={newsrSlide >= newsMovies.length - visibleItems}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <Button
            type="button"
            className="font-regular-14"
            variant="allView"
            size="sm"
          >
            전체보기
          </Button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          ref={popularRef}
          className="flex transition-transform duration-300 ease-in-out mb-10"
          style={{
            transform: `translateX(-${newsrSlide * (100 / visibleItems)}%)`,
          }}
        >
          {newsMovies.map((movie: INewsSlide) => (
            <div
              key={movie.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <Card key={movie.id}>
                <CardContent variant="default">
                  <div className="aspect-[3/4] bg-gray-200 rounded-t-lg relative overflow-hidden">
                    <Image
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <Badge
                      className="font-sb-12 absolute top-2 left-2
          "
                      variant="cardNew"
                      size="default"
                    >
                      NEW
                    </Badge>
                  </div>
                  <div className="p-3 flex-grow">
                    <h4 className="font-semibold text-sm mb-1 text-black dark:text-white truncate">
                      {movie.title}
                    </h4>
                    <p className="text-xs text-gray-500">{movie.year}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
