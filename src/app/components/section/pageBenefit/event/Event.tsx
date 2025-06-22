"use client";

import { eventVariants } from "./eventVariants";
import { Card } from "@/app/components/card/Card";
import { Percent, Gift, CalendarHeart } from "lucide-react";
import { Badge } from "@/app/components/badge/Badge";

export const benefitEventData = [
  {
    key: "signup-discount",
    icon: Percent,
    iconBg: "bg-gradient-to-br from-sky-400 to-sky-600",
    title: "신규 가입 50% 할인",
    badgeColor: "!bg-sky-600",
    badgeText: "진행중",
    description: "첫 달 프리미엄 멤버십 50% 할인",
    period: "2024.12.31까지",
  },
  {
    key: "referral",
    icon: Gift,
    iconBg: "bg-gradient-to-br from-green-400 to-green-600",
    title: "친구 추천 이벤트",
    badgeColor: "!bg-green-600",
    badgeText: "진행중",
    description: "친구 추천 시 양쪽 모두 1개월 무료",
    period: "상시 진행",
  },
  {
    key: "annual-discount",
    icon: CalendarHeart,
    iconBg: "bg-gradient-to-br from-purple-400 to-purple-600",
    title: "연간 결제 할인",
    badgeColor: "!bg-purple-600",
    badgeText: "진행중",
    description: "연간 결제 시 2개월 무료 추가",
    period: "상시 진행",
  },
];

const { section } = eventVariants();

export const Event = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">진행 중인 혜택</h3>
      <div className="space-y-4">
        {benefitEventData.map((event) => {
          const Icon = event.icon;
          return (
            <Card
              key={event.key}
              className="overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-4 cursor-default"
            >
              <div className="flex items-center">
                <div
                  className={`w-20 h-20 ${event.iconBg} flex items-center justify-center flex-shrink-0 mr-4 rounded-md`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-900 dark:text-white font-sb-16">
                      {event.title}
                    </h4>
                    <Badge
                      variant="primary"
                      size="default"
                      className={`${event.badgeColor} text-white font-sb-12`}
                    >
                      {event.badgeText}
                    </Badge>
                  </div>
                  <p className="font-regular-14 text-gray-600 dark:text-gray-300 mb-2">
                    {event.description}
                  </p>
                  <p className="font-medium-12 text-gray-500 dark:text-gray-400">
                    {event.period}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
