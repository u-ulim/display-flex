"use client";
import { Card } from "./Card";
import { CardContent } from "../cardContent/CardContent";
import { useVisibleItems } from "@/hooks/useVisibleItems";
import Image from "next/image";
import {
  Star,
  TrendingUp,
  Calendar,
  Award,
  Globe,
  Clock,
  Heart,
  ChevronRight,
  User,
  Bell,
  Shield,
  HelpCircle,
  Crown,
  Zap,
} from "lucide-react";
import { Button } from "../button/Button";
import { Badge } from "../badge";

// 인기 영화 데이터
const popularMovies = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `인기 영화 ${i + 1}`,
  year: "2024",
  rating: (8 + i * 0.1).toFixed(1), // ✅ 고정값 사용
  image: "/placeholder.svg",
}));

const trendingMovies = [
  {
    id: 1,
    title: "트렌딩 영화 1",
    year: "2024",
    rating: "8.1",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "트렌딩 영화 2",
    year: "2024",
    rating: "8.2",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "트렌딩 영화 3",
    year: "2024",
    rating: "8.3",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "트렌딩 영화 4",
    year: "2024",
    rating: "8.4",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "트렌딩 영화 5",
    year: "2024",
    rating: "8.5",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "트렌딩 영화 6",
    year: "2024",
    rating: "8.6",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    title: "트렌딩 영화 7",
    year: "2024",
    rating: "8.7",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    title: "트렌딩 영화 8",
    year: "2024",
    rating: "8.8",
    image: "/placeholder.svg",
  },
  {
    id: 9,
    title: "트렌딩 영화 9",
    year: "2024",
    rating: "8.9",
    image: "/placeholder.svg",
  },
  {
    id: 10,
    title: "트렌딩 영화 10",
    year: "2024",
    rating: "9.0",
    image: "/placeholder.svg",
  },
];

const categories = [
  {
    icon: (
      <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
    ),
    bg: "bg-orange-50 dark:bg-orange-900/30 group-hover:bg-orange-300 dark:group-hover:bg-orange-800",
    title: "인기 영화",
    desc: "지금 가장 인기있는",
  },
  {
    icon: <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />,
    bg: "bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-800",
    title: "최신 개봉",
    desc: "새로 개봉한 영화",
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    bg: "bg-yellow-100 dark:bg-yellow-900/30 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800",
    title: "수상작",
    desc: "각종 상을 받은",
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    bg: "bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800",
    title: "해외 영화",
    desc: "전 세계의 명작",
  },
];

const genres = [
  { name: "액션", count: "1,234", color: "bg-red-500" },
  { name: "드라마", count: "2,156", color: "bg-blue-500" },
  { name: "코미디", count: "987", color: "bg-yellow-500" },
  { name: "스릴러", count: "756", color: "bg-gray-700" },
  { name: "로맨스", count: "543", color: "bg-pink-500" },
  { name: "SF", count: "432", color: "bg-purple-500" },
  { name: "호러", count: "321", color: "bg-red-800" },
  { name: "애니메이션", count: "654", color: "bg-green-500" },
  { name: "다큐멘터리", count: "234", color: "bg-indigo-500" },
];
const collections = [
  {
    title: "크리스토퍼 놀란 감독 작품",
    description: "시간과 공간을 넘나드는 마스터피스",
    count: "12개 영화",
    image: "/placeholder.svg",
  },
  {
    title: "마블 시네마틱 유니버스",
    description: "슈퍼히어로들의 대서사시",
    count: "28개 영화",
    image: "/placeholder.svg",
  },
  {
    title: "스튜디오 지브리 애니메이션",
    description: "일본 애니메이션의 걸작들",
    count: "22개 영화",
    image: "/placeholder.svg",
  },
];

export const rewards = [
  { title: "영화관 할인쿠폰", points: "1,000P", discount: "2,000원 할인" },
  { title: "프리미엄 1개월", points: "5,000P", discount: "9,900원 상당" },
  { title: "팝콘 세트", points: "3,000P", discount: "CGV 팝콘세트" },
  { title: "시사회 응모권", points: "2,000P", discount: "독점 시사회" },
];

