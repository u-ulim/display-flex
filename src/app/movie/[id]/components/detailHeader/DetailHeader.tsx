import { cn } from "tailwind-variants";
import { IDetailHeaderProps } from "./detailHeader.type";
import { detailHeaderVariants } from "./detailHeaderVariants";
import Image from "next/image";
import { Badge } from "@/app/components/badge";
import { Button } from "@/app/components/button";
import { Star, Calendar, Clock, Heart, Share2, Play } from "lucide-react";
import { useState } from "react";

export const DetailHeader = ({ movie, className }: IDetailHeaderProps) => {
  const { section } = detailHeaderVariants();
  const [watchlistModalOpen, setWatchlistModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  return (
    <section className={section()}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Movie Poster */}
        <div className="lg:col-span-1">
          <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={movie.image}
              alt={`${movie.title} 포스터`}
              width={400}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Movie Details */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                {movie.genre.map((genre, index) => (
                  <Badge
                    key={index}
                    variant={index === 0 ? "primary" : "default"}
                    size="default"
                    className="font-sb-12"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
              <h1 className="font-bold-32 text-gray-900 mb-4">{movie.title}</h1>
              <div className="flex items-center space-x-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-sb-20 text-gray-900">
                    {movie.rating}
                  </span>
                  <span>({movie.reviews.length} 리뷰)</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{movie.duration}분</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed line-clamp-2 md:line-clamp-none">
                {movie.description}
              </p>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <Button
                type="button"
                className="bg-primary font-regular-14 w-32 md:w-40"
                onClick={() => console.log("clicked")}
                variant="play"
                size="md"
              >
                <Play className="w-4 h-4 mr-2 md:mr-4" />
                예고편 보기
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setWatchlistModalOpen(true)}
                size="md"
                className="font-regular-14"
              >
                <Heart className="w-4 h-4 mr-2 md:mr-4" />
                찜하기
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShareModalOpen(true)}
                size="md"
                className="font-regular-14"
              >
                <Share2 className="w-4 h-4 mr-2 md:mr-4" />
                공유하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
