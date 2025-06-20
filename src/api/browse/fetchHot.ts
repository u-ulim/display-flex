"use client";
export interface IHot {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  ranking: number;
}

export async function fetchHot() {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  // 실제 TMDB trending API에서 데이터 가져오기
  const trendingRes = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&language=ko-KR`
  );

  const trendingData = await trendingRes.json();

  // trending 영화 데이터 가공
  const trendingMovies = trendingData.results
    .slice(0, 10)
    .map((movie: IHot, index: number) => ({
      id: movie.id,
      title: movie.title,
      year: movie.release_date?.slice(0, 4) || "2025",
      rating: movie.vote_average.toFixed(1),
      image: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/placeholder.svg",
      ranking: index + 1, // 순위 추가
    }));

  // 영화, 컬렉션, 트렌딩 데이터 모두 반환
  return {
    trendingMovies,
  };
}
