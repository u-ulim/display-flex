"use client";

import { Card } from "@/app/components/card/Card";
import { recentVariants } from "./recentVariants";
import { Heart, Star, Clock, LucideImage } from "lucide-react";
import Image from "next/image";

const myPageRecentData = [
  {
    image: "/placeholder.svg",
    title: "오펜하이머",
    time: "2시간 전",
    desc: "리뷰를 작성했습니다",
    icon: (
      <div className="flex items-center mt-2">
        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
        <span className="font-regular-14 text-gray-900 dark:text-white">
          9.5
        </span>
      </div>
    ),
  },
  {
    image: "/placeholder.svg",
    title: "듄: 파트 투",
    time: "1일 전",
    desc: "찜 목록에 추가했습니다",
    icon: <Heart className="w-4 h-4 text-orange-600 fill-current mt-2" />,
  },
  {
    image: "/placeholder.svg",
    title: "존 윅 4",
    time: "3일 전",
    desc: "시청을 완료했습니다",
    icon: <Clock className="w-4 h-4 text-green-600 mt-2" />,
  },
];

const { section } = recentVariants();

export const Recent = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">최근 활동</h3>
      <div className="space-y-4">
        {myPageRecentData.map((activity, idx) => (
          <Card
            key={idx}
            className="p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-18 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                {activity.image && activity.image !== "/placeholder.svg" ? (
                  <Image
                    src={activity.image}
                    alt="Movie"
                    width={48}
                    height={72}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <LucideImage
                    className="w-6 h-6 text-gray-400"
                    aria-label="No image"
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-sb-16 text-gray-900 dark:text-white">
                    {activity.title}
                  </h4>
                  <span className="font-regular-14 text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </span>
                </div>
                <p className="font-regular-14 text-gray-600 dark:text-gray-300">
                  {activity.desc}
                </p>
                {activity.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
