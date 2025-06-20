"use client";
import { Badge } from "@/app/components/badge";
import { Card } from "@/app/components/card";
import { CardContent } from "@/app/components/cardContent";
import { detailSimilarVariants } from "./detailSimilarVariants";
const { section } = detailSimilarVariants();
import Image from "next/image";
import { useVisibleItems } from "@/hooks/useVisibleItems";
import { Button } from "@/app/components/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef, useState } from "react";
import { IDetailSimilarProps } from "./detailSimilar.type";
import Link from "next/link";

export const DetailSimilar = ({ similarMovies }: IDetailSimilarProps) => {
  const [popularSlide, setPopularSlide] = useState(0);
  const visibleItems = useVisibleItems();

  // 슬라이드 이동 함수
  const moveSlide = (
    direction: "prev" | "next",
    type: "popular" | "new" | "genre"
  ) => {
    const maxSlides = {
      popular: Math.max(0, similarMovies.length - visibleItems),
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
        <h3 className="font-bold-20 text-gray-900 dark:text-white">
          비슷한 영화 추천
        </h3>
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
            disabled={popularSlide >= similarMovies.length - visibleItems}
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
          {similarMovies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <Link href={`/movie/${movie.id}`}>
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
                        <Star className="w-3 h-3 mr-2 text-yellow-300  fill-yellow-300" />
                        {movie.rating}
                      </Badge>
                    </div>
                    <div className="p-3 flex-grow">
                      <h4 className="font-sb-14 mb-1 text-black dark:text-white truncate">
                        {movie.title}
                      </h4>
                      <p className="font-medium-12 text-gray-500 dark:text-gray-500">
                        {movie.year}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
