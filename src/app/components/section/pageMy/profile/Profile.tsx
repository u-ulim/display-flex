import { profileVariants } from "./profileVariants";
import { Card } from "@/app/components/card";
import { Badge } from "@/app/components/badge";
import { Button } from "@/app/components/button";
import Image from "next/image";
import { LucideImage, SquarePen } from "lucide-react";

const { section } = profileVariants();
const movie = {
  image: "/placeholder.svg",
  title: "영화 제목",
};

export const Profile = () => {
  return (
    <section className={section()}>
      <Card className="p-4 md:p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="flex items-center mb-6 space-x-2 md:space-x-4">
          <div className="w-10 h-10 md:w-20 md:h-20 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex items-center justify-center">
            {movie && movie.image && movie.image !== "/placeholder.svg" ? (
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            ) : (
              <LucideImage
                className="w-12 h-12 text-gray-400"
                aria-label="No image"
              />
            )}
          </div>
          <div className="flex-1">
            <h2 className="font-bold-20 text-gray-900 dark:text-white mb-1">
              김영화
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2 font-regular-16">
              movie.lover@email.com
            </p>
            <div className="flex items-center space-x-2">
              <Badge variant="primary" size="default" className="font-sb-12">
                프리미엄 멤버
              </Badge>
              <Badge
                variant="default"
                size="default"
                className="font-sb-12 dark:border-gray-600 dark:text-gray-300"
              >
                실버 등급
              </Badge>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="font-regular-12 dark:border-gray-600 dark:text-gray-300"
          >
            <SquarePen className="w-4 h-4 mr-3" />
            편집
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="font-bold-24 text-orange-600 mb-2">127</div>
            <div className="font-medium-12 text-gray-600 dark:text-gray-300">
              찜한 영화
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold-24 text-green-600 mb-2">89</div>
            <div className="font-medium-12 text-gray-600 dark:text-gray-300">
              작성 리뷰
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold-24 text-purple-600 mb-2">2,450</div>
            <div className="font-medium-12 text-gray-600 dark:text-gray-300">
              포인트
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold-24 text-yellow-600 mb-2">4.8</div>
            <div className="font-medium-12 text-gray-600 dark:text-gray-300">
              평균 평점
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
