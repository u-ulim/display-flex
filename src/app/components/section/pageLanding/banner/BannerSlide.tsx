"use client";
import { useEffect, useState } from "react";
import { bannerVariants } from "./bannerVariants";
const { section, overlay } = bannerVariants();
import Image from "next/image";
import { Badge } from "../../../badge/Badge";
import { Button } from "../../../button/Button";
import { IHeroBanner } from "./bannerSlide.type";
import { Star } from "lucide-react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { fetchHeroBanners } from "@/api/landing/fetchHeroBanners";
import { TrailerModal } from "@/app/components/modal/trailer/TrailerModal";
import { useAutoPlayStore } from "@/store/useAutoPlayStore";

export const BannerSlide = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [heroBanners, setHeroBanners] = useState<IHeroBanner[]>([]);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const { isAutoPlayEnabled, pauseAllAutoPlay, resumeAllAutoPlay } =
    useAutoPlayStore();
  // 메인 배너 데이터

  useEffect(() => {
    fetchHeroBanners().then((data) => {
      setHeroBanners(data);
    });
  }, []);

  // 메인 배너 자동 슬라이드
  useEffect(() => {
    if (
      !isAutoPlayEnabled ||
      heroBanners.length === 0 ||
      openModalIndex !== null
    )
      return;

    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlayEnabled, heroBanners.length, openModalIndex]);

  useEffect(() => {
    if (currentBanner >= heroBanners.length) {
      setCurrentBanner(0);
    }
  }, [heroBanners.length]);

  return (
    <section className={section()}>
      {heroBanners.map((banner: IHeroBanner, index: number) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            currentBanner === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={banner.image || "/placeholder.svg"}
            alt={banner.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className={overlay()}></div>

          <div className="relative px-4 h-full flex items-center max-w-[1080px] mx-auto">
            <div className="text-white h-65 flex flex-col justify-between h-[270] z-20">
              <div>
                <Badge
                  className="font-medium-12 mb-4 w-fit"
                  variant="primary"
                  size="default"
                >
                  {banner.badge}
                </Badge>
                <h2 className="font-bold-38 mb-4 line-clamp-1">
                  {banner.title}
                </h2>
                <p className="font-regular-18 mb-6 w-full md:w-2/3 text-gray-200 line-clamp-2 !leading-6.5">
                  {banner.description}
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-regular-18">
                      {banner.rating}
                    </span>
                  </div>
                  <span className="font-regular-14 text-gray-300">
                    {banner.year}
                  </span>
                  <span className="font-regular-14 text-gray-300">
                    {banner.genre}
                  </span>
                </div>
                <Button
                  type="button"
                  className="bg-primary font-regular-14 w-32 h-10
          "
                  onClick={() => {
                    setOpenModalIndex(index);
                    pauseAllAutoPlay();
                  }}
                  variant="play"
                  size="sm"
                >
                  <Play className="w-4 h-4 mr-4" />
                  예고편 보기
                </Button>
              </div>
            </div>
          </div>
          <TrailerModal
            key={`trailer-${banner.id}`}
            isOpen={openModalIndex === index}
            onClose={() => {
              setOpenModalIndex(null);
              resumeAllAutoPlay();
            }}
            movieTitle={banner.title}
            trailerUrl={banner.trailerUrl}
            trailerThumbnailUrl={banner.trailerThumbnailUrl}
            year={banner.year}
            genres={banner.genres}
            runtime={banner.runtime}
            certification={banner.certification}
          />
        </div>
      ))}
      {/* Banner Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {heroBanners.map((_, index) => (
          <button
            key={index}
            className={`cursor-pointer w-3 h-3 rounded-full transition-colors z-20 ${
              currentBanner === index ? "bg-orange-600" : "bg-white/50"
            }`}
            onClick={() => {
              setCurrentBanner(index);
              if (openModalIndex === null) {
                pauseAllAutoPlay();
                setTimeout(() => resumeAllAutoPlay(), 10000);
              }
            }}
          />
        ))}
      </div>
      {/* Banner Arrows */}
      <Button
        type="button"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
        onClick={() => {
          setCurrentBanner(
            (prev) => (prev - 1 + heroBanners.length) % heroBanners.length
          );
          if (openModalIndex === null) {
            pauseAllAutoPlay();
            setTimeout(() => resumeAllAutoPlay(), 10000);
          }
        }}
        variant="arrow"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        type="button"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
        onClick={() => {
          setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
          if (openModalIndex === null) {
            pauseAllAutoPlay();
            setTimeout(() => resumeAllAutoPlay(), 10000);
          }
        }}
        variant="arrow"
      >
        {/* absolute left-4 top-1/2 transform -translate-y-1/2 */}
        <ChevronRight className="w-6 h-6" />
      </Button>
      d
    </section>
  );
};
