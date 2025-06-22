export interface INews {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  backdrop_path: string;
}
export async function fetchNews() {
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

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=ko-KR&page=1`
  );

  const data = await res.json();
  // 필요한 데이터만 가공
  return data.results.slice(0, 12).map((movie: INews) => ({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    badge: "추천 영화", // 필요에 따라 가공
    rating: `${movie.vote_average.toFixed(1)}`,
    year: movie.release_date?.slice(0, 4),
    genre: GENRE_MAP[movie.genre_ids[0]] || "기타",
    image: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
  }));
}
