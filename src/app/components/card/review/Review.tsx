"use client";

import { Card } from "../Card";
import { genreVariants } from "./reviewVariants";
import Image from "next/image";
import { Star, User, Loader2 } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { fetchReviews, ReviewData } from "../../../../api/landing/fetchReviews";

const { section } = genreVariants();

export const Review = () => {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );

  const observer = useRef<IntersectionObserver>(null);
  const loadingRef = useRef(false);

  const lastReviewElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loadingRef.current) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prev) => prev + 1);
          }
        },
        {
          rootMargin: "500px", // 150px 전에 미리 로딩 시작
        }
      );
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  const handleImageError = (reviewId: number) => {
    setImageErrors((prev) => ({ ...prev, [reviewId]: true }));
  };

  const loadReviews = useCallback(
    async (pageNum: number, isInitial = false) => {
      if (loadingRef.current) return;

      loadingRef.current = true;
      setLoading(true);
      try {
        const newReviews = await fetchReviews(pageNum, 3);

        if (newReviews.length === 0) {
          setHasMore(false);
        } else {
          setReviews((prev) =>
            isInitial ? newReviews : [...prev, ...newReviews]
          );
          if (newReviews.length < 3) {
            setHasMore(false);
          }
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        loadingRef.current = false;
        setLoading(false);
      }
    },
    []
  );

  // 초기 데이터 로드
  useEffect(() => {
    loadReviews(1, true);
  }, [loadReviews]);

  // 페이지 변경시 추가 데이터 로드
  useEffect(() => {
    if (page > 1) {
      loadReviews(page);
    }
  }, [page, loadReviews]);

  return (
    <section className={section()}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        리뷰어들의 리뷰
      </h3>
      <div className="space-y-6 mb-10">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            ref={index === reviews.length - 1 ? lastReviewElementRef : null}
          >
            <Card
              className="p-6 cursor-pointer hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600"
              onClick={() => {}}
            >
              <div className="flex items-center gap-4 space-x-4">
                <div className="bg-gray-200 dark:bg-gray-600 flex-shrink-0 rounded-md">
                  <Image
                    src={review.moviePoster}
                    alt={`${review.movieTitle} 포스터`}
                    width={76}
                    height={116}
                    className="object-cover rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>

                <div className="h-16 border-l border-gray-300 dark:border-gray-600"></div>

                <div className="hidden md:flex items-center text-gray-500 dark:text-gray-400">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-100 rounded-full flex-shrink-0 mr-1 flex items-center justify-center">
                    {imageErrors[review.id] || !review.userAvatar ? (
                      <User className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                    ) : (
                      <Image
                        src={review.userAvatar}
                        alt="User avatar"
                        width={24}
                        height={24}
                        className="object-cover rounded-full"
                        onError={() => handleImageError(review.id)}
                      />
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between w-full">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {review.movieTitle}
                      </h4>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-900 dark:text-white">
                          {review.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 h-12">
                      "{review.reviewText}"
                    </p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <div className="md:hidden w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex-shrink-0 mr-1 flex items-center justify-center">
                        {imageErrors[review.id] || !review.userAvatar ? (
                          <User className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                        ) : (
                          <Image
                            src={review.userAvatar}
                            alt="User avatar"
                            width={24}
                            height={24}
                            className="object-cover rounded-full"
                            onError={() => handleImageError(review.id)}
                          />
                        )}
                      </div>
                      <span className="font-regular-14 pt-0.5">
                        {review.userNickname}
                      </span>
                      <span className="mx-2 pt-0.5">•</span>
                      <span className="font-medium-12 pt-0.5">
                        {review.createdAt}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}

        {loading && (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            <span className="ml-2 text-gray-500 dark:text-gray-400">
              리뷰를 불러오는 중...
            </span>
          </div>
        )}

        {!hasMore && reviews.length > 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            모든 리뷰를 불러왔습니다.
          </div>
        )}
      </div>
    </section>
  );
};
