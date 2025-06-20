import { IDetailReviewProps } from "./detailReviewtype";
import { detailReviewVariants } from "./detailReviewVariants";
import Image from "next/image";
import { Button } from "@/app/components/button";
import { Star, UserRound } from "lucide-react";
import { useState } from "react";
import { Card } from "@/app/components/card";

export const DetailReview = ({ reviews }: IDetailReviewProps) => {
  const { section } = detailReviewVariants();

  const [visibleReviews, setVisibleReviews] = useState(3); // 처음에 3개만 보이기
  const [loading, setLoading] = useState(false);
  // const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);

    // 로딩 효과를 위한 딜레이 (실제로는 API 호출)
    setTimeout(() => {
      setVisibleReviews((prev) => prev + 3);
      setLoading(false);
    }, 500);
  };

  const displayedReviews = reviews.slice(0, visibleReviews);
  const hasMoreReviews = visibleReviews < reviews.length;

  return (
    <section className={section()}>
      <div className="flex items-center justify-between mb-10">
        <h3 className="font-bold-20 text-gray-900 dark:text-white">
          리뷰 ({reviews.length})
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
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex-shrink-0 flex items-center justify-center">
                {review &&
                review.image &&
                review.image !== "/placeholder.svg" ? (
                  <Image
                    src={review.image}
                    alt={review.user}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <UserRound
                    className="w-6 h-6 text-gray-400"
                    aria-label="No image"
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {review.user}
                    </h4>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 font-regular-14 text-gray-900 dark:text-white">
                        {review.rating}
                      </span>
                    </div>
                  </div>
                  <span className="font-regular-14 text-gray-500 dark:text-gray-400">
                    {review.date}
                  </span>
                </div>
                <p className="font-regular-14 text-gray-700 dark:text-gray-300 mb-3 line-clamp-2 md:line-clamp-none">
                  {review.content}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <button className="font-medium-12 hover:text-orange-600 dark:hover:text-orange-400">
                    도움이 됨 ({review.helpfulCount})
                  </button>
                  <button className="font-medium-12 hover:text-orange-600 dark:hover:text-orange-400">
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
                <span className="font-regular-14 text-gray-600 dark:text-gray-300">
                  로딩 중...
                </span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <span className="font-regular-14 text-gray-700 dark:text-gray-300 font-medium group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  리뷰 더보기
                </span>
                <span className="font-medium-12 bg-orange-500 text-white px-2 py-0.5 rounded-full">
                  +{reviews.length - visibleReviews}
                </span>
              </div>
            )}
          </Button>
        </div>
      )}

      {/* 모든 리뷰를 다 봤을 때 */}
      {!hasMoreReviews && reviews.length > 3 && (
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
          모든 리뷰를 확인했습니다.
        </div>
      )}
    </section>
  );
};
