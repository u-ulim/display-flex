"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { MovieDetail } from "@/api/detail/fetchMovieDetail";
import { fetchMovieDetail } from "@/api/detail/fetchMovieDetail";
import { DetailHeader } from "./components/detailHeader";
import { DetailActor } from "./components/detailActor";
import { DetailReview } from "./components/detailReview";
import { DetailSimilar } from "./components/detailSimilar";

export default function DetailPage() {
  const params = useParams();
  const movieId = params.id as string;

  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovieData = async () => {
      try {
        setLoading(true);
        setError(null);
        const movieData = await fetchMovieDetail(movieId);

        if (!movieData) {
          setError("영화를 찾을 수 없습니다.");
          return;
        }

        setMovie(movieData);
      } catch (err) {
        setError("영화 정보를 불러오는 중 오류가 발생했습니다.");
        console.error("Error fetching movie:", err);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      loadMovieData();
    }
  }, [movieId]);

  if (loading) {
    return (
      <main className="max-w-[1080px] min-h-screen mx-auto bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">
            영화 정보를 불러오는 중...
          </p>
        </div>
      </main>
    );
  }

  if (error || !movie) {
    return (
      <main className="max-w-[1080px] min-h-screen mx-auto bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {error || "영화를 찾을 수 없습니다"}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            요청하신 영화 정보를 찾을 수 없습니다.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
          >
            이전 페이지로 돌아가기
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-[1080px] min-h-screen mx-auto bg-gray-50 dark:bg-gray-900">
      <DetailHeader movie={movie} />
      <DetailActor cast={movie.cast} />
      <DetailReview reviews={movie.reviews} />
      <DetailSimilar similarMovies={movie.similarMovies} />
    </main>
  );
}
