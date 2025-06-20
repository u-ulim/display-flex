"use client";
import { Badge } from "../../../badge/Badge";
import { Card } from "../../../card/Card";
import { CardContent } from "../../../cardContent";
import { genreVariants } from "./genreVariants";
const { section } = genreVariants();
import Image from "next/image";
import { useVisibleItems } from "@/hooks/useVisibleItems";
import { Button } from "../../../button/Button";
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  Film,
  Smile,
  Heart,
  Zap,
  Rocket,
  Map,
  Palette,
  ShieldAlert,
  BookOpenCheck,
  Users,
  Sparkles,
  Landmark,
  Swords,
  Tv,
  Music,
  Ghost,
  Mountain,
  Box,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { IGenreSlide } from "./genreSlide.type";
import { fetchGenre } from "@/api/landing/fetchGenre";
import Link from "next/link";

const genres = [
  { label: "액션", icon: <Flame className="w-4 h-4 text-red-500" /> },
  { label: "모험", icon: <Map className="w-4 h-4 text-green-600" /> },
  { label: "애니메이션", icon: <Palette className="w-4 h-4 text-pink-400" /> },
  { label: "코미디", icon: <Smile className="w-4 h-4 text-yellow-400" /> },
  { label: "범죄", icon: <ShieldAlert className="w-4 h-4 text-red-500" /> },
  { label: "SF", icon: <Rocket className="w-4 h-4 text-purple-500" /> },
  { label: "드라마", icon: <Film className="w-4 h-4 text-blue-500" /> },
  { label: "가족", icon: <Users className="w-4 h-4 text-orange-400" /> },
  { label: "판타지", icon: <Sparkles className="w-4 h-4 text-purple-400" /> },
  { label: "역사", icon: <Landmark className="w-4 h-4 text-yellow-500" /> },
  { label: "공포", icon: <Ghost className="w-4 h-4 text-red-500" /> },
  { label: "음악", icon: <Music className="w-4 h-4 text-indigo-500" /> },
  {
    label: "미스터리",
    icon: <Box className="w-4 h-4 text-yellow-400" />,
  },
  { label: "로맨스", icon: <Heart className="w-4 h-4 text-pink-500" /> },

  { label: "TV 영화", icon: <Tv className="w-4 h-4 text-blue-500" /> },
  { label: "스릴러", icon: <Zap className="w-4 h-4 text-green-500" /> },
  { label: "전쟁", icon: <Swords className="w-4 h-4 text-red-500" /> }, // Swords가 없으면 대신 Sword, Shield, 또는 Bomb 등 사용
  { label: "서부", icon: <Mountain className="w-4 h-4 text-yellow-500" /> },
  {
    label: "다큐멘터리",
    icon: <BookOpenCheck className="w-4 h-4 text-emerald-600" />,
  },
  // Mountain이 없으면 대신 TreePalm, TreePine 등 사용
];

export const GenreSlide = () => {
  const [popularSlide, setPopularSlide] = useState(0);
  const visibleItems = useVisibleItems();
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchGenre().then((data) => {
      setPopularMovies(data);
    });
  }, []);
  // 인기 영화 데이터

  // 슬라이드 이동 함수
  const moveSlide = (
    direction: "prev" | "next",
    type: "popular" | "new" | "genre"
  ) => {
    const maxSlides = {
      popular: Math.max(0, popularMovies.length - visibleItems),
    };
    if (type === "popular") {
      if (direction === "prev") {
        setPopularSlide(Math.max(0, popularSlide - 1));
      } else {
        setPopularSlide(Math.min(maxSlides.popular, popularSlide + 1));
      }
    }
  };

  // 슬라이드 컨테이너 참조
  const popularRef = useRef<HTMLDivElement>(null);

  return (
    <section className={section()}>
      <div className="flex items-center justify-between mb-8 pt-10">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          장르별 영화
        </h3>
        <div className="flex space-x-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => moveSlide("prev", "popular")}
            disabled={popularSlide === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => moveSlide("next", "popular")}
            disabled={popularSlide >= popularMovies.length - visibleItems}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="relative">
        {/* 오른쪽 페이드 */}
        <div className="md:hidden pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-white/90 dark:from-black/80 to-transparent z-10" />

        <div
          className="
      flex gap-2 overflow-x-auto whitespace-nowrap flex-nowrap
      md:overflow-x-visible md:whitespace-normal md:flex-wrap
      py-2 snap-x snap-mandatory touch-pan-x scrollbar-hidden mb-8
    "
        >
          {genres.map((genre) => (
            <Button
              type="button"
              key={genre.label}
              variant="select"
              size="sm"
              className="font-regular-14 flex items-center gap-2"
              onClick={() => {}}
            >
              {genre.icon}
              {genre.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          ref={popularRef}
          className="flex transition-transform duration-300 ease-in-out mb-10"
          style={{
            transform: `translateX(-${popularSlide * (100 / visibleItems)}%)`,
          }}
        >
          {popularMovies.map((movie: IGenreSlide) => (
            <div
              key={movie.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <Link href={`/movie/${movie.id}`}>
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
                        variant="cardGenre"
                        size="md"
                        className="absolute top-2 left-2 z-20"
                      >
                        {
                          genres.find((genre) => genre.label === movie.genre)
                            ?.icon
                        }
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
