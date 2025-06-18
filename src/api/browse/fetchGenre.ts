"use client";
export async function fetchCollection() {
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

  // 영화 데이터 가져오기
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=ko-KR&page=1`
  );

  // 실제 TMDB 컬렉션 데이터 가져오기
  const collectionsData = await Promise.all([
    // 다크 나이트 컬렉션 (크리스토퍼 놀란)
    // 토이 스토리 컬렉션 (애니메이션 대표)
    fetch(
      `https://api.themoviedb.org/3/collection/10194?api_key=${TMDB_API_KEY}&language=ko-KR`
    ),

    fetch(
      `https://api.themoviedb.org/3/collection/263?api_key=${TMDB_API_KEY}&language=ko-KR`
    ),
    // 마블 시네마틱 유니버스 (아이언맨 컬렉션으로 대체)
    fetch(
      `https://api.themoviedb.org/3/collection/131295?api_key=${TMDB_API_KEY}&language=ko-KR`
    ),
  ]);

  const collections = await Promise.all(
    collectionsData.map(async (response) => {
      const data = await response.json();
      return {
        id: data.id,
        title: data.name || data.title,
        description: data.overview || "훌륭한 영화 컬렉션",
        count: `+${data.parts?.length || 0}개 영화`,
        image: data.backdrop_path
          ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
          : "/placeholder.svg",
      };
    })
  );

  const data = await res.json();

  // 영화 데이터 가공
  const movies = data.results.slice(0, 12).map((movie: any, idx: number) => ({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    badge: "추천 영화",
    rating: `${movie.vote_average.toFixed(1)}`,
    year: movie.release_date?.slice(0, 4),
    genre: GENRE_MAP[movie.genre_ids[0]] || "기타",
    image: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
  }));

  // 영화와 컬렉션 데이터 모두 반환
  return {
    collections,
  };
}
