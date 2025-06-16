"use client";
import { Badge } from "./Badge";
import {
  BookOpenCheck,
  Film,
  Palette,
  Flame,
  Heart,
  Rocket,
  ShieldAlert,
  Smile,
  Star,
  Users,
  Zap,
  Sparkles,
  Landmark,
  Music,
  Search,
  Tv,
  Swords,
  Mountain,
  Ghost,
  Map,
  CircleHelp,
  Box,
} from "lucide-react";

const GENRE_MAP: Record<number, string> = {
  28: "액션",
  12: "모험",
  16: "애니메이션",
  35: "코미디",
  80: "범죄",
  99: "다큐멘터리", // 추가!
  18: "드라마",
  10751: "가족",
  14: "판타지",
  36: "역사",
  27: "공포",
  10402: "음악",
  9648: "미스터리",
  10749: "로맨스",
  878: "SF",
  10770: "TV 영화",
  53: "스릴러",
  10752: "전쟁",
  37: "서부",
};

const genres = [
  { label: "액션", icon: <Flame className="w-4 h-4 text-red-500" /> },
  { label: "모험", icon: <Map className="w-4 h-4 text-green-600" /> },
  { label: "애니메이션", icon: <Palette className="w-4 h-4 text-pink-400" /> },
  { label: "코미디", icon: <Smile className="w-4 h-4 text-yellow-400" /> },
  { label: "범죄", icon: <ShieldAlert className="w-4 h-4 text-red-500" /> },
  {
    label: "다큐멘터리",
    icon: <BookOpenCheck className="w-4 h-4 text-emerald-600" />,
  },
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
  { label: "SF", icon: <Rocket className="w-4 h-4 text-purple-500" /> },
  { label: "TV 영화", icon: <Tv className="w-4 h-4 text-blue-500" /> },
  { label: "스릴러", icon: <Zap className="w-4 h-4 text-green-500" /> },
  { label: "전쟁", icon: <Swords className="w-4 h-4 text-red-500" /> }, // Swords가 없으면 대신 Sword, Shield, 또는 Bomb 등 사용
  { label: "서부", icon: <Mountain className="w-4 h-4 text-yellow-500" /> }, // Mountain이 없으면 대신 TreePalm, TreePine 등 사용
];

export default function BadgePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Badge
        className="font-medium-12 
          "
        variant="primary"
        size="default"
      >
        추천 영화
      </Badge>
      <Badge
        className="font-medium-12 
          "
        variant="default"
        size="default"
      >
        기대작
      </Badge>
      <Badge
        className="font-sb-12
        !bg-green-500 !text-white
          "
        variant="default"
        size="default"
      >
        NEW
      </Badge>
      <Badge
        className="font-medium-12 
          "
        variant="cardRanking"
        size="sm"
      >
        #1
      </Badge>
      <Badge
        className="font-bold-14 bg-blue-500 
          "
        variant="cardRating"
        size="md"
      >
        <span className="relative top-[1px]">8.6</span>
      </Badge>
      <Badge
        className="font-bold-14 bg-blue-500 
          "
        variant="cardRating"
        size="md"
      >
        <Star className="w-3 h-3 mr-2 text-yellow-300  fill-yellow-300" />
        <span className="relative top-[1px]">8.6</span>
      </Badge>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <Badge
            key={genre.label}
            className="font-bold-14 bg-blue-500 
          "
            variant="cardGenre"
            size="md"
          >
            {genre.icon}
          </Badge>
        ))}
      </div>
    </div>
  );
}
