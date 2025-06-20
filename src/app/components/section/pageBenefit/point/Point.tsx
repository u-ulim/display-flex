"use client";

import { pointVariants } from "./pointVariants";
import { Card } from "@/app/components/card/Card";
import { Button } from "@/app/components/button/Button";

export const pointData = [
  { title: "영화관 할인쿠폰", points: "1,000P", discount: "2,000원 할인" },
  { title: "프리미엄 1개월", points: "5,000P", discount: "9,900원 상당" },
  { title: "팝콘 세트", points: "3,000P", discount: "CGV 팝콘세트" },
  { title: "시사회 응모권", points: "2,000P", discount: "독점 시사회" },
];

const { section } = pointVariants();

export const Point = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">리워드 프로그램</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {pointData.map((item, i) => (
          <Card
            key={i}
            className="p-4 hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.discount}
                </p>
              </div>
              <div className="text-right flex flex-col items-end gap-2">
                <div className="text-lg font-bold text-orange-600">
                  {item.points}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  type="button"
                  className="dark:border-gray-600 dark:text-gray-300"
                  onClick={() => {}}
                >
                  교환
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
