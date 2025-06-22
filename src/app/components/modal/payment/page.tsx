"use client";

import { useState } from "react";
import { CreditCard, Crown, Star } from "lucide-react";
import { PaymentModal } from "./PaymentModal";
import { Plan } from "./paymentModal.type";
import { Button } from "@/app/components/button";

export default function PaymentModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // 샘플 플랜 데이터
  const plans: Plan[] = [
    {
      id: "basic",
      name: "베이직 플랜",
      price: 0,
      features: ["HD 화질", "동시 시청 1대", "광고 포함"],
      icon: <Star className="w-5 h-5 text-white" />,
      color: "bg-gray-500",
      type: "basic",
    },
    {
      id: "premium",
      name: "프리미엄 플랜",
      price: 14900,
      originalPrice: 19900,
      features: ["4K 화질", "동시 시청 4대", "광고 없음", "오프라인 다운로드"],
      icon: <CreditCard className="w-5 h-5 text-white" />,
      color: "bg-orange-600",
      type: "premium",
    },
    {
      id: "vip",
      name: "VIP 플랜",
      price: 24900,
      originalPrice: 29900,
      features: [
        "8K 화질",
        "동시 시청 무제한",
        "광고 없음",
        "오프라인 다운로드",
        "독점 콘텐츠",
        "우선 고객 지원",
      ],
      icon: <Crown className="w-5 h-5 text-white" />,
      color: "bg-purple-600",
      type: "vip",
    },
  ];

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    if (plan.type !== "basic") {
      setIsModalOpen(true);
    } else {
      // 베이직 플랜은 바로 활성화 (결제 모달 없음)
      alert("베이직 플랜이 활성화되었습니다!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 max-w-[1080px] mx-auto relative p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        구독 플랜 選택
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div
                className={`w-12 h-12 ${plan.color} rounded-full flex items-center justify-center`}
              >
                {plan.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <div className="flex items-center space-x-2">
                  {plan.price === 0 ? (
                    <span className="text-2xl font-bold text-green-600">
                      무료
                    </span>
                  ) : (
                    <>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        ₩{plan.price.toLocaleString()}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₩{plan.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        /월
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              type="button"
              onClick={() => handlePlanSelect(plan)}
              className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition-colors ${
                plan.type === "basic"
                  ? "bg-gray-500 hover:bg-gray-600"
                  : plan.type === "premium"
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {plan.type === "basic" ? "무료 시작하기" : "구독하기"}
            </Button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedPlan={selectedPlan.id}
        />
      )}
    </div>
  );
}
