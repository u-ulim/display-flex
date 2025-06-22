"use client";

import { genreVariants } from "./genreVariants";
import { Card } from "@/app/components/card/Card";
import { CardContent } from "@/app/components/cardContent/CardContent";

const { section } = genreVariants();

const genres = [
  { name: "액션", count: "1,234", color: "bg-red-500" },
  { name: "드라마", count: "2,156", color: "bg-blue-500" },
  { name: "코미디", count: "987", color: "bg-yellow-500" },
  { name: "스릴러", count: "756", color: "bg-gray-700" },
  { name: "로맨스", count: "543", color: "bg-pink-500" },
  { name: "SF", count: "432", color: "bg-purple-500" },
  { name: "호러", count: "321", color: "bg-red-800" },
  { name: "애니메이션", count: "654", color: "bg-green-500" },
  { name: "다큐멘터리", count: "234", color: "bg-indigo-500" },
];

export const Genre = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">장르별 탐색</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {genres.map((genre, i) => (
          <Card
            key={i}
            className="relative overflow-hidden hover:shadow-lg transition-shadow cursor-default group"
          >
            <div
              className={`absolute inset-0 ${genre.color} opacity-80 group-hover:opacity-90 transition-opacity`}
            ></div>
            <CardContent className="relative p-6 text-white">
              <h4 className="text-lg font-bold mb-1">{genre.name}</h4>
              <p className="text-sm opacity-90">{genre.count}개 영화</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
