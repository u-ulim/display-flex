"use client";

import { Card } from "@/app/components/card/Card";
import { quickVariants } from "./quikVariants";
import { CardContent } from "@/app/components/cardContent/CardContent";
import { Heart, Star, Clock, Award } from "lucide-react";

const { section } = quickVariants();
const myPageQuickData = [
  {
    icon: <Heart className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
    bg: "bg-orange-50 dark:bg-orange-900/30 group-hover:bg-orange-300 dark:group-hover:bg-orange-800",
    title: "찜한 영화",
    desc: "내가 찜한 영화 목록",
    key: "movies",
  },
  {
    icon: <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    bg: "bg-yellow-100 dark:bg-yellow-900/30 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800",
    title: "내 리뷰",
    desc: "내가 작성한 리뷰",
    key: "reviews",
  },
  {
    icon: <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />,
    bg: "bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-800",
    title: "시청 기록",
    desc: "내가 본 영화 기록",
    key: "history",
  },
  {
    icon: <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    bg: "bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800",
    title: "포인트",
    desc: "적립한 포인트",
    key: "benefits",
  },
];

export const Quik = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">빠른 메뉴</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {myPageQuickData.map((item, i) => (
          <Card
            key={i}
            className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            onClick={() => {}}
          >
            <CardContent variant="default">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 transition-colors">
                {item.icon}
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
