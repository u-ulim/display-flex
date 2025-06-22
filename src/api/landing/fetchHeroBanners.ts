import {
  fetchCertification,
  fetchTrailerUrl,
  IGenre,
} from "../common/movieUtils";

export interface IHeroBanner {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  genres: IGenre[];
  backdrop_path: string;
  trailerUrl: string;
  trailerThumbnailUrl: string;
  runtime: number;
  certification: string;
}

// 시청 가능 연령 정보를 가져오는 함수

// 트레일러 정보를 가져오는 함수

export async function fetchHeroBanners() {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR&page=1`
  );

  const data = await res.json();

  // 각 영화에 대해 상세 정보, 트레일러, 시청 등급 정보를 병렬로 가져오기
  const moviesWithTrailers = await Promise.all(
    data.results.slice(0, 5).map(async (movie: any) => {
      const [trailerUrl, movieDetail, certification] = await Promise.all([
        fetchTrailerUrl(movie.id, TMDB_API_KEY!),
        fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${TMDB_API_KEY}&language=ko-KR`
        ).then((res) => res.json()),
        fetchCertification(movie.id, TMDB_API_KEY!),
      ]);

      return {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        badge: "추천 영화", // 필요에 따라 가공
        rating: `${movie.vote_average.toFixed(1)}`,
        year: movie.release_date?.slice(0, 4),
        genre: movieDetail.genres?.[0]?.name || "기타",
        genres: movieDetail.genres?.map((g: IGenre) => g.name) || [],
        image: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        trailerUrl,
        trailerThumbnailUrl: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        runtime: movieDetail.runtime || 0,
        certification,
      };
    })
  );

  return moviesWithTrailers;
}
