import { cn } from "tailwind-variants";
import { IDetailHeaderProps } from "./detailReviewtype";
import { detailReviewVariants } from "./detailReviewVariants";
import Image from "next/image";
import { Badge } from "@/app/components/badge";
import { Button } from "@/app/components/button";
import { Star, Calendar, Clock, Heart, Share2, Play } from "lucide-react";
import { useState } from "react";
import { Card } from "@/app/components/card";
import { CardContent } from "@/app/components/cardContent";

export const DetailReview = () => {
  const { section } = detailReviewVariants();

  const [visibleReviews, setVisibleReviews] = useState(3); // 처음에 3개만 보이기
  const [loading, setLoading] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const allReviews = [
    {
      id: 1,
      user: "사용자1",
      rating: 9.1,
      date: "2024.01.11",
      content:
        "크리스토퍼 놀란 감독의 역작이라고 할 수 있습니다. 킬리언 머피의 연기가 정말 인상적이었고, 원자폭탄 개발이라는 무거운 주제를 깊이 있게 다뤘습니다. 영상미와 사운드도 훌륭했어요.",
      helpfulCount: 12,
    },
    {
      id: 2,
      user: "사용자2",
      rating: 9.2,
      date: "2024.01.12",
      content:
        "역사적 사실을 바탕으로 한 드라마가 이렇게 몰입도 높을 수 있다니. 특히 마지막 장면에서의 연출이 소름끼쳤습니다.",
      helpfulCount: 8,
    },
    {
      id: 3,
      user: "사용자3",
      rating: 9.3,
      date: "2024.01.13",
      content:
        "3시간이라는 긴 러닝타임이 전혀 지루하지 않았습니다. 오펜하이머의 내적 갈등이 잘 표현되었어요.",
      helpfulCount: 15,
    },
    {
      id: 4,
      user: "사용자4",
      rating: 8.9,
      date: "2024.01.14",
      content:
        "시각적 효과가 정말 대단했습니다. CGI 없이도 이런 영상을 만들 수 있다는 게 놀라워요.",
      helpfulCount: 6,
    },
    {
      id: 5,
      user: "사용자5",
      rating: 9.0,
      date: "2024.01.15",
      content:
        "과학자의 윤리적 딜레마를 깊이 있게 다룬 작품. 생각할 거리가 많은 영화입니다.",
      helpfulCount: 10,
    },
    {
      id: 6,
      user: "사용자6",
      rating: 8.8,
      date: "2024.01.16",
      content:
        "배우들의 연기가 모두 훌륭했습니다. 특히 로버트 다우니 주니어의 연기가 인상적이었어요.",
      helpfulCount: 7,
    },
    {
      id: 7,
      user: "사용자7",
      rating: 9.0,
      date: "2024.01.15",
      content:
        "과학자의 윤리적 딜레마를 깊이 있게 다룬 작품. 생각할 거리가 많은 영화입니다.",
      helpfulCount: 10,
    },
    {
      id: 8,
      user: "사용자8",
      rating: 8.8,
      date: "2024.01.16",
      content:
        "배우들의 연기가 모두 훌륭했습니다. 특히 로버트 다우니 주니어의 연기가 인상적이었어요.",
      helpfulCount: 7,
    },
  ];

  const handleLoadMore = () => {
    setLoading(true);

    // 로딩 효과를 위한 딜레이 (실제로는 API 호출)
    setTimeout(() => {
      setVisibleReviews((prev) => prev + 3);
      setLoading(false);
    }, 500);
  };

  const displayedReviews = allReviews.slice(0, visibleReviews);
  const hasMoreReviews = visibleReviews < allReviews.length;

  return (
    <section className={section()}>
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          리뷰 ({allReviews.length})
        </h3>
        <Button
          type="button"
          className="font-regular-14"
          variant="allView"
          size="sm"
        >
          리뷰 작성하기
        </Button>
      </div>

      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <Card key={review.id} className="p-6">
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
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {review.user}
                    </h4>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-900 dark:text-white">
                        {review.rating}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {review.date}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {review.content}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <button className="hover:text-orange-600 dark:hover:text-orange-400">
                    도움이 됨 ({review.helpfulCount})
                  </button>
                  <button className="hover:text-orange-600 dark:hover:text-orange-400">
                    답글
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* 더보기 버튼 */}
      {hasMoreReviews && (
        <div className="flex justify-center mt-8">
          <Button
            type="button"
            variant="more"
            onClick={handleLoadMore}
            disabled={loading}
            className="font-regular-14"
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  로딩 중...
                </span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  리뷰 더보기
                </span>
                <span className="bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                  +{allReviews.length - visibleReviews}
                </span>
              </div>
            )}
          </Button>
        </div>
      )}

      {/* 모든 리뷰를 다 봤을 때 */}
      {!hasMoreReviews && allReviews.length > 3 && (
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
          모든 리뷰를 확인했습니다.
        </div>
      )}
    </section>
  );
};
