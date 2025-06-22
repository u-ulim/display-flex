"use client";

import { Award, Calendar, Globe, TrendingUp } from "lucide-react";
import { fastVariants } from "./fastVariants";
import { Card } from "@/app/components/card/Card";
import { CardContent } from "@/app/components/cardContent/CardContent";

const { section } = fastVariants();

const categories = [
  {
    icon: (
      <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
    ),
    bg: "bg-orange-50 dark:bg-orange-900/30 group-hover:bg-orange-300 dark:group-hover:bg-orange-800",
    title: "인기 영화",
    desc: "지금 가장 인기있는",
  },
  {
    icon: <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />,
    bg: "bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-800",
    title: "최신 개봉",
    desc: "새로 개봉한 영화",
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    bg: "bg-yellow-100 dark:bg-yellow-900/30 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800",
    title: "수상작",
    desc: "각종 상을 받은",
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    bg: "bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800",
    title: "해외 영화",
    desc: "전 세계의 명작",
  },
];

export const Fast = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">빠른 탐색</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {categories.map((cat, i) => (
          <Card
            key={i}
            className="p-6 text-center hover:shadow-lg transition-shadow cursor-default group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            onClick={() => {}}
          >
            <CardContent variant="default">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors ${cat.bg}`}
              >
                {cat.icon}
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {cat.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cat.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
