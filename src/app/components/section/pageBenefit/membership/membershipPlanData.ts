import { Star, Crown, Zap } from "lucide-react";

export const membershipPlanData = [
  {
    key: "basic",
    title: "베이직 플랜",
    description: "기본 기능으로 시작하기",
    price: "무료",
    priceDetail: "현재 플랜",
    features: ["영화 정보", "리뷰 작성", "찜하기"],
    featureColor: "green",
    icon: Star,
    iconBg:
      "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800",
    iconColor: "text-gray-600 dark:text-gray-400",
    border:
      "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600",
    bg: "bg-white dark:bg-gray-800",
    highlight: false,
  },
  {
    key: "premium",
    title: "프리미엄 플랜",
    description: "완벽한 영화 경험",
    price: "₩5,900",
    priceDetail: "/월",
    features: ["광고 없음", "독점 콘텐츠", "우선 지원"],
    featureColor: ["sky", "purple", "blue"],
    icon: Crown,
    iconBg: "bg-gradient-to-br from-sky-400 to-purple-600",
    iconColor: "text-white",
    border:
      "border-sky-300 dark:border-sky-600 hover:border-sky-400 dark:hover:border-sky-500",
    bg: "bg-gradient-to-r from-sky-50 to-purple-50 dark:from-sky-900/20 dark:to-purple-900/20",
    highlight: true,
    highlightText: "🔥 인기",
    highlightBg: "bg-gradient-to-l from-sky-500 to-purple-600 text-white",
    priceGradient:
      "bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent",
  },
  {
    key: "vip",
    title: "VIP 플랜",
    description: "최고급 프리미엄 경험",
    price: "₩14,900",
    priceDetail: "/월",
    features: ["영화관 할인", "시사회 초대", "AI 추천"],
    featureColor: ["yellow", "orange", "red"],
    icon: Zap,
    iconBg: "bg-gradient-to-br from-yellow-400 to-orange-500",
    iconColor: "text-white",
    border:
      "border-yellow-200 dark:border-yellow-700 hover:border-yellow-300 dark:hover:border-yellow-600",
    bg: "bg-white dark:bg-gray-800",
    highlight: false,
    priceGradient:
      "bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent",
  },
];
