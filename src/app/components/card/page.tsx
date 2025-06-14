"use client";
import { Card } from "./Card";
import { CardContent } from "../cardContent/CardContent";
import { useVisibleItems } from "@/hooks/useVisibleItems";
import Image from "next/image";
import { Star, TrendingUp, Calendar, Award, Globe } from "lucide-react";
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
                    "정말 훌륭한 영화였습니다. 스토리텔링이 뛰어나고 연기력도
                    최고였어요. 강력히 추천합니다!"
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
        <div className="space-y-6">
          {collections.map((collection, i) => (
            <Card
              key={i}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              onClick={() => {}}
            >
              <div className="flex items-center p-2">
                <div className="relative w-32 h-32 bg-gray-200 dark:bg-gray-700 flex-shrink-0 p-2">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 p-4 max-h-28">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {collection.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {collection.description}
                  </p>
                  <Badge className="font-medium-12" variant="default" size="sm">
                    {collection.count}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>
    </div>
  );
}
