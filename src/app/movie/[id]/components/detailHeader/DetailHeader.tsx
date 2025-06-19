import { cn } from "tailwind-variants";
import { IDetailHeaderProps } from "./detailHeader.type";
import { detailHeaderVariants } from "./detailHeaderVariants";
import Image from "next/image";
import { Badge } from "@/app/components/badge";
import { Button } from "@/app/components/button";
import { Star, Calendar, Clock, Heart, Share2, Play } from "lucide-react";
import { useState } from "react";

export const DetailHeader = () => {
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
              src="/placeholder.svg"
              alt="Movie Poster"
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
                <Badge variant="primary" size="default" className="font-sb-12">
                  액션
                </Badge>
                <Badge className="font-sb-12" variant="default" size="default">
                  드라마
                </Badge>
              </div>
              <h1 className="font-bold-32 text-gray-900 mb-4">오펜하이머</h1>
              <div className="flex items-center space-x-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-sb-20 text-gray-900">8.9</span>
                  <span>(1,234 리뷰)</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2023</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>180분</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed">
                1942년, 맨해튼 프로젝트의 일환으로 로스 알라모스 연구소에서
                원자폭탄 개발을 지휘하게 된 물리학자 로버트 오펜하이머. 그는
                나치 독일보다 먼저 핵무기를 완성시키기 위해 동료 과학자들과 함께
                인류 역사상 가장 강력한 무기를 만들어낸다. 하지만 원자폭탄이
                실제로 사용되면서 그는 자신이 만든 무기의 파괴력에 충격을 받고,
                핵무기 확산을 막기 위해 노력하지만 정치적 탄압을 받게 되는데...
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
