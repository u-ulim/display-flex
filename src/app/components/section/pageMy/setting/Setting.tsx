"use client";

import { Card } from "@/app/components/card/Card";
import { settingVariants } from "./settingVariants";
import { ChevronRight, User, Bell, Shield, HelpCircle } from "lucide-react";

const settingsMenu = [
  {
    icon: <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />,
    label: "계정 설정",
    key: "account",
  },
  {
    icon: <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />,
    label: "알림 설정",
    key: "notification",
  },
  {
    icon: <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />,
    label: "개인정보 보호",
    key: "privacy",
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />,
    label: "고객 지원",
    key: "support",
  },
];

const { section } = settingVariants();

export const Setting = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">설정</h3>
      <div className="space-y-2">
        {settingsMenu.map((item) => (
          <Card
            key={item.key}
            className="p-4 hover:shadow-lg transition-shadow cursor-default bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.label}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
