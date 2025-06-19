"use client";
import { Badge } from "../../../badge/Badge";
import { Card } from "../../../card/Card";
import { CardContent } from "../../../cardContent";
import { popularVariants } from "./popularVariants";
const { section } = popularVariants();
import Image from "next/image";
import Link from "next/link";
import { useVisibleItems } from "@/hooks/useVisibleItems";
import { Button } from "../../../button/Button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { IPopularSlide } from "./popularSlide.type";
import { fetchPopulars } from "@/api/landing/fetchPopulars";

export const PopularSlide = () => {
  const [popularMovies, setPopularMovies] = useState<IPopularSlide[]>([]);
  const [popularSlide, setPopularSlide] = useState(0);
  const visibleItems = useVisibleItems();
  const popularRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchPopulars().then((data) => {
      setPopularMovies(data);
    });
  }, []);

  const moveSlide = (direction: "prev" | "next", type: "popular") => {
    if (type === "popular") {
      if (direction === "next") {
        setPopularSlide((prev) =>
          prev >= popularMovies.length - visibleItems ? 0 : prev + 1
        );
      } else {
        setPopularSlide((prev) =>
          prev <= 0
            ? Math.max(0, popularMovies.length - visibleItems)
            : prev - 1
        );
      }
    }
  };

  return (
    <section className={section()}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold-20 dark:text-white">인기 영화</h3>
        <div className="flex space-x-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => moveSlide("prev", "popular")}
            disabled={popularSlide <= 0}
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
                      <h4 className="font-semibold text-sm mb-1 text-black dark:text-white truncate">
                        {movie.title}
                      </h4>
                      <p className="text-xs text-gray-500">{movie.year}</p>
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
