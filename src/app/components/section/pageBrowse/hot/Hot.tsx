"use client";

import { Award, Calendar, Globe, TrendingUp } from "lucide-react";
import { hotVariants } from "./hotVariants";
import { Card } from "@/app/components/card/Card";
import { CardContent } from "@/app/components/cardContent/CardContent";
import { Button } from "@/app/components/button/Button";
import Image from "next/image";
import { Badge } from "@/app/components/badge/Badge";
import { fetchCollection } from "@/api/browse/fetchGenre";
import { IHot } from "./hot.type";
import { fetchHot } from "@/api/browse/fetchHot";

const { section } = hotVariants();

const { trendingMovies } = await fetchHot();

export const Hot = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">지금 뜨는 영화</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
        {trendingMovies.map((movie: IHot, i: number) => (
          <Card
            key={movie.id}
            className="group cursor-pointer hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            onClick={() => {}}
          >
            <CardContent className="p-0">
              <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 rounded-t-lg relative overflow-hidden">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" // 예시
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                {/* 순위 뱃지 */}
                <Badge
                  className="font-bold-12 absolute top-2 left-2"
                  variant="cardRanking"
                  size="sm"
                >
                  #{i + 1}
                </Badge>
                {/* 평점 뱃지 */}
                <Badge
                  className="font-bold-14 absolute top-2 right-2"
                  variant="cardRating"
                  size="md"
                >
                  {movie.rating}
                </Badge>
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-sm mb-1 truncate text-gray-900 dark:text-white">
                  {movie.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {movie.year}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
