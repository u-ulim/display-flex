export interface MovieDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  year: number;
  genre: string[];
  duration: number;
  director: string;
  cast: {
    id: number;
    name: string;
    character: string;
    image: string;
  }[];
  reviews: {
    id: number;
    user: string;
    rating: number;
    date: string;
    content: string;
    helpfulCount: number;
  }[];
  similarMovies: {
    id: number;
    title: string;
    image: string;
    rating: number;
    year: number;
  }[];
}
export interface IGenre {
  id: number;
  name: string;
}
export interface ICrew {
  id: number;
  name: string;
  job: string;
}
export interface ICast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}
export interface IReview {
  id: number;
  author: string;
  author_details: {
    rating: number;
  };
  content: string;
  created_at: string;
}
export interface ISimilarMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}
export async function fetchMovieDetail(
  movieId: string
): Promise<MovieDetail | null> {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!TMDB_API_KEY) {
    console.error("❌ TMDB API key is missing");
    return null;
  }

  try {
    console.log("🎬 Fetching movie from TMDB with ID:", movieId);

    // TMDB API 호출
    const [movieResponse, creditsResponse, reviewsResponse, similarResponse] =
      await Promise.all([
        // 영화 기본 정보
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=ko-KR`
        ),
        // 출연진 정보
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${TMDB_API_KEY}`
        ),
        // 리뷰 정보
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        ),
        // 비슷한 영화
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${TMDB_API_KEY}&language=ko-KR&page=1`
        ),
      ]);

    if (!movieResponse.ok) {
      console.log("❌ Movie not found for ID:", movieId);
      return null;
    }

    const [movieData, creditsData, reviewsData, similarData] =
      await Promise.all([
        movieResponse.json(),
        creditsResponse.json(),
        reviewsResponse.json(),
        similarResponse.json(),
      ]);

    // TMDB 데이터를 우리 인터페이스에 맞게 변환
    const transformedMovie: MovieDetail = {
      id: movieData.id,
      title: movieData.title,
      description: movieData.overview || "설명이 없습니다.",
      image: movieData.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
        : "/placeholder.svg",
      rating: Math.round(movieData.vote_average * 10) / 10,
      year: new Date(movieData.release_date).getFullYear(),
      genre: movieData.genres?.map((g: IGenre) => g.name) || [],
      duration: movieData.runtime || 0,
      director:
        creditsData.crew?.find((person: ICrew) => person.job === "Director")
          ?.name || "정보 없음",
      cast:
        creditsData.cast?.slice(0, 6).map((actor: ICast) => ({
          id: actor.id,
          name: actor.name,
          character: actor.character,
          image: actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : "/placeholder.svg",
        })) || [],
      reviews:
        reviewsData.results
          ?.slice(0, 5)
          .map((review: IReview, index: number) => ({
            id: index + 1,
            user: review.author,
            rating:
              review.author_details?.rating ||
              Math.round(Math.random() * 5 + 5),
            date: new Date(review.created_at).toLocaleDateString("ko-KR"),
            content:
              review.content.length > 300
                ? review.content.substring(0, 300) + "..."
                : review.content,
            helpfulCount: Math.floor(Math.random() * 20) + 1,
          })) || [],
      similarMovies:
        similarData.results?.slice(0, 8).map((movie: ISimilarMovie) => ({
          id: movie.id,
          title: movie.title,
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : "/placeholder.svg",
          rating: Math.round(movie.vote_average * 10) / 10,
          year: new Date(movie.release_date).getFullYear(),
        })) || [],
    };

    console.log("✅ Movie found from TMDB:", transformedMovie.title);
    return transformedMovie;
  } catch (error) {
    console.error("❌ Failed to fetch movie from TMDB:", error);

    return null;
  }
}

// 실제 API 호출 버전 (나중에 사용)
/*
export async function fetchMovieDetail(movieId: string): Promise<MovieDetail | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movie/${movieId}`);
    
    if (!response.ok) {
      throw new Error('Movie not found');
    }
    
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error('Failed to fetch movie detail:', error);
    return null;
  }
}
*/
