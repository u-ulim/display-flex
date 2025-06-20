"use client";

import { membershipVariants } from "./membershipVariants";
import { membershipPlanData } from "./membershipPlanData";

const { section } = membershipVariants();

export const Membership = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">멤버십 플랜</h3>
      <div className="space-y-4">
        {membershipPlanData.map((plan) => {
          const Icon = plan.icon;
          return (
            <button
              key={plan.key}
              className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg text-left group relative overflow-hidden ${plan.bg} ${plan.border}`}
            >
              {plan.highlight && (
                <div
                  className={`absolute top-0 right-0 px-4 py-1 rounded-bl-xl font-sb-12 ${plan.highlightBg}`}
                >
                  {plan.highlightText}
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ${plan.iconBg}`}
                  >
                    <Icon className={`w-8 h-8 ${plan.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-bold-20 text-gray-900 dark:text-white mb-1.5">
                      {plan.title}
                    </h4>
                    <p className="font-regular-14 text-gray-600 dark:text-gray-300">
                      {plan.description}
                    </p>
                    <div className="flex items-center space-x-3 mt-2">
                      {plan.features.map((feature, idx) => (
                        <span
                          key={feature}
                          className={`font-medium-12   bg-${
                            Array.isArray(plan.featureColor)
                              ? plan.featureColor[idx]
                              : plan.featureColor
                          }-100 dark:bg-${
                            Array.isArray(plan.featureColor)
                              ? plan.featureColor[idx]
                              : plan.featureColor
                          }-900/30 text-${
                            Array.isArray(plan.featureColor)
                              ? plan.featureColor[idx]
                              : plan.featureColor
                          }-700 dark:text-${
                            Array.isArray(plan.featureColor)
                              ? plan.featureColor[idx]
                              : plan.featureColor
                          }-400 px-2 py-1 rounded-full`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={
                      plan.priceGradient
                        ? `font-bold-32 ${plan.priceGradient}`
                        : "font-bold-32 text-gray-900 dark:text-white"
                    }
                  >
                    {plan.price}
                  </div>
                  <div className="font-regular-14 text-gray-500 dark:text-gray-400 mt-1">
                    {plan.priceDetail}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-center space-x-6 font-regular-14 text-blue-700 dark:text-blue-300">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            7일 무료 체험
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            언제든 취소
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            안전한 결제
          </div>
        </div>
      </div>
    </section>
  );
};
