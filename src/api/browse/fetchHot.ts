"use client";
export async function fetchHot() {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

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

  // 실제 TMDB trending API에서 데이터 가져오기
  const trendingRes = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&language=ko-KR`
  );

  const trendingData = await trendingRes.json();

  // trending 영화 데이터 가공
  const trendingMovies = trendingData.results
    .slice(0, 10)
    .map((movie: any, index: number) => ({
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