const mypageCategories = [
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

const activities = [
  {
    image: "/placeholder.svg",
    title: "오펜하이머",
    time: "2시간 전",
    desc: "리뷰를 작성했습니다",
    icon: (
      <div className="flex items-center mt-2">
        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
        <span className="text-sm text-gray-900 dark:text-white">9.5</span>
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

export default function CardPage() {
  const visibleItems = useVisibleItems();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 max-w-[1080px] mx-auto relative p-4">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 max-w-[1080px] mx-auto relative overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out mb-10">
          {popularMovies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <Card key={movie.id}>
                <CardContent variant="default">
                  <div className="aspect-[3/4] bg-gray-200 rounded-t-lg relative overflow-hidden">
                    <Image
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />

                    <Badge
                      className="font-bold-14 absolute top-2 right-2"
                      variant="cardRating"
                      size="md"
                    >
                      {movie.rating}
                    </Badge>
                  </div>
                  <div className="p-3 flex-grow">
                    <h4 className="font-semibold text-sm mb-1 text-black dark:text-white truncate">
                      {movie.title}
                    </h4>
                    <p className="text-xs text-gray-500">{movie.year}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="space-y-6 mb-10">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              className="p-6 cursor-pointer hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600"
              onClick={() => {}}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-24 bg-gray-200 dark:bg-gray-600  flex-shrink-0">
                  <Image
                    src="/placeholder.svg"
                    alt="Movie poster"
                    width={64}
                    height={96}
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      영화 제목 {i}
                    </h4>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-900 dark:text-white">
                        9.{i}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    정말 훌륭한 영화였습니다. 스토리텔링이 뛰어나고 연기력도
                    최고였어요. 강력히 추천합니다!
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>리뷰어{i}</span>
                    <span className="mx-2">•</span>
                    <span>2024.01.1{i}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {categories.map((cat, i) => (
            <Card
              key={i}
              className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              onClick={() => {}}
            >
              <CardContent variant="default">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors ${cat.bg}`}
                >
                  {cat.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {cat.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cat.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {genres.map((genre, i) => (
            <Card
              key={i}
              className="relative overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div
                className={`absolute inset-0 ${genre.color} opacity-80 group-hover:opacity-90 transition-opacity`}
              ></div>
              <CardContent className="relative p-6 text-white">
                <h4 className="text-lg font-bold mb-1">{genre.name}</h4>
                <p className="text-sm opacity-90">{genre.count}개 영화</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-6 mb-10">
          {collections.map((collection, i) => (
            <Card
              key={i}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              onClick={() => {}}
            >
              <CardContent variant="default">
                <div className="flex items-center p-2">
                  <div className="relative w-32 h-32 bg-gray-200 dark:bg-gray-700 flex-shrink-0 p-2">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      fill
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                  <div className="flex-1 px-4 max-h-28">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {collection.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                      {collection.description}
                    </p>
                    <Badge
                      className="font-medium-12"
                      variant="default"
                      size="sm"
                    >
                      {collection.count}
                    </Badge>
                  </div>
                </div>
                /
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {rewards.map((item, i) => (
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {trendingMovies.map((movie, i) => (
            <Card
              key={movie.id}
              className="group cursor-pointer hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              onClick={() => {}}
            >
              <CardContent className="p-0">
                <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 rounded-t-lg relative overflow-hidden">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  {/* 순위 뱃지 */}
                  <Badge
                    className="font-bold-12 absolute top-2 left-2"
                    variant="cardRanking"
                    size="sm"
                  >
                    #{i + 1}
                  </Badge>
                  {/* 평점 뱃지 */}
                  <Badge
                    className="font-bold-14 absolute top-2 right-2"
                    variant="cardRating"
                    size="md"
                  >
                    {movie.rating}
                  </Badge>
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-sm mb-1 truncate text-gray-900 dark:text-white">
                    {movie.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {movie.year}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-6 mb-10">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex-shrink-0">
                  <Image
                    src="/placeholder.svg"
                    alt="User avatar"
                    width={48}
                    height={48}
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-sb-16 text-gray-900 dark:text-white">
                        사용자{i}
                      </h4>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-900 dark:text-white">
                          9.{i}
                        </span>
                      </div>
                    </div>
                    <span className="font-regular-14 text-gray-500 dark:text-gray-400">
                      2024.01.1{i}
                    </span>
                  </div>
                  <p className="text-gray-700 font-regular-16 dark:text-gray-300 mb-3">
                    정말 훌륭한 영화였습니다. 스토리텔링이 뛰어나고 연기력도
                    최고였어요. 강력히 추천합니다!
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <button className="font-regular-14 hover:text-orange-600 dark:hover:text-orange-400">
                      도움이 됨 (12)
                    </button>
                    <button className="font-regular-14 hover:text-orange-600 dark:hover:text-orange-400">
                      답글
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {mypageCategories.map((item, i) => (
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
        <div className="space-y-4 mb-10">
          {activities.map((activity, idx) => (
            <Card
              key={idx}
              className="p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-18 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={activity.image}
                    alt="Movie"
                    width={48}
                    height={72}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {activity.title}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {activity.desc}
                  </p>
                  {activity.icon}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="space-y-2 mb-10">
          {settingsMenu.map((item) => (
            <Card
              key={item.key}
              className="p-4 hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
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

        <div className="space-y-2 mb-10">
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
                <Badge
                  className="font-bold-12"
                  size="default"
                  variant="primary"
                >
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
        <div className="space-y-4">
          {/* Basic Plan */}
          <button className="w-full p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg text-left group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    베이직 플랜
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    기본 기능으로 시작하기
                  </p>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                      영화 정보
                    </span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                      리뷰 작성
                    </span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                      찜하기
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  무료
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  현재 플랜
                </div>
              </div>
            </div>
          </button>

          {/* Premium Plan */}
          <button className="w-full p-6 bg-gradient-to-r from-sky-50 to-purple-50 dark:from-sky-900/20 dark:to-purple-900/20 rounded-2xl border-2 border-sky-300 dark:border-sky-600 hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-300 hover:shadow-xl text-left group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-sky-500 to-purple-600 text-white px-4 py-1 rounded-bl-xl text-sm font-bold">
              🔥 인기
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    프리미엄 플랜
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    완벽한 영화 경험
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xs bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 px-2 py-1 rounded-full">
                      광고 없음
                    </span>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-2 py-1 rounded-full">
                      독점 콘텐츠
                    </span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full">
                      우선 지원
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
                  ₩9,900
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  /월
                </div>
              </div>
            </div>
          </button>

          {/* VIP Plan */}
          <button className="w-full p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-yellow-200 dark:border-yellow-700 hover:border-yellow-300 dark:hover:border-yellow-600 transition-all duration-300 hover:shadow-lg text-left group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    VIP 플랜
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    최고급 프리미엄 경험
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded-full">
                      영화관 할인
                    </span>
                    <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-1 rounded-full">
                      시사회 초대
                    </span>
                    <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-1 rounded-full">
                      AI 추천
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  ₩19,900
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  /월
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="flex justify-center mb-10">
          <div>더보기</div>
        </div>
      </div>
    </div>
  );
}
