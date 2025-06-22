"use client";

import { Users, Crown } from "lucide-react";
import { rewardVariants } from "./rewardVariants";
import { Card } from "@/app/components/card/Card";

const { section } = rewardVariants();

export const Reward = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">리워드 프로그램</h3>
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-default">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="font-sb-18 text-gray-900 dark:text-white mb-1">
              현재 포인트
            </h4>
            <div className="font-bold-32  text-orange-600">2,450P</div>
          </div>
          <div className="text-right">
            <p className="font-regular-14 text-gray-500 dark:text-gray-400 mb-1">
              다음 등급까지
            </p>
            <div className="font-sb-18 text-gray-900 dark:text-white">550P</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-regular-14 text-gray-600 dark:text-gray-400">
              실버
            </span>
            <span className="font-regular-14 text-gray-600 dark:text-gray-400">
              골드
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-orange-600 h-2 rounded-full"
              style={{ width: "82%" }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Users className="w-6 h-6 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
            <div className="font-sb-14 text-gray-900 dark:text-white mb-1">
              실버 등급
            </div>
            <div className="font-medium-12 text-gray-500 dark:text-gray-400">
              현재 등급
            </div>
          </div>
          <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <Crown className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <div className="font-sb-14 text-gray-900 dark:text-white mb-1">
              골드 등급
            </div>
            <div className="font-medium-12 text-gray-500 dark:text-gray-400">
              다음 등급
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
