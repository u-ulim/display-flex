"use client";
import { Badge } from "../../badge/Badge";
import { Card } from "../../card/Card";
import { CardContent } from "../../cardContent";
import { popularVariants } from "./popularVariants";
const { section } = popularVariants();
import Image from "next/image";
import { useVisibleItems } from "@/hooks/useVisibleItems";
import { Button } from "../../button/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fetchPopulars } from "@/api/fetchPopulars";
import { IPopularSlide } from "./popularSlide.type";

export const PopularSlide = () => {
  const [popularSlide, setPopularSlide] = useState(0);
  const visibleItems = useVisibleItems();
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopulars().then((data) => {
      setPopularMovies(data);
    });
  }, []);
  // 인기 영화 데이터

  // 슬라이드 이동 함수
  const moveSlide = (
    direction: "prev" | "next",
    type: "popular" | "new" | "genre"
  ) => {
    const maxSlides = {
      popular: Math.max(0, popularMovies.length - visibleItems),
    };
    if (type === "popular") {
      if (direction === "prev") {
        setPopularSlide(Math.max(0, popularSlide - 1));
      } else {
        setPopularSlide(Math.min(maxSlides.popular, popularSlide + 1));
      }
    }
  };

  // 슬라이드 컨테이너 참조
  const popularRef = useRef<HTMLDivElement>(null);

  return (
    <section className={section()}>
      <div className="flex items-center justify-between mb-8 pt-10">
        <h3 className="text-2xl font-bold text-gray-900">인기 영화</h3>
        <div className="flex space-x-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => moveSlide("prev", "popular")}
            disabled={popularSlide === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => moveSlide("next", "popular")}
            disabled={popularSlide >= popularMovies.length - visibleItems}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          ref={popularRef}
          className="flex transition-transform duration-300 ease-in-out mb-10"
          style={{
            transform: `translateX(-${popularSlide * (100 / visibleItems)}%)`,
          }}
        >
          {popularMovies.map((movie: IPopularSlide) => (
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
                      className="font-bold-14 absolute top-2 right-2 z-20"
                      variant="cardRating"
                      size="md"
                    >
                      {movie.rating}
                    </Badge>
                    <div className="absolute w-full h-full bottom-0 left-0 right-0 bg-gray-900/30 z-10"></div>
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
