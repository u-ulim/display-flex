"use client";

import { Card } from "@/app/components/card/Card";
import { membershipVariants } from "./membershipVariants";
import { CardContent } from "@/app/components/cardContent/CardContent";
import {
  Heart,
  Star,
  Clock,
  Award,
  ChevronRight,
  User,
  Bell,
  Shield,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/app/components/button";
import { Badge } from "@/app/components/badge";

const memberships = [
  {
    title: "프리미엄 멤버십",
    expire: "2024.12.31까지",
    status: "활성",
    statusColor: "bg-orange-600",
    nextPayment: "2024.02.15",
    gradient:
      "bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 border-orange-200 dark:border-orange-700",
  },
];

const { section } = membershipVariants();

export const Membership = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">멤버십 정보</h3>
      <div className="space-y-2">
        {memberships.map((m, i) => (
          <Card key={i} className={`p-6 ${m.gradient}`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-sb-18 text-gray-900 dark:text-white mb-2">
                  {m.title}
                </h4>
                <p className="font-regular-14 text-gray-600 dark:text-gray-300">
                  {m.expire}
                </p>
              </div>
              <Badge className="font-bold-12" size="default" variant="primary">
                {m.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-regular-14 text-gray-600 dark:text-gray-300">
                다음 결제일: {m.nextPayment}
              </div>
              <Button
                type="button"
                variant="default"
                size="sm"
                className="dark:border-gray-600 dark:text-gray-300"
              >
                관리하기
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
